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
  const [hover,setHover] =useState<string>("opacity-100")
  const mouseEnter = () => {
    setHover("opacity-0")
    const videoELement = videoRef.current;
    if (!videoELement) return;
    
    if (!videoLoaded) {
      videoELement.src = project.video;
      console.log(videoELement.src);
      console.log("loaded")
      setVideoLoaded(true);
      
    }
    videoELement.play().catch(() => {});
  };
  const mouseRemove = () => {
    videoRef.current?.pause();
    setHover("opacity-100")
    
  };
  return (
    <div
      className="group relative   block rounded-xl overflow-hidden border border-[#E2DDB4]/30 shadow-lg shadow-black/50 transition-all duration-300 hover:shadow-[#FFD700]/30 hover:scale-105 w-[300px] "
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseRemove}
    >
      {/* Thumbnail */}
      <Image
        src={project.image}
        alt={project.title}
        width={300}
        height={200}
       
        className="object-cover  w-auto h-auto transition-opacity duration-300 group-hover:opacity-0 cursor-pointer "
      />

      {/* Hover Video */}
      <video
        ref={videoRef}
       muted
        loop
        playsInline
        
        className="hidden md:block absolute cursor-pointer inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Overlay */}
      <div className={` absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent px-4 py-3`}  >
        <h3 className={`text-[15px] font-semibold mb-1  text-[#FFD700] ${hover}`}>{project.title}</h3>
        {/* {project.tech && (
          <div className={`flex flex-wrap gap-2 text-xs text-[#FFD700] mb-2 ${hover}`}>
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="bg-[#FFD700]/10 px-2 py-0.5 rounded hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-[2px]  hover:after:w-full hover:after:bg-[#FFD700] hover:after:transition-all relative"
              >
                {tech}
              </span>
            ))}
          </div>
        )} */}

        <div className="flex gap-2">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1 rounded  text-[#F6EFD2] text-[10px] font-semibold border border-[#FFD700] hover:bg-[#FFD700]/90 hover:text-black transition-colors"
          >
            Live Project
          </a>

          <button
            onClick={() => onViewDetails(project)}
            className="px-3 py-1 rounded bg-black/5 border border-[#FFD700] text-[#FFD700] text-xs font-semibold hover:bg-[#FFD700] hover:text-black transition-colors cursor-pointer"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
