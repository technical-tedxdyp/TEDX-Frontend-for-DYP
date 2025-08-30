
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

// // UPDATED: SessionCard now shows sold out status and disables selection
// const SessionCard = ({ session, onSelect, isSelected, isSoldOut }) => (
//   <div
//     className={`ticket-card ${session.popular ? "popular" : ""} ${isSelected ? "selected" : ""} ${isSoldOut ? "sold-out" : "cursor-pointer"} relative`}
//     onClick={isSoldOut ? undefined : () => onSelect(session)}
//     style={{ 
//       minWidth: "320px", 
//       maxWidth: "400px", 
//       padding: "2.7rem 2.2rem", 
//       marginBottom: "1rem", 
//       borderRadius: "1.5rem",
//       opacity: isSoldOut ? 0.6 : 1,
//       cursor: isSoldOut ? "not-allowed" : "pointer"
//     }}
//   >
//     {session.popular && (
//       <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 save-tag uppercase font-bold text-base">
//         Most Popular
//       </span>
//     )}
//     {isSoldOut && (
//       <span className="absolute -top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
//         SOLD OUT
//       </span>
//     )}
//     <div className="flex justify-end mb-4">
//       {typeof session.save === "string" && session.save.trim().length > 0 && <span className="save-tag">{session.save}</span>}
//     </div>
//     <h3 className="text-2xl font-bold">{session.name}</h3>
//     <p className="text-gray-400 text-base mb-4">{session.description}</p>
//     <div className="flex justify-between items-end">
//       <span className="text-4xl font-bold">₹{session.price}</span>
//       <button 
//         className={`btn-primary mt-2 text-base py-3 px-6 ${isSoldOut ? 'bg-gray-500 cursor-not-allowed' : ''}`} 
//         type="button"
//         disabled={isSoldOut}
//       >
//         {isSoldOut ? "Sold Out" : "Buy Now"}
//       </button>
//     </div>
//   </div>
// );

// // UPDATED: ConfirmModal now checks if session is sold out
// const ConfirmModal = ({ isOpen, onClose, formData, selectedSession, onPay, isSoldOut }) => {
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
        
//         {isSoldOut && (
//           <div className="bg-red-900 border border-red-500 text-red-100 px-4 py-3 rounded mb-6 text-center">
//             <strong>⚠️ This session is now sold out!</strong>
//             <p className="text-sm mt-1">Please select a different session to proceed.</p>
//           </div>
//         )}
        
//         <div className="flex flex-col gap-3 text-lg mb-9">
//           <div><span className="font-bold text-[#EB0028]">Name:</span> <span className="ml-2">{formData.name}</span></div>
//           <div><span className="font-bold text-[#EB0028]">Email:</span> <span className="ml-2">{formData.email}</span></div>
//           <div><span className="font-bold text-[#EB0028]">Contact No.:</span> <span className="ml-2">{formData.phone}</span></div>
//           <div><span className="font-bold text-[#EB0028]">Department:</span> <span className="ml-2">{formData.department}</span></div>
//           <div><span className="font-bold text-[#EB0028]">Branch:</span> <span className="ml-2">{formData.branch}</span></div>
//           <div><span className="font-bold text-[#EB0028]">Session:</span> <span className="ml-2">{selectedSession?.name}</span></div>
//           <div><span className="font-bold text-[#EB0028]">Amount:</span> <span className="ml-2">₹{selectedSession?.price}</span></div>
//         </div>
        
//         <button 
//           onClick={onPay} 
//           disabled={isSoldOut}
//           className={`w-full py-4 text-lg font-bold rounded-xl transition-colors mt-2 ${
//             isSoldOut 
//               ? 'bg-gray-500 text-gray-300 cursor-not-allowed' 
//               : 'bg-[#EB0028] text-white hover:bg-[#c20021]'
//           }`}
//         >
//           {isSoldOut ? "Session Sold Out" : "Pay Now"}
//         </button>
//       </div>
//     </div>
//   );
// };

// // Local backend base URL
// const API_BASE_URL = "https://backendoftedxdypakurdi.onrender.com";

// const TicketPage = () => {
//   const [selectedSession, setSelectedSession] = useState(null);
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", department: "", branch: "" });
//   const [showModal, setShowModal] = useState(false);
  
//   // NEW: State to store availability data
//   const [availability, setAvailability] = useState(null);
//   const [loadingAvailability, setLoadingAvailability] = useState(true);

