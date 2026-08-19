import { Container } from "@/components/ui/Container";
import { SectionMark } from "@/components/ui/SectionMark";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  className?: string;
};

export function PageHero({ eyebrow, title, intro, className }: Props) {
  return (
    <section
      className={cn(
        "relative pt-40 md:pt-48 pb-20 md:pb-28 bg-[var(--color-paper)]",
        className,
      )}
    >
      <Container>
        <div className="max-w-4xl">
          <Reveal>
            <SectionMark>{eyebrow}</SectionMark>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-8 font-editorial text-[clamp(2.75rem,7.5vw,6.5rem)] leading-[1] tracking-[-0.02em] text-[var(--color-ink)]">
              {title}
            </h1>
          </Reveal>
          {intro && (
            <Reveal delay={0.15}>
              <p className="mt-10 max-w-2xl text-lg md:text-xl leading-relaxed text-[var(--color-muted)]">
                {intro}
              </p>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
