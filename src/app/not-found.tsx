import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="min-h-[100svh] flex items-center bg-[var(--color-paper)] pt-32 pb-24">
      <Container size="narrow">
        <div className="max-w-xl">
          <div className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">
            404
          </div>
          <h1 className="mt-6 font-editorial text-[clamp(2.5rem,6vw,5rem)] leading-[1] text-[var(--color-ink)]">
            This page is no longer here.
          </h1>
          <p className="mt-8 text-lg text-[var(--color-muted)] leading-relaxed">
            The page you were looking for cannot be found. Please return to the home page
            or contact us if you were expecting something specific.
          </p>
          <div className="mt-10 flex flex-wrap gap-6">
            <Link
              href="/"
              className="inline-flex items-center gap-3 bg-[var(--color-ink)] text-[var(--color-paper)] px-7 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.24em] hover:bg-[var(--color-accent)] transition-colors"
            >
              Return home
            </Link>
            <Link
              href="/contact"
              className="link-underline font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-ink)]"
            >
              Contact BlackOak
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
