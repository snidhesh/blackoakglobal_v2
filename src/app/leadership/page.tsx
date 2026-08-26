import { PageHero } from "@/components/marketing/PageHero";
import { ContactBand } from "@/components/marketing/ContactBand";
import { LeadershipGrid } from "./LeadershipGrid";
import { team } from "@/content/team";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our People",
  path: "/leadership",
  description:
    "Meet the experienced leadership team at BlackOak Global — investment professionals with decades of expertise in private equity real estate, merchant banking, and asset management across the UAE, UK, and Asia.",
});

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Our People"
        title="Meet the leadership team driving BlackOak Global's vision and strategy."
        intro="BlackOak is small by choice. Every engagement carries the direct attention of a named principal — with two decades of institutional experience behind the underwrite."
      />

      <LeadershipGrid groups={team} />

      <ContactBand />
    </>
  );
}
