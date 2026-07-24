import type { Metadata } from "next";
import Link from "next/link";
import { UserCheck, FileCheck2, Globe, Clock, ShieldCheck, CheckCircle2, Building, ArrowUpRight, HelpCircle, FileSignature } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SectionLabel, SplitHeading, Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/interactive";
import { ConsultationCTA } from "@/components/sections/cta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trademark Agent India | Registered Trade Marks Registry Agent",
  description:
    "Registered Indian Trademark Agent representing overseas law firms, US businesses & foreign applicants before the Trade Marks Registry of India since 1972.",
  keywords: [
    "Trademark Agent India",
    "Registered Trademark Agent Delhi",
    "Form TM-M Power of Attorney India",
    "Official Indian Trademark Agent",
    "Foreign Law Firm Agency India",
    "Indian Trade Marks Registry Agent",
    "Expedited Trademark Agent India",
  ],
  alternates: {
    canonical: `${site.url}/trademark-agent-india`,
  },
  openGraph: {
    title: "Trademark Agent India | Official Trade Marks Registry Agency",
    description:
      "Official agent representation, Power of Attorney handling, classification, expedite requests, and associate counsel for international IP practices.",
    url: `${site.url}/trademark-agent-india`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trademark Agent India | Official Trade Marks Registry Agent",
    description:
      "50+ Years experience. Registered Agent representation for foreign attorneys, businesses and brand managers.",
  },
};

const agentFaqs = [
  {
    q: "What is a Registered Trademark Agent in India?",
    a: "A Registered Trademark Agent in India is an authorized professional registered with the Trade Marks Registry under Section 145 of the Trade Marks Act 1999. Agents hold statutory authority to prepare, sign, execute, and file trademark documents and represent foreign or domestic applicants directly before the Registrar.",
  },
  {
    q: "How does Power of Attorney (Form TM-M) work for foreign applicants?",
    a: "To authorize an Indian Trademark Agent to act on your behalf, foreign applicants execute a Power of Attorney (Form TM-M). It authorizes the agent to file applications, receive official registry notices, submit examination responses, and attend hearings.",
  },
  {
    q: "Is consular legalization or apostille required for Power of Attorney in India?",
    a: "For standard trademark filings before the Trade Marks Registry, a simply signed Form TM-M (on company letterhead) is accepted. Apostille or embassy legalization is generally not required unless requested during contentious litigation proceedings.",
  },
  {
    q: "Can an Indian Trademark Agent handle expedited trademark examination?",
    a: "Yes. By submitting Form TM-M along with prescribed official fees for expedited processing, your agent can request the Registrar to issue the Examination Report within 5 to 10 working days instead of standard timelines.",
  },
  {
    q: "Do foreign law firms use local Indian Trademark Agents for their clients?",
    a: "Yes. Overseas IP law firms and trademark attorney practices routinely partner with Sharma & Sharma as their trusted local associate agent in India to execute filings, monitor renewals, and manage registry deadlines.",
  },
  {
    q: "How are goods and services classified by an Indian Trademark Agent?",
    a: "We classify goods and services strictly according to the International Classification of Goods and Services (Nice Classification, 11th Edition) across 45 classes, preventing registry misclassification objections.",
  },
  {
    q: "What is the cost structure for filing via a Registered Agent in India?",
    a: "Official government filing fees in India are 9,000 INR (~110 USD) per class for corporate applicants, or 4,500 INR (~55 USD) for individual/startup applicants. Professional agency fees are transparently quoted upfront without hidden disbursements.",
  },
  {
    q: "How does an agent manage trademark renewal deadlines in India?",
    a: "Our practice maintains computerized IP portfolio management systems that send automated alerts 6 months prior to the 10-year renewal deadline, executing Form TM-R to ensure continuous protection.",
  },
  {
    q: "Can a registered agent handle trademark assignment and ownership transfers?",
    a: "Yes. We prepare deed assignments, execute Form TM-P, and record corporate mergers, name changes, and legal assignment transfers with the Trade Marks Registry.",
  },
  {
    q: "What happens if a trademark application is abandoned due to agent negligence?",
    a: "By retaining Sharma & Sharma, your matters are monitored under strict docketing protocols. We ensure all 30-day examination response windows and hearing deadlines are met without default.",
  },
];