//   // Load Razorpay SDK
//   useEffect(() => {
//     const existing = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
//     if (existing) return;
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);
//   }, []);

//   // NEW: Fetch availability on component mount and periodically
//   useEffect(() => {
//     fetchAvailability();
//     // Refresh availability every 30 seconds
//     const interval = setInterval(fetchAvailability, 30000);
//     return () => clearInterval(interval);
//   }, []);

//   // NEW: Function to fetch availability from backend
//   const fetchAvailability = async () => {
//     try {
//       console.log("🔄 Fetching availability...");
//       const res = await fetch(`${API_BASE_URL}/api/payment/availability`);
//       if (!res.ok) throw new Error("Failed to fetch availability");
      
//       const data = await res.json();
//       console.log("📊 Availability data:", data);
      
//       setAvailability(data);
//       setLoadingAvailability(false);
//     } catch (error) {
//       console.error("❌ Error fetching availability:", error);
//       setLoadingAvailability(false);
//       // Set default availability to prevent errors
//       setAvailability({
//         morningAvailable: 0,
//         eveningAvailable: 0,
//         fullDayAvailable: 0
//       });
//     }
//   };

//   // NEW: Function to check if a specific session is sold out
//   const isSessionSoldOut = (sessionName) => {
//     if (!availability) return false;
    
//     const sessionKey = SESSION_KEY[sessionName];
//     switch (sessionKey) {
//       case "morning":
//         return availability.morningAvailable <= 0;
//       case "evening":
//         return availability.eveningAvailable <= 0;
//       case "fullDay":
//         return availability.fullDayAvailable <= 0;
//       default:
//         return false;
//     }
//   };

//   const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!selectedSession) {
//       alert("Please select a session before proceeding.");
//       return;
//     }
    
//     // NEW: Check if selected session is sold out before showing modal
//     if (isSessionSoldOut(selectedSession.name)) {
//       alert("🚫 This session is sold out! Please select a different session.");
//       return;
//     }
    
//     setShowModal(true);
//   };

//   const precheckAvailability = async () => {
//     try {
//       // Refresh availability before payment
//       await fetchAvailability();
      
//       if (!selectedSession || !availability) return { ok: false, snapshot: null };
      
//       const sessionKey = SESSION_KEY[selectedSession.name];
//       let available = 0;
      
//       switch (sessionKey) {
//         case "morning":
//           available = availability.morningAvailable;
//           break;
//         case "evening":
//           available = availability.eveningAvailable;
//           break;
//         case "fullDay":
//           available = availability.fullDayAvailable;
//           break;
//       }
      
//       console.log("🔍 Pre-check availability:", {
//         session: selectedSession.name,
//         sessionKey,
//         available,
//         availability
//       });
      
//       return { ok: available > 0, snapshot: availability };
//     } catch (error) {
//       console.error("Availability check error:", error);
//       return { ok: false, snapshot: null };
//     }
//   };

//   const initiatePayment = async () => {
//     try {
//       if (!selectedSession) return;

//       // NEW: Double-check that session isn't sold out
//       if (isSessionSoldOut(selectedSession.name)) {
//         alert(`🚫 The ${selectedSession.name} is now sold out! Please select a different session.`);
//         setShowModal(false);
//         return;
//       }

//       console.log("🎫 Starting payment process for:", selectedSession.name);

//       // Pre-check availability
//       const check = await precheckAvailability();
//       if (!check.ok) {
//         alert(`🚫 All seats are sold out for the ${selectedSession.name}. Please try a different session.`);
//         setShowModal(false);
//         return;
//       }

//       // Create backend order - Includes session parameter
//       const backendSessionKey = SESSION_KEY[selectedSession.name];
//       console.log("🔄 Creating order with session:", backendSessionKey);
      
//       const orderRes = await fetch(`${API_BASE_URL}/api/payment/create-order`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ 
//           amount: selectedSession.price,
//           session: backendSessionKey
//         }),
//       });

//       if (!orderRes.ok) {
//         const errorData = await orderRes.json().catch(() => ({}));
//         console.error("❌ Order creation failed:", errorData);
        
