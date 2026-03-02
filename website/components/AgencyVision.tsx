"use client";

import { motion } from "framer-motion";

export function AgencyVision() {
  return (
    <section id="vision" className="section-padding">
      <div className="max-width glass overflow-hidden rounded-3xl p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                AI Agency Vision
              </h2>
              <p className="mt-3 text-2xl font-semibold text-slate-50 md:text-3xl">
                Building the future of{" "}
                <span className="gradient-text">
                  AI automation in the Middle East
                </span>
                .
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
                I&apos;m on a path to build a Cairo-based AI agency with global
                reach—focused on intelligent automation, custom agents, and
                AI-native workflows for ambitious companies. The goal is simple:
                help businesses operate like AI-first startups, regardless of
                their size or industry.
              </p>
            </div>
            <div className="grid gap-3 text-xs text-slate-300 md:text-sm">
              <div className="rounded-2xl bg-white/5 p-3">
                <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  Focus
                </div>
                <p className="mt-1">
                  Enterprise automation, custom AI agents, ERP & internal tools
                  integrations, and intelligent decision support systems.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-3">
                <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  Region
                </div>
                <p className="mt-1">
                  Starting in Egypt and the Middle East—where many organizations
                  are ready to leapfrog into AI-native operations.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 text-xs text-slate-200 md:grid-cols-3 md:text-sm">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                What we&apos;ll build
              </div>
              <ul className="mt-2 space-y-1.5">
                <li>Autonomous AI agents that own business workflows</li>
                <li>AI copilots embedded into ERP, CRM, and internal tools</li>
                <li>Intelligent monitoring systems for operations and sales</li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                How we operate
              </div>
              <ul className="mt-2 space-y-1.5">
                <li>Small, senior teams shipping fast, safe AI systems</li>
                <li>Deep integration into client workflows, not one-off POCs</li>
                <li>Metrics-first: time saved, revenue unlocked, risk reduced</li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Ideal partners
              </div>
              <ul className="mt-2 space-y-1.5">
                <li>Founders and leaders ready to bet on AI-first operations</li>
                <li>Enterprises with complex, repetitive processes</li>
                <li>Teams who value technical depth and strategic thinking</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

