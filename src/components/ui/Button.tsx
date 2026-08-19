import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";
type Tone = "ink" | "paper";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  tone?: Tone;
  withArrow?: boolean;
};

type ButtonLinkProps = CommonProps & {
  href: string;
  external?: boolean;
  as?: "link";
};

type ButtonBtnProps = CommonProps & {
  as: "button";
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

function styles({ variant = "primary", tone = "ink" }: { variant?: Variant; tone?: Tone }) {
  const base =
    "inline-flex items-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.24em] px-6 py-4 transition-colors duration-200 whitespace-nowrap";
  if (variant === "primary") {
    return cn(
      base,
      tone === "paper"
        ? "bg-[var(--color-paper)] text-[var(--color-ink)] hover:bg-[var(--color-accent)] hover:text-[var(--color-paper)]"
        : "bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[var(--color-accent)]",
    );
  }
  if (variant === "outline") {
    return cn(
      base,
      tone === "paper"
        ? "border border-[var(--color-paper)]/40 text-[var(--color-paper)] hover:border-[var(--color-paper)]"
        : "border border-[var(--color-ink)]/20 text-[var(--color-ink)] hover:border-[var(--color-ink)]",
    );
  }
  // ghost
  return cn(
    "inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.24em] link-underline",
    tone === "paper" ? "text-[var(--color-paper)]" : "text-[var(--color-ink)]",
  );
}

export function Button(props: ButtonLinkProps | ButtonBtnProps) {
  const { children, className, variant = "primary", tone = "ink", withArrow } = props;
  const cls = cn(styles({ variant, tone }), className);
  const inner = (
    <>
      <span>{children}</span>
      {withArrow && <ArrowRight size={14} strokeWidth={1.5} />}
    </>
  );

  if ("as" in props && props.as === "button") {
    return (
      <button
        type={props.type ?? "button"}
        onClick={props.onClick}
        disabled={props.disabled}
        className={cls}
      >
        {inner}
      </button>
    );
  }

  const linkProps = props as ButtonLinkProps;
  if (linkProps.external) {
    return (
      <a href={linkProps.href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={linkProps.href} className={cls}>
      {inner}
    </Link>
  );
}
