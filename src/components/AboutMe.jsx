import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : 0,
    x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  },
});

const AboutMe = () => {
  return (
    <section className=" overflow-x-hidden min-h-screen bg-gradient-to-br from-black via-[#0d0d2b] to-[#1b0f2e] text-gray-300 flex flex-col  py-20 px-6 md:px-20 gap-10">
      {/* Main Flex Row */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 flex-1 -mb-16">
        {/* Left: Text Content */}
        <motion.div
          className="w-full lg:w-2/3 md:text-left"
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold bg-gradient-to-b from-white via-[#a5a5a5] to-[#5c5c5c] bg-clip-text text-transparent mb-6"
            variants={fadeIn("up", 0.2)}
          >
            About me
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-3xl mb-16 mx-auto md:mx-0"
            variants={fadeIn("up", 0.3)}
          >
            With a focused dedication on building products that solve real-world challenges,
            I’ve shaped myself into a trusted and reliable full-stack developer with production-level experience.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-center md:text-left"
            variants={fadeIn("up", 0.4)}
          >
            <div>
              <h3 className="text-4xl font-extrabold text-white">
                <CountUp end={1} duration={2} enableScrollSpy scrollSpyDelay={500} />+
              </h3>
              <p className="mt-2 text-sm uppercase text-gray-500 tracking-wide">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-white">
                <CountUp end={10} duration={2} enableScrollSpy scrollSpyDelay={500} />+
              </h3>
              <p className="mt-2 text-sm uppercase text-gray-500 tracking-wide">Complete Projects</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-white">
                <CountUp end={20} duration={2} enableScrollSpy scrollSpyDelay={500} />+
              </h3>
              <p className="mt-2 text-sm uppercase text-gray-500 tracking-wide">Tech Stacks & Tools Used</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-white">
                {/* <CountUp end={999} duration={3} enableScrollSpy scrollSpyDelay={500} /> */}∞
              </h3>
              <p className="mt-2 text-sm uppercase text-gray-500 tracking-wide">Lines of Code</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Animation */}
        <motion.div
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex justify-center mx-auto"
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <iframe
            src="https://lottie.host/embed/883156f7-0290-41a1-99e8-550b6214a270/ue4GPQhg4C.lottie"
            title="about-animation"
            className="w-[240px] xss:w-[280px] xs:w-[400px] md:w-[460px] h-[280px] md:h-[460px] rounded-xl"
            frameBorder="0"
          />
        </motion.div>
      </div>

      {/* Scroll Down Indicator inside layout (not absolute) */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        className=" text-center -mb-10"
      >
        <p className="text-gray-400 text-sm max-[1100px]:hidden">Scroll down to explore</p>

        <div className="text-white text-2xl mt-2 animate-bounce">↓</div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
