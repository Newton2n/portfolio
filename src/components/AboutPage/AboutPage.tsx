import { FaCheck } from "react-icons/fa";

const AboutPage = () => {
  const backendJourney = `// Backend Development Journey
// ========================================

// Started with foundational web concepts
const foundation = {
  languages: ["JavaScript", "TypeScript"],
  yearStarted: 2022,
  focus: "Building scalable backend systems"
}

// Transitioned to Backend Optimization
const backend = {
  runtime: "Node.js",
  frameworks: ["Express.js"],
  databases: ["MongoDB", "PostgreSQL"],
  apis: "RESTful Architecture"
}

// Solving Complex Backend Puzzles
const currentFocus = {
  challenges: [
    "Database optimization",
    "API performance tuning",
    "System scalability",
    "Authentication flows"
  ],
  enjoyment: "Architecting efficient solutions"
}`;

  const hobbies = [
    { name: "Problem Solving", checked: true },
    { name: "Reading Tech Blogs", checked: true },
    { name: "Open Source Contributing", checked: true },
    { name: "Sports & Fitness", checked: true },
    { name: "Creative Coding", checked: true },
    { name: "Building Side Projects", checked: true },
  ];

  return (
    <>
      <section id="about" className="w-full bg-slate-50 dark:bg-black text-slate-900 dark:text-[#E2DDB4] px-4 md:px-16 py-16 flex flex-col items-center transition-colors duration-200">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About Me
        </h2>

        {/* Two Column Grid */}
        <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">
          {/* LEFT: IDE/Terminal Console Style */}
          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg overflow-hidden shadow-lg transition-colors duration-200">
            {/* Terminal Header */}
            <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-300 dark:border-slate-700 transition-colors duration-200">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <span className="ml-4 text-xs text-slate-600 dark:text-slate-400 transition-colors duration-200">newton_dev.jsx</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm leading-relaxed overflow-auto max-h-96">
              <pre className="text-slate-700 dark:text-slate-300 whitespace-pre-wrap text-xs md:text-sm transition-colors duration-200">
                <code>
                  {backendJourney}
                </code>
              </pre>
            </div>
          </div>

          {/* RIGHT: Hobbies Checklist */}
          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-6 shadow-lg transition-colors duration-200">
            <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-6 transition-colors duration-200">
              Personality & Interests
            </h3>
            <ul className="space-y-4">
              {hobbies.map((hobby) => (
                <li key={hobby.name} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-5 h-5 rounded border border-emerald-600 dark:border-emerald-400 bg-emerald-600/10 dark:bg-emerald-400/10 transition-colors duration-200">
                    {hobby.checked && (
                      <FaCheck size={14} className="text-emerald-600 dark:text-emerald-400 transition-colors duration-200" />
                    )}
                  </div>
                  <span className="text-slate-700 dark:text-[#E2DDB4] transition-colors duration-200">{hobby.name}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-slate-300 dark:border-slate-700 transition-colors duration-200">
              <p className="text-slate-600 dark:text-slate-400 text-sm transition-colors duration-200">
                💡 Always eager to solve complex backend puzzles and optimize system performance.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="w-full bg-slate-50 dark:bg-black text-slate-900 dark:text-[#E2DDB4] px-4 md:px-16 py-16 flex flex-col items-center transition-colors duration-200">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Skills & Expertise
        </h2>

        {/* Skills Grid - 3 Categories */}
        <div className="w-full max-w-5xl grid md:grid-cols-3 gap-6">
          {/* Core Backend Focus */}
          <div className="bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-500/30 rounded-lg p-6 hover:border-emerald-400 dark:hover:border-emerald-400 transition-colors duration-200">
            <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-4 transition-colors duration-200">
              Core Backend Focus
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Express.js", "REST APIs", "MongoDB", "PostgreSQL", "System Design"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-300 dark:border-emerald-400/50 rounded-full text-sm text-emerald-700 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-500/40 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend Interface */}
          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700/30 rounded-lg p-6 hover:border-emerald-400 dark:hover:border-emerald-400 transition-colors duration-200">
            <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-4 transition-colors duration-200">
              Frontend Interface
            </h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "GSAP"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-600/50 rounded-full text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-emerald-500/20 dark:hover:border-emerald-400/50 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & DevOps */}
          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700/30 rounded-lg p-6 hover:border-emerald-400 dark:hover:border-emerald-400 transition-colors duration-200">
            <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-4 transition-colors duration-200">
              Tools & DevOps
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Git", "GitHub", "Vercel", "Docker", "APIs", "Testing"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-600/50 rounded-full text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-emerald-500/20 dark:hover:border-emerald-400/50 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
