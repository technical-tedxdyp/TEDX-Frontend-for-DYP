// import React, { useEffect, useState } from "react";

// // Map UI labels to backend keys
// const SESSION_KEY = {
//   "Morning Session": "morning",
//   "Full Day Session": "fullDay",
//   "Evening Session": "evening",
// };

// // Display sessions
// const SESSIONS = [
//   { id: 1, name: "Morning Session", description: "For individuals who want to launch a simple portfolio or landing page.", price: 49, save: null },
//   { id: 2, name: "Full Day Session", description: "For teams who want to build stylish websites fast with Webflow.", price: 69, save: "", popular: true },
//   { id: 3, name: "Evening Session", description: "For companies who need advanced features and top-tier support.", price: 49, save: "" },
// ];

// const InfoBox = ({ title, value }) => (
//   <div className="header-box flex flex-col w-full min-w-[240px] max-w-[340px] border-2 border-[#EB0028] overflow-hidden mx-3 mb-3 rounded-2xl shadow-lg">
//     <div className="p-6 font-bold text-2xl bg-[#EB0028] text-white">{title}</div>
//     <div className="header-box-value text-lg py-8">{value}</div>
//   </div>
// );

// const SessionCard = ({ session, onSelect, isSelected }) => (
//   <div
//     className={`ticket-card ${session.popular ? "popular" : ""} ${isSelected ? "selected" : ""} cursor-pointer relative`}
//     onClick={() => onSelect(session)}
//     style={{ minWidth: "320px", maxWidth: "400px", padding: "2.7rem 2.2rem", marginBottom: "1rem", borderRadius: "1.5rem" }}
//   >
//     {session.popular && (
//       <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 save-tag uppercase font-bold text-base">
//         Most Popular
//       </span>
//     )}
//     <div className="flex justify-end mb-4">
//       {typeof session.save === "string" && session.save.trim().length > 0 && <span className="save-tag">{session.save}</span>}
//     </div>
//     <h3 className="text-2xl font-bold">{session.name}</h3>
//     <p className="text-gray-400 text-base mb-4">{session.description}</p>
//     <div className="flex justify-between items-end">
//       <span className="text-4xl font-bold">₹{session.price}</span>
//       <button className="btn-primary mt-2 text-base py-3 px-6" type="button">
//         Buy Now
//       </button>
//     </div>
//   </div>
// );

// const ConfirmModal = ({ isOpen, onClose, formData, selectedSession, onPay }) => {
//   if (!isOpen) return null;
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
//       <div className="modal-card relative p-10 w-full max-w-xl mx-2 rounded-2xl">
//         <button onClick={onClose} className="absolute top-4 right-4 text-white bg-[#EB0028] rounded-full p-2 hover:bg-[#c20021] transition-colors">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>
//         <h2 className="text-2xl font-extrabold mb-4 text-[#EB0028] text-center">Confirm Your Details & Ticket</h2>
//         <p className="text-base text-gray-300 mb-7 text-center">Please verify your details before payment.</p>
//         <div className="flex flex-col gap-3 text-lg mb-9">
//           <div><span className="font-bold text-[#EB0028]">Name:</span> <span className="ml-2">{formData.name}</span></div>
//           <div><span className="font-bold text-[#EB0028]">Email:</span> <span className="ml-2">{formData.email}</span></div>
//           <div><span className="font-bold text-[#EB0028]">Contact No.:</span> <span className="ml-2">{formData.phone}</span></div>
//           <div><span className="font-bold text-[#EB0028]">Department:</span> <span className="ml-2">{formData.department}</span></div>
//           <div><span className="font-bold text-[#EB0028]">Branch:</span> <span className="ml-2">{formData.branch}</span></div>
//           <div><span className="font-bold text-[#EB0028]">Session:</span> <span className="ml-2">{selectedSession?.name}</span></div>
//           <div><span className="font-bold text-[#EB0028]">Amount:</span> <span className="ml-2">₹{selectedSession?.price}</span></div>
//         </div>
//         <button onClick={onPay} className="w-full py-4 text-lg font-bold bg-[#EB0028] text-white rounded-xl hover:bg-[#c20021] transition-colors mt-2">
//           Pay Now
//         </button>
//       </div>
//     </div>
//   );
// };

