"use client";

import { motion } from "framer-motion";

const items = [
  {
    type: "Experience",
    title: "Founder & AI Engineer",
    org: "ArabBot Studio",
    period: "Jan 2026 – Present",
    location: "Remote",
    bullets: [
      "Founded a no-code, multi-tenant SaaS that lets Egyptian SMBs deploy AI WhatsApp chatbots understanding the Egyptian Arabic dialect.",
      "Architected a 5-stage pipeline—dialect normalization, 9-category intent routing, RAG retrieval, response generation—with LangChain, Google Gemini 2.0/2.5, and FAISS.",
      "Built an async FastAPI backend and React 19 + TypeScript dashboard with JWT auth, workspace isolation, and PostgreSQL/Redis—~45 ms webhook ACK, ~120 ms p95 latency."
    ]
  },
  {
    type: "Experience",
    title: "AI Engineer (Freelance)",
    org: "Self-employed",
    period: "Jul 2025 – Present",
    location: "Remote",
    bullets: [
      "Built agentic AI systems and RAG architectures for SME clients in Egypt and the UAE using Azure OpenAI and LangGraph multi-agent orchestration.",
      "Prototyped n8n workflow automations for lead qualification and customer-support routing."
    ]
  },
  {
    type: "Experience",
    title: "LLM Developer & Full-Stack AI Engineer",
    org: "I-Gamify",
    period: "Apr 2025 – Jun 2025",
    location: "Cairo, Egypt",
    bullets: [
      "Built ForsaHunt end-to-end as the sole AI engineer on a 3-month contract; adopted by the sales team within the first week.",
      "Designed a LangChain + FAISS semantic matcher that cut irrelevant results by 80% vs keyword search across 10,000+ tender documents.",
      "Delivered a React.js dashboard with live WebSocket notifications; 500+ daily queries at sub-2-second p95 latency, Dockerized for zero-downtime deploys."
    ]
  },
  {
    type: "Education",
    title: "B.Sc. in Artificial Intelligence Engineering",
    org: "Alamein International University",
    period: "Sep 2021 – Jan 2026",
    location: "Alamein, Egypt",
    bullets: [
      "Graduated with a 'Very Good' grade; graduation project (Dentlyzer) graded A+ and top-ranked in cohort.",
      "Specialized in machine learning, deep learning, computer vision, and natural language processing."
    ]
  },
  {
    type: "Training",
    title: "Data Science Trainee",
    org: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "Mar 2024 – May 2024",
    location: "Egypt",
    bullets: [
      "Completed 200+ hours of applied ML training: supervised learning, data pipelines, and cloud deployment fundamentals.",
      "Delivered a team capstone project end-to-end within a 3-week sprint."
    ]
  },
  {
    type: "Training",
    title: "AI For Business — Technical & Freelance Track",
    org: "National Telecommunication Institute (NTI)",
    period: "2024",
    location: "Egypt",
    bullets: [
      "90-hour technical track: data analysis, supervised/unsupervised ML, and deep learning (CNNs, RNNs).",
      "30-hour freelance track: client acquisition, project management, and platform positioning."
    ]
  }
];

export function ExperienceEducation() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-width">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
          Experience & Education
        </h2>
        <p className="mt-3 text-2xl font-semibold text-slate-50 md:text-3xl">
          A focused path toward{" "}
          <span className="gradient-text">AI engineering leadership</span>.
        </p>

        <div className="mt-8 space-y-6 border-l border-slate-800/80 pl-4 md:pl-6">
          {items.map((item, idx) => (
            <motion.article
              key={`${item.type}-${item.org}-${idx}`}
              className="relative pl-4"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <div className="absolute -left-[27px] top-1 flex h-4 w-4 items-center justify-center">
                <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan shadow-[0_0_0_4px_rgba(15,23,42,0.9)]" />
              </div>
              <div className="glass rounded-2xl p-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                  <span className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                    {item.type}
                  </span>
                  <span>
                    {item.period} · {item.location}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-slate-50 md:text-base">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-slate-300 md:text-sm">
                  {item.org}
                </p>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-300 md:text-sm">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1 h-[3px] w-[10px] rounded-full bg-accent-cyan/70" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

