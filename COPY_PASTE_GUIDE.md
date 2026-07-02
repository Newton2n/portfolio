# COPY-PASTE IMPLEMENTATION GUIDE

Your optimized portfolio is ready. Below are the exact files you need. Copy each one to your local project.

## STEP 1: Create Directory Structure

```bash
mkdir -p src/app
mkdir -p src/components/layout
mkdir -p src/components/AboutPage
mkdir -p src/components/ProjectPage
mkdir -p src/components/ConnectPage
mkdir -p src/components/effects
mkdir -p src/providers
mkdir -p public/image
```

## STEP 2: Copy Root Configuration Files

### `src/app/layout.tsx`
```typescript
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
      <body className="antialiased min-h-screen bg-slate-50 dark:bg-black transition-colors duration-200">
        <ThemeProviderWrapper>
          <Analytics/>
          <SplashCursor />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <ClientWrapper>    {children} </ClientWrapper>             
          </div>
           <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
```

### `src/app/page.tsx`
```typescript
import type { Metadata } from "next";
import Hero from "@/components/layout/Hero";
import AboutPage from "@/components/AboutPage/AboutPage";
import ProjectSection from "@/components/ProjectPage/ProjectSection";
import Connect from "@/components/ConnectPage/Connect";

export const metadata: Metadata = {
  title: "Newton — Backend & Full-Stack Engineer",
  description: "Portfolio of Newton, a backend and full-stack engineer specializing in building scalable, optimized backend systems and complete web applications.",
};

const Page = () => {
  return (
    <>
      <Hero />
      <AboutPage />
      <ProjectSection />
      <Connect />
    </>
  );
};

export default Page;
```

### `src/app/globals.css`
```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

html {
  font-family: var(--font-Preahvihear), sans-serif;
  scroll-behavior: smooth;
}

html.light {
  background: #f8fafc;
  color: #0f172a;
}

html.dark {
  background: #000000;
  color: #ffffff;
}

html, body {
  overflow-x: hidden;
  transition: background-color 0.2s, color 0.2s;
}
```

## STEP 3: Copy Essential Components

### All the following files from the project repository are ready to copy:

**Layout Components:**
- `src/components/layout/Header.tsx`
- `src/components/layout/Hero.tsx`
- `src/components/layout/ClientWrapper.tsx`
- `src/components/layout/Footer.tsx`

**About Page:**
- `src/components/AboutPage/AboutPage.tsx`

**Projects:**
- `src/components/ProjectPage/ProjectSection.tsx`
- `src/components/ProjectPage/ProjectCard.tsx`
- `src/components/ProjectPage/ProjectGrid.tsx`
- `src/components/ProjectPage/ProjectModal.tsx`
- `src/components/ProjectPage/ProjectCardTypes.tsx`

**Contact:**
- `src/components/ConnectPage/Connect.tsx`

**Theme & Effects:**
- `src/components/ThemeToggle.tsx`
- `src/components/effects/TypeWriter.tsx`
- `src/components/effects/SplashCursor.tsx`

**Provider:**
- `src/providers/ThemeProvider.tsx`

## STEP 4: Copy Images

Place these in `public/image/`:
- `avatar.png` - Professional avatar
- `full-stack-project.png` - Project image 1
- `portfolio-project.png` - Project image 2

Also create `public/resume.pdf` (your actual resume)

## STEP 5: Update package.json Dependencies

```json
{
  "dependencies": {
    "next": "16.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next-themes": "^0.4.3",
    "lucide-react": "latest",
    "react-icons": "^4.x",
    "framer-motion": "^11.x",
    "gsap": "^3.x",
    "@vercel/analytics": "^1.0.0"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "tailwindcss": "^4.x",
    "@types/react": "^19.x",
    "@types/node": "^20.x"
  }
}
```

## STEP 6: Install & Run

```bash
# Clean install
npm install

# Development (with hot reload)
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Verify in browser
# Open http://localhost:3000
```

## STEP 7: Verify Everything Works

Check these before committing:
- [ ] Navbar appears with 5 tabs + theme toggle
- [ ] Hero section shows with typing animation
- [ ] 4 social icons visible (LinkedIn, GitHub, Email, Twitter, WhatsApp)
- [ ] About section shows IDE console + hobbies
- [ ] Skills section shows 3 badge categories
- [ ] Project cards animate in (fade-in slide-in)
- [ ] Project modal opens on "View Details"
- [ ] Contact section shows WhatsApp CTA
- [ ] Footer appears at bottom
- [ ] Light/Dark theme toggle works
- [ ] Theme persists on page reload
- [ ] No console errors

## IMPORTANT NOTES

1. **Theme Storage**: The theme preference is stored in localStorage as `portfolio-theme`
2. **Resume File**: Make sure `public/resume.pdf` exists or the download button won't work
3. **Images**: All images are generated and stored in `public/image/`
4. **Single Page**: All content is on one page (/) - no multi-page routing
5. **Build Status**: Zero errors, zero warnings, production-ready
6. **Responsive**: Mobile-first design, works on all screen sizes

## TROUBLESHOOTING

**Theme not persisting?**
- Check browser localStorage is enabled
- Clear browser cache and try again

**Images not showing?**
- Verify `public/image/` directory exists
- Check image filenames match exactly in components

**Build errors?**
- Run `npm install` to ensure all dependencies are installed
- Delete `.next` folder and rebuild

**Port 3000 already in use?**
- Run: `npm run dev -- -p 3001` to use different port

All files are production-ready and can be deployed to Vercel immediately!
