import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gulfCapitalReport } from "@/content/report";
import { Container } from "@/components/ui/Container";
import { SectionMark } from "@/components/ui/SectionMark";
import { Reveal } from "@/components/ui/Reveal";

export function ReportBand() {
  return (
    <section className="bg-[var(--color-ink)] text-[var(--color-paper)]">
      <Container>
        <div className="max-w-3xl py-24 md:py-36">
          <Reveal>
            <SectionMark tone="paper">{gulfCapitalReport.eyebrow}</SectionMark>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-8 font-editorial text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.05] text-[var(--color-paper)]">
              {gulfCapitalReport.title}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-xl text-[var(--color-paper)]/70 text-lg leading-relaxed">
              {gulfCapitalReport.intro}
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10">
              <Link
                href="/report"
                className="inline-flex items-center gap-3 bg-[var(--color-paper)] text-[var(--color-ink)] px-7 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.24em] hover:bg-[var(--color-accent)] hover:text-[var(--color-paper)] transition-colors"
              >
                Learn more <ArrowUpRight size={14} strokeWidth={1.5} />
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
