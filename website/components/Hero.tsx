"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "AI Engineer",
  "LLM Systems Architect",
  "RAG & Agentic Pipelines",
  "NLP & Computer Vision Engineer"
];

function useTyping(words: string[], speed = 80, pause = 1600) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const current = words[index % words.length];
    let i = 0;

    const type = () => {
      if (i <= current.length) {
        setText(current.slice(0, i));
        i += 1;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % words.length);
        }, pause);
      }
    };

    const interval = setInterval(type, speed);
    return () => clearInterval(interval);
  }, [index, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTyping(roles);

  return (
    <section
      id="top"
      className="section-padding relative overflow-hidden pt-28 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        {/* Background blobs removed for cleaner UI */}
      </div>

      <div className="max-width relative z-10 grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded border border-slate-700 bg-slate-800 px-4 py-1.5 text-sm font-medium text-slate-300">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Available for remote roles & collaborations
          </div>

          <h1 className="mt-6 text-balance font-display text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            Engineering{" "}
            <span className="text-accent">
              intelligent AI systems
            </span>{" "}
            that think, learn, and scale.
          </h1>

          <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-slate-300 md:text-lg">
            I design and build production-grade AI systems—LLM agents, automation
            workflows, and computer vision pipelines—that turn complex problems
            into scalable, intelligent products. From idea to deployed system, I
            bridge research-level AI with real-world business impact.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-300 md:text-base">
            <span className="tag-pill">AI Engineer</span>
            <span className="tag-pill">LLMs & RAG</span>
            <span className="tag-pill">AI Agents & n8n</span>
            <span className="tag-pill">NLP & Computer Vision</span>
            <span className="tag-pill">Founder Mindset</span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Work With Me
            </a>
            <a
              href="Ahmed_Elsayed_resume.pdf"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-xs text-slate-400 md:text-sm">
            <div>
              <div className="font-semibold text-slate-100">
                AI Engineer • Agents Builder
              </div>
              <div>Specialized in LLMs, NLP, Computer Vision & Automation</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="glass relative overflow-hidden rounded-lg p-6">
            <div className="relative z-10">
              <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                <span>AI Engineer Dashboard</span>
                <span>Cairo, Egypt · Remote</span>
              </div>
              <div className="rounded bg-slate-900 p-4">
                <div className="mb-4 flex items-start justify-between gap-2">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Current Focus
                    </div>
                    <div className="mt-1 text-sm font-medium text-slate-100">
                      Intelligent AI Agents & Automation Systems
                    </div>
                  </div>
                  <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-400">
                    Founder Mindset
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded bg-slate-800 p-3">
                    <div className="text-[11px] text-slate-400">
                      Active Domains
                    </div>
                    <div className="mt-1 text-sm font-semibold text-slate-100">
                      LLMs, Agents, CV, NLP
                    </div>
                  </div>
                  <div className="rounded bg-slate-800 p-3">
                    <div className="text-[11px] text-slate-400">
                      Impact Focus
                    </div>
                    <div className="mt-1 text-sm font-semibold text-slate-100">
                      Automation & Scalability
                    </div>
                  </div>
                  <div className="col-span-2 rounded bg-slate-800 p-3">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>AI Roles</span>
                      <span className="font-mono text-accent">
                        {typed}
                        <span className="ml-0.5 inline-block h-4 w-[1px] animate-pulse bg-accent" />
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-900">
                      <div className="h-full w-5/6 rounded-full bg-accent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background/90 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

