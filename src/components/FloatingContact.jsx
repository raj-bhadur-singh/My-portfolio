import React, { useState } from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const FloatingContact = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const phoneNumber = '7282876303';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/91${phoneNumber}?text=Hi, I would like to connect with you`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110 animate-bounce-slow"
        title="WhatsApp"
      >
        <FaWhatsapp size={28} />

        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat on WhatsApp
        </span>

        {/* Ripple Effect */}
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping"></span>
      </a>

      {/* Phone Button */}
      <a
        href={`tel:+91${phoneNumber}`}
        className="group relative bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-110"
        title="Call"
      >
        <FaPhone size={24} />

        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Call: +91 {phoneNumber}
        </span>
      </a>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default FloatingContact;
