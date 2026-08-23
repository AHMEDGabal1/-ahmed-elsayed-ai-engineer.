export type RepositoryCategory = "All" | "AI & ML" | "Web apps" | "Web experiences" | "Tools & docs" | "Profile" | "Other";

export type Repository = {
  name: string;
  title: string;
  description: string;
  url: string;
  homepage: string | null;
  language: string;
  stars: number;
  fork: boolean;
  archived: boolean;
  updatedAt: string;
  category: Exclude<RepositoryCategory, "All">;
};

export const repositories: Repository[] = [
  {
    "name": "metro-egypt-assets",
    "title": "Metro Egypt Assets",
    "description": "Public assets (screenshots, media) for the مترو Egypt app",
    "url": "https://github.com/AHMEDGabal1/metro-egypt-assets",
    "homepage": null,
    "language": "Other",
    "stars": 0,
    "fork": false,
    "archived": false,
    "updatedAt": "2026-08-18T14:03:27Z",
    "category": "Other"
  },
  {
    "name": "--GestureAI---AI-Powered-Hand-Gesture-Writing-Application",
    "title": "GestureAI AI Powered Hand Gesture Writing Application",
    "description": "A full-stack web application that uses AI hand tracking to enable virtual writing, erasing, and gesture-based UI control in real-time.",
    "url": "https://github.com/AHMEDGabal1/--GestureAI---AI-Powered-Hand-Gesture-Writing-Application",
    "homepage": null,
    "language": "JavaScript",
    "stars": 0,
    "fork": false,
    "archived": false,
    "updatedAt": "2026-08-15T15:33:15Z",
    "category": "AI & ML"
  },
  {
    "name": "arabbot-studio",
    "title": "Arabbot Studio",
    "description": "Public project by Ahmed Elsayed.",
    "url": "https://github.com/AHMEDGabal1/arabbot-studio",
    "homepage": null,
    "language": "JavaScript",
    "stars": 1,
    "fork": false,
    "archived": false,
    "updatedAt": "2026-08-15T15:27:47Z",
    "category": "AI & ML"
  },
  {
    "name": "AHMEDGabal1",
    "title": "AHMEDGabal1",
    "description": "Professional profile README for Ahmed Elsayed — AI Engineer specializing in LLM systems, RAG, agentic workflows, and computer vision",
    "url": "https://github.com/AHMEDGabal1/AHMEDGabal1",
    "homepage": null,
    "language": "Other",
    "stars": 0,
    "fork": false,
    "archived": false,
    "updatedAt": "2026-08-15T10:07:42Z",
    "category": "Profile"
  },
  {
    "name": "3d-website",
    "title": "3d Website",
    "description": "Nexus AI — immersive 3D interactive landing page built with React, Three.js, Tailwind CSS, and Framer Motion",
    "url": "https://github.com/AHMEDGabal1/3d-website",
    "homepage": "https://3d-website1-ruddy.vercel.app",
    "language": "JavaScript",
    "stars": 1,
    "fork": false,
    "archived": false,
    "updatedAt": "2026-08-15T10:01:40Z",
    "category": "Web experiences"
  },
  {
    "name": "translation-and-sumerization-platform-",
    "title": "Translation And Sumerization Platform",
    "description": "AI-powered document translation and summarization platform — React, TypeScript, Docker, Material UI",
    "url": "https://github.com/AHMEDGabal1/translation-and-sumerization-platform-",
    "homepage": null,
    "language": "TypeScript",
    "stars": 0,
    "fork": false,
    "archived": false,
    "updatedAt": "2026-08-15T10:01:38Z",
    "category": "AI & ML"
  },
  {
    "name": "opencode-project-compass",
    "title": "Opencode Project Compass",
    "description": "project-compass: opencode skill that detects your stack and recommends/installs the right skills, plugins, MCP servers, and AI tools.",
    "url": "https://github.com/AHMEDGabal1/opencode-project-compass",
    "homepage": null,
    "language": "Other",
    "stars": 0,
    "fork": false,
    "archived": false,
    "updatedAt": "2026-07-15T14:37:32Z",
    "category": "Tools & docs"
  },
  {
    "name": "-ahmed-elsayed-ai-engineer.",
    "title": "Ahmed Elsayed AI Engineer.",
    "description": "Premium personal portfolio — Next.js 14, TypeScript, Tailwind CSS. AI Engineer specializing in LLMs, agents, and intelligent automation.",
    "url": "https://github.com/AHMEDGabal1/-ahmed-elsayed-ai-engineer.",
    "homepage": null,
    "language": "TypeScript",
    "stars": 0,
    "fork": false,
    "archived": false,
    "updatedAt": "2026-07-15T07:47:01Z",
    "category": "Web experiences"
  },
  {
    "name": "pr-prep",
    "title": "Pr Prep",
    "description": "Open-source agent skill: turn git changes into a ship-ready conventional commit, PR description, and pre-merge self-check.",
    "url": "https://github.com/AHMEDGabal1/pr-prep",
    "homepage": null,
    "language": "Other",
    "stars": 0,
    "fork": false,
    "archived": false,
    "updatedAt": "2026-07-10T08:38:37Z",
    "category": "Tools & docs"
  },
  {
    "name": "document-standards-skill",
    "title": "Document Standards Skill",
    "description": "Claude Agent Skill for internationally-recognized document standards: structures, typography, citations, and RTL/bilingual layouts.",
    "url": "https://github.com/AHMEDGabal1/document-standards-skill",
    "homepage": null,
    "language": "Other",
    "stars": 0,
    "fork": false,
    "archived": false,
    "updatedAt": "2026-07-10T06:58:47Z",
    "category": "Tools & docs"
  },
  {
    "name": "document-craft",
    "title": "Document Craft",
    "description": "Open-source Agent Skill for standards-based professional document creation (ISO/IEEE/APA/PDF-A, i18n/RTL).",
    "url": "https://github.com/AHMEDGabal1/document-craft",
    "homepage": null,
    "language": "Python",
    "stars": 0,
    "fork": false,
    "archived": false,
    "updatedAt": "2026-07-09T09:23:29Z",
    "category": "Tools & docs"
  },
  {
    "name": "Smart-Home-ERP-System",
    "title": "Smart Home ERP System",
    "description": "Comprehensive ERP for smart home businesses — inventory, sales, projects, accounting with Supabase backend",
    "url": "https://github.com/AHMEDGabal1/Smart-Home-ERP-System",
    "homepage": null,
    "language": "TypeScript",
    "stars": 0,
    "fork": false,
    "archived": false,
    "updatedAt": "2026-06-22T16:17:12Z",
    "category": "Web apps"
  },
  {
    "name": "project-phase-1",
    "title": "Project Phase 1",
    "description": "First phase of an upcoming project — repository under active development",
    "url": "https://github.com/AHMEDGabal1/project-phase-1",
    "homepage": null,
    "language": "Other",
    "stars": 0,
    "fork": false,
    "archived": false,
    "updatedAt": "2026-06-22T16:17:09Z",
    "category": "Other"
  },
  {
    "name": "UniWeb_Browser",
    "title": "UniWeb Browser",
    "description": "Custom web browser project — repository under active development",
    "url": "https://github.com/AHMEDGabal1/UniWeb_Browser",
    "homepage": null,
    "language": "Other",
    "stars": 0,
    "fork": false,
    "archived": false,
    "updatedAt": "2026-06-22T16:17:07Z",
    "category": "Web apps"
  },
  {
    "name": "GestureAI---AI-Powered-Hand-Gesture-Writing-Application",
    "title": "GestureAI AI Powered Hand Gesture Writing Application",
    "description": "AI-powered hand tracking for virtual writing, erasing, and gesture-based UI control in real-time",
    "url": "https://github.com/AHMEDGabal1/GestureAI---AI-Powered-Hand-Gesture-Writing-Application",
    "homepage": null,
    "language": "Other",
    "stars": 0,
    "fork": false,
    "archived": false,
    "updatedAt": "2026-06-22T16:17:05Z",
    "category": "AI & ML"
  },
  {
    "name": "3d-website1",
    "title": "3d Website1",
    "description": "3D interactive website deployed on Vercel — React 19, Three.js, R3F, Tailwind CSS v4, Framer Motion",
    "url": "https://github.com/AHMEDGabal1/3d-website1",
    "homepage": "https://3d-website1-ruddy.vercel.app",
    "language": "JavaScript",
    "stars": 0,
    "fork": false,
    "archived": false,
    "updatedAt": "2026-06-22T16:17:04Z",
    "category": "Web experiences"
  }
];