export default function TrademarkAgentIndiaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Sharma & Sharma Registered Trademark Agents",
    url: `${site.url}/trademark-agent-india`,
    logo: `${site.url}/media/Logo.png`,
    description:
      "Official Registered Trademark Agent practice in Delhi, India representing overseas law firms, international brand owners, and corporations.",
    telephone: site.phones[0],
    email: site.email,
    foundingDate: "1972",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      postalCode: site.address.postal,
      addressCountry: "IN",
    },
    areaServed: ["United States", "India", "European Union", "United Kingdom", "Worldwide"],
    knowsAbout: [
      "Trade Marks Registry Agent Practice",
      "Form TM-M Power of Attorney",
      "Nice Classification 11th Edition",
      "Expedited Examination Filings",
      "Associate Counsel for Foreign Law Firms",
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
      { "@type": "ListItem", position: 3, name: "Trademark Agent India", item: `${site.url}/trademark-agent-india` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: agentFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        label="Registered Agent Services"
        title="Official Trade Marks Registry Agency."
        intro="Authorized registered trademark agents providing seamless filing execution, Power of Attorney representation, and associate agency services for overseas law firms and businesses."
        image="/media/Trademark Registration.jpeg"
        imageAlt="Sharma & Sharma Registered Agent Operations"
      />

      {/* Trust Highlights Strip */}
      <div className="border-b border-line bg-paper py-6 select-none">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div>
            <span className="block font-serif text-2xl font-bold text-navy">SECTION 145</span>
            <span className="block text-[10px] tracking-widest text-gold uppercase font-sans mt-0.5">Statutory Registered Agent</span>
          </div>
          <div>
            <span className="block font-serif text-2xl font-bold text-navy">FORM TM-M</span>
            <span className="block text-[10px] tracking-widest text-gold uppercase font-sans mt-0.5">Direct POA Representation</span>
          </div>
          <div>
            <span className="block font-serif text-2xl font-bold text-navy">EXPEDITED</span>
            <span className="block text-[10px] tracking-widest text-gold uppercase font-sans mt-0.5">Fast-Track Registry Filing</span>
          </div>
          <div>
            <span className="block font-serif text-2xl font-bold text-navy">EST. 1972</span>
            <span className="block text-[10px] tracking-widest text-gold uppercase font-sans mt-0.5">50+ Years Reliability</span>
          </div>
        </div>
      </div>

      {/* SECTION 1: Registered Agent Infrastructure */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <SectionLabel>Agency Infrastructure</SectionLabel>
              <SplitHeading className="display mt-6 text-[clamp(2.2rem,4.5vw,3.8rem)] text-navy leading-tight">
                Official Agent Representation Across India.
              </SplitHeading>
              <p className="mt-6 text-[15px] leading-relaxed text-muted font-light">
                Securing intellectual property in foreign jurisdictions requires dependable local agency support.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-6 text-[15px] leading-relaxed text-muted font-light">
              <p>
                As statutory **Registered Trademark Agents** in India, Sharma & Sharma manages the entire procedural spectrum of trademark prosecution. From filing initial applications and handling formal correspondence to recording assignments and renewals, our agency infrastructure ensures flawless execution.
              </p>
              <p>
                We serve as the designated Address for Service in India for international corporate entities, US patent/trademark firms, and global brand managers. Our computerized docketing systems ensure that statutory response windows are strictly adhered to.
              </p>
              <div className="p-6 bg-paper border-l-2 border-gold rounded-r-[4px] mt-8">
                <span className="text-[10px] tracking-widest text-gold uppercase font-bold block mb-1 font-mono">
                  ASSOCIATE AGENCY GUARANTEE
                </span>
                <p className="font-serif italic text-navy text-[16px] leading-snug">
                  &ldquo;We provide foreign IP attorneys and corporate counsel with transparent fee structures, rapid docket confirmation within 24 hours, and institutional reliability.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 2: Core Agent Capabilities */}
      <Section className="bg-paper border-y border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl mb-14">
            <SectionLabel>Agent Scope</SectionLabel>
            <SplitHeading className="display mt-4 text-[clamp(2rem,4vw,3.5rem)] text-navy">
              Comprehensive Agency Operations.
            </SplitHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal className="h-full">
              <div className="h-full bg-cream p-8 border border-line/70 rounded-[4px] flex flex-col justify-between">
                <div>
                  <FileSignature className="w-8 h-8 text-gold mb-6" strokeWidth={1.5} />
                  <h3 className="font-serif text-2xl text-navy mb-3">Form TM-M Power of Attorney Execution</h3>
                  <p className="text-sm text-muted leading-relaxed font-light">
                    Direct representation authorization handling for foreign corporations, ensuring smooth legal recognition before all 5 Registry branches.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-line/40 text-[10px] font-mono text-gold uppercase tracking-wider">
                  STATUTORY COMPLIANCE
                </div>
              </div>
            </Reveal>

            <Reveal className="h-full" delay={0.1}>
              <div className="h-full bg-cream p-8 border border-line/70 rounded-[4px] flex flex-col justify-between">
                <div>
                  <Clock className="w-8 h-8 text-gold mb-6" strokeWidth={1.5} />
                  <h3 className="font-serif text-2xl text-navy mb-3">Expedited Examination Filings</h3>
                  <p className="text-sm text-muted leading-relaxed font-light">
                    Accelerating examination timelines from months to days by leveraging official expedited registry procedures for time-sensitive commercial launches.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-line/40 text-[10px] font-mono text-gold uppercase tracking-wider">
                  FAST-TRACK EXAMINATION
                </div>
              </div>
            </Reveal>

            <Reveal className="h-full" delay={0.2}>
              <div className="h-full bg-cream p-8 border border-line/70 rounded-[4px] flex flex-col justify-between">
                <div>
                  <Building className="w-8 h-8 text-gold mb-6" strokeWidth={1.5} />
                  <h3 className="font-serif text-2xl text-navy mb-3">Assignments & Portfolio Mergers</h3>
                  <p className="text-sm text-muted leading-relaxed font-light">
                    Drafting and recording assignment deeds, corporate name changes, and merger transfers on the official Indian Register of Trade Marks.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-line/40 text-[10px] font-mono text-gold uppercase tracking-wider">
                  FORM TM-P RECORDATIONS
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* SECTION 3: FAQ Accordion Section */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl mb-12">
            <SectionLabel>Agency FAQs</SectionLabel>
            <SplitHeading className="display mt-4 text-[clamp(2.2rem,4.5vw,3.8rem)] text-navy">
              Frequently Asked Questions.
            </SplitHeading>
          </div>

          <div className="max-w-4xl">
            <Accordion items={agentFaqs} />
          </div>
        </div>
      </Section>

      {/* SECTION 4: Internal Linking Matrix */}
      <Section className="bg-paper border-t border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Practice Navigation</SectionLabel>
          <h3 className="font-serif text-3xl text-navy mt-4 mb-8">Related Legal Resources</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-sans">
            <Link href="/trademark-attorney-india" className="p-4 bg-cream border border-line/60 rounded-[4px] hover:border-gold transition-colors font-medium text-navy">
              Trademark Attorney India →
            </Link>
            <Link href="/trademark-lawyer-india" className="p-4 bg-cream border border-line/60 rounded-[4px] hover:border-gold transition-colors font-medium text-navy">
              Trademark Lawyer India →
            </Link>
            <Link href="/trademark" className="p-4 bg-cream border border-line/60 rounded-[4px] hover:border-gold transition-colors font-medium text-navy">
              Trademark Registration →
            </Link>
            <Link href="/copyright" className="p-4 bg-cream border border-line/60 rounded-[4px] hover:border-gold transition-colors font-medium text-navy">
              Copyright Practice →
            </Link>
            <Link href="/design-registration" className="p-4 bg-cream border border-line/60 rounded-[4px] hover:border-gold transition-colors font-medium text-navy">
              Design Protection →
            </Link>
            <Link href="/services" className="p-4 bg-cream border border-line/60 rounded-[4px] hover:border-gold transition-colors font-medium text-navy">
              Services Portfolio →
            </Link>
            <Link href="/insights" className="p-4 bg-cream border border-line/60 rounded-[4px] hover:border-gold transition-colors font-medium text-navy">
              IP Articles & Insights →
            </Link>
            <Link href="/contact" className="p-4 bg-cream border border-line/60 rounded-[4px] hover:border-gold transition-colors font-medium text-navy">
              Contact Registered Agent →
            </Link>
          </div>
        </div>
      </Section>

      <ConsultationCTA />
    </>
  );
}
