// import React from "react";
// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <main className="bg-[#0F0F0F] text-white font-sans overflow-x-hidden scroll-smooth">
      
//       {/* Hero Section */}
//       <section
//         id="home"
//         className="relative overflow-hidden text-center py-16 sm:py-20 md:py-24 px-4 scroll-mt-20"
//       >
//         {/* Left Blur */}
//         <img
//           src="https://raw.githubusercontent.com/Yash555558/imggg/refs/heads/main/blur-x.png"
//           alt=""
//           className="absolute top-0 left-0 w-64 sm:w-80 md:w-[406px] h-auto blur-[40px] sm:blur-[54px] pointer-events-none z-0"
//         />

//         {/* Right Blur */}
//         <img
//           src="https://raw.githubusercontent.com/Yash555558/imggg/refs/heads/main/blur-x.png"
//           alt=""
//           className="absolute top-10 right-0 w-64 sm:w-80 md:w-[406px] h-auto blur-[40px] sm:blur-[54px] pointer-events-none z-0"
//         />

//         {/* Main X Logo */}
//         <img
//           src="https://github.com/Yash555558/imggg/blob/main/x-logo.png?raw=true"
//           alt="X Logo"
//           className="relative z-10 mx-auto h-28 sm:h-36 md:h-60 mb-4 sm:mb-6"
//         />

//         <h1
//           className="relative z-10 text-2xl sm:text-4xl md:text-5xl font-light leading-snug text-[#EEE]"
//           style={{ fontFamily: 'Playfair Display, serif' }}
//         >
//           Between <span className="italic text-[#F5DEB3]" style={{ fontFamily: 'Lora, serif' }}>Light</span> and{" "}
//           <span className="italic text-[#888]" style={{ fontFamily: 'Lora, serif' }}>Shadow</span>
//           <br />
//           <span>Lies the Spectrum of Ideas</span>
//         </h1>

//         <p className="relative z-10 text-xs sm:text-sm md:text-base text-[#BBBBBB] mt-3 mb-5 sm:mt-4">
//           An exploration of duality through the worlds of Kafka and Tolstoy
//         </p>

//         {/* ✅ Get Tickets Button */}
//         <Link 
//           to="/get-ticket" 
//           className="relative z-10 mt-5 sm:mt-6 bg-[#EB0028] hover:bg-red-700 text-white px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition inline-block text-center"
//         >
//           Get tickets
//         </Link>
//       </section>

//       {/* Info Cards */}
// <section className="flex flex-col md:flex-row justify-center items-stretch gap-6 sm:gap-8 px-4 sm:px-6 pt-8 sm:pt-10 pb-6 sm:pb-8 scroll-mt-20">
//   {[
//     {
//       title: "What is TED?",
//       desc: "TED is a global platform for sharing powerful ideas through short, impactful talks. It aims to spark conversations and inspire change across all disciplines.",
//     },
//     {
//       title: "What is TEDx?",
//       desc: "TEDx is a local, self-organized event licensed by TED to spread ideas in communities. It brings people together to share unique stories, insights, and experiences.",
//     },
//     {
//       title: "What is TEDxDYPakurdi?",
//       desc: "TEDxDYPakurdi is an independently organized TEDx event. It brings bold ideas and inspiring voices from our campus and community to the stage.",
//     },
//   ].map((card, index) => (
//     <div
//       key={index}
//       className="relative p-5 sm:p-6 w-full max-w-xs min-h-[280px] text-center
//         rounded-[30px]  sm:rounded-[40px] border-[2px] sm:border-[3px] border-white/40
//         overflow-hidden transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[rgba(253,233,177,0.18)]"
//       style={{
//         background:
//           "linear-gradient(153deg, rgba(255,241,214,0.16) -40%, rgba(255,248,236,0.06) 50%, rgba(255,241,220,0.04) 110%)",
//         backdropFilter: "blur(25px)",
//         WebkitBackdropFilter: "blur(25px)",
//         boxShadow: "0 8px 30px rgba(0,0,0,0.36)",
//       }}
//     >
//       {/* Background Glow Layers */}
//       <div className="pointer-events-none absolute inset-0 z-0">
//         <div
//           className="absolute -left-8 -top-10 w-48 h-48 rounded-full blur-[56px] opacity-40"
//           style={{
//             background:
//               "radial-gradient(closest-side, rgba(249,233,177,0.26), rgba(249,233,177,0.02))",
//           }}
//         />
//         <div
//           className="absolute -right-6 -bottom-8 w-36 h-36  rounded-full blur-[34px] opacity-30"
//           style={{
//             background:
//               "radial-gradient(closest-side, rgba(150,123,255,0.13), rgba(150,123,255,0.00))",
//           }}
//         />
//         <div className="absolute top-4 right-4 w-10 h-10 rounded-full blur-xl opacity-60 bg-purple-500/40" />
//         <div className="absolute bottom-4 left-5 w-14 h-14 rounded-full blur-xl opacity-50 bg-[#FDE9B1]/40" />
//       </div>

