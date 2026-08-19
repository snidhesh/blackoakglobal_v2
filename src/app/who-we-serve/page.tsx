import { PageHero } from "@/components/marketing/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionMark } from "@/components/ui/SectionMark";
import { Reveal } from "@/components/ui/Reveal";
import { ContactBand } from "@/components/marketing/ContactBand";
import { clientProfiles, clientStats, distinctionPillars } from "@/content/clients";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Who We Serve",
  path: "/who-we-serve",
  description:
    "BlackOak Global partners with institutional investors, sovereign wealth funds, single- and multi-family offices, and high-net-worth principals across the UAE, GCC, and international markets.",
});

export default function WhoWeServePage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Serve"
        title="A carefully defined group of principals."
        intro="We work with a small number of clients each year. Not because of capacity, but because genuine advisory demands depth of relationship — not volume of transactions."
      />

      {/* Stats strip */}
      <Section tone="ink" pad="narrow">
        <Container>
          <div className="grid gap-10 md:grid-cols-4">
            {clientStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div className="font-editorial text-4xl md:text-5xl tabular text-[var(--color-paper)]">
                  {s.value}
                </div>
                <div className="mt-4 text-[10px] uppercase tracking-[0.22em] text-[var(--color-paper)]/60 leading-relaxed">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Six client profiles */}
      <Section tone="paper" pad="loose">
        <Container>
          <div className="mb-16 md:mb-20 grid gap-8 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <SectionMark>06 Client Profiles</SectionMark>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-8 font-editorial text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] text-[var(--color-ink)]">
                  The principals we serve.
                </h2>
              </Reveal>
            </div>
          </div>
          <div className="grid gap-px border border-[var(--color-hairline)] bg-[var(--color-hairline)] md:grid-cols-2 lg:grid-cols-3">
            {clientProfiles.map((p, i) => (
              <Reveal
                key={p.num}
                delay={i * 0.04}
                className="bg-[var(--color-paper)] p-8 md:p-12 flex flex-col"
              >
                <div className="font-editorial text-4xl md:text-5xl text-[var(--color-accent)] tabular">
                  {p.num}
                </div>
                <div className="mt-6 section-mark">{p.type}</div>
                <h3 className="mt-4 font-editorial text-xl md:text-2xl leading-tight text-[var(--color-ink)]">
                  {p.title}
                </h3>
                <div className="my-6 h-px w-12 bg-[var(--color-ink)]" />
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Distinction pillars */}
      <Section tone="bone" pad="loose">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionMark>Why BlackOak</SectionMark>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-8 font-editorial text-3xl md:text-4xl lg:text-5xl leading-[1.05] text-[var(--color-ink)]">
                  A different kind of firm — for discerning principals.
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-8 max-w-md text-lg text-[var(--color-muted)] leading-relaxed">
                  BlackOak is not structured for volume. It is structured for results.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <ul className="border-t border-[var(--color-hairline-strong)]">
                {distinctionPillars.map((d, i) => (
                  <Reveal
                    key={d.numeral}
                    delay={i * 0.05}
                    className="grid grid-cols-[3rem_1fr] gap-8 border-b border-[var(--color-hairline)] py-8 md:py-10"
                  >
                    <div className="font-editorial text-3xl text-[var(--color-accent)]">
                      {d.numeral}
                    </div>
                    <div>
                      <h4 className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[var(--color-ink)]">
                        {d.title}
                      </h4>
                      <p className="mt-3 text-[var(--color-muted)] leading-relaxed">
                        {d.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <ContactBand />
    </>
  );
}
