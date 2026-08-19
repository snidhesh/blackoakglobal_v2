import { PageHero } from "@/components/marketing/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ServiceTiles } from "@/components/marketing/ServiceTiles";
import { ContactBand } from "@/components/marketing/ContactBand";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "What We Do",
  path: "/what-we-do",
  description:
    "BlackOak Global — six practices, one philosophy. Private equity real estate, investments, private funds & REITs, development, merchant banking, and advisory.",
});

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Six practices. One philosophy."
        intro="From private equity real estate to merchant banking, every BlackOak practice is underpinned by the same principles: principal-led judgement, institutional rigour, and structural alignment with our clients’ interests."
      />

      <Section tone="paper" pad="loose">
        <Container>
          <ServiceTiles />
        </Container>
      </Section>

      <ContactBand />
    </>
  );
}