//       {/* Content */}
//       <h3
//   className="relative z-10 text-lg sm:text-xl mt-4 mb-5 text-[#FDE9B1]"
//   style={{
//     fontFamily: 'Playfair Display, serif',
//     fontWeight: 400,
//     textShadow: "0 0 12px rgba(253,233,177,0.85)",
//   }}
// >
//   {card.title}
// </h3>

//       <p
//         className="relative z-10 text-[#d6c6b1] text-sm sm:text-base leading-relaxed"
//         style={{ fontFamily: 'Lora, serif', fontWeight: 400 }}
//       >
//         {card.desc}
//       </p>
//     </div>
//   ))}
// </section>


//       {/* Theme Section */}
// <section
//   id="theme"
//   className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
//   style={{
//     backgroundImage: `url('https://raw.githubusercontent.com/Yash555558/imggg/refs/heads/main/77.png')`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   }}
// >
//   {/* Left Image - hide on mobile */}
// <img
//   src="https://raw.githubusercontent.com/Yash555558/imggg/refs/heads/main/2d7fb19248c88abb2041202c96ff993acce9c325.png"
//   alt="Kafka"
//   className="hidden md:block absolute left-0 bottom-0 object-contain
//              max-h-[90%] h-auto w-auto
//              md:max-h-[75%]
//              transition-all duration-500 ease-in-out"
// />

// {/* Right Image - hide on mobile */}
// <img
//   src="https://raw.githubusercontent.com/Yash555558/imggg/refs/heads/main/image-removebg-preview%202.png"
//   alt="Tolstoy"
//   className="hidden md:block absolute right-0 bottom-0 object-contain
//              max-h-[90%] h-auto w-auto
//              md:max-h-[75%]
//              transition-all duration-500 ease-in-out"
// />


//   {/* Center Content */}
//   <div className="text-center max-w-3xl px-4 sm:px-6 md:px-8 transition-all duration-500 ease-in-out">
//     <h2
//       className="text-[#F9E7C2] text-xl sm:text-2xl md:text-3xl font-light mb-6"
//       style={{
//         fontFamily: "Prata, serif",
//         textShadow:
//           "0 0 10px rgba(249, 231, 194, 0.8), 0 0 20px rgba(249, 231, 194, 0.6)",
//       }}
//     >
//       Theme
//     </h2>

//     <h3
//       className="text-[#F9E7C2] text-2xl sm:text-3xl md:text-5xl font-normal leading-snug mb-6"
//       style={{
//         fontFamily: "Prata, serif",
//         textShadow:
//           "0 0 10px rgba(249, 231, 194, 0.8), 0 0 20px rgba(249, 231, 194, 0.6)",
//       }}
//     >
//       THE KAFKA <br className="hidden sm:block" /> AND{" "}
//       <br className="hidden sm:block" /> THE TOLSTOY
//     </h3>

