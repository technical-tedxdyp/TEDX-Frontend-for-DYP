// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import lenis from "../lenis";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const location = useLocation();
//   const navigate = useNavigate();

//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (el) {
//       lenis.scrollTo(el);
//       setIsOpen(false);
//     }
//   };

//   // 🔥 Home button
//   const handleHomeClick = () => {
//     if (location.pathname === "/") {
//       scrollToSection("home");
//     } else {
//       navigate("/");
//     }
//   };

//   // 🔥 Speakers button
//   const handleSpeakersClick = () => {
//     if (location.pathname === "/") {
//       scrollToSection("speakers");
//     } else {
//       navigate("/", { state: { scrollTo: "speakers" } });
//     }
//   };

//   // 🔥 Sponsors button
//   const handleSponsorsClick = () => {
//     if (location.pathname === "/") {
//       scrollToSection("sponsors");
//     } else {
//       navigate("/", { state: { scrollTo: "sponsors" } });
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ✅ When navigating back to Home with scroll target
//   useEffect(() => {
//     if (location.pathname === "/" && location.state?.scrollTo) {
//       const section = location.state.scrollTo;
//       setTimeout(() => {
//         scrollToSection(section);
//       }, 300); // thoda delay taaki page render ho jaye
//     }
//   }, [location]);

//   return (
//     <header
//       className={`flex justify-between items-center py-4 px-5 
//         sticky top-0 z-50 transition-all duration-300 border-b border-white/10
//         ${isScrolled ? "bg-transparent backdrop-blur-xl" : "bg-transparent backdrop-blur-md"}
//       `}
//     >
//       {/* Logo */}
//       <div className="flex items-center">
//         <img
//           src="https://raw.githubusercontent.com/Yash555558/imggg/refs/heads/main/tedx-dyp-logo.png"
//           alt="TEDx Logo"
//           className="h-8 w-auto sm:h-10"
//         />
//       </div>

//       {/* Desktop Menu */}
//       <nav className="hidden md:flex items-center space-x-8 text-sm lg:text-base">
//         {/* ✅ Home */}
//         <button
//           onClick={handleHomeClick}
//           className="hover:text-[#EB0028] transition"
//         >
//           Home
//         </button>

//         {/* ✅ Speakers */}
//         <button
//           onClick={handleSpeakersClick}
//           className="hover:text-[#EB0028] transition"
//         >
//           Speakers
//         </button>

//         {/* ✅ Sponsors */}
//         <button
//           onClick={handleSponsorsClick}
//           className="hover:text-[#EB0028] transition"
//         >
//           Sponsors
//         </button>

//         {/* Get Tickets */}
//         <Link
//           to="/get-ticket"
//           className="ml-4 px-4 py-2 rounded-2xl text-sm lg:text-base 
//                      bg-[#EB0028] text-white transition-all duration-300 
//                      hover:bg-[#b0001d] active:bg-[#800014]"
//         >
//           Get Tickets
//         </Link>
//       </nav>

//       {/* Mobile Hamburger */}
//       <div className="md:hidden">
//         <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
// {isOpen && (
//   <div
//     className="absolute top-full left-0 w-full 
//       bg-black !bg-black z-50   // 🔥 force solid black bg
//       flex flex-col items-center py-5 space-y-4 md:hidden shadow-lg border-t border-white/10 
//       animate-slideDown"        // 👈 animation class add kiya
//   >
//     {/* ✅ Home */}
//     <button
//       onClick={() => {
//         handleHomeClick();
//         setIsOpen(false);
//       }}
//       className="text-white hover:text-[#EB0028] transition"
//     >
//       Home
//     </button>

//     {/* ✅ Speakers */}
//     <button
//       onClick={() => {
//         handleSpeakersClick();
//         setIsOpen(false);
//       }}
//       className="text-white hover:text-[#EB0028] transition"
//     >
//       Speakers
//     </button>

//     {/* ✅ Sponsors */}
//     <button
//       onClick={() => {
//         handleSponsorsClick();
//         setIsOpen(false);
//       }}
//       className="text-white hover:text-[#EB0028] transition"
//     >
//       Sponsors
//     </button>

//     {/* ✅ About */}
//     <button
//       onClick={() => scrollToSection("about")}
//       className="text-white hover:text-[#EB0028] transition"
//     >
//       About
//     </button>

