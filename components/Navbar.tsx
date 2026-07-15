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
        <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded border border-stone-700 bg-stone-800">
          <Image src="profile.jpg" alt="Ahmed Elsayed" fill className="object-cover" />
        </div>
        <div className="leading-tight">
          <div className="text-xs font-semibold text-stone-100">
            Ahmed Elsayed
          </div>
          <div className="text-[11px] text-stone-400">
            AI Engineer · Agents Builder
          </div>
        </div>
      </a>

      <div className="hidden items-center gap-6 text-xs text-stone-300 md:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition hover:text-accent"
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
          className="hidden text-xs font-medium text-stone-200 underline-offset-4 hover:text-accent hover:underline md:inline"
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
          className="flex h-9 w-9 items-center justify-center rounded border border-stone-700 bg-stone-800 text-stone-100 md:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-0.5 w-4 bg-current transition ${open ? "transtone-y-[5px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[5px] h-0.5 w-4 bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-[10px] h-0.5 w-4 bg-current transition ${open ? "-transtone-y-[5px] -rotate-45" : ""}`}
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
            className="absolute inset-x-0 top-full border-b border-stone-800 bg-surface/95 p-3 backdrop-blur md:hidden shadow-lg"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded px-3 py-2.5 text-sm text-stone-200 transition hover:bg-stone-800 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href="Ahmed_Elsayed_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block rounded px-3 py-2.5 text-sm font-medium text-accent hover:bg-stone-800"
            >
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
