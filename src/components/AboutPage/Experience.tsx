import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Front-end Development",
      duration: "2.5 years",
      description: "Learning and building modern, responsive, and maintainable web applications using React, Next.js, and Tailwind CSS."
    },
    {
      title: "Full-stack Projects",
      duration: "Ongoing",
      description: "Hands-on experience integrating frontend with backend services like Appwrite, practicing state management with Redux, and improving code quality."
    },
    {
      title: "Skills & Tools",
      duration: "Continuous",
      description: "Strong foundation in JavaScript and TypeScript, experience with version control (Git), and focus on clean, practical, and scalable solutions."
    }
  ];

  return (
    <section className="w-full bg-black text-[#E2DDB4] px-4 md:px-16 py-16 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Experience & Skills
      </h2>

      <div className="w-full max-w-3xl flex flex-col gap-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row md:justify-between items-center bg-black border border-[#E2DDB4]/50 rounded-xl p-6 md:p-8 shadow-lg shadow-black/40 transition-transform duration-500 hover:scale-105"
          >
            {/* Title & Duration */}
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-[#FFD700] font-semibold">{exp.duration}</p>
            </div>

            {/* Description */}
            <p className="text-[#E2DDB4]/95 text-center md:text-left leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
