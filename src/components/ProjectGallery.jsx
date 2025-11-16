import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Card from './animation/CardTemp';

const projects = [
  {
    id: 1,
    title: 'YouTube Clone',
    category: 'Full Stack',
    image: '/images/youtube-clone.png',
    previewLink: "https://you-tube-clone-eight-inky.vercel.app/",
    githubLink: 'https://github.com/ArjunLakshakar/YouTube-Clone',
    description:
      'A MERN-based video-sharing platform featuring uploads, channels, likes, comments, and category-based filters. Secure JWT-auth APIs and modern responsive UI with Tailwind CSS. ' +
      'Includes channel dashboard, user authentication, and related video section. Mimics YouTube UI with modal-based uploads and toast notifications.',
  },
  {
    id: 2,
    title: 'TechVistra',
    category: 'Corporate Site',
    image: '/images/techvistra.png',
    previewLink: "https://www.techvistra.com",
    githubLink: 'https://github.com/ArjunLakshakar',
    description:
      'Official corporate site built with React and Tailwind. Fully responsive, SEO-optimized, and supports dynamic content through reusable components and API integrations. ' +
      'Collaborated with designers to maintain brand consistency. Developed secure APIs and ensured accessibility across devices.',
  },
  {
    id: 3,
    title: 'ShoppyGloble',
    category: 'E-Commerce',
    image: '/images/shoppy-globle.png',
    previewLink: "https://shoppy-globe-full-stack.vercel.app",
    githubLink: 'https://github.com/ArjunLakshakar/ShoppyGlobe-FullStack',
    description:
      'Full-stack e-commerce platform with React frontend and Node.js backend. Features include product listings, cart management, user authentication, and order processing. ',
  },
  {
    id: 4,
    title: 'JobPortal',
    category: 'Job Platform',
    image: '/images/job-portal.png',
    previewLink: "https://jobportal-frontend-c9ck.vercel.app/",
    githubLink: 'https://github.com/ArjunLakshakar/jobportal-frontend',
    description:
      "A full-stack job portal built with React and Java Spring.Role-based auth, recruiter tools, job listing filters, and admin panel. Built with scalable architecture and seamless user interactions." 
      // "Responsive design with Tailwind CSS, secure JWT authentication, and RESTful APIs. Includes admin dashboard for managing job postings and user applications.",
  },
  {
    id: 5,
    title: 'Online Library',
    category: 'Book Explorer',
    image: '/images/online-library.png',
    previewLink: "https://online-library-system-red.vercel.app",
    githubLink: 'https://github.com/ArjunLakshakar/Online-Library-System',
    description:
      'React app using Open Library API. Features: category filters, trending books, clean responsive UI with Tailwind. Added loading states, dynamic search, and error handling.',
  },
];

const ProjectGallery = () => {


  return (
    <section className="bg-gradient-to-br from-black via-[#0b0b27] to-[#180d29] text-white py-20 px-4 xs:px-6 sm:px-10 md:px-20">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 flex flex-col md:flex-row items-center gap-4"
      >
        <iframe
          className="h-20 sm:h-28 md:h-32 hidden md:flex"
          src="https://lottie.host/embed/491d72d6-6a6c-47d8-9675-d05dad8b2daa/zDsOsFbcHR.lottie"
          title="React Work Animation"
        />
        <div className="text-center md:text-left">
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-100 mb-3"
            style={{ fontFamily: 'Caveat' }}
          >
            Some Recent Work
          </h2>
          <p className="text-gray-400 max-w-3xl text-sm xs:text-base">
            Projects that reflect my journey as a full-stack developer — blending clean code, responsive design, and real-world problem solving.
          </p>
        </div>
      </motion.div>

      {/* First Row (2 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {projects.slice(0, 2).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className=" relative rounded-xl overflow-hidden group hover:scale-[1.03] transition-transform duration-300"
          >
            <Card
              img={project.image}
              heading={project.title}
              para={project.description}
              previewLink={project.previewLink}
              githubLink={project.githubLink}
            />
            <div className="absolute top-3 right-3 bg-[#8985cd] text-gray-900 text-sm xs:text-base px-3 py-1 rounded-full font-semibold">
              {project.category}
            </div>
            {/* <h3 className="text-white text-lg font-medium">{project.title}</h3> */}
            {/* <div className="hover:hidden absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 ">
              <h3 className="text-white text-lg font-medium">{project.title}</h3>
            </div> */}
          </motion.div>
        ))}
      </div>

      {/* Second Row (3 Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.slice(2).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden group hover:scale-[1.03] transition-transform duration-300"
          >
            <Card
              img={project.image}
              heading={project.title}
              para={project.description}
              previewLink={project.previewLink}
              githubLink={project.githubLink}
            />
            <div className="absolute top-3 right-3 bg-[#8985cd] text-gray-900  text-sm xs:text-sm px-2 py-1 rounded-full font-semibold">
              {project.category}
            </div>
            {/* <h3 className="text-white text-lg font-medium">{project.title}</h3> */}
            {/* <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white text-lg font-medium">{project.title}</h3>
            </div> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
