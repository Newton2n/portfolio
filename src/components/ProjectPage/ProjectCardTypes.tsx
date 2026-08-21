export interface Project {
  title: string;
  category: "Backend" | "Front-end" | "Full-stack" | "All";
  description: string;
  tech: string[];
  link: string;
  sourceCode: string;
  backendLink?: string;        
  backendSourceCode?: string;  
  features: string[];
  challenges: string[];
  futureImprovements: string[];
  image?: string;
  video?: string;
  backendMetrics?: {
    throughput?: string;
    latency?: string;
    architecture?: string;
    validation? :string;
    payments? :string;
    endpoints?: string[]; 
    auth?: string;
    database?: string;
    tokenLifetimes?: string;
  };
}