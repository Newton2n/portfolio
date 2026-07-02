"use client";
import { useState } from "react";
import { MdContentCopy, MdCheck } from "react-icons/md";

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  isExternal?: boolean;
}

export const ContactItem = ({ icon, label, value, href, isExternal = false }: ContactItemProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    if (label === "Email" || label === "Phone") {
      e.preventDefault();
      navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <a
      href={href}
      onClick={handleCopy}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="flex items-center gap-4 p-6 border border-neutral-200 dark:border-neutral-800 rounded hover:border-neutral-900 dark:hover:border-white transition-all group w-full bg-white dark:bg-neutral-950"
    >
      <div className="text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white">{icon}</div>
      <div className="flex-1">
        <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
          {copied ? "Copied!" : label}
        </div>
        <div className="text-sm font-semibold text-neutral-900 dark:text-white">{value}</div>
      </div>
      {!isExternal && (
        <div className="text-neutral-400">
          {copied ? <MdCheck className="text-emerald-500" /> : <MdContentCopy />}
        </div>
      )}
    </a>
  );
};