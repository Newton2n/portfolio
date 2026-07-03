"use client";
import { useEffect, useState } from "react";
import ProjectGrid from "./ProjectGrid";
import ProjectModal from "./ProjectModal";
import projects from "./projectData";
import { Project } from "./ProjectCardTypes";

export default function ProjectSection() {
  // Sets Backend as the highlighted, default loaded recruiter view tab
  const [activeTab, setActiveTab] = useState<
    "Backend" | "Front-end" | "Full-stack" | "All"
  >("Backend");
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateView = () => setIsMobile(mediaQuery.matches);

    updateView();
    mediaQuery.addEventListener("change", updateView);

    return () => mediaQuery.removeEventListener("change", updateView);
  }, []);

  const handleTabChange = (tab: "Backend" | "Front-end" | "Full-stack" | "All") => {
    setActiveTab(tab);
    setVisibleCount(3);
  };

  const visibleProjects = isMobile
    ? filteredProjects.slice(0, visibleCount)
    : filteredProjects;
  const hasMoreProjects = isMobile && visibleCount < filteredProjects.length;

  return (
    <section
      id="projects"
      className="w-full px-6 md:px-10 py-16 md:py-24 bg-white dark:bg-black transition-colors duration-200"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-neutral-900 dark:text-white mb-6 tracking-tight">
          System Implementations
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm font-medium mb-12">
          System frameworks engineered for absolute stability, performance, and
          deterministic operational execution control.
        </p>

        {/* Tab Selection Row */}
        <div className="flex justify-start gap-3 mb-12 flex-wrap">
          {(["Backend", "Front-end", "Full-stack", "All"] as const).map(
            (tab) => (
              <button
                key={tab}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded border transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-neutral-900 dark:bg-white text-white dark:text-black border-neutral-900 dark:border-white shadow-sm scale-105"
                    : "border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-neutral-900 dark:hover:border-white hover:text-neutral-900 dark:hover:text-white"
                }`}
                onClick={() => handleTabChange(tab)}
              >
                {tab}
              </button>
            ),
          )}
        </div>

        <ProjectGrid
          projects={visibleProjects}
          onViewDetails={setModalProject}
        />

        {hasMoreProjects && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() =>
                setVisibleCount((count) =>
                  Math.min(count + 3, filteredProjects.length),
                )
              }
              className="px-4 py-2 rounded border border-neutral-300 dark:border-neutral-700 text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:border-neutral-900 dark:hover:border-white hover:text-neutral-900 dark:hover:text-white transition-all cursor-pointer"
            >
              Show More Projects
            </button>
          </div>
        )}

        {modalProject && (
          <ProjectModal
            project={modalProject}
            onClose={() => setModalProject(null)}
          />
        )}
      </div>
    </section>
  );
}
