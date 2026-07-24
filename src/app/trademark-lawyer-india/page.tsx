import type { Metadata } from "next";
import Link from "next/link";
import { Scale, Gavel, ShieldAlert, FileText, CheckCircle2, Building2, HelpCircle, ArrowUpRight, Lock, Award } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SectionLabel, SplitHeading, Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/interactive";
import { ConsultationCTA } from "@/components/sections/cta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trademark Lawyer India | IP Dispute & Litigation Counsel",
  description:
    "Experienced Indian Trademark Lawyer handling opposition hearings, registry office actions, infringement litigation & High Court brand defense for global clients since 1972.",
  keywords: [
    "Trademark Lawyer India",
    "IP Litigation Lawyer Delhi",
    "Indian IP Law Firm",
    "Trademark Opposition Lawyer India",
    "Infringement Attorney India",
    "Delhi High Court IP Counsel",
    "Trademark Dispute Lawyer India",
    "Cease and Desist IP Lawyer India",
  ],
  alternates: {
    canonical: `${site.url}/trademark-lawyer-india`,
  },
  openGraph: {
    title: "Trademark Lawyer India | Litigation & Registry Advocacy",
    description:
      "Specialized legal representation before the Indian Trade Marks Registry, Commercial Courts, and Delhi High Court for foreign and domestic brand owners.",
    url: `${site.url}/trademark-lawyer-india`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trademark Lawyer India | IP Dispute & Litigation Counsel",
    description:
      "50+ Years of High Court and TMR advocacy. Defending corporate brand equity across India.",
  },
};

const lawyerFaqs = [
  {
    q: "What is the difference between a Trademark Attorney and a Trademark Lawyer in India?",
    a: "While an Indian Trademark Attorney/Agent focuses on administrative filing and registry prosecution, a Trademark Lawyer is an Advocate admitted to the Bar who possesses full standing to litigate civil disputes, argue before Commercial Courts, and seek injunctions in the Delhi High Court.",
  },
  {
    q: "How are trademark opposition proceedings conducted in India?",
    a: "When an application is published in the Trade Marks Journal, any party may file a Notice of Opposition (Form TM-O) within 4 months. Our lawyers draft the Counter-Statement, coordinate Rule 45/46/47 evidence affidavits, and present oral arguments before the TMR Hearing Officer.",
  },
  {
    q: "Can an overseas brand obtain an interim injunction against an infringer in India?",
    a: "Yes. Under Order XXXIX of the Code of Civil Procedure (CPC), Indian High Courts regularly grant ex-parte ad-interim injunctions restraining infringers from selling or distributing infringing goods, often combined with the appointment of a Court Commissioner to seize counterfeit stock.",
  },
  {
    q: "What constitutes passing off under Indian common law?",
    a: "Passing off is an equitable common-law remedy protecting unregistered marks or established goodwill. If an unregistered competitor deceives the public into believing their products are associated with your brand, our lawyers can initiate passing-off actions.",
  },
  {
    q: "What legal action can be taken against cybersquatters in India?",
    a: "We initiate domain name dispute proceedings under the .IN Domain Name Dispute Resolution Policy (INDRP) or WIPO’s UDRP to compel the transfer of illicitly registered domain names imitating your trademark.",
  },
  {
    q: "How does Sharma & Sharma handle Registry Examination hearings?",
    a: "If a written response to an Examination Report does not satisfy the Examiner, a formal show-cause hearing is scheduled. Our lawyers advocate in-person or via virtual TMR hearings, citing binding High Court precedent to secure acceptance.",
  },
  {
    q: "What remedies are available in Indian trademark civil lawsuits?",
    a: "Plaintiffs may claim permanent injunctions, destruction of counterfeit inventory, monetary damages or account of profits, and full litigation costs.",
  },
  {
    q: "How long does a trademark opposition case take to resolve in India?",
    a: "Opposition cases typically span 18 to 36 months from initial filing to final hearing judgment, depending on evidence submission speed and registry scheduling.",
  },
  {
    q: "Can trademark infringement lead to criminal prosecution in India?",
    a: "Yes. Sections 103 and 104 of the Trade Marks Act specify criminal penalties for applying false trademarks, carrying imprisonment up to 3 years and mandatory fines.",
  },
  {
    q: "How do foreign entities execute legal Power of Attorney for litigation in India?",
    a: "For civil court actions, foreign entities execute a Power of Attorney that is notarized in the home country and subsequently stamped/consularized in accordance with Indian stamp duties.",
  },
];

export default function TrademarkLawyerIndiaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Sharma & Sharma Intellectual Property Lawyers",
    url: `${site.url}/trademark-lawyer-india`,
    logo: `${site.url}/media/Logo.png`,
    description:
      "Senior Indian Trademark Lawyer and IP litigation practice specializing in registry hearings, High Court lawsuits, and brand enforcement.",
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
      "Trademark Litigation India",
      "Delhi High Court IP Practice",
      "Trade Marks Registry Oppositions",
      "Ex-Parte Interim Injunctions",
      "Counterfeit Seizure & Customs Recordation",
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
      { "@type": "ListItem", position: 3, name: "Trademark Lawyer India", item: `${site.url}/trademark-lawyer-india` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: lawyerFaqs.map((faq) => ({
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
        label="IP Litigation & Legal Practice"
        title="Formidable Legal Advocacy for Brand Owners."
        intro="Representing multinational brand owners, corporate legal departments, and international businesses before the Trade Marks Registry, Commercial Courts, and High Courts of India."
        image="/media/IP Litigation.jpeg"
        imageAlt="Sharma & Sharma Legal Advocacy & High Court Practice"
      />

      {/* Trust Highlights Strip */}
      <div className="border-b border-line bg-paper py-6 select-none">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div>
            <span className="block font-serif text-2xl font-bold text-navy">HIGH COURT</span>
            <span className="block text-[10px] tracking-widest text-gold uppercase font-sans mt-0.5">Commercial IP Division</span>
          </div>
          <div>
            <span className="block font-serif text-2xl font-bold text-navy">OPPOSITION</span>
            <span className="block text-[10px] tracking-widest text-gold uppercase font-sans mt-0.5">Specialized Defense</span>
          </div>
          <div>
            <span className="block font-serif text-2xl font-bold text-navy">INJUNCTIONS</span>
            <span className="block text-[10px] tracking-widest text-gold uppercase font-sans mt-0.5">Ex-Parte Protection</span>
          </div>
          <div>
            <span className="block font-serif text-2xl font-bold text-navy">SINCE 1972</span>
            <span className="block text-[10px] tracking-widest text-gold uppercase font-sans mt-0.5">50+ Years Advocacy</span>
          </div>
        </div>
      </div>

      {/* SECTION 1: Legal Counsel Infrastructure */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <SectionLabel>Legal Standing</SectionLabel>
              <SplitHeading className="display mt-6 text-[clamp(2.2rem,4.5vw,3.8rem)] text-navy leading-tight">
                Decisive Legal Action When Rights Are Challenged.
              </SplitHeading>
              <p className="mt-6 text-[15px] leading-relaxed text-muted font-light">
                Intellectual property disputes in India require an astute understanding of statutory provisions, judicial trends, and evidentiary standards.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-6 text-[15px] leading-relaxed text-muted font-light">
              <p>
                When a competitor copies your brand elements or an adverse third party files an opposition against your pending mark, administrative correspondence is insufficient. You require an experienced **Trademark Lawyer** qualified to litigate in court rooms and advocate during contested registry hearings.
              </p>
              <p>
                Headquartered in Delhi directly adjacent to the premier legal venues of India, Sharma & Sharma combines deep jurisprudence with assertive courtroom advocacy. We safeguard global brand portfolios against dilution, infringement, and deceptive market entry.
              </p>
              <div className="p-6 bg-paper border-l-2 border-gold rounded-r-[4px] mt-8">
                <span className="text-[10px] tracking-widest text-gold uppercase font-bold block mb-1 font-mono">
                  LITIGATION EXCELLENCE
                </span>
                <p className="font-serif italic text-navy text-[16px] leading-snug">
                  &ldquo;A well-crafted legal opposition or swift civil injunction not only protects your current market share in India, but establishes a formidable legal precedent that deters future infringers worldwide.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 2: Core Litigation Capabilities */}
      <Section className="bg-paper border-y border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl mb-14">
            <SectionLabel>Practice Areas</SectionLabel>
            <SplitHeading className="display mt-4 text-[clamp(2rem,4vw,3.5rem)] text-navy">
              Litigation & Administrative Services.
            </SplitHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal className="h-full">
              <div className="h-full bg-cream p-8 border border-line/70 rounded-[4px] flex flex-col justify-between">
                <div>
                  <Gavel className="w-8 h-8 text-gold mb-6" strokeWidth={1.5} />
                  <h3 className="font-serif text-2xl text-navy mb-3">Registry Opposition & Rectification</h3>
                  <p className="text-sm text-muted leading-relaxed font-light">
                    Prosecuting and defending formal opposition notices (Form TM-O) and cancellation petitions before the Trade Marks Registry.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-line/40 text-[10px] font-mono text-gold uppercase tracking-wider">
                  EVIDENTIARY AFFIDAVITS
                </div>
              </div>
            </Reveal>

            <Reveal className="h-full" delay={0.1}>
              <div className="h-full bg-cream p-8 border border-line/70 rounded-[4px] flex flex-col justify-between">
                <div>
                  <ShieldAlert className="w-8 h-8 text-gold mb-6" strokeWidth={1.5} />
                  <h3 className="font-serif text-2xl text-navy mb-3">Infringement & Passing Off Lawsuits</h3>
                  <p className="text-sm text-muted leading-relaxed font-light">
                    Initiating civil suits in Commercial Courts and High Courts to obtain urgent ex-parte interim injunctions and asset seizures.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-line/40 text-[10px] font-mono text-gold uppercase tracking-wider">
                  COURT COMMISSIONER SEIZURES
                </div>
              </div>
            </Reveal>

            <Reveal className="h-full" delay={0.2}>
              <div className="h-full bg-cream p-8 border border-line/70 rounded-[4px] flex flex-col justify-between">
                <div>
                  <Lock className="w-8 h-8 text-gold mb-6" strokeWidth={1.5} />
                  <h3 className="font-serif text-2xl text-navy mb-3">Customs & Border Enforcement</h3>
                  <p className="text-sm text-muted leading-relaxed font-light">
                    Registering trademarks with Indian Customs authorities to intercept and destroy infringing imports at ports and airports.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-line/40 text-[10px] font-mono text-gold uppercase tracking-wider">
                  IPR CUSTOMS RECORDATION
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
            <SectionLabel>Legal Guidance</SectionLabel>
            <SplitHeading className="display mt-4 text-[clamp(2.2rem,4.5vw,3.8rem)] text-navy">
              Litigation & Dispute FAQs.
            </SplitHeading>
          </div>

          <div className="max-w-4xl">
            <Accordion items={lawyerFaqs} />
          </div>
        </div>
      </Section>

      {/* SECTION 4: Internal Linking Matrix */}
      <Section className="bg-paper border-t border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Cross-Practice Navigation</SectionLabel>
          <h3 className="font-serif text-3xl text-navy mt-4 mb-8">Related Legal Resources</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-sans">
            <Link href="/trademark-attorney-india" className="p-4 bg-cream border border-line/60 rounded-[4px] hover:border-gold transition-colors font-medium text-navy">
              Trademark Attorney India →
            </Link>
            <Link href="/trademark-agent-india" className="p-4 bg-cream border border-line/60 rounded-[4px] hover:border-gold transition-colors font-medium text-navy">
              Trademark Agent India →
            </Link>
            <Link href="/trademark" className="p-4 bg-cream border border-line/60 rounded-[4px] hover:border-gold transition-colors font-medium text-navy">
              Trademark Filing Guide →
            </Link>
            <Link href="/copyright" className="p-4 bg-cream border border-line/60 rounded-[4px] hover:border-gold transition-colors font-medium text-navy">
              Copyright Practice →
            </Link>
            <Link href="/design-registration" className="p-4 bg-cream border border-line/60 rounded-[4px] hover:border-gold transition-colors font-medium text-navy">
              Industrial Designs →
            </Link>
            <Link href="/services" className="p-4 bg-cream border border-line/60 rounded-[4px] hover:border-gold transition-colors font-medium text-navy">
              All IP Services →
            </Link>
            <Link href="/insights" className="p-4 bg-cream border border-line/60 rounded-[4px] hover:border-gold transition-colors font-medium text-navy">
              Legal Insights →
            </Link>
            <Link href="/contact" className="p-4 bg-cream border border-line/60 rounded-[4px] hover:border-gold transition-colors font-medium text-navy">
              Schedule Consultation →
            </Link>
          </div>
        </div>
      </Section>

      <ConsultationCTA />
    </>
  );
}
