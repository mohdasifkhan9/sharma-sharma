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
  FileText,
  FileSignature,
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
  title: "Trademark Registration in India | Sharma & Sharma | IPMARK",
  description:
    "Complete trademark registration in India for US, Chinese, and foreign corporations, founders, and domestic enterprises. Statutory search, filing, and registry clearance since 1972.",
  keywords: [
    "Trademark Registration in India",
    "Trademark Registration in India for US Businesses",
    "Trademark Registration in India for Chinese Businesses",
    "Trademark Registration for Indian Businesses",
    "Foreign Company Trademark Registration India",
    "Trade Marks Registry India",
  ],
  alternates: {
    canonical: `${site.url}/trademark-registration-india`,
  },
  openGraph: {
    title: "Trademark Registration in India | Sharma & Sharma | IPMARK",
    description:
      "Comprehensive trademark availability search, Nice classification, registry examination defense, and registration certificate issuance in India.",
    url: `${site.url}/trademark-registration-india`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trademark Registration in India | Sharma & Sharma | IPMARK",
    description:
      "Established 1972. Five decades of statutory trademark registration and portfolio defense across all 45 Nice classes in India.",
  },
};

const registrationFaqs = [
  {
    q: "How long does trademark registration take in India?",
    a: "Under standard statutory processing before the Trade Marks Registry of India, straightforward applications take 6 to 12 months from filing to final registration certificate issuance. Expedited examination under Rule 34 can issue examination reports within 5–10 business days.",
  },
  {
    q: "Can foreign companies apply for trademark registration in India without a local office?",
    a: "Yes. Under Section 18 of the Trade Marks Act 1999, foreign entities (US, Chinese, UK, EU) can register trademarks directly through a registered Indian Trademark Attorney using their legal representative's Indian service address.",
  },
  {
    q: "What is the validity period of a registered trademark in India?",
    a: "A registered trademark in India is valid for ten (10) years from the date of application filing. It can be renewed indefinitely for successive ten-year periods upon payment of statutory renewal fees.",
  },
  {
    q: "What is the difference between ® and ™ symbols in India?",
    a: "The ™ symbol indicates an unregistered trademark or pending application. The ® symbol signifies a fully registered trademark granted by the Trade Marks Registry. Using ® on unregistered marks is an offense under Section 107 of the Act.",
  },
  {
    q: "Is Priority Claim under the Paris Convention recognized in India?",
    a: "Yes. India is a member of the Paris Convention. Applicants from member countries (including the US and China) can claim priority within six (6) months of filing their convention home application.",
  },
];

