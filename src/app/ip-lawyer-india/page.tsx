import type { Metadata } from "next";
import Link from "next/link";
import {
  Scale,
  Gavel,
  ShieldAlert,
  Building2,
  ArrowUpRight,
  ArrowRight,
  Check,
  Landmark,
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
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "IP Lawyer India | Senior Intellectual Property Counsel",
  description:
    "Leading Indian IP Lawyer handling trademark, copyright, design litigation, High Court lawsuits & cross-border brand enforcement since 1972.",
  keywords: [
    "IP Lawyer India",
    "Intellectual Property Attorney Delhi",
    "High Court IP Litigator India",
    "Senior IP Counsel India",
    "IP Law Firm Delhi Tis Hazari",
  ],
  alternates: {
    canonical: `${site.url}/ip-lawyer-india`,
  },
  openGraph: {
    title: "IP Lawyer India | Senior Intellectual Property Advocacy",
    description:
      "Formidable legal representation in intellectual property litigation, High Court injunctions, oppositions, and portfolio advisory.",
    url: `${site.url}/ip-lawyer-india`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IP Lawyer India | Senior Intellectual Property Counsel",
    description:
      "Established 1972. 50+ Years of High Court advocacy and intellectual property protection across India.",
  },
};

const ipLawyerFaqs = [
  {
    q: "What areas of Intellectual Property law are handled by an IP Lawyer in India?",
    a: "An IP Lawyer in India provides legal counsel and courtroom advocacy across Trademarks, Copyrights, Industrial Designs, Trade Secrets, Geographical Indications, and Domain Name Disputes.",
  },
  {
    q: "What is the jurisdiction of the Delhi High Court in IP litigation?",
    a: "The Delhi High Court's Intellectual Property Rights (IPR) Division is recognized as India's premier forum for complex IP suits. It possesses original jurisdiction to grant urgent ex-parte injunctions and rule on cross-border infringement.",
  },
  {
    q: "How are intellectual property infringement lawsuits filed in India?",
    a: "Civil suits for infringement or passing off are instituted in Commercial Courts or High Courts having jurisdiction. Remedies sought include permanent injunctions, damages, account of profits, and destruction of counterfeit inventory.",
  },
  {
    q: "Can an IP lawyer help foreign companies enforce IP rights against local infringers?",
    a: "Yes. Our lawyers execute cease-and-desist notices, file civil lawsuits seeking ex-parte interim injunctions, and coordinate with law enforcement and Customs authorities to seize counterfeit goods.",
  },
  {
    q: "What is an ex-parte ad-interim injunction in Indian IP litigation?",
    a: "It is an immediate, temporary court order granted without prior notice to the defendant when delay would cause irreparable harm. It immediately halts the sale or distribution of infringing products.",
  },
  {
    q: "What is the role of a Court Commissioner in Indian IP lawsuits?",
    a: "Courts frequently appoint a Court Commissioner (an independent advocate) to enter the infringer's premises unannounced, inspect inventory, seize counterfeit stock, and seal infringing manufacturing equipment.",
  },
  {
    q: "How are trade secrets and confidential information protected under Indian law?",
    a: "While India does not have a standalone Trade Secrets Act, trade secrets are protected through common law breach of confidence principles, contractual non-disclosure agreements (NDAs), and equity.",
  },
  {
    q: "How does Sharma & Sharma handle IP portfolio licensing and technology transfers?",
    a: "We draft and review intellectual property license agreements, technology transfer deeds, franchise contracts, and assignment deeds to ensure statutory compliance under Indian law.",
  },
  {
    q: "What is the timeline for resolving a commercial IP lawsuit in India?",
    a: "Interim injunctions are typically obtained within days of filing. Commercial Court procedures under the Commercial Courts Act 2015 have streamlined trials, targeting final judgment within 12 to 24 months.",
  },
  {
    q: "Why choose Sharma & Sharma as your primary IP counsel in India?",
    a: "With over 50 years of heritage since 1972, strategic presence near the Tis Hazari Courts & Delhi High Court, and deep mastery of cross-border IP, we deliver uncompromising legal representation.",
  },
];

const advocacySteps = [
  {
    num: "01",
    phase: "CASE EVALUATION",
    title: "IP Rights Audit & Risk Assessment",
    desc: "Reviewing statutory registrations, user priority evidence, and market infringement to determine legal cause of action.",
  },
  {
    num: "02",
    phase: "PRE-SUIT STRATEGY",
    title: "Cease & Desist / Mediation",
    desc: "Issuing formal legal demands or initiating pre-institution mediation as mandated by the Commercial Courts Act.",
  },
  {
    num: "03",
    phase: "INJUNCTION MOTION",
    title: "Ex-Parte Ad-Interim Injunction",
    desc: "Filing civil suit and urgent injunction applications before the Commercial Court or High Court to halt infringing activities immediately.",
  },
  {
    num: "04",
    phase: "EVIDENCE & SEIZURE",
    title: "Court Commissioner Execution",
    desc: "Executing search and seizure orders at counterfeit manufacturing sites alongside court-appointed commissioners.",
  },
  {
    num: "05",
    phase: "TRIAL & JUDGMENT",
    title: "Commercial Trial & Damages Grant",
    desc: "Conducting cross-examination, final oral arguments, and securing permanent injunctions with monetary damages.",
  },
];

