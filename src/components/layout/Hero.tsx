"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
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

  // Drag-to-scroll state
  const viewerContainerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [scrollStart, setScrollStart] = useState({
    left: 0,
    top: 0,
  });

  // Resume
  const fileId = "1R-KEWLM93x6LVnfwzp654K20gLv5QR9D";

  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  const previewPdfUrl = `https://docs.google.com/gview?url=https://drive.google.com/uc?id=${fileId}&embedded=true`;

  // Open resume
  const handleResumeAction = () => {
    const link = document.createElement("a");

    link.href = downloadUrl;
    link.download = "Newton_Resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsLoadingIframe(true);
    setIsResumeModalOpen(true);
  };

  // Close modal with Escape
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsResumeModalOpen(false);
    }
  }, []);

  // Lock background scrolling while modal is open
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

  // Start dragging
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!viewerContainerRef.current) return;

    setIsDragging(true);

    setDragStart({
      x: e.clientX,
      y: e.clientY,
    });

    setScrollStart({
      left: viewerContainerRef.current.scrollLeft,
      top: viewerContainerRef.current.scrollTop,
    });
  };

  // Drag to scroll
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !viewerContainerRef.current) return;

    e.preventDefault();

    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;

    viewerContainerRef.current.scrollLeft =
      scrollStart.left - dx;

    viewerContainerRef.current.scrollTop =
      scrollStart.top - dy;
  };

  // Stop dragging
  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <>
      <section
        id="home"
        aria-labelledby="hero-heading"
        className="w-full px-4 sm:px-6 py-12 sm:py-16 bg-white dark:bg-black transition-colors duration-200"
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0 relative rounded-full border-4 border-neutral-100 dark:border-neutral-900 overflow-hidden shadow-xl">
            <Image
              src="/image/my-image1.webp"
              alt="Newton, backend and full-stack developer"
              width={160}
              height={160}
              priority
              className="object-cover w-32 h-32 md:w-40 md:h-40"
            />
          </div>

          {/* Hero Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
            {/* Role Badge */}
            <div
              className="inline-block px-3 py-1 mb-3 border border-neutral-200 dark:border-neutral-800 rounded-full text-[10px] font-bold uppercase tracking-widest text-neutral-500"
              aria-hidden="true"
            >
              Backend & Full-Stack Developer
            </div>

            {/* Main Heading */}
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-6xl font-black text-neutral-900 dark:text-white tracking-tighter mb-4"
            >
              Newton | Backend & Full-Stack Developer
            </h1>

            {/* Introduction */}
            <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed max-w-md">
              I build backend-focused full-stack applications with{" "}
              <span className="font-semibold text-neutral-900 dark:text-white">
                Node.js
              </span>
              ,{" "}
              <span className="font-semibold text-neutral-900 dark:text-white">
                Express.js
              </span>
              , and{" "}
              <span className="font-semibold text-neutral-900 dark:text-white">
                Next.js
              </span>
              , with a focus on scalable APIs, databases, and reliable
              application architecture.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 w-full">
              {/* Resume Button */}
              <button
                type="button"
                onClick={handleResumeAction}
                aria-label="Download and preview Newton's resume"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black font-semibold text-sm rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <FaDownload
                  className="text-sm opacity-90"
                  aria-hidden="true"
                />

                <span>Download Resume</span>
              </button>

              {/* Social Links */}
              <nav
                aria-label="Social profiles"
                className="flex items-center gap-3 text-base sm:text-lg"
              >
                <a
                  href="https://github.com/Newton2n"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Newton's GitHub profile"
                  className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors p-1 cursor-pointer"
                >
                  <FaGithub aria-hidden="true" />
                </a>

                <a
                  href="https://www.linkedin.com/in/newton2n/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Newton's LinkedIn profile"
                  className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors p-1 cursor-pointer"
                >
                  <FaLinkedinIn aria-hidden="true" />
                </a>

                <a
                  href="https://x.com/newtonbepari"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Newton's X profile"
                  className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors p-1 cursor-pointer"
                >
                  <FaXTwitter aria-hidden="true" />
                </a>

                <a
                  href="https://www.facebook.com/newtonbepari96"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Newton's Facebook profile"
                  className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors p-1 cursor-pointer"
                >
                  <FaFacebook aria-hidden="true" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      {isResumeModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-neutral-950/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
          onClick={() => setIsResumeModalOpen(false)}
        >
          <div
            className="relative w-[95vw] sm:w-[85vw] max-w-[700px] aspect-[1/1.414] max-h-[90vh] bg-neutral-900 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-neutral-800 my-auto cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 sm:py-3 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur-md flex-shrink-0 z-20">
              <div className="flex items-center gap-2">
                <span
                  className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-emerald-500"
                  aria-hidden="true"
                />

                <h2
                  id="resume-modal-title"
                  className="text-xs sm:text-sm font-bold text-white tracking-tight"
                >
                  Resume Preview
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setIsResumeModalOpen(false)}
                aria-label="Close resume preview"
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <FaXmark
                  className="text-base sm:text-lg"
                  aria-hidden="true"
                />
              </button>
            </div>

            {/* PDF Viewer */}
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
              {/* Loading State */}
              {isLoadingIframe && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-neutral-950 z-10 pointer-events-none">
                  <FaSpinner
                    className="animate-spin text-xl text-blue-500"
                    aria-hidden="true"
                  />

                  <p className="text-xs text-neutral-400 font-medium">
                    Loading Resume...
                  </p>
                </div>
              )}

              {/* PDF */}
              <iframe
                src={previewPdfUrl}
                className={`w-full h-full border-none ${
                  isDragging
                    ? "pointer-events-none"
                    : "pointer-events-auto"
                }`}
                title="Newton's Resume"
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