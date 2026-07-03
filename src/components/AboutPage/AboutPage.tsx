"use client";
import { JSX, useState } from "react";
import { IoMdClose as CloseIcon } from "react-icons/io";
// Import skill icons
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

  // Map skills to their icons
  const skillIcons: { [key: string]: JSX.Element } = {
    "Express.js": <SiExpress />,
    "Node.js": <SiNodedotjs />,
    "Next.js": <SiNextdotjs />,
    TypeScript: <SiTypescript />,
    PostgreSQL: <SiPostgresql />,
    Prisma: <SiPrisma />,
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
    { number: "03+", label: "Years Project Experience" },
    { number: "08+", label: "Tech Stack" },
    { number: "07+", label: "Total Projects" },
  ];

  return (
    <>
      <section
        id="about"
        className="w-full px-6 md:px-12 py-20 md:py-32 bg-white dark:bg-black transition-colors duration-200"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-neutral-900 dark:text-white mb-6 tracking-tight leading-none">
              About Me
            </h2>
            <p className="text-xl md:text-2xl text-neutral-800 dark:text-neutral-200 font-medium leading-relaxed max-w-4xl">
              <span className="font-extrabold text-neutral-950 dark:text-white">
                Tech explorer & developer.
              </span>{" "}
              I love diving deep into how things work, using{" "}
              <span className="font-extrabold text-neutral-950 dark:text-white">
                Next.js and Express.js
              </span>{" "}
              to bridge the gap between{" "}
              <span className="font-extrabold text-neutral-950 dark:text-white">
                cutting-edge hardware
              </span>{" "}
              and high-performance software.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-20">
            <div className="md:col-span-7 space-y-8">
              <h3 className="text-sm font-bold text-neutral-950 dark:text-white uppercase tracking-widest border-b-2 border-neutral-900 dark:border-white pb-2 inline-block">
                My Programming Journey
              </h3>
              <div className="space-y-6 text-base md:text-lg text-neutral-800 dark:text-neutral-300 leading-relaxed">
                <p>
                  My journey began as a{" "}
                  <span className="font-extrabold text-neutral-950 dark:text-white">
                    self-taught pursuit
                  </span>
                  , now refined by a{" "}
                  <span className="font-extrabold text-neutral-950 dark:text-white">
                    formal professional curriculum
                  </span>
                  . This blend of self-directed exploration and structured
                  learning has given me a unique perspective on solving complex
                  technical problems.
                </p>
                <p>
                  Beyond code, I have a long-standing fascination with the
                  technology that shapes our world. I love the thrill of
                  "deep-diving" into new innovations—whether it is the latest
                  advancements in mobile tech, the architecture of a new laptop,
                  or exploring emerging tools. I am not just a user of
                  technology; I am an explorer who loves to understand how new
                  gadgets and systems are built and what makes them tick.
                </p>
                <p>
                  When I am not in front of a terminal, I recharge through{" "}
                  <span className="font-extrabold text-neutral-950 dark:text-white">
                    competitive cricket and football
                  </span>
                  . These sports keep me energized and provide the mental
                  clarity I need to approach my next engineering challenge.
                </p>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col justify-center">
              <div className="w-full rounded border-2 border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 p-6 font-mono text-sm text-neutral-700 dark:text-neutral-300 space-y-4 shadow-md">
                <div className="flex items-center gap-2 border-b border-neutral-300 dark:border-neutral-800 pb-3">
                  <div className="w-3 h-3 rounded-full bg-neutral-400 dark:bg-neutral-700" />
                  <div className="w-3 h-3 rounded-full bg-neutral-400 dark:bg-neutral-700" />
                  <div className="w-3 h-3 rounded-full bg-neutral-400 dark:bg-neutral-700" />
                  <span className="ml-2 font-sans font-bold text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    profile_config.sh
                  </span>
                </div>
                <div className="space-y-2 text-sm leading-relaxed font-semibold">
                  <p>
                    <span className="text-neutral-400 dark:text-neutral-600 mr-2">
                      1
                    </span>
                    <span className="text-neutral-900 dark:text-white">
                      const
                    </span>{" "}
                    developer = &#123;
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
                      &quot;Formal Curriculum&quot;
                    </span>
                    ,
                  </p>
                  <p>
                    <span className="text-neutral-400 dark:text-neutral-600 mr-2">
                      4
                    </span>
                    &nbsp;&nbsp;focus:{" "}
                    <span className="text-neutral-900 dark:text-neutral-100">
                      &quot;Backend/Hardware&quot;
                    </span>
                  </p>
                  <p>
                    <span className="text-neutral-400 dark:text-neutral-600 mr-2">
                      5
                    </span>
                    &#125;;
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full text-center py-3 mt-2 block border-2 border-neutral-900 dark:border-white bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 text-white dark:text-black font-sans font-bold text-sm tracking-wide transition-all rounded shadow active:scale-[0.98] cursor-pointer"
                >
                  View Professional Matrix
                </button>
              </div>
            </div>
          </div>

          {/* Skills & Stats */}
          <div className="space-y-16">
         <div className="pb-12 border-b-2 border-neutral-200 dark:border-neutral-800">
  <div className="mb-8">
    <h4 className="text-sm font-bold text-neutral-950 dark:text-white uppercase tracking-widest border-l-4 border-neutral-900 dark:border-white pl-4">
      Technical Specialization
    </h4>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
    {technicalSkills.map((skill) => (
      <div 
        key={skill} 
        className="flex items-center gap-3 p-3 rounded-lg border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 transition-all duration-300"
      >
        <div className="text-2xl text-neutral-900 dark:text-white">
          {skillIcons[skill]}
        </div>
        <span className="text-neutral-700 dark:text-neutral-300 font-semibold text-sm uppercase tracking-wide">
          {skill}
        </span>
      </div>
    ))}
  </div>
</div>

            <div className="grid grid-cols-3 gap-6 text-left">
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

      {/* Modal Details */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setIsModalOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />
          <div className="relative w-full max-w-xl rounded border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black p-8 md:p-10 shadow-2xl space-y-6 z-10 text-neutral-900 dark:text-white animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded text-neutral-500 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            >
              <CloseIcon className="text-2xl" />
            </button>
            <h3 className="text-2xl font-black tracking-tight border-b-2 border-neutral-100 dark:border-neutral-900 pb-3">
              Professional Matrix
            </h3>
            <p className="text-base md:text-lg text-neutral-800 dark:text-neutral-200">
              I am currently sharpening my skills through a{" "}
              <span className="font-extrabold text-neutral-950 dark:text-white">
                formal professional curriculum
              </span>{" "}
              to build robust and efficient systems. My focus is on writing code
              that is not just functional, but architectural—optimizing for high
              performance, reliability, and long-term scalability in every
              project I develop.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutPage;
