import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ClientProjects = ({ limit = null }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const projects = [
    {
      title: "MLM E-Commerce ",
      client: "Multi product Store",
      status: "Live",
      type: "Full Stack Development",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      description: "Complete e-commerce solution with user authentication, product management, cart system, and payment integration.",
      liveLink: "https://www.maashyamaassociates.com/",
      githubLink: null, // Private repo
      achievements: [
        "Handles 5,000+ daily active users",
        "Reduced page load time by 45%",
        "Implemented secure payment gateway"
      ],
      detailedFeatures: [
        "User Authentication & Authorization with JWT",
        "Product Catalog with Advanced Filtering",
        "Shopping Cart & Wishlist Management",
        "Secure Payment Gateway Integration (Razorpay)",
        "Order Tracking & Management System",
        "Admin Dashboard for Product Management",
        "Responsive Design for Mobile & Desktop",
        "Email Notifications for Orders"
      ],
      techStack: {
        frontend: ["React.js", "Tailwind CSS", "Axios"],
        backend: ["Node.js", "Express.js", "JWT", "Bcrypt"],
        database: ["MongoDB", "Mongoose"],
        others: ["Razorpay API", "Nodemailer", "Cloudinary"]
      }
    },
    {
      title: "Educational job portal",
      client: "Course Job  provider",
      status: "Live",
      type: "Full stack Development",
      tech: ["React.js", "node", "Express.js", "REST API","Mongodb"],
      description: "My website is an online platform where users can purchase paid courses to enhance their skills. Multiple employers can post job openings, and job seekers can create profiles and apply for relevant positions. The platform connects learning and hiring in one place, helping users grow their careers and find better opportunities.",
      liveLink: "https://aivonexskills.com/",
      githubLink: null, // Private repo
      achievements: [
  
        "Digital Student dashboard",
        "Role-based access control"
      ],
      detailedFeatures: [
  "Paid Courses with Secure Enrollment",
  "Course Completion Certificate Generation",
  "Student Profile & Progress Tracking",
  "Employer Free Job Posting (First Month)",
  "Paid Job Posting After Free Period",
  "Job Seeker Profile & Resume Upload",
  "Advanced Job Search & Apply System",
  "Role-Based Access (Admin, Employer, Job Seeker)",
  "Application Tracking Dashboard",
  "Integrated Learning & Hiring Platform"
],
      techStack: {
        frontend: ["React.js", "Material-UI", "React Router", "Axios"],
        backend: ["Node.js", "REST API", "SiExpress.js"],
        database: ["Mongo db", ],
        others: ["MS91", "Email Service", "JWT Authentication"]
      }
    },
   
   {
  title: "Astrology Consultation Platform",
  client: "Astrology Service Provider",
  status: "Live",
  type: "Web Application",
  tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
  description:
    "A complete astrology platform where multiple astrologers can register, go live, chat with users, generate Panchang, Kundli, and Matrimonial reports, and accept secure payments online.",
  liveLink: "https://astrojaipur.com/",
  githubLink: null, // Private repo

  achievements: [
    "Multi-astrologer onboarding system",
    "Real-time live streaming & chat feature",
    "AI-powered astrologer assistant integration",
    "Automated Panchang & Kundli generation"
  ],

  detailedFeatures: [
    "Multi-Astrologer Registration & Profile Management",
    "Live Streaming Integration (ZegoCloud)",
    "Real-Time Chat Between User & Astrologer",
    "Panchang Generation (VedicAstroAPI)",
    "Kundli & Horoscope Report Generation",
    "Matrimonial Matchmaking Reports",
    "AI Astrologer Chat (ChatGPT Integration)",
    "Secure Online Payments (Razorpay)",
    "User Wallet & Session Booking System",
    "Role-Based Access (Admin, Astrologer, User)"
  ],

  techStack: {
    frontend: [
      "React.js",
      "Tailwind CSS",
      "Axios",
      "ZegoCloud Web SDK"
    ],
    backend: [
      "Node.js",
      "Express.js",
      "JWT Authentication"
    ],
    database: [
      "MongoDB",
      "Mongoose"
    ],
    others: [
      "VedicAstroAPI",
      "Razorpay Payment Gateway",
      "ChatGPT API",
      "Cloudinary"
    ]
  }
},
    
   
  ];

  const displayedProjects = limit ? projects.slice(0, limit) : projects;
  const hasMoreProjects = limit && projects.length > limit;

  return (
    <div className="bg-gradient-to-br from-black via-[#0d0d2b] to-[#1b0f2e] text-white py-20 px-4 md:px-20">
      <h2 className="text-4xl sm:text-5xl font-semibold text-center md:text-left bg-gradient-to-b from-white via-[#a5a5a5] to-[#5c5c5c] bg-clip-text text-transparent">
        Client Projects
      </h2>
      <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-2 mb-12 text-center md:text-left">
        Professional projects delivered for real clients across various industries
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="bg-gradient-to-br from-[#1a1a3e] to-[#0f0f23] rounded-xl p-6 border border-gray-800 hover:border-lime-400 transition-all duration-300 hover:shadow-xl hover:shadow-lime-400/10 group cursor-pointer"
          >
            {/* Status Badge */}
            <div className="flex justify-between items-start mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                project.status === 'Live'
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
              }`}>
                {project.status}
              </span>
              <div className="flex items-center gap-2">
                {project.githubLink ? (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 px-2 py-1 bg-gray-700/60 text-gray-300 text-xs rounded border border-gray-600 hover:border-lime-400 hover:text-lime-400 transition-all"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                ) : (
                  <span className="flex items-center gap-1 px-2 py-1 bg-gray-800/60 text-gray-500 text-xs rounded border border-gray-700">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Private
                  </span>
                )}
              </div>
            </div>

            {/* Project Title */}
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-lime-400 transition-colors">
              {project.title}
            </h3>

            {/* Client */}
            <p className="text-sm text-blue-400 mb-3">
              Client: {project.client}
            </p>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-gray-800/50 text-cyan-400 text-xs rounded border border-cyan-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Achievements */}
            <div className="border-t border-gray-700 pt-4">
              <p className="text-xs text-gray-400 mb-2 font-semibold">Key Achievements:</p>
              <ul className="space-y-1">
                {project.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-xs text-gray-400 flex items-start">
                    <span className="text-lime-400 mr-2">✓</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects Button */}
      {hasMoreProjects && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate('/about', { state: { scrollTo: 'client-projects' } })}
            className="bg-gradient-to-r from-lime-400 to-green-400 text-black font-semibold px-8 py-4 rounded-lg hover:shadow-xl hover:shadow-lime-400/50 transition-all duration-300 transform hover:scale-105"
          >
            View All Projects ({projects.length})
          </button>
        </div>
      )}

      {/* Project Detail Drawer - Slides from Right */}
      {selectedProject && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity duration-300"
            onClick={() => setSelectedProject(null)}
          />

          {/* Drawer */}
          <div
            className="fixed top-0 right-0 h-full w-full md:w-[600px] lg:w-[700px] bg-gradient-to-br from-[#1a1a3e] to-[#0f0f23] z-50 overflow-y-auto border-l-2 border-lime-400/30 shadow-2xl shadow-lime-400/20 animate-slide-in-right"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-[#1a1a3e] to-[#0f0f23] p-6 border-b border-gray-700 flex justify-between items-start z-10">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <p className="text-blue-400">Client: {selectedProject.client}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white text-3xl font-bold transition-colors"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Status & Type */}
              <div className="flex gap-4 flex-wrap">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  selectedProject.status === 'Live'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {selectedProject.status}
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  {selectedProject.type}
                </span>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xl font-semibold text-lime-400 mb-2">Project Overview</h3>
                <p className="text-gray-300">{selectedProject.description}</p>
              </div>

              {/* Detailed Features */}
              <div>
                <h3 className="text-xl font-semibold text-lime-400 mb-3">Key Features Implemented</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProject.detailedFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-lime-400 mt-1">✓</span>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack */}
              <div>
                <h3 className="text-xl font-semibold text-lime-400 mb-3">Technology Stack</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-cyan-400 font-semibold mb-2">Frontend:</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.frontend.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-sm rounded border border-cyan-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-green-400 font-semibold mb-2">Backend:</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.backend.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-green-500/10 text-green-300 text-sm rounded border border-green-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-orange-400 font-semibold mb-2">Database:</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.database.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-orange-500/10 text-orange-300 text-sm rounded border border-orange-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-purple-400 font-semibold mb-2">Other Tools & Services:</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.others.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-purple-500/10 text-purple-300 text-sm rounded border border-purple-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-xl font-semibold text-lime-400 mb-3">Key Achievements</h3>
                <ul className="space-y-2">
                  {selectedProject.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-lime-400">⭐</span>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Live Link & GitHub Buttons */}
              <div className="pt-4 border-t border-gray-700 flex flex-wrap gap-3">
                {selectedProject.liveLink ? (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-lime-400 to-green-400 text-black font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-lime-400/50 transition-all duration-300"
                  >
                    <span>Visit Live Website</span>
                    <span>→</span>
                  </a>
                ) : (
                  <p className="text-yellow-400 text-sm self-center">
                    ⚠️ This project is currently in development and not yet deployed.
                  </p>
                )}

                {selectedProject.githubLink ? (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg border border-gray-600 hover:border-lime-400 hover:text-lime-400 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span>View on GitHub</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 bg-gray-800 text-gray-500 font-semibold px-6 py-3 rounded-lg border border-gray-700 cursor-not-allowed">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span>Private Repository</span>
                  </span>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ClientProjects;
