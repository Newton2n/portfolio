import { TbPointFilled } from "react-icons/tb";
import Experience from "./Experience";

const AboutPage = () => {
  const points = [
    "Builds front-end applications using React, Next.js, and Tailwind CSS",
    "Working knowledge of JavaScript and TypeScript",
    "Learning backend development in depth with Node.js, Express, and MongoDB (Mongoose)",
    "Strong in JavaScript with practical understanding of async flows, APIs, and data handling",
    "Can build useable REST APIs and handle basic CRUD operations",
    "Familiar with Redux for state management",
    "Uses Git and GitHub for version control with clear commits and  branching",
    "Focuses on writing clean and readable code",
    "Comfortable connecting frontend with backend services",
  ];

  // Function to highlight keywords
  const highlightKeywords = (text: string) => {
    const keywords = [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind",
      "Redux",
      "Appwrite",
      "Express",
      "MongoDB",
      "Mongoose",
      "clear",
      "commits",
      "clean",
      "readable"
    ];

    let highlighted = text;

    keywords.forEach((word) => {
      const regex = new RegExp(`(${word})`, "g");
      highlighted = highlighted.replace(
        regex,
        `<span class="text-[#FFD700] font-semibold">$1</span>`,
      );
    });

    return highlighted;
  };

  return (
    <>
      <section className="w-full bg-black text-[#E2DDB4] px-4 md:px-16 py-16 flex flex-col items-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About Me
        </h2>

        {/* Card */}
        <div className="w-full max-w-3xl bg-black border border-[#E2DDB4]/50 rounded-xl p-6 md:p-10 shadow-lg shadow-black/40">
          <ul className="flex flex-col gap-5">
            {points.map((text) => (
              <li key={text} className="flex items-start gap-3">
                <span className="text-[#E2DDB4] mt-1">
                  <TbPointFilled size={20} />
                </span>
                <p
                  className="text-[#E2DDB4]/95 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: highlightKeywords(text) }}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Experience />
    </>
  );
};

export default AboutPage;