const relatedPractices = [
  {
    title: "Trademark Lawyer India",
    desc: "Specialized trademark opposition, cancellation, and registry advocacy.",
    href: "/trademark-lawyer-india",
  },
  {
    title: "Trademark Attorney India",
    desc: "Direct counsel for foreign corporations and Amazon sellers.",
    href: "/trademark-attorney-india",
  },
  {
    title: "Trademark Agent India",
    desc: "Registered agent services and Form TM-M Power of Attorney handling.",
    href: "/trademark-agent-india",
  },
  {
    title: "Trademark Registration India",
    desc: "End-to-end trademark search, classification, and filing.",
    href: "/trademark-registration-india",
  },
];

export default function IpLawyerIndiaPage() {
  const legalSchema = getLegalServiceSchema({
    name: "Sharma & Sharma IP Litigation Counsel",
    url: `${site.url}/ip-lawyer-india`,
    description: "Senior Indian IP Lawyer practice handling High Court litigation, injunctions, oppositions, and corporate IP advisory.",
  });

  const faqSchema = getFAQSchema(ipLawyerFaqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Services", url: `${site.url}/services` },
    { name: "IP Lawyer India", url: `${site.url}/ip-lawyer-india` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        label="Commercial IP Litigation & Advisory"
        title="Senior Intellectual Property Counsel in India."
        intro="Representing global brand owners, technology corporations, and domestic enterprises in High Court litigation, ex-parte injunctions, opposition defense, and strategic IP portfolio management since 1972."
        image="/media/IP Litigation.jpeg"
        imageAlt="Senior Indian IP Lawyer Advocacy and Courtroom Representation"
      />

      {/* TRUST STRIP */}
      <div className="border-b border-line bg-paper py-5 select-none">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-between gap-y-4 gap-x-8 text-xs font-sans text-navy font-medium">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>Delhi High Court Practice</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>Ex-Parte Injunction Mastery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>Tis Hazari Legal Heritage</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>50+ Years Courtroom Standing</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: PERSPECTIVE */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <SectionLabel>Litigation Authority</SectionLabel>
              <SplitHeading className="display mt-6 text-[clamp(2.2rem,4.5vw,3.8rem)] text-navy leading-tight">
                Decisive Courtroom Advocacy for Brand Integrity.
              </SplitHeading>
              <p className="mt-6 text-[15px] leading-relaxed text-muted font-light">
                Intellectual property litigation in India demands deep procedural mastery of the Commercial Courts Act, law of injunctions, and evidentiary standards.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-6 text-[15px] leading-relaxed text-muted font-light">
              <p>
                When unauthorized third parties manufacture counterfeit goods, clone software interfaces, or adopt deceptively similar marks, administrative registry proceedings must be backed by court enforcement.
              </p>
              <p>
                Our senior **IP Lawyers** represent clients before Commercial Courts, the Delhi High Court IPR Division, and appellate tribunals. We obtain urgent ex-parte ad-interim injunctions, secure Court Commissioner seizure orders, and enforce judgment decrees.
              </p>
              <div className="p-6 bg-paper border-l-2 border-gold rounded-r-[4px] mt-8">
                <span className="text-[10px] tracking-widest text-gold uppercase font-bold block mb-1 font-mono">
                  HIGH COURT BENCH ADVOCACY
                </span>
                <p className="font-serif italic text-navy text-[16px] leading-snug">
                  &ldquo;Securing an immediate ex-parte injunction freezes infringing inventory and protects corporate goodwill before irreversible market damage occurs.&rdquo;
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
            <SectionLabel>Litigation Strategy</SectionLabel>
            <SplitHeading className="display mt-4 text-[clamp(2.2rem,4vw,3.5rem)] text-navy">
              5-Step IP Litigation Lifecycle.
            </SplitHeading>
          </div>

          <div className="space-y-6">
            {advocacySteps.map((s, idx) => (
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
            <SectionLabel>Litigation FAQs</SectionLabel>
            <SplitHeading className="display mt-4 text-[clamp(2.2rem,4.5vw,3.8rem)] text-navy">
              IP Advocacy FAQs.
            </SplitHeading>
          </div>

          <div className="max-w-4xl">
            <Accordion items={ipLawyerFaqs} />
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
