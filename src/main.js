import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";   // <-- Import Element

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
              {/* Wrap sections in <Element> with matching names */}
              <Element name="home">
                <Home />
              </Element>

              {/* <Element name="theme">
                {/* If you have a Theme component, place it here
                <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                  <h1 className="text-4xl">Theme Section</h1>
                </div> */}
                
             {/* </> </Element> */} 

              <Element name="speakers">
                <Speakers />
              </Element>

              <Element name="sponsors">
                <Sponsors />
              </Element>
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

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