// // Local backend base URL
// const API_BASE_URL = "https://backend-of-tedx-website-on-render.onrender.com";

// const TicketPage = () => {
//   const [selectedSession, setSelectedSession] = useState(null);
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", department: "", branch: "" });
//   const [showModal, setShowModal] = useState(false);

//   // Load Razorpay SDK
//   useEffect(() => {
//     const existing = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
//     if (existing) return;
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);
//   }, []);

//   const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!selectedSession) {
//       alert("Please select a session before proceeding.");
//       return;
//     }
//     setShowModal(true);
//   };

//   // Map selected session to availability key
//   const getAvailabilityKey = () => {
//     if (!selectedSession) return null;
//     const key = SESSION_KEY[selectedSession.name];
//     if (key === "morning") return "morningAvailable";
//     if (key === "evening") return "eveningAvailable";
//     if (key === "fullDay") return "fullDayAvailable";
//     return null;
//   };

//   const precheckAvailability = async () => {
//     const res = await fetch(`${API_BASE_URL}/api/payment/availability`);
//     if (!res.ok) throw new Error("Availability check failed");
//     const data = await res.json();
//     const key = getAvailabilityKey();
//     const available = key ? data[key] : 0;
//     return { ok: Number(available) > 0, snapshot: data };
//   };

//   const initiatePayment = async () => {
//     try {
//       if (!selectedSession) return;

//       // 1) Pre-check availability
//       const check = await precheckAvailability();
//       if (!check.ok) {
//         alert("Sold out");
//         setShowModal(false);
//         return;
//       }

//       // 2) Create backend order
//       const orderRes = await fetch(`${API_BASE_URL}/api/payment/create-order`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: selectedSession.price }),
//       });
//       if (!orderRes.ok) return alert("Failed to create payment order.");
//       const orderData = await orderRes.json();
//       if (!orderData.id) return alert("Failed to create payment order. Try again later.");
//       if (!window.Razorpay) return alert("Razorpay SDK not loaded.");

//       // 3) Open Razorpay
//       const options = {
//         key: "rzp_test_KzB4idWWnf33y2", // test key for local
//         amount: selectedSession.price * 100,
//         currency: "INR",
//         name: "TEDx DYP Akurdi",
//         description: `${selectedSession.name} Ticket`,
//         order_id: orderData.id,
//         handler: (response) => verifyPayment(response),
//         prefill: { name: formData.name, email: formData.email, contact: formData.phone },
//         theme: { color: "#EB0028" },
//       };
//       new window.Razorpay(options).open();
//       setShowModal(false);
//     } catch (err) {
//       console.error(err);
//       alert("Error initiating payment.");
//     }
//   };

//   const verifyPayment = async (response) => {
//     try {
//       const backendSessionKey = SESSION_KEY[selectedSession.name]; // 'morning' | 'fullDay' | 'evening'
//       const res = await fetch(`${API_BASE_URL}/api/payment/verify`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           razorpay_order_id: response.razorpay_order_id,
//           razorpay_payment_id: response.razorpay_payment_id,
//           razorpay_signature: response.razorpay_signature,
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           department: formData.department,
//           branch: formData.branch,
//           session: backendSessionKey,
//           amount: selectedSession.price,
//         }),
//       });

//       const data = await res.json();
//       if (data.success) {
//         window.location.href = `/success?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&phone=${encodeURIComponent(formData.phone)}&amount=${selectedSession.price}&ticketId=${data.ticketId}`;
//       } else {
//         alert(data.message || "Payment verification failed.");
//       }
//     } catch (e) {
//       console.error(e);
//       alert("Error verifying payment.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black text-white font-sans relative overflow-x-hidden">
//       <div className="relative z-10 py-16">
//         <div className="max-w-6xl mx-auto px-6">
//           {/* Header */}
//           <div className="text-center mb-16">
//             <h1 className="section-title">Register for the TEDxDYPAkurdi Event!</h1>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               The flagship event of TEDxDYPAkurdi, a platform for experts and enthusiasts to voice their "Ideas worth spreading."
//             </p>
//           </div>

//           {/* Event info */}
//           <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-16">
//             <InfoBox title="Date" value="12th September 2025" />
//             <InfoBox title="Venue" value="Shantai Auditorium DYP Akurdi Campus" />
//             <InfoBox title="Time" value="09 am Onwards" />
//           </div>

