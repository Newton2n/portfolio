import ContributionGraph from "../ContributionGraph";

const SkillsPage = () => {
  const skillCategories = [
    {
      title: "Backend Engineering",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "JWT Authentication",
        "API Security",
        "Middleware Architecture",
      ],
    },
    {
      title: "Database & ORM",
      skills: [
        "PostgreSQL",
        "Prisma ORM",
        "Database Modeling",
        "SQL Query Optimization",
        "Data Migrations",
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Responsive Design",
        "Framer Motion",
      ],
    },
    {
      title: "Tools & Infrastructure",
      skills: [
        "Git / GitHub",
        "Stripe API",
        "CI/CD Pipelines",
        "Postman",
        "Vercel Deployment",
      ],
    },
  ];

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="w-full px-6 md:px-12 py-24 bg-white dark:bg-black transition-colors duration-200"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <header className="mb-20">
          <h2
            id="skills-heading"
            className="text-4xl md:text-6xl font-black text-neutral-900 dark:text-white mb-6 tracking-tight"
          >
            Technical Skills
          </h2>

          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
            Technologies and tools I use to build backend-focused full-stack
            applications, APIs, and database-driven web systems.
          </p>
        </header>

        {/* Skills Grid */}
        <div
          className="grid md:grid-cols-2 gap-8 mb-20"
          aria-label="Technical skill categories"
        >
          {skillCategories.map((category) => (
            <article
              key={category.title}
              className="p-8 border-2 border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-neutral-900 dark:hover:border-white transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-neutral-950 dark:text-white mb-6 border-b border-neutral-200 dark:border-neutral-800 pb-4">
                {category.title}
              </h3>

              <ul className="flex flex-wrap gap-3 list-none p-0 m-0">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 text-sm font-semibold rounded hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* GitHub Contribution Graph */}
        <div className="mb-20">
          <ContributionGraph />
        </div>

        {/* Contact CTA */}
        <aside
          aria-labelledby="skills-cta-heading"
          className="p-10 bg-neutral-900 dark:bg-neutral-900 text-white rounded-lg flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="max-w-lg">
            <h3
              id="skills-cta-heading"
              className="text-2xl font-bold mb-2"
            >
              Looking for a specific stack?
            </h3>

            <p className="text-neutral-400 leading-relaxed">
              I am continuously expanding my toolkit. If your project requires
              a specific technology or integration, feel free to discuss the
              requirements with me.
            </p>
          </div>

          <a
            href="#contact"
            className="px-8 py-4 bg-white text-black font-bold rounded hover:bg-neutral-200 transition-colors whitespace-nowrap"
          >
            Start a Conversation
          </a>
        </aside>
      </div>
    </section>
  );
};

export default SkillsPage;