//     {/* ✅ Mobile Get Tickets */}
//     <Link
//       to="/get-ticket"
//       onClick={() => setIsOpen(false)}
//       className="ml-4 relative group overflow-hidden px-4 py-2 rounded-2xl text-sm lg:text-base 
//                  bg-[#EB0028] text-white transition-all duration-300 
//                  hover:bg-[#800002] active:bg-[#400001]"
//     >
//       <span className="relative z-10">Get Tickets</span>
//     </Link>
//   </div>
// )}
//     </header>
//   );
// }


import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// REMOVED: import lenis from "../lenis";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // UPDATED: Native smooth scroll function (replaces lenis.scrollTo)
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  // 🔥 Home button
  const handleHomeClick = () => {
    if (location.pathname === "/") {
      scrollToSection("home");
    } else {
      navigate("/", { state: { scrollTo: "home" } });
    }
  };

  // 🔥 Speakers button
  const handleSpeakersClick = () => {
    if (location.pathname === "/") {
      scrollToSection("speakers");
    } else {
      navigate("/", { state: { scrollTo: "speakers" } });
    }
  };

  // 🔥 Sponsors button
  const handleSponsorsClick = () => {
    if (location.pathname === "/") {
      scrollToSection("sponsors");
    } else {
      navigate("/", { state: { scrollTo: "sponsors" } });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ When navigating back to Home with scroll target
  useEffect(() => {
    if (location.pathname === "/") {
      let section = null;
      // case 1: navigate with state
      if (location.state?.scrollTo) {
        section = location.state.scrollTo;
      }
      // case 2: direct /#id navigation
      if (location.hash) {
        section = location.hash.replace("#", "");
      }
      if (section) {
        setTimeout(() => {
          scrollToSection(section);
        }, 300); // delay for page render
      }
    }
  }, [location]);

  return (
    <header
      className={`flex justify-between items-center py-4 px-5 
        sticky top-0 z-50 transition-all duration-300 border-b border-white/10
        ${isScrolled ? "bg-transparent backdrop-blur-xl" : "bg-transparent backdrop-blur-md"}
      `}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://raw.githubusercontent.com/Yash555558/imggg/refs/heads/main/tedx-dyp-logo.png"
          alt="TEDx Logo"
          className="h-8 w-auto sm:h-10"
        />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center space-x-8 text-sm lg:text-base">
        {/* ✅ Home */}
        <button
          onClick={handleHomeClick}
          className="hover:text-[#EB0028] transition"
        >
          Home
        </button>

        {/* ✅ Speakers */}
        <button
          onClick={handleSpeakersClick}
          className="hover:text-[#EB0028] transition"
        >
          Speakers
        </button>

        {/* ✅ Sponsors */}
        <button
          onClick={handleSponsorsClick}
          className="hover:text-[#EB0028] transition"
        >
          Sponsors
        </button>

        {/* ✅ Blog (placeholder) */}
        <button
          onClick={() => {}}
          className="hover:text-[#EB0028] transition"
        >
          Blog
        </button>

        {/* Get Tickets */}
        <Link
          to="/get-ticket"
          className="ml-4 px-4 py-2 rounded-2xl text-sm lg:text-base 
                     bg-[#EB0028] text-white transition-all duration-300 
                     hover:bg-[#b0001d] active:bg-[#800014]"
        >
          Get Tickets
        </Link>
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="absolute top-full left-0 w-full 
            bg-black !bg-black z-50
            flex flex-col items-center py-5 space-y-4 md:hidden shadow-lg border-t border-white/10 
            animate-slideDown"
        >
          {/* ✅ Home */}
          <button
            onClick={() => {
              handleHomeClick();
              setIsOpen(false);
            }}
            className="text-white hover:text-[#EB0028] transition"
          >
            Home
          </button>

          {/* ✅ Speakers */}
          <button
            onClick={() => {
              handleSpeakersClick();
              setIsOpen(false);
            }}
            className="text-white hover:text-[#EB0028] transition"
          >
            Speakers
          </button>

          {/* ✅ Sponsors */}
          <button
            onClick={() => {
              handleSponsorsClick();
              setIsOpen(false);
            }}
            className="text-white hover:text-[#EB0028] transition"
          >
            Sponsors
          </button>

          {/* ✅ Blog */}
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className="text-white hover:text-[#EB0028] transition"
          >
            Blog
          </button>

          {/* ✅ Mobile Get Tickets */}
          <Link
            to="/get-ticket"
            onClick={() => setIsOpen(false)}
            className="ml-4 px-4 py-2 rounded-2xl text-sm lg:text-base 
                       bg-[#EB0028] text-white transition-all duration-300 
                       hover:bg-[#800002] active:bg-[#400001]"
          >
            Get Tickets
          </Link>
        </div>
      )}
    </header>
  );
}
