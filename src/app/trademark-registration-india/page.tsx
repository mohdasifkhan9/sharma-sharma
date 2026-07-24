import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Scale,
  TrendingUp,
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
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SectionLabel, SplitHeading, Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/interactive";
import { MediaFrame } from "@/components/ui/media";
import { ConsultationCTA } from "@/components/sections/cta";
import { site } from "@/lib/site";
import {
  getLegalServiceSchema,
  getFAQSchema,
  getBreadcrumbSchema,
  getServiceSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Trademark Registration India | Comprehensive Brand Filing",
  description:
    "Register your trademark in India with established IP attorneys. Availability search, class specification, registry prosecution & certificate issuance since 1972.",
  keywords: [
    "Trademark Registration India",
    "Register Trademark in India",
    "Indian Trademark Application",
    "Brand Registration Delhi",
    "TM Filing India for US Companies",
    "Trade Marks Registry India",
  ],
  alternates: {
    canonical: `${site.url}/trademark-registration-india`,
  },
  openGraph: {
    title: "Trademark Registration India | Foreign & US Brand Security",
    description:
      "Complete trademark search, classification, registry examination defense, and registration certificate grant in India.",
    url: `${site.url}/trademark-registration-india`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trademark Registration India | Legal Brand Counsel",
    description:
      "Established 1972. Complete trademark registration services across all 45 Nice classes in India.",
  },
};

const registrationFaqs = [
  {
    q: "What is the legal benefit of registering a trademark in India?",
    a: "Trademark registration under the Trade Marks Act 1999 grants exclusive statutory rights to use the mark across India, blocks unauthorized competitors, enables civil infringement lawsuits, and anchors international Madrid Protocol expansions.",
  },
  {
    q: "Can a foreign corporation file for trademark registration in India directly?",
    a: "Yes. Foreign entities do not require an Indian subsidiary to own trademarks in India. You simply require an Indian Address for Service, which is provided by our firm upon execution of Form TM-M Power of Attorney.",
  },
  {
    q: "What is the difference between the ™ and ® symbols in India?",
    a: "The ™ symbol indicates that a trademark application has been officially filed with the Trade Marks Registry. The ® symbol can strictly only be used once the official Registration Certificate has been granted.",
  },
  {
    q: "How are goods and services classified for Indian trademark applications?",
    a: "India follows the International Classification of Goods and Services (Nice Classification) comprising 45 classes (Classes 1–34 for goods, Classes 35–45 for services). Precise specification drafting prevents registry objections.",
  },
  {
    q: "What is the official government fee for registering a trademark in India?",
    a: "Official fees are 9,000 INR (~$110 USD) per mark per class for commercial companies, and 4,500 INR (~$55 USD) per mark per class for individuals, MSMEs, or recognized startups.",
  },
  {
    q: "How does claiming a prior user date strengthen an Indian application?",
    a: "India recognizes prior commercial use. If you have sold products or services under the mark in India or globally prior to the application date, filing a User Affidavit establishes prior rights over subsequent filers.",
  },
  {
    q: "What happens if the Trade Marks Registry issues an Examination Report objection?",
    a: "Our attorneys formulate a formal statutory reply citing judicial precedents within 30 days. If required, we present oral arguments at show-cause hearings before the Registrar of Trade Marks.",
  },
  {
    q: "What is the duration of statutory opposition in India?",
    a: "Once a mark is published in the Trade Marks Journal, third parties have a non-extendable 4-month window to file a Notice of Opposition (Form TM-O).",
  },
  {
    q: "How long is an Indian trademark registration valid?",
    a: "Registration is valid for 10 years from the original filing date and can be renewed indefinitely every 10 years by filing Form TM-R.",
  },
  {
    q: "How does trademark registration assist Amazon sellers in India?",
    a: "An active pending application or registered trademark number allows instant enrollment in Amazon Brand Registry India, protecting product listings from hijackers.",
  },
];

const timelineSteps = [
  {
    num: "01",
    phase: "SEARCH & CLEARANCE",
    title: "Pre-Filing Availability Audit",
    desc: "Exhaustive phonetic, visual, and conceptual search across official Indian TMR databases to identify prior registrations and prevent Section 9/11 refusals.",
  },
  {
    num: "02",
    phase: "CLASSIFICATION",
    title: "Class Mapping & Goods Specification",
    desc: "Structuring goods/services specifications in alignment with Nice 11th Edition standards to ensure comprehensive statutory protection across target classes.",
  },
  {
    num: "03",
    phase: "REGISTRY SUBMISSION",
    title: "Electronic Filing & ™ Ack Issuance",
    desc: "Direct filing with the Trade Marks Registry. Official TM Application Receipt issued within 24 hours enabling immediate ™ symbol usage.",
  },
  {
    num: "04",
    phase: "PROSECUTION",
    title: "Examination Reply & Hearing Advocacy",
    desc: "Drafting statutory replies within 30 days to clear registry objections and representing the applicant at show-cause hearings if scheduled.",
  },
  {
    num: "05",
    phase: "JOURNAL ADVERTISING",
    title: "Trade Marks Journal Publication",
    desc: "Publication in the official weekly Journal to initiate the statutory 4-month third-party public opposition window.",
  },
  {
    num: "06",
    phase: "CERTIFICATE GRANT",
    title: "Official Registration Certificate",
    desc: "Issuance of the digital Registration Certificate granting 10-year exclusive statutory ownership and ® symbol rights across India.",
  },
];

