import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebook } from "react-icons/fa";

const AboutPage = () => {
  const technicalSkills = ["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL"];
  
  const stats = [
    { number: "01+", label: "Years Experience" },
    { number: "28+", label: "Tech Stack Skills" },
    { number: "07+", label: "Total Projects" },
  ];

  return (
    <>
      {/* About Section */}
      <section id="about" className="w-full px-6 md:px-10 py-16 md:py-24 bg-white dark:bg-black transition-colors duration-200">
        <div className="max-w-5xl mx-auto">
          {/* Heading & Manifesto */}
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-4">
              Turning ideas into reality
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300">
              Developer by day, problem solver by nature. Let's build something amazing together.
            </p>
          </div>

          {/* Profile & Technical Specialization Row */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16">
            {/* Left Column: Profile Data */}
            <div>
              {/* Avatar */}
              <div className="mb-6">
                <Image
                  src="/image/avatar.png"
                  alt="Newton's Avatar"
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              </div>

              {/* Designation */}
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                Backend & Full-Stack Engineer
              </h3>

              {/* Download Resume Button */}
              <a
                href="/resume.pdf"
                download
                className="inline-block px-6 py-3 bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 text-white dark:text-black font-semibold rounded mb-8 transition-colors"
              >
                Download Resume
              </a>

              {/* Social Links */}
              <div className="flex gap-4 text-2xl">
                <a
                  href="https://github.com/Newton2n"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/newton2n"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://x.com/NewtonYt66184"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.facebook.com/newton.bepari"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>

            {/* Right Column: Journey Terminal */}
            <div>
              <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4 uppercase tracking-wide">
                Technical Specialization
              </h4>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                I specialize in building robust, scalable backend systems with a focus on microservices architecture. My expertise spans secure authentication mechanisms, high-performance server logic, and optimized database design. I craft APIs that are both efficient and maintainable, ensuring systems can grow seamlessly as your business scales.
              </p>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Beyond backend excellence, I bridge the gap between frontend and server-side logic, delivering complete full-stack solutions. My approach emphasizes clean code, system reliability, and solving complex technical challenges through thoughtful design and pragmatic implementation.
              </p>
            </div>
          </div>

          {/* Structured Skills & Stats */}
          <div>
            {/* Technical Skills with Dividers */}
            <div className="mb-12 pb-12 border-b border-neutral-200 dark:border-neutral-800">
              <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-6 uppercase tracking-wide">
                Core Technical Stack
              </h4>
              <div className="flex flex-wrap gap-0">
                {technicalSkills.map((skill, index) => (
                  <div key={skill} className="flex items-center">
                    <span className="text-neutral-700 dark:text-neutral-300">{skill}</span>
                    {index < technicalSkills.length - 1 && (
                      <div className="w-px h-4 bg-neutral-300 dark:bg-neutral-700 mx-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Stats Row */}
            <div className="flex flex-col sm:flex-row justify-between gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
                    {stat.number}
                  </span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
