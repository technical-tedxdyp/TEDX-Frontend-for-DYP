// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Element } from "react-scroll";

// import Header from "./components/Header";
// import Home from "./components/Home";
// import Speakers from "./components/Speakers";
// import Sponsors from "./components/Sponsors";
// import Footer from "./components/Footer";
// import GetTicket from "./components/GetTicket";
// import SuccessPage from "./components/SuccessPage";

// import "../src/index.css";

// function App() {
//   return (
//     <Router>
//       <Header />   {/* Always visible */}
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               {/* Wrap sections in <Element> with matching names */}
//               <Element name="home">
//                 <Home />
//               </Element>

//               {/* Uncomment and add Theme component when ready
//               <Element name="theme">
//                 <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
//                   <h1 className="text-4xl">Theme Section</h1>
//                 </div>
//               </Element>
//               */}

//               <Element name="speakers">
//                 <Speakers />
//               </Element>

//               <Element name="sponsors">
//                 <Sponsors />
//               </Element>
//             </>
//           }
//         />
//         <Route path="/get-ticket" element={<GetTicket />} />
//         <Route path="/success" element={<SuccessPage />} />
//       </Routes>
//       <Footer />   {/* Always visible */}
//     </Router>
//   );
// }

// // Check if root element exists before rendering
// const rootElement = document.getElementById("root");
// if (rootElement) {
//   ReactDOM.createRoot(rootElement).render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// } else {
//   console.error("Root element not found. Make sure your index.html has a div with id='root'");
// }

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// REMOVED: import { Element } from "react-scroll";
import Header from "./components/Header";
import Home from "./components/Home";
import Speakers from "./components/Speakers";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import GetTicket from "./components/GetTicket";
import SuccessPage from "./components/SuccessPage";
import "../src/index.css";

function App() {
  return (
    <Router>
      <Header />   {/* Always visible */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* CHANGED: Replace Element with div + id for native scrolling */}
              <div id="home">
                <Home />
              </div>
              
              {/* Uncomment and add Theme component when ready
              <div id="theme">
                <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                  <h1 className="text-4xl">Theme Section</h1>
                </div>
              </div>
              */}
              
              <div id="speakers">
                <Speakers />
              </div>
              
              <div id="sponsors">
                <Sponsors />
              </div>
            </>
          }
        />
        <Route path="/get-ticket" element={<GetTicket />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
      <Footer />   {/* Always visible */}
    </Router>
  );
}

// Check if root element exists before rendering
const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found. Make sure your index.html has a div with id='root'");
}
