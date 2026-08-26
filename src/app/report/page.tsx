import { Container } from "@/components/ui/Container";
import { SectionMark } from "@/components/ui/SectionMark";
import { Reveal } from "@/components/ui/Reveal";
import { ContactBand } from "@/components/marketing/ContactBand";
import { gulfCapitalReport } from "@/content/report";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `${gulfCapitalReport.title} — Coming Soon`,
  path: "/report",
  description: gulfCapitalReport.intro,
});

export default function ReportPage() {
  return (
    <>
      <section className="relative pt-40 md:pt-48 pb-24 md:pb-32 bg-[var(--color-paper)]">
        <Container>
          <div className="max-w-5xl">
            <Reveal>
              <SectionMark>{gulfCapitalReport.title}</SectionMark>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-10 font-editorial text-[clamp(3rem,14vw,11rem)] leading-[0.92] tracking-[-0.03em] text-[var(--color-ink)]">
                Coming
                <br />
                <span className="text-[var(--color-accent)]">Soon.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-12 flex items-center gap-5">
                <span aria-hidden className="block h-px w-16 bg-[var(--color-accent)]" />
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-accent)]">
                  Publication forthcoming
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-12 max-w-2xl text-lg md:text-xl leading-relaxed text-[var(--color-muted)]">
                {gulfCapitalReport.intro}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <ContactBand />
    </>
  );
}
