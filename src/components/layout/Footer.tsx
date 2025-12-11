import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdWhatsapp } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
const socialLinks = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/Newton2n" },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/newton2n",
  },
  { icon: FaXTwitter, label: "Twitter", href: "https://x.com/NewtonYt66184" },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/webcre8or",
  },
  { icon: FaWhatsapp, label: "Whatsapp", href: "https://wa.me/8801612676969" },
  { icon: MdEmail, label: "Email", href: "mailto:newtonyt04@gmail.com" },
];

export default function Footer() {
  const currentYear = "2025";

  return (
    <footer className="border-t border-[#E2DDB4]/30 bg-black text-[#E2DDB4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Contact CTA */}
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to build something
            <br />
            <span className="text-[#E2DDB4]">amazing together?</span>
          </h2>
          <p className="text-[#E2DDB4]/80 text-lg">
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E2DDB4] text-black hover:bg-[#d6d1a3] rounded-lg font-semibold transition-colors"
          >
            <MdWhatsapp size={20} />
            Get In Touch
          </a>
        </div>
        {/* Divider */}
        <div className="border-t border-[#E2DDB4]/30" />
        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center sm:text-left text-[#E2DDB4]/70 text-sm">
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
                className="p-2 rounded-lg border border-[#E2DDB4]/40 hover:border-[#E2DDB4] hover:text-[#E2DDB4] transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
        {/* Quick Links */}
        <div className="flex flex-wrap gap-4 text-sm text-[#E2DDB4]/70">
          <Link href="/">Home</Link>
          <span>·</span>
          <Link href="/projects">Projects</Link>
          <span>·</span>
          <Link href="/about">About</Link>
          <span>·</span>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
