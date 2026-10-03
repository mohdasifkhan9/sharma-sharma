import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Scale,
  Globe2,
  CheckCircle2,
  Building2,
  ArrowUpRight,
  ArrowRight,
  Clock,
  Award,
  FileCheck2,
  HelpCircle,
  Landmark,
  Shield,
  FileText,
  Lock,
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
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Trademark Attorney & Trademark Lawyer in India | Sharma & Sharma",
  description:
    "Premier Trademark Attorney & Trademark Lawyer in India since 1972. Expert legal counsel for US, Chinese, and foreign corporations in Trade Marks Registry prosecution and High Court IP litigation.",
  keywords: [
    "Trademark Attorney in India",
    "Trademark Lawyer in India",
    "Trademark Attorney for US Businesses",
    "Trademark Attorney for Chinese Businesses",
    "Trademark Lawyer for Foreign Companies",
    "Indian IP Counsel",
    "Delhi High Court IP Lawyer",
  ],
  alternates: {
    canonical: `${site.url}/trademark-attorney-india`,
  },
  openGraph: {
    title: "Trademark Attorney & Trademark Lawyer in India | Sharma & Sharma",
    description:
      "Statutory trademark prosecution, examination hearing defense, opposition representation, and High Court IP litigation for international businesses in India.",
    url: `${site.url}/trademark-attorney-india`,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: `${site.url}/media/sharma_sharma_office_reception.jpeg`,
        width: 1200,
        height: 630,
        alt: "Trademark Attorney & Trademark Lawyer in India | Sharma & Sharma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trademark Attorney & Trademark Lawyer in India | Sharma & Sharma",
    description:
      "Established 1972. Five decades of specialized trademark advocacy and High Court IP litigation in India.",
    images: [`${site.url}/media/sharma_sharma_office_reception.jpeg`],
  },
};

const attorneyFaqs = [
  {
    q: "What is the role of a Trademark Attorney in India?",
    a: "A Trademark Attorney in India is an advocate enrolled with the Bar Council of India who specializes in intellectual property law. Attorneys handle statutory filings, draft complex responses to Examination Reports, represent clients in contested Registrar hearings, prosecute oppositions, and litigate infringement suits before High Courts.",
  },
  {
    q: "How does an Indian Trademark Lawyer assist US corporations?",
    a: "An Indian Trademark Lawyer acts as local legal counsel for US companies, managing cross-border filings under the Paris Convention, structuring Amazon Brand Registry filings, defending against local squatters, and enforcing IP rights in Indian courts.",
  },
  {
    q: "What is the difference between a Trademark Attorney and a Trademark Lawyer in India?",
    a: "In India, 'Trademark Attorney' and 'Trademark Lawyer' are practically synonymous terms referring to advocates with IP specialization. Both possess full rights of audience before the Trade Marks Registry, Commercial Courts, and High Courts.",
  },
  {
    q: "Can a foreign company hire an Indian Trademark Attorney directly?",
    a: "Yes. Foreign companies can appoint an Indian Trademark Attorney directly by executing a Power of Attorney (Form TM-M). The attorney provides an Indian address for service and manages all statutory communication with the Registry.",
  },
  {
    q: "What happens if my trademark application receives an Office Action in India?",
    a: "If an Examination Report raises Section 9 (distinctiveness) or Section 11 (similarity) objections, your Trademark Attorney prepares a statutory written response backed by judicial precedents and represents your firm during official show-cause hearings.",
  },
];

