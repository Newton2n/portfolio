"use client";
import { useState } from "react";
import ProjectGrid from "./ProjectGrid";
import ProjectModal from "./ProjectModal";
import { Project } from "./ProjectCardTypes";

const projects: Project[] = [
  {
    title: "DevPulse: Tech Issue & Feature Tracker",
    category: "Backend",
    description:
      "A collaborative platform for software teams to report bugs and suggest features. Features a role-based permission system and direct raw SQL query integration with PostgreSQL and NeonDB.",
    tech: ["Node.js", "TypeScript", "Express.js", "PostgreSQL", "NeonDB", "JWT"],
    link: "https://devpulse-api-iota.vercel.app/",
    sourceCode: "https://github.com/Newton2n/dev-pulse",
    features: [
      "Role-Based Access Control (RBAC) for maintainer and contributor roles",
      "Secure protected API endpoints requiring verified JWT authorization headers",
      "Direct raw SQL query integration using native pg pool drivers",
      "Conditional access logic allowing contributors to manage their own open-status issues"
    ],
    backendMetrics: {
      throughput: "Stable PostgreSQL Pool",
      latency: "Optimized SQL execution",
      architecture: "Modular Express Router",
      endpoints: ["/api/auth/signup", "/api/issues", "/api/issues/:id"]
    }
  },
  {
    title: "Prisma Press Backend",
    category: "Backend",
    description:
      "A modular blog backend built with Express, TypeScript, and Prisma. Provides a robust API for authentication, user profiles, blog posts, comments, and admin reporting[cite: 3, 4].",
    tech: ["Node.js", "TypeScript", "Express 5", "Prisma 7.x", "PostgreSQL", "JWT"],
    link: "https://github.com/Newton2n/prisma-press",
    sourceCode: "https://github.com/Newton2n/prisma-press",
    features: [
      "Authentication using access/refresh tokens with bcrypt hashing [cite: 15, 62, 148]",
      "Role-based access control for normal users and admins [cite: 12]",
      "Full CRUD operations for posts, comments, and user profiles [cite: 11, 99]",
      "Aggregated statistics and moderation workflows for admins [cite: 152, 254]"
    ],
    backendMetrics: {
      architecture: "Modular Express Architecture",
      auth: "JWT + HTTP-only Cookies",
      database: "PostgreSQL (via Prisma ORM)",
      tokenLifetimes: "Access (1hr) / Refresh (7 days) [cite: 94, 95]"
    }
  },
  {
    title: "Full Stack Social Media",
    category: "Full-stack",
    image: "/image/postora.webp",
    video: "/video/postora.webm",
    description:
      "Postora is a full-stack image sharing platform migrated to Next.js. It features full CRUD functionality for managing posts and a complete profile system for user info and profile image updates, all powered by Appwrite.",
    tech: ["Next.js", "Appwrite", "React", "Redux", "Tailwind", "TinyMCE"],
    link: "https://postora-web.vercel.app/",
    sourceCode: "https://github.com/Newton2n/Blog-App-By-React-And-Appwrite",
    features: [
      "Complete user profile updates with cloud asset synchronization",
      "Secure CRUD permission wrappers preventing unauthorized object mutations",
      "Centralized client state mutations handling unified async layout data",
      "Integrated rich text workspace injection via custom TinyMCE containers"
    ]
  },
  {
    title: "Portfolio Website",
    category: "Front-end",
    image: "/image/portfolio.webp",
    video: "/video/portfolio.webm",
    description:
      "A modern personal portfolio website with clean UI, animations, and responsive design built to showcase backend engineering expertise.",
    tech: ["TypeScript", "Next.js", "Tailwind", "React", "GSAP"],
    link: "https://newtondev.vercel.app/",
    sourceCode: "https://github.com/Newton2n/My_Portfolio",
    features: [
      "Strict layout balance utilizing native Tailwind fluid systems",
      "Optimized element animations managed via clean lifecycle hooks",
      "Full dark mode toggle interface tracking execution criteria dynamically",
      "Highly accessible semantic layout wrappers following modern standards"
    ]
  }
];

export default function ProjectSection() {
  // Sets Backend as the highlighted, default loaded recruiter view tab
  const [activeTab, setActiveTab] = useState<"Backend" | "Front-end" | "Full-stack" | "All">("Backend");
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="w-full px-6 md:px-10 py-16 md:py-24 bg-white dark:bg-black transition-colors duration-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-black text-neutral-900 dark:text-white mb-2 tracking-tight">Featured Architecture</h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm font-medium mb-12">
          System frameworks engineered for absolute stability, performance, and deterministic operational execution control.
        </p>

        {/* Tab Selection Row */}
        <div className="flex justify-start gap-3 mb-12 flex-wrap">
          {(["Backend", "Front-end", "Full-stack", "All"] as const).map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded border transition-all ${
                activeTab === tab
                  ? "bg-neutral-900 dark:bg-white text-white dark:text-black border-neutral-900 dark:border-white shadow-sm scale-105"
                  : "border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-neutral-900 dark:hover:border-white hover:text-neutral-900 dark:hover:text-white"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <ProjectGrid projects={filteredProjects} onViewDetails={setModalProject} />

        {modalProject && <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />}
      </div>
    </section>
  );
}