// import React, { useEffect, useRef, useState } from "react";

// const SPEAKER_CARD = {
//   HEIGHT: 420,
//   WIDTH_CLOSED: 134,
//   WIDTH_OPEN_MD: 360,
//   WIDTH_OPEN_LG: 420,
//   GAP: 12,
// };

// const speakers = [
//   {
//     id: 1,
//     name: "Dr. Popatrao Pawar",
//     title: "Dr. Popatrao Baguji Pawar, Padma Shri awardee, is the former sarpanch of Hiware Bazar, Maharashtra.He transformed the drought-prone village into a model of sustainable rural development through water conservation and social reforms.",
//     small: "https://github.com/technical-tedxdyp/speakerd-image/blob/main/speaker1.png?raw=true",
//     big: "https://github.com/technical-tedxdyp/speakerd-image/blob/main/speaker1.png?raw=true",
//   },
//   {
//     id: 2,
//     name: "Mr. Rajan Chopra",
//     title: "Mr. Rajan Chopra is the founder of Quantum Musing, dedicated to making quantum technology education accessible in India.",
//     small: "https://github.com/technical-tedxdyp/speakerd-image/blob/main/speaker2.png?raw=true",
//     big: "https://github.com/technical-tedxdyp/speakerd-image/blob/main/speaker2.png?raw=true",
//   },
//   {
//     id: 3,
//     name: "Mr. Nitin Pandey",
//     title: "Chairman of the National Information Security Council and founder of Hackers Day. CEO and chief trainer at Cybershristi Infosolutions Pvt. Ltd.", // ADDED title, else it'll be empty
//     small: "https://github.com/technical-tedxdyp/speakerd-image/blob/main/speaker3.jpg?raw=true",
//     big: "https://github.com/technical-tedxdyp/speakerd-image/blob/main/speaker3.jpg?raw=true",
//   },
//   {
//     id: 4,
//     name: "Dr. Yokesh Arul",
//     title: "Yokesh Arul is a doctor and medicine resident at a West Bengal government hospital, as well as a finalist in the 20th Rubaru Mr. India competition. ", // ADDED title, or put "" if none
//     small: "https://github.com/technical-tedxdyp/speakerd-image/blob/main/speaker4.jpg?raw=true",
//     big: "https://github.com/technical-tedxdyp/speakerd-image/blob/main/speaker4.jpg?raw=true",
//   },
//   {
//     id: 5,
//     name: "Mrs. Aishwarya Pissay",
//     title: " Aishwarya Pissay (born 14 August 1995) is an Indian motorsports athlete from Karnataka who competes in circuit and off-road motorcycle racing. ", // ADDED title
//     small: "https://github.com/technical-tedxdyp/speakerd-image/blob/main/speaker5.jpg?raw=true",
//     big: "https://github.com/technical-tedxdyp/speakerd-image/blob/main/speaker5.jpg?raw=true",
//   },
//   {
//     id: 6,
//     name: "Mrs. Bela Shende",
//     title: "Bela Shende is an Indian playback singer who has performed across Bollywood and other Indian film industries.", // ADDED title
//     small: "https://res.cloudinary.com/doyldj2th/image/upload/v1756370896/images_1_vnovsg.jpg",
//     big: "https://res.cloudinary.com/doyldj2th/image/upload/v1756370896/images_1_vnovsg.jpg",
//   },
// ];

// export default function Speakers() {
//   const [active, setActive] = useState([0]);
//   const clickTimer = useRef(null);

//   useEffect(() => {
//     const imgs = [];
//     speakers.forEach((s) => {
//       const im1 = new Image();
//       im1.src = s.small;
//       const im2 = new Image();
//       im2.src = s.big;
//       imgs.push(im1, im2);
//     });
//   }, []);

//   const toggle = (idx) => {
//     setActive((prev) =>
//       prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
//     );
//   };

