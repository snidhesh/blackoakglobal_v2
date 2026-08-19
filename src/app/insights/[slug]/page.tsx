import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink, Download } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionMark } from "@/components/ui/SectionMark";
import { Reveal } from "@/components/ui/Reveal";
import { ContactBand } from "@/components/marketing/ContactBand";
import { insights, insightBySlug, insightsSorted } from "@/content/insights";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = insightBySlug(slug);
  if (!item) return buildMetadata({ title: "Insights", path: "/insights" });
  return buildMetadata({
    title: item.title,
    description: item.excerpt,
    path: `/insights/${item.slug}`,
    image: item.image,
  });
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = insightBySlug(slug);
  if (!item) notFound();

  const related = insightsSorted().filter((i) => i.slug !== item.slug).slice(0, 3);
  const isReport = item.kind === "report";

  return (
    <>
      <section className="relative pt-32 md:pt-40 pb-12 bg-[var(--color-paper)]">
        <Container size="narrow">
          <Reveal>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 mb-10 link-underline font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]"
            >
              <ArrowLeft size={14} strokeWidth={1.5} />
              All Insights
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex flex-wrap items-center gap-4 section-mark">
              <span>{isReport ? "Market Report" : "Article"}</span>
              <span aria-hidden>·</span>
              <span>{item.displayDate}</span>
              {item.author && (
                <>
                  <span aria-hidden>·</span>
                  <span>{item.author}</span>
                </>
              )}
              {item.category && (
                <>
                  <span aria-hidden>·</span>
                  <span>{item.category}</span>
                </>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-8 font-editorial text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.03] text-[var(--color-ink)]">
              {item.title}
            </h1>
          </Reveal>

          {item.subtitle && (
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-3xl text-lg md:text-xl italic text-[var(--color-muted)]">
                {item.subtitle}
              </p>
            </Reveal>
          )}
        </Container>
      </section>

      <section className="pb-8 md:pb-16 bg-[var(--color-paper)]">
        <Container size="narrow">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      <Section tone="paper" pad="narrow">
        <Container size="narrow">
          {/* Report highlights */}
          {isReport && item.highlights && (
            <Reveal>
              <div className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-[var(--color-hairline-strong)] py-10">
                {item.highlights.map((h) => (
                  <div key={h.label}>
                    <div className="font-editorial text-3xl md:text-4xl tabular text-[var(--color-ink)]">
                      {h.value}
                    </div>
                    <div className="mt-3 text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] leading-relaxed">
                      {h.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          {/* Body */}
          <article className="space-y-6 md:space-y-8 text-lg md:text-[1.15rem] leading-[1.75] text-[var(--color-ink)]/85">
            {item.body.map((p, i) => (
              <Reveal key={i} delay={i * 0.03}>
                <p>{p}</p>
              </Reveal>
            ))}
          </article>

          {/* External link / PDF */}
          {(item.externalUrl || item.pdfUrl) && (
            <div className="mt-14 flex flex-wrap gap-6">
              {item.externalUrl && (
                <a
                  href={item.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 link-underline font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-ink)]"
                >
                  {item.externalUrlLabel ?? "Read on source"}
                  <ExternalLink size={14} strokeWidth={1.5} />
                </a>
              )}
              {item.pdfUrl && (
                <a
                  href={item.pdfUrl}
                  className="inline-flex items-center gap-3 bg-[var(--color-ink)] text-[var(--color-paper)] px-7 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.24em] hover:bg-[var(--color-accent)] transition-colors"
                >
                  Download PDF
                  <Download size={14} strokeWidth={1.5} />
                </a>
              )}
            </div>
          )}
        </Container>
      </Section>

      {/* Related */}
      <Section tone="bone" pad="loose">
        <Container>
          <Reveal>
            <SectionMark>Continue reading</SectionMark>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/insights/${r.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover grayscale-[15%] transition-all duration-700 group-hover:grayscale-0"
                  />
                </div>
                <div className="mt-5 text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  {r.displayDate}
                </div>
                <div className="mt-3 flex items-center justify-between gap-4">
                  <h3 className="font-editorial text-xl leading-tight text-[var(--color-ink)]">
                    {r.title}
                  </h3>
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className="shrink-0 text-[var(--color-muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
