import React from "react";

const Experience = () => {
    const experiences = [
        {
            range: "Jan 2025 – July 2025",
            title: "Full Stack Developer Intern",
            company: "TechVistra, Pune",
            link: "https://techvistra.com/",
            details: [
                "Developed and maintained full-stack web applications using Java and the MERN stack.",
                "Built and deployed the official TechVistra corporate website with a responsive, SEO-optimized design.",
                "Designed reusable React components to enable dynamic content rendering and maintain a clean UI .",
                "Developed secure RESTful APIs, implemented JWT-based authentication, and optimized SQL/NoSQL queries.",
            ],
        },
        {
            range: "18 March – 18 July 2025",
            title: "MERN Stack Developer Certification",
            company: "Internshala Trainings",
            link: "https://drive.google.com/drive/u/0/folders/1HaE3M0LH4RAqkS_MYJtLFzqXEDgaT8cp",
            details: [
                "Created real-world full-stack projects using MongoDB, Express, React, Node.js.",
                "Covered authentication, REST APIs, file upload, and deployment.",
                "Built hands-on projects like e-commerce platform & blog app.",
            ],
        },
    ];

    return (
        <section className="bg-gradient-to-br from-black via-[#0d0d2b] to-[#1b0f2e] text-white py-20 px-4 md:px-20">
            <h2 className="text-4xl sm:text-5xl font-semibold text-center md:text-left bg-gradient-to-b from-white via-[#a5a5a5] to-[#5c5c5c] bg-clip-text text-transparent">
                Experience and education
            </h2>

            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-2 mb-12 text-center md:text-left">
                Real-world internship and project training that shaped my practical
                skills in full-stack development.
            </p>

            <div className="flex flex-col-reverse md:flex-row gap-16 px-2 sm:px-4 md:px-10">
                {/* Timeline Section */}
                <div className="border-l-2 border-gray-700 space-y-16 lg:w-2/3 pl-6 sm:pl-10">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="relative animate-fade-in-up transition-all duration-500 ease-in-out"
                            style={{ animationDelay: `${index * 200}ms`, animationFillMode: "both" }}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute sm:-left-12 -left-8 w-4 h-4 bg-lime-400 border-4 border-[#0d0d2b] rounded-full shadow-lg shadow-lime-400/30" />

                            {/* Date Badge */}
                            <div className="absolute -top-2 -left-[15px] bg-lime-400 text-black text-sm font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                                {exp.range}
                            </div>

                            {/* Job Content */}
                            <div className="flex flex-col pt-8">
                                <h3 className="text-xl sm:text-2xl font-semibold">{exp.title}</h3>
                                <p className="text-blue-400 text-base sm:text-lg mb-3 flex items-center gap-2">
                                    <span>@</span>
                                    {exp.link ? (
                                        <a
                                            href={exp.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline underline-offset-2"
                                        >
                                            {exp.company}
                                        </a>
                                    ) : (
                                        <span>{exp.company}</span>
                                    )}
                                </p>
                                <ul className="list-disc text-gray-300 space-y-2 pl-5 text-sm sm:text-base">
                                    {exp.details.map((point, idx) => (
                                        <li
                                            key={idx}
                                            className="hover:text-white transition-all duration-200"
                                        >
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lottie Animation */}
                <div className="w-full lg:w-1/3 flex-col items-center md:items-start lg:flex hidden">
                    <iframe
                        src="https://lottie.host/embed/207d9b77-6ffd-4c77-8a1f-71a4beddfa1b/UtkxYO1xvQ.lottie"
                        // src="https://lottie.host/embed/8161e01a-b711-4730-897d-f76e4cc9ebd2/qhduI8wxk1.lottie"
                        title="experience-lottie"
                        className="w-full h-[300px] sm:h-[400px] md:h-[500px] max-w-[450px] "
                        style={{ border: "none" }}
                    ></iframe>
                    {/* <p className="text-lime-400 text-sm mt-4 text-center md:text-left font-semibold">
                        Visualizing My Journey →
                    </p> */}
                </div>
            </div>
        </section>
    );
};

export default Experience;