//   const handleSmartClick = (idx) => {
//     if (clickTimer.current) {
//       window.clearTimeout(clickTimer.current);
//       clickTimer.current = null;
//       toggle(idx);
//       return;
//     }
//     clickTimer.current = window.setTimeout(() => {
//       toggle(idx);
//       if (clickTimer.current) {
//         window.clearTimeout(clickTimer.current);
//         clickTimer.current = null;
//       }
//     }, 220);
//   };

//   return (
//     <section
//       id="speakers"
//       className="bg-[#0F0F0F] py-16 px-4 md:px-16 text-white select-none"
//       onMouseDown={(e) => e.preventDefault()}
//     >
//       <div className="max-w-7xl mx-auto">
//         <h2
//           className="text-4xl md:text-5xl text-[#F9E7C2] drop-shadow-lg"
//           style={{
//             fontFamily: "Prata, serif",
//             textShadow:
//               "0 0 10px rgba(249, 231, 194, 0.8), 0 0 20px rgba(249, 231, 194, 0.6)",
//           }}
//         >
//           Meet Our Speakers
//         </h2>

//         <p className="text-[#FFEACC] mt-4 max-w-2xl">
//           Our speaker lineup comprises <span className="italic">.....</span>,
//           who'll share knowledge and advice on the most pressing topics facing
//           companies today. Stay tuned for more announcements.
//         </p>

//         <div className="mt-12 w-full overflow-x-auto" style={{ scrollBehavior: "smooth" }}>
//           <div
//             className="speakers-container flex flex-nowrap items-stretch justify-start"
//             style={{ gap: SPEAKER_CARD.GAP }}
//           >
//             {speakers.map((s, idx) => {
//               const isOpen = active.includes(idx);
//               const w = isOpen
//                 ? SPEAKER_CARD.WIDTH_OPEN_MD
//                 : SPEAKER_CARD.WIDTH_CLOSED;

//               return (
//                 <button
//                   key={s.id}
//                   type="button"
//                   aria-label={`${s.name} card ${isOpen ? "expanded" : "collapsed"}`}
//                   onClick={() => handleSmartClick(idx)}
//                   className={[
//                     "group relative flex-shrink-0 rounded-2xl overflow-hidden",
//                     "bg-gradient-to-br from-[#222] to-[#141414]",
//                     "transition-[flex-basis,width,min-width] duration-500 ease-[cubic-bezier(.2,.8,.2,1)]",
//                     "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F9E7C2]/60",
//                   ].join(" ")}
//                   style={{
//                     height: SPEAKER_CARD.HEIGHT,
//                     flexBasis: w,
//                     width: w,
//                     minWidth: w,
//                   }}
//                 >
//                   {/* Image */}
//                   <img
//                     src={isOpen ? s.big : s.small}
//                     alt={s.name}
//                     draggable={false}
//                     loading="lazy"
//                     className="h-full w-full object-cover"
//                   />
//                   {/* Name and Title at bottom overlay, shown when expanded */}
//                   {isOpen && (
//                     <div
//                       className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
//                       p-4"
//                       style={{
//                         backdropFilter: "blur(2px)",
//                       }}
//                     >
//                       <h3 className="text-xl font-semibold text-[#F9E7C2] mb-1">{s.name}</h3>
//                       {s.title && (
//                         <p className="text-sm text-[#FFEACC] font-medium">{s.title}</p>
//                       )}
//                     </div>
//                   )}
//                   {/* Subtle edge/lighting */}
//                   <div
//                     className="pointer-events-none absolute inset-0"
//                     style={{
//                       boxShadow: isOpen
//                         ? "inset 0 0 0 1px rgba(255,255,255,0.06), 0 8px 24px rgba(0,0,0,0.5)"
//                         : "inset 0 0 0 1px rgba(255,255,255,0.04)",
//                     }}
//                   />
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useRef, useState } from "react";

const SPEAKER_CARD = {
  HEIGHT: 420,
  WIDTH_CLOSED: 134,
  WIDTH_OPEN_MD: 360,
  WIDTH_OPEN_LG: 420,
  GAP: 12,
};

