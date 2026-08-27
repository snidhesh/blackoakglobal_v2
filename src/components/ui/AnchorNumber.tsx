"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type Props = {
  value: string;
  label: string;
  tone?: "ink" | "paper";
  size?: "default" | "hero";
  className?: string;
};

export function AnchorNumber({ value, label, tone = "ink", size = "default", className }: Props) {
  const numberSize =
    size === "hero"
      ? "text-[clamp(2.75rem,18vw,15rem)]"
      : "text-[clamp(2.25rem,10vw,8rem)]";
  return (
    <div className={cn("space-y-4 md:space-y-6", className)}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "font-editorial anchor-number tabular break-words",
          numberSize,
          tone === "paper" ? "text-[var(--color-paper)]" : "text-[var(--color-ink)]",
        )}
      >
        {value}
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className={cn(
          "max-w-md text-xs md:text-sm uppercase tracking-[0.24em] leading-relaxed",
          tone === "paper" ? "text-[var(--color-paper)]/70" : "text-[var(--color-muted)]",
        )}
      >
        {label}
      </motion.p>
    </div>
  );
}
