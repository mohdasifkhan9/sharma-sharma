import type { Metadata } from "next";
import Link from "next/link";
import {
  UserCheck,
  FileCheck2,
  Globe2,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Building2,
  ArrowUpRight,
  HelpCircle,
  FileSignature,
  Scale,
  Award,
  Landmark,
  FileText,
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
  title: "Trademark Agent in India | Sharma & Sharma | IPMARK",
  description:
    "Registered Trademark Agent in India representing foreign law firms, US corporations, Chinese exporters, and domestic businesses before the Trade Marks Registry of India since 1972.",
  keywords: [
    "Trademark Agent in India",
    "Registered Trademark Agent Delhi",
    "Form TM-M Power of Attorney India",
    "Official Indian Trademark Agent",
    "Foreign Law Firm Agency India",
    "Trade Marks Registry Agent India",
    "Difference Between Trademark Attorney and Agent",
  ],
  alternates: {
    canonical: `${site.url}/trademark-agent-india`,
  },
  openGraph: {
    title: "Trademark Agent in India | Sharma & Sharma | IPMARK",
    description:
      "Statutory agent representation under Section 145 of Trade Marks Act 1999, Form TM-M Power of Attorney handling, and expedited examination in India.",
    url: `${site.url}/trademark-agent-india`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trademark Agent in India | Sharma & Sharma | IPMARK",
    description:
      "Established 1972. Five decades of statutory Registered Trademark Agent services in India.",
  },
};

const agentFaqs = [
  {
    q: "Who is a Trademark Agent in India?",
    a: "A Trademark Agent in India is a statutory practitioner registered under Section 145 of the Trade Marks Act 1999 who has passed the Trade Marks Registry examination or is an advocate authorized to prepare, sign, execute, and file trademark applications and represent applicants before the Registrar.",
  },
  {
    q: "How does Power of Attorney (Form TM-M) work for foreign applicants?",
    a: "Foreign applicants execute a Form TM-M Power of Attorney authorizing an Indian Trademark Agent to act on their behalf. The agent serves as the official Indian address for service, receiving all registry notices and filing official responses.",
  },
  {
    q: "What is the difference between a Trademark Attorney and a Trademark Agent?",
    a: "A Trademark Agent is registered with the Trade Marks Registry to handle administrative filings, examination responses, and registry hearings. A Trademark Attorney is an advocate admitted to the Bar Council who can handle both registry proceedings AND litigate infringement suits before High Courts.",
  },
  {
    q: "Is consular legalization required for Form TM-M Power of Attorney?",
    a: "No. For standard trademark registration before the Trade Marks Registry, a simply signed Form TM-M on company letterhead is accepted without requiring embassy apostille or consular legalization.",
  },
  {
    q: "Can a Registered Trademark Agent handle expedited examination?",
    a: "Yes. Your agent can file Form TM-M with prescribed expedited fees under Rule 34, prompting the Registrar to issue the Examination Report within 5 to 10 business days.",
  },
];

