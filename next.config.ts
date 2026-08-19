import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "static.zawya.com" },
      { protocol: "https", hostname: "blackoak-re.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/about-us", destination: "/firm", permanent: true },
      { source: "/our-people", destination: "/leadership", permanent: true },
      { source: "/media-centre", destination: "/insights", permanent: true },
      { source: "/insights/news-and-press", destination: "/insights", permanent: true },
      {
        source: "/insights/news-and-press/:slug",
        destination: "/insights/:slug",
        permanent: true,
      },
      { source: "/insights/market-reports", destination: "/insights", permanent: true },
      {
        source: "/insights/market-reports/:slug",
        destination: "/insights/:slug",
        permanent: true,
      },
      { source: "/terms-of-services", destination: "/terms", permanent: true },
    ];
  },
};

export default nextConfig;