//     <p
//       className="text-[#F9E7C2] text-sm sm:text-base leading-relaxed px-2 sm:px-0"
//       style={{
//         fontFamily: "Prata, serif",
//       }}
//     >
//       In every story, every soul, and every choice, there lies a balance between light
//       and dark. This year, TEDxDYPakurdi explores the duality of life through the
//       opposing worlds of Kafka and Tolstoy, a reflection of chaos and clarity, despair
//       and hope, shadows and brilliance.
//     </p>
//   </div>
// </section>






      
//     {/* Kafka Section */}
// <section className="relative mt-30 mb-25 flex flex-col md:flex-row items-center px-4 sm:px-6 py-8 sm:py-12 max-w-6xl mx-auto gap-8 sm:gap-12 scroll-mt-20">
//   {/* Gradient Blur BG */}
//   <div
//     className="absolute left-[-5rem] top-[-5rem] w-[50rem] h-[50rem] rounded-full rotate-[158deg] pointer-events-none z-0"
//     style={{
//       background:
//         "linear-gradient(135deg, rgba(240, 147, 251, 0.50) 0%, rgba(245, 87, 108, 0.50) 19.38%, rgba(213, 190, 116, 0.50) 39.17%, rgba(88, 45, 22, 0.50) 59.49%, rgba(83, 43, 16, 0.50) 79.8%, rgba(111, 134, 214, 0.50) 100%)",
//       filter: "blur(150px)",
//     }}
//   />

//   {/* Image with shifted double oval */}
//   <div className="flex-shrink-0 relative z-10 flex justify-center">
//     {/* Outer Oval (height reduced by 3rem) */}
//     <div className="w-[20rem] sm:w-[22rem] md:w-[25rem] h-[27rem] sm:h-[30rem] md:h-[33rem] rounded-[50%] border-[0.1rem] border-[#FFEACC] relative">
      
//       {/* Inner Oval shifted horizontally by 1rem */}
//       <div className="absolute top-0 left-[1rem] w-full h-full rounded-[50%] border-[0.15rem] border-[#FFEACC]/70"></div>
      
//       {/* Image same size as inner oval */}
//       <img
//         src="https://raw.githubusercontent.com/Yash555558/imggg/refs/heads/main/kafka.png"
//         alt="Franz Kafka"
//         className="absolute top-1 left-[1.2rem] w-[98.7%] h-[99%] rounded-[50%] object-cover"
//       />
//     </div>
//   </div>

//   {/* Text */}
//   <div className="text-left mb-25 text-gray-300 max-w-xl relative z-10">
//     <h2
//       className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] text-[#F9E7C2] font-light mb-[0.8rem] relative"
//       style={{
//         fontFamily: "Prata, serif",
//         textShadow:
//           "0 0 10px rgba(249, 231, 194, 0.8), 0 0 20px rgba(249, 231, 194, 0.6)",
//         top: "-0.5rem"
//       }}
//     >
//       Franz <span className="block">Kafka</span>
//     </h2>

//     <p className="italic text-[0.9rem] sm:text-[1rem] text-[#FFEACC] mb-[1rem]">
//       "I am a cage, in search of a bird."
//     </p>
//     <p className="text-[0.9rem] sm:text-[1rem] md:text-[1.05rem] text-[#F9E7C2] leading-relaxed">
//       Franz Kafka’s writing dives into the shadows of the human mind: surreal,
//       unsettling, and deeply psychological. His stories often explore fear,
//       alienation, and the absurdity of modern life, pulling readers into
//       dreamlike worlds where reality feels fragile.
//     </p>
//   </div>
// </section>












