"use client";

import { motion } from "framer-motion";

const items = [
  {
    type: "Experience",
    title: "LLM Developer & Full-Stack Engineer",
    org: "I-Gamify",
    period: "Apr 2025 – Jun 2025",
    location: "Remote",
    bullets: [
      "Designed a real-time monitoring and ranking system for tender announcements, using LLMs and semantic matching to align opportunities with company capabilities.",
      "Built backend services with Python (FastAPI) and integrated LangChain + RAG pipelines for high-quality tender-to-profile matching.",
      "Developed a React dashboard with smart search, opportunity tracking, and notification flows to keep sales teams focused on high-value leads."
    ]
  },
  {
    type: "Experience",
    title: "Data Scientist Trainee",
    org: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "Mar 2024 – May 2024",
    location: "Egypt",
    bullets: [
      "Completed intensive training across AI and modern software development topics, including ML, cloud, and data engineering foundations.",
      "Delivered team-based projects that combined ML models with practical software delivery, strengthening collaboration and communication."
    ]
  },
  {
    type: "Experience",
    title: "AI Fundamentals Trainee",
    org: "Zewail City of Science and Technology",
    period: "May 2023",
    location: "Egypt",
    bullets: [
      "Worked on computer vision and NLP projects, translating theory into applied AI systems.",
      "Focused on scalability and performance optimization for real-world use cases."
    ]
  },
  {
    type: "Experience",
    title: "Java Developer Trainee",
    org: "Information Technology Institute (ITI)",
    period: "Feb 2023 – Jun 2023",
    location: "Alamein, Egypt",
    bullets: [
      "Built a JavaFX client-server chat room with messaging, status tracking, file saving, and MySQL-backed authentication.",
      "Integrated proxy server and SSL/TLS to secure client-server communication."
    ]
  },
  {
    type: "Education",
    title: "B.Sc. in Artificial Intelligence Engineering",
    org: "Alamein International University",
    period: "Sep 2021 – Jun 2026",
    location: "Alamein, Egypt",
    bullets: [
      "Graduated with a 'Very Good' grade; graduation project (Dentlyzer) graded A+.",
      "Specialized in machine learning, deep learning, and intelligent systems engineering."
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

