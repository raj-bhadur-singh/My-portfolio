import React from 'react';

const skills = [
  {
    title: 'Full-Stack Application Development',
    description:
      'I develop complete web applications using React, Node.js, Spring Boot, and MongoDB/MySQL. From authentication to deployment, I build secure, scalable systems like my YouTube clone and Job Portal projects.',
  },
  {
    title: 'Interactive & Scalable Frontends',
    description:
      'Using React.js with Tailwind CSS, I craft dynamic, responsive interfaces. Features like video upload, channel management, and product carts highlight my ability to build engaging, real-world UIs.',
  },
  {
    title: 'RESTful API & Backend Logic',
    description:
      'I design robust APIs with Node.js (Express) and Spring Boot, implement JWT auth, and manage file uploads and CRUD operations. My e-commerce and video platform projects demonstrate real-time backend integration.',
  },
  {
    title: 'Clean UI/UX & Component Architecture',
    description:
      'I build modular, reusable components and maintain a clean, consistent UI/UX. My Platter food delivery and TechVistra corporate site reflect attention to performance, accessibility, and responsive design.',
  },
];

const SkillsSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-20">
      <h2 className="text-3xl font-bold mb-12 text-center md:text-left">What I Do</h2>

      <div className="relative pl-6 border-l-4 border-blue-600 space-y-12">
        {skills.map((skill, index) => (
          <div key={index} className="relative pl-6">
            {/* Blue Dot */}
            <div className="absolute -left-3 top-1 w-4 h-4 bg-blue-600 rounded-full"></div>
            {/* Skill Content */}
            <h3 className="text-xl font-semibold text-blue-500">{skill.title}</h3>
            <p className="text-gray-300 text-sm mt-2">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
