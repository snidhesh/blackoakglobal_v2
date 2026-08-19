import { PageHero } from "@/components/marketing/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  path: "/privacy",
  description: "BlackOak Global privacy policy.",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <Section tone="bone" pad="narrow">
        <Container size="narrow">
          <div className="space-y-6 text-[var(--color-ink)]/85 leading-relaxed">
            <p>
              This Privacy Policy describes how BlackOak Global ("BlackOak", "we", "our",
              or "us") collects, uses, and protects information you provide when you
              interact with our website, forms, and communications.
            </p>
            <h2 className="mt-10 font-editorial text-2xl text-[var(--color-ink)]">
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide voluntarily — such as your name, email,
              phone number, and message content when you submit a contact enquiry — along
              with anonymised technical information about your device and interactions
              with our site.
            </p>
            <h2 className="mt-10 font-editorial text-2xl text-[var(--color-ink)]">
              2. How We Use Information
            </h2>
            <p>
              We use the information you provide to respond to your enquiry, to communicate
              with you about matters you have raised, and to improve the operation of our
              website. We do not sell or trade your personal information.
            </p>
            <h2 className="mt-10 font-editorial text-2xl text-[var(--color-ink)]">
              3. Data Retention
            </h2>
            <p>
              We retain enquiry information only for as long as necessary to respond to
              your request and to comply with our legal and regulatory obligations.
            </p>
            <h2 className="mt-10 font-editorial text-2xl text-[var(--color-ink)]">
              4. Security
            </h2>
            <p>
              We take reasonable technical and organisational measures to protect the
              information you share with us. No system is completely secure, and we cannot
              guarantee absolute security of information transmitted online.
            </p>
            <h2 className="mt-10 font-editorial text-2xl text-[var(--color-ink)]">
              5. Contact
            </h2>
            <p>
              For questions about this policy or a request to access or delete your data,
              please contact{" "}
              <a
                href="mailto:enquiries@blackoakglobal.com"
                className="link-underline text-[var(--color-ink)]"
              >
                enquiries@blackoakglobal.com
              </a>
              .
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
