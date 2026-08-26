import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionMark } from "@/components/ui/SectionMark";
import { Reveal } from "@/components/ui/Reveal";
import { AnchorNumber } from "@/components/ui/AnchorNumber";
import { ContactBand } from "@/components/marketing/ContactBand";
import { services, serviceBySlug } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const s = serviceBySlug(service);
  if (!s) return buildMetadata({ title: "What We Do", path: "/what-we-do" });
  return buildMetadata({
    title: s.title,
    description: s.subtitle,
    path: `/what-we-do/${s.slug}`,
    image: s.image,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const s = serviceBySlug(service);
  if (!s) notFound();

  return (
    <>
      {/* Editorial hero with image */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 bg-[var(--color-paper)]">
        <Container>
          <Reveal>
            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-2 mb-10 link-underline font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]"
            >
              <ArrowLeft size={14} strokeWidth={1.5} />
              All Practices
            </Link>
          </Reveal>

          <div className="grid gap-16 lg:grid-cols-12 items-end">
            <div className="lg:col-span-7">
              <Reveal delay={0.05}>
                <SectionMark>{s.title}</SectionMark>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-8 font-editorial text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] text-[var(--color-ink)]">
                  {s.heading}
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-8 max-w-xl text-lg text-[var(--color-muted)] leading-relaxed">
                  {s.subtitle}
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.15} className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover grayscale-[10%]"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Body + capabilities */}
      <Section tone="bone" pad="loose">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]/85 max-w-2xl">
                {s.body.map((p, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <p>{p}</p>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 lg:pl-12 lg:border-l lg:border-[var(--color-hairline)]">
              <Reveal>
                <SectionMark>Key Capabilities</SectionMark>
              </Reveal>
              <ul className="mt-8 space-y-4">
                {s.capabilities.map((c, i) => (
                  <Reveal key={c} delay={0.05 + i * 0.03}>
                    <li className="flex items-start gap-4 border-t border-[var(--color-hairline)] pt-4">
                      <Check
                        size={14}
                        strokeWidth={1.5}
                        className="mt-1.5 shrink-0 text-[var(--color-accent)]"
                      />
                      <span className="text-[var(--color-ink)]">{c}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Anchor stat */}
      <Section tone="paper" pad="loose">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <SectionMark>Practice signal</SectionMark>
              </Reveal>
              <AnchorNumber
                value={s.anchor.value}
                label={s.anchor.label}
                className="mt-10"
              />
            </div>
            <Reveal delay={0.1} className="lg:col-span-6 lg:pl-12 lg:border-l lg:border-[var(--color-hairline)]">
              <SectionMark>Related</SectionMark>
              <ul className="mt-8 divide-y divide-[var(--color-hairline)] border-t border-[var(--color-hairline)]">
                {services
                  .filter((o) => o.slug !== s.slug)
                  .slice(0, 4)
                  .map((o) => (
                    <li key={o.slug}>
                      <Link
                        href={`/what-we-do/${o.slug}`}
                        className="group flex items-center justify-between py-5"
                      >
                        <span className="font-editorial text-xl text-[var(--color-ink)]">
                          {o.title}
                        </span>
                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.5}
                          className="text-[var(--color-muted)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-ink)]"
                        />
                      </Link>
                    </li>
                  ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      <ContactBand />
    </>
  );
}