const relatedPractices = [
  {
    title: "Trademark Attorney India",
    desc: "Direct counsel for foreign corporations and Amazon sellers.",
    href: "/trademark-attorney-india",
  },
  {
    title: "Trademark Lawyer India",
    desc: "Litigation, opposition defense, and Delhi High Court advocacy.",
    href: "/trademark-lawyer-india",
  },
  {
    title: "Madrid Protocol India",
    desc: "International trademark protection across 150+ WIPO member countries.",
    href: "/madrid-protocol-india",
  },
  {
    title: "Copyright Registration",
    desc: "Protecting original software code, literary, and artistic works.",
    href: "/copyright-registration-india",
  },
];

export default function TrademarkRegistrationIndiaPage() {
  const legalSchema = getLegalServiceSchema({
    name: "Sharma & Sharma Trademark Registration Counsel",
    description: "End-to-end trademark registration, search, prosecution and portfolio management in India.",
    url: `${site.url}/trademark-registration-india`,
  });

  const faqSchema = getFAQSchema(registrationFaqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Services", url: `${site.url}/services` },
    { name: "Trademark Registration India", url: `${site.url}/trademark-registration-india` },
  ]);
  const serviceSchema = getServiceSchema({
    name: "Trademark Registration Service India",
    description: "Complete statutory trademark application filing, search, prosecution, and registration in India.",
    serviceType: "Legal Service",
    url: `${site.url}/trademark-registration-india`,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <PageHero
        label="Statutory Brand Protection"
        title="Comprehensive Trademark Registration in India."
        intro="Securing exclusive brand ownership for foreign corporations, technology enterprises, and growing businesses across all five branches of the Indian Trade Marks Registry."
        image="/media/Trademark Registration.jpeg"
        imageAlt="Trademark Registration Filings and Certificates in India"
      />

      {/* TRUST STRIP */}
      <div className="border-b border-line bg-paper py-5 select-none">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-between gap-y-4 gap-x-8 text-xs font-sans text-navy font-medium">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>Established 1972</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>All 45 Nice Classes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>24-Hour TM Ack Issuance</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>Direct TMR Prosecution</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: PERSPECTIVE */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <SectionLabel>Statutory Authority</SectionLabel>
              <SplitHeading className="display mt-6 text-[clamp(2.2rem,4.5vw,3.8rem)] text-navy leading-tight">
                Securing Exclusive Commercial Brand Rights in India.
              </SplitHeading>
              <p className="mt-6 text-[15px] leading-relaxed text-muted font-light">
                A registered trademark is a valuable intangible asset that protects your business identity, prevents consumer confusion, and establishes exclusive legal ownership across India.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-6 text-[15px] leading-relaxed text-muted font-light">
              <p>
                The Indian Trade Marks Act (1999) governs the registration and protection of word marks, logos, slogans, packaging designs, and non-conventional marks. Obtaining registration provides the exclusive right to use the mark in relation to specified goods or services and authorizes civil lawsuits against infringers.
              </p>
              <p>
                At Sharma & Sharma, our trademark attorneys handle every phase of registration with statutory precision — from preliminary availability clearance searches to class specification drafting, examination reply formulation, and certificate issuance.
              </p>
              <div className="p-6 bg-paper border-l-2 border-gold rounded-r-[4px] mt-8">
                <span className="text-[10px] tracking-widest text-gold uppercase font-bold block mb-1 font-mono">
                  EXCLUSIVITY GUARANTEE
                </span>
                <p className="font-serif italic text-navy text-[16px] leading-snug">
                  &ldquo;Securing early statutory trademark registration eliminates foreign market entry risk, shields product listings on e-commerce channels, and creates transferable corporate value.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 2: 6-STAGE TIMELINE */}
      <Section className="bg-paper border-y border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl mb-14">
            <SectionLabel>Registration Protocol</SectionLabel>
            <SplitHeading className="display mt-4 text-[clamp(2.2rem,4vw,3.5rem)] text-navy">
              The 6-Step Registration Timeline.
            </SplitHeading>
          </div>

          <div className="space-y-6">
            {timelineSteps.map((s, idx) => (
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
            <SectionLabel>Guidance</SectionLabel>
            <SplitHeading className="display mt-4 text-[clamp(2.2rem,4.5vw,3.8rem)] text-navy">
              Trademark Registration FAQs.
            </SplitHeading>
          </div>

          <div className="max-w-4xl">
            <Accordion items={registrationFaqs} />
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
