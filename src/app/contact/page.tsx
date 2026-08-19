import Image from "next/image";
import { PageHero } from "@/components/marketing/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionMark } from "@/components/ui/SectionMark";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "./ContactForm";
import { firm } from "@/content/firm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  path: "/contact",
  description: "Contact BlackOak Global — offices in Dubai and London. Enquiries: enquiries@blackoakglobal.com",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Begin a conversation."
        intro="We welcome introductions from principals, institutional counterparties, and prospective partners. All enquiries are received in confidence."
      />

      <Section tone="bone" pad="loose">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionMark>Enquire</SectionMark>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-8 mb-12 font-editorial text-3xl md:text-4xl leading-tight text-[var(--color-ink)]">
                  Send us a message.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <ContactForm />
              </Reveal>
            </div>

            <div className="lg:col-span-5 lg:pl-12 lg:border-l lg:border-[var(--color-hairline)] space-y-14">
              <Reveal>
                <SectionMark>Direct</SectionMark>
                <a
                  href="mailto:enquiries@blackoakglobal.com"
                  className="mt-6 font-editorial text-2xl md:text-3xl leading-tight text-[var(--color-ink)] link-underline block"
                >
                  enquiries@blackoakglobal.com
                </a>
              </Reveal>

              {firm.offices.map((office, i) => (
                <Reveal key={office.city} delay={0.1 + i * 0.05}>
                  <div className="section-mark mb-3">{office.city} · {office.country}</div>
                  <div className="relative aspect-[4/3] overflow-hidden mb-5">
                    <Image
                      src={office.image}
                      alt={office.city}
                      fill
                      sizes="(min-width: 1024px) 30vw, 100vw"
                      className="object-cover grayscale-[10%]"
                    />
                  </div>
                  <p className="text-[var(--color-ink)] font-editorial text-xl leading-tight">
                    {office.address}
                  </p>
                  <p className="mt-3 text-[var(--color-muted)]">{office.phone}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Regulatory disclosures */}
      <Section tone="paper" pad="narrow">
        <Container>
          <div className="grid gap-8 border-t border-[var(--color-hairline-strong)] pt-12 md:grid-cols-3">
            <div>
              <div className="section-mark">Regulatory</div>
              <p className="mt-4 text-sm text-[var(--color-muted)] leading-relaxed">
                Regulated activity is conducted through DIFC / DFSA authorised affiliates
                where applicable. Materials on this site are for information only and do
                not constitute an offer to sell or a solicitation of an offer to buy any
                security.
              </p>
            </div>
            <div>
              <div className="section-mark">Jurisdiction</div>
              <p className="mt-4 text-sm text-[var(--color-muted)] leading-relaxed">
                United Arab Emirates — DFSA / SCA. United Kingdom — FCA-authorised
                affiliate arrangements. Please contact us for jurisdiction-specific
                disclosures.
              </p>
            </div>
            <div>
              <div className="section-mark">Confidentiality</div>
              <p className="mt-4 text-sm text-[var(--color-muted)] leading-relaxed">
                All enquiries and communications with BlackOak are treated as
                confidential. Please do not transmit sensitive personal or financial
                information via the contact form.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
