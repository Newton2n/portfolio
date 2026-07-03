const socialLinks = [
  { label: "GitHub", href: "https://github.com/Newton2n" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/newton2n" },
  { label: "X", href: "https://x.com/newtonbepari" },
  { label: "Email", href: "mailto:newton.bepari.dev@gmail.com" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-900 bg-white dark:bg-black transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Identity */}
          <div className="space-y-2">
            <h2 className="text-lg font-bold text-neutral-950 dark:text-white">
              Newton Bepari
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Architecting efficient backend and full-Stack systems.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors duration-300"
              >
                {label}
                {/* Classic Underline Effect */}
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-neutral-950 dark:bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-100 dark:border-neutral-900 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600">
          <p>© {currentYear} All rights reserved.</p>
          <p>Precision Crafted</p>
        </div>
      </div>
    </footer>
  );
}
