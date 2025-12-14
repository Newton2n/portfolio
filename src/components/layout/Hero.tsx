import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import WheelPickerUi from "../layout/WheelPickerUI";
import Image from "next/image";
import TextType from "../effects/TypeWriter";
const Hero = () => {
  return (
    <section className="w-full flex flex-col md:flex-row px-6 md:px-10 py-6 md:py-8 items-center md:items-center gap-8 md:gap-16">
      {/* LEFT SOCIAL BAR */}
      <div className="w-full md:w-2/12 flex md:flex-col gap-6 text-white text-2xl md:text-3xl justify-center ">
        <a
          href="https://www.linkedin.com/in/newton2n"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Newton Linkedin profile"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/Newton2n"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Newton GitHub profile"
        >
          <FaGithub />
        </a>

        {/* Profile Picture with Hover Name */}
        <div className=" flex ">
          {/* Name Text */}

          {/* Profile Picture */}
          <div className="h-8 w-8 rounded-full overflow-hidden cursor-grab">
            <Image
              src="/image/myImage.webp"
              alt="My Profile"
              height={100}
              width={100}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex size-1.5 rounded-full bg-[#FFD700]"></span>
          </span>
        </div>
      </div>

      {/* CENTER TEXT */}
      <div className="w-full md:w-7/12 flex flex-col items-center md:items-start text-center md:text-left">
        <p className="text-[#F6EFD2] text-6xl sm:text-5xl md:text-7xl font-bold pb-4 md:pb-6">
          HEY, I'M
        </p>

        <TextType
          text={["Your Newton", "Frontend dev.", "Coder", "UI Designer", ""]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter=""
          className="text-white text-5xl sm:text-5xl md:text-7xl font-bold"
        />
      </div>

      {/* RIGHT WIDGET */}
      <div className="w-full md:w-3/12 flex flex-col items-center justify-center gap-2">
        <p className="text-[#F6EFD2] text-lg md:text-xl font-bold mb-2">
          My skills
        </p>
        <div className="w-3/4 sm:w-48 h-40 sm:h-48">
          <WheelPickerUi />
        </div>
      </div>
    </section>
  );
};

export default Hero;
