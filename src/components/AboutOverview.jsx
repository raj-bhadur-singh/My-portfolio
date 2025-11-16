import React from "react";
import { motion } from "framer-motion";

const AboutOverview = () => {
  return (
    <section
      id="about"
      className=" overflow-x-hidden bg-gradient-to-br from-black via-[#0d0d2b] to-[#1b0f2e] text-white py-20 px-4 sm:px-10 md:px-20"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center md:text-left bg-gradient-to-b from-white via-[#a5a5a5] to-[#5c5c5c] bg-clip-text text-transparent mb-2"
      >
        Who am I ?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center md:text-left text-gray-400 text-base sm:text-lg mb-10"
      >
        Get to know the developer behind the code.
      </motion.p>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Animation */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          // className="w-full lg:w-1/2 flex justify-center"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex justify-center mx-auto"

        >
          <iframe
            src="https://lottie.host/embed/0426f82a-227f-4c62-9812-ebc8efea8247/1VpaniEt2X.lottie"
            title="about-animation"
            className="w-[280px] xss:w-[300px] xs:w-[400px] md:w-[460px] h-[280px] md:h-[440px] rounded-xl "
            frameBorder="0"
          />
        </motion.div>

        {/* Right: Description */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
        >
          <span className="text-4xl md:text-5xl  font-semibold bg-gradient-to-b from-white via-[#a5a5a5] to-[#5c5c5c] bg-clip-text text-transparent">
            A passionate <span className="text-lime-400">web developer</span> turning <span className="text-lime-400">ideas</span> into visually stunning, user-friendly websites.
          </span>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed md:pt-6 pt-3 ">
            I'm <span className="text-blue-400 font-semibold">Raj bhadur singh</span>, a dedicated full-stack developer skilled in
            <span className="text-blue-400"> Node.js</span>,
            <span className="text-blue-400"> React.js</span>, and
            <span className="text-blue-400"> MongoDB</span>. I love building responsive web apps that combine clean UI with robust backend logic.
          </p>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            I've built and deployed real-world projects like YouTube clones, job portals, and e-commerce sites that are fully responsive, secure, and scalable. I follow clean code principles and prioritize performance, accessibility, and user experience in every application.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutOverview;