export default function TrademarkAgentIndiaPage() {
  const legalSchema = getLegalServiceSchema({
    name: "Sharma & Sharma Registered Trademark Agent Practice India",
    description: "Statutory Trademark Agent representation and Form TM-M agency services in India.",
    url: `${site.url}/trademark-agent-india`,
  });

  const faqSchema = getFAQSchema(agentFaqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Trademark Agent in India", url: `${site.url}/trademark-agent-india` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO SECTION */}
      <PageHero
        label="Statutory Agency Practice"
        title="Trademark Agent in India"
        intro="Registered agency representation before the Trade Marks Registry of India since 1972. We act as local statutory agents for foreign law firms, US enterprises, Chinese exporters, and domestic brand owners."
        image="/media/trademark-registration-india-guide.jpeg"
        imageAlt="Sharma & Sharma Registered Trademark Agent Records Delhi"
      />

      {/* SECTION 1: WHO IS A TRADEMARK AGENT IN INDIA */}
      <Section className="bg-paper border-b border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <SectionLabel>Statutory Definition</SectionLabel>
              <SplitHeading className="display mt-4 text-[clamp(2.2rem,5vw,4.2rem)] text-navy">
                Who is a Trademark Agent in India?
              </SplitHeading>

              <div className="mt-8 space-y-5 text-base text-muted font-light leading-relaxed">
                <p>
                  A <strong>Trademark Agent in India</strong> is a statutory professional registered with the Controller General of Patents, Designs and Trade Marks under Section 145 and Rule 144 of the Trade Marks Rules 2017.
                </p>
                <p>
                  Statutory agents hold official authorization to prepare, sign, execute, and prosecute trademark applications, submit evidence affidavits, and represent applicants during official show-cause hearings across all five Registry branches (Delhi, Mumbai, Kolkata, Chennai, and Ahmedabad).
                </p>
              </div>

              <div className="mt-8 p-4 bg-cream border border-line/60 rounded-[4px] flex items-center gap-4">
                <UserCheck className="w-8 h-8 text-gold shrink-0" />
                <p className="text-xs text-navy font-medium leading-relaxed">
                  Registered under Section 145 of the Trade Marks Act 1999 — holding full statutory authority to act as Indian Address for Service for overseas entities.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <MediaFrame
                src="/media/Lawyer's_desk_Delhi_heritage.jpeg"
                alt="Trade Marks Registry Agent Docket"
                className="aspect-[4/3] w-full"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 2: SERVICES OFFERED BY A TRADEMARK AGENT */}
      <Section className="bg-cream border-b border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Full Agency Lifecycle</SectionLabel>
          <SplitHeading className="display mt-4 max-w-4xl text-[clamp(2.2rem,5vw,4.2rem)] text-navy">
            Services Offered by a Trademark Agent
          </SplitHeading>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-paper border border-line/70 rounded-[4px]">
              <FileSignature className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-serif text-xl text-navy">Form TM-M Power of Attorney</h3>
              <p className="text-xs text-muted mt-2 leading-relaxed font-light">
                Executing statutory authorization to serve as official Indian Address for Service for foreign and domestic applicants.
              </p>
            </div>

            <div className="p-8 bg-paper border border-line/70 rounded-[4px]">
              <FileCheck2 className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-serif text-xl text-navy">Application Filing & Docketing</h3>
              <p className="text-xs text-muted mt-2 leading-relaxed font-light">
                Precise e-filing across Classes 1–45 with accurate Nice Classification mapping and user date claims.
              </p>
            </div>

            <div className="p-8 bg-paper border border-line/70 rounded-[4px]">
              <FileText className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-serif text-xl text-navy">Examination Response Submission</h3>
              <p className="text-xs text-muted mt-2 leading-relaxed font-light">
                Preparing and submitting formal written replies to Section 9 and Section 11 Examination Reports.
              </p>
            </div>

            <div className="p-8 bg-paper border border-line/70 rounded-[4px]">
              <Landmark className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-serif text-xl text-navy">Registry Hearing Advocacy</h3>
              <p className="text-xs text-muted mt-2 leading-relaxed font-light">
                Personal attendance at show-cause hearings before Senior Examiners and Assistant Registrars.
              </p>
            </div>

            <div className="p-8 bg-paper border border-line/70 rounded-[4px]">
              <Clock className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-serif text-xl text-navy">Expedited Examination Requests</h3>
              <p className="text-xs text-muted mt-2 leading-relaxed font-light">
                Filing Rule 34 expedite requests to obtain examination reports within 5 to 10 working days.
              </p>
            </div>

            <div className="p-8 bg-paper border border-line/70 rounded-[4px]">
              <Award className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-serif text-xl text-navy">Renewals & Recordals</h3>
              <p className="text-xs text-muted mt-2 leading-relaxed font-light">
                Managing 10-year renewals, brand assignments, merger recordals, and registered user agreements.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 3: TRADEMARK REGISTRATION PROCESS */}
      <Section className="bg-paper border-b border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Step-by-Step Workflow</SectionLabel>
          <SplitHeading className="display mt-4 max-w-4xl text-[clamp(2.2rem,5vw,4.2rem)] text-navy">
            Trademark Registration Process
          </SplitHeading>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-cream border border-line/60 rounded-[4px]">
              <span className="font-mono text-xs text-gold">STAGE 01</span>
              <h4 className="font-serif text-lg text-navy mt-2">Search & Strategy</h4>
              <p className="text-xs text-muted mt-2 font-light leading-relaxed">Statutory search across word marks, phonetics, and logo devices to verify availability.</p>
            </div>

            <div className="p-6 bg-cream border border-line/60 rounded-[4px]">
              <span className="font-mono text-xs text-gold">STAGE 02</span>
              <h4 className="font-serif text-lg text-navy mt-2">Filing & TM Issuance</h4>
              <p className="text-xs text-muted mt-2 font-light leading-relaxed">Official e-filing granting immediate application number and ™ usage right.</p>
            </div>

            <div className="p-6 bg-cream border border-line/60 rounded-[4px]">
              <span className="font-mono text-xs text-gold">STAGE 03</span>
              <h4 className="font-serif text-lg text-navy mt-2">Examination & Defense</h4>
              <p className="text-xs text-muted mt-2 font-light leading-relaxed">Overcoming official objections via written responses and Registry hearings.</p>
            </div>

            <div className="p-6 bg-cream border border-line/60 rounded-[4px]">
              <span className="font-mono text-xs text-gold">STAGE 04</span>
              <h4 className="font-serif text-lg text-navy mt-2">Journal & Registration</h4>
              <p className="text-xs text-muted mt-2 font-light leading-relaxed">4-month Journal advertisement followed by registration certificate issuance (® symbol).</p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 4: WHY CHOOSE A REGISTERED TRADEMARK AGENT */}
      <Section className="bg-cream border-b border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <SectionLabel>Statutory Protection</SectionLabel>
              <SplitHeading className="display mt-4 text-[clamp(2.2rem,5vw,4.2rem)] text-navy">
                Why Choose a Registered Trademark Agent?
              </SplitHeading>

              <div className="mt-8 space-y-5 text-base text-muted font-light leading-relaxed">
                <p>
                  Filing a trademark application through an unregistered intermediary or non-specialized consultant creates severe statutory risks, including improper class descriptions, invalid user claims, missed registry notices, and unhandled office actions leading to abandonment.
                </p>
                <p>
                  A <strong>Registered Trademark Agent</strong> possesses statutory standing under Section 145 of the Trade Marks Act 1999, ensuring your applications comply strictly with statutory deadlines, classification standards, and official registry procedures.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-paper p-8 border border-line/70 rounded-[4px]">
              <h3 className="font-serif text-2xl text-navy mb-4">Statutory Guarantees</h3>
              <ul className="space-y-3 text-xs text-muted font-light">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  Official Registration under Section 145
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  Direct Docketing & Registry Communication
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  Protection Against Default Abandonment Orders
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  Statutory Power of Attorney Handling
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 5: INDIAN BUSINESSES */}
      <Section className="bg-paper border-b border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Domestic Client Scope</SectionLabel>
          <SplitHeading className="display mt-4 max-w-4xl text-[clamp(2.2rem,5vw,4.2rem)] text-navy">
            Trademark Agent for Indian Businesses
          </SplitHeading>

          <p className="mt-6 text-base text-muted font-light leading-relaxed max-w-3xl">
            For Indian startups, MSMEs, manufacturing hubs, and corporate brands, our registered agents manage complete statutory portfolio administration across the Trade Marks Registry branches in Delhi, Mumbai, Kolkata, Chennai, and Ahmedabad.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-cream border border-line/60 rounded-[4px]">
              <h4 className="font-serif text-lg text-navy">MSME 50% Statutory Fee Subsidy</h4>
              <p className="text-xs text-muted mt-1">Claim official government fee reduction (₹4,500 vs ₹9,000 per class) with valid Udyam / DPIIT registration.</p>
            </div>
            <div className="p-4 bg-cream border border-line/60 rounded-[4px]">
              <h4 className="font-serif text-lg text-navy">Statewide Brand Monopoly</h4>
              <p className="text-xs text-muted mt-1">Enforceable statutory title across all 28 states and 8 union territories.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 6: US BUSINESSES */}
      <Section className="bg-cream border-b border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <SectionLabel>US Expansion Agent</SectionLabel>
              <SplitHeading className="display mt-4 text-[clamp(2.2rem,5vw,4.2rem)] text-navy">
                Trademark Agent for US Businesses Registering in India
              </SplitHeading>

              <div className="mt-8 space-y-5 text-base text-muted font-light leading-relaxed">
                <p>
                  American corporations, SaaS platforms, and Amazon sellers require a trusted local Indian Trademark Agent to serve as their statutory <strong>Address for Service in India</strong>.
                </p>
                <p>
                  We manage Paris Convention 6-month priority filings, execute simple Form TM-M Power of Attorney documentation without legalization delays, and provide instant TM filing numbers for Amazon Brand Registry enrolled brands.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <MediaFrame
                src="/media/Combination Mark.jpeg"
                alt="US Agent Representation Docket"
                className="aspect-[4/3] w-full"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 7: CHINESE BUSINESSES */}
      <Section className="bg-paper border-b border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Cross-Border Agency</SectionLabel>
          <SplitHeading className="display mt-4 max-w-4xl text-[clamp(2.2rem,5vw,4.2rem)] text-navy">
            Trademark Agent for Chinese Businesses Registering in India
          </SplitHeading>

          <p className="mt-6 text-base text-muted font-light leading-relaxed max-w-3xl">
            Chinese exporters, cross-border e-commerce brands, and hardware manufacturers entering India depend on direct Indian Trademark Agent representation to navigate dual-script transliteration (Chinese Hanzi to English), bad-faith distributor filings, and Customs Recordation under Indian import/export rules.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-cream border border-line/60 rounded-[4px]">
              <h4 className="font-serif text-lg text-navy">Direct Agent Designation</h4>
              <p className="text-xs text-muted mt-1">Direct representation before Indian Registry without intermediate broker delays.</p>
            </div>
            <div className="p-4 bg-cream border border-line/60 rounded-[4px]">
              <h4 className="font-serif text-lg text-navy">Customs Recordation</h4>
              <p className="text-xs text-muted mt-1">Recordation under IPR Rules for border enforcement against counterfeit shipments.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 8: WHY CHOOSE IPMARK */}
      <Section className="bg-cream border-b border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel>Agency Excellence</SectionLabel>
            <SplitHeading className="display mt-4 text-[clamp(2.2rem,5vw,4.2rem)] text-navy">
              Why Choose IPMARK as Your Trademark Agent?
            </SplitHeading>
            <p className="mt-6 text-base text-muted font-light leading-relaxed">
              Sharma & Sharma (IPMARK) provides official Registered Trademark Agent representation backed by five decades of statutory excellence in Delhi.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-paper border border-line/70 rounded-[4px] text-center">
              <span className="font-serif text-4xl text-gold">1972</span>
              <h4 className="font-serif text-xl text-navy mt-2">Established Heritage</h4>
              <p className="text-xs text-muted mt-2 font-light">Over 50 years representing foreign and domestic brand owners in India.</p>
            </div>

            <div className="p-6 bg-paper border border-line/70 rounded-[4px] text-center">
              <span className="font-serif text-4xl text-gold">5</span>
              <h4 className="font-serif text-xl text-navy mt-2">Registry Branches</h4>
              <p className="text-xs text-muted mt-2 font-light">Direct agency coverage across Delhi, Mumbai, Kolkata, Chennai, and Ahmedabad.</p>
            </div>

            <div className="p-6 bg-paper border border-line/70 rounded-[4px] text-center">
              <span className="font-serif text-4xl text-gold">100%</span>
              <h4 className="font-serif text-xl text-navy mt-2">Statutory Compliance</h4>
              <p className="text-xs text-muted mt-2 font-light">Strict adherence to Section 145 and Trade Marks Rules 2017 standards.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 9: DIFFERENCE BETWEEN ATTORNEY AND AGENT */}
      <Section className="bg-paper border-b border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Comparative Clarity</SectionLabel>
          <SplitHeading className="display mt-4 max-w-4xl text-[clamp(2.2rem,5vw,4.2rem)] text-navy">
            Difference Between Trademark Attorney and Trademark Agent
          </SplitHeading>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left border-collapse border border-line/70">
              <thead>
                <tr className="bg-cream border-b border-line/70">
                  <th className="p-4 font-serif text-lg text-navy">Feature / Capability</th>
                  <th className="p-4 font-serif text-lg text-navy">Registered Trademark Agent</th>
                  <th className="p-4 font-serif text-lg text-navy">Trademark Attorney / Lawyer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line/60 text-xs text-muted font-light">
                <tr>
                  <td className="p-4 font-medium text-navy">Statutory Qualification</td>
                  <td className="p-4">Passed Trade Marks Registry Exam under Sec 145</td>
                  <td className="p-4">Advocate enrolled with Bar Council of India</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-navy">Registry Filing & Hearings</td>
                  <td className="p-4">Full authority to file and attend Registrar hearings</td>
                  <td className="p-4">Full authority to file and attend Registrar hearings</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-navy">High Court IP Litigation</td>
                  <td className="p-4">Cannot litigate civil infringement suits in Court</td>
                  <td className="p-4">Full rights of audience in High Courts & Commercial Courts</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-navy">Primary Scope</td>
                  <td className="p-4">Administrative prosecution, renewals & recordals</td>
                  <td className="p-4">Prosecution + Civil Injunctions + High Court Suits</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* SECTION 10: FREQUENTLY ASKED QUESTIONS */}
      <Section className="bg-cream border-b border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionLabel>Agency FAQs</SectionLabel>
              <SplitHeading className="display mt-4 text-[clamp(2.2rem,5vw,4.2rem)] text-navy">
                Frequently Asked Questions
              </SplitHeading>
              <p className="mt-6 text-sm text-muted font-light leading-relaxed">
                Essential information on Trademark Agent authorization, Form TM-M Power of Attorney execution, and registry representation in India.
              </p>
            </div>

            <div className="lg:col-span-7">
              <Accordion items={agentFaqs} />
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 11: CONTACT / CONSULTATION FORM */}
      <ConsultationCTA />
    </>
  );
}
