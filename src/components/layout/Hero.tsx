"use client";
import { useState } from "react";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const driveUrl =
    "https://drive.google.com/file/d/1IsT3nB1VSycsEZ-vAOQW6TSBug1wLOq_/view?usp=drivesdk";
  const downloadLink =
    "https://drive.google.com/uc?export=download&id=1IsT3nB1VSycsEZ-vAOQW6TSBug1wLOq_";
  const resumeLink = driveUrl;

  return (
    <section
      id="home"
      className="w-full px-6 py-16 bg-white dark:bg-black transition-colors duration-200"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-12">
        {/* Profile Image - Design preserved */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex-shrink-0 relative rounded-full border-4 border-neutral-100 dark:border-neutral-900 overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl"
        >
          <Image
            src="/image/my-image1.webp"
            alt="Newton's Avatar"
            width={160}
            height={160}
            className="object-cover w-32 h-32 md:w-40 md:h-40"
          />
        </button>

        {/* Text and Actions - Design preserved */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="inline-block px-3 py-1 mb-3 border border-neutral-200 dark:border-neutral-800 rounded-full text-[10px] font-bold uppercase tracking-widest text-neutral-500">
            Backend & Full-Stack Developer
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-neutral-900 dark:text-white tracking-tighter mb-4">
            Hi, I&apos;m Newton
          </h1>

          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed max-w-md">
            I build scalable backend systems and complete full-stack
            applications. Focused on system design, performance, and clean code
            architecture.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href={downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => {
                event.preventDefault();
                window.open(resumeLink, "_blank", "noopener,noreferrer");
                window.location.href = downloadLink;
              }}
              className="px-6 py-2 bg-neutral-900 dark:bg-white text-white dark:bg-white dark:text-black font-bold text-sm rounded hover:opacity-80 transition-all shadow-sm hover:shadow-md transition-all"
            >
              Download Resume
            </a>

            {/* Social Icons - Design preserved */}
            <div className="flex gap-5 text-lg">
              {[
                { Icon: FaGithub, href: "https://github.com/Newton2n" },
                {
                  Icon: FaLinkedinIn,
                  href: "https://www.linkedin.com/in/newton2n",
                },
                { Icon: FaXTwitter, href: "https://x.com/newtonbepari" },
                {
                  Icon: FaFacebook,
                  href: "https://www.facebook.com/newton.bepari",
                },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
