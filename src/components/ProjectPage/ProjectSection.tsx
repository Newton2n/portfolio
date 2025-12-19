"use client";
import { useState } from "react";
import ProjectGrid from "./ProjectGrid";
import ProjectModal from "./ProjectModal";
import { Project } from "./ProjectCardTypes";

const projects: Project[] = [
  {
    title: "Full Stack Social Media ",
    category: "Full-stack",
    image: "/image/postora.webp",
    video: "/video/postora.webm",
    description:
      "A full-stack, Pinterest-inspired social media application built with Next.js and Appwrite. The app supports user authentication, post creation, and image-based content discovery through a responsive, grid-style interface backed by real-time backend services.",
    tech: ["Javascript","React","Appwrite","Redux", "Tailwind","TinyMc",],
    link: "https://blog-app-kappa-ebon.vercel.app/",
    sourceCode:"https://github.com/Newton2n/Blog-App-By-React-And-Appwrite"
  },
  {
    title: "Portfolio Website",
    category: "Front-end",
    image: "/image/portfolio.webp",
    video: "/video/portfolio.webm",
    description:
      "A modern personal portfolio website with clean UI, animations, and responsive design.",
    tech: ["TypeScript","React","Next.js","Tailwind","React Bits","Shadcn"],
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
    <section className="w-full bg-black text-[#E2DDB4] px-6 md:px-16 py-16">
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
                ? "bg-[#FFD700] text-black"
                : "bg-[#1a1a1a] text-[#E2DDB4]/80 hover:bg-[#FFD700]/30 hover:text-[#FFD700]"
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
