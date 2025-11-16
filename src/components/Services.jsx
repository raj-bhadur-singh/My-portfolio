import React from "react";
import styled from "styled-components";
import { FaLaptopCode, FaMobileAlt, FaServer, FaPalette } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaLaptopCode size={28} />,
    number: "01",
    title: "Web Development",
    description:
      "Building responsive and dynamic websites using modern tech like React, Tailwind, and JavaScript.",
  },
  {
    icon: <FaMobileAlt size={28} />,
    number: "02",
    title: "Mobile-Friendly Design",
    description:
      "Crafting mobile-first interfaces to ensure seamless experiences across all screen sizes.",
  },
  {
    icon: <FaServer size={28} />,
    number: "03",
    title: "Backend & APIs",
    description:
      "Secure and scalable server-side logic using Node.js, Express, Spring Boot & MongoDB.",
  },
  {
    icon: <FaPalette size={28} />,
    number: "04",
    title: "UI/UX Design",
    description:
      "Designing intuitive and visually appealing interfaces with attention to accessibility and user flow.",
  },
];

const Services = () => {
  return (
    <section className="bg-gradient-to-r from-black via-[#0d0d2b] to-[#1b0f2e] text-white py-20 px-4 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-b from-white via-[#a5a5a5] to-[#5c5c5c] bg-clip-text text-transparent">
          Services I Offer
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          From frontend design to backend logic – I build full-stack digital solutions tailored to your goals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <StyledCard>
                <div className="number">
                  <p className="text">{service.number}</p>
                </div>
                <div className="icon-wrapper">
                  <div className="icon">{service.icon}</div>
                </div>
                <p className="heading">{service.title}</p>
                <p className="content">{service.description}</p>
              </StyledCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StyledCard = styled.div`
  width: 100%;
  background: #111123;
  border-radius: 12px;
  padding: 50px 30px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10px #4445;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  text-align: center;

  .icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .icon,
  .heading,
  .content {
    position: relative;
    z-index: 5;
    transition: all 0.5s;
  }

  .icon {
    color: #a3e635;
    font-size: 28px;
  }

  .heading {
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 16px;
    color: #fff;
  }

  .content {
    font-size: 14px;
    color: #cfcfcf;
    line-height: 1.6;
  }

  .number {
    position: absolute;
    top: -80px;
    right: -85px;
    padding: 80px 100px 30px 30px;
    background: #87cc16;
    border-radius: 100%;
    z-index: 5;
  }

  .number .text {
    font-size: 26px;
    font-weight: 600;
    color: #000;
  }

  .number::after {
    content: "";
    width: 50px;
    height: 50px;
    background: #87cc16;
    position: absolute;
    border-radius: 100%;
    top: 50%;
    right: 50%;
    transform: translateX(50%) translateY(-50%);
    transition: all 0.5s;
    z-index: -1;
  }

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 5px 20px #a3e63566;
  }

  &:hover .number::after {
    width: 900px;
    height: 900px;
  }

  &:hover .icon,
  &:hover .heading,
  &:hover .content {
    color: #f5f5f5;
  }
`;

export default Services;
