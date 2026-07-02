import type { Metadata } from "next";
import Hero from "@/components/layout/Hero";
import AboutPage from "@/components/AboutPage/AboutPage";
import SkillsPage from "@/components/skillPage/SkillsPage";
import ProjectSection from "@/components/ProjectPage/ProjectSection";
import Connect from "@/components/ConnectPage/Connect";

export const metadata: Metadata = {
  title: "Newton — Backend & Full-Stack Engineer",
  description:
    "Portfolio of Newton, a backend and full-stack engineer specializing in building scalable, optimized backend systems and complete web applications.",
};

const Page = () => {
  return (
    <>
      <Hero />
      <AboutPage />
      <SkillsPage />
      <ProjectSection />
      <Connect />
    </>
  );
};

export default Page;
