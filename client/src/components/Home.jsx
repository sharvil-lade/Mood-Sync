import { IoPlayCircleOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import Balancer from "react-wrap-balancer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { benefits } from "../utils/benefitsData";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const cardAnimation = {
    hidden: { y: 50, opacity: 0 }, // Animate from bottom
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative flex h-screen justify-center items-center bg-purple-200"
        style={{
          backgroundImage: `url('/wave.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center absolute text-purple-900 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            <Balancer>Find Inner Peace with MoodSync</Balancer>
          </h1>

          <p className="text-md md:text-xl font-bold mt-6">
            <Balancer>
              Your personal companion for mental wellness. Meditation,
              mindfulness, and emotional support - all in one place.
            </Balancer>
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            {!user && (
              <button
                onClick={() => navigate("/signUp")}
                className="btn bg-violet-600 hover:bg-violet-700 text-white text-base w-full sm:w-auto"
              >
                Get Started Free
                <GoArrowRight size={26} />
              </button>
            )}

            <button
              className="btn btn-accent text-white text-base w-full sm:w-auto"
              onClick={() => navigate("/features")}
            >
              Learn More
              <IoPlayCircleOutline size={26} />
            </button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}

      <div className="flex flex-col justify-center items-center text-white p-6 sm:p-10 h-full bg-purple-200">
        <div className="text-center mb-8 mt-10 max-w-4xl mx-auto">
          <Balancer>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardAnimation}
              transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
              className="text-3xl md:text-5xl font-extrabold text-teal-500 mb-4"
            >
              Transform Your Life with MoodSync
            </motion.h1>
          </Balancer>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardAnimation}
            transition={{ type: "spring", stiffness: 50, delay: 0.3 }}
            className="text-base md:text-lg text-teal-500 font-medium"
          >
            <Balancer>
              Experience the powerful benefits of regular mental wellness
              practice.
            </Balancer>
          </motion.p>
        </div>

        {/* Card Components */}

        <div className="flex justify-center gap-6 flex-wrap mt-8 mb-9">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardAnimation}
              transition={{
                type: "spring",
                stiffness: 50,
                delay: 0.4 + index * 0.1, // Staggered delay
              }}
              className="card w-full sm:w-80 md:w-96 bg-white shadow-lg hover:shadow-teal-400 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="card-body">
                <div className={`${benefit.color}`}>
                  <benefit.icon size={34} />
                </div>
                <h2 className="card-title text-teal-500">{benefit.title}</h2>
                <p className="font-medium text-base text-black">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
