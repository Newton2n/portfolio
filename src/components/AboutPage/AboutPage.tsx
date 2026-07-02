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
      {/* About Section */}
      <section id="about" className="w-full px-6 md:px-10 py-16 md:py-24 bg-white dark:bg-black transition-colors duration-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* LEFT: Terminal IDE Box */}
            <div className="border border-slate-300 dark:border-slate-700 rounded overflow-hidden">
              <div className="bg-slate-100 dark:bg-slate-900 px-4 py-3 border-b border-slate-300 dark:border-slate-700 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="ml-2 text-xs font-medium text-slate-600 dark:text-slate-400">newton_journey.js</span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed overflow-auto max-h-96 bg-white dark:bg-black">
                <pre className="text-slate-700 dark:text-slate-300 text-xs whitespace-pre-wrap">
                  <code>{backendJourney}</code>
                </pre>
              </div>
            </div>

            {/* RIGHT: Hobbies */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Personality & Interests</h3>
              <ul className="space-y-3">
                {hobbies.map((hobby) => (
                  <li key={hobby.name} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 ${
                      hobby.checked
                        ? "bg-emerald-500 border-emerald-500"
                        : "border-slate-300 dark:border-slate-700"
                    }`}>
                      {hobby.checked && <FaCheck size={12} className="text-white" />}
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">{hobby.name}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 pt-6 border-t border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm">
                Always eager to solve complex backend puzzles and optimize system performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full px-6 md:px-10 py-16 md:py-24 bg-slate-50 dark:bg-slate-950/50 transition-colors duration-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12">Skills & Expertise</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Backend */}
            <div className="border border-slate-300 dark:border-slate-700 rounded p-6 bg-white dark:bg-black">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "REST APIs", "MongoDB", "PostgreSQL", "System Design"].map((skill) => (
                  <span key={skill} className="px-2 py-1 text-xs font-medium bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="border border-slate-300 dark:border-slate-700 rounded p-6 bg-white dark:bg-black">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "GSAP"].map((skill) => (
                  <span key={skill} className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="border border-slate-300 dark:border-slate-700 rounded p-6 bg-white dark:bg-black">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "Vercel", "Docker", "APIs", "Testing"].map((skill) => (
                  <span key={skill} className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
