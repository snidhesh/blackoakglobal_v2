import Image from "next/image";
import { Download } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionMark } from "@/components/ui/SectionMark";
import { Reveal } from "@/components/ui/Reveal";
import { ContactBand } from "@/components/marketing/ContactBand";
import { integratedReport } from "@/content/report";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "The BlackOak Report",
  path: "/report",
  description: `${integratedReport.title} — ${integratedReport.subtitle}`,
  image: integratedReport.cover,
});

export default function ReportPage() {
  return (
    <>
      <PageHero
        eyebrow={`Integrated Report ${integratedReport.year}`}
        title={integratedReport.title}
        intro={integratedReport.subtitle}
      />

      {/* Cover + download */}
      <Section tone="bone" pad="loose">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 items-center">
            <Reveal className="lg:col-span-6">
              <div className="relative aspect-[3/4] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)]">
                <Image
                  src={integratedReport.cover}
                  alt={integratedReport.title}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
            <div className="lg:col-span-6 lg:pl-12">
              <Reveal>
                <SectionMark>Access the report</SectionMark>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-8 text-lg leading-relaxed text-[var(--color-muted)]">
                  A single, principal-authored document covering the firm’s posture, the
                  markets we serve, and the outlook that informs our capital deployment for
                  the year ahead. Available as a downloadable PDF.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-10">
                  <a
                    href={integratedReport.pdfUrl}
                    className="inline-flex items-center gap-3 bg-[var(--color-ink)] text-[var(--color-paper)] px-7 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.24em] hover:bg-[var(--color-accent)] transition-colors"
                  >
                    Download PDF <Download size={14} strokeWidth={1.5} />
                  </a>
                </div>
              </Reveal>

              <div className="mt-16 grid grid-cols-3 gap-8 border-t border-[var(--color-hairline)] pt-10">
                {integratedReport.highlights.map((h, i) => (
                  <Reveal key={h.label} delay={0.1 + i * 0.05}>
                    <div className="font-editorial text-3xl tabular text-[var(--color-ink)]">
                      {h.value}
                    </div>
                    <div className="mt-3 text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] leading-relaxed">
                      {h.label}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Table of contents */}
      <Section tone="paper" pad="loose">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionMark>Table of contents</SectionMark>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-8 font-editorial text-4xl md:text-5xl leading-[1.05] text-[var(--color-ink)]">
                  Inside the report.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <ol className="border-t border-[var(--color-hairline-strong)]">
                {integratedReport.sections.map((s, i) => (
                  <Reveal
                    key={s.chapter}
                    delay={i * 0.04}
                    className="grid grid-cols-[4rem_1fr] items-center gap-8 border-b border-[var(--color-hairline)] py-6 md:py-8"
                  >
                    <div className="font-editorial text-2xl md:text-3xl text-[var(--color-accent)] tabular">
                      {s.chapter}
                    </div>
                    <div className="font-editorial text-xl md:text-2xl text-[var(--color-ink)]">
                      {s.title}
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      <ContactBand />
    </>
  );
}
