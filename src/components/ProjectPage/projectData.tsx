import { Project } from "./ProjectCardTypes";

const projects: Project[] = [
  // Existing Projects
  {
    title: "Prisma Press Backend",
    category: "Backend",
    description: "A modular blog backend built with Express 5, TypeScript, Prisma 7.x, and PostgreSQL. Provides API for auth, profiles, posts, comments, and admin reporting.",
    tech: ["Node.js", "TypeScript", "Express 5", "Prisma 7.x", "PostgreSQL", "JWT"],
    link: "https://github.com/Newton2n/prisma-press",
    sourceCode: "https://github.com/Newton2n/prisma-press",
    features: ["JWT-based Auth", "RBAC", "Full CRUD", "Admin moderation"],
    challenges: ["Translating Prisma errors to HTTP responses", "Managing secure HTTP-only cookies"],
    futureImprovements: ["Add Zod validation", "Automated integration testing"],
    backendMetrics: {
      architecture: "Modular Express Architecture",
      auth: "JWT + HTTP-only Cookies",
      database: "PostgreSQL",
      tokenLifetimes: "Access (1hr) / Refresh (7 days)",
      latency: "Optimized Prisma Query",
      throughput: "Stable Prisma Postgres",
      endpoints: [
        "/api/auth/login", "/api/auth/refresh-token",
        "/api/users/register", "/api/users/me",
        "/api/posts", "/api/posts/stats",
        "/api/comments/:commentId/moderate"
      ]
    }
  },
  {
    title: "DevPulse: Tech Issue & Feature Tracker",
    category: "Backend",
    description: "A collaborative platform for software teams to report bugs and suggest features. Features role-based permissions and raw SQL query integration.",
    tech: ["Node.js", "TypeScript", "Express.js", "PostgreSQL", "NeonDB", "JWT"],
    link: "https://devpulse-api-iota.vercel.app/",
    sourceCode: "https://github.com/Newton2n/dev-pulse",
    features: ["RBAC", "Protected API endpoints", "Raw SQL integration"],
    challenges: ["Optimizing raw SQL query performance", "Managing database connection pooling"],
    futureImprovements: ["Implement Redis caching", "Add GitHub OAuth"],
    backendMetrics: {
      throughput: "Stable PostgreSQL Pool",
      latency: "Optimized SQL execution",
      architecture: "Modular Express Router",
      endpoints: ["/api/auth/signup", "/api/issues", "/api/issues/:id"]
    }
  },
  // New "In Progress" Demo Project
  {
    title: "",
    category: "Backend",
    description: "",
    tech: [],
    link: "#",
    sourceCode: "#",
    features: [],
    challenges: [],
    futureImprovements: [],
    backendMetrics :{
      latency: "!!",
      throughput: "!!",
    }
  },
  {
    title: "Full Stack Social Media",
    category: "Full-stack",
    image: "/image/postora.webp",
    video: "/video/postora.webm",
    description: "Postora is a full-stack image sharing platform migrated to Next.js. Features full CRUD functionality.",
    tech: ["Next.js", "Appwrite", "React", "Redux", "Tailwind", "TinyMCE"],
    link: "https://postora-web.vercel.app/",
    sourceCode: "https://github.com/Newton2n/Blog-App-By-React-And-Appwrite",
    features: ["Profile sync", "CRUD permission wrappers", "Rich text injection"],
    challenges: ["Synchronizing Appwrite assets", "Managing Redux state"],
    futureImprovements: ["TanStack Query integration", "Real-time notifications"]
  },
  {
    title: "Portfolio Website",
    category: "Front-end",
    image: "/image/portfolio.webp",
    video: "/video/portfolio.webm",
    description: "A modern personal portfolio website built to showcase backend engineering expertise.",
    tech: ["TypeScript", "Next.js", "Tailwind", "React", "GSAP"],
    link: "https://newtondev.vercel.app/",
    sourceCode: "https://github.com/Newton2n/My_Portfolio",
    features: ["Layout balance", "GSAP animations", "Dark mode"],
    challenges: ["GSAP scroll synchronization", "Performance optimization"],
    futureImprovements: ["Interactive blog section", "Bundle size reduction"]
  }
];

export default projects;