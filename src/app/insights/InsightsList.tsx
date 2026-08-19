"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { insightsSorted, type Insight } from "@/content/insights";

const kinds = ["All", "Article", "Report"] as const;
type KindFilter = (typeof kinds)[number];

export function InsightsList() {
  const [kind, setKind] = useState<KindFilter>("All");
  const [year, setYear] = useState<string>("All");

  const all = insightsSorted();
  const years = useMemo(() => {
    const set = new Set(all.map((i) => i.date.slice(0, 4)));
    return ["All", ...Array.from(set).sort().reverse()];
  }, [all]);

  const filtered = all.filter((i) => {
    if (kind === "Article" && i.kind !== "article") return false;
    if (kind === "Report" && i.kind !== "report") return false;
    if (year !== "All" && !i.date.startsWith(year)) return false;
    return true;
  });

  const featured = filtered.find((i) => i.featured) ?? filtered[0];
  const rest = filtered.filter((i) => i.slug !== featured?.slug);

  return (
    <div>
      {/* Filter bar */}
      <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-y border-[var(--color-hairline-strong)] py-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="mr-4 text-[10px] uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Format
          </span>
          {kinds.map((k) => (
            <Chip key={k} active={kind === k} onClick={() => setKind(k)}>
              {k}
            </Chip>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="mr-4 text-[10px] uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Year
          </span>
          {years.map((y) => (
            <Chip key={y} active={year === y} onClick={() => setYear(y)}>
              {y}
            </Chip>
          ))}
        </div>
      </div>

      {/* Featured — typographic only, no image */}
      {featured && <FeaturedRow item={featured} />}

      {/* Grid of rest */}
      {rest.length > 0 && (
        <div className="mt-24 grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((i) => (
            <InsightCard key={i.slug} item={i} />
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <p className="py-20 text-center text-[var(--color-muted)]">
          No insights match the selected filters.
        </p>
      )}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "px-3.5 py-1.5 text-[11px] uppercase tracking-[0.14em] transition-colors border",
        active
          ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-paper)]"
          : "border-[var(--color-hairline-strong)] text-[var(--color-ink)] hover:border-[var(--color-ink)]",
      )}
    >
      {children}
    </button>
  );
}

function FeaturedRow({ item }: { item: Insight }) {
  return (
    <Link
      href={`/insights/${item.slug}`}
      className="group block border-t border-[var(--color-hairline-strong)] pt-10"
    >
      <div className="flex flex-wrap items-center gap-4 section-mark">
        <span>{item.kind === "report" ? "Featured Report" : "Featured Article"}</span>
        <span aria-hidden>·</span>
        <span>{item.displayDate}</span>
        {item.author && (
          <>
            <span aria-hidden>·</span>
            <span>{item.author}</span>
          </>
        )}
      </div>
      <h2 className="mt-8 font-editorial text-[clamp(2rem,5.5vw,4.5rem)] leading-[1.03] text-[var(--color-ink)] max-w-4xl">
        {item.title}
      </h2>
      {item.subtitle && (
        <p className="mt-6 max-w-2xl text-lg text-[var(--color-muted)] italic">
          {item.subtitle}
        </p>
      )}
      <p className="mt-8 max-w-2xl text-base leading-relaxed text-[var(--color-ink)]/85">
        {item.excerpt}
      </p>
      <div className="mt-10 inline-flex items-center gap-3 text-[var(--color-ink)] transition-transform duration-300 group-hover:translate-x-1">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em]">
          Read the {item.kind}
        </span>
        <ArrowUpRight size={14} strokeWidth={1.5} />
      </div>
    </Link>
  );
}

function InsightCard({ item }: { item: Insight }) {
  return (
    <Link href={`/insights/${item.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover grayscale-[20%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
        <span>{item.kind === "report" ? "Report" : "Article"}</span>
        <span aria-hidden>·</span>
        <span>{item.displayDate}</span>
      </div>
      <h3 className="mt-4 font-editorial text-xl md:text-2xl leading-tight text-[var(--color-ink)]">
        {item.title}
      </h3>
      <p className="mt-4 text-[var(--color-muted)] leading-relaxed text-sm line-clamp-3">
        {item.excerpt}
      </p>
    </Link>
  );
}
