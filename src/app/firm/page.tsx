import Image from "next/image";
import { PageHero } from "@/components/marketing/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionMark } from "@/components/ui/SectionMark";
import { Reveal } from "@/components/ui/Reveal";
import { ContactBand } from "@/components/marketing/ContactBand";
import { firm } from "@/content/firm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "The Firm",
  path: "/firm",
  description:
    "BlackOak Global is an international private-equity real estate and investment firm — principal-led, discretion-first, aligned in interest.",
});

export default function FirmPage() {
  return (
    <>
      <PageHero
        eyebrow="The Firm"
        title="Building legacies. Creating value."
        intro="BlackOak Global is an international investment firm pursuing value-driven opportunities in private-equity real estate — delivering institutional-grade returns across the UAE, UK, and select global markets."
      />

      {/* Philosophy */}
      <Section tone="bone" pad="loose">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionMark>Philosophy</SectionMark>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-8 font-editorial text-3xl md:text-4xl leading-[1.15] italic text-[var(--color-ink)]">
                  “We invest where others see complexity. That is where the real value lives.”
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:pl-12 lg:border-l lg:border-[var(--color-hairline)]">
              <Reveal delay={0.1}>
                <p className="text-lg leading-relaxed text-[var(--color-muted)]">
                  BlackOak was built on a single conviction: that genuine advisory demands
                  depth of relationship, not volume of transactions. The firm is small by
                  choice, principal-led by design, and structured for discretion at the
                  highest level.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted)]">
                  Every mandate carries the direct attention of senior leadership. Every
                  underwrite is grounded in two decades of principal experience across the
                  UAE, London, and the wider international market. And every relationship is
                  entered with the intent of continuity — not transaction.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values — IKEA */}
      <Section id="values" tone="paper" pad="loose">
        <Container>
          <div className="mb-16 md:mb-20">
            <Reveal>
              <SectionMark>Values</SectionMark>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-8 font-editorial text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] text-[var(--color-ink)] max-w-3xl">
                Four values. One standard.
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-px bg-[var(--color-hairline)] border border-[var(--color-hairline)] md:grid-cols-2 lg:grid-cols-4">
            {firm.values.map((v, i) => (
              <Reveal
                key={v.letter}
                delay={i * 0.05}
                className="bg-[var(--color-paper)] p-8 md:p-12"
              >
                <div className="font-editorial text-6xl md:text-7xl text-[var(--color-accent)] leading-none">
                  {v.letter}
                </div>
                <h3 className="mt-8 font-editorial text-xl md:text-2xl text-[var(--color-ink)]">
                  {v.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
                  {v.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section id="heritage" tone="bone" pad="loose">
        <Container>
          <div className="mb-16 md:mb-20">
            <Reveal>
              <SectionMark>Heritage</SectionMark>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-8 font-editorial text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] text-[var(--color-ink)] max-w-3xl">
                Two decades. One trajectory.
              </h2>
            </Reveal>
          </div>
          <ol className="grid gap-0 border-t border-[var(--color-hairline-strong)]">
            {firm.timeline.map((entry, i) => (
              <Reveal
                key={entry.year}
                delay={i * 0.04}
                className="grid gap-8 md:grid-cols-12 items-start border-b border-[var(--color-hairline)] py-10 md:py-14"
              >
                <div className="md:col-span-3">
                  <div className="font-editorial text-5xl md:text-6xl tabular text-[var(--color-ink)]">
                    {entry.year}
                  </div>
                </div>
                <div className="md:col-span-9 md:pl-12 md:border-l md:border-[var(--color-hairline)]">
                  <p className="text-lg md:text-xl leading-relaxed text-[var(--color-ink)]/80 max-w-2xl">
                    {entry.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Offices */}
      <Section id="offices" tone="paper" pad="loose">
        <Container>
          <div className="mb-16">
            <Reveal>
              <SectionMark>Offices</SectionMark>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-8 font-editorial text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] text-[var(--color-ink)]">
                Dubai and London — with reach beyond.
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-8 md:gap-12 md:grid-cols-2">
            {firm.offices.map((office, i) => (
              <Reveal key={office.city} delay={i * 0.05}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={office.image}
                    alt={office.city}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover grayscale-[15%]"
                  />
                </div>
                <div className="mt-8">
                  <div className="section-mark mb-3">{office.country}</div>
                  <h3 className="font-editorial text-3xl md:text-4xl text-[var(--color-ink)]">
                    {office.city}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
                    {office.address}
                  </p>
                  <p className="mt-1 text-base text-[var(--color-muted)]">
                    {office.phone}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Etymology */}
      <Section tone="ink" pad="loose">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionMark tone="paper">Etymology</SectionMark>
              </Reveal>
              <Reveal delay={0.05}>
                <div className="mt-8 font-editorial text-6xl md:text-7xl text-[var(--color-paper)]">
                  {firm.etymology.word}
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-4 font-editorial italic text-lg text-[var(--color-paper)]/60">
                  {firm.etymology.ipa}
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="lg:col-span-7 lg:pl-12 lg:border-l lg:border-[var(--color-paper)]/10">
              <p className="text-xl md:text-2xl leading-relaxed text-[var(--color-paper)]/90 font-editorial">
                {firm.etymology.body}
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <ContactBand />
    </>
  );
}
