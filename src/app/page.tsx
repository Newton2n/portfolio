
import type { Metadata } from "next";
import AllPage from "@/components/AllPage/AllPage";
import Hero from "@/components/layout/Hero";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Newton is a backend and full-stack engineer specializing in scalable systems, APIs, and end-to-end web applications.",
};

const Page = () => {
  return (
    <>
      <Hero />
      <AllPage />
    </>
  );
};

export default Page;
