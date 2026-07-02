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
      className="group relative block rounded-lg overflow-hidden border border-slate-800 bg-slate-900/50 transition-all duration-300 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-105 w-[300px] animate-in fade-in slide-in-from-bottom-2 duration-300"
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
        <h3 className="text-[15px] md:text-[16px] font-semibold mb-2 text-emerald-400 group-hover:opacity-0 transition-opacity duration-300">
          {project.title}
        </h3>

        <div className="flex gap-2">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live demo of ${project.title} project`}
            className="px-3 py-1 rounded text-sm font-semibold bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
          >
            Live Project
          </a>

          <button
            onClick={() => onViewDetails(project)}
            className="px-3 py-1 rounded text-sm font-semibold border border-emerald-500 text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500 hover:text-white transition-colors cursor-pointer"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
