import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { firm } from "@/content/firm";

const linkCols = [
  {
    title: "The Firm",
    links: [
      { label: "About", href: "/firm" },
      { label: "Leadership", href: "/leadership" },
      { label: "Who We Serve", href: "/who-we-serve" },
      { label: "Sustainability", href: "/sustainability" },
    ],
  },
  {
    title: "What We Do",
    links: [
      { label: "Private Equity Real Estate", href: "/what-we-do/private-equity-real-estate" },
      { label: "Investments", href: "/what-we-do/investments" },
      { label: "Private Funds & REITs", href: "/what-we-do/private-funds" },
      { label: "Development & Asset Management", href: "/what-we-do/asset-management" },
      { label: "Merchant Banking", href: "/what-we-do/banking" },
      { label: "Advisory & Consulting", href: "/what-we-do/consulting" },
    ],
  },
  {
    title: "Insights",
    links: [
      { label: "All Insights", href: "/insights" },
      { label: "The Gulf Capital Report", href: "/report" },
      { label: "Portfolio", href: "/portfolio" },
      // Investor Portal link hidden for now
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-paper)]">
      <Container>
        <div className="grid gap-16 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-4">
            <Logo tone="paper" size="lg" />
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-[var(--color-paper)]/70">
              An international private-equity real estate and investment firm.
              Capital deployed with conviction across the UAE, UK, and select global markets.
            </p>
          </div>

          {linkCols.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <div className="section-mark text-[var(--color-paper)]/60">{col.title}</div>
              <ul className="mt-6 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-paper)]/80 hover:text-[var(--color-paper)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <div className="section-mark text-[var(--color-paper)]/60">Offices</div>
            <ul className="mt-6 space-y-6">
              {firm.offices.map((o) => (
                <li key={o.city} className="text-sm text-[var(--color-paper)]/80">
                  <div className="font-editorial text-base text-[var(--color-paper)]">
                    {o.city}
                  </div>
                  <div className="mt-1 leading-relaxed text-[var(--color-paper)]/60">
                    {o.address}
                  </div>
                  <div className="mt-1 text-[var(--color-paper)]/60">{o.phone}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-paper)]/10 py-8 md:flex md:items-center md:justify-between">
          <p className="text-xs text-[var(--color-paper)]/50">
            © {year} BlackOak Global. All rights reserved.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-xs text-[var(--color-paper)]/50 md:mt-0">
            <Link href="/privacy" className="hover:text-[var(--color-paper)]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--color-paper)]">Terms of Service</Link>
            <span>Regulated activity conducted through DIFC / DFSA authorised affiliates.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
