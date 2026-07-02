import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const socialLinks = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/Newton2n" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/newton2n" },
  { icon: FaXTwitter, label: "X", href: "https://x.com/newtonbepari" },
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/webcre8or" },
  { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/8801612676969" },
  { icon: SiGmail, label: "Email", href: "mailto:newton.bepari.dev@gmail.com" },
];

export default function Footer() {
  const currentYear = "2026";

  return (
    <footer className="border-t border-neutral-300 dark:border-neutral-800 bg-white dark:bg-black transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
              © {currentYear} Newton Bepari. All rights reserved.
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-500">
              Crafted with focus and precision.
            </p>
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:border-neutral-900 dark:hover:border-white hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
