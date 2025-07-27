import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { stories } from "../utils/storiesData";

function Stories() {
  return (
    <div className="bg-purple-200">
      <div className="flex flex-wrap justify-center p-10 gap-x-7 gap-y-6 ">
        {stories.map((story, index) => (
          <div
            key={index}
            className="card card-compact bg-neutral-800 w-80 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <figure>
              <img
                src="https://res.cloudinary.com/dmdlgpurh/image/upload/v1736843317/music-bg_wpizsb.jpg"
                alt="Story"
                className="rounded-t-lg w-full h-40 object-cover"
              />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title text-2xl font-semibold text-cyan-400">
                {story.title}
              </h2>

              <div className="mt-4">
                <AudioPlayer
                  src={story.music}
                  volume={0.5}
                  style={{
                    backgroundColor: "black", // Directly applying black background
                    color: "white",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;
