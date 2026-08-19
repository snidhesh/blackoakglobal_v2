import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionMark } from "@/components/ui/SectionMark";
import { Reveal } from "@/components/ui/Reveal";
import { AnchorNumber } from "@/components/ui/AnchorNumber";
import { ContactBand } from "@/components/marketing/ContactBand";
import { deals, dealBySlug } from "@/content/portfolio";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return deals.map((d) => ({ deal: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ deal: string }>;
}): Promise<Metadata> {
  const { deal } = await params;
  const d = dealBySlug(deal);
  if (!d) return buildMetadata({ title: "Portfolio", path: "/portfolio" });
  return buildMetadata({
    title: d.asset,
    description: d.summary,
    path: `/portfolio/${d.slug}`,
    image: d.image,
  });
}

export default async function DealPage({
  params,
}: {
  params: Promise<{ deal: string }>;
}) {
  const { deal } = await params;
  const d = dealBySlug(deal);
  if (!d) notFound();

  const meta = [
    { label: "Asset", value: d.asset },
    { label: "Location", value: `${d.location}, ${d.country}` },
    { label: "Sector", value: d.sector },
    { label: "Strategy", value: d.strategy },
    { label: "Status", value: d.status },
    { label: "Year", value: String(d.year) },
    ...(d.partners ? [{ label: "Partners", value: d.partners.join(" · ") }] : []),
  ];

  const related = deals.filter((x) => x.slug !== d.slug).slice(0, 3);

  return (
    <>
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 bg-[var(--color-paper)]">
        <Container>
          <Reveal>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 mb-10 link-underline font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]"
            >
              <ArrowLeft size={14} strokeWidth={1.5} />
              All Portfolio
            </Link>
          </Reveal>

          <div className="grid gap-16 lg:grid-cols-12 items-end">
            <div className="lg:col-span-7">
              <Reveal delay={0.05}>
                <SectionMark>{d.location} · {d.year}</SectionMark>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-8 font-editorial text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] text-[var(--color-ink)]">
                  {d.headline}
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-8 max-w-xl text-lg text-[var(--color-muted)] leading-relaxed">
                  {d.summary}
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.15} className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={d.image}
                  alt={d.asset}
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

      <Section tone="bone" pad="loose">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]/85 max-w-2xl">
                {d.body.map((p, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <p>{p}</p>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 lg:pl-12 lg:border-l lg:border-[var(--color-hairline)]">
              <Reveal>
                <SectionMark>Mandate detail</SectionMark>
              </Reveal>
              <dl className="mt-8 border-t border-[var(--color-hairline)]">
                {meta.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-3 gap-4 border-b border-[var(--color-hairline)] py-4"
                  >
                    <dt className="text-[10.5px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                      {row.label}
                    </dt>
                    <dd className="col-span-2 text-[var(--color-ink)]">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper" pad="loose">
        <Container>
          <AnchorNumber value={d.anchor.value} label={d.anchor.label} size="hero" />
        </Container>
      </Section>

      {/* Related */}
      <Section tone="bone" pad="loose">
        <Container>
          <Reveal>
            <SectionMark>Related mandates</SectionMark>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/portfolio/${r.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.asset}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover grayscale-[15%] transition-all duration-700 group-hover:grayscale-0"
                  />
                </div>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <h3 className="font-editorial text-xl leading-tight text-[var(--color-ink)]">
                    {r.asset}
                  </h3>
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className="text-[var(--color-muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <ContactBand />
    </>
  );
}
