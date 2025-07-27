import { useState } from "react";
import { mediation } from "../utils/mediationData";

function Meditation() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleCardClick = (index) => {
    // Toggle hover state for the clicked card
    setHoveredIndex(hoveredIndex === index ? null : index);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="bg-purple-200">
      <h1 className="text-center md:text-4xl text-xl p-10 font-bold text-[#000000]">
        Your Guide to Mental Clarity: Meditation Videos
      </h1>

      <div className="flex justify-center p-5 flex-wrap gap-y-5 gap-x-8">
        {mediation.map((data, index) => (
          <div
            key={index}
            className="card card-compact bg-neutral-900 md:w-80  shadow-xl"
            onMouseEnter={() => handleMouseEnter(index)} // Works on desktop
            onMouseLeave={handleMouseLeave} // Works on desktop
            onClick={() => handleCardClick(index)} // Works on mobile
          >
            <figure>
              {hoveredIndex === index ? (
                <iframe
                  title="Meditation Video"
                  width="100%"
                  height="200"
                  src={data.preview}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="transition-all duration-500 ease-in-out"
                ></iframe>
              ) : (
                <img
                  src={data.image}
                  alt="Meditation Video Thumbnail"
                  className="w-full h-48 object-cover"
                />
              )}
            </figure>
            <div className="card-body">
              <h2 className="card-title text-teal-400">{data.title}</h2>
              <p className="text-center font-medium ">{data.author}</p>
              <div className="card-actions justify-center">
                <a href={data.video} target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#e576f1] hover:bg-[#d25fdc] text-white font-semibold px-4 py-2 rounded-md transition duration-200">
                    Watch Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Meditation;
