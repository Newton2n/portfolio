import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const socialLinks = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/Newton2n" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/newton2n" },
  { icon: FaXTwitter, label: "Twitter", href: "https://x.com/NewtonYt66184" },
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/webcre8or" },
  { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/8801612676969" },
  { icon: SiGmail, label: "Email", href: "mailto:newton.bepari.dev@gmail.com" },
];

export default function Footer() {
  const currentYear = "2026";

  return (
    <>
      <footer className="border-t border-slate-300 dark:border-[#E2DDB4]/30 text-slate-900 dark:text-[#E2DDB4] bg-slate-50 dark:bg-black transition-colors duration-200">
        <div className="md:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
          {/* Contact CTA */}
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to build something
              <br />
              <span className="text-emerald-600 dark:text-[#E2DDB4] transition-colors duration-200">amazing together?</span>
            </h2>
            <p className="text-slate-700 dark:text-[#E2DDB4]/80 text-lg transition-colors duration-200">
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out!
            </p>
          </div>
          {/* WhatsApp CTA */}{" "}
          <div>
            <a
              href="https://wa.me/8801612676969"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Newton Whatsapp account"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 dark:bg-[#E2DDB4] text-white dark:text-black hover:bg-emerald-700 dark:hover:bg-[#d6d1a3] rounded-lg font-semibold transition-colors duration-200"
            >
              <MdWhatsapp size={20} />
              Get In Touch
            </a>
          </div>
          {/* Divider */}
          <div className="border-t border-slate-300 dark:border-[#E2DDB4]/30 transition-colors duration-200" />
          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-center sm:text-left text-slate-600 dark:text-[#E2DDB4]/70 text-sm transition-colors duration-200">
              <p>© {currentYear} Newton. All rights reserved.</p>
              <p>Crafted with care and precision.</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg border border-slate-300 dark:border-[#E2DDB4]/40 text-slate-900 dark:text-[#E2DDB4] hover:border-emerald-600 dark:hover:border-[#E2DDB4] hover:text-emerald-600 dark:hover:text-[#E2DDB4] transition-colors duration-200"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
