"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/services";
import { Reveal } from "@/components/ui/Reveal";

const AUTOPLAY_MS = 3500;
const RESUME_AFTER_INTERACTION_MS = 6000;

export function ServiceTiles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Only autoplay on mobile (below md breakpoint — matches tailwind md at 768px)
    const mq = window.matchMedia("(max-width: 767px)");
    if (!mq.matches) return;

    let interval: number | null = null;
    let resumeTimer: number | null = null;
    let paused = false;

    const step = () => {
      if (paused) return;
      const el = containerRef.current;
      if (!el) return;
      const atEnd =
        Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth - 2;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Advance one snap point — tile width ~= container * 0.82 + 16px gap
        const distance = el.clientWidth * 0.82 + 16;
        el.scrollBy({ left: distance, behavior: "smooth" });
      }
    };

    const start = () => {
      if (interval !== null) return;
      interval = window.setInterval(step, AUTOPLAY_MS);
    };
    const stop = () => {
      if (interval !== null) {
        window.clearInterval(interval);
        interval = null;
      }
    };
    const pauseAndScheduleResume = () => {
      paused = true;
      stop();
      if (resumeTimer !== null) window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => {
        paused = false;
        start();
      }, RESUME_AFTER_INTERACTION_MS);
    };

    // Track which tile is roughly centered — for the dot indicator
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const tileWidth = el.clientWidth * 0.82 + 16;
      const idx = Math.round(el.scrollLeft / tileWidth);
      setActiveIndex(Math.min(services.length - 1, Math.max(0, idx)));
    };

    container.addEventListener("pointerdown", pauseAndScheduleResume, {
      passive: true,
    });
    container.addEventListener("wheel", pauseAndScheduleResume, {
      passive: true,
    });
    container.addEventListener("scroll", onScroll, { passive: true });

    start();

    return () => {
      stop();
      if (resumeTimer !== null) window.clearTimeout(resumeTimer);
      container.removeEventListener("pointerdown", pauseAndScheduleResume);
      container.removeEventListener("wheel", pauseAndScheduleResume);
      container.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      <div
        ref={containerRef}
        className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-6 md:mx-0 md:grid md:grid-cols-2 md:gap-px md:overflow-visible md:border md:border-[var(--color-hairline)] md:bg-[var(--color-hairline)] md:px-0 md:pb-0 md:snap-none lg:grid-cols-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {services.map((service, i) => (
          <Reveal
            key={service.slug}
            delay={i * 0.05}
            className="group shrink-0 w-[82vw] max-w-[420px] snap-start border border-[var(--color-hairline)] bg-[var(--color-paper)] md:w-auto md:shrink md:max-w-none md:snap-align-none md:border-0"
          >
            <Link
              href={`/what-we-do/${service.slug}`}
              className="flex h-full flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 82vw"
                  priority={i < 3}
                  className="object-cover grayscale-[15%] transition-all duration-[900ms] ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-[var(--color-ink)]/10 transition-opacity duration-500 group-hover:bg-[var(--color-ink)]/0" />
              </div>
              <div className="flex flex-1 flex-col justify-between p-8 md:p-10 lg:p-12">
                <div>
                  <div className="font-editorial text-xs uppercase tracking-[0.28em] text-[var(--color-muted)] mb-6 tabular">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-editorial text-2xl md:text-3xl leading-[1.1] text-[var(--color-ink)]">
                    {service.title}
                  </h3>
                </div>
                <div className="mt-10 flex items-center gap-3 text-[var(--color-ink)] transition-transform duration-300 group-hover:translate-x-1">
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em]">
                    Explore
                  </span>
                  <ArrowUpRight size={14} strokeWidth={1.5} />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* Mobile-only dot indicator — shows position + hints that there's more */}
      <div
        aria-hidden
        className="mt-2 flex items-center justify-center gap-2 md:hidden"
      >
        {services.map((s, i) => (
          <span
            key={s.slug}
            className={
              "block h-1.5 rounded-full transition-all duration-300 " +
              (i === activeIndex
                ? "w-6 bg-[var(--color-ink)]"
                : "w-1.5 bg-[var(--color-hairline-strong)]")
            }
          />
        ))}
      </div>
    </div>
  );
}
