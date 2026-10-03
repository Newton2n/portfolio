import type { Metadata } from "next";
import { Preahvihear } from "next/font/google";
import "./globals.css";

import ClientWrapper from "@/components/layout/ClientWrapper";
import Footer from "@/components/layout/Footer";
import { ThemeProviderWrapper } from "@/providers/ThemeProvider";

import { Analytics } from "@vercel/analytics/next";

const preahvihear = Preahvihear({
  weight: ["400"],
  variable: "--font-Preahvihear",
  subsets: ["latin"],
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Newton",
  url: "https://newtondev.me",
  jobTitle: "Backend & Full-Stack Developer",
  description:
    "Backend-focused full-stack developer building web applications with Node.js, TypeScript, Next.js, PostgreSQL, Prisma, and React.",
  sameAs: [
    "https://github.com/Newton2n",
    "https://www.linkedin.com/in/newton2n/",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://newtondev.me"),

  title: {
    default: "Newton | Backend & Full-Stack Developer",
    template: "%s | Newton",
  },

  description:
    "Newton is a backend-focused full-stack developer building web applications with Node.js, TypeScript, Next.js, PostgreSQL, Prisma, and React.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Newton | Backend & Full-Stack Developer",
    description:
      "Backend-focused full-stack developer building web applications with Node.js, TypeScript, Next.js, PostgreSQL, Prisma, and React.",
    url: "https://newtondev.me",
    siteName: "Newton",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Newton | Backend & Full-Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Newton | Backend & Full-Stack Developer",
    description:
      "Backend-focused full-stack developer building web applications with Node.js, TypeScript, Next.js, PostgreSQL, Prisma, and React.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${preahvihear.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased min-h-screen bg-white dark:bg-black transition-colors duration-200">
        <ThemeProviderWrapper>
          <Analytics />

          <div className="mx-auto">
            <ClientWrapper>{children}</ClientWrapper>
          </div>

          <Footer />
        </ThemeProviderWrapper>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </body>
    </html>
  );
}