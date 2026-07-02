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
    <section id="projects" className="w-full bg-slate-50 dark:bg-black text-slate-900 dark:text-[#E2DDB4] px-6 md:px-16 py-16 transition-colors duration-200">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
       Featured Projects
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-12">
        {(["All", "Front-end", "Full-stack"] as const).map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full font-semibold transition-colors cursor-pointer ${
              activeTab === tab
                ? "bg-emerald-600 dark:bg-[#FFD700] text-white dark:text-black hover:bg-emerald-700 dark:hover:bg-[#FFC700]"
                : "bg-slate-200 dark:bg-[#1a1a1a] text-slate-700 dark:text-[#E2DDB4]/80 hover:bg-slate-300 dark:hover:bg-[#FFD700]/30 hover:text-emerald-600 dark:hover:text-[#FFD700]"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <ProjectGrid
        projects={filteredProjects}
        onViewDetails={setModalProject}
      />

      {modalProject && (
        <ProjectModal project={modalProject} onClose={()=>setModalProject(null)} />
      )}
      
    </section>
  );
}