const speakers = [
  {
    id: 1,
    name: "Dr. Popatrao Pawar",
    title:
      "Dr. Popatrao Baguji Pawar, Padma Shri awardee, is the former sarpanch of Hiware Bazar, Maharashtra.He transformed the drought-prone village into a model of sustainable rural development through water conservation and social reforms.",
    small: "https://github.com/technical-tedxdyp/speakerd-image/blob/main/speaker1.png?raw=true",
    big: "https://github.com/technical-tedxdyp/speakerd-image/blob/main/speaker1.png?raw=true",
  },
  {
    id: 2,
    name: "Mr. Rajan Chopra",
    title:
      "Mr. Rajan Chopra is the founder of Quantum Musing, dedicated to making quantum technology education accessible in India.",
    small: "https://github.com/technical-tedxdyp/speakerd-image/blob/main/speaker2.png?raw=true",
    big: "https://github.com/technical-tedxdyp/speakerd-image/blob/main/speaker2.png?raw=true",
  },
  {
    id: 3,
    name: "Mr. Nitin Pandey",
    title:
      "Chairman of the National Information Security Council and founder of Hackers Day. CEO and chief trainer at Cybershristi Infosolutions Pvt. Ltd.",
    small: "https://github.com/technical-tedxdyp/speakerd-image/blob/main/speaker3.jpg?raw=true",
    big: "https://github.com/technical-tedxdyp/speakerd-image/blob/main/speaker3.jpg?raw=true",
  },
  {
    id: 4,
    name: "Mrs. Aishwarya Pissay",
    title:
      " Aishwarya Pissay (born 14 August 1995) is an Indian motorsports athlete from Karnataka who competes in circuit and off-road motorcycle racing. ",
    small: "https://github.com/technical-tedxdyp/speakerd-image/blob/main/speaker5.jpg?raw=true",
    big: "https://github.com/technical-tedxdyp/speakerd-image/blob/main/speaker5.jpg?raw=true",
  },
  {
    id: 5,
    name: "Mrs. Bela Shende",
    title:
      "Bela Shende is an Indian playback singer who has performed across Bollywood and other Indian film industries.",
    small:
      "https://scontent.fsse2-1.fna.fbcdn.net/v/t39.30808-6/481770639_1196489948502832_1950268749974958896_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IZX2bvaVrzQQ7kNvwGaSP3t&_nc_oc=AdlPjQNao3u9s07ao1GB3_GSuk0KcfF9staGhGiH1i8hIxSpZZne-U8c-Q6UutKpnOYwRGvlZwIhsCcxNW38njyE&_nc_zt=23&_nc_ht=scontent.fsse2-1.fna&_nc_gid=Baa9q07IPsh9_jENpYZ0Dg&oh=00_AfWchcEIjWn5T8l8RL_CW0Noj5CLZ9ZRdOIUT5RRIC_7_g&oe=68AF9194",
    big:
      "https://scontent.fsse2-1.fna.fbcdn.net/v/t39.30808-6/481770639_1196489948502832_1950268749974958896_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IZX2bvaVrzQQ7kNvwGaSP3t&_nc_oc=AdlPjQNao3u9s07ao1GB3_GSuk0KcfF9staGhGiH1i8hIxSpZZne-U8c-Q6UutKpnOYwRGvlZwIhsCcxNW38njyE&_nc_zt=23&_nc_ht=scontent.fsse2-1.fna&_nc_gid=Baa9q07IPsh9_jENpYZ0Dg&oh=00_AfWchcEIjWn5T8l8RL_CW0Noj5CLZ9ZRdOIUT5RRIC_7_g&oe=68AF9194",
  },
];

