import { PageHero } from "@/components/marketing/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionMark } from "@/components/ui/SectionMark";
import { Reveal } from "@/components/ui/Reveal";
import { AnchorNumber } from "@/components/ui/AnchorNumber";
import { ContactBand } from "@/components/marketing/ContactBand";
import { ReportBand } from "@/components/marketing/ReportBand";
import { sustainability } from "@/content/sustainability";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sustainability",
  path: "/sustainability",
  description:
    "Environmental, social, and governance considerations embedded in BlackOak Global’s underwriting process — not an overlay on it.",
});

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title={sustainability.hero.tagline}
        intro={sustainability.hero.intro}
      />

      {/* Impact numbers */}
      <Section tone="bone" pad="loose">
        <Container>
          <div className="mb-12 md:mb-16">
            <Reveal>
              <SectionMark>Cumulative impact</SectionMark>
            </Reveal>
          </div>
          <div className="grid gap-12 md:gap-16 md:grid-cols-3 border-t border-[var(--color-hairline-strong)] pt-12">
            {sustainability.impact.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.05}>
                <AnchorNumber value={m.value} label={m.label} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Three pillars */}
      <Section id="pillars" tone="paper" pad="loose">
        <Container>
          <div className="mb-16 md:mb-20">
            <Reveal>
              <SectionMark>The Three Pillars</SectionMark>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-8 font-editorial text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] text-[var(--color-ink)] max-w-3xl">
                Environmental. Social. Governance.
              </h2>
            </Reveal>
          </div>
          <div className="space-y-24 md:space-y-32">
            {sustainability.pillars.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 0.05}
                className="grid gap-12 lg:grid-cols-12 items-start border-t border-[var(--color-hairline-strong)] pt-12"
              >
                <div className="lg:col-span-4">
                  <div className="font-editorial text-6xl md:text-7xl text-[var(--color-accent)] leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-8 font-editorial text-3xl md:text-4xl text-[var(--color-ink)]">
                    {p.title}
                  </h3>
                </div>
                <div className="lg:col-span-8 lg:pl-12 lg:border-l lg:border-[var(--color-hairline)]">
                  <p className="text-lg leading-relaxed text-[var(--color-ink)]/80 max-w-2xl">
                    {p.body}
                  </p>
                  <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2 max-w-2xl">
                    {p.capabilities.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-3 border-t border-[var(--color-hairline)] pt-3 text-sm text-[var(--color-ink)]"
                      >
                        <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Frameworks */}
      <Section tone="bone" pad="loose">
        <Container>
          <Reveal>
            <SectionMark>Frameworks & standards</SectionMark>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-8 max-w-3xl font-editorial text-2xl md:text-3xl leading-tight text-[var(--color-ink)]">
              We align to internationally recognised frameworks — measured, disclosed, and reviewed at board level.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sustainability.frameworks.map((f) => (
              <div
                key={f}
                className="border border-[var(--color-hairline-strong)] px-6 py-8 text-center"
              >
                <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink)] font-medium">
                  {f}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <ReportBand />
      <ContactBand />
    </>
  );
}
