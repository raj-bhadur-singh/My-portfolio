import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
// import './Loader.css'; // Optional custom styles if needed

const Loader = ({ onFinish }) => {
  const name = "Arjun   Lakshakar";

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Notify App to hide loader
    }, 3000); // Adjust duration as needed
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <h1
        className="text-white text-4xl md:text-8xl font-signature flex gap-1"
        style={{ letterSpacing: "1px" }}
      >
        {name.split('').map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            {char}
          </motion.span>
        ))}
      </h1>
    </div>
  );
};

export default Loader;