//       {/* Tolstoy Section */}
// <section className="relative flex flex-col md:flex-row-reverse items-center px-4 sm:px-6 py-8 sm:py-12 max-w-6xl mx-auto gap-8 sm:gap-12 scroll-mt-20">
//   {/* Gradient Blur BG */}
//   <div
//     className="absolute right-[-5rem] top-[-5rem] w-[50rem] h-[50rem] rounded-full rotate-[158deg] pointer-events-none z-0"
//     style={{
//       background:
//         "linear-gradient(135deg, rgba(240, 147, 251, 0.50) 0%, rgba(245, 87, 108, 0.50) 19.38%, rgba(213, 190, 116, 0.50) 39.17%, rgba(88, 45, 22, 0.50) 59.49%, rgba(83, 43, 16, 0.50) 79.8%, rgba(111, 134, 214, 0.50) 100%)",
//       filter: "blur(150px)",
//     }}
//   />

//   {/* Image with shifted double oval */}
//   <div className="flex-shrink-0 relative z-10 flex justify-center">
//     {/* Outer Oval */}
//     <div className="w-[20rem] sm:w-[22rem] md:w-[25rem] h-[27rem] sm:h-[30rem] md:h-[33rem] rounded-[50%] border-[0.1rem] border-[#FFEACC] relative">
      
//       {/* Inner Oval shifted to left */}
//       <div className="absolute top-0 left-[-1rem] w-full h-full rounded-[50%] border-[0.15rem] border-[#FFEACC]/70"></div>
      
//       {/* Image same shift as inner oval */}
//       <img
//         src="https://raw.githubusercontent.com/Yash555558/imggg/refs/heads/main/tolstoy.png"
//         alt="Leo Tolstoy"
//         className="absolute top-1 left-[-0.8rem] w-[98.7%] h-[99%] rounded-[50%] object-cover"
//       />
//     </div>
//   </div>

//   {/* Text */}
//   <div className="text-left text-gray-300 max-w-xl relative z-10">
//     <h2
//       className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] text-[#F9E7C2] font-light mb-[0.8rem] relative"
//       style={{
//         fontFamily: "Prata, serif",
//         textShadow:
//           "0 0 10px rgba(249, 231, 194, 0.8), 0 0 20px rgba(249, 231, 194, 0.6)",
//         top: "-0.5rem"
//       }}
//     >
//       Leo <span className="block">Tolstoy</span>
//     </h2>

