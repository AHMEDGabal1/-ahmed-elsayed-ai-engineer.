import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const SITE_URL = "https://ahmedgabal1.github.io/-ahmed-elsayed-ai-engineer.";
const NAME = "Ahmed Elsayed";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ahmed Elsayed | AI Engineer · LLM Systems · RAG & Agentic Pipelines",
    template: "%s | Ahmed Elsayed"
  },
  description:
    "AI Engineer specializing in LLMs, RAG, and agentic pipelines. I build production-grade AI systems—from prototype to deployment—that automate, optimize, and scale businesses.",
  keywords: [
    "AI Engineer",
    "LLM Engineer",
    "RAG",
    "AI Agents",
    "LangChain",
    "LangGraph",
    "Computer Vision",
    "NLP",
    "Machine Learning",
    "Cairo",
    "Egypt",
    "Ahmed Elsayed"
  ],
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: `${NAME} — AI Engineer`,
    title: "Ahmed Elsayed | AI Engineer · LLM Systems · RAG & Agentic Pipelines",
    description:
      "Production-grade AI systems with LLMs, RAG, and agentic pipelines. From prototype to deployment.",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Elsayed | AI Engineer · LLM Systems · RAG & Agentic Pipelines",
    description:
      "Production-grade AI systems with LLMs, RAG, and agentic pipelines."
  },
  robots: { index: true, follow: true }
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  jobTitle: "AI Engineer",
  description:
    "AI Engineer specializing in LLMs, RAG, and agentic pipelines.",
  url: SITE_URL,
  email: "mailto:ahmedgabal994@gmail.com",
  telephone: "+20-101-723-0586",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressCountry: "EG"
  },
  sameAs: [
    "https://linkedin.com/in/ahmed-gabal-09a8b32a3",
    "https://github.com/AHMEDGabal1"
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Large Language Models",
    "Retrieval-Augmented Generation",
    "AI Agents",
    "Computer Vision",
    "Natural Language Processing"
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Alamein International University"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="bg-background text-stone-100 font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <div className="relative min-h-screen">
          <div className="relative">{children}</div>
        </div>
      </body>
    </html>
  );
}

