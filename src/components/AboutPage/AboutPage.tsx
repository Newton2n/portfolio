"use client";

import { JSX, useState } from "react";
import { IoMdClose as CloseIcon } from "react-icons/io";
import {
  SiExpress,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

const AboutPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const skillIcons: Record<string, JSX.Element> = {
    "Express.js": <SiExpress aria-hidden="true" />,
    "Node.js": <SiNodedotjs aria-hidden="true" />,
    "Next.js": <SiNextdotjs aria-hidden="true" />,
    TypeScript: <SiTypescript aria-hidden="true" />,
    PostgreSQL: <SiPostgresql aria-hidden="true" />,
    Prisma: <SiPrisma aria-hidden="true" />,
  };

  const technicalSkills = [
    "Express.js",
    "Node.js",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
  ];

  const stats = [
    {
      number: "03+",
      label: "Years of Project Experience",
    },
    {
      number: "08+",
      label: "Technologies Used",
    },
    {
      number: "07+",
      label: "Projects Built",
    },
  ];

  return (
    <>
      <section
        id="about"
        aria-labelledby="about-heading"
        className="w-full px-6 md:px-12 py-20 md:py-32 bg-white dark:bg-black transition-colors duration-200"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Introduction */}
          <div className="mb-20">
            <h2
              id="about-heading"
              className="text-4xl md:text-6xl font-black text-neutral-900 dark:text-white mb-6 tracking-tight leading-none"
            >
              About Me
            </h2>

            <p className="text-xl md:text-2xl text-neutral-800 dark:text-neutral-200 font-medium leading-relaxed max-w-4xl">
              <span className="font-extrabold text-neutral-950 dark:text-white">
                Backend-focused developer.
              </span>{" "}
              I build full-stack web applications using{" "}
              <span className="font-extrabold text-neutral-950 dark:text-white">
                Node.js, Express.js, and Next.js
              </span>
              , with a focus on reliable APIs, database design, application
              architecture, and maintainable code.
            </p>
          </div>

          {/* Journey + Profile Configuration */}
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-20">
            {/* Programming Journey */}
            <div className="md:col-span-7 space-y-8">
              <h3 className="text-sm font-bold text-neutral-950 dark:text-white uppercase tracking-widest border-b-2 border-neutral-900 dark:border-white pb-2 inline-block">
                My Programming Journey
              </h3>

              <div className="space-y-6 text-base md:text-lg text-neutral-800 dark:text-neutral-300 leading-relaxed">
                <p>
                  My journey into software development started as a{" "}
                  <span className="font-extrabold text-neutral-950 dark:text-white">
                    self-taught pursuit
                  </span>
                  . Since then, I have continued developing my skills through
                  structured learning, hands-on projects, and consistent
                  experimentation with modern web technologies.
                </p>

                <p>
                  I enjoy understanding what happens behind the code rather
                  than only learning how to use a technology. I regularly
                  explore topics such as{" "}
                  <span className="font-extrabold text-neutral-950 dark:text-white">
                    backend architecture, APIs, databases, JavaScript
                    internals, and application performance
                  </span>
                  .
                </p>

                <p>
                  Most of my development work focuses on building practical
                  web applications. I enjoy working across the stack, but I am
                  particularly interested in the{" "}
                  <span className="font-extrabold text-neutral-950 dark:text-white">
                    backend side of applications
                  </span>
                  — designing APIs, structuring data, handling authentication,
                  and solving application-level problems.
                </p>

                <p>
                  Outside programming, I enjoy{" "}
                  <span className="font-extrabold text-neutral-950 dark:text-white">
                    competitive cricket and football
                  </span>
                  . They give me a break from the screen and help me stay
                  focused when I return to my next engineering problem.
                </p>
              </div>
            </div>

            {/* Developer Profile */}
            <div className="md:col-span-5 flex flex-col justify-center">
              <div
                className="w-full rounded border-2 border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 p-6 font-mono text-sm text-neutral-700 dark:text-neutral-300 space-y-4 shadow-md"
                aria-label="Developer profile configuration"
              >
                {/* Terminal Header */}
                <div className="flex items-center gap-2 border-b border-neutral-300 dark:border-neutral-800 pb-3">
                  <div
                    className="w-3 h-3 rounded-full bg-neutral-400 dark:bg-neutral-700"
                    aria-hidden="true"
                  />

                  <div
                    className="w-3 h-3 rounded-full bg-neutral-400 dark:bg-neutral-700"
                    aria-hidden="true"
                  />

                  <div
                    className="w-3 h-3 rounded-full bg-neutral-400 dark:bg-neutral-700"
                    aria-hidden="true"
                  />

                  <span className="ml-2 font-sans font-bold text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    profile_config.sh
                  </span>
                </div>

                {/* Configuration */}
                <div className="space-y-2 text-sm leading-relaxed font-semibold">
                  <p>
                    <span className="text-neutral-400 dark:text-neutral-600 mr-2">
                      1
                    </span>

                    <span className="text-neutral-900 dark:text-white">
                      const
                    </span>{" "}
                    developer = {"{"}
                  </p>

                  <p>
                    <span className="text-neutral-400 dark:text-neutral-600 mr-2">
                      2
                    </span>

                    &nbsp;&nbsp;status:{" "}
                    <span className="text-neutral-900 dark:text-neutral-100">
                      &quot;Active Learner&quot;
                    </span>
                    ,
                  </p>

                  <p>
                    <span className="text-neutral-400 dark:text-neutral-600 mr-2">
                      3
                    </span>

                    &nbsp;&nbsp;learning:{" "}
                    <span className="text-neutral-900 dark:text-neutral-100">
                      &quot;Structured + Self-Taught&quot;
                    </span>
                    ,
                  </p>

                  <p>
                    <span className="text-neutral-400 dark:text-neutral-600 mr-2">
                      4
                    </span>

                    &nbsp;&nbsp;focus:{" "}
                    <span className="text-neutral-900 dark:text-neutral-100">
                      &quot;Backend / Full-Stack&quot;
                    </span>
                  </p>

                  <p>
                    <span className="text-neutral-400 dark:text-neutral-600 mr-2">
                      5
                    </span>

                    {"};"}
                  </p>
                </div>

                {/* Modal Trigger */}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  aria-haspopup="dialog"
                  aria-controls="professional-matrix-dialog"
                  className="w-full text-center py-3 mt-2 block border-2 border-neutral-900 dark:border-white bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 text-white dark:text-black font-sans font-bold text-sm tracking-wide transition-all rounded shadow active:scale-[0.98] cursor-pointer"
                >
                  View Professional Matrix
                </button>
              </div>
            </div>
          </div>

          {/* Skills & Stats */}
          <div className="space-y-16">
            {/* Technical Skills */}
            <div className="pb-12 border-b-2 border-neutral-200 dark:border-neutral-800">
              <div className="mb-8">
                <h3 className="text-sm font-bold text-neutral-950 dark:text-white uppercase tracking-widest border-l-4 border-neutral-900 dark:border-white pl-4">
                  Technical Specialization
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {technicalSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 p-3 rounded-lg border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 transition-all duration-300"
                  >
                    <div
                      className="text-2xl text-neutral-900 dark:text-white"
                      aria-hidden="true"
                    >
                      {skillIcons[skill]}
                    </div>

                    <span className="text-neutral-700 dark:text-neutral-300 font-semibold text-sm uppercase tracking-wide">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-6 text-left"
              aria-label="Developer statistics"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-4xl md:text-6xl font-black text-neutral-900 dark:text-white tracking-tight">
                    {stat.number}
                  </span>

                  <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Matrix Modal */}
      {isModalOpen && (
        <div
          id="professional-matrix-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="professional-matrix-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div
            onClick={() => setIsModalOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Dialog */}
          <div className="relative w-full max-w-xl rounded border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black p-8 md:p-10 shadow-2xl space-y-6 z-10 text-neutral-900 dark:text-white animate-in fade-in zoom-in-95 duration-150">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close professional matrix"
              className="absolute top-5 right-5 p-2 rounded text-neutral-500 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            >
              <CloseIcon
                className="text-2xl"
                aria-hidden="true"
              />
            </button>

            {/* Modal Title */}
            <h2
              id="professional-matrix-title"
              className="text-2xl font-black tracking-tight border-b-2 border-neutral-100 dark:border-neutral-900 pb-3 pr-10"
            >
              Professional Matrix
            </h2>

            {/* Modal Content */}
            <p className="text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed">
              I am currently sharpening my skills through a{" "}
              <span className="font-extrabold text-neutral-950 dark:text-white">
                combination of structured learning and hands-on development
              </span>{" "}
              to build robust and efficient systems. My focus is on writing
              code that is not only functional, but also maintainable and
              reliable, with attention to performance, architecture, and
              long-term scalability.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutPage;