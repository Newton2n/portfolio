"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import {
  FaXTwitter,
  FaDownload,
  FaXmark,
  FaSpinner,
} from "react-icons/fa6";
import Image from "next/image";

const Hero = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isLoadingIframe, setIsLoadingIframe] = useState(true);

  // Drag-to-Scroll (Panning) State & Ref
  const viewerContainerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [scrollStart, setScrollStart] = useState({ left: 0, top: 0 });

  // Resume Links
  const fileId = "1L49t7jSjE2S2D1hXCFDpDHZUlDboAxVO";
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  // Clean embedded PDF URL
  const previewPdfUrl = `https://docs.google.com/gview?url=https://drive.google.com/uc?id=${fileId}&embedded=true`;

 
  const handleResumeAction = () => {
    
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "Newton_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 2. Open Modal Preview
    setIsLoadingIframe(true);
    setIsResumeModalOpen(true);
  };

  // Lock background scroll & handle 'Escape' key close
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsResumeModalOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isResumeModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isResumeModalOpen, handleKeyDown]);

  // Drag Handlers for Cursor Scrolling when zoomed in
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!viewerContainerRef.current) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    setScrollStart({
      left: viewerContainerRef.current.scrollLeft,
      top: viewerContainerRef.current.scrollTop,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !viewerContainerRef.current) return;
    e.preventDefault();
    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;
    viewerContainerRef.current.scrollLeft = scrollStart.left - dx;
    viewerContainerRef.current.scrollTop = scrollStart.top - dy;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <>
      <section
        id="home"
        className="w-full px-4 sm:px-6 py-12 sm:py-16 bg-white dark:bg-black transition-colors duration-200"
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0 relative rounded-full border-4 border-neutral-100 dark:border-neutral-900 overflow-hidden shadow-xl">
            <Image
              src="/image/my-image1.webp"
              alt="Newton's Avatar"
              width={160}
              height={160}
              priority
              className="object-cover w-32 h-32 md:w-40 md:h-40"
            />
          </div>

          {/* Text and Actions */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
            <div className="inline-block px-3 py-1 mb-3 border border-neutral-200 dark:border-neutral-800 rounded-full text-[10px] font-bold uppercase tracking-widest text-neutral-500">
              Backend & Full-Stack Developer
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-neutral-900 dark:text-white tracking-tighter mb-4">
              Hi, I&apos;m Newton
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed max-w-md">
              I specialize in{" "}
              <span className="font-semibold text-neutral-900 dark:text-white">
                Express.js
              </span>{" "}
              backends and{" "}
              <span className="font-semibold text-neutral-900 dark:text-white">
                Next.js
              </span>{" "}
              full-stack applications. Focused on clean architecture,
              high-performance design, and scalable system logic.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 w-full">
              
              <button
                onClick={handleResumeAction}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black font-semibold text-sm rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <FaDownload className="text-sm opacity-90" />
                <span>Download Resume</span>
              </button>

              {/* Social Icons */}
              <div className="flex items-center gap-3 text-base sm:text-lg">
                {[
                  { Icon: FaGithub, href: "https://github.com/Newton2n" },
                  {
                    Icon: FaLinkedinIn,
                    href: "https://www.linkedin.com/in/newton2n",
                  },
                  { Icon: FaXTwitter, href: "https://x.com/newtonbepari" },
                  {
                    Icon: FaFacebook,
                    href: "https://www.facebook.com/newtonbepari96",
                  },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors p-1 cursor-pointer"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {isResumeModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-neutral-950/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
          onClick={() => setIsResumeModalOpen(false)}
        >
          
          <div
            className="relative w-[95vw] sm:w-[85vw] max-w-[700px] aspect-[1/1.414] max-h-[90vh] bg-neutral-900 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-neutral-800 my-auto cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 sm:py-3 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur-md flex-shrink-0 z-20">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-emerald-500" />
                <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                  Resume Preview
                </h3>
              </div>

          
              <button
                onClick={() => setIsResumeModalOpen(false)}
                aria-label="Close modal"
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <FaXmark className="text-base sm:text-lg" />
              </button>
            </div>

          
            <div
              ref={viewerContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
              className={`relative flex-1 w-full bg-neutral-950 overflow-auto select-none ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
            >
              {isLoadingIframe && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-neutral-950 z-10 pointer-events-none">
                  <FaSpinner className="animate-spin text-xl text-blue-500" />
                  <p className="text-xs text-neutral-400 font-medium">
                    Loading Resume...
                  </p>
                </div>
              )}

              <iframe
                src={previewPdfUrl}
                className={`w-full h-full border-none ${
                  isDragging ? "pointer-events-none" : "pointer-events-auto"
                }`}
                title="Newton Resume Preview"
                onLoad={() => setIsLoadingIframe(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;