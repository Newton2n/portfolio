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
  const handleMouseEnter = () => {
    const videoELement = videoRef.current;
    if (!videoELement) return;

    if (!videoLoaded) {
      videoELement.src = project.video;
      setVideoLoaded(true);
    }
    videoELement.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
  };

  return (
    <div
      className="group relative block rounded-xl overflow-hidden border border-[#E2DDB4]/30 shadow-lg shadow-black/50 transition-all duration-300 hover:shadow-[#FFD700]/30 hover:scale-105 w-[300px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Thumbnail */}
      <Image
        src={project.image}
        alt={project.title}
        width={300}
        height={200}
        className="object-cover  transition-opacity duration-300 group-hover:opacity-0 "
      />

      {/* Video */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        aria-label={`Preview video of ${project.title} project`}
        tabIndex={-1}
      />

      {/* Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3">
        <h3 className="text-[15px] md:text-[16px] font-semibold mb-1 text-[#FFD700] transition-opacity duration-300 group-hover:opacity-0">
          {project.title}
        </h3>

        <div className="flex gap-2">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live demo of ${project.title} project`}
            className="px-2 py-1 rounded text-[#F6EFD2] text-xs md:text-sm font-semibold border border-[#FFD700] hover:bg-[#FFD700]/90 hover:text-black transition-colors"
          >
            Live Project
          </a>

          <button
            onClick={() => onViewDetails(project)}
            className="px-3 py-1 rounded bg-black/10 border border-[#FFD700] text-[#FFD700] text-xs md:text-sm font-semibold hover:bg-[#FFD700] hover:text-black transition-colors cursor-pointer"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
