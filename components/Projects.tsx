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
    name: "ForsaHunt",
    label: "AI-Powered Tender Discovery Platform",
    impact:
      "Automating how sales teams discover, rank, and act on high-value tenders.",
    problem:
      "Sales teams waste hours manually scanning tender portals with poor search, inconsistent formats, and no intelligence on fit or priority.",
    solution:
      "Built an LLM-powered platform that monitors tender sources in real time, semantically matches opportunities to company capabilities, and ranks them based on strategic fit.",
    result:
      "Significantly reduced manual search time, increased visibility of high-value tenders, and created a repeatable pipeline for opportunity discovery.",
    tech: [
      "Python",
      "FastAPI",
      "LangChain",
      "RAG",
      "LLMs",
      "Vector DB",
      "React.js"
    ],
    link: "https://github.com/AHMEDGabal1"
  },
  {
    name: "Dentlyzer",
    label: "AI-Powered Dental Care Platform (Graduation Project)",
    impact:
      "Standardizing diagnostics and automating workflows for modern dental practices.",
    problem:
      "Dental clinics struggle with fragmented workflows, manual documentation, and inconsistent diagnostics across X-rays, intraoral scans, and aligner tracking.",
    solution:
      "Designed a unified platform combining AI X-ray analysis, intraoral scanner integration, and remote aligner tracking with automated documentation and patient engagement.",
    result:
      "Improved clinical efficiency, enhanced diagnostic consistency, and created a foundation for scalable, AI-first dental operations.",
    tech: [
      "Python",
      "Computer Vision",
      "Deep Learning",
      "Transformers",
      "FastAPI"
    ]
  },
  {
    name: "Microservices Translation & Summarization",
    label: "LLM-Based Microservices Platform",
    impact:
      "Real-time, scalable language services for internal tools and client applications.",
    problem:
      "Teams needed real-time translation and summarization with reliability, observability, and the ability to independently scale components.",
    solution:
      "Architected a microservices-based platform using LLMs for translation and summarization, exposed via clean APIs with autoscaling-friendly deployment.",
    result:
      "Delivered low-latency, fault-tolerant services ready to plug into dashboards, chat interfaces, and internal tools.",
    tech: ["Python", "LLMs", "FastAPI", "Docker", "Microservices", "RAG"]
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
              <span className="gradient-text">real business impact</span>, not
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
              className="glass group relative overflow-hidden rounded-3xl p-6 md:p-7"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.08 }}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent-blue/10 via-transparent to-accent-purple/10 opacity-0 transition group-hover:opacity-100" />
              <div className="relative z-10 grid gap-6 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-400">
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
                  <div className="rounded-2xl bg-slate-900/70 p-4 text-xs text-slate-300 md:text-sm">
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

