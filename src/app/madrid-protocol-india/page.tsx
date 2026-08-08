import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe2,
  CheckCircle2,
  Building2,
  ArrowUpRight,
  ArrowRight,
  Clock,
  Award,
  Check,
  Landmark,
  FileCheck,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SectionLabel, SplitHeading, Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/interactive";
import { ConsultationCTA } from "@/components/sections/cta";
import { site } from "@/lib/site";
import {
  getLegalServiceSchema,
  getFAQSchema,
  getBreadcrumbSchema,
  getServiceSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Madrid Protocol India | WIPO International Trademark Filings",
  description:
    "Protect your international trademark portfolio in India via the WIPO Madrid System. Handling designations, registry objections & oppositions since 1972.",
  keywords: [
    "Madrid Protocol India",
    "WIPO Trademark Filing India",
    "International Trademark Registration India",
    "Madrid System Member India",
    "WIPO Designation India Objections",
  ],
  alternates: {
    canonical: `${site.url}/madrid-protocol-india`,
  },
  openGraph: {
    title: "Madrid Protocol India | WIPO International Brand Protection",
    description:
      "Expert legal counsel for international applicants designating India under the WIPO Madrid System.",
    url: `${site.url}/madrid-protocol-india`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madrid Protocol India | WIPO International Trademark Counsel",
    description:
      "Established 1972. Managing WIPO Madrid designations and international portfolio expansion in India.",
  },
};

const madridFaqs = [
  {
    q: "What is the Madrid Protocol system for registering trademarks in India?",
    a: "The Madrid Protocol is an international treaty administered by WIPO that enables brand owners to file a single international application designating over 130 member countries, including India.",
  },
  {
    q: "How does an international applicant designate India under the Madrid System?",
    a: "Overseas applicants file an International Application through their home IP office (e.g., USPTO for US entities) designating India. WIPO transmits the application to the Indian Trade Marks Registry for local examination.",
  },
  {
    q: "What happens if a Madrid Protocol application designating India receives a Provisional Refusal?",
    a: "The Indian Trade Marks Registry issues a Total or Partial Provisional Refusal within 18 months. An Indian Trademark Attorney must be appointed to file a formal response before the Registrar of Trade Marks.",
  },
  {
    q: "Is direct national filing or Madrid Protocol better for securing trademarks in India?",
    a: "Direct national filing via an Indian attorney provides faster local examination, immediate TM acknowledgement numbers, and direct control over examination responses. Madrid filings offer centralized management across multiple countries.",
  },
  {
    q: "What is the deadline to respond to an Indian Provisional Refusal under Madrid Protocol?",
    a: "The statutory deadline to file a response to a Provisional Refusal in India is strictly 1 month from the date the notification is received by the holder or attorney.",
  },
  {
    q: "Can an Indian business use the Madrid Protocol to protect brands globally?",
    a: "Yes. Indian businesses holding an active trademark registration or application in India can file an International Application via the Indian IP Office (TMR) to designate overseas WIPO member states.",
  },
  {
    q: "What is the dependency rule (Central Attack) in Madrid Protocol filings?",
    a: "For the first 5 years, the international registration depends on the basic mark in the home country. If the basic mark is cancelled or restricted, the international registration in designated countries (including India) is similarly impacted.",
  },
  {
    q: "Are Madrid Protocol registrations subject to third-party opposition in India?",
    a: "Yes. Once accepted by the Indian TMR, international registrations designating India are advertised in the Trade Marks Journal for the statutory 4-month public opposition period.",
  },
  {
    q: "What documents are required to handle a Madrid Provisional Refusal in India?",
    a: "You require: (1) Copy of WIPO International Registration Certificate, (2) Copy of Provisional Refusal notice, (3) Form TM-M Power of Attorney, and (4) Evidentiary proof of prior adoption if claimed.",
  },
  {
    q: "How does Sharma & Sharma assist international law firms with Madrid designations?",
    a: "We serve as local associate counsel in India, reviewing provisional refusals, formulating legal arguments, attending show-cause hearings, and securing final Statement of Grant of Protection.",
  },
];

