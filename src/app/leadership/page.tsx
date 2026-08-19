import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionMark } from "@/components/ui/SectionMark";
import { Reveal } from "@/components/ui/Reveal";
import { ContactBand } from "@/components/marketing/ContactBand";
import { team } from "@/content/team";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Leadership",
  path: "/leadership",
  description:
    "BlackOak Global leadership — senior partners, management team, advisory board, and Asia principals across Dubai, London, and international markets.",
});

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="The principals behind every mandate."
        intro="BlackOak is small by choice. Every engagement carries the direct attention of a named principal — with two decades of institutional experience behind the underwrite."
      />

      {team.map((group, gi) => (
        <Section
          key={group.title}
          tone={gi % 2 === 0 ? "bone" : "paper"}
          pad="loose"
        >
          <Container>
            <div className="mb-16 md:mb-20">
              <Reveal>
                <SectionMark>{group.title}</SectionMark>
              </Reveal>
            </div>
            <div className="space-y-24 md:space-y-32">
              {group.members.map((m, mi) => (
                <Reveal
                  key={m.slug}
                  delay={mi * 0.05}
                  className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-start"
                >
                  <div className="lg:col-span-5 xl:col-span-4">
                    <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-paper-soft)]">
                      <Image
                        src={m.image}
                        alt={m.name}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover grayscale-[15%]"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-7 xl:col-span-8 lg:pt-6">
                    <h2 className="font-editorial text-3xl md:text-4xl lg:text-5xl text-[var(--color-ink)] leading-tight">
                      {m.name}
                    </h2>
                    {m.title && (
                      <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-[var(--color-accent)] font-medium">
                        {m.title}
                      </p>
                    )}
                    <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[var(--color-muted)]">
                      Region — {m.region}
                    </p>
                    <div className="mt-8 h-px w-16 bg-[var(--color-ink)]" />
                    <div className="mt-8 space-y-5 text-[var(--color-ink)]/80 leading-relaxed max-w-2xl">
                      {m.bio.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                    {m.linkedin && (
                      <Link
                        href={m.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-3 link-underline font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-ink)]"
                      >
                        <Linkedin size={14} strokeWidth={1.5} />
                        View on LinkedIn
                      </Link>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      ))}

      <ContactBand />
    </>
  );
}
