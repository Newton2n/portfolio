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
    <footer className="border-t border-slate-300 dark:border-slate-800 bg-white dark:bg-black transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
              © {currentYear} Newton Bepari. All rights reserved.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500">
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
                className="p-2 rounded border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-emerald-500 hover:text-emerald-500 transition-colors"
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
