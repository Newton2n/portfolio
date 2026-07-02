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
      className="group relative block rounded overflow-hidden border border-neutral-300 dark:border-neutral-700 transition-all duration-300 hover:border-neutral-900 dark:hover:border-white hover:shadow-md hover:scale-105 w-[300px] bg-white dark:bg-black"
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
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent px-4 py-4">
        <h3 className="text-sm font-semibold mb-3 text-white group-hover:opacity-0 transition-opacity duration-300">
          {project.title}
        </h3>

        <div className="flex gap-2">
          <button
            onClick={() => onViewDetails(project)}
            className="px-3 py-1 rounded text-xs font-semibold bg-neutral-900 hover:bg-neutral-800 text-white transition-colors cursor-pointer"
          >
            View Details
          </button>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live demo of ${project.title} project`}
            className="px-3 py-1 rounded text-xs font-semibold border border-white text-white hover:bg-white/10 transition-colors"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
}
