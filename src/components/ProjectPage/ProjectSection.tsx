"use client";

import { useEffect, useState } from "react";

import ProjectGrid from "./ProjectGrid";
import ProjectModal from "./ProjectModal";
import projects from "./projectData";
import { Project } from "./ProjectCardTypes";

type ProjectCategory = "Backend" | "Front-end" | "Full-stack" | "All";

const projectTabs: ProjectCategory[] = [
  "Backend",
  "Front-end",
  "Full-stack",
  "All",
];

export default function ProjectSection() {
  // Full-stack is the default recruiter-focused view.
  const [activeTab, setActiveTab] =
    useState<ProjectCategory>("Full-stack");

  const [modalProject, setModalProject] =
    useState<Project | null>(null);

  const [isMobile, setIsMobile] = useState(false);

  const [visibleCount, setVisibleCount] = useState(3);

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateView = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateView();

    mediaQuery.addEventListener("change", updateView);

    return () => {
      mediaQuery.removeEventListener("change", updateView);
    };
  }, []);

  const handleTabChange = (tab: ProjectCategory) => {
    setActiveTab(tab);
    setVisibleCount(3);
  };

  const visibleProjects = isMobile
    ? filteredProjects.slice(0, visibleCount)
    : filteredProjects;

  const hasMoreProjects =
    isMobile && visibleCount < filteredProjects.length;

  const handleShowMore = () => {
    setVisibleCount((count) =>
      Math.min(count + 3, filteredProjects.length),
    );
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="w-full px-6 md:px-10 py-16 md:py-24 bg-white dark:bg-black transition-colors duration-200"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <header className="mb-12">
          <h2
            id="projects-heading"
            className="text-4xl md:text-6xl font-black text-neutral-900 dark:text-white mb-6 tracking-tight"
          >
            Projects
          </h2>

          <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base font-medium leading-relaxed max-w-3xl">
            A selection of backend and full-stack applications I have built,
            covering APIs, authentication, databases, SaaS workflows, payments,
            and modern web application architecture.
          </p>
        </header>

        {/* Project Category Filters */}
        <nav
          aria-label="Project categories"
          className="flex justify-start gap-3 mb-12 flex-wrap"
        >
          {projectTabs.map((tab) => {
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                type="button"
                onClick={() => handleTabChange(tab)}
                aria-pressed={isActive}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded border transition-all cursor-pointer ${
                  isActive
                    ? "bg-neutral-900 dark:bg-white text-white dark:text-black border-neutral-900 dark:border-white shadow-sm scale-105"
                    : "border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-neutral-900 dark:hover:border-white hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </nav>

        {/* Projects */}
        <div aria-live="polite">
          <ProjectGrid
            projects={visibleProjects}
            onViewDetails={setModalProject}
          />
        </div>

        {/* Mobile: Show More */}
        {hasMoreProjects && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={handleShowMore}
              className="px-4 py-2 rounded border border-neutral-300 dark:border-neutral-700 text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:border-neutral-900 dark:hover:border-white hover:text-neutral-900 dark:hover:text-white transition-all cursor-pointer"
            >
              Show More Projects
            </button>
          </div>
        )}

        {/* Project Modal */}
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