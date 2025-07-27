/* eslint-disable react/prop-types */

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="card card-compact bg-base-100 w-80 shadow-xl">
      <figure>
        <img className="h-80" src={exercise.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title dark:text-white">{exercise.name}</h2>
        <p className="font-semibold">{exercise.description}</p>
      </div>
    </div>
  );
};

const ExerciseList = ({ exercises }) => {
  return (
    <div className="flex justify-evenly gap-y-5 gap-x-3 flex-wrap mb-7">
      {exercises.map((exercise, index) => (
        <ExerciseCard key={index} exercise={exercise} />
      ))}
    </div>
  );
};

// Sample data for the exercises
const exercises = [
  {
    name: "Push-Ups",
    description: "A basic upper-body strength exercise.",
    image:
      "https://cdn.dribbble.com/users/4678719/screenshots/14534270/media/5c5ba4523e64cb0403719c1082b88062.gif",
  },
  {
    name: "Squats",
    description: "Great for building lower-body strength.",
    image:
      "https://assets-v2.lottiefiles.com/a/6c1e386a-1177-11ee-9e8c-d3123faea87d/tShCtc2iOH.gif",
  },
  {
    name: "Plank",
    description: "An excellent core stability exercise.",
    image:
      "https://assets-v2.lottiefiles.com/a/b8ff5496-4162-11ee-8471-fb5cac1c4de6/eWZZfv0tat.gif",
  },

  {
    name: "Yoga",
    description:
      "Gentle yoga poses and stretches that help relieve stress and tension in the body and mind.",
    image:
      "https://cdn.dribbble.com/users/974028/screenshots/14943333/media/f0d927649fc3566932c7b7c209c901e0.gif",
  },
  {
    name: "Deep Breathing",
    description:
      "A calming exercise to reduce stress and anxiety by focusing on controlled, deep breaths.",
    image:
      "https://assets-v2.lottiefiles.com/a/77d60888-1170-11ee-bda2-eb18eac93d30/VnTjL8fHwr.gif",
  },
  {
    name: "Mountain Climbers",
    description:
      "A dynamic exercise to improve core strength and cardiovascular endurance.",
    image:
      "https://images.everydayhealth.com/images/healthy-living/fitness/mountain-climbers.gif?sfvrsn=e138039d_3",
  },
];

const App = () => {
  return (
    <div className="p-5 bg-purple-200">
      <h1 className="md:text-4xl text-lg font-bold mb-4 text-center text-[#e576f1]">
        Exercise & Wellness Hub
      </h1>
      <ExerciseList exercises={exercises} />
    </div>
  );
};

export default App;
