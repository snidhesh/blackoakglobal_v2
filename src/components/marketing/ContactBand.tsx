import Link from "next/link";
import { firm } from "@/content/firm";
import { Container } from "@/components/ui/Container";
import { SectionMark } from "@/components/ui/SectionMark";
import { Reveal } from "@/components/ui/Reveal";

export function ContactBand() {
  return (
    <section className="bg-[var(--color-paper)]">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 py-24 md:py-36 border-t border-[var(--color-hairline-strong)]">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionMark>Begin a conversation</SectionMark>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-8 font-editorial text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] text-[var(--color-ink)]">
                Genuine advisory requires depth of relationship, not volume of transactions.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-xl text-[var(--color-muted)] text-lg leading-relaxed">
                We work with a small number of principals each year. If your situation demands
                a different kind of conversation, we welcome an introductory call.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-[var(--color-ink)] text-[var(--color-paper)] px-7 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.24em] hover:bg-[var(--color-accent)] transition-colors"
                >
                  Contact BlackOak
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:pl-12 lg:border-l lg:border-[var(--color-hairline)]">
            <div className="grid gap-10 md:grid-cols-2">
              {firm.offices.map((office, i) => (
                <Reveal key={office.city} delay={0.1 + i * 0.05}>
                  <div className="section-mark mb-4">{office.city}</div>
                  <p className="text-[var(--color-ink)] font-editorial text-xl leading-tight">
                    {office.address}
                  </p>
                  <p className="mt-4 text-sm text-[var(--color-muted)]">{office.phone}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.25}>
              <div className="mt-12 pt-8 border-t border-[var(--color-hairline)]">
                <div className="section-mark mb-3">Enquiries</div>
                <a
                  href="mailto:enquiries@blackoakglobal.com"
                  className="font-editorial text-2xl text-[var(--color-ink)] link-underline"
                >
                  enquiries@blackoakglobal.com
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