//         // ENHANCED: Better error handling for seat limits
//         if (orderRes.status === 409 || errorData.error === "Seats are full") {
//           alert(`🚫 Sorry! All seats for the ${selectedSession.name} are now sold out. Please try a different session.`);
//           // Refresh availability after failed order creation
//           fetchAvailability();
//         } else {
//           alert(errorData.error || errorData.message || "Failed to create payment order.");
//         }
//         setShowModal(false);
//         return;
//       }

//       const orderData = await orderRes.json();
//       if (!orderData.id) {
//         alert("Failed to create payment order. Please try again.");
//         setShowModal(false);
//         return;
//       }

//       if (!window.Razorpay) {
//         alert("Payment system not loaded. Please refresh the page and try again.");
//         return;
//       }

//       console.log("✅ Order created successfully, opening Razorpay...");

//       // 3) Open Razorpay
//       const options = {
//         key: "rzp_test_KzB4idWWnf33y2",
//         amount: selectedSession.price * 100,
//         currency: "INR",
//         name: "TEDx DYP Akurdi",
//         description: `${selectedSession.name} Ticket`,
//         order_id: orderData.id,
//         handler: (response) => verifyPayment(response),
//         prefill: { name: formData.name, email: formData.email, contact: formData.phone },
//         theme: { color: "#EB0028" },
//         modal: {
//           ondismiss: function() {
//             console.log("Payment modal closed by user");
//             setShowModal(false);
//           }
//         }
//       };

//       new window.Razorpay(options).open();
//       setShowModal(false);
//     } catch (err) {
//       console.error("Payment initiation error:", err);
//       alert("Error starting payment process. Please try again.");
//       setShowModal(false);
//     }
//   };

//   const verifyPayment = async (response) => {
//     try {
//       console.log("💳 Verifying payment...");
//       const backendSessionKey = SESSION_KEY[selectedSession.name];
      
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
//         console.log("✅ Payment verified successfully:", data.ticketId);
//         window.location.href = `/success?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&phone=${encodeURIComponent(formData.phone)}&amount=${selectedSession.price}&ticketId=${data.ticketId}&razorpayPaymentId=${response.razorpay_payment_id}`;
//       } else {
//         console.error("❌ Payment verification failed:", data);
//         alert(data.message || "Payment verification failed. Please contact support.");
//       }
//     } catch (e) {
//       console.error("Payment verification error:", e);
//       alert("Error processing payment. Please contact support with your payment ID.");
//     }
//   };

//   // NEW: Get current sold out status for selected session
//   const selectedSessionSoldOut = selectedSession ? isSessionSoldOut(selectedSession.name) : false;

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
//             {loadingAvailability && (
//               <div className="mb-6 text-gray-400">
//                 <p>🔄 Checking availability...</p>
//               </div>
//             )}
//             <div className="flex flex-col md:flex-row justify-center items-center gap-10">
//               {SESSIONS.map((session) => (
//                 <SessionCard
//                   key={session.id}
//                   session={session}
//                   onSelect={setSelectedSession}
//                   isSelected={selectedSession?.id === session.id}
//                   isSoldOut={isSessionSoldOut(session.name)}
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
//                 <button 
//                   type="submit" 
//                   disabled={!selectedSession || selectedSessionSoldOut}
//                   className={`px-16 py-4 text-2xl rounded-xl font-extrabold shadow-lg transition ${
//                     !selectedSession || selectedSessionSoldOut
//                       ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
//                       : 'bg-[#EB0028] hover:bg-[#c20021] text-white'
//                   }`}
//                 >
//                   {selectedSessionSoldOut ? "Session Sold Out" : "Proceed to pay"}
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
//         isSoldOut={selectedSessionSoldOut}
//       />
//     </div>
//   );
// };

// export default TicketPage;


import React, { useEffect, useState, useRef } from "react";

// Map UI labels to backend keys
const SESSION_KEY = {
  "Morning Session": "morning",
  "Full Day Session": "fullDay",
  "Evening Session": "evening",
};

