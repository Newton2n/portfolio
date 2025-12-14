import ProjectSection from '@/components/ProjectPage/ProjectSection'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse real web development projects by Newton. See live demos and code examples built with React and Next.js.",
  openGraph: {
    title: "Projects | Newton",
    description:
      "Explore frontend projects by Newton showcasing modern UI and responsive design.",
   
  },
};
const page = () => {
  return (
    <ProjectSection/>
  )
}

export default page