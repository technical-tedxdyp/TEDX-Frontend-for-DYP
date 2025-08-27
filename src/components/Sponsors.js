import React from "react";
import "./sponsors.css"; 

const sponsors = [
  { name: "Are you Gifted", image: "https://github.com/technical-tedxdyp/speakerd-image/blob/main/sponser1-1.png?raw=true" },
  { name: "51 Rainbow Ice-creams", image: "https://github.com/technical-tedxdyp/speakerd-image/blob/main/sponser2-1.png?raw=true" },
  { name: "Vintage & Co", image: "https://github.com/technical-tedxdyp/speakerd-image/blob/main/sponser3.png?raw=true" },
  { name: "Brain Bristle", image: "https://github.com/technical-tedxdyp/speakerd-image/blob/main/sponser4.jpg?raw=true" },
  { name: "Wet n Joy", image: "https://github.com/technical-tedxdyp/speakerd-image/blob/main/sponser5.jpg?raw=true" },
];

const Sponsors = () => {
  const loopSponsors = [...sponsors, ...sponsors];

  return (
    <section id="sponsors" className="bg-[#0F0F0F] py-20 px-6 md:px-12 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-semibold text-[#F9E7C2]"
          style={{
            fontFamily: "Prata, serif",
            textShadow: "0 0 10px rgba(249, 231, 194, 0.8), 0 0 20px rgba(249, 231, 194, 0.6)",
          }}
        >
          Sponsors
        </h2>

        <div className="mt-14 flex overflow-hidden group">
          <div className="animate-scroll group-hover:[animation-play-state:paused]">
            {loopSponsors.map((sponsor, index) => (
              <div key={index} className="flex-shrink-0 mx-10 text-center">
                <img 
                  src={sponsor.image} 
                  alt={sponsor.name} 
                  className="h-20 w-40 md:h-28 md:w-48 mt-10 object-contain mx-auto" 
                />
                <p className="mt-4 text-2xl font-bold md:text-base text-gray-300">{sponsor.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* <button className="mt-16 border-2 know-more-btn rounded-full px-6 py-2 ">
          Know more
        </button> */}
      </div>
    </section>
  );
};

export default Sponsors;
