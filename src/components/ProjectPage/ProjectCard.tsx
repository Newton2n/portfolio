"use client";
import Image from "next/image";
import { Project } from "./ProjectCardTypes";
import { useRef, useState } from "react";

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const playVideo = () => {
    if (project.category === "Backend") return;
    const videoElement = videoRef.current;
    if (!videoElement || !project.video) return;

    if (!videoLoaded) {
      videoElement.src = project.video;
      setVideoLoaded(true);
    }
    videoElement.play().catch(() => {});
  };

  const pauseVideo = () => {
    if (project.category === "Backend") return;
    videoRef.current?.pause();
  };

  return (
    <div
      className="group relative block rounded overflow-hidden border border-neutral-300 dark:border-neutral-700 transition-all duration-300 hover:border-neutral-900 dark:hover:border-white hover:shadow-md hover:scale-105 w-[300px] h-[220px] bg-white dark:bg-black cursor-pointer flex flex-col justify-between"
      onMouseEnter={playVideo}
      onMouseLeave={pauseVideo}
      onClick={() => onViewDetails(project)}
    >
      {project.category === "Backend" ? (
        /* SPECIAL BACKEND RADAR TERMINAL SHELL */
        <div className="p-4 font-mono text-[11px] text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-950 flex-1 flex flex-col justify-between border-b border-neutral-200 dark:border-neutral-800 relative">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-1.5 mb-2">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                  SYSTEM_ACTIVE
                </span>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-neutral-900 text-white dark:bg-white dark:text-black font-sans text-[9px] font-bold uppercase">
                {project.category}
              </span>
            </div>
            <p className="text-neutral-900 dark:text-white font-sans font-bold text-sm truncate">
              {project.title}
            </p>
            <div className="pt-1 text-neutral-500 dark:text-neutral-400 space-y-0.5 line-clamp-3 font-medium">
              <div>• Latency: <span className="text-emerald-500 font-bold">{project.backendMetrics?.latency || "140ms"}</span></div>
              <div>• Load cap: <span className="text-neutral-900 dark:text-white">{project.backendMetrics?.throughput || "10k/min"}</span></div>
              <div>• Layer: <span className="text-neutral-900 dark:text-white">{project.backendMetrics?.architecture || "REST API"}</span></div>
            </div>
          </div>
          
          {/* BOTTOM TERMINAL FOOTER STRIP WITH EXPLICIT DETAILS BUTTON */}
          <div className="text-[10px] text-neutral-400 dark:text-neutral-500 border-t border-neutral-200 dark:border-neutral-900 pt-2 flex justify-between items-center bg-transparent z-10">
            <span className="truncate max-w-[140px]">{project.tech?.slice(0, 3).join(" | ")}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(project);
              }}
              className="px-2 py-0.5 rounded font-sans text-[10px] font-bold bg-neutral-900 text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-sm cursor-pointer"
            >
              More Details →
            </button>
          </div>
        </div>
      ) : (
        /* VISUAL PREVIEW LAYER (FRONT-END & FULL-STACK) */
        <div className="relative w-full h-[150px] bg-neutral-900 flex-shrink-0 overflow-hidden">
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover opacity-100 transition-opacity duration-300 group-hover:opacity-0"
            />
          )}
          {project.video && (
            <video
              ref={videoRef}
              muted
              playsInline
              loop
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label={`Preview video of ${project.title} project`}
              tabIndex={-1}
            />
          )}
          <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-neutral-900/80 text-white text-[9px] font-mono tracking-tight z-10">
            {project.category}
          </span>
        </div>
      )}

      {/* Info Strip Footer for UI Projects */}
      {project.category !== "Backend" && (
        <div className="p-3 bg-white dark:bg-black border-t border-neutral-100 dark:border-neutral-900 flex items-center justify-between">
          <h3 className="text-xs font-bold text-neutral-900 dark:text-white truncate max-w-[160px]">
            {project.title}
          </h3>
          <div className="flex gap-1.5">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(project);
              }}
              className="px-2 py-1 rounded text-[10px] font-bold bg-neutral-900 dark:bg-white text-white dark:text-black hover:bg-neutral-800 transition-colors "
            >
              Details
            </button>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="px-2 py-1 rounded text-[10px] font-bold border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 transition-colors"
              >
                Live
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}