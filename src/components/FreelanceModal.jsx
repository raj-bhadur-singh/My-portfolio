import React, { useState } from 'react';
import { FaWhatsapp, FaTimes, FaRocket } from 'react-icons/fa';

const FreelanceModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: '',
    budget: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create WhatsApp message
    const message = `
🚀 *New Freelance Inquiry*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
💰 *Budget:* ${formData.budget}

📝 *Project Details:*
${formData.projectDetails}
    `.trim();

    const whatsappUrl = `https://wa.me/917282876303?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Reset form and close modal
    setFormData({ name: '', email: '', projectDetails: '', budget: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity duration-500"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-gradient-to-br from-[#1a1a3e] via-[#0f0f23] to-[#1a1a3e] rounded-2xl max-w-lg w-full h-[90vh] max-h-[700px] border-2 border-lime-400/40 shadow-2xl shadow-lime-400/30 pointer-events-auto animate-slide-in-center overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Fixed Header with Close Button */}
          <div className="relative bg-gradient-to-r from-lime-400 to-green-500 p-6 text-black flex-shrink-0">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-all duration-300 hover:rotate-90 hover:scale-110"
              title="Close"
            >
              <FaTimes size={20} />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <FaRocket className="text-3xl animate-bounce" />
              <h2 className="text-3xl font-bold">Let's Build Together!</h2>
            </div>
            <p className="text-black/80 font-medium">
              I'm ready to bring your ideas to life ✨
            </p>
          </div>

          {/* Fixed Cool Message */}
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-4 border-l-4 border-lime-400 flex-shrink-0">
            <p className="text-white text-sm leading-relaxed">
              💼 <span className="font-semibold">Available for Freelance Projects</span> - Full Stack Development |
              MERN Stack | React | Node.js | MongoDB | Modern Web Apps
            </p>
          </div>

          {/* Form with Flex Layout */}
          <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
            {/* Scrollable Form Fields */}
            <div className="p-6 space-y-4 overflow-y-auto flex-1">
            {/* Name Input */}
            <div>
              <label className="block text-lime-400 text-sm font-semibold mb-2">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 transition-colors"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-lime-400 text-sm font-semibold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 transition-colors"
              />
            </div>

            {/* Budget Input */}
            <div>
              <label className="block text-lime-400 text-sm font-semibold mb-2">
                Project Budget (Optional)
              </label>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="e.g., ₹50,000 - ₹1,00,000"
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 transition-colors"
              />
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-lime-400 text-sm font-semibold mb-2">
                Project Details *
              </label>
              <textarea
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Tell me about your project, requirements, and timeline..."
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 transition-colors resize-none"
              />
            </div>
            </div>

            {/* Fixed Submit Button and Footer */}
            <div className="p-6 pt-4 border-t border-gray-700 flex-shrink-0 space-y-3">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-lime-400 to-green-500 text-black font-bold py-4 rounded-lg hover:shadow-xl hover:shadow-lime-400/50 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3"
              >
                <FaWhatsapp size={24} />
                <span>Send Message on WhatsApp</span>
              </button>

              {/* Footer Note */}
              <p className="text-gray-400 text-xs text-center">
                🔒 Your information is safe and will only be used to contact you about your project
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FreelanceModal;
