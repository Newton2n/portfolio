"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Project } from "./ProjectCardTypes";

interface ProjectGridProps {
  projects: Project[];
  onViewDetails: (project: Project) => void;
}

export default function ProjectGrid({ projects, onViewDetails }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center w-full">
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          <ProjectCard project={project} onViewDetails={onViewDetails} />
        </motion.div>
      ))}
    </div>
  );
}