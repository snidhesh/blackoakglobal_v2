import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "article";
  tone?: "paper" | "bone" | "ink";
  pad?: "default" | "narrow" | "loose" | "none";
};

const toneMap = {
  paper: "bg-[var(--color-paper)] text-[var(--color-ink)]",
  bone: "bg-[var(--color-bone)] text-[var(--color-ink)]",
  ink: "bg-[var(--color-ink)] text-[var(--color-paper)]",
};

const padMap = {
  none: "",
  narrow: "py-16 md:py-24",
  default: "py-24 md:py-36 lg:py-40",
  loose: "py-32 md:py-48 lg:py-56",
};

export function Section({
  children,
  className,
  id,
  as = "section",
  tone = "paper",
  pad = "default",
}: SectionProps) {
  const Tag = as;
  return (
    <Tag id={id} className={cn(toneMap[tone], padMap[pad], className)}>
      {children}
    </Tag>
  );
}
