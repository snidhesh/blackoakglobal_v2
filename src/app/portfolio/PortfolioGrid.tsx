"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { deals, dealFilters, type Deal } from "@/content/portfolio";

type FilterKey = "sector" | "strategy" | "status" | "country";

const filterConfig: { key: FilterKey; label: string; values: readonly string[] }[] = [
  { key: "status", label: "Status", values: dealFilters.statuses },
  { key: "sector", label: "Sector", values: dealFilters.sectors },
  { key: "strategy", label: "Strategy", values: dealFilters.strategies },
  { key: "country", label: "Geography", values: dealFilters.countries },
];

export function PortfolioGrid() {
  const [active, setActive] = useState<Record<FilterKey, string | null>>({
    status: null,
    sector: null,
    strategy: null,
    country: null,
  });

  const filtered = useMemo(() => {
    return deals.filter((d) => {
      return (Object.keys(active) as FilterKey[]).every((k) => {
        const val = active[k];
        if (!val) return true;
        return (d[k] as unknown as string) === val;
      });
    });
  }, [active]);

  const anyActive = Object.values(active).some(Boolean);

  return (
    <div>
      {/* Filter bar + result count temporarily hidden — restore by removing `false &&`. */}
      {false && (
        <>
          <div className="mb-16 space-y-6 border-y border-[var(--color-hairline-strong)] py-8">
            {filterConfig.map((cfg) => (
              <div key={cfg.key} className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="mr-4 min-w-[6.5rem] text-[10px] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  {cfg.label}
                </span>
                <FilterPill
                  label="All"
                  active={active[cfg.key] === null}
                  onClick={() => setActive((s) => ({ ...s, [cfg.key]: null }))}
                />
                {cfg.values.map((v) => (
                  <FilterPill
                    key={v}
                    label={v}
                    active={active[cfg.key] === v}
                    onClick={() => setActive((s) => ({ ...s, [cfg.key]: v }))}
                  />
                ))}
              </div>
            ))}
            {anyActive && (
              <button
                type="button"
                onClick={() =>
                  setActive({ status: null, sector: null, strategy: null, country: null })
                }
                className="link-underline text-[10.5px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]"
              >
                Reset filters
              </button>
            )}
          </div>

          <div className="mb-10 flex items-center justify-between">
            <p className="text-sm text-[var(--color-muted)]">
              <span className="tabular font-editorial text-2xl text-[var(--color-ink)]">
                {filtered.length}
              </span>{" "}
              <span className="uppercase tracking-[0.2em] text-[11px]">
                {filtered.length === 1 ? "Mandate shown" : "Mandates shown"}
              </span>
            </p>
          </div>
        </>
      )}

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="py-20 text-center text-[var(--color-muted)]">
          No mandates match the selected filters.
        </p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => (
            <DealCard key={d.slug} deal={d} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
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
      {label}
    </button>
  );
}

function DealCard({ deal }: { deal: Deal }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={deal.image}
          alt={deal.asset}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover grayscale-[15%]"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--color-ink)]/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-[var(--color-paper)]">
          <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-paper)]/70">
            {deal.location} · {deal.year}
          </div>
          <h3 className="mt-3 font-editorial text-xl md:text-2xl leading-tight">
            {deal.headline}
          </h3>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-3 text-[10.5px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
        <span>{deal.sector}</span>
        <span aria-hidden>·</span>
        <span>{deal.strategy}</span>
        <span aria-hidden>·</span>
        <span className="text-[var(--color-accent)]">{deal.status}</span>
      </div>
    </motion.article>
  );
}
