import { PageHero } from "@/components/marketing/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ContactBand } from "@/components/marketing/ContactBand";
import { PortfolioGrid } from "./PortfolioGrid";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Portfolio",
  path: "/portfolio",
  description:
    "Selected transactions and mandates from BlackOak Global — filterable by sector, strategy, geography, and status.",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Selected mandates and transactions."
        intro="A selection of the transactions, developments, and advisory mandates the firm has led. The full track record is available on request to qualified counterparties."
      />

      <Section tone="bone" pad="loose">
        <Container>
          <PortfolioGrid />
        </Container>
      </Section>

      <ContactBand />
    </>
  );
}
