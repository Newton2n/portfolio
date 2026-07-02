// ProjectCardTypes.ts
export interface Project {
  title: string;
  category: "Backend" | "Front-end" | "Full-stack" | "All";
  description: string;
  tech: string[];
  link: string;
  sourceCode: string;
  features: string[];
  image?: string;      // Optional
  video?: string;      // Optional
  backendMetrics?: {   // Make this optional with '?'
    throughput?: string;
    latency?: string;
    architecture?: string;
    endpoints?: string[];
    auth?: string;
    database?: string;
    tokenLifetimes?: string;
  };
}