// Sessions with bullet point speaker lists
const SESSIONS = [
  {
    id: 1,
    name: "Morning Session",
    description: (
      <ul className="list-disc list-inside space-y-2 text-gray-300 text-left px-2">
        <li>Mrs. Bela Shende</li>
        <li>Dr. Popatrao Pawar</li>
      </ul>
    ),
    price: 49,
    save: null,
  },
  {
    id: 2,
    name: "Full Day Session",
    description: (
      <ul className="list-disc list-inside space-y-2 text-gray-300 text-left px-2">
        <li>Mrs. Bela Shende</li>
        <li>Dr. Popatrao Pawar</li>
        <li>Mr. Rajan Chopra</li>
        <li>Mr. Nitin Pandey</li>
        <li>Mrs. Aishwarya Pissay</li>
      </ul>
    ),
    price: 69,
    save: "",
    popular: true,
  },
  {
    id: 3,
    name: "Evening Session",
    description: (
      <ul className="list-disc list-inside space-y-2 text-gray-300 text-left px-2">
        <li>Mr. Rajan Chopra</li>
        <li>Mr. Nitin Pandey</li>
        <li>Mrs. Aishwarya Pissay</li>
      </ul>
    ),
    price: 49,
    save: "",
  },
];

const InfoBox = ({ title, value }) => (
  <div className="header-box flex flex-col w-full min-w-[240px] max-w-[340px] border-2 border-[#EB0028] overflow-hidden mx-3 mb-3 rounded-2xl shadow-lg">
    <div className="p-6 font-bold text-2xl bg-[#EB0028] text-white">{title}</div>
    <div className="header-box-value text-lg py-8">{value}</div>
  </div>
);

// MERGED: SessionCard with sold out status and enhanced UI
const SessionCard = ({ session, onSelect, isSelected, isSoldOut }) => (
  <div
    className={`ticket-card ${session.popular ? "popular" : ""} ${
      isSelected ? "selected" : ""
    } ${isSoldOut ? "sold-out opacity-60" : "cursor-pointer"} relative bg-[#17171a]/90 border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-200 shadow-xl`}
    onClick={isSoldOut ? undefined : () => onSelect(session)}
    style={{ 
      minWidth: "320px", 
      maxWidth: "400px", 
      padding: "2.2rem", 
      marginBottom: "1rem", 
      borderRadius: "1.5rem",
      cursor: isSoldOut ? "not-allowed" : "pointer"
    }}
  >
    {session.popular && (
      <span className="absolute -top-4 left-1/2 -translate-x-1/2 save-tag uppercase font-bold text-xs tracking-wide bg-[#EB0028] text-white px-4 py-1 rounded-full shadow-lg">
        Most Popular
      </span>
    )}
    
    {/* SOLD OUT badge */}
    {isSoldOut && (
      <span className="absolute -top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
        SOLD OUT
      </span>
    )}
    
    <div className="flex justify-end mb-3">
      {typeof session.save === "string" && session.save.trim().length > 0 && <span className="save-tag">{session.save}</span>}
    </div>
    
    <h3 className="text-2xl font-bold mb-4 text-white text-center">{session.name}</h3>
    
    {/* Bullet list description */}
    <div className="text-base mb-6">{session.description}</div>
    
    <div className="flex justify-between items-end">
      <span className="text-4xl font-extrabold">₹{session.price}</span>
      <button
        className={`mt-2 text-base py-3 px-6 rounded-xl font-bold transition-all shadow-lg ${
          isSoldOut 
            ? 'bg-gray-500 cursor-not-allowed text-gray-300' 
            : 'bg-gradient-to-r from-[#EB0028] to-[#c20021] text-white hover:shadow-2xl hover:scale-[1.02]'
        }`}
        type="button"
        disabled={isSoldOut}
        onClick={(e) => {
          e.stopPropagation();
          if (!isSoldOut) onSelect(session);
        }}
      >
        {isSoldOut ? "Sold Out" : "Buy Now"}
      </button>
    </div>
  </div>
);

