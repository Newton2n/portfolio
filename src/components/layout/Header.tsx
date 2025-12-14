"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Tab {
  label: string;
  href: string;
}

const tabs: Tab[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Connect", href: "/connect" },
];

// Define the accent color for re-use
const PRIMARY_ACCENT_COLOR = "#FFD700"; 

export default function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement | null>(null);
  const [spacerHeight, setSpacerHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      setSpacerHeight(headerRef.current.offsetHeight);
    }
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
            const isActive = pathname === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className="relative flex-1 px-4 py-2 rounded-3xl text-sm cursor-pointer transition-colors hover:bg-[#F6EFD2]/8"
              >
                {isActive && (
                  <motion.div
                    layoutId="active-tab"
                    // FIX 1: Use the vibrant accent color for the moving indicator
                    className={`absolute inset-0 rounded-3xl `}
                    style={{ backgroundColor: PRIMARY_ACCENT_COLOR }}
                    
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  />
                )}
                <span 
                  className={`relative z-10 font-medium transition-colors`}
                  // FIX 2: Text color on active tab is White (or Primary Accent) for visibility
                  // FIX 3: Inactive text is Muted Gray
                  style={{ color: isActive ? ' #000' : '#E2DDB4' }}
                >
                  {tab.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </header>

      {/* Spacer pushes content down automatically */}
      <div style={{ height: spacerHeight }} />
    </>
  );
}