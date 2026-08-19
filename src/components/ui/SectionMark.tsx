import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  tone?: "ink" | "paper";
};

export function SectionMark({ children, className, tone = "ink" }: Props) {
  return (
    <div
      className={cn(
        "flex items-center gap-4",
        tone === "paper" ? "text-[var(--color-paper)]/80" : "text-[var(--color-muted)]",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "block h-px w-8",
          tone === "paper" ? "bg-[var(--color-paper)]/40" : "bg-[var(--color-ink)]",
        )}
      />
      <span className="font-sans text-[11px] font-medium uppercase tracking-[0.24em]">
        {children}
      </span>
    </div>
  );
}