//     <p className="italic text-[0.9rem] sm:text-[1rem] text-[#FFEACC] mb-[1rem]">
//       "The sole meaning of life is to serve humanity."
//     </p>
//     <p className="text-[0.9rem] sm:text-[1rem] md:text-[1.05rem] text-[#F9E7C2] leading-relaxed">
//       Leo Tolstoy’s works reflect the light of humanity—thoughtful, moral, and
//       deeply emotional. His stories portray real people facing real choices,
//       filled with rich detail and a profound search for truth, love, and the
//       meaning of life.
//     </p>
//   </div>
// </section>

      
//     </main>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="bg-[#0F0F0F] text-white font-sans overflow-x-hidden scroll-smooth">
      
      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden text-center py-16 sm:py-20 md:py-24 px-4 scroll-mt-20"
      >
        {/* Left Blur */}
        <img
          src="https://raw.githubusercontent.com/Yash555558/imggg/refs/heads/main/blur-x.png"
          alt=""
          className="absolute top-0 left-0 w-64 sm:w-80 md:w-[406px] h-auto blur-[40px] sm:blur-[54px] pointer-events-none z-0"
        />

        {/* Right Blur */}
        <img
          src="https://raw.githubusercontent.com/Yash555558/imggg/refs/heads/main/blur-x.png"
          alt=""
          className="absolute top-10 right-0 w-64 sm:w-80 md:w-[406px] h-auto blur-[40px] sm:blur-[54px] pointer-events-none z-0"
        />

        {/* Main X Logo */}
        <img
          src="https://github.com/Yash555558/imggg/blob/main/x-logo.png?raw=true"
          alt="X Logo"
          className="relative z-10 mx-auto h-28 sm:h-36 md:h-60 mb-4 sm:mb-6"
        />

        <h1
          className="relative z-10 text-2xl sm:text-4xl md:text-5xl font-light leading-snug text-[#EEE]"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Between <span className="italic text-[#F5DEB3]" style={{ fontFamily: 'Lora, serif' }}>Light</span> and{" "}
          <span className="italic text-[#888]" style={{ fontFamily: 'Lora, serif' }}>Shadow</span>
          <br />
          <span>Lies the Spectrum of Ideas</span>
        </h1>

        <p className="relative z-10 text-xs sm:text-sm md:text-base text-[#BBBBBB] mt-3 mb-5 sm:mt-4">
          An exploration of duality through the worlds of Kafka and Tolstoy
        </p>

        {/* ✅ Get Tickets Button */}
        <Link 
          to="/get-ticket" 
          className="relative z-10 mt-5 sm:mt-6 bg-[#EB0028] hover:bg-red-700 text-white px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition inline-block text-center"
        >
          Get tickets
        </Link>
      </section>

      {/* Info Cards */}
      <section className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 sm:gap-8 px-4 sm:px-6 pt-8 sm:pt-10 pb-6 sm:pb-8 scroll-mt-20">
        {[
          {
            title: "What is TED?",
            desc: "TED is a global platform for sharing powerful ideas through short, impactful talks. It aims to spark conversations and inspire change across all disciplines.",
          },
          {
            title: "What is TEDx?",
            desc: "TEDx is a local, self-organized event licensed by TED to spread ideas in communities. It brings people together to share unique stories, insights, and experiences.",
          },
          {
            title: "What is TEDxDYPAkurdi?",
            desc: "TEDxDYPAkurdi is an independently organized TEDx event. It brings bold ideas and inspiring voices from our campus and community to the stage.",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="relative p-5 sm:p-6 w-full max-w-xs min-h-[280px] text-center
              rounded-[30px] sm:rounded-[40px] border-[2px] sm:border-[3px] border-white/40
              overflow-hidden transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[rgba(253,233,177,0.18)]"
            style={{
              background:
                "linear-gradient(153deg, rgba(255,241,214,0.16) -40%, rgba(255,248,236,0.06) 50%, rgba(255,241,220,0.04) 110%)",
              backdropFilter: "blur(25px)",
              WebkitBackdropFilter: "blur(25px)",
              boxShadow: "0 8px 30px rgba(0,0,0,0.36)",
            }}
          >
            {/* Background Glow Layers */}
            <div className="pointer-events-none absolute inset-0 z-0">
              <div
                className="absolute -left-8 -top-10 w-48 h-48 rounded-full blur-[56px] opacity-40"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(249,233,177,0.26), rgba(249,233,177,0.02))",
                }}
              />
              <div
                className="absolute -right-6 -bottom-8 w-36 h-36  rounded-full blur-[34px] opacity-30"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(150,123,255,0.13), rgba(150,123,255,0.00))",
                }}
              />
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full blur-xl opacity-60 bg-purple-500/40" />
              <div className="absolute bottom-4 left-5 w-14 h-14 rounded-full blur-xl opacity-50 bg-[#FDE9B1]/40" />
            </div>

            {/* Content */}
            <h3
              className="relative z-10 text-lg sm:text-xl mt-4 mb-5 text-[#FDE9B1]"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 400,
                textShadow: "0 0 12px rgba(253,233,177,0.85)",
              }}
            >
              {card.title}
            </h3>

            <p
              className="relative z-10 text-[#d6c6b1] text-sm sm:text-base leading-relaxed"
              style={{ fontFamily: 'Lora, serif', fontWeight: 400 }}
            >
              {card.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Theme Section */}
