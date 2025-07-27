import { features } from "../utils/featureData";
import { useNavigate } from "react-router-dom";

import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";

function Features() {
  const navigate = useNavigate();

  const animationSettings = {
    initial: { x: -200, opacity: 0 }, // Start off-screen to the left and invisible
    animate: { x: 0, opacity: 1 }, // Move into view and become visible
    transition: { type: "spring", stiffness: 50 }, // Spring animation
  };

  return (
    <div className="bg-purple-200">
      {/* Header */}
      <div className="text-center pt-10">
        <Balancer>
          <motion.h1
            {...animationSettings}
            transition={{ ...animationSettings.transition, delay: 0.4 }}
            className="md:text-4xl text-3xl text-teal-500 md:font-bold font-semibold"
          >
            Features That Transform Your Mental Wellness Journey
          </motion.h1>
          <motion.p
            className="md:text-lg text-sm font-bold mt-4 text-teal-500"
            {...animationSettings}
            transition={{ ...animationSettings.transition, delay: 0.4 }}
          >
            Discover tools and features designed to support your mental health
            and emotional well-being
          </motion.p>
        </Balancer>
      </div>

      {/* Feature Cards */}
      <div className="flex p-4 justify-center gap-x-6 flex-wrap gap-y-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            onClick={() => navigate(feature.url)}
            className="card  cursor-pointer w-96 shadow-lg bg-white  hover:shadow-lg hover:shadow-teal-400"
            aria-label={`Navigate to ${feature.title}`}
            {...animationSettings}
            transition={{
              ...animationSettings.transition,
              delay: 0.6 + index * 0.1, // Stagger each card animation
            }}
          >
            <div className="card-body">
              <div className={`${feature.color} mb-4`}>
                <feature.icon size={30} />
              </div>
              <h2 className="card-title text-teal-500">{feature.title}</h2>
              <p className="font-medium text-base text-black">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Features;
