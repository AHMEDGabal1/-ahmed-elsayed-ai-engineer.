"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="section-padding pb-28">
      <div className="max-width">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
            Contact
          </h2>
          <p className="mt-3 text-2xl font-semibold text-slate-50 md:text-3xl">
            Let&apos;s build something{" "}
            <span className="gradient-text">intelligent</span> together.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
            Whether you&apos;re a founder, engineering leader, or recruiter, I&apos;d
            love to talk about how AI agents, LLMs, and automation can unlock
            new capabilities for your product or organization.
          </p>

          <div className="mt-6 space-y-3 text-sm text-slate-200">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Email
              </span>
              <a
                href="mailto:ahmedgabal994@gmail.com"
                className="text-sm text-slate-100 underline-offset-4 hover:text-accent-cyan hover:underline"
              >
                ahmedgabal994@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                LinkedIn
              </span>
              <a
                href="https://linkedin.com/in/ahmed-gabal-09a8b32a3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-100 underline-offset-4 hover:text-accent-cyan hover:underline"
              >
                linkedin.com/in/ahmed-gabal-09a8b32a3
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                GitHub
              </span>
              <a
                href="https://github.com/AHMEDGabal1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-100 underline-offset-4 hover:text-accent-cyan hover:underline"
              >
                github.com/AHMEDGabal1
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

