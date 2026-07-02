"use client";
import { FaLinkedinIn, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Image from "next/image";
import TextType from "../effects/TypeWriter";

const Hero = () => {
  return (
    <section id="home" className="w-full flex flex-col md:flex-row px-6 md:px-10 py-12 md:py-16 items-center gap-8 md:gap-12 bg-slate-50 dark:bg-black transition-colors duration-200">
      {/* LEFT SOCIAL BAR */}
      <div className="w-full md:w-2/12 flex md:flex-col gap-5 text-slate-900 dark:text-white text-2xl justify-center md:justify-start items-center md:items-start transition-colors duration-200">
        <a href="https://www.linkedin.com/in/newton2n" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/Newton2n" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
          <FaGithub />
        </a>
        <a href="mailto:newton.bepari.dev@gmail.com" aria-label="Email" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
          <SiGmail size={24} />
        </a>
        <a href="https://x.com/NewtonYt66184" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
          <FaTwitter />
        </a>
        <a href="https://wa.me/8801612676969" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
          <FaWhatsapp />
        </a>
        {/* Avatar Indicator */}
        <div className="flex items-center gap-2 mt-2">
          <Image src="/image/avatar.png" alt="Avatar" width={32} height={32} className="rounded-full w-8 h-8" />
          <span className="relative inline-flex w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
        </div>
      </div>

      {/* CENTER TEXT */}
      <div className="w-full md:w-7/12 flex flex-col items-center md:items-start text-center md:text-left">
        <p className="text-slate-900 dark:text-[#F6EFD2] text-5xl md:text-7xl font-bold pb-3 transition-colors duration-200">HEY, I'M</p>
        <div className="w-full min-h-[140px] mb-6">
          <TextType
            text={["Your Newton", "Backend Engineer", "Full-Stack Dev", "System Optimizer", ""]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter=""
            className="text-slate-900 dark:text-white text-5xl md:text-7xl font-bold transition-colors duration-200"
          />
        </div>
        <a href="/resume.pdf" download className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 dark:bg-[#FFD700] dark:hover:bg-[#FFC700] text-white dark:text-black font-semibold rounded-lg transition-colors duration-200 inline-block">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
