import { Project } from "./ProjectCardTypes";
import { RxCross2 } from "react-icons/rx";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-black border border-slate-300 dark:border-slate-800 rounded w-full max-w-2xl overflow-hidden relative max-h-[90vh] flex flex-col transition-colors duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 z-50 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white text-2xl cursor-pointer transition-colors"
          aria-label="Close project modal"
          onClick={onClose}
        >
          <RxCross2 />
        </button>

        {/* Scrollable content */}
        <div className="overflow-auto flex-1 flex flex-col">
          {/* Video */}
          <div className="w-full flex-shrink-0 bg-black">
            <video
              src={project.video}
              controls
              autoPlay
              muted
              className="w-full h-auto object-contain"
              aria-label={`Preview video of ${project.title} project`}
            />
          </div>

          {/* Project Info */}
          <div className="p-8 bg-white dark:bg-black flex-shrink-0">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-6">{project.description}</p>

            {/* Tech Stack */}
            {project.tech && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 uppercase tracking-wide">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs font-medium bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            <div className="flex gap-3 pt-4 border-t border-slate-300 dark:border-slate-800">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title} project`}
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded transition-colors"
              >
                Live Demo
              </a>
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code of ${project.title} project`}
                className="px-4 py-2 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 text-sm font-semibold rounded transition-colors"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