//           {/* Pricing */}
//           <div className="text-center mb-12">
//             <h2 className="section-title text-xl mb-8 text-gray-200">Pricing for the Tickets</h2>
//             <div className="flex flex-col md:flex-row justify-center items-center gap-10">
//               {SESSIONS.map((session) => (
//                 <SessionCard
//                   key={session.id}
//                   session={session}
//                   onSelect={setSelectedSession}
//                   isSelected={selectedSession?.id === session.id}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Form */}
//           <div className="form-card max-w-4xl mx-auto px-16 py-12 rounded-3xl shadow-2xl mt-10">
//             <h2 className="mb-10 text-3xl font-extrabold text-[#EB0028] tracking-wide flex items-end gap-3">
//               Details <span className="block text-lg text-gray-300 font-normal pb-1">for next steps</span>
//             </h2>
//             <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="name" className="block mb-3 text-xl font-bold text-white">Your Name</label>
//                 <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" className="w-full h-16 px-5 rounded-xl border-2 border-[#333] bg-[#17171a] text-white text-lg placeholder-gray-400 focus:ring-2 focus:ring-[#EB0028] focus:border-transparent transition" />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block mb-3 text-xl font-bold text-white">Email Address</label>
//                 <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="Enter your email" className="w-full h-16 px-5 rounded-xl border-2 border-[#333] bg-[#17171a] text-white text-lg placeholder-gray-400 focus:ring-2 focus:ring-[#EB0028] focus:border-transparent transition" />
//               </div>
//               <div>
//                 <label htmlFor="phone" className="block mb-3 text-xl font-bold text-white">Contact No.</label>
//                 <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="Enter your contact number" className="w-full h-16 px-5 rounded-xl border-2 border-[#333] bg-[#17171a] text-white text-lg placeholder-gray-400 focus:ring-2 focus:ring-[#EB0028] focus:border-transparent transition" />
//               </div>
//               <div>
//                 <label htmlFor="department" className="block mb-3 text-xl font-bold text-white">Department of Study</label>
//                 <input type="text" id="department" name="department" value={formData.department} onChange={handleInputChange} placeholder="Enter your department" className="w-full h-16 px-5 rounded-xl border-2 border-[#333] bg-[#17171a] text-white text-lg placeholder-gray-400 focus:ring-2 focus:ring-[#EB0028] focus:border-transparent transition" />
//               </div>
//               <div>
//                 <label htmlFor="branch" className="block mb-3 text-xl font-bold text-white">Branch</label>
//                 <input type="text" id="branch" name="branch" value={formData.branch} onChange={handleInputChange} placeholder="Enter your branch" className="w-full h-16 px-5 rounded-xl border-2 border-[#333] bg-[#17171a] text-white text-lg placeholder-gray-400 focus:ring-2 focus:ring-[#EB0028] focus:border-transparent transition" />
//               </div>
//               <div className="flex justify-center pt-6">
//                 <button type="submit" className="bg-[#EB0028] hover:bg-[#c20021] text-white px-16 py-4 text-2xl rounded-xl font-extrabold shadow-lg transition" disabled={!selectedSession}>
//                   Proceed to pay
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       <ConfirmModal
//         isOpen={showModal}
//         onClose={() => setShowModal(false)}
//         formData={formData}
//         selectedSession={selectedSession}
//         onPay={initiatePayment}
//       />
//     </div>
//   );
// };

// export default TicketPage;

const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const path = require("path");
const fs = require("fs");
const { createOrder } = require("./utils/razorpayUtils");
const Ticket = require("./models/Ticket");
const Counter = require("./models/Counter");
const EventCapacity = require("./models/EventCapacity");
const { sendTicketEmail } = require("./utils/email");
const { appendRowToSheet } = require("./utils/googleSheetsService");
const { connectDB, withTransaction } = require("./utils/db");

// Ensure DB connection once
connectDB().catch(err => console.error("MongoDB connection error on startup:", err));

const RZP_KEY_SECRET = process.env.TEDX_RAZORPAY_KEY_SECRET || "";
const EVENT_ID = process.env.TEDX_EVENT_ID || "tedx-2025";
const AUTO_SEED = String(process.env.TEDX_AUTO_SEED || "").toLowerCase() === "true";