export default function Speakers() {
  const [active, setActive] = useState(0); // by default first speaker open
  const clickTimer = useRef(null);

  useEffect(() => {
    const imgs = [];
    speakers.forEach((s) => {
      const im1 = new Image();
      im1.src = s.small;
      const im2 = new Image();
      im2.src = s.big;
      imgs.push(im1, im2);
    });
  }, []);

  const toggle = (idx) => {
    setActive((prev) => (prev === idx ? null : idx));
  };

  const handleSmartClick = (idx) => {
    if (clickTimer.current) {
      window.clearTimeout(clickTimer.current);
      clickTimer.current = null;
      toggle(idx);
      return;
    }
    clickTimer.current = window.setTimeout(() => {
      toggle(idx);
      if (clickTimer.current) {
        window.clearTimeout(clickTimer.current);
        clickTimer.current = null;
      }
    }, 220);
  };

  return (
    <section
      id="speakers"
      className="bg-[#0F0F0F] py-16 px-4 md:px-16 text-white select-none"
      onMouseDown={(e) => e.preventDefault()}
    >
      <div className="max-w-7xl mx-auto relative">
        <h2
          className="text-4xl md:text-5xl text-[#F9E7C2] drop-shadow-lg"
          style={{
            fontFamily: "Prata, serif",
            textShadow:
              "0 0 10px rgba(249, 231, 194, 0.8), 0 0 20px rgba(249, 231, 194, 0.6)",
          }}
        >
          Meet Our Speakers
        </h2>

        <p className="text-[#FFEACC] mt-4 max-w-2xl">
          Our speaker lineup comprises <span className="italic">.....</span>,
          who'll share knowledge and advice on the most pressing topics facing
          companies today. Stay tuned for more announcements.
        </p>

                <div
          className="mt-12 w-full overflow-x-auto relative"
          style={{ scrollBehavior: "smooth" }}
        >
          {/* Arrow indicator ONLY on mobile */}
<div className="absolute right-2 top-1/2 transform -translate-y-1/2 md:hidden z-20 pointer-events-none">
  <div className="animate-bounce">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black opacity-90 drop-shadow-xl"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}   // made stroke thicker
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </div>
</div>



          <div
            className="speakers-container flex flex-nowrap items-stretch justify-start"
            style={{ gap: SPEAKER_CARD.GAP }}
          >
            {speakers.map((s, idx) => {
              const isOpen = active === idx;
              const w = isOpen
                ? SPEAKER_CARD.WIDTH_OPEN_MD
                : SPEAKER_CARD.WIDTH_CLOSED;

              return (
                <button
                  key={s.id}
                  type="button"
                  aria-label={`${s.name} card ${isOpen ? "expanded" : "collapsed"}`}
                  onClick={() => handleSmartClick(idx)}
                  className={[
                    "group relative flex-shrink-0 rounded-2xl overflow-hidden",
                    "bg-gradient-to-br from-[#222] to-[#141414]",
                    "transition-[flex-basis,width,min-width] duration-500 ease-[cubic-bezier(.2,.8,.2,1)]",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F9E7C2]/60",
                  ].join(" ")}
                  style={{
                    height: SPEAKER_CARD.HEIGHT,
                    flexBasis: w,
                    width: w,
                    minWidth: w,
                  }}
                >
                  {/* Image */}
                  <img
                    src={isOpen ? s.big : s.small}
                    alt={s.name}
                    draggable={false}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  {/* Name and Title at bottom overlay, shown when expanded */}
                  {isOpen && (
                    <div
                      className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4"
                      style={{ backdropFilter: "blur(2px)" }}
                    >
                      <h3 className="text-xl font-semibold text-[#F9E7C2] mb-1">
                        {s.name}
                      </h3>
                      {s.title && (
                        <p className="text-sm text-[#FFEACC] font-medium">
                          {s.title}
                        </p>
                      )}
                    </div>
                  )}
                  {/* Subtle edge/lighting */}
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      boxShadow: isOpen
                        ? "inset 0 0 0 1px rgba(255,255,255,0.06), 0 8px 24px rgba(0,0,0,0.5)"
                        : "inset 0 0 0 1px rgba(255,255,255,0.04)",
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
