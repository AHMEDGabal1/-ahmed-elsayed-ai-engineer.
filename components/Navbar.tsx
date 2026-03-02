"use client";

import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#vision", label: "AI Agency" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  return (
    <motion.nav
      className="nav-blur"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <a href="#top" className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-blue via-accent-purple to-accent-cyan text-xs font-semibold text-white">
          AE
        </div>
        <div className="leading-tight">
          <div className="text-xs font-semibold text-slate-100">
            Ahmed Elsayed
          </div>
          <div className="text-[11px] text-slate-400">
            AI Engineer · Agents Builder
          </div>
        </div>
      </a>
      <div className="hidden items-center gap-6 text-xs text-slate-300 md:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition hover:text-accent-cyan"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <a
          href="/Ahmed_Elsayed_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden text-xs font-medium text-slate-200 underline-offset-4 hover:text-accent-cyan hover:underline md:inline"
        >
          Download CV
        </a>
        <a href="#contact" className="btn-primary hidden text-xs md:inline-flex">
          Work With Me
        </a>
      </div>
    </motion.nav>
  );
}