// ADDED: Initialize capacity document on server startup
const initializeCapacity = async () => {
  try {
    const existing = await EventCapacity.findOne({ eventId: EVENT_ID });
    if (!existing) {
      await EventCapacity.create({
        eventId: EVENT_ID,
        totalSeats: 400,
        fullDay: 0,
        morningSingles: 0,
        eveningSingles: 0,
        version: 0,
      });
      console.log("🚀 Initialized capacity document for", EVENT_ID);
    } else {
      console.log("✅ Capacity document already exists for", EVENT_ID);
    }
  } catch (error) {
    console.error("❌ Failed to initialize capacity:", error.message);
  }
};

// Initialize capacity on startup
initializeCapacity();

// UPDATED: Enhanced availability check with debugging and null safety
async function checkSessionAvailability(session) {
  const cap = await EventCapacity.findOne({ eventId: EVENT_ID }).lean();
  
  console.log("🔍 Checking availability:", {
    session,
    eventId: EVENT_ID,
    capacityFound: !!cap,
    totalSeats: cap?.totalSeats,
    fullDay: cap?.fullDay,
    morningSingles: cap?.morningSingles,
    eveningSingles: cap?.eveningSingles,
    version: cap?.version
  });

  if (!cap) {
    console.log("❌ No capacity document found for eventId:", EVENT_ID);
    return false;
  }

  // Use null coalescing to handle undefined fields gracefully
  const morningOccupied = (cap.fullDay || 0) + (cap.morningSingles || 0);
  const eveningOccupied = (cap.fullDay || 0) + (cap.eveningSingles || 0);
  
  const morningAvailable = Math.max(0, (cap.totalSeats || 0) - morningOccupied);
  const eveningAvailable = Math.max(0, (cap.totalSeats || 0) - eveningOccupied);
  const fullDayAvailable = Math.min(morningAvailable, eveningAvailable);

  console.log("📊 Availability calculation:", {
    totalSeats: cap.totalSeats,
    morningOccupied,
    eveningOccupied,
    morningAvailable,
    eveningAvailable,
    fullDayAvailable
  });

  let result = false;
  switch (session) {
    case "morning":
      result = morningAvailable > 0;
      console.log(`Morning session available: ${result} (${morningAvailable} seats)`);
      break;
    case "evening":
      result = eveningAvailable > 0;
      console.log(`Evening session available: ${result} (${eveningAvailable} seats)`);
      break;
    case "fullDay":
      result = fullDayAvailable > 0;
      console.log(`Full day session available: ${result} (${fullDayAvailable} seats)`);
      break;
    default:
      console.log("❌ Invalid session type:", session);
      result = false;
  }

  return result;
}

// GET /api/payment/availability
router.get("/availability", async (req, res) => {
  try {
    const cap = await EventCapacity.findOne({ eventId: EVENT_ID }).lean();
    if (!cap) {
      console.log("⚠️ No capacity document found in availability endpoint");
      return res.status(200).json({
        eventId: EVENT_ID,
        totalSeats: 0,
        fullDay: 0,
        morningSingles: 0,
        eveningSingles: 0,
        morningAvailable: 0,
        eveningAvailable: 0,
        fullDayAvailable: 0,
        status: "missing",
      });
    }

    // Calculate based on session occupancy with null safety
    const morningOccupied = (cap.fullDay || 0) + (cap.morningSingles || 0);
    const eveningOccupied = (cap.fullDay || 0) + (cap.eveningSingles || 0);
    
    const morningAvailable = Math.max(0, (cap.totalSeats || 0) - morningOccupied);
    const eveningAvailable = Math.max(0, (cap.totalSeats || 0) - eveningOccupied);
    const fullDayAvailable = Math.min(morningAvailable, eveningAvailable);

    return res.status(200).json({
      eventId: EVENT_ID,
      totalSeats: cap.totalSeats || 0,
      version: cap.version || 0,
      fullDay: cap.fullDay || 0,
      morningSingles: cap.morningSingles || 0,
      eveningSingles: cap.eveningSingles || 0,
      morningOccupied,
      eveningOccupied,
      morningAvailable,
      eveningAvailable,
      fullDayAvailable,
      status: (morningAvailable > 0 || eveningAvailable > 0) ? "available" : "soldout",
    });
  } catch (e) {
    console.error("Availability check error:", e?.message || e);
    return res.status(500).json({ error: e?.message || "availability failed" });
  }
});

