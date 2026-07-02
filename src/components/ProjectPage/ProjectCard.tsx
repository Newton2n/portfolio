"use client";
import Image from "next/image";
import { Project } from "./ProjectCardTypes";
import { useRef, useState } from "react";

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export default function ProjectCard({
  project,
  onViewDetails,
}: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Desktop hover: play video
  const playVideo = () => {
    const videoELement = videoRef.current;
    if (!videoELement) return;

    if (!videoLoaded) {
      videoELement.src = project.video;
      setVideoLoaded(true);
    }
    videoELement.play().catch(() => {});
  };

  const pauseVideo = () => {
    videoRef.current?.pause();
  };

  return (
    <div
      className="group relative block rounded-xl overflow-hidden border border-slate-300 dark:border-[#E2DDB4]/30 shadow-lg shadow-slate-400/30 dark:shadow-black/50 transition-all duration-300 hover:shadow-emerald-400/30 dark:hover:shadow-[#FFD700]/30 hover:scale-105 w-[300px]"
      onMouseEnter={playVideo}
      onMouseLeave={pauseVideo}
      onClick={playVideo} 
    >
      {/* Thumbnail */}
      <Image
        src={project.image}
        alt={project.title}
        width={300}
        height={200}
        priority
        className="object-cover opacity-100 transition-opacity duration-300 group-hover:opacity-0"
      />

      {/* Video */}
      <video
        ref={videoRef}
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-500"
        aria-label={`Preview video of ${project.title} project`}
        tabIndex={-1}
      />

      {/* Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 dark:from-black/90 to-transparent px-4 py-3 transition-colors duration-200">
        <h3 className="text-[15px] md:text-[16px] font-semibold mb-1 text-emerald-600 dark:text-[#FFD700] transition-all duration-300 group-hover:opacity-0">
          {project.title}
        </h3>

        <div className="flex gap-2">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live demo of ${project.title} project`}
            className="px-2 py-1 rounded text-white text-xs md:text-sm font-semibold border border-emerald-600 dark:border-[#FFD700] hover:bg-emerald-600 dark:hover:bg-[#FFD700]/90 hover:text-white dark:hover:text-black transition-colors duration-200"
          >
            Live Project
          </a>

          <button
            onClick={() => onViewDetails(project)}
            className="px-3 py-1 rounded bg-black/10 border border-emerald-600 dark:border-[#FFD700] text-emerald-600 dark:text-[#FFD700] text-xs md:text-sm font-semibold hover:bg-emerald-600 dark:hover:bg-[#FFD700] hover:text-white dark:hover:text-black transition-colors duration-200 cursor-pointer"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
