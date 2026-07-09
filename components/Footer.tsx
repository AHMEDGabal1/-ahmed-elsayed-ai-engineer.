import Image from "next/image";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/ahmed-gabal-09a8b32a3" },
  { label: "GitHub", href: "https://github.com/AHMEDGabal1" },
  { label: "Email", href: "mailto:ahmedgabal994@gmail.com" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="max-width section-padding !py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-slate-800">
              <Image src="profile.jpg" alt="Ahmed Elsayed" fill className="object-cover" />
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-100">
                Ahmed Elsayed
              </div>
              <div className="text-xs text-slate-400">
                AI Engineer · LLM Systems · RAG &amp; Agents
              </div>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="transition hover:text-accent-cyan"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Ahmed Elsayed. All rights reserved.</span>
          <span>Built with Next.js, Tailwind CSS &amp; Framer Motion.</span>
        </div>
      </div>
    </footer>
  );
}
