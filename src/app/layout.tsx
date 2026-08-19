import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { fraunces, jost } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { buildMetadata, siteName, siteUrl } from "@/lib/seo";
import { firm } from "@/content/firm";
import "./globals.css";

export const metadata: Metadata = buildMetadata({
  title: "Home",
  path: "/",
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: siteName,
  url: siteUrl,
  description: firm.positioning,
  logo: `${siteUrl}/favicon.svg`,
  sameAs: ["https://www.linkedin.com/company/blackoak-global"],
  address: firm.offices.map((o) => ({
    "@type": "PostalAddress",
    addressLocality: o.city,
    addressCountry: o.country,
    streetAddress: o.address,
  })),
  contactPoint: firm.offices.map((o) => ({
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: o.phone,
    areaServed: o.country,
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jost.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
