"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { firm } from "@/content/firm";

// Full-viewport video hero, Ardian-style:
//   • autoplay / muted / loop / playsInline (Safari-safe)
//   • two <source> renditions; browser picks the first playable
//   • poster jpg for first-paint / low-bandwidth fallback
//   • dark scrim keeps headline & body legible on any frame
export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // Some browsers (esp. Safari on iOS) gate autoplay unless kicked
    // manually after mount. Silent playback is always allowed.
    v.play().catch(() => {
      /* autoplay blocked — poster stays visible */
    });
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-[var(--color-ink)] text-[var(--color-paper)]">
      {/* Video layer */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/video/hero-poster.jpg"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/Blackoak_Global-1920.mp4" type="video/mp4" media="(min-width: 768px)" />
        <source src="/video/Blackoak_Global-960.mp4" type="video/mp4" />
      </video>

      {/* Scrim — layered gradients keep the copy readable on any frame */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(14,14,14,0.55) 0%, rgba(14,14,14,0.15) 22%, rgba(14,14,14,0) 45%, rgba(14,14,14,0.55) 80%, rgba(14,14,14,0.85) 100%), linear-gradient(90deg, rgba(14,14,14,0.55) 0%, rgba(14,14,14,0) 55%)",
        }}
      />

      {/* Content — bottom-left, Ardian pattern.
        * Mobile header is ~76px, desktop is ~114px, so top padding is
        * responsive to give roughly the same headroom on both. */}
      <div className="relative z-10 w-full pt-28 md:pt-40 pb-28 md:pb-32 lg:pb-40">
        <Container>
          <div className="grid gap-10 md:gap-12 lg:gap-16 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8 xl:col-span-9">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10 font-sans text-[10px] md:text-[10.5px] tracking-[0.24em] md:tracking-[0.28em] uppercase font-medium text-[var(--color-paper)]/85"
              >
                <span aria-hidden className="block h-px w-6 md:w-8 bg-[var(--color-paper)]/45" />
                <span>Real Estate · Private Equity · Merchant Banking</span>
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="font-editorial text-[clamp(2.5rem,9vw,7rem)] leading-[1] md:leading-[0.98] tracking-[-0.015em] md:tracking-[-0.02em] text-[var(--color-paper)]"
              >
                {firm.tagline}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="mt-8 md:mt-14 max-w-xl text-[15px] md:text-lg leading-relaxed text-[var(--color-paper)]/80"
              >
                {firm.positioning}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-8 items-stretch sm:items-center"
              >
                <Link
                  href="/firm"
                  className="inline-flex items-center justify-center sm:justify-start gap-3 bg-[var(--color-paper)] text-[var(--color-ink)] px-6 md:px-7 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.24em] hover:bg-[var(--color-accent)] hover:text-[var(--color-paper)] transition-colors"
                >
                  Explore the Firm <ArrowRight size={14} strokeWidth={1.5} />
                </Link>
                <Link
                  href="/portfolio"
                  className="link-underline self-center sm:self-auto font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-paper)]"
                >
                  View Track Record
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="lg:col-span-4 xl:col-span-3 border-t border-[var(--color-paper)]/20 pt-6 md:pt-8"
            >
              <div className="flex items-center gap-3 mb-4 md:mb-5 text-[10px] md:text-[10.5px] uppercase tracking-[0.22em] md:tracking-[0.24em] font-medium text-[var(--color-paper)]/70">
                <span aria-hidden className="block h-px w-6 bg-[var(--color-paper)]/45" />
                Where we operate
              </div>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-y-1.5 font-editorial text-xl md:text-2xl lg:text-3xl text-[var(--color-paper)] leading-tight">
                {firm.geographies.map((geo) => (
                  <li key={geo}>{geo}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </div>

    </section>
  );
}
