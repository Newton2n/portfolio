// "use client";
import ContributionGraph from "../ContributionGraph";

const SkillsPage = () => {
  const skillCategories = [
    {
      title: "Backend Engineering",
      skills: ["Express.js", "Node.js", "RESTful APIs", "JWT Authentication", "API Security", "Middleware Architecture"]
    },
    {
      title: "Database & ORM",
      skills: ["PostgreSQL", "Prisma ORM", "Database Modeling", "SQL Query Optimization", "Data Migrations"]
    },
    {
      title: "Frontend Development",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive Design", "Framer Motion"]
    },
    {
      title: "Tools & Infrastructure",
      skills: ["Git / GitHub", "Stripe API", "CI/CD Pipelines","Postman", "Vercel Deployment"]
    }
  ];

  return (
    <section id="skills" className="w-full px-6 md:px-12 py-24 bg-white dark:bg-black transition-colors duration-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 dark:text-white mb-6 tracking-tight">
            Technical Foundation
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
            A deep dive into the technologies I use to build scalable, secure, and production-ready applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category) => (
            <div key={category.title} className="p-8 border-2 border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-neutral-900 dark:hover:border-white transition-all duration-300">
              <h3 className="text-xl font-bold text-neutral-950 dark:text-white mb-6 border-b border-neutral-200 dark:border-neutral-800 pb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 text-sm font-semibold rounded hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/*  Contribution Graph Section */}
        <ContributionGraph/>

        {/* Robust Footer Section */}
        <div className="p-10 bg-neutral-900 dark:bg-neutral-900 text-white rounded-lg flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-lg">
            <h4 className="text-2xl font-bold mb-2">Looking for a specific stack?</h4>
            <p className="text-neutral-400">I am constantly evolving my toolkit. If your project requires specific integrations or technologies, let's discuss how I can adapt to your needs.</p>
          </div>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-white text-black font-bold rounded hover:bg-neutral-200 transition-colors whitespace-nowrap"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;