export default function TrademarkRegistrationIndiaPage() {
  const legalSchema = getLegalServiceSchema({
    name: "Sharma & Sharma Trademark Registration Practice India",
    description: "Statutory trademark registration services in India for US, Chinese, foreign, and Indian enterprises.",
    url: `${site.url}/trademark-registration-india`,
  });

  const faqSchema = getFAQSchema(registrationFaqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Trademark Registration in India", url: `${site.url}/trademark-registration-india` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO SECTION */}
      <PageHero
        label="Intellectual Property Registration"
        title="Trademark Registration in India"
        intro="The Name That Carries Your Reputation. Since 1972, Sharma & Sharma has delivered end-to-end statutory trademark protection, class mapping, and registry clearance for US corporations, global enterprises, and Indian market leaders."
        image="/media/trademark-registration-india-guide.jpeg"
        imageAlt="Sharma & Sharma Trademark Registration Archives Delhi"
      />

      {/* SECTION 1: US BUSINESSES */}
      <Section className="bg-paper border-b border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <SectionLabel>Cross-Border Expansion</SectionLabel>
              <SplitHeading className="display mt-4 text-[clamp(2.2rem,5vw,4.2rem)] text-navy">
                Trademark Registration in India for US Businesses
              </SplitHeading>

              <div className="mt-8 space-y-5 text-base text-muted font-light leading-relaxed">
                <p>
                  For United States corporations, Amazon brand owners, SaaS platforms, and multinational brands expanding into India, securing statutory trademark rights is the cornerstone of market protection. India operates strictly under a <strong>&quot;first-to-use&quot; and &quot;first-to-file&quot; hybrid common law framework</strong>.
                </p>
                <p>
                  American enterprises encounter unique challenges before the Indian Trade Marks Registry, including distinctiveness objections under Section 9 and similarity conflicts under Section 11. Sharma & Sharma acts as local IP counsel, managing Paris Convention priority claims, US USPTO cross-filings, and Amazon Brand Registry verification.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-cream border border-line/60 rounded-[4px]">
                  <h4 className="font-serif text-lg text-navy">Paris Convention Priority</h4>
                  <p className="text-xs text-muted mt-1">Claim 6-month US priority under Section 154 of the Trade Marks Act 1999.</p>
                </div>
                <div className="p-4 bg-cream border border-line/60 rounded-[4px]">
                  <h4 className="font-serif text-lg text-navy">Amazon Brand Registry</h4>
                  <p className="text-xs text-muted mt-1">Accelerated TM filing numbers for instant Amazon India marketplace protection.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <MediaFrame
                src="/media/Lawyer's_desk_Delhi_heritage.jpeg"
                alt="US to India Trademark Filing Docket"
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
                src="/media/Combination Mark.jpeg"
                alt="Chinese Cross-Border Brand Protection"
                className="aspect-[4/3] w-full"
              />
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <SectionLabel>Global Supply Chain & Tech</SectionLabel>
              <SplitHeading className="display mt-4 text-[clamp(2.2rem,5vw,4.2rem)] text-navy">
                Trademark Registration in India for Chinese Businesses
              </SplitHeading>

              <div className="mt-8 space-y-5 text-base text-muted font-light leading-relaxed">
                <p>
                  China-based electronics manufacturers, cross-border e-commerce vendors, tech platforms, and consumer product exporters require proactive brand clearance prior to entering the Indian commercial landscape. Unregistered Chinese brands in India face high exposure to bad-faith squatting and unauthorized local distributor filings.
                </p>
                <p>
                  Our firm represents Chinese applicants directly before the Delhi, Mumbai, Kolkata, Chennai, and Ahmedabad Registry branches, handling dual-script (Chinese Hanzi to English transliteration) filings, Form TM-M Power of Attorney execution, and customs enforcement registrations.
                </p>
              </div>

              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3 text-sm text-navy font-medium">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span>Dual Script Transliteration & Phonetic Search Protection</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-navy font-medium">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span>Bad-Faith Squatting & Unauthorized Distributor Injunctions</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-navy font-medium">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span>Customs Recordation under Intellectual Property Rights Rules</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 3: INDIAN BUSINESSES */}
      <Section className="bg-paper border-b border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel>Domestic Brand Building</SectionLabel>
            <SplitHeading className="display mt-4 text-[clamp(2.2rem,5vw,4.2rem)] text-navy">
              Trademark Registration for Indian Businesses
            </SplitHeading>
            <p className="mt-6 text-base text-muted font-light leading-relaxed">
              From D2C startups and manufacturing conglomerates to legacy Indian enterprises, registering your word mark, logo, device, or slogan creates an indefeasible commercial monopoly across all 28 states and 8 union territories.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-cream border border-line/70 rounded-[4px]">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-navy">MSME Statutory Discounts</h3>
              <p className="mt-3 text-sm text-muted font-light leading-relaxed">
                Eligible Indian MSMEs and recognized DPIIT startups receive a 50% official government fee reduction on statutory filing fees (₹4,500 vs ₹9,000 per class).
              </p>
            </div>

            <div className="p-8 bg-cream border border-line/70 rounded-[4px]">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-navy">Comprehensive Class Mapping</h3>
              <p className="mt-3 text-sm text-muted font-light leading-relaxed">
                Strategic selection across 34 Goods classes and 11 Service classes under the Nice Classification 12th Edition to eliminate registry overlap.
              </p>
            </div>

            <div className="p-8 bg-cream border border-line/70 rounded-[4px]">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-navy">Infringement Remedy</h3>
              <p className="mt-3 text-sm text-muted font-light leading-relaxed">
                Statutory standing under Section 29 to file civil suits for infringement, seek ex-parte injunctions, and claim punitive damages before High Courts.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 4: WHY FOREIGN COMPANIES SHOULD REGISTER */}
      <Section className="bg-cream border-b border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl">
            <SectionLabel>Strategic Necessity</SectionLabel>
            <SplitHeading className="display mt-4 text-[clamp(2.2rem,5vw,4.2rem)] text-navy">
              Why Foreign Companies Should Register a Trademark in India
            </SplitHeading>
            <p className="mt-6 text-base text-muted font-light leading-relaxed">
              India&apos;s rapidly growing consumer market of 1.4 billion people represents immense expansion opportunity. However, foreign trademarks without local Indian registration face significant statutory vulnerabilities:
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-paper border border-line/60 rounded-[4px]">
              <span className="font-mono text-xs text-gold">01</span>
              <h4 className="font-serif text-xl text-navy mt-2">Prevent Bad-Faith Squatting</h4>
              <p className="text-xs text-muted mt-2 font-light leading-relaxed">
                Local squatters frequently file foreign brand names in India to extort buyout settlements. Early filing establishes prior statutory date.
              </p>
            </div>

            <div className="p-6 bg-paper border border-line/60 rounded-[4px]">
              <span className="font-mono text-xs text-gold">02</span>
              <h4 className="font-serif text-xl text-navy mt-2">Border Control Enforcement</h4>
              <p className="text-xs text-muted mt-2 font-light leading-relaxed">
                Indian Customs authorities only seize counterfeit imports/exports if the underlying trademark is registered with Indian Customs.
              </p>
            </div>

            <div className="p-6 bg-paper border border-line/60 rounded-[4px]">
              <span className="font-mono text-xs text-gold">03</span>
              <h4 className="font-serif text-xl text-navy mt-2">Licensing & Franchise Monopolies</h4>
              <p className="text-xs text-muted mt-2 font-light leading-relaxed">
                Secures enforceable statutory royalty structures when licensing brand rights to Indian JV partners or master franchisees.
              </p>
            </div>

            <div className="p-6 bg-paper border border-line/60 rounded-[4px]">
              <span className="font-mono text-xs text-gold">04</span>
              <h4 className="font-serif text-xl text-navy mt-2">Clean Commercial Title</h4>
              <p className="text-xs text-muted mt-2 font-light leading-relaxed">
                Ensures freedom to operate without risk of receiving cease-and-desist letters or passing-off actions from local legacy entities.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 5: CAN FOREIGN COMPANIES REGISTER */}
      <Section className="bg-paper border-b border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <SectionLabel>Legal Eligibility</SectionLabel>
              <SplitHeading className="display mt-4 text-[clamp(2.2rem,5vw,4.2rem)] text-navy">
                Can Foreign Companies Register a Trademark in India?
              </SplitHeading>

              <div className="mt-8 space-y-5 text-base text-muted font-light leading-relaxed">
                <p>
                  <strong>Yes, absolutely.</strong> Section 18 of the Trade Marks Act 1999 explicitly permits any person or corporate entity—whether incorporated in the United States, China, United Kingdom, European Union, or elsewhere—claiming to be the proprietor of a trademark to apply for registration in India.
                </p>
                <p>
                  A foreign entity does <strong>not</strong> need to establish an Indian subsidiary, physical office, or local commercial presence to apply. The law simply requires providing an <em>&quot;Address for Service in India&quot;</em>, which is satisfied by appointing a registered Indian Trademark Attorney or Agent.
                </p>
                <p>
                  Foreign applicants can register marks as <strong>&quot;Proposed to be used in India&quot;</strong>, granting immediate statutory protection before launching actual commercial sales.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-cream p-8 border border-line/70 rounded-[4px]">
              <h3 className="font-serif text-2xl text-navy mb-4">Statutory Options for Foreign Applicants</h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-line/50">
                  <h4 className="font-serif text-lg text-gold">1. National Direct Filing (Recommended)</h4>
                  <p className="text-xs text-muted mt-1">Filed directly with the Indian Trade Marks Registry via local attorney. Fastest examination and direct control over office actions.</p>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-gold">2. Madrid Protocol Designation</h4>
                  <p className="text-xs text-muted mt-1">Designating India in an WIPO international application. Subject to local Indian registry provisional refusal review.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 6: DOCUMENTS REQUIRED FOR FOREIGN COMPANIES */}
      <Section className="bg-cream border-b border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Filing Preparation</SectionLabel>
          <SplitHeading className="display mt-4 max-w-4xl text-[clamp(2.2rem,5vw,4.2rem)] text-navy">
            Documents Required for Foreign Companies
          </SplitHeading>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-paper border border-line/70 rounded-[4px]">
              <FileSignature className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-serif text-xl text-navy">1. Power of Attorney (Form TM-M)</h3>
              <p className="text-xs text-muted mt-2 leading-relaxed font-light">
                Simply signed by an authorized signatory of the applicant entity. No legalization or embassy apostille required for standard filing.
              </p>
            </div>

            <div className="p-8 bg-paper border border-line/70 rounded-[4px]">
              <FileText className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-serif text-xl text-navy">2. Applicant Corporate Identity</h3>
              <p className="text-xs text-muted mt-2 leading-relaxed font-light">
                Legal corporate name, state/country of incorporation, and registered office address of the foreign business.
              </p>
            </div>

            <div className="p-8 bg-paper border border-line/70 rounded-[4px]">
              <FileCheck2 className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-serif text-xl text-navy">3. Clear Mark Representation</h3>
              <p className="text-xs text-muted mt-2 leading-relaxed font-light">
                Exact word mark text or high-resolution vector/image file for logo, label, shape, or device mark.
              </p>
            </div>

            <div className="p-8 bg-paper border border-line/70 rounded-[4px]">
              <Globe2 className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-serif text-xl text-navy">4. Nice Class Goods & Services Specification</h3>
              <p className="text-xs text-muted mt-2 leading-relaxed font-light">
                Detailed description of products or services mapped to Nice Classification Classes 1 through 45.
              </p>
            </div>

            <div className="p-8 bg-paper border border-line/70 rounded-[4px]">
              <Clock className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-serif text-xl text-navy">5. User Date Affidavit (If Claiming Prior Use)</h3>
              <p className="text-xs text-muted mt-2 leading-relaxed font-light">
                If claiming use in India prior to filing date, a signed User Affidavit accompanied by documentary evidence (invoices, domain records).
              </p>
            </div>

            <div className="p-8 bg-paper border border-line/70 rounded-[4px]">
              <Award className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-serif text-xl text-navy">6. Paris Convention Priority Certificate</h3>
              <p className="text-xs text-muted mt-2 leading-relaxed font-light">
                Certified copy of home country application if claiming 6-month convention priority in India.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 7: FREQUENTLY ASKED QUESTIONS */}
      <Section className="bg-paper">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionLabel>Statutory Clarifications</SectionLabel>
              <SplitHeading className="display mt-4 text-[clamp(2.2rem,5vw,4.2rem)] text-navy">
                Frequently Asked Questions
              </SplitHeading>
              <p className="mt-6 text-sm text-muted font-light leading-relaxed">
                Expert answers regarding trademark registration in India, foreign company eligibility, priority claims, and statutory timelines.
              </p>
            </div>

            <div className="lg:col-span-7">
              <Accordion items={registrationFaqs} />
            </div>
          </div>
        </div>
      </Section>

      <ConsultationCTA />
    </>
  );
}
