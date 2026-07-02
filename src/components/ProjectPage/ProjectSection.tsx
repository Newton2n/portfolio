"use client";
import { useState } from "react";
import ProjectGrid from "./ProjectGrid";
import ProjectModal from "./ProjectModal";
import { Project } from "./ProjectCardTypes";

const projects: Project[] = [
  {
    title: "Full Stack Social Media ",
    category: "Full-stack",
    image: "/image/full-stack-project.png",
    video: "/video/postora.webm",
    description:
      "Postora is a full-stack image sharing platform migrated to Next.js. It features full CRUD functionality for managing posts and a complete profile system for user info and profile image updates, all powered by Appwrite",
    tech: ["Next.js", "Appwrite", "React", "Redux", "Tailwind", "TinyMCE"],
    link: "https://postora-web.vercel.app/",
    sourceCode:"https://github.com/Newton2n/Blog-App-By-React-And-Appwrite"
  },
  {
    title: "Portfolio Website",
    category: "Front-end",
    image: "/image/portfolio-project.png",
    video: "/video/portfolio.webm",
    description:
      "A modern personal portfolio website with clean UI, animations, and responsive design built to showcase backend engineering expertise.",
    tech: ["TypeScript","Next.js","Tailwind","React","GSAP"],
    link: "https://newtondev.vercel.app/",
    sourceCode:"https://github.com/Newton2n/My_Portfolio"
  },
  
];

export default function ProjectSection() {
  const [activeTab, setActiveTab] = useState<
    "All" | "Front-end" | "Full-stack"
  >("All");
  const [modalProject, setModalProject] = useState<Project | null | false>(
    null
  );


  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="w-full px-6 md:px-10 py-16 md:py-24 bg-white dark:bg-black transition-colors duration-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-12">Featured Projects</h2>

        {/* Tabs */}
        <div className="flex justify-start gap-3 mb-12 flex-wrap">
          {(["All", "Front-end", "Full-stack"] as const).map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm font-semibold rounded border transition-colors ${
                activeTab === tab
                  ? "bg-neutral-900 dark:bg-white text-white dark:text-black border-neutral-900 dark:border-white"
                  : "border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-900 dark:hover:border-white hover:text-neutral-900 dark:hover:text-white"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <ProjectGrid projects={filteredProjects} onViewDetails={setModalProject} />

        {modalProject && <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />}
      </div>
    </section>
  );
}
