export interface Project {
  title: string;
  category: "Front-end" | "Full-stack";
  image: string;
  video: string;
  description: string;
  tech?: string[];
  link?: string;
  sourceCode?:string;
}
