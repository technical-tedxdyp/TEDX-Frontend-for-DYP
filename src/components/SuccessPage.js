//

import { useSearchParams, useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const TICKET_BG =
  "https://res.cloudinary.com/dv176bx4n/image/upload/v1755889119/theme_qxws4n.jpg";
const LOGO_ICON_PRIMARY =
  "https://res.cloudinary.com/doyldj2th/image/upload/v1756206220/Group_25_1__11zon_1_cniji0.png";
const LOGO_ICON_FALLBACK =
  "https://seeklogo.com/images/T/tedx-logo-5056CD3A71-seeklogo.com.png";

const API_BASE_URL = "https://backend-of-tedx-website-on-render.onrender.com";
const ENABLE_EMAIL_SEND = true;

const SuccessPage = () => {
  const [params, setParams] = useSearchParams();
  const ticketRef = useRef(null);
  const navigate = useNavigate();

  const [ticketId] = useState(
    params.get("ticketId") ||
      "TEDX-" + Math.random().toString(36).slice(2, 8).toUpperCase()
  );

  const name = params.get("name") || "Guest";
  const email = params.get("email") || "guest@example.com";
  const phone = params.get("phone") || "0000000000";
  const amount = params.get("amount") || params.get("price") || "";

  // Session recovery
  const [sessionRaw, setSessionRaw] = useState(params.get("session") || "");
  useEffect(() => {
    const needsFetch =
      (!sessionRaw || sessionRaw.trim() === "") &&
      ticketId &&
      ENABLE_EMAIL_SEND;
    if (!needsFetch) return;
    fetch(`${API_BASE_URL}/api/tickets/${encodeURIComponent(ticketId)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((t) => {
        if (!t || !t.session) return;
        setSessionRaw(String(t.session));
        const next = new URLSearchParams(params);
        next.set("session", String(t.session));
        setParams(next, { replace: true });
      })
      .catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ticketId]);

  // Session normalization
  const s = (sessionRaw || "").trim();
  const lower = s.toLowerCase();
  const session =
    lower === "morning"
      ? "morning"
      : lower === "evening"
      ? "evening"
      : lower === "fullday" ||
        lower === "full day" ||
        lower === "full_day" ||
        lower === "full-day" ||
        lower === "full"
      ? "fullday"
      : s;

  const sessionLabel =
    session.toLowerCase() === "morning"
      ? "Morning"
      : session.toLowerCase() === "evening"
      ? "Evening"
      : session.toLowerCase() === "fullday"
      ? "Full Day"
      : s
      ? s
      : "";

  const [logoSrc, setLogoSrc] = useState(LOGO_ICON_PRIMARY);

  // QR data
  const qrData = JSON.stringify({
    ticketId,
    name,
    email,
    phone,
    amount,
    session,
    sessionLabel,
  });

  // Wait for images to load
  const waitForImages = async (root) => {
    const imgs = root.querySelectorAll("img");
    await Promise.all(
      Array.from(imgs).map(
        (img) =>
          new Promise((resolve) => {
            img.setAttribute("crossorigin", "anonymous");
            if (img.complete) resolve();
            else {
              const done = () => {
                img.removeEventListener("load", done);
                img.removeEventListener("error", done);
                resolve();
              };
              img.addEventListener("load", done);
              img.addEventListener("error", done);
            }
          })
      )
    );
  };

  // Capture PDF
  const captureToPdf = async () => {
    if (!ticketRef.current) return null;
    await waitForImages(ticketRef.current);
    const canvas = await html2canvas(ticketRef.current, {
      scale: 3,
      useCORS: true,
      allowTaint: false,
      backgroundColor: null,
      imageTimeout: 8000,
      foreignObjectRendering: false,
      logging: false,
      width: ticketRef.current.offsetWidth,
      height: ticketRef.current.offsetHeight,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdfWidth = canvas.width * 0.264583;
    const pdfHeight = canvas.height * 0.264583;

    const pdf = new jsPDF("portrait", "mm", [pdfWidth, pdfHeight]);
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    return { imgData, pdf };
  };

  // UPDATED: Better debugging for Payment ID and Session
  const generateAndSendTicket = async (downloadOnly = false) => {
    try {
      const result = await captureToPdf();
      if (!result) return;
      const { imgData, pdf } = result;

      if (downloadOnly || !ENABLE_EMAIL_SEND) {
        pdf.save(`${ticketId}.pdf`);
        return;
      }

      // Extract clean base64 string (no data: prefix)
      const pdfBase64 = pdf.output("datauristring").split(",")[1];
      const razorpayPaymentId = params.get("razorpayPaymentId") || "";

      // CRITICAL DEBUG: Log all values being sent
      console.log("🔍 DEBUG - SuccessPage sending to backend:", {
        email,
        name,
        session, // This should show the session
        sessionRaw, // This shows the raw session from URL
        sessionLabel, // This shows the formatted label
        ticketId,
        razorpayPaymentId, // This should show the Payment ID
        hasTicketImage: !!imgData,
        hasPdfBase64: !!pdfBase64,
        allURLParams: Object.fromEntries(params.entries()) // All URL parameters
      });

      console.log("📧 Sending client-generated PDF to backend for email...");

      // Send to backend with correct field names
      await fetch(`${API_BASE_URL}/api/payment/send-ticket`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          phone,
          amount,
          session, // Pass the normalized session
          ticketId,
          ticketImage: imgData, // PNG image
          pdfBase64, // RAW base64 string (no data: prefix)
          useClientPdf: true, // FLAG to tell backend to use client PDF
          razorpayPaymentId: razorpayPaymentId || "" // Payment ID from URL
        }),
      }).catch((err) => {
        console.error("❌ Failed to send ticket via API:", err);
      });

      // Also download locally
      pdf.save(`${ticketId}.pdf`);
      
    } catch (err) {
      console.error("❌ Failed to generate/email ticket:", err);
      const result = await captureToPdf().catch(() => null);
      if (result) result.pdf.save(`${ticketId}.pdf`);
    }
  };

  // Auto-send on mount
  useEffect(() => {
    if (!sessionLabel) return; // Wait for session to be available
    
    const timer = setTimeout(() => {
      console.log("🚀 Auto-sending ticket with session:", sessionLabel);
      generateAndSendTicket(false);
    }, 1200); // Increased delay to ensure everything is rendered
    
    return () => clearTimeout(timer);
  }, [sessionLabel]); // Trigger when session is ready

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#191919",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}>
      <h1
        style={{
          fontSize: "1.6rem",
          fontWeight: 800,
          color: "#dc2626",
          marginBottom: "1rem",
          textShadow: "0px 1px 5px #000",
        }}>
        🎟️ Ticket Confirmed
      </h1>

      <div
        ref={ticketRef}
        style={{
          position: "relative",
          width: 260,
          height: 440,
          borderRadius: 14,
          boxShadow: "0 6px 24px #181818",
          overflow: "hidden",
          border: "2px solid #dc2626",
          backgroundImage: `url(${TICKET_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginBottom: "2rem",
        }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.75),rgba(0,0,0,0.38) 47%,rgba(0,0,0,0.85))",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            padding: "1rem 0.72rem",
            textAlign: "center",
          }}>
          <img
            src={logoSrc}
            alt="TEDx Logo"
            style={{
              width: 80,
              height: 80,
              objectFit: "contain",
              marginBottom: 6,
              filter: "drop-shadow(0 1px 4px #000)",
            }}
            onError={() => setLogoSrc(LOGO_ICON_FALLBACK)}
            crossOrigin="anonymous"
          />

          {sessionLabel && (
            <span
              style={{
                display: "inline-block",
                padding: "4px 10px",
                borderRadius: 999,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.03em",
                color: "#fff",
                marginBottom: 6,
                background:
                  session.toLowerCase() === "morning"
                    ? "#16a34a"
                    : session.toLowerCase() === "evening"
                    ? "#2563eb"
                    : "#9333ea",
                boxShadow: "0 1px 5px rgba(0,0,0,0.6)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}>
              Session: {sessionLabel}
            </span>
          )}

          <h2
            style={{
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: "0.04em",
              color: "#ef4444",
              textShadow: "0px 1px 6px #000",
            }}>
            TEDxDYPAkurdi
          </h2>
          <p
            style={{
              fontSize: 11,
              fontStyle: "italic",
              color: "#bbb",
              marginBottom: 6,
            }}>
            "The Kafka , The Tolstoy "
          </p>
          <div
            style={{
              borderTop: "1px solid #aaa",
              width: 72,
              margin: "7px auto",
            }}
          />

          <div
            style={{
              fontSize: 12,
              color: "#eee",
              marginTop: 2,
              marginBottom: 2,
            }}>
            <p>
              <span style={{ fontWeight: 700 }}>Name: </span>
              {name}
            </p>
            <p>
              <span style={{ fontWeight: 700 }}>Email: </span>
              {email}
            </p>
            <p>
              <span style={{ fontWeight: 700 }}>Mobile: </span>
              {phone}
            </p>
            {amount && amount !== "0" && amount !== "₹0" && (
              <p>
                <span style={{ fontWeight: 700 }}>Amount: </span>
                {amount}
              </p>
            )}
            {sessionLabel && (
              <p>
                <span style={{ fontWeight: 700 }}>Session: </span>
                {sessionLabel}
              </p>
            )}
            <p style={{ color: "#fb7185", fontWeight: 700, marginTop: 6 }}>
              Ticket ID: {ticketId}
            </p>
          </div>

          <div style={{ marginTop: 8 }}>
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=90x90&data=${encodeURIComponent(
                qrData
              )}`}
              alt="QR Code"
              style={{
                width: 80,
                height: 80,
                border: "1.5px solid #fff",
                borderRadius: 7,
                boxShadow: "0 1px 3.5px #000",
              }}
              crossOrigin="anonymous"
            />
            <p style={{ fontSize: 9, color: "#bbb", marginTop: 2 }}>
              Scan for event details
            </p>
          </div>

          <p
            style={{
              fontSize: 9,
              color: "#ef4444",
              fontWeight: 600,
              letterSpacing: "0.07em",
              marginTop: 4,
            }}>
            TEDxDYP Akurdi | Ideas Worth Spreading
          </p>
        </div>
      </div>

      <div style={{ display: "flex", gap: 12 }}>
        <button
          onClick={() => generateAndSendTicket(true)}
          style={{
            padding: "10px 24px",
            background: "#dc2626",
            border: "none",
            borderRadius: 6,
            fontWeight: 600,
            fontSize: 15,
            color: "#fff",
            boxShadow: "0 0.5px 4px #191919",
            cursor: "pointer",
          }}>
          ⬇️ Download Again
        </button>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "10px 24px",
            background: "#232323",
            border: "none",
            borderRadius: 6,
            fontWeight: 600,
            fontSize: 15,
            color: "#fff",
            boxShadow: "0 0.5px 4px #191919",
            cursor: "pointer",
          }}>
          🏠 Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
