import { Container } from "@/components/ui/Container";
import { SectionMark } from "@/components/ui/SectionMark";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Investor Portal — Sign in",
  path: "/investors/login",
  description: "BlackOak Global Investor Portal — sign in for limited-partner access.",
});

type Props = { searchParams: Promise<{ from?: string; error?: string }> };

export default async function LoginPage({ searchParams }: Props) {
  const sp = await searchParams;
  const from = sp?.from ?? "/investors";
  const error = sp?.error;

  return (
    <section className="min-h-[100svh] flex items-center bg-[var(--color-paper)] pt-32 pb-24">
      <Container size="narrow">
        <div className="max-w-lg mx-auto text-center">
          <SectionMark className="justify-center">Investor Portal</SectionMark>
          <h1 className="mt-8 font-editorial text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] text-[var(--color-ink)]">
            The BlackOak Investor Room.
          </h1>
          <p className="mt-6 text-[var(--color-muted)] leading-relaxed">
            This is a private area for BlackOak limited partners and co-investment
            principals. Please enter the password provided in your investor pack.
          </p>

          <form
            method="POST"
            action="/api/investors/login"
            className="mt-14 space-y-6 text-left"
          >
            <input type="hidden" name="from" value={from} />
            <div>
              <label
                htmlFor="password"
                className="block text-[10px] uppercase tracking-[0.24em] text-[var(--color-muted)] mb-3"
              >
                Passcode
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="w-full border border-[var(--color-hairline-strong)] bg-transparent px-5 py-4 text-[var(--color-ink)] focus:border-[var(--color-ink)] focus:outline-none"
              />
            </div>
            {error && (
              <p className="text-sm text-[var(--color-accent)]">
                Incorrect passcode. Please try again.
              </p>
            )}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-3 bg-[var(--color-ink)] text-[var(--color-paper)] px-7 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.24em] hover:bg-[var(--color-accent)] transition-colors"
            >
              Sign in
            </button>
          </form>

          <p className="mt-14 text-xs text-[var(--color-muted)]">
            Not an investor? <a href="/contact" className="link-underline">Get in touch</a>.
          </p>
        </div>
      </Container>
    </section>
  );
}
