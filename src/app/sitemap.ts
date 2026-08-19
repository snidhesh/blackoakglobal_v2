import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { insights } from "@/content/insights";
import { deals } from "@/content/portfolio";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = [
    "",
    "/firm",
    "/leadership",
    "/what-we-do",
    "/portfolio",
    "/who-we-serve",
    "/insights",
    "/sustainability",
    "/report",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...services.map((s) => ({
      url: `${siteUrl}/what-we-do/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...deals.map((d) => ({
      url: `${siteUrl}/portfolio/${d.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...insights.map((i) => ({
      url: `${siteUrl}/insights/${i.slug}`,
      lastModified: new Date(i.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