const madridSteps = [
  {
    num: "01",
    phase: "WIPO TRANSMISSION",
    title: "International Application & Designation",
    desc: "Application filed through home office designating India. WIPO conducts formal examination and transmits details to the Indian Trade Marks Registry.",
  },
  {
    num: "02",
    phase: "LOCAL EXAMINATION",
    title: "Indian TMR Substantive Review",
    desc: "The Indian Registry examines the designation under Sections 9 & 11 of the Trade Marks Act 1999 within the statutory 18-month window.",
  },
  {
    num: "03",
    phase: "PROVISIONAL REFUSAL",
    title: "Response & Hearing Advocacy",
    desc: "If objections are raised, our attorneys file a formal statutory reply within 1 month and advocate at TMR show-cause hearings.",
  },
  {
    num: "04",
    phase: "JOURNAL PUBLICATION",
    title: "Trade Marks Journal Advertising",
    desc: "Accepted designations are published in the Indian Trade Marks Journal, initiating the 4-month public opposition period.",
  },
  {
    num: "05",
    phase: "STATEMENT OF GRANT",
    title: "Grant of Protection in India",
    desc: "Upon successful completion of publication without opposition, WIPO receives the official Statement of Grant of Protection for India.",
  },
];

const relatedPractices = [
  {
    title: "Trademark Attorney India",
    desc: "Direct counsel for foreign corporations and Amazon sellers.",
    href: "/trademark-attorney-india",
  },
  {
    title: "Trademark Registration India",
    desc: "Direct national filing and complete class prosecution in India.",
    href: "/trademark-registration-india",
  },
  {
    title: "Trademark Lawyer India",
    desc: "Litigation, opposition defense, and High Court advocacy.",
    href: "/trademark-attorney-india",
  },
  {
    title: "Trademark Agent India",
    desc: "Registered agent services and Form TM-M Power of Attorney handling.",
    href: "/trademark-agent-india",
  },
];

