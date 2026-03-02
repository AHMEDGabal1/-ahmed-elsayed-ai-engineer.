"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="section-padding pb-28">
      <div className="max-width grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
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
                className="text-sm text-slate-100 underline-offset-4 hover:text-accent.cyan hover:underline"
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
                className="text-sm text-slate-100 underline-offset-4 hover:text-accent.cyan hover:underline"
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
                className="text-sm text-slate-100 underline-offset-4 hover:text-accent.cyan hover:underline"
              >
                github.com/AHMEDGabal1
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="glass rounded-3xl p-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <form
            className="space-y-4 text-sm text-slate-200"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/60 px-3 py-2.5 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-accent.cyan/70 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Email
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/60 px-3 py-2.5 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-accent.cyan/70 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                How can I help?
              </label>
              <textarea
                rows={4}
                placeholder="Tell me about your product, team, or project."
                className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-slate-900/60 px-3 py-2.5 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-accent.cyan/70 focus:outline-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Start a Conversation
            </button>
            <p className="text-[11px] text-slate-500">
              This form is static by default. Connect it to your preferred form
              backend (Formspree, Resend, custom API, etc.) before going live.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

