// import React from "react";
// import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

// const Footer = () => {
//   // Smooth scroll function
//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <footer className="bg-[#0F0F0F] text-white px-6 sm:px-12 md:px-20 pt-12 pb-8">
//   {/* Top Row: Logo + Nav + Social */}
//   <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6 border-b border-white/20 pb-6 text-center md:text-left">
    
//     {/* Logo */}
//     <div className="flex items-center justify-center md:justify-start space-x-2">
//       <h1 className="text-2xl font-bold text-red-600 tracking-tight">
//         TED<sup className="text-xs align-super">x</sup>
//       </h1>
//       <span className="text-2xl font-light">DYPAkurdi</span>
//     </div>

//     {/* Nav + Social stacked */}
//     <div className="flex flex-col items-center md:items-end space-y-4">
//       {/* Nav Links */}
//       <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 text-base font-medium">
//         <button onClick={() => scrollToSection("home")} className="hover:text-red-500 transition">Home</button>
//         <span className="text-white/40">|</span>
//         <button onClick={() => scrollToSection("theme")} className="hover:text-red-500 transition">Theme</button>
//         <span className="text-white/40">|</span>
//         <button onClick={() => scrollToSection("speakers")} className="hover:text-red-500 transition">Speakers</button>
//         <span className="text-white/40">|</span>
//         <button onClick={() => scrollToSection("sponsors")} className="hover:text-red-500 transition">Sponsors</button>
//       </div>

//       {/* Social Icons */}
//       <div className="flex justify-center md:justify-end space-x-5">
//         <a href="https://www.instagram.com/tedxdypakurdi?igsh=MjRjZ2ZhM2pmODA5" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
//           <FaInstagram className="text-2xl" />
//         </a>
//         <a href="https://www.linkedin.com/company/tedxdypakurdi/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
//           <FaLinkedinIn className="text-2xl" />
//         </a>
//       </div>
//     </div>
//   </div>

//   {/* Copyright */}
//   <div className="mt-5 text-center text-xs text-white/60 max-w-4xl mx-auto leading-relaxed">
//     ©2025 <span className="text-red-600">TEDxDYPAkurdi</span>. This independent TEDx
//     event is operated under license from TED. |
//     <a href="#" className="hover:text-white px-1">Terms & Conditions</a> |
//     <a href="#" className="hover:text-white px-1">Privacy Policy</a>
//   </div>

//   {/* Designed & Developed */}
//   <div className="mt-8 text-center text-sm text-white/70 leading-relaxed space-y-2">
//     <div className="mb-3">
//       Designed with <span className="text-white">❤</span> by{" "}
//       <a href="https://www.linkedin.com/in/aditya-bhosale-648a992a3/" className="underline hover:text-red-500" target="_blank" rel="noopener noreferrer">
//         Aditya
//       </a>
//     </div>
//     <div className="mb-8">
//       Developed by{" "}
//       <a href="https://www.linkedin.com/in/yash---kumar/" className="underline hover:text-red-500" target="_blank" rel="noopener noreferrer">Yash</a>,{" "}
//       <a href="https://www.linkedin.com/in/vineet-hegde-6899222a4/" className="underline hover:text-red-500" target="_blank" rel="noopener noreferrer">Vineet</a>,{" "}
//       <a href="https://www.linkedin.com/in/saurabh-melgirkar-57ab3a310/" className="underline hover:text-red-500" target="_blank" rel="noopener noreferrer">Saurabh</a> and{" "}
//       <a href="https://www.linkedin.com/in/om-mahulkar-767b3632b/" className="underline hover:text-red-500" target="_blank" rel="noopener noreferrer">Om</a>
//     </div>
//   </div>
// </footer>

//   );
// };

// export default Footer;


import React, { useEffect } from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle redirect + smooth scroll
  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      // Agar home page par nahi ho → home par navigate karo with state
      navigate("/", { state: { targetId: id } });
    } else {
      // Agar already home par ho → sidha scroll karo
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // ✅ useEffect to handle smooth scroll on navigation
  useEffect(() => {
    if (location.state?.targetId) {
      const section = document.getElementById(location.state.targetId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100); // thoda delay taki DOM render ho jaye
      }
      // URL ko clean karna (/#id na dikhe)
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [location]);

  return (
    <footer className="bg-[#0F0F0F] text-white px-6 sm:px-12 md:px-20 pt-12 pb-8">
      {/* Top Row: Logo + Nav + Social */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6 border-b border-white/20 pb-6 text-center md:text-left">
        
        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start space-x-2">
          <h1 className="text-2xl font-bold text-red-600 tracking-tight">
            TED<sup className="text-xs align-super">x</sup>
          </h1>
          <span className="text-2xl font-light">DYPAkurdi</span>
        </div>

        {/* Nav + Social stacked */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          {/* Nav Links */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 text-base font-medium">
            <button
              onClick={() => handleNavClick("home")}
              className="hover:text-red-500 transition"
            >
              Home
            </button>
            <span className="text-white/40">|</span>
            <button
              onClick={() => handleNavClick("theme")}
              className="hover:text-red-500 transition"
            >
              Theme
            </button>
            <span className="text-white/40">|</span>
            <button
              onClick={() => handleNavClick("speakers")}
              className="hover:text-red-500 transition"
            >
              Speakers
            </button>
            <span className="text-white/40">|</span>
            <button
              onClick={() => handleNavClick("sponsors")}
              className="hover:text-red-500 transition"
            >
              Sponsors
            </button>
            <span className="text-white/40">|</span>
            {/* ✅ Blog (abhi ke liye kuch nahi karega) */}
            <button
              onClick={() => {}} 
              className="hover:text-red-500 transition"
            >
              Blog
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end space-x-5">
            <a
              href="https://www.instagram.com/tedxdypakurdi?igsh=MjRjZ2ZhM2pmODA5"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/company/tedxdypakurdi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaLinkedinIn className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-5 text-center text-xs text-white/60 max-w-4xl mx-auto leading-relaxed">
        ©2025 <span className="text-red-600">TEDxDYPAkurdi</span>. This independent TEDx
        event is operated under license from TED. |
        <a href="#" className="hover:text-white px-1">Terms & Conditions</a> |
        <a href="#" className="hover:text-white px-1">Privacy Policy</a>
      </div>

      {/* Designed & Developed */}
      <div className="mt-8 text-center text-sm text-white/70 leading-relaxed space-y-2">
        <div className="mb-3">
          Designed with <span className="text-white">❤</span> by{" "}
          <a
            href="https://www.linkedin.com/in/aditya-bhosale-648a992a3/"
            className="underline hover:text-red-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aditya
          </a>
        </div>
        <div className="mb-8">
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/yash---kumar/"
            className="underline hover:text-red-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yash
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/vineet-hegde-6899222a4/"
            className="underline hover:text-red-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vineet
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/saurabh-melgirkar-57ab3a310/"
            className="underline hover:text-red-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Saurabh
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/om-mahulkar-767b3632b/"
            className="underline hover:text-red-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Om
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

