import { PageHero } from "@/components/marketing/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  path: "/terms",
  description: "BlackOak Global website terms of service.",
});

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" />
      <Section tone="bone" pad="narrow">
        <Container size="narrow">
          <div className="space-y-6 text-[var(--color-ink)]/85 leading-relaxed">
            <p>
              By accessing this website, you agree to be bound by these Terms of Service
              and the applicable laws. If you do not agree, please do not use this site.
            </p>
            <h2 className="mt-10 font-editorial text-2xl text-[var(--color-ink)]">
              1. Use of Site
            </h2>
            <p>
              The materials on this website are provided for general informational purposes
              only. They do not constitute investment advice, an offer or solicitation to
              buy or sell any security, or a recommendation to make any investment
              decision.
            </p>
            <h2 className="mt-10 font-editorial text-2xl text-[var(--color-ink)]">
              2. Intellectual Property
            </h2>
            <p>
              All content, trademarks, and materials appearing on this site are owned by
              or licensed to BlackOak Global and are protected by intellectual property
              laws. You may not reproduce, distribute, or otherwise exploit any content
              without prior written consent.
            </p>
            <h2 className="mt-10 font-editorial text-2xl text-[var(--color-ink)]">
              3. No Warranty
            </h2>
            <p>
              The materials on this website are provided on an "as is" basis. BlackOak
              makes no warranties, expressed or implied, and hereby disclaims and negates
              all other warranties including, without limitation, implied warranties of
              merchantability, fitness for a particular purpose, or non-infringement.
            </p>
            <h2 className="mt-10 font-editorial text-2xl text-[var(--color-ink)]">
              4. Limitation of Liability
            </h2>
            <p>
              In no event shall BlackOak or its principals be liable for any damages
              arising out of the use or inability to use the materials on this website.
            </p>
            <h2 className="mt-10 font-editorial text-2xl text-[var(--color-ink)]">
              5. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of the United Arab Emirates, without
              regard to conflict-of-law principles.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
