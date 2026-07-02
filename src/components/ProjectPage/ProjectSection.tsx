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
    <section id="projects" className="w-full bg-slate-950 px-6 md:px-16 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">Featured Projects</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {(["All", "Front-end", "Full-stack"] as const).map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              activeTab === tab
                ? "bg-emerald-500 text-white hover:bg-emerald-600"
                : "bg-slate-900/50 text-slate-400 border border-slate-800 hover:border-emerald-500 hover:text-emerald-400"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <ProjectGrid projects={filteredProjects} onViewDetails={setModalProject} />

      {modalProject && <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />}
    </section>
  );
}
