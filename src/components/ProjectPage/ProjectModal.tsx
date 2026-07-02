import { Project } from "./ProjectCardTypes";
import { RxCross2 } from "react-icons/rx";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div
      className="fixed inset-0 bg-slate-900/40 dark:bg-[#E2DDB4]/7 backdrop-blur-md flex items-center justify-center z-50 p-4 transition-colors duration-200"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-black rounded-xl w-full max-w-xl md:max-w-2xl overflow-hidden relative max-h-[90vh] flex flex-col border-[1.5px] border-slate-300 dark:border-[#E2DDB4] transition-colors duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 z-50 text-emerald-600 dark:text-[#FFD700] font-bold text-2xl md:text-3xl cursor-pointer hover:text-emerald-700 dark:hover:text-[#FFC700] transition-colors duration-200"
          aria-label="Close project modal video"
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
          <div className="p-6 text-slate-900 dark:text-[#E2DDB4] flex-shrink-0 bg-white dark:bg-black transition-colors duration-200">
            <div className="flex items-center justify-between mb-3 flex-wrap">
              <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
              <div className="flex gap-2 mt-2 md:mt-0">
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View source code of ${project.title} project`}
                  className="px-3 py-1 rounded text-slate-900 dark:text-white text-xs font-semibold border border-slate-400 dark:border-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors duration-200"
                >
                  Code
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${project.title} project`}
                  className="px-3 py-1 rounded bg-emerald-600 dark:bg-[#FFD700] text-white dark:text-black text-xs font-semibold hover:bg-emerald-700 dark:hover:bg-[#FFC700] transition-colors duration-200"
                >
                  Live Project
                </a>
              </div>
            </div>
            <p className="mb-3 text-slate-700 dark:text-[#E2DDB4] transition-colors duration-200">{project.description}</p>
            {project.tech && (
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-emerald-100 dark:bg-[#FFD700]/10 px-3 py-1 rounded text-xs text-emerald-700 dark:text-[#FFD700] transition-colors duration-200"
                  >
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
