import type { Metadata } from "next";
import { Preahvihear } from "next/font/google";
import "./globals.css";

import ClientWrapper from "@/components/layout/ClientWrapper";
import Footer from "@/components/layout/Footer";
import SplashCursor from "@/components/effects/SplashCursor";

import { Analytics } from "@vercel/analytics/next"
const preahvihear = Preahvihear({
  weight: ["400"],
  variable: "--font-Preahvihear",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Newton — Frontend Developer",
    template: "%s | Newton",
  },
  description:
    "Portfolio of Newton, a frontend developer building modern, responsive web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${preahvihear.variable}`}>
      <body className="antialiased min-h-screen bg-[#000000]">
        <Analytics/>
        <SplashCursor />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <ClientWrapper>    {children} </ClientWrapper>             
        </div>
         <Footer />
      </body>
    </html>
  );
}
