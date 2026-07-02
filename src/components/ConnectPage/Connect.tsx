
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const ConnectPage = () => {
  return (
    <section id="contact" className="w-full px-6 md:px-10 py-16 md:py-24 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">Get In Touch</h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-12 max-w-2xl">
          I'm interested in freelance opportunities, collaborations, and new projects. Feel free to reach out!
        </p>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Email */}
          <div className="border border-neutral-300 dark:border-neutral-700 rounded p-6 bg-white dark:bg-black">
            <div className="flex items-center gap-3 mb-3">
              <MdEmail className="text-neutral-900 dark:text-white text-2xl" />
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Email</h3>
            </div>
            <a href="mailto:newton.bepari.dev@gmail.com" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
              newton.bepari.dev@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="border border-neutral-300 dark:border-neutral-700 rounded p-6 bg-white dark:bg-black">
            <div className="flex items-center gap-3 mb-3">
              <FaPhone className="text-neutral-900 dark:text-white text-xl" />
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Phone</h3>
            </div>
            <a href="tel:+8801612676969" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
              +880 161 267 6969
            </a>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/8801612676969"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 text-white dark:text-black font-semibold rounded mb-12 transition-colors"
        >
          Message on WhatsApp
        </a>

        {/* Social Links */}
        <div>
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4 uppercase tracking-wide">Follow Me</h3>
          <div className="flex gap-4 text-2xl">
            <a href="https://github.com/Newton2n" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/newton2n" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://x.com/NewtonYt66184" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
              <FaXTwitter />
            </a>
            <a href="https://www.instagram.com/webcre8or" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectPage;
