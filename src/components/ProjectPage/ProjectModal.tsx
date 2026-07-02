"use client";
import { Project } from "./ProjectCardTypes";
import { IoMdClose } from "react-icons/io";

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* Modal Container */}
      <div className="relative bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 p-8 rounded-xl max-w-2xl w-full shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200 overflow-y-auto max-h-[90vh]">
        {/* Fixed Close Button */}
        <button
          onClick={onClose}
          className="sticky top-0 ml-auto flex items-center justify-center p-2 mb-4 bg-neutral-100 dark:bg-neutral-900 rounded-full text-neutral-500 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
        >
          <IoMdClose className="text-2xl" />
        </button>
        {/* Content */}
        <h2 className="text-3xl font-black mb-1 text-neutral-900 dark:text-white">
          {project.title}
        </h2>
        <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
          {project.category}
        </span>
        {/* Core Details Section */}
        <div className="mt-6 border-y border-neutral-100 dark:border-neutral-900 py-4 space-y-3">
          <h4 className="font-bold text-xs uppercase tracking-wider text-neutral-900 dark:text-white">
            Core Details
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 bg-neutral-100 dark:bg-neutral-900 text-[10px] font-mono rounded"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        {/* Backend Metrics Section */}
        {project.backendMetrics && (
          <div className="mt-6 p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-100 dark:border-neutral-800">
            <h4 className="font-bold text-xs mb-3 uppercase tracking-wider text-neutral-900 dark:text-white">
              Backend Architecture
            </h4>
            <div className="grid grid-cols-2 gap-4 text-xs text-neutral-500 dark:text-neutral-400">
              {project.backendMetrics.architecture && (
                <div>
                  <span className="block font-semibold text-neutral-900 dark:text-white">
                    Arch:
                  </span>{" "}
                  {project.backendMetrics.architecture}
                </div>
              )}
              {project.backendMetrics.throughput && (
                <div>
                  <span className="block font-semibold text-neutral-900 dark:text-white">
                    Throughput:
                  </span>{" "}
                  {project.backendMetrics.throughput}
                </div>
              )}
              {project.backendMetrics.latency && (
                <div>
                  <span className="block font-semibold text-neutral-900 dark:text-white">
                    Latency:
                  </span>{" "}
                  {project.backendMetrics.latency}
                </div>
              )}
              {project.backendMetrics.database && (
                <div>
                  <span className="block font-semibold text-neutral-900 dark:text-white">
                    DB:
                  </span>{" "}
                  {project.backendMetrics.database}
                </div>
              )}
              {project.backendMetrics.auth && (
                <div>
                  <span className="block font-semibold text-neutral-900 dark:text-white">
                    Auth:
                  </span>{" "}
                  {project.backendMetrics.auth}
                </div>
              )}
              {project.backendMetrics.tokenLifetimes && (
                <div>
                  <span className="block font-semibold text-neutral-900 dark:text-white">
                    Token Lifetimes:
                  </span>{" "}
                  {project.backendMetrics.tokenLifetimes}
                </div>
              )}
            </div>
          </div>
        )}

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg border border-neutral-100 dark:border-neutral-800">
            <h4 className="font-bold text-xs mb-3 uppercase tracking-wider text-neutral-900 dark:text-white">
              Challenges
            </h4>
            <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1 list-disc pl-4">
              {project.challenges.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg border border-neutral-100 dark:border-neutral-800">
            <h4 className="font-bold text-xs mb-3 uppercase tracking-wider text-neutral-900 dark:text-white">
              Future Plans
            </h4>
            <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1 list-disc pl-4">
              {project.futureImprovements.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        </div>

        {project.backendMetrics?.endpoints && (
          <div className="mt-6 p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-100 dark:border-neutral-800">
            <h4 className="font-bold text-xs mb-3 uppercase tracking-wider text-neutral-900 dark:text-white">
              API Reference
            </h4>
            <div className="grid grid-cols-1 gap-2 text-xs font-mono text-neutral-600 dark:text-neutral-400">
              {project.backendMetrics.endpoints.map((endpoint, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[9px] bg-neutral-200 dark:bg-neutral-800 px-1 rounded uppercase">
                    API
                  </span>
                  {endpoint}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ... (Keep existing Action Links) */}
        {/* Action Links */}
        <div className="mt-8 flex gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-black font-bold text-xs rounded transition-all hover:opacity-80"
          >
            Live Demo
          </a>
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-neutral-200 dark:border-neutral-800 text-xs font-bold rounded transition-all hover:border-neutral-900 dark:hover:border-white"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