<section
  id="theme"
  className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
  style={{
    backgroundImage: `url('https://raw.githubusercontent.com/Yash555558/imggg/refs/heads/main/77.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Left Image - hide on mobile */}
  <img
    src="https://raw.githubusercontent.com/Yash555558/imggg/refs/heads/main/2d7fb19248c88abb2041202c96ff993acce9c325.png"
    alt="Kafka"
    className="hidden md:block absolute left-0 bottom-0 object-contain
               max-h-[90%] h-auto w-auto
               md:max-h-[75%]
               transition-all duration-500 ease-in-out"
  />

  {/* Right Image - hide on mobile */}
  <img
    src="https://raw.githubusercontent.com/Yash555558/imggg/refs/heads/main/image-removebg-preview%202.png"
    alt="Tolstoy"
    className="hidden md:block absolute right-0 bottom-0 object-contain
               max-h-[90%] h-auto w-auto
               md:max-h-[75%]
               transition-all duration-500 ease-in-out"
  />

  {/* Center Content */}
  <div className="text-center max-w-3xl px-4 sm:px-6 md:px-8 transition-all duration-500 ease-in-out">
    <h2
      className="text-[#F9E7C2] text-xl sm:text-2xl md:text-3xl font-light mb-6"
      style={{
        fontFamily: "Prata, serif",
        textShadow:
          "0 0 10px rgba(249, 231, 194, 0.8), 0 0 20px rgba(249, 231, 194, 0.6)",
      }}
    >
      Theme
    </h2>

    <h3
      className="text-[#F9E7C2] text-2xl sm:text-3xl md:text-5xl font-normal leading-snug mb-6"
      style={{
        fontFamily: "Prata, serif",
        textShadow:
          "0 0 10px rgba(249, 231, 194, 0.8), 0 0 20px rgba(249, 231, 194, 0.6)",
      }}
    >
      THE KAFKA, THE TOLSTOY
    </h3>

    <p
      className="text-[#F9E7C2] text-sm sm:text-base leading-relaxed px-2 sm:px-0"
      style={{
        fontFamily: "Prata, serif",
      }}
    >
      In every story, every soul, and every choice, there lies a balance between light
      and dark. This year, TEDxDYPAkurdi explores the duality of life through the
      opposing worlds of Kafka and Tolstoy, a reflection of chaos and clarity, despair
      and hope, shadows and brilliance.
    </p>
  </div>
</section>







      
    {/* Kafka Section */}
<section className="relative mt-30 mb-25 flex flex-col md:flex-row items-center px-4 sm:px-6 py-8 sm:py-12 max-w-6xl mx-auto gap-8 sm:gap-12 scroll-mt-20">
  {/* Gradient Blur BG */}
  <div
    className="absolute left-[-5rem] top-[-5rem] w-[50rem] h-[50rem] rounded-full rotate-[158deg] pointer-events-none z-0"
    style={{
      background:
        "linear-gradient(135deg, rgba(240, 147, 251, 0.50) 0%, rgba(245, 87, 108, 0.50) 19.38%, rgba(213, 190, 116, 0.50) 39.17%, rgba(88, 45, 22, 0.50) 59.49%, rgba(83, 43, 16, 0.50) 79.8%, rgba(111, 134, 214, 0.50) 100%)",
      filter: "blur(150px)",
    }}
  />

  {/* Image with shifted double oval */}
  <div className="flex-shrink-0 relative z-10 flex justify-center">
    {/* Outer Oval (height reduced by 3rem) */}
    <div className="w-[20rem] sm:w-[22rem] md:w-[25rem] h-[27rem] sm:h-[30rem] md:h-[33rem] rounded-[50%] border-[0.1rem] border-[#FFEACC] relative">
      
      {/* Inner Oval shifted horizontally by 1rem */}
      <div className="absolute top-0 left-[1rem] w-full h-full rounded-[50%] border-[0.15rem] border-[#FFEACC]/70"></div>
      
      {/* Image same size as inner oval */}
      <img
        src="https://raw.githubusercontent.com/Yash555558/imggg/refs/heads/main/kafka.png"
        alt="Franz Kafka"
        className="absolute top-1 left-[1.2rem] w-[98.7%] h-[99%] rounded-[50%] object-cover"
      />
    </div>
  </div>

  {/* Text */}
  <div className="text-left mb-25 text-gray-300 max-w-xl relative z-10">
    <h2
      className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] text-[#F9E7C2] font-light mb-[0.8rem] relative"
      style={{
        fontFamily: "Prata, serif",
        textShadow:
          "0 0 10px rgba(249, 231, 194, 0.8), 0 0 20px rgba(249, 231, 194, 0.6)",
        top: "-0.5rem"
      }}
    >
      Franz <span className="block">Kafka</span>
    </h2>

    <p className="italic text-[0.9rem] sm:text-[1rem] text-[#FFEACC] mb-[1rem]">
      "I am a cage, in search of a bird."
    </p>
    <p className="text-[0.9rem] sm:text-[1rem] md:text-[1.05rem] text-[#F9E7C2] leading-relaxed">
      Franz Kafka’s writing dives into the shadows of the human mind: surreal,
      unsettling, and deeply psychological. His stories often explore fear,
      alienation, and the absurdity of modern life, pulling readers into
      dreamlike worlds where reality feels fragile.
    </p>
  </div>
</section>












      {/* Tolstoy Section */}
<section className="relative flex flex-col md:flex-row-reverse items-center px-4 sm:px-6 py-8 sm:py-12 max-w-6xl mx-auto gap-8 sm:gap-12 scroll-mt-20">
  {/* Gradient Blur BG */}
  <div
    className="absolute right-[-5rem] top-[-5rem] w-[50rem] h-[50rem] rounded-full rotate-[158deg] pointer-events-none z-0"
    style={{
      background:
        "linear-gradient(135deg, rgba(240, 147, 251, 0.50) 0%, rgba(245, 87, 108, 0.50) 19.38%, rgba(213, 190, 116, 0.50) 39.17%, rgba(88, 45, 22, 0.50) 59.49%, rgba(83, 43, 16, 0.50) 79.8%, rgba(111, 134, 214, 0.50) 100%)",
      filter: "blur(150px)",
    }}
  />

  {/* Image with shifted double oval */}
  <div className="flex-shrink-0 relative z-10 flex justify-center">
    {/* Outer Oval */}
    <div className="w-[20rem] sm:w-[22rem] md:w-[25rem] h-[27rem] sm:h-[30rem] md:h-[33rem] rounded-[50%] border-[0.1rem] border-[#FFEACC] relative">
      
      {/* Inner Oval shifted to left */}
      <div className="absolute top-0 left-[-1rem] w-full h-full rounded-[50%] border-[0.15rem] border-[#FFEACC]/70"></div>
      
      {/* Image same shift as inner oval */}
      <img
        src="https://raw.githubusercontent.com/Yash555558/imggg/refs/heads/main/tolstoy.png"
        alt="Leo Tolstoy"
        className="absolute top-1 left-[-0.8rem] w-[98.7%] h-[99%] rounded-[50%] object-cover"
      />
    </div>
  </div>

  {/* Text */}
  <div className="text-left text-gray-300 max-w-xl relative z-10">
    <h2
      className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] text-[#F9E7C2] font-light mb-[0.8rem] relative"
      style={{
        fontFamily: "Prata, serif",
        textShadow:
          "0 0 10px rgba(249, 231, 194, 0.8), 0 0 20px rgba(249, 231, 194, 0.6)",
        top: "-0.5rem"
      }}
    >
      Leo <span className="block">Tolstoy</span>
    </h2>

    <p className="italic text-[0.9rem] sm:text-[1rem] text-[#FFEACC] mb-[1rem]">
      "The sole meaning of life is to serve humanity."
    </p>
    <p className="text-[0.9rem] sm:text-[1rem] md:text-[1.05rem] text-[#F9E7C2] leading-relaxed">
      Leo Tolstoy’s works reflect the light of humanity—thoughtful, moral, and
      deeply emotional. His stories portray real people facing real choices,
      filled with rich detail and a profound search for truth, love, and the
      meaning of life.
    </p>
  </div>
      </section>

    </main>
  );
}
