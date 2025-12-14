import ConnectPage from "@/components/ConnectPage/Connect";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Ready to collaborate? Reach out to Newton for frontend development work, freelance projects, or career opportunities.",
  openGraph: {
    title: "Connect | Newton",
    description:
      "Get in touch with Newton for web development work or collaboration.",
  },
};
const page = () => {
  return <ConnectPage />;
};

export default page;
