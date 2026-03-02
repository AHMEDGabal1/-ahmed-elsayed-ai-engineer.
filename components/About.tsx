"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-width grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
            About
          </h2>
          <p className="mt-3 text-2xl font-semibold text-slate-50 md:text-3xl">
            AI Engineer building intelligent systems that{" "}
            <span className="gradient-text">automate, optimize, and scale</span>{" "}
            businesses.
          </p>
          <p className="mt-5 text-base leading-relaxed text-slate-300 md:text-lg">
            I&apos;m Ahmed Elsayed, an AI Engineer from Cairo, Egypt with a B.Sc.
            in Artificial Intelligence Engineering (Alamein International
            University, graduation project: A+). I specialize in designing and
            deploying end-to-end AI systems—LLMs, AI agents, and automation
            workflows—that solve real business problems, not just benchmark
            datasets.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
            My work lives at the intersection of deep learning, software
            engineering, and product thinking. I&apos;ve built LLM-powered tender
            discovery platforms, real-time translation and summarization
            microservices, and AI-driven healthcare tools for dentistry—all with
            a focus on robustness, scalability, and measurable impact.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
            I think like a founder: I care about shipping systems that move
            metrics, align with business strategy, and can grow into full-stack
            AI products or even companies. My long-term focus is building an
            AI agency from Egypt that serves global clients with
            automation-first, agent-driven solutions.
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <div className="relative aspect-[4/4] w-full max-w-sm mx-auto md:mx-0 overflow-hidden rounded-3xl border border-white/10 shadow-2xl md:aspect-[4/5]">
            <Image
              src="/profile.jpg"
              alt="Ahmed Elsayed"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>
          <div className="glass rounded-3xl p-5">
            <div className="flex items-center gap-4">
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-slate-800">
                <Image src="/profile.jpg" alt="Ahmed Elsayed" fill className="object-cover object-top" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Profile
                </div>
                <div className="text-sm font-semibold text-slate-50">
                  AI Engineer & Future AI Agency Founder
                </div>
              </div>
            </div>
            <dl className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-300">
              <div className="rounded-2xl bg-white/5 p-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-slate-400">
                  Years in AI
                </dt>
                <dd className="mt-1 text-xl font-semibold text-slate-50">
                  3+
                </dd>
                <p className="mt-1 text-xs text-slate-400">
                  Hands-on with LLMs, CV, NLP & agents
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-slate-400">
                  Graduate
                </dt>
                <dd className="mt-1 text-xl font-semibold text-slate-50">
                  AI Engineering
                </dd>
                <p className="mt-1 text-xs text-slate-400">
                  Alamein International University
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-slate-400">
                  Key Tech
                </dt>
                <dd className="mt-1 text-base font-semibold text-slate-50">
                  Python, PyTorch, TensorFlow, LangChain, n8n
                </dd>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-slate-400">
                  Industries
                </dt>
                <dd className="mt-1 text-base font-semibold text-slate-50">
                  Healthcare, SaaS, Gov Tenders, Automation
                </dd>
              </div>
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

