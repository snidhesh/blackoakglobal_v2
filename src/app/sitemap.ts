import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { insights } from "@/content/insights";
import { deals } from "@/content/portfolio";
import { siteUrl as importedSiteUrl } from "@/lib/seo";

const FALLBACK = "https://blackoakglobal.com";

// Hard-guard: if the imported siteUrl is somehow empty (stale build cache,
// misconfigured env, etc.), fall back to the canonical URL so `new URL()`
// downstream in Next.js's sitemap serialiser never receives an empty string.
function absolute(path: string): string {
  const base = (importedSiteUrl || "").trim() || FALLBACK;
  try {
    return new URL(path, base).toString();
  } catch {
    return new URL(path, FALLBACK).toString();
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = [
    "/",
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
      url: absolute(path),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...services.map((s) => ({
      url: absolute(`/what-we-do/${s.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...deals.map((d) => ({
      url: absolute(`/portfolio/${d.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...insights.map((i) => ({
      url: absolute(`/insights/${i.slug}`),
      lastModified: new Date(i.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
