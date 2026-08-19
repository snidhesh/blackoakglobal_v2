import Link from "next/link";
import { Download, LogOut } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionMark } from "@/components/ui/SectionMark";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/marketing/PageHero";
import { portalContent } from "@/content/portal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Investor Portal",
  path: "/investors",
  description: "BlackOak Global Investor Portal — limited-partner updates, quarterly reports, and capital calls.",
});

export default function InvestorPortalPage() {
  return (
    <>
      <PageHero
        eyebrow="Investor Portal"
        title={portalContent.greeting}
        intro={portalContent.intro}
      />

      {/* Fund summary */}
      <Section tone="bone" pad="loose">
        <Container>
          <Reveal>
            <SectionMark>Fund II — snapshot</SectionMark>
          </Reveal>
          <dl className="mt-12 grid gap-px bg-[var(--color-hairline)] border border-[var(--color-hairline)] md:grid-cols-3 lg:grid-cols-6">
            {portalContent.summary.map((row) => (
              <div key={row.label} className="bg-[var(--color-bone)] p-6 md:p-8">
                <dt className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  {row.label}
                </dt>
                <dd className="mt-3 font-editorial text-2xl md:text-3xl tabular text-[var(--color-ink)]">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      {/* Updates */}
      <Section tone="paper" pad="loose">
        <Container>
          <div className="mb-12">
            <Reveal>
              <SectionMark>Recent updates</SectionMark>
            </Reveal>
          </div>
          <ul className="border-t border-[var(--color-hairline-strong)]">
            {portalContent.updates.map((u, i) => (
              <Reveal
                key={u.title}
                delay={i * 0.04}
                className="grid gap-6 md:grid-cols-12 items-start border-b border-[var(--color-hairline)] py-8 md:py-12"
              >
                <div className="md:col-span-3">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
                    {u.date}
                  </div>
                </div>
                <div className="md:col-span-6">
                  <h3 className="font-editorial text-xl md:text-2xl text-[var(--color-ink)]">
                    {u.title}
                  </h3>
                  <p className="mt-3 text-[var(--color-muted)] leading-relaxed">
                    {u.body}
                  </p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <a
                    href={u.href}
                    className="inline-flex items-center gap-3 link-underline font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-ink)]"
                  >
                    Download
                    <Download size={14} strokeWidth={1.5} />
                  </a>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* IR contact + logout */}
      <Section tone="bone" pad="loose">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 items-start">
            <div className="lg:col-span-8">
              <Reveal>
                <SectionMark>Investor Relations</SectionMark>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-8 font-editorial text-3xl md:text-4xl leading-tight text-[var(--color-ink)]">
                  {portalContent.contact.name}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-6 space-y-2 text-[var(--color-muted)]">
                  <p>
                    <a
                      href={`mailto:${portalContent.contact.email}`}
                      className="link-underline text-[var(--color-ink)]"
                    >
                      {portalContent.contact.email}
                    </a>
                  </p>
                  <p>{portalContent.contact.phone}</p>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <form method="POST" action="/api/investors/logout">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 border border-[var(--color-ink)]/20 px-6 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-ink)] hover:border-[var(--color-ink)] transition-colors"
                >
                  Sign out <LogOut size={14} strokeWidth={1.5} />
                </button>
              </form>
              <div className="mt-6">
                <Link
                  href="/report"
                  className="link-underline text-[11px] uppercase tracking-[0.22em] font-semibold text-[var(--color-ink)]"
                >
                  View the public firm report →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
