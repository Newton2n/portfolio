"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

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
        className="fixed top-0 left-0 right-0 z-50 w-full py-4 flex justify-center bg-white/5 dark:bg-black/5 transition-colors duration-200" 
      >
        <nav 
          className="flex items-center px-2 py-[1.8px] border rounded-3xl backdrop-blur-sm gap-2 transition-colors duration-200"
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            borderColor: 'rgba(100, 116, 139, 0.3)',
          }}
        >
          {/* Navigation tabs */}
          <div className="flex">
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
                  className="relative flex-1 px-4 py-2 rounded-3xl text-sm cursor-pointer transition-colors hover:bg-slate-200/20 dark:hover:bg-[#F6EFD2]/8"
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
                    className={`relative z-10 font-medium transition-colors text-slate-900 dark:text-[#E2DDB4]`}
                    style={{ color: isActive ? ' #000' : undefined }}
                  >
                    {tab.label}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Theme Toggle Button */}
          <div className="border-l border-slate-300/30 dark:border-[#E2DDB4]/20 pl-2 ml-2">
            <ThemeToggle />
          </div>
        </nav>
      </header>

      {/* Spacer pushes content down automatically */}
      <div style={{ height: spacerHeight }} />
    </>
  );
}
