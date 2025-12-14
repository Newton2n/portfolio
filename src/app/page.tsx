
import type { Metadata } from "next";
import AllPage from "@/components/AllPage/AllPage";
import Hero from "@/components/layout/Hero";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Newton is a frontend developer specializing in modern React and Next.js applications.",
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
