"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X, Github } from "lucide-react";

const tabs = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [spacerHeight, setSpacerHeight] = useState(0);
  const [activeSection, setActiveSection] = useState("#home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [followers, setFollowers] = useState<number | null>(null);

  useEffect(() => {
    if (headerRef.current) setSpacerHeight(headerRef.current.offsetHeight);
  }, []);

  // Track scroll for active state
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      tabs.forEach((tab) => {
        const element = document.querySelector(tab.href);
        if (element instanceof HTMLElement) {
          if (element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
            setActiveSection(tab.href);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch GitHub Followers
  useEffect(() => {
    fetch("https://api.github.com/users/Newton2n")
      .then((res) => res.json())
      .then((data) => { if (data.followers) setFollowers(data.followers); })
      .catch((e) => console.error(e));
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
      setActiveSection(href);
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="text-sm font-black tracking-tighter">NEWTON.DEV</a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {tabs.map((tab) => (
              <a
                key={tab.href}
                href={tab.href}
                onClick={(e) => handleNavClick(e, tab.href)}
                className={`text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:text-neutral-900 dark:hover:text-white ${
                  activeSection === tab.href ? "text-neutral-900 dark:text-white underline underline-offset-8" : "text-neutral-500"
                }`}
              >
                {tab.label}
              </a>
            ))}
          </nav>

          {/* Right Actions - Fully Responsive */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            <a 
              href="https://github.com/Newton2n" 
              target="_blank" 
              className="flex items-center gap-1.5 text-[10px] font-bold text-neutral-500 hover:text-black dark:hover:text-white transition-colors whitespace-nowrap"
            >
              <Github size={14} />
              <span>{followers ?? "GITHUB"}</span>
            </a>

            <div className="w-px h-4 bg-neutral-200 dark:bg-neutral-800" />
            <ThemeToggle />
            
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-black border-b border-neutral-200 dark:border-neutral-800 p-6 flex flex-col gap-6 animate-in slide-in-from-top-4">
            {tabs.map((tab) => (
              <a 
                key={tab.href} 
                href={tab.href} 
                onClick={(e) => handleNavClick(e, tab.href)} 
                className="text-2xl font-black uppercase tracking-tighter"
              >
                {tab.label}
              </a>
            ))}
          </div>
        )}
      </header>
      <div style={{ height: spacerHeight }} />
    </>
  );
}