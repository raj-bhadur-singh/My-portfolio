import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ClientProjects = ({ limit = null }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const projects = [
    {
      title: "E-Commerce Fashion Platform",
      client: "Fashion Retail Brand",
      status: "Live",
      type: "Full Stack Development",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      description: "Complete e-commerce solution with user authentication, product management, cart system, and payment integration.",
      liveLink: "https://example-fashion-store.com", // Replace with actual link
      achievements: [
        "Handles 5,000+ daily active users",
        "Reduced page load time by 45%",
        "Implemented secure payment gateway"
      ],
      detailedFeatures: [
        "User Authentication & Authorization with JWT",
        "Product Catalog with Advanced Filtering",
        "Shopping Cart & Wishlist Management",
        "Secure Payment Gateway Integration (Razorpay/Stripe)",
        "Order Tracking & Management System",
        "Admin Dashboard for Product Management",
        "Responsive Design for Mobile & Desktop",
        "Email Notifications for Orders"
      ],
      techStack: {
        frontend: ["React.js", "Redux Toolkit", "Tailwind CSS", "Axios"],
        backend: ["Node.js", "Express.js", "JWT", "Bcrypt"],
        database: ["MongoDB", "Mongoose"],
        others: ["Razorpay API", "Nodemailer", "Cloudinary"]
      }
    },
    {
      title: "Hospital Management System",
      client: "Healthcare Provider",
      status: "In Development",
      type: "Enterprise Application",
      tech: ["React.js", "Spring Boot", "MySQL", "REST API"],
      description: "Comprehensive system for patient management, appointment scheduling, medical records, and billing.",
      liveLink: "", // Not live yet
      achievements: [
        "Streamlined appointment process",
        "Digital patient record management",
        "Role-based access control"
      ],
      detailedFeatures: [
        "Patient Registration & Profile Management",
        "Doctor Appointment Scheduling System",
        "Electronic Medical Records (EMR)",
        "Prescription Management",
        "Billing & Invoice Generation",
        "Lab Test Results Management",
        "Role-Based Access (Admin, Doctor, Staff, Patient)",
        "Medical History Tracking"
      ],
      techStack: {
        frontend: ["React.js", "Material-UI", "React Router", "Axios"],
        backend: ["Spring Boot", "Spring Security", "REST API", "JPA"],
        database: ["MySQL", "Hibernate"],
        others: ["PDF Generation", "Email Service", "JWT Authentication"]
      }
    },
    {
      title: "Real Estate Portal",
      client: "Property Dealer",
      status: "Live",
      type: "Web Application",
      tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
      description: "Property listing platform with advanced search filters, virtual tours, and lead management system.",
      liveLink: "https://example-realestate.com", // Replace with actual link
      achievements: [
        "300+ property listings managed",
        "Advanced search & filter system",
        "Responsive design for all devices"
      ],
      detailedFeatures: [
        "Property Listing with Image Gallery",
        "Advanced Search & Filter (Location, Price, Type)",
        "Google Maps Integration",
        "Virtual Tour Support",
        "Lead Capture & Management System",
        "Featured Properties Section",
        "Contact Form with Email Integration",
        "Mobile-Responsive Design"
      ],
      techStack: {
        frontend: ["React.js", "Tailwind CSS", "React Hook Form", "Swiper.js"],
        backend: ["Node.js", "Express.js", "Multer"],
        database: ["MongoDB", "Mongoose"],
        others: ["Google Maps API", "Nodemailer", "Cloudinary"]
      }
    },
    {
      title: "Restaurant Management App",
      client: "Restaurant Chain",
      status: "Live",
      type: "Full Stack Development",
      tech: ["React.js", "Express.js", "PostgreSQL", "Socket.io"],
      description: "Complete restaurant management with order tracking, inventory management, and real-time kitchen updates.",
      liveLink: "https://example-restaurant.com", // Replace with actual link
      achievements: [
        "Real-time order notifications",
        "Inventory tracking system",
        "Customer feedback module"
      ],
      detailedFeatures: [
        "Online Menu with Categories",
        "Real-Time Order Management",
        "Kitchen Display System (KDS)",
        "Table Reservation System",
        "Inventory Management",
        "Staff Management Module",
        "Customer Feedback & Reviews",
        "Sales Analytics Dashboard"
      ],
      techStack: {
        frontend: ["React.js", "Socket.io Client", "Bootstrap", "Chart.js"],
        backend: ["Node.js", "Express.js", "Socket.io", "Sequelize"],
        database: ["PostgreSQL"],
        others: ["Real-time Notifications", "PDF Invoice", "SMS Integration"]
      }
    },
    {
      title: "Educational Platform",
      client: "Coaching Institute",
      status: "In Development",
      type: "Learning Management System",
      tech: ["React.js", "Node.js", "MongoDB", "AWS S3"],
      description: "Online learning platform with video courses, quizzes, progress tracking, and student-teacher interaction.",
      liveLink: "", // Not live yet
      achievements: [
        "Video streaming integration",
        "Interactive quiz system",
        "Student progress analytics"
      ],
      detailedFeatures: [
        "Course Management System",
        "Video Streaming with AWS S3",
        "Interactive Quizzes & Assignments",
        "Student Progress Tracking",
        "Live Class Integration (Zoom/Google Meet)",
        "Discussion Forum",
        "Certificate Generation",
        "Payment Integration for Courses"
      ],
      techStack: {
        frontend: ["React.js", "Redux", "Video.js", "Tailwind CSS"],
        backend: ["Node.js", "Express.js", "Passport.js"],
        database: ["MongoDB", "Mongoose"],
        others: ["AWS S3", "Razorpay", "Zoom API", "PDF Generation"]
      }
    },
    {
      title: "Gym & Fitness Tracker",
      client: "Fitness Center",
      status: "Live",
      type: "Mobile-First Web App",
      tech: ["React.js", "Firebase", "Chart.js", "PWA"],
      description: "Fitness tracking app with workout plans, diet management, membership handling, and progress visualization.",
      liveLink: "https://example-fitness.com", // Replace with actual link
      achievements: [
        "PWA for mobile experience",
        "Visual progress tracking",
        "Automated membership alerts"
      ],
      detailedFeatures: [
        "Workout Plan Management",
        "Diet & Nutrition Tracking",
        "Progress Visualization with Charts",
        "Membership Management System",
        "Attendance Tracking",
        "Trainer Assignment",
        "Payment & Invoice System",
        "Push Notifications for Reminders"
      ],
      techStack: {
        frontend: ["React.js", "Chart.js", "PWA", "Material-UI"],
        backend: ["Firebase Functions", "Firebase Auth"],
        database: ["Firebase Firestore"],
        others: ["Firebase Cloud Messaging", "Stripe", "Service Workers"]
      }
    }
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
              <span className="text-xs text-gray-500 italic">{project.type}</span>
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

              {/* Live Link Button */}
              {selectedProject.liveLink && (
                <div className="pt-4 border-t border-gray-700">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-lime-400 to-green-400 text-black font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-lime-400/50 transition-all duration-300"
                  >
                    <span>Visit Live Website</span>
                    <span>→</span>
                  </a>
                </div>
              )}

              {!selectedProject.liveLink && (
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-yellow-400 text-sm">
                    ⚠️ This project is currently in development and not yet deployed.
                  </p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ClientProjects;
