import Image from "next/image";
import { Hero } from "@/components/marketing/Hero";
import { AnchorNumber } from "@/components/ui/AnchorNumber";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionMark } from "@/components/ui/SectionMark";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceTiles } from "@/components/marketing/ServiceTiles";
import { FeaturedInsight } from "@/components/marketing/FeaturedInsight";
import { ReportBand } from "@/components/marketing/ReportBand";
import { ContactBand } from "@/components/marketing/ContactBand";
import { firm } from "@/content/firm";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Anchor number — the signature "one huge number" */}
      <Section tone="paper" pad="loose">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionMark>By the numbers</SectionMark>
              </Reveal>
              <AnchorNumber
                value={firm.metrics[0].value}
                label={firm.metrics[0].label}
                size="hero"
                className="mt-10"
              />
            </div>
            <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-[var(--color-hairline)]">
              <div className="grid gap-12 sm:grid-cols-3 lg:grid-cols-1 lg:gap-14">
                {firm.metrics.slice(1).map((m, i) => (
                  <Reveal key={m.label} delay={0.1 + i * 0.05}>
                    <div className="font-editorial text-4xl md:text-5xl text-[var(--color-ink)] tabular">
                      {m.value}
                    </div>
                    <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-[var(--color-muted)] leading-relaxed max-w-[18ch]">
                      {m.label}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Firm brief */}
      <Section tone="bone" pad="loose">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <SectionMark>The Firm</SectionMark>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-8 font-editorial text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] text-[var(--color-ink)]">
                  A specialised firm with global reach — principal-led, discretion-first, aligned in interest.
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-8 text-lg leading-relaxed text-[var(--color-muted)] max-w-xl">
                  We invest where others see complexity. Two decades of principal experience across
                  Dubai, London, and select international markets underpin every mandate we undertake.
                  Our approach is deliberate: small by choice, disciplined by design.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="lg:col-span-6">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/who-we-are.webp"
                  alt="BlackOak Global"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover grayscale-[10%]"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* What we do — service tiles */}
      <Section tone="paper" pad="loose">
        <Container>
          <div className="mb-16 md:mb-20 lg:mb-24 grid gap-8 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <SectionMark>What We Do</SectionMark>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-8 font-editorial text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] text-[var(--color-ink)]">
                  Six practices, one philosophy.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="lg:col-span-4 lg:text-right">
              <p className="text-[var(--color-muted)] leading-relaxed">
                From private equity real estate to merchant banking — a single, discretion-first firm.
              </p>
            </Reveal>
          </div>
          <ServiceTiles />
        </Container>
      </Section>

      {/* Featured insight */}
      <Section tone="bone" pad="loose">
        <Container>
          <div className="mb-16">
            <Reveal>
              <SectionMark>Insight</SectionMark>
            </Reveal>
          </div>
          <FeaturedInsight />
        </Container>
      </Section>

      <ReportBand />
      <ContactBand />
    </>
  );
}