export default function TrademarkAttorneyIndiaPage() {
  const legalSchema = getLegalServiceSchema({
    name: "Sharma & Sharma Trademark Attorney & Lawyer Practice India",
    description: "Legal advocacy, trademark prosecution, and High Court IP litigation in India for international entities.",
    url: `${site.url}/trademark-attorney-india`,
  });

  const faqSchema = getFAQSchema(attorneyFaqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Trademark Attorney & Trademark Lawyer in India", url: `${site.url}/trademark-attorney-india` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO SECTION */}
      <PageHero
        label="Intellectual Property Advocacy"
        title="Trademark Attorney & Trademark Lawyer in India"
        intro="Preserving commercial identity through five decades of legal precision. Sharma & Sharma delivers specialized trademark prosecution, opposition representation, and High Court litigation for US corporations, Chinese exporters, global brands, and domestic market leaders."
        image="/media/sharma_sharma_office_reception.jpeg"
        imageAlt="Sharma & Sharma Law Offices Delhi High Court Legal Practice"
      />

      {/* SECTION 1: US BUSINESSES */}
      <Section className="bg-paper border-b border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <SectionLabel>Cross-Border Legal Counsel</SectionLabel>
              <SplitHeading className="display mt-4 text-[clamp(2.2rem,5vw,4.2rem)] text-navy">
                Trademark Attorney for US Businesses Registering in India
              </SplitHeading>

              <div className="mt-8 space-y-5 text-base text-muted font-light leading-relaxed">
                <p>
                  American enterprises, technology platforms, and Amazon brand owners entering the Indian market require experienced <strong>Trademark Attorneys in India</strong> who understand both US commercial expectations and Indian statutory jurisprudence under the Trade Marks Act 1999.
                </p>
                <p>
                  Our firm represents US clients directly before the Trade Marks Registry and Intellectual Property Division (IPD) of the Delhi High Court. We assist American businesses in claiming Paris Convention priority, overcoming Section 9/11 examination objections, and establishing enforceable brand monopolies across India.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-cream border border-line/60 rounded-[4px]">
                  <h4 className="font-serif text-lg text-navy">US-India Priority Filing</h4>
                  <p className="text-xs text-muted mt-1">Direct Paris Convention claims within 6 months of USPTO filing.</p>
                </div>
                <div className="p-4 bg-cream border border-line/60 rounded-[4px]">
                  <h4 className="font-serif text-lg text-navy">Amazon Brand Enforcement</h4>
                  <p className="text-xs text-muted mt-1">Filing verification numbers for instant protection on Amazon.in.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <MediaFrame
                src="/media/lawyers-desk-delhi-heritage.jpeg"
                alt="US Legal Docket Sharma & Sharma"
                className="aspect-[4/3] w-full"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 2: CHINESE BUSINESSES */}
      <Section className="bg-cream border-b border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <MediaFrame
                src="/media/combinationmark.jpg"
                alt="Chinese Enterprise Brand Protection Practice"
                className="aspect-[4/3] w-full"
              />
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <SectionLabel>Supply Chain & Tech Protection</SectionLabel>
              <SplitHeading className="display mt-4 text-[clamp(2.2rem,5vw,4.2rem)] text-navy">
                Trademark Attorney for Chinese Businesses Registering in India
              </SplitHeading>

              <div className="mt-8 space-y-5 text-base text-muted font-light leading-relaxed">
                <p>
                  Chinese manufacturers, e-commerce conglomerates, and technology exporters face unique legal hurdles when registering trademarks in India. Language barriers, script transliteration (Chinese Hanzi to English), and unauthorized filings by local distributor entities require aggressive legal intervention.
                </p>
                <p>
                  As specialized <strong>Trademark Attorneys for Chinese businesses</strong>, Sharma & Sharma manages direct registry filings, defends against bad-faith trademark squatting, executes Form TM-M Power of Attorney documentation, and secures Customs Recordation under the Intellectual Property Rights (Imported Goods) Rules.
                </p>
              </div>

              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3 text-sm text-navy font-medium">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span>Hanzi to English Script Transliteration & Search</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-navy font-medium">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span>Opposition Prosecution Against Unauthorized Distributor Filings</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-navy font-medium">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span>Direct Representation Across All 5 Indian Registry Branches</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 3: TRADEMARK ATTORNEY SERVICES IN INDIA */}
      <Section className="bg-paper border-b border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Comprehensive Practice Scope</SectionLabel>
          <SplitHeading className="display mt-4 max-w-4xl text-[clamp(2.2rem,5vw,4.2rem)] text-navy">
            Trademark Attorney Services in India
          </SplitHeading>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-cream border border-line/70 rounded-[4px]">
              <Shield className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-serif text-2xl text-navy">Comprehensive Brand Search</h3>
              <p className="text-xs text-muted mt-3 leading-relaxed font-light">
                Deep statutory availability searches covering word mark phonetics, logo similarities, well-known mark conflicts, and pending Registry filings.
              </p>
            </div>

            <div className="p-8 bg-cream border border-line/70 rounded-[4px]">
              <FileText className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-serif text-2xl text-navy">Office Action Responses</h3>
              <p className="text-xs text-muted mt-3 leading-relaxed font-light">
                Drafting precise statutory responses to Examination Reports raising Section 9 (lack of distinctiveness) and Section 11 (relative grounds) objections.
              </p>
            </div>

            <div className="p-8 bg-cream border border-line/70 rounded-[4px]">
              <Landmark className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-serif text-2xl text-navy">Show-Cause Hearing Defense</h3>
              <p className="text-xs text-muted mt-3 leading-relaxed font-light">
                Personal advocacy before Officers of the Trade Marks Registry to overcome official objections and secure advertisement in the Trade Marks Journal.
              </p>
            </div>

            <div className="p-8 bg-cream border border-line/70 rounded-[4px]">
              <Scale className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-serif text-2xl text-navy">Opposition Prosecution</h3>
              <p className="text-xs text-muted mt-3 leading-relaxed font-light">
                Filing Form TM-O Oppositions against conflicting third-party marks and defending clients&apos; published marks through evidence affidavits.
              </p>
            </div>

            <div className="p-8 bg-cream border border-line/70 rounded-[4px]">
              <Lock className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-serif text-2xl text-navy">Rectification & Cancellation</h3>
              <p className="text-xs text-muted mt-3 leading-relaxed font-light">
                Initiating proceedings before the High Court IPD or Registrar for removal of non-used or improperly registered third-party marks.
              </p>
            </div>

            <div className="p-8 bg-cream border border-line/70 rounded-[4px]">
              <Award className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-serif text-2xl text-navy">Portfolio Renewals & Assignments</h3>
              <p className="text-xs text-muted mt-3 leading-relaxed font-light">
                Managing 10-year statutory renewals, brand assignments, licensing agreements, and corporate name changes in the Registry records.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 4: TRADEMARK LAWYER FOR FOREIGN COMPANIES */}
      <Section className="bg-cream border-b border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <SectionLabel>Litigation & High Court Practice</SectionLabel>
              <SplitHeading className="display mt-4 text-[clamp(2.2rem,5vw,4.2rem)] text-navy">
                Trademark Lawyer for Foreign Companies in India
              </SplitHeading>

              <div className="mt-8 space-y-5 text-base text-muted font-light leading-relaxed">
                <p>
                  When trademark disputes escalate beyond administrative Registry proceedings, foreign corporations require a seasoned <strong>Trademark Lawyer in India</strong> with full rights of audience before High Courts and Commercial Courts.
                </p>
                <p>
                  Our senior advocates represent foreign clients in civil suits for trademark infringement, passing off actions, ex-parte temporary injunctions, Anton Piller search orders, and border enforcement seizures. We protect foreign intellectual property against counterfeiters, unauthorized sellers, and rogue domain registrants.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-lg text-navy">Ex-Parte Injunctions</h4>
                    <p className="text-xs text-muted">Securing immediate emergency court orders restraining infringers prior to notice.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-lg text-navy">High Court IPD Advocacy</h4>
                    <p className="text-xs text-muted">Direct representation before specialized Intellectual Property Divisions of High Courts.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-paper p-8 border border-line/70 rounded-[4px]">
              <h3 className="font-serif text-2xl text-navy mb-4">High Court Litigation Scope</h3>
              <ul className="space-y-3 text-xs text-muted font-light">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                  Civil Suits for Trademark Infringement & Passing Off
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                  Ex-Parte Interim Injunctions & Local Commissioner Appointments
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                  Domain Name Dispute Resolution (INDRP & UDRP)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                  Customs Counterfeit Seizures & Border Rights Rules
                </li>
                <li className="flex items-center gap-2 pt-3 border-t border-line/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                  <Link href="/trademark-registration-india" className="text-navy hover:text-gold transition-colors font-medium">
                    Explore Trademark Registration in India
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                  <Link href="/trademark-agent-india" className="text-navy hover:text-gold transition-colors font-medium">
                    Appoint a Registered Trademark Agent in India
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 5: WHY CHOOSE IPMARK */}
      <Section className="bg-paper border-b border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel>Institutional Trust</SectionLabel>
            <SplitHeading className="display mt-4 text-[clamp(2.2rem,5vw,4.2rem)] text-navy">
              Why Choose IPMARK as Your Trademark Attorney
            </SplitHeading>
            <p className="mt-6 text-base text-muted font-light leading-relaxed">
              Established in 1972, Sharma & Sharma (IPMARK) combines five decades of statutory legacy with cutting-edge cross-border portfolio administration.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-cream border border-line/70 rounded-[4px] text-center">
              <span className="font-serif text-4xl text-gold">50+</span>
              <h4 className="font-serif text-xl text-navy mt-2">Years Legacy</h4>
              <p className="text-xs text-muted mt-2 font-light">Continuous intellectual property practice in Delhi since 1972.</p>
            </div>

            <div className="p-6 bg-cream border border-line/70 rounded-[4px] text-center">
              <span className="font-serif text-4xl text-gold">99.4%</span>
              <h4 className="font-serif text-xl text-navy mt-2">Success Rate</h4>
              <p className="text-xs text-muted mt-2 font-light">Proven track record in administrative hearings and opposition defense.</p>
            </div>

            <div className="p-6 bg-cream border border-line/70 rounded-[4px] text-center">
              <span className="font-serif text-4xl text-gold">150+</span>
              <h4 className="font-serif text-xl text-navy mt-2">Global Network</h4>
              <p className="text-xs text-muted mt-2 font-light">Associate counsel network across major international IP jurisdictions.</p>
            </div>

            <div className="p-6 bg-cream border border-line/70 rounded-[4px] text-center">
              <span className="font-serif text-4xl text-gold">100%</span>
              <h4 className="font-serif text-xl text-navy mt-2">Direct Counsel</h4>
              <p className="text-xs text-muted mt-2 font-light">Direct attorney oversight without intermediate agent outsourcing.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 6: FREQUENTLY ASKED QUESTIONS */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionLabel>Legal Guidance</SectionLabel>
              <SplitHeading className="display mt-4 text-[clamp(2.2rem,5vw,4.2rem)] text-navy">
                Frequently Asked Questions
              </SplitHeading>
              <p className="mt-6 text-sm text-muted font-light leading-relaxed">
                Clear answers regarding trademark attorney selection, office actions, hearing representation, and High Court IP litigation in India.
              </p>
            </div>

            <div className="lg:col-span-7">
              <Accordion items={attorneyFaqs} />
            </div>
          </div>
        </div>
      </Section>

      <ConsultationCTA />
    </>
  );
}
