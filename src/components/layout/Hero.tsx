"use client";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import WheelPickerUi from "../layout/WheelPickerUI";
import Image from "next/image";
import TextType from "../effects/TypeWriter";
import BigImagePopup from "./big-image-popup";
import { useState } from "react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section id="home" className="w-full flex flex-col md:flex-row px-6 md:px-10 py-6 md:py-8 items-center md:items-center gap-8 md:gap-16 bg-slate-50 dark:bg-black transition-colors duration-200">
        {/* LEFT SOCIAL BAR */}
        <div className="w-full md:w-2/12 flex md:flex-col gap-6 text-slate-900 dark:text-white text-2xl md:text-3xl justify-center transition-colors duration-200">
          <a
            href="https://www.linkedin.com/in/newton2n"
            title="Newton's Linkedin profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Newton Linkedin profile"
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Newton2n"
            title="Newton's GitHub profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Newton GitHub profile"
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <FaGithub />
          </a>

          {/* Profile Picture with Hover Name */}
          <div className=" flex ">
            {/* Name Text */}

            {/* Profile Picture */}
            <button
              aria-label="Open profile image"
              className="h-8 w-8 rounded-full overflow-hidden cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <Image
                src="/image/avatar.png"
                alt="Newton's professional avatar"
                height={100}
                width={100}
                className="h-full w-full object-cover"
              />
            </button>
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex size-1.5 rounded-full bg-[#FFD700]"></span>
            </span>
          </div>
        </div>

        {/* CENTER TEXT */}
        <div className="w-full md:w-7/12 flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-slate-900 dark:text-[#F6EFD2] text-6xl sm:text-5xl md:text-7xl font-bold pb-4 md:pb-6 transition-colors duration-200">
            HEY, I'M
          </p>
          <div className="w-full min-h-[150px]">
            <TextType
              text={[
                "Your Newton",
                "Backend Engineer",
                "Full-Stack Dev",
                "System Optimizer",
                "",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter=""
              className="text-slate-900 dark:text-white min-w-full h-full text-5xl sm:text-5xl md:text-7xl font-bold transition-colors duration-200"
            />
          </div>
          {/* Download Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="mt-6 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 dark:bg-[#FFD700] dark:hover:bg-[#FFC700] text-white dark:text-black font-semibold rounded-lg transition-colors duration-200"
          >
            Download Resume
          </a>
        </div>

        {/* RIGHT WIDGET */}
        <div className="w-full md:w-3/12 flex flex-col items-center justify-center gap-2">
          <p className="text-slate-900 dark:text-[#F6EFD2] text-lg md:text-xl font-bold mb-2 transition-colors duration-200">
            My skills
          </p>
          <div className="w-3/4 sm:w-48 h-40 sm:h-48">
            <WheelPickerUi />
          </div>
        </div>

         {/* Image pop up section*/}
        {isOpen && (
          <BigImagePopup
            imageSrc="/image/avatar.png"
            onClose={() => setIsOpen(false)}
          />
        )}
      </section>
    </>
  );
};

export default Hero;
