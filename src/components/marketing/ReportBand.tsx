import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { integratedReport } from "@/content/report";
import { Container } from "@/components/ui/Container";
import { SectionMark } from "@/components/ui/SectionMark";
import { Reveal } from "@/components/ui/Reveal";

export function ReportBand() {
  return (
    <section className="bg-[var(--color-ink)] text-[var(--color-paper)]">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 items-end py-24 md:py-36">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionMark tone="paper">Integrated Report {integratedReport.year}</SectionMark>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-8 font-editorial text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.05] text-[var(--color-paper)]">
                {integratedReport.title}
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-xl text-[var(--color-paper)]/70 text-lg leading-relaxed">
                {integratedReport.subtitle}
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/report"
                  className="inline-flex items-center gap-3 bg-[var(--color-paper)] text-[var(--color-ink)] px-7 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.24em] hover:bg-[var(--color-accent)] hover:text-[var(--color-paper)] transition-colors"
                >
                  Read the Report <ArrowUpRight size={14} strokeWidth={1.5} />
                </Link>
                <a
                  href={integratedReport.pdfUrl}
                  className="inline-flex items-center gap-3 border border-[var(--color-paper)]/30 text-[var(--color-paper)] px-7 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.24em] hover:border-[var(--color-paper)] transition-colors"
                >
                  Download PDF
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="grid grid-cols-3 gap-8 lg:gap-12 border-t border-[var(--color-paper)]/15 pt-10">
              {integratedReport.highlights.map((h) => (
                <div key={h.label}>
                  <div className="font-editorial text-3xl md:text-4xl tabular text-[var(--color-paper)]">
                    {h.value}
                  </div>
                  <div className="mt-3 text-[10px] uppercase tracking-[0.22em] text-[var(--color-paper)]/60 leading-relaxed">
                    {h.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
