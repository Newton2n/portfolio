import AboutPage from "@/components/AboutPage/AboutPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Newton — frontend developer focused on clean code, performance, and modern web experiences.",
  openGraph: {
    title: "About | Newton",
    description:
      "Discover Newton’s background, skills, and approach to building web applications.",
    
  },
};

const page = () => {
  return <AboutPage />;
};

export default page;
