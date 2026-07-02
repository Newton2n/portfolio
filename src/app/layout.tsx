import type { Metadata } from "next";
import { Preahvihear } from "next/font/google";
import "./globals.css";

import ClientWrapper from "@/components/layout/ClientWrapper";
import Footer from "@/components/layout/Footer";
import SplashCursor from "@/components/effects/SplashCursor";
import { ThemeProviderWrapper } from "@/providers/ThemeProvider";

import { Analytics } from "@vercel/analytics/next"
const preahvihear = Preahvihear({
  weight: ["400"],
  variable: "--font-Preahvihear",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Newton — Backend & Full-Stack Engineer",
    template: "%s | Newton",
  },
  description:
    "Portfolio of Newton, a backend and full-stack engineer specializing in building scalable, optimized backend systems and complete web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${preahvihear.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-slate-950">
        <ThemeProviderWrapper>
          <Analytics />
          <SplashCursor />
          <div className="mx-auto">
            <ClientWrapper>{children}</ClientWrapper>
          </div>
          <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
