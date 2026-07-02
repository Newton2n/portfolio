"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Tab {
  label: string;
  href: string;
}

const tabs: Tab[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// Define the accent color for re-use
const PRIMARY_ACCENT_COLOR = "#FFD700"; 

export default function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement | null>(null);
  const [spacerHeight, setSpacerHeight] = useState(0);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    if (headerRef.current) {
      setSpacerHeight(headerRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#home", "#about", "#skills", "#projects", "#contact"];
      for (const sectionId of sections) {
        const element = document.querySelector(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        // Use a black background with high transparency for better glass effect on black BG
        className="fixed top-0 left-0 right-0 z-50 w-full py-4 flex justify-center bg-black/5" 
      >
        <nav 
          className="flex px-1 py-[1.8px] border rounded-3xl backdrop-blur-sm"
          // Darker, cleaner glass effect with a subtle accent glow
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.05)', 
            borderColor: 'rgba(255, 255, 255, 0.1)',
            
          }}
        >
          {tabs.map((tab) => {
            const isActive = activeSection === tab.href;
            return (
              <a
                key={tab.href}
                href={tab.href}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(tab.href);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="relative flex-1 px-4 py-2 rounded-3xl text-sm cursor-pointer transition-colors hover:bg-[#F6EFD2]/8"
              >
                {isActive && (
                  <motion.div
                    layoutId="active-tab"
                    className={`absolute inset-0 rounded-3xl `}
                    style={{ backgroundColor: PRIMARY_ACCENT_COLOR }}
                    
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  />
                )}
                <span 
                  className={`relative z-10 font-medium transition-colors`}
                  style={{ color: isActive ? ' #000' : '#E2DDB4' }}
                >
                  {tab.label}
                </span>
              </a>
            );
          })}
        </nav>
      </header>

      {/* Spacer pushes content down automatically */}
      <div style={{ height: spacerHeight }} />
    </>
  );
}
