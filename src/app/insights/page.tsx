import { PageHero } from "@/components/marketing/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ContactBand } from "@/components/marketing/ContactBand";
import { InsightsList } from "./InsightsList";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Insights",
  path: "/insights",
  description:
    "News, press, and market intelligence from BlackOak Global — covering the UAE, UK, and international real estate and investment markets.",
});

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Perspective from principals, not press releases."
        intro="News, market reports, and points of view from the BlackOak team — covering the UAE, UK, and select international markets."
      />

      <Section tone="bone" pad="loose">
        <Container>
          <InsightsList />
        </Container>
      </Section>

      <ContactBand />
    </>
  );
}