// POST /api/payment/create-order - ENHANCED: Stricter availability check
router.post("/create-order", async (req, res) => {
  try {
    const { amount, session } = req.body;
    const num = Number(amount);
    
    console.log("🎫 Create order request:", { amount, session, eventId: EVENT_ID });
    
    if (!Number.isFinite(num) || num <= 0) {
      console.log("❌ Invalid amount:", amount);
      return res.status(400).json({ error: "Valid amount is required" });
    }
    
    if (!session || !["morning", "evening", "fullDay"].includes(session)) {
      console.log("❌ Invalid session:", session);
      return res.status(400).json({ error: "Valid session type is required" });
    }

    // CRITICAL: Double-check availability immediately before creating Razorpay order
    console.log("🔄 Performing fresh availability check before creating order...");
    const cap = await EventCapacity.findOne({ eventId: EVENT_ID }).lean();
    
    if (!cap) {
      console.log("❌ No capacity document found");
      return res.status(500).json({ error: "System not ready. Please try again." });
    }

    const morningOccupied = (cap.fullDay || 0) + (cap.morningSingles || 0);
    const eveningOccupied = (cap.fullDay || 0) + (cap.eveningSingles || 0);
    const morningAvailable = Math.max(0, (cap.totalSeats || 0) - morningOccupied);
    const eveningAvailable = Math.max(0, (cap.totalSeats || 0) - eveningOccupied);
    const fullDayAvailable = Math.min(morningAvailable, eveningAvailable);

    let available = false;
    switch (session) {
      case "morning":
        available = morningAvailable > 0;
        break;
      case "evening":
        available = eveningAvailable > 0;
        break;
      case "fullDay":
        available = fullDayAvailable > 0;
        break;
    }

    console.log("📊 Fresh availability check result:", {
      session,
      morningAvailable,
      eveningAvailable,
      fullDayAvailable,
      available
    });
    
    if (!available) {
      console.log("🚫 BLOCKING PAYMENT: No seats available for", session);
      return res.status(409).json({ 
        error: "Seats are full", 
        message: `All seats are sold out for the ${session} session. Please try a different session.` 
      });
    }

    console.log("✅ Seats available, creating Razorpay order...");
    // Create order only if seats are available
    const order = await createOrder(num);
    console.log("✅ Razorpay order created:", order.id);
    return res.json(order);
  } catch (err) {
    console.error("Error creating order:", err?.message || err);
    return res.status(500).json({ error: "Failed to create order" });
  }
});

// Helper: sequential ticket ids
async function getNextSequenceValue(sequenceName, session = null) {
  const counter = await Counter.findOneAndUpdate(
    { _id: sequenceName },
    { $inc: { sequence_value: 1 } },
    { new: true, upsert: true, session: session || undefined, setDefaultsOnInsert: true }
  );
  return counter.sequence_value;
}

