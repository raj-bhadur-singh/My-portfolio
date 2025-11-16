import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);
  const closeDrawer = () => setOpen(false);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-transparent  ${open ? `backdrop-blur-none` : `backdrop-blur-md`} px-4 py-4`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-3xl md:text-6xl xs:text-5xl font-light text-white"
          style={{ fontFamily: "Passions Conflict" }}
        >
          Raj bhadur singh
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-20 text-white">
          <nav className="flex gap-4 font-medium text-sm xs:text-base sm:text-xl">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-400 transition" : "hover:text-lime-400 transition"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-400 transition" : "hover:text-lime-400 transition"
              }
            >
              About
            </NavLink>

            {/* Scroll to Projects Section on Home */}
            <Link
              to="/"
              state={{ scrollTo: "projects" }}
              className="hover:text-lime-400 transition"
            >
              Projects
            </Link>

            {/* Scroll to Experience Section on Home */}
            <Link
              to="/about"
              state={{ scrollTo: "experience" }}
              className="hover:text-lime-400 transition"
            >
              Experience
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-6 ml-6 text-white text-lg">
            <a
              href="https://www.linkedin.com/in/raj-mernstack-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-400 transition"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="https://github.com/raj-bhadur-singh/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-400 transition"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleDrawer}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          <HiMenuAlt3 />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              onClick={closeDrawer}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="md:hidden fixed top-0 right-0 h-full w-[70vw] max-w-xs bg-opacity-95 bg-gradient-to-br from-black via-[#0b0b27] to-[#180d29] shadow-lg z-50 overflow-y-auto p-6 flex flex-col gap-4 text-white"
            >

              <div className="flex justify-between items-center mb-6 bg-[#0f0f0f] p-2  rounded-full">
                <span className="text-2xl font-bold" style={{ fontFamily: "Tangerine" }}>
                  Raj bhadur singh
                </span>
                <button onClick={closeDrawer}>
                  <HiX size={26} />
                </button>
              </div>

              <NavLink
                to="/"
                onClick={closeDrawer}
                className={({ isActive }) =>
                  (isActive ? "text-blue-400" : "hover:text-lime-400") +
                  " transition text-lg py-2"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                onClick={closeDrawer}
                className={({ isActive }) =>
                  (isActive ? "text-blue-400" : "hover:text-lime-400") +
                  " transition text-lg py-2"
                }
              >
                About
              </NavLink>

              <Link
                to="/"
                state={{ scrollTo: "projects" }}
                onClick={closeDrawer}
                className="hover:text-lime-400 transition text-lg py-2"
              >
                Projects
              </Link>

              <Link
                to="/about"
                state={{ scrollTo: "experience" }}
                onClick={closeDrawer}
                className="hover:text-lime-400 transition text-lg py-2"
              >
                Experience
              </Link>

              <hr className="border-t border-gray-700 my-4" />

              <div className="flex items-center gap-4 text-white text-xl">
                <a
                  href="https://www.linkedin.com/in/raj-mernstack-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lime-400"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/raj-bhadur-singh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lime-400"
                >
                  <FaGithub />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
