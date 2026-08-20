import type { MetadataRoute } from "next";
import { siteUrl as importedSiteUrl } from "@/lib/seo";

const FALLBACK = "https://blackoakglobal.com";

export default function robots(): MetadataRoute.Robots {
  const base = (importedSiteUrl || "").trim() || FALLBACK;
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/investors"] },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