// POST /api/payment/verify - ENHANCED: Transaction retry logic with better concurrency control
router.post("/verify", async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      name,
      email,
      phone,
      department,
      branch,
      session, // 'morning' | 'evening' | 'fullDay'
      amount,
    } = req.body;

    console.log("💳 Payment verification started:", { razorpay_payment_id, session, amount });

    // Validate required fields
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !name || !email || !phone || !session || amount == null) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    if (!["morning", "evening", "fullDay"].includes(session)) {
      return res.status(400).json({ success: false, message: "Invalid session type" });
    }

    if (!RZP_KEY_SECRET) {
      return res.status(500).json({ success: false, message: "Payment secret not configured" });
    }

    // Signature verification
    const expected = crypto.createHmac("sha256", RZP_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");
    if (expected !== razorpay_signature) {
      return res.status(400).json({ success: false, message: "Invalid payment signature" });
    }

    // Idempotency check
    const existing = await Ticket.findOne({ razorpayPaymentId: razorpay_payment_id }).lean();
    if (existing) {
      console.log("♻️ Payment already processed:", existing.ticketId);
      return res.json({
        success: true,
        message: "Payment already processed",
        ticketId: existing.ticketId,
        session: existing.session,
      });
    }

    // CRITICAL FIX: Always ensure capacity document exists
    let snap = await EventCapacity.findOne({ eventId: EVENT_ID }).lean();
    if (!snap) {
      console.log("🌱 Capacity document missing! Creating new one...");
      try {
        await EventCapacity.create({
          eventId: EVENT_ID,
          totalSeats: 400,
          fullDay: 0,
          morningSingles: 0,
          eveningSingles: 0,
          version: 0,
        });
        console.log("✅ Created missing capacity document for", EVENT_ID);
        snap = await EventCapacity.findOne({ eventId: EVENT_ID }).lean();
      } catch (createError) {
        console.error("❌ Failed to create capacity document:", createError.message);
        return res.status(500).json({ 
          success: false, 
          message: "System initialization failed. Please try again." 
        });
      }
    } else {
      console.log("✅ Capacity document exists:", {
        totalSeats: snap.totalSeats,
        fullDay: snap.fullDay,
        morningSingles: snap.morningSingles,
        eveningSingles: snap.eveningSingles,
        version: snap.version
      });
    }

    // ENHANCED: Reserve capacity with retry logic and transaction
    let ticketDoc;
    await withTransaction(async (txn) => {
      let attempts = 0;
      const maxAttempts = 5;
      
      while (attempts < maxAttempts) {
        try {
          console.log(`🔒 Starting transaction attempt ${attempts + 1}/${maxAttempts} for seat reservation...`);
          
          // Use the reserveSeat method with optimistic concurrency control
          const updatedCap = await EventCapacity.reserveSeat(EVENT_ID, session, txn);
          console.log(`✅ Reserved seat for ${session}. New capacity:`, {
            fullDay: updatedCap.fullDay,
            morningSingles: updatedCap.morningSingles,
            eveningSingles: updatedCap.eveningSingles,
            version: updatedCap.version
          });

          const seq = await getNextSequenceValue("ticketId", txn);
          const humanCode = `TEDX-${String(seq).padStart(5, "0")}`;

          ticketDoc = await Ticket.create([{
            ticketId: humanCode,
            razorpayOrderId: razorpay_order_id,
            razorpayPaymentId: razorpay_payment_id,
            razorpaySignature: razorpay_signature,
            name,
            email: email?.toLowerCase(),
            phone,
            department: department || "",
            branch: branch || "",
            session,
            amount: Number(amount),
          }], { session: txn });

          ticketDoc = ticketDoc[0]; // Extract from array when using session
          console.log("🎫 Ticket created successfully:", humanCode);
          
          // Success - break out of retry loop
          break;
          
        } catch (error) {
          attempts++;
          console.error(`❌ Reservation attempt ${attempts}/${maxAttempts} failed for ${session}:`, error.message);
          
          if (error.message === 'SOLD_OUT') {
            console.log("🚫 Session is sold out - no retries needed");
            throw new Error("SOLD_OUT"); // Don't retry for sold out
          }
          
          if (error.message === 'EVENT_NOT_FOUND') {
            console.error("❌ EventCapacity document missing during transaction");
            throw new Error("SYSTEM_ERROR");
          }
          
          // For version conflicts or other transient errors, retry
          if (attempts >= maxAttempts) {
            console.error(`❌ Max retry attempts (${maxAttempts}) exceeded for ${session}`);
            throw new Error("SOLD_OUT"); // Treat as sold out after max retries
          }
          
          // Exponential backoff delay before retry
          const delay = Math.min(100 * Math.pow(2, attempts - 1), 1000);
          console.log(`⏳ Retrying in ${delay}ms...`);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    });

    // Log to Google Sheets (best effort)
    try {
      const t = (typeof ticketDoc?.toObject === "function" ? ticketDoc.toObject() : ticketDoc) || {};
      const createdAtISO = (t.createdAt ? new Date(t.createdAt) : new Date()).toISOString();
      await appendRowToSheet([
        t.name || name,
        (t.email || email || "").toLowerCase(),
        t.phone || phone || "",
        t.department || department || "",
        t.branch || branch || "",
        t.session || session,
        typeof t.amount === "number" ? t.amount : Number(amount),
        t.razorpayOrderId || razorpay_order_id,
        t.razorpayPaymentId || razorpay_payment_id,
        t.ticketId,
        createdAtISO,
      ]);
      console.log("📊 Logged to Google Sheets successfully");
    } catch (e) {
      console.warn("⚠️ Sheets append failed (non-fatal):", e?.message || e);
    }

    // Success response
    return res.json({
      success: true,
      message: "Payment verified; ticket will be emailed from success page",
      ticketId: ticketDoc.ticketId,
      session,
      razorpayPaymentId: razorpay_payment_id,
    });
  } catch (err) {
    if (err && err.message === "SOLD_OUT") {
      console.log("🚫 Transaction failed - seats full during payment verification");
      return res.status(409).json({ success: false, message: "Seats are full for this session" });
    }
    if (err && err.message === "SYSTEM_ERROR") {
      console.log("🚫 Transaction failed - system initialization error");
      return res.status(500).json({ success: false, message: "System error. Please contact support." });
    }
    if (err?.code === 11000 && err?.keyPattern?.razorpayPaymentId) {
      const dup = await Ticket.findOne({ razorpayPaymentId: req.body.razorpay_payment_id }).lean();
      return res.json({ success: true, message: "Payment already processed", ticketId: dup?.ticketId, session: dup?.session });
    }
    console.error("❌ Error verifying payment:", err?.message || err);
    if (err?.stack) console.error(err.stack);
    return res.status(500).json({ success: false, message: "Failed to verify payment" });
  }
});

