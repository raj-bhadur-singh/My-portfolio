import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "MLM E-Commerce",
    client: "Maashyama Associates",
    tech: "React • Node.js • MongoDB",
    liveLink: "https://www.maashyamaassociates.com/",
    color: "from-lime-400/20 to-green-500/10",
    border: "border-lime-400/40",
    badge: "E-Commerce",
    badgeColor: "bg-lime-400/20 text-lime-400",
    icon: "🛒",
  },
  {
    title: "Educational Job Portal",
    client: "Aivonex Skills",
    tech: "React • Node.js • Express • MongoDB",
    liveLink: "https://aivonexskills.com/",
    color: "from-blue-400/20 to-cyan-500/10",
    border: "border-blue-400/40",
    badge: "Ed-Tech",
    badgeColor: "bg-blue-400/20 text-blue-400",
    icon: "🎓",
  },
  {
    title: "Astrology Platform",
    client: "Astro Jaipur",
    tech: "React • Node.js • ZegoCloud • Razorpay",
    liveLink: "https://astrojaipur.com/",
    color: "from-purple-400/20 to-pink-500/10",
    border: "border-purple-400/40",
    badge: "Web App",
    badgeColor: "bg-purple-400/20 text-purple-400",
    icon: "🔮",
  },
];

// Duplicate for seamless infinite scroll
const allProjects = [...projects, ...projects, ...projects];

const ClientShowcaseBanner = () => {
  return (
    <div className="bg-gradient-to-br from-black via-[#0d0d2b] to-[#1b0f2e] py-10 overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-8 px-4"
      >
        <p className="text-gray-400 text-sm uppercase tracking-widest mb-1">
          Live Client Work
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-b from-white via-[#a5a5a5] to-[#5c5c5c] bg-clip-text text-transparent">
          Projects I've Built & Deployed
        </h2>
      </motion.div>

      {/* Marquee Strip */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {allProjects.map((project, index) => (
            <a
              key={index}
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-shrink-0 w-[300px] sm:w-[340px] bg-gradient-to-br ${project.color} border ${project.border} rounded-2xl p-5 hover:scale-105 transition-transform duration-300 cursor-pointer group`}
            >
              {/* Top row */}
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs px-2 py-1 rounded-full font-semibold ${project.badgeColor}`}>
                  {project.badge}
                </span>
                <span className="text-2xl">{project.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-lg mb-1 group-hover:text-lime-400 transition-colors">
                {project.title}
              </h3>

              {/* Client */}
              <p className="text-gray-400 text-xs mb-3">{project.client}</p>

              {/* Tech */}
              <p className="text-cyan-400 text-xs">{project.tech}</p>

              {/* Visit link */}
              <div className="mt-4 flex items-center gap-1 text-xs text-gray-500 group-hover:text-lime-400 transition-colors">
                <span>Visit Live Site</span>
                <span>→</span>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ClientShowcaseBanner;