// MERGED: ConfirmModal with sold out checks
const ConfirmModal = ({ isOpen, onClose, formData, selectedSession, onPay, isSoldOut }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="modal-card relative p-10 w-full max-w-xl mx-2 rounded-2xl bg-[#1b1b1f] text-white shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-white bg-[#EB0028] rounded-full p-2 hover:bg-[#c20021] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <h2 className="text-2xl font-extrabold mb-4 text-[#EB0028] text-center">Confirm Your Details & Ticket</h2>
        <p className="text-base text-gray-300 mb-7 text-center">Please verify your details before payment.</p>
        
        {/* SOLD OUT warning */}
        {isSoldOut && (
          <div className="bg-red-900 border border-red-500 text-red-100 px-4 py-3 rounded mb-6 text-center">
            <strong>⚠️ This session is now sold out!</strong>
            <p className="text-sm mt-1">Please select a different session to proceed.</p>
          </div>
        )}
        
        <div className="flex flex-col gap-3 text-lg mb-9">
          <div><span className="font-bold text-[#EB0028]">Name:</span> <span className="ml-2">{formData.name}</span></div>
          <div><span className="font-bold text-[#EB0028]">Email:</span> <span className="ml-2">{formData.email}</span></div>
          <div><span className="font-bold text-[#EB0028]">Contact No.:</span> <span className="ml-2">{formData.phone}</span></div>
          <div><span className="font-bold text-[#EB0028]">Department:</span> <span className="ml-2">{formData.department}</span></div>
          <div><span className="font-bold text-[#EB0028]">Branch:</span> <span className="ml-2">{formData.branch}</span></div>
          <div><span className="font-bold text-[#EB0028]">Session:</span> <span className="ml-2">{selectedSession?.name}</span></div>
          <div><span className="font-bold text-[#EB0028]">Amount:</span> <span className="ml-2">₹{selectedSession?.price}</span></div>
        </div>
        
        <button 
          onClick={onPay} 
          disabled={isSoldOut}
          className={`w-full py-4 text-lg font-bold rounded-xl transition-colors mt-2 shadow-lg ${
            isSoldOut 
              ? 'bg-gray-500 text-gray-300 cursor-not-allowed' 
              : 'bg-[#EB0028] text-white hover:bg-[#c20021]'
          }`}
        >
          {isSoldOut ? "Session Sold Out" : "Pay Now"}
        </button>
      </div>
    </div>
  );
};

// MERGED: Error Notification component
const ErrorNotification = ({ message, onClose }) => {
  if (!message) return null;
  
  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-lg animate-bounce">
      <div className="bg-gradient-to-r from-[#EB0028] to-[#c20021] text-white font-bold text-lg px-6 py-4 rounded-2xl shadow-2xl flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg transition">✕</button>
      </div>
    </div>
  );
};

// Backend base URL
const API_BASE_URL = "https://backendoftedxdypakurdi.onrender.com";

