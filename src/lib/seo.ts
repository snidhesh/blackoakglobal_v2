import type { Metadata } from "next";

const DEFAULT_SITE_URL = "https://blackoakglobal.com";

// Normalise: ignore empty / whitespace values (which slip past `??`), strip
// trailing slashes, and fall back to the canonical URL when unset or invalid.
function normaliseSiteUrl(raw: string | undefined): string {
  const trimmed = raw?.trim();
  if (!trimmed) return DEFAULT_SITE_URL;
  try {
    return new URL(trimmed).toString().replace(/\/$/, "");
  } catch {
    return DEFAULT_SITE_URL;
  }
}

const SITE_URL = normaliseSiteUrl(
  process.env.SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL,
);
const SITE_NAME = "BlackOak Global";
const DEFAULT_DESCRIPTION =
  "BlackOak Global — an international private-equity real estate and investment firm. Capital deployed with conviction across the UAE, UK, and select global markets.";

type PageMeta = {
  title: string;
  description?: string;
  path: string;
  image?: string;
};

export function buildMetadata({ title, description, path, image }: PageMeta): Metadata {
  const desc = description ?? DEFAULT_DESCRIPTION;
  const url = `${SITE_URL}${path}`;
  return {
    metadataBase: new URL(SITE_URL),
    title: title === "Home" ? SITE_NAME : `${title} — ${SITE_NAME}`,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      title,
      description: desc,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: image ? [image] : undefined,
    },
    robots: { index: true, follow: true },
  };
}

export const siteUrl = SITE_URL;
export const siteName = SITE_NAME;
