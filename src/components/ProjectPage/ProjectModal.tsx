import { Project } from "./ProjectCardTypes";
import { RxCross2 } from "react-icons/rx";
interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div
      className="fixed  inset-0 bg-black/80 flex items-center justify-center  z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-black rounded-xl w-full max-w-3xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 z-50 text-[#FFD700] font-bold text-2xl md:text-3xl cursor-pointer"
          onClick={onClose}
        >
          <RxCross2 />
        </button>

        <video
          src={project.video}
          controls
          autoPlay
          className="w-full h-auto md:h-auto object-cover"
        />

        <div className="p-6 text-[#E2DDB4]">
          <div className="flex items-center justify-between">
            <h3 className="text-xl md:2xl font-bold mb-3 text-nowrap">{project.title}</h3>

            <div className="flex justify-center items-center">
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="px-1 md:px-3 py-1 rounded  text-white text-xs font-semibold border border-white transition-colors"
              >
                Code
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 px-1 md:px-3 py-1 rounded bg-[#FFD700] text-black text-xs font-semibold hover:bg-[#FFD700]/90 transition-colors"
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
  );
}
