import type { MetadataRoute } from "next";

const SITE_URL = "https://ahmedgabal1.github.io/-ahmed-elsayed-ai-engineer.";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
