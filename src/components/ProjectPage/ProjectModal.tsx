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
        className="bg-slate-900 border border-slate-800 rounded-lg w-full max-w-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 z-50 text-emerald-400 hover:text-emerald-300 text-2xl cursor-pointer transition-colors"
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
          <div className="p-6 text-slate-300 flex-shrink-0 bg-slate-900">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
              <div className="flex gap-2">
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View source code of ${project.title} project`}
                  className="px-3 py-1 rounded text-xs font-semibold border border-slate-600 text-slate-300 hover:border-emerald-500 hover:text-emerald-400 transition-colors"
                >
                  Code
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${project.title} project`}
                  className="px-3 py-1 rounded bg-emerald-500 text-white text-xs font-semibold hover:bg-emerald-600 transition-colors"
                >
                  Live Project
                </a>
              </div>
            </div>
            <p className="mb-4 text-slate-400">{project.description}</p>
            {project.tech && (
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="bg-emerald-500/20 border border-emerald-500 px-3 py-1 rounded text-xs text-emerald-300">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
