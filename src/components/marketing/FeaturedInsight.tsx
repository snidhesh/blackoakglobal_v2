import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { featuredInsight, insightsSorted } from "@/content/insights";
import { Reveal } from "@/components/ui/Reveal";

export function FeaturedInsight() {
  const featured = featuredInsight();
  const rest = insightsSorted()
    .filter((i) => i.slug !== featured.slug)
    .slice(0, 3);

  return (
    <div className="grid gap-16 lg:grid-cols-12">
      <Reveal className="lg:col-span-8">
        <Link
          href={`/insights/${featured.slug}`}
          className="group block border-t border-[var(--color-hairline-strong)] pt-10"
        >
          <div className="flex items-center gap-4 text-[var(--color-muted)] section-mark">
            <span>{featured.kind === "report" ? "Featured Report" : "Featured Article"}</span>
            <span aria-hidden>·</span>
            <span>{featured.displayDate}</span>
          </div>
          <h3 className="mt-8 font-editorial text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] text-[var(--color-ink)] max-w-3xl">
            {featured.title}
          </h3>
          {featured.subtitle && (
            <p className="mt-6 max-w-2xl text-lg text-[var(--color-muted)] italic">
              {featured.subtitle}
            </p>
          )}
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-[var(--color-ink)]/80">
            {featured.excerpt}
          </p>
          <div className="mt-10 inline-flex items-center gap-3 text-[var(--color-ink)] transition-transform duration-300 group-hover:translate-x-1">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em]">
              Read the {featured.kind}
            </span>
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </div>
        </Link>
      </Reveal>

      <div className="lg:col-span-4 space-y-10 lg:pl-8 lg:border-l lg:border-[var(--color-hairline)]">
        {rest.map((item, i) => (
          <Reveal key={item.slug} delay={0.1 + i * 0.05}>
            <Link href={`/insights/${item.slug}`} className="group flex gap-5">
              <div className="relative shrink-0 w-24 h-24 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="96px"
                  className="object-cover grayscale-[20%] transition-all duration-700 group-hover:grayscale-0"
                />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  {item.displayDate}
                </div>
                <h4 className="mt-2 font-editorial text-lg leading-tight text-[var(--color-ink)] line-clamp-3">
                  {item.title}
                </h4>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