const TicketPage = () => {
  const [selectedSession, setSelectedSession] = useState(null);
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    department: "", 
    branch: "" 
  });
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  // MERGED: Availability state from yesterday's version
  const [availability, setAvailability] = useState(null);
  const [loadingAvailability, setLoadingAvailability] = useState(true);
  
  // ref to details form for scrolling
  const detailsRef = useRef(null);

  // Load Razorpay SDK
  useEffect(() => {
    const existing = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
    if (existing) return;
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // MERGED: Fetch availability on component mount and periodically
  useEffect(() => {
    fetchAvailability();
    // Refresh availability every 30 seconds
    const interval = setInterval(fetchAvailability, 30000);
    return () => clearInterval(interval);
  }, []);

  // MERGED: Function to fetch availability from backend
  const fetchAvailability = async () => {
    try {
      console.log("🔄 Fetching availability...");
      const res = await fetch(`${API_BASE_URL}/api/payment/availability`);
      if (!res.ok) throw new Error("Failed to fetch availability");
      
      const data = await res.json();
      console.log("📊 Availability data:", data);
      
      setAvailability(data);
      setLoadingAvailability(false);
    } catch (error) {
      console.error("❌ Error fetching availability:", error);
      setLoadingAvailability(false);
      // Set default availability to prevent errors
      setAvailability({
        morningAvailable: 0,
        eveningAvailable: 0,
        fullDayAvailable: 0
      });
    }
  };

  // MERGED: Function to check if a specific session is sold out
  const isSessionSoldOut = (sessionName) => {
    if (!availability) return false;
    
    const sessionKey = SESSION_KEY[sessionName];
    switch (sessionKey) {
      case "morning":
        return availability.morningAvailable <= 0;
      case "evening":
        return availability.eveningAvailable <= 0;
      case "fullDay":
        return availability.fullDayAvailable <= 0;
      default:
        return false;
    }
  };

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedSession) {
      setErrorMessage("⚠️ Please select a session (Morning / Full Day / Evening) before proceeding.");
      return;
    }
    
    // MERGED: Check if selected session is sold out before showing modal
    if (isSessionSoldOut(selectedSession.name)) {
      setErrorMessage("🚫 This session is sold out! Please select a different session.");
      return;
    }
    
    setShowModal(true);
  };

  // Clear error automatically after 4 seconds
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  // MERGED: Pre-check availability function
  const precheckAvailability = async () => {
    try {
      // Refresh availability before payment
      await fetchAvailability();
      
      if (!selectedSession || !availability) return { ok: false, snapshot: null };
      
      const sessionKey = SESSION_KEY[selectedSession.name];
      let available = 0;
      
      switch (sessionKey) {
        case "morning":
          available = availability.morningAvailable;
          break;
        case "evening":
          available = availability.eveningAvailable;
          break;
        case "fullDay":
          available = availability.fullDayAvailable;
          break;
      }
      
      return { ok: available > 0, snapshot: availability };
    } catch (error) {
      console.error("Availability check error:", error);
      return { ok: false, snapshot: null };
    }
  };

  // MERGED: Payment initiation with enhanced error handling
  const initiatePayment = async () => {
    try {
      if (!selectedSession) return;

      // Double-check that session isn't sold out
      if (isSessionSoldOut(selectedSession.name)) {
        setErrorMessage(`🚫 The ${selectedSession.name} is now sold out! Please select a different session.`);
        setShowModal(false);
        return;
      }

      console.log("🎫 Starting payment process for:", selectedSession.name);

      // Pre-check availability
      const check = await precheckAvailability();
      if (!check.ok) {
        setErrorMessage("❌ Sorry, this session is sold out!");
        setShowModal(false);
        return;
      }

      // Create backend order
      const backendSessionKey = SESSION_KEY[selectedSession.name];
      const orderRes = await fetch(`${API_BASE_URL}/api/payment/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          amount: selectedSession.price,
          session: backendSessionKey
        }),
      });

      if (!orderRes.ok) {
        const errorData = await orderRes.json().catch(() => ({}));
        if (orderRes.status === 409 || errorData.error === "Seats are full") {
          setErrorMessage(`🚫 Sorry! All seats for the ${selectedSession.name} are now sold out. Please try a different session.`);
          fetchAvailability();
        } else {
          setErrorMessage("Failed to create payment order.");
        }
        setShowModal(false);
        return;
      }

      const orderData = await orderRes.json();
      if (!orderData.id) {
        setErrorMessage("Failed to create payment order. Try again later.");
        setShowModal(false);
        return;
      }

      if (!window.Razorpay) {
        setErrorMessage("Razorpay SDK not loaded.");
        return;
      }

      // Open Razorpay
      const options = {
        key: process.env.TEDX_RAZORPAY_KEY_ID,
        amount: selectedSession.price * 100,
        currency: "INR",
        name: "TEDx DYP Akurdi",
        description: `${selectedSession.name} Ticket`,
        order_id: orderData.id,
        handler: (response) => verifyPayment(response),
        prefill: { name: formData.name, email: formData.email, contact: formData.phone },
        theme: { color: "#EB0028" },
        modal: {
          ondismiss: function() {
            console.log("Payment modal closed by user");
            setShowModal(false);
          }
        }
      };

      new window.Razorpay(options).open();
      setShowModal(false);
    } catch (err) {
      console.error("Payment initiation error:", err);
      setErrorMessage("Error initiating payment.");
      setShowModal(false);
    }
  };

  // MERGED: Payment verification
  const verifyPayment = async (response) => {
    try {
      console.log("💳 Verifying payment...");
      const backendSessionKey = SESSION_KEY[selectedSession.name];
      
      const res = await fetch(`${API_BASE_URL}/api/payment/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          department: formData.department,
          branch: formData.branch,
          session: backendSessionKey,
          amount: selectedSession.price,
        }),
      });

      const data = await res.json();
      if (data.success) {
        console.log("✅ Payment verified successfully:", data.ticketId);
        window.location.href = `/success?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&phone=${encodeURIComponent(formData.phone)}&amount=${selectedSession.price}&ticketId=${data.ticketId}&razorpayPaymentId=${response.razorpay_payment_id}`;
      } else {
        console.error("❌ Payment verification failed:", data);
        setErrorMessage(data.message || "Payment verification failed.");
      }
    } catch (e) {
      console.error("Payment verification error:", e);
      setErrorMessage("Error verifying payment.");
    }
  };

  // MERGED: Smooth scroll function
  const handleSessionSelect = (session) => {
    setSelectedSession(session);
    requestAnimationFrame(() => {
      if (detailsRef.current) {
        const top = detailsRef.current.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    });
  };

  // Get current sold out status for selected session
  const selectedSessionSoldOut = selectedSession ? isSessionSoldOut(selectedSession.name) : false;

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-x-hidden">
      
      {/* MERGED: Error Message Component */}
      <ErrorNotification message={errorMessage} onClose={() => setErrorMessage("")} />
      
      <div className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="section-title">Register for the TEDxDYPAkurdi Event!</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The flagship event of TEDxDYPAkurdi, a platform for experts and enthusiasts to voice their "Ideas worth spreading."
            </p>
          </div>

          {/* Event info */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-16">
            <InfoBox title="Date" value="12th September 2025" />
            <InfoBox title="Venue" value="Shantai Auditorium DYP Akurdi Campus" />
            <InfoBox title="Time" value="09 am Onwards" />
          </div>

          {/* Pricing */}
          <div className="text-center mb-12">
            <h2 className="section-title text-xl mb-8 text-gray-200">Pricing for the Tickets</h2>
            {loadingAvailability && (
              <div className="mb-6 text-gray-400">
                <p>🔄 Checking availability...</p>
              </div>
            )}
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
              {SESSIONS.map((session) => (
                <SessionCard
                  key={session.id}
                  session={session}
                  onSelect={handleSessionSelect}
                  isSelected={selectedSession?.id === session.id}
                  isSoldOut={isSessionSoldOut(session.name)}
                />
              ))}
            </div>
          </div>

          {/* Form */}
          <div ref={detailsRef} className="form-card max-w-4xl mx-auto px-8 md:px-16 py-12 rounded-3xl shadow-2xl mt-10 bg-[#17171a] border border-white/10">
            <h2 className="mb-10 text-3xl font-extrabold text-[#EB0028] tracking-wide flex items-end gap-3">
              Details <span className="block text-lg text-gray-300 font-normal pb-1">for next steps</span>
            </h2>
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-3 text-xl font-bold text-white">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full h-16 px-5 rounded-xl border-2 border-[#333] bg-[#0f0f12] text-white text-lg placeholder-gray-400 focus:ring-2 focus:ring-[#EB0028] focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-3 text-xl font-bold text-white">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full h-16 px-5 rounded-xl border-2 border-[#333] bg-[#0f0f12] text-white text-lg placeholder-gray-400 focus:ring-2 focus:ring-[#EB0028] focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-3 text-xl font-bold text-white">Contact No.</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your contact number"
                  className="w-full h-16 px-5 rounded-xl border-2 border-[#333] bg-[#0f0f12] text-white text-lg placeholder-gray-400 focus:ring-2 focus:ring-[#EB0028] focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="department" className="block mb-3 text-xl font-bold text-white">Department of Study <span className="text-base font-normal text-gray-300">(optional)</span></label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  placeholder="Enter your department"
                  className="w-full h-16 px-5 rounded-xl border-2 border-[#333] bg-[#0f0f12] text-white text-lg placeholder-gray-400 focus:ring-2 focus:ring-[#EB0028] focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="branch" className="block mb-3 text-xl font-bold text-white">Branch <span className="text-base font-normal text-gray-300">(optional)</span></label>
                <input
                  type="text"
                  id="branch"
                  name="branch"
                  value={formData.branch}
                  onChange={handleInputChange}
                  placeholder="Enter your branch"
                  className="w-full h-16 px-5 rounded-xl border-2 border-[#333] bg-[#0f0f12] text-white text-lg placeholder-gray-400 focus:ring-2 focus:ring-[#EB0028] focus:border-transparent transition"
                />
              </div>
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  disabled={!selectedSession || selectedSessionSoldOut}
                  className={`px-16 py-4 text-2xl rounded-xl font-extrabold shadow-lg transition-all ${
                    !selectedSession || selectedSessionSoldOut
                      ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                      : 'bg-gradient-to-r from-[#EB0028] to-[#c20021] hover:from-[#ff304a] hover:to-[#e0002a] text-white'
                  }`}
                >
                  {selectedSessionSoldOut ? "Session Sold Out" : "Proceed to pay"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ConfirmModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        formData={formData}
        selectedSession={selectedSession}
        onPay={initiatePayment}
        isSoldOut={selectedSessionSoldOut}
      />
    </div>
  );
};

export default TicketPage;