// POST /api/payment/send-ticket - Send client-generated ticket via email with Payment ID
router.post("/send-ticket", async (req, res) => {
  try {
    const { 
      email, 
      name, 
      session, 
      amount, 
      ticketId, 
      razorpayPaymentId,
      pdfBase64,     
      useClientPdf,  
      ticketImage    
    } = req.body;

    console.log("📧 /send-ticket called with:", {
      email,
      ticketId,
      razorpayPaymentId,
      useClientPdf,
      hasPdfBase64: !!pdfBase64,
      hasTicketImage: !!ticketImage
    });

    // Validate required fields
    if (!email || !ticketId) {
      return res.status(400).json({ 
        success: false, 
        message: "Missing required fields: email and ticketId" 
      });
    }

    // Ensure we have client-generated content
    if (!useClientPdf || !ticketImage) {
      return res.status(400).json({
        success: false,
        message: "Missing client-generated content: useClientPdf and ticketImage required"
      });
    }

    console.log("📧 Sending CLIENT-generated ticket via email");

    await sendTicketEmail({
      email,
      name: name || "Guest",
      session: session || "—",
      amount,
      ticketId,
      razorpayPaymentId: razorpayPaymentId || "—",
      ticketImage
    });

    // Save PDF to disk for backup/audit (optional)
    if (pdfBase64) {
      try {
        const ticketsDir = path.join(__dirname, "..", "tickets");
        if (!fs.existsSync(ticketsDir)) fs.mkdirSync(ticketsDir, { recursive: true });
        const filePath = path.join(ticketsDir, `TEDx-Ticket-${ticketId}.pdf`);
        const pdfBuffer = Buffer.from(pdfBase64, "base64");
        fs.writeFileSync(filePath, pdfBuffer);
        console.log("💾 Saved client PDF to", filePath);
      } catch (e) {
        console.warn("⚠ Could not save PDF to disk:", e?.message || e);
      }
    }

    return res.json({ 
      success: true, 
      message: "Client-generated ticket sent via email successfully" 
    });
    
  } catch (e) {
    console.error("Error in send-ticket:", e?.message || e);
    return res.status(500).json({ 
      success: false, 
      message: "Failed to send ticket: " + (e?.message || "Unknown error")
    });
  }
});

// GET /api/tickets/:ticketId - Get ticket info for session recovery
router.get("/tickets/:ticketId", async (req, res) => {
  try {
    const { ticketId } = req.params;
    const ticket = await Ticket.findOne({ ticketId }).lean();
    
    if (!ticket) {
      return res.status(404).json({ error: "Ticket not found" });
    }
    
    res.json({
      ticketId: ticket.ticketId,
      session: ticket.session,
      name: ticket.name,
      email: ticket.email,
      phone: ticket.phone,
      amount: ticket.amount,
      razorpayPaymentId: ticket.razorpayPaymentId,
    });
  } catch (err) {
    console.error("Error fetching ticket:", err);
    res.status(500).json({ error: "Failed to fetch ticket" });
  }
});

module.exports = router;