export default function MadridProtocolIndiaPage() {
  const legalSchema = getLegalServiceSchema({
    name: "Sharma & Sharma Madrid Protocol & WIPO Counsel",
    description: "Specialized representation for international WIPO Madrid Protocol designations and provisional refusals in India.",
    url: `${site.url}/madrid-protocol-india`,
  });

  const faqSchema = getFAQSchema(madridFaqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Services", url: `${site.url}/services` },
    { name: "Madrid Protocol India", url: `${site.url}/madrid-protocol-india` },
  ]);
  const serviceSchema = getServiceSchema({
    name: "Madrid Protocol International Filing Service",
    description: "Managing WIPO Madrid System international trademark designations, provisional refusal replies, and grants of protection in India.",
    serviceType: "Legal Service",
    url: `${site.url}/madrid-protocol-india`,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <PageHero
        label="WIPO International System"
        title="Madrid Protocol Trademark Filings in India."
        intro="Representing overseas law firms, multinational corporations, and global brand managers designating India through the WIPO Madrid International Trademark System."
        image="/media/Global_filing_strategy_document.jpeg"
        imageAlt="Madrid Protocol International Trademark Filing Counsel"
      />

      {/* TRUST STRIP */}
      <div className="border-b border-line bg-paper py-5 select-none">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-between gap-y-4 gap-x-8 text-xs font-sans text-navy font-medium">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>WIPO Madrid Member State</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>Provisional Refusal Defense</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>130+ Country Coverage</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>Statement of Grant Procurement</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: PERSPECTIVE */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <SectionLabel>Cross-Border System</SectionLabel>
              <SplitHeading className="display mt-6 text-[clamp(2.2rem,4.5vw,3.8rem)] text-navy leading-tight">
                Navigating WIPO Madrid Designations in India.
              </SplitHeading>
              <p className="mt-6 text-[15px] leading-relaxed text-muted font-light">
                The Madrid Protocol offers a centralized mechanism for extending trademark rights globally. However, local examination standards in India remain rigorous.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-6 text-[15px] leading-relaxed text-muted font-light">
              <p>
                When an international applicant designates India via WIPO, the Indian Trade Marks Registry examines the mark under national laws. If conflicts arise under absolute (Section 9) or relative (Section 11) grounds, a Provisional Refusal is issued to WIPO.
              </p>
              <p>
                Resolving an Indian Provisional Refusal requires appointing a qualified Indian Trademark Attorney to submit formal legal arguments and appear before the Registrar. Sharma & Sharma acts as local associate counsel for foreign IP practices worldwide.
              </p>
              <div className="p-6 bg-paper border-l-2 border-gold rounded-r-[4px] mt-8">
                <span className="text-[10px] tracking-widest text-gold uppercase font-bold block mb-1 font-mono">
                  PROVISIONAL REFUSAL WARNING
                </span>
                <p className="font-serif italic text-navy text-[16px] leading-snug">
                  &ldquo;A Provisional Refusal issued by the Indian TMR must be answered within 1 month of receipt. Retaining experienced local counsel ensures timely response filing.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 2: 5-STAGE TIMELINE */}
      <Section className="bg-paper border-y border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl mb-14">
            <SectionLabel>WIPO Protocol</SectionLabel>
            <SplitHeading className="display mt-4 text-[clamp(2.2rem,4vw,3.5rem)] text-navy">
              Madrid Designation Lifecycle in India.
            </SplitHeading>
          </div>

          <div className="space-y-6">
            {madridSteps.map((s, idx) => (
              <Reveal key={s.num} delay={idx * 0.05}>
                <div className="group grid grid-cols-1 md:grid-cols-[90px_1fr] gap-6 bg-cream p-8 border border-line/60 rounded-[4px] items-center transition-all duration-300 hover:border-gold">
                  <div className="flex flex-col items-start md:items-center">
                    <span className="font-serif text-3xl font-bold text-gold group-hover:scale-110 transition-transform duration-300">{s.num}</span>
                    <span className="text-[8px] font-mono text-muted uppercase tracking-widest mt-1">{s.phase}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-navy mb-2 group-hover:text-gold transition-colors duration-300">{s.title}</h3>
                    <p className="text-sm text-muted leading-relaxed font-light">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 3: FAQS */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl mb-12">
            <SectionLabel>WIPO Guidance</SectionLabel>
            <SplitHeading className="display mt-4 text-[clamp(2.2rem,4.5vw,3.8rem)] text-navy">
              Madrid Protocol FAQs.
            </SplitHeading>
          </div>

          <div className="max-w-4xl">
            <Accordion items={madridFaqs} />
          </div>
        </div>
      </Section>

      {/* SECTION 4: RELATED PRACTICES */}
      <Section className="bg-paper border-t border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Capabilities</SectionLabel>
          <h2 className="font-serif text-3xl md:text-4xl text-navy mt-4 mb-10">Explore Related IP Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPractices.map((prac, idx) => (
              <Reveal key={prac.title} delay={idx * 0.05} className="h-full">
                <Link
                  href={prac.href}
                  className="group h-full bg-cream p-6 border border-line/60 rounded-[4px] flex flex-col justify-between transition-all duration-300 hover:border-gold hover:shadow-sm"
                >
                  <div>
                    <h3 className="font-serif text-xl text-navy mb-2 group-hover:text-gold transition-colors duration-300">{prac.title}</h3>
                    <p className="text-xs text-muted leading-relaxed font-light">{prac.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-line/40 flex items-center justify-between text-[10px] font-mono text-gold uppercase tracking-wider">
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <ConsultationCTA />
    </>
  );
}
