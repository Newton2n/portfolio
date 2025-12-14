
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Project } from "./ProjectCardTypes"
interface ProjectGridProps {
  projects: Project[];
  onViewDetails: (project: Project) => void;
}

export default function ProjectGrid({ projects, onViewDetails }: ProjectGridProps) {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-20 place-items-center">
      {projects.map((project, i) => (
        <motion.div
        className=" mx-auto flex justify-center"
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <ProjectCard project={project} onViewDetails={onViewDetails} />
        </motion.div>
      ))}
    </div>
  );
}
