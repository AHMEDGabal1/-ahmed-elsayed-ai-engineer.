"use client";

import { motion } from "framer-motion";

type SkillCategory = {
  title: string;
  items: { name: string; level: string }[];
};

const categories: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    items: [
      { name: "LLMs & RAG Pipelines", level: "Expert" },
      { name: "AI Agents & Multi-Agent Systems", level: "Expert" },
      { name: "LangChain & LangGraph", level: "Advanced" },
      { name: "NLP & Transformers", level: "Advanced" },
      { name: "Computer Vision (PyTorch)", level: "Advanced" },
      { name: "Fine-Tuning (LoRA / QLoRA)", level: "Advanced" },
      { name: "Vector Databases (FAISS)", level: "Advanced" }
    ]
  },
  {
    title: "Engineering & MLOps",
    items: [
      { name: "Python", level: "Expert" },
      { name: "FastAPI & RESTful APIs", level: "Advanced" },
      { name: "Docker & CI/CD (GitHub Actions)", level: "Advanced" },
      { name: "n8n & Workflow Automation", level: "Advanced" },
      { name: "React.js & Dashboards", level: "Intermediate" },
      { name: "SQL, Bash & Java", level: "Intermediate" }
    ]
  },
  {
    title: "Cloud & APIs",
    items: [
      { name: "Azure OpenAI & Fundamentals", level: "Advanced" },
      { name: "OpenAI, Claude & Meta LLaMA APIs", level: "Advanced" },
      { name: "AWS & GCP", level: "Intermediate" },
      { name: "WebSockets & Tool-Calling Agents", level: "Advanced" }
    ]
  }
];

const levelToWidth: Record<string, string> = {
  Expert: "w-[95%]",
  Advanced: "w-[85%]",
  Intermediate: "w-[70%]"
};

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-width">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Skills
            </h2>
            <p className="mt-3 text-2xl font-semibold text-slate-50 md:text-3xl">
              A full-stack skill set for{" "}
              <span className="gradient-text">
                intelligent, production-ready AI systems
              </span>
              .
            </p>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-300 md:text-base">
            From modeling and fine-tuning to backend orchestration and frontend
            dashboards, I own the entire lifecycle of AI products—research,
            engineering, and real-world deployment.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              className="glass group relative overflow-hidden rounded-3xl p-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.05 }}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-purple/10 opacity-0 transition group-hover:opacity-100" />
              <div className="relative z-10">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {category.title}
                </h3>
                <ul className="mt-4 space-y-3 text-xs text-slate-200 md:text-sm">
                  {category.items.map((item) => (
                    <li key={item.name}>
                      <div className="flex items-center justify-between gap-2">
                        <span>{item.name}</span>
                        <span className="text-[11px] text-slate-400">
                          {item.level}
                        </span>
                      </div>
                      <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-800/80">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan ${levelToWidth[item.level]}`}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

