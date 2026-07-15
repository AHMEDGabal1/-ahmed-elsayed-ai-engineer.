"use client";

import { motion } from "framer-motion";

type Project = {
  name: string;
  label: string;
  impact: string;
  problem: string;
  solution: string;
  result: string;
  tech: string[];
  link?: string;
};

const projects: Project[] = [
  {
    name: "ArabBot Studio",
    label: "No-Code AI WhatsApp Chatbot SaaS (Founder)",
    impact:
      "Helping Egyptian SMBs deploy AI chatbots that understand the Egyptian Arabic dialect—no code required.",
    problem:
      "Egyptian SMBs lack affordable, local-language automation; off-the-shelf bots fail on Egyptian Arabic dialect and multi-tenant isolation.",
    solution:
      "Founded a multi-tenant SaaS with a 5-stage pipeline: dialect normalization → 9-category intent routing → RAG retrieval → response generation, built on LangChain, Google Gemini 2.0/2.5, and FAISS.",
    result:
      "Shipped an async FastAPI + React 19/TypeScript dashboard with JWT auth and workspace isolation on PostgreSQL/Redis—~45 ms webhook ACK and ~120 ms p95 AI latency.",
    tech: [
      "Python",
      "FastAPI",
      "LangChain",
      "Gemini",
      "FAISS",
      "React 19",
      "PostgreSQL",
      "Redis",
      "Docker"
    ],
    link: "https://github.com/AHMEDGabal1"
  },
  {
    name: "ForsaHunt",
    label: "RAG-Powered Tender Discovery Platform",
    impact:
      "Automating how sales teams discover, rank, and act on high-value tenders.",
    problem:
      "Sales teams wasted hours scanning tender portals with poor search, inconsistent formats, and no intelligence on fit or priority.",
    solution:
      "Built an LLM + FAISS semantic matching pipeline that aligns tenders to company profiles in real time and ranks them by strategic fit via FastAPI async endpoints.",
    result:
      "Cut manual research time by 70%, reduced irrelevant results by 80% across 10,000+ tender docs, and served 500+ daily queries at sub-2s p95—adopted by sales within one week.",
    tech: [
      "Python",
      "FastAPI",
      "LangChain",
      "FAISS",
      "OpenAI",
      "React.js",
      "Docker"
    ],
    link: "https://github.com/AHMEDGabal1"
  },
  {
    name: "Dentlyzer",
    label: "AI Dental Care Platform (Graduation Project, Grade A+)",
    impact:
      "Standardizing diagnostics and automating workflows for modern dental practices.",
    problem:
      "Clinics struggle with fragmented workflows, manual documentation, and inconsistent X-ray diagnostics.",
    solution:
      "Built a PyTorch + Computer Vision X-ray analysis engine and unified it with intraoral scanner support, remote aligner tracking, and patient management.",
    result:
      "Reduced diagnostic reporting time by 60% across 500+ X-ray cases, saved 2+ admin hours per dentist per day, and earned an A+ as top-ranked in cohort.",
    tech: ["PyTorch", "Computer Vision", "NLP", "FastAPI", "React.js", "Medical AI"],
    link: "https://github.com/AHMEDGabal1"
  },
  {
    name: "Translation & Summarization Microservices",
    label: "LLM-Based Microservices Platform",
    impact:
      "Real-time, scalable language services with independent per-service scaling and zero-downtime deploys.",
    problem:
      "Teams needed reliable, observable translation/summarization that could scale components independently.",
    solution:
      "Architected containerized microservices exposing multiple LLM backends through a unified REST API gateway with async processing.",
    result:
      "Achieved zero-downtime deployments with load balancing and cut average summarization latency by 40%.",
    tech: ["Python", "FastAPI", "Docker", "LangChain", "REST APIs", "Microservices"],
    link: "https://github.com/AHMEDGabal1"
  },
  {
    name: "Sports Classification & Action Recognition",
    label: "Deep Learning Research Project",
    impact:
      "Multi-modal sports video understanding with strong classification accuracy.",
    problem:
      "Action recognition across diverse sports needed robust, accurate models on limited labeled data.",
    solution:
      "Fine-tuned a Swin Transformer for 20-class classification and fused BERT sentiment analysis for multi-modal video + text insights.",
    result:
      "Reached 94% classification accuracy on a 20-class sports dataset with multi-modal insights.",
    tech: ["PyTorch", "Swin Transformer", "BERT", "Computer Vision", "TensorFlow"],
    link: "https://github.com/AHMEDGabal1"
  }
];

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-width">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Projects
            </h2>
            <p className="mt-3 text-2xl font-semibold text-slate-50 md:text-3xl">
              AI systems built for{" "}
              <span className="text-accent">real business impact</span>, not
              just research demos.
            </p>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-300 md:text-base">
            Each project is designed as a product: clear users, measurable value,
            and an architecture that can scale from prototype to production.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {projects.map((project, idx) => (
            <motion.article
              key={project.name}
              className="glass group relative overflow-hidden rounded-lg p-6 md:p-7"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.08 }}
            >
              <div className="pointer-events-none absolute inset-0 bg-slate-800/20 opacity-0 transition group-hover:opacity-100" />
              <div className="relative z-10 grid gap-6 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    <span className="rounded bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-400">
                      Deployed AI System
                    </span>
                    <span>{project.label}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-slate-50 md:text-xl">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-slate-200 md:text-base">
                    {project.impact}
                  </p>

                  <div className="mt-4 grid gap-3 text-xs text-slate-300 md:grid-cols-3 md:text-sm">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                        Problem
                      </div>
                      <p className="mt-1">{project.problem}</p>
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                        Solution
                      </div>
                      <p className="mt-1">{project.solution}</p>
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                        Result
                      </div>
                      <p className="mt-1">{project.result}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-200 md:text-xs">
                    {project.tech.map((t) => (
                      <span key={t} className="tag-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-4 md:items-end">
                  <div className="rounded bg-slate-900 p-4 text-xs text-slate-300 md:text-sm">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                      Why this matters
                    </div>
                    <p className="mt-2">
                      This project showcases how I think about AI as a lever for
                      automation, prioritization, and strategic decision-making—not
                      as a toy, but as infrastructure.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 md:justify-end">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

