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
      <section id="about" className="w-full bg-black text-[#E2DDB4] px-4 md:px-16 py-16 flex flex-col items-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About Me
        </h2>

        {/* Two Column Grid */}
        <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">
          {/* LEFT: IDE/Terminal Console Style */}
          <div className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden shadow-lg">
            {/* Terminal Header */}
            <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <span className="ml-4 text-xs text-slate-400">newton_dev.jsx</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm leading-relaxed overflow-auto max-h-96">
              <pre className="text-slate-300 whitespace-pre-wrap text-xs md:text-sm">
                <code>
                  {backendJourney}
                </code>
              </pre>
            </div>
          </div>

          {/* RIGHT: Hobbies Checklist */}
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-emerald-400 mb-6">
              Personality & Interests
            </h3>
            <ul className="space-y-4">
              {hobbies.map((hobby) => (
                <li key={hobby.name} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-5 h-5 rounded border border-emerald-400 bg-emerald-400/10">
                    {hobby.checked && (
                      <FaCheck size={14} className="text-emerald-400" />
                    )}
                  </div>
                  <span className="text-[#E2DDB4]">{hobby.name}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-slate-700">
              <p className="text-slate-400 text-sm">
                💡 Always eager to solve complex backend puzzles and optimize system performance.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="w-full bg-black text-[#E2DDB4] px-4 md:px-16 py-16 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Skills & Expertise
        </h2>

        {/* Skills Grid - 3 Categories */}
        <div className="w-full max-w-5xl grid md:grid-cols-3 gap-6">
          {/* Core Backend Focus */}
          <div className="bg-slate-900 border border-emerald-500/30 rounded-lg p-6 hover:border-emerald-400 transition-colors">
            <h3 className="text-lg font-semibold text-emerald-400 mb-4">
              Core Backend Focus
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Express.js", "REST APIs", "MongoDB", "PostgreSQL", "System Design"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-emerald-500/20 border border-emerald-400/50 rounded-full text-sm text-emerald-300 hover:bg-emerald-500/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend Interface */}
          <div className="bg-slate-900 border border-slate-700/30 rounded-lg p-6 hover:border-emerald-400 transition-colors">
            <h3 className="text-lg font-semibold text-emerald-400 mb-4">
              Frontend Interface
            </h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "GSAP"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-slate-800/50 border border-slate-600/50 rounded-full text-sm text-slate-300 hover:bg-emerald-500/20 hover:border-emerald-400/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & DevOps */}
          <div className="bg-slate-900 border border-slate-700/30 rounded-lg p-6 hover:border-emerald-400 transition-colors">
            <h3 className="text-lg font-semibold text-emerald-400 mb-4">
              Tools & DevOps
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Git", "GitHub", "Vercel", "Docker", "APIs", "Testing"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-slate-800/50 border border-slate-600/50 rounded-full text-sm text-slate-300 hover:bg-emerald-500/20 hover:border-emerald-400/50 transition-colors"
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
