"use client";

import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

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

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [spacerHeight, setSpacerHeight] = useState(0);
  const [activeSection, setActiveSection] = useState("#home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 w-full bg-white dark:bg-black border-b border-slate-200 dark:border-slate-800 transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
          {/* Left: Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {tabs.map((tab) => {
              const isActive = activeSection === tab.href;
              return (
                <a
                  key={tab.href}
                  href={tab.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(tab.href);
                  }}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-emerald-500 dark:text-emerald-500"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {tab.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 dark:text-slate-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Right: Theme Toggle */}
          <div className="ml-auto md:ml-0">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-black border-t border-slate-200 dark:border-slate-800">
            <nav className="flex flex-col px-6 py-4 gap-4">
              {tabs.map((tab) => {
                const isActive = activeSection === tab.href;
                return (
                  <a
                    key={tab.href}
                    href={tab.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(tab.href);
                    }}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? "text-emerald-500"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      {/* Spacer */}
      <div style={{ height: spacerHeight }} />
    </>
  );
}
