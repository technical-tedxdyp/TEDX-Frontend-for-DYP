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

const mongoose = require('mongoose');

const EventCapacitySchema = new mongoose.Schema(
  {
    // Unique event key
    eventId: { type: String, required: true, unique: true, index: true, trim: true },
    
    // Seats configuration
    totalSeats: { type: Number, required: true, min: 0 },      // e.g., 6
    
    // REMOVED: totalUnits and usedUnits - these were causing confusion
    // We'll calculate availability directly from session counts
    
    // Session counters
    fullDay:        { type: Number, default: 0, min: 0 },      // number of full-day tickets
    morningSingles: { type: Number, default: 0, min: 0 },      // morning-only tickets
    eveningSingles: { type: Number, default: 0, min: 0 },      // evening-only tickets
    
    // ADDED: Version field for optimistic concurrency control
    version: { type: Number, default: 0, min: 0 },             // incremented on each update
  },
  { 
    versionKey: false, // We're using our custom version field instead of __v
    timestamps: true, 
    toJSON: { virtuals: true }, 
    toObject: { virtuals: true } 
  }
);

// Derived availability calculations (not stored in database)
EventCapacitySchema.virtual('morningAvailable').get(function () {
  return Math.max(0, this.totalSeats - (this.fullDay + this.morningSingles));
});

EventCapacitySchema.virtual('eveningAvailable').get(function () {
  return Math.max(0, this.totalSeats - (this.fullDay + this.eveningSingles));
});

EventCapacitySchema.virtual('fullDayAvailable').get(function () {
  // A full-day seat requires a seat available in BOTH morning and evening
  return Math.min(this.morningAvailable, this.eveningAvailable);
});

// ADDED: Virtual for total occupied seats (useful for debugging)
EventCapacitySchema.virtual('totalOccupied').get(function () {
  return Math.max(
    this.fullDay + this.morningSingles, // morning session occupancy
    this.fullDay + this.eveningSingles  // evening session occupancy
  );
});

// Defensive normalization and validation
EventCapacitySchema.pre('validate', function (next) {
  // Ensure totalSeats is valid
  if (!Number.isFinite(this.totalSeats) || this.totalSeats < 0) {
    this.totalSeats = 6; // Default to 6 seats
  }
  
  // Ensure version is valid
  if (!Number.isFinite(this.version) || this.version < 0) {
    this.version = 0;
  }
  
  // Ensure all counters are non-negative integers
  for (const field of ['fullDay', 'morningSingles', 'eveningSingles']) {
    const value = Number(this[field]);
    this[field] = Number.isFinite(value) && value >= 0 ? Math.floor(value) : 0;
  }
  
  // ADDED: Validation to prevent logical inconsistencies
  const morningOccupied = this.fullDay + this.morningSingles;
  const eveningOccupied = this.fullDay + this.eveningSingles;
  
  if (morningOccupied > this.totalSeats) {
    return next(new Error(`Morning sessions exceed total seats: ${morningOccupied} > ${this.totalSeats}`));
  }
  
  if (eveningOccupied > this.totalSeats) {
    return next(new Error(`Evening sessions exceed total seats: ${eveningOccupied} > ${this.totalSeats}`));
  }
  
  next();
});

// ADDED: Pre-save middleware to increment version on updates
EventCapacitySchema.pre('save', function(next) {
  // Only increment version if this is an update (not initial creation)
  if (!this.isNew && this.isModified(['fullDay', 'morningSingles', 'eveningSingles', 'totalSeats'])) {
    this.version += 1;
  }
  next();
});

// ADDED: Static method for atomic seat reservation with version check
EventCapacitySchema.statics.reserveSeat = async function(eventId, sessionType, transactionSession) {
  const filter = { eventId };
  let inc = { version: 1 };
  
  // Get current capacity first
  const currentCap = await this.findOne(filter, null, { session: transactionSession });
  if (!currentCap) {
    throw new Error('EVENT_NOT_FOUND');
  }
  
  // Check availability and set increment based on session type
  if (sessionType === 'fullDay') {
    const morningOccupied = currentCap.fullDay + currentCap.morningSingles;
    const eveningOccupied = currentCap.fullDay + currentCap.eveningSingles;
    
    if (morningOccupied >= currentCap.totalSeats || eveningOccupied >= currentCap.totalSeats) {
      throw new Error('SOLD_OUT');
    }
    inc.fullDay = 1;
  } else if (sessionType === 'morning') {
    const morningOccupied = currentCap.fullDay + currentCap.morningSingles;
    if (morningOccupied >= currentCap.totalSeats) {
      throw new Error('SOLD_OUT');
    }
    inc.morningSingles = 1;
  } else if (sessionType === 'evening') {
    const eveningOccupied = currentCap.fullDay + currentCap.eveningSingles;
    if (eveningOccupied >= currentCap.totalSeats) {
      throw new Error('SOLD_OUT');
    }
    inc.eveningSingles = 1;
  } else {
    throw new Error('INVALID_SESSION_TYPE');
  }
  
  // Atomic update with version check (optimistic concurrency control)
  const updatedCap = await this.findOneAndUpdate(
    { 
      eventId,
      version: currentCap.version // This ensures no other transaction modified the document
    },
    { $inc: inc },
    { 
      new: true, 
      session: transactionSession,
      runValidators: true 
    }
  );
  
  if (!updatedCap) {
    throw new Error('SOLD_OUT'); // Version conflict or capacity exceeded
  }
  
  return updatedCap;
};

// Indexes for performance
EventCapacitySchema.index({ eventId: 1, version: 1 }); // For atomic updates
EventCapacitySchema.index({ eventId: 1, updatedAt: -1 }); // For reporting

// Reuse if already compiled to avoid OverwriteModelError
module.exports = mongoose.models.EventCapacity || mongoose.model('EventCapacity', EventCapacitySchema);
