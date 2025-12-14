import { Project } from "./ProjectCardTypes";
import { RxCross2 } from "react-icons/rx";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-black rounded-xl w-full max-w-xl md:max-w-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 z-50 text-[#FFD700] font-bold text-2xl md:text-3xl cursor-pointer"
          aria-label="Close project modal video"
          onClick={onClose}
        >
          <RxCross2 />
        </button>

        {/* Scrollable content */}
        <div className="overflow-auto flex-1 flex flex-col">
          {/* Video */}
          <div className="w-full flex-shrink-0">
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
          <div className="p-6 text-[#E2DDB4] flex-shrink-0">
            <div className="flex items-center justify-between mb-3 flex-wrap">
              <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
              <div className="flex gap-2 mt-2 md:mt-0">
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View source code of ${project.title} project`}
                  className="px-3 py-1 rounded text-white text-xs font-semibold border border-white hover:bg-white/10 transition-colors"
                >
                  Code
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${project.title} project`}
                  className="px-3 py-1 rounded bg-[#FFD700] text-black text-xs font-semibold hover:bg-[#FFD700]/90 transition-colors"
                >
                  Live Project
                </a>
              </div>
            </div>
            <p className="mb-3">{project.description}</p>
            {project.tech && (
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-[#FFD700]/10 px-3 py-1 rounded text-xs text-[#FFD700]"
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
