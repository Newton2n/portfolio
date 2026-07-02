"use client";
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="w-full px-6 md:px-10 py-20 md:py-32 bg-slate-50 dark:bg-black transition-colors duration-200">
      <div className="max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-block px-3 py-1 mb-6 border border-slate-300 dark:border-slate-700 rounded text-xs font-semibold text-slate-700 dark:text-slate-300">
          Backend & Full-Stack Engineer
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
          Hi, I&apos;m Newton
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-3xl">
          I build scalable backend systems and complete full-stack applications. Passionate about system design, APIs, and creating solutions that matter.
        </p>

        {/* CTA and Avatar Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-12">
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded transition-colors"
          >
            Download Resume
          </a>
          <div className="flex-shrink-0">
            <Image
              src="/image/avatar.png"
              alt="Newton's Avatar"
              width={80}
              height={80}
              className="rounded-full border-2 border-slate-300 dark:border-slate-700"
            />
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/Newton2n"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-500 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/newton2n"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-500 transition-colors"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://x.com/NewtonYt66184"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-500 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com/newton.bepari"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-500 transition-colors"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
