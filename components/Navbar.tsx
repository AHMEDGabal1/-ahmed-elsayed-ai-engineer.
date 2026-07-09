"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#vision", label: "AI Agency" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="nav-blur"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
        <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-slate-800">
          <Image src="profile.jpg" alt="Ahmed Elsayed" fill className="object-cover" />
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
          href="Ahmed_Elsayed_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden text-xs font-medium text-slate-200 underline-offset-4 hover:text-accent-cyan hover:underline md:inline"
        >
          Download CV
        </a>
        <a href="#contact" className="btn-primary hidden text-xs md:inline-flex">
          Work With Me
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100 md:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-0.5 w-4 bg-current transition ${open ? "translate-y-[5px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[5px] h-0.5 w-4 bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-[10px] h-0.5 w-4 bg-current transition ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-[calc(100%+0.5rem)] rounded-2xl border border-white/10 bg-surface/95 p-3 backdrop-blur-xl md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2.5 text-sm text-slate-200 transition hover:bg-white/5 hover:text-accent-cyan"
              >
                {link.label}
              </a>
            ))}
            <a
              href="Ahmed_Elsayed_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2.5 text-sm font-medium text-accent-cyan"
            >
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
