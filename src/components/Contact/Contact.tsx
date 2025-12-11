import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <section className="w-full bg-black text-[#E2DDB4] px-4 md:px-16 py-16 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Contact Me
      </h2>

      <p className="text-[#E2DDB4]/90 text-center mb-8 max-w-2xl">
        I'm always interested in collaborating on projects or freelance
        opportunities. Send me a message and I'll get back to you as soon as
        possible.
      </p>

      <div className="flex gap-8 mt-12 text-2xl">
        {/* GitHub */}
        <a
          href="https://github.com/Newton2n"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="relative flex items-center group"
        >
          <FaGithub className="group-hover:text-[#FFD700] transition-colors" />
          <span className="absolute top-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-base">
            GitHub
          </span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/newton2n"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="relative flex items-center group"
        >
          <FaLinkedin className="group-hover:text-[#FFD700] transition-colors" />
          <span className="absolute top-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-base">
            LinkedIn
          </span>
        </a>

        {/* Email */}
        <a
          href="mailto:newtonyt04@gmail.com"
          aria-label="Email"
          className="relative flex items-center group"
        >
          <MdEmail className="group-hover:text-[#FFD700] transition-colors" />
          <span className="absolute top-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-base">
            Email
          </span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/webcre8or"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="relative flex items-center group"
        >
          <FaInstagram className="group-hover:text-[#FFD700] transition-colors" />
          <span className="absolute top-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-base">
            Instagram
          </span>
        </a>

        {/* X */}
        <a
          href="https://x.com/NewtonYt66184"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          className="relative flex items-center group"
        >
          <FaXTwitter className="group-hover:text-[#FFD700] transition-colors" />
          <span className="absolute top-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-base">
            X
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/8801612676969"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="relative flex items-center group"
        >
          <FaWhatsapp className="group-hover:text-[#FFD700] transition-colors" />
          <span className="absolute top-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-base">
            WhatsApp
          </span>
        </a>
      </div>
    </section>
  );
};

export default ContactPage;
