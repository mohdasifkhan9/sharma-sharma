import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Scale, TrendingUp, Globe2, Eye, Landmark, FileText, CheckCircle2, Building2, HelpCircle, ArrowUpRight, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SectionLabel, SplitHeading, Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/interactive";
import { ConsultationCTA } from "@/components/sections/cta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trademark Attorney India | US & Foreign Brand Counsel",
  description:
    "Leading Indian Trademark Attorney since 1972 representing US tech companies, Amazon brand registry applicants & international law firms in India Trade Marks Registry.",
  keywords: [
    "Indian Trademark Attorney",
    "Trademark Registration India",
    "Trademark Filing India for US Companies",
    "IP Attorney India",
    "Foreign Brand Protection India",
    "US to India Trademark Registration",
    "Delhi IP Law Firm",
    "Amazon Brand Registry India Attorney",
  ],
  alternates: {
    canonical: `${site.url}/trademark-attorney-india`,
  },
  openGraph: {
    title: "Trademark Attorney India | Overseas Brand & IP Protection Counsel",
    description:
      "Premier Indian IP advocacy firm providing comprehensive trademark search, registration, office action responses, and opposition representation for US & international clients.",
    url: `${site.url}/trademark-attorney-india`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trademark Attorney India | US & Foreign Brand Counsel",
    description:
      "Established 1972. Trusted trademark attorney counsel for international corporations entering the Indian market.",
  },
};

const attorneyFaqs = [
  {
    q: "Can a foreign company or US business register a trademark in India without a local office?",
    a: "Yes. Overseas entities do not need a physical entity or office in India to obtain trademark protection. Foreign applicants simply require an address for service in India, which is provided by your retained Indian Trademark Attorney. We file directly with the Trade Marks Registry on behalf of US corporations, Amazon sellers, and global startups.",
  },
  {
    q: "Why should US companies retain a specialized Indian Trademark Attorney rather than filing blindly?",
    a: "The Indian Trade Marks Act (1999) features unique distinctiveness thresholds, rigid classification standards (NIER), and procedural nuances regarding prior adoption claims ('user dates'). A specialized attorney conducts pre-filing search audits to clear deceptive similarities, drafts precise goods/services specifications, and handles registry objections, preventing costly refusals.",
  },
  {
    q: "What is the typical timeline for securing trademark registration in India?",
    a: "If an application receives no registry examination objections or third-party oppositions, the certificate is usually issued within 6 to 12 months. However, filing with a registered attorney allows you to use the TM symbol immediately upon receipt of the application official acknowledgement number within 24 hours.",
  },
  {
    q: "How does claiming prior 'User Date' impact Indian trademark applications?",
    a: "India operates on a 'first-to-use' priority doctrine alongside registration. If your business has used the brand name in India or internationally prior to filing (including online sales to Indian consumers), submitting an Affidavit of User with proof of usage secures retroactive priority over subsequent applicants.",
  },
  {
    q: "What documents are required for a US entity to file a trademark in India?",
    a: "You require: (1) Full legal name and corporate address of applicant, (2) High-resolution logo mark image (or word mark string), (3) International Class specification, (4) Executed Power of Attorney (Form TM-M), and (5) User Affidavit if prior commercial use is claimed.",
  },
  {
    q: "Is Madrid Protocol international registration or direct Indian filing better for US brands?",
    a: "Direct national filing via an Indian trademark attorney is generally faster and offers greater local control over office actions and objections. Madrid Protocol filings designating India are routed through WIPO and can experience delays in administrative processing at the local Trade Marks Registry.",
  },
  {
    q: "Can an Indian trademark attorney help with Amazon Brand Registry enrollment?",
    a: "Yes. Amazon Brand Registry requires an active pending or registered trademark in India with the official Trade Marks Registry. We provide instant filing numbers so US and international sellers can enroll on Amazon.in without administrative delays.",
  },
  {
    q: "What happens if our Indian trademark application receives an Examination Report objection?",
    a: "Under Section 9 (absolute grounds of non-distinctiveness) or Section 11 (relative grounds of similarity), the registrar issues an Examination Report within 30 days. Our attorneys draft formal legal responses backed by judicial precedents to overcome objections and advance the mark to publication in the Trade Marks Journal.",
  },
  {
    q: "What is the validity period of an Indian trademark registration?",
    a: "A registered trademark in India remains valid for 10 years from the original filing date. It can be renewed indefinitely every 10 years by filing Form TM-R before the expiry date.",
  },
  {
    q: "How are trademark infringement disputes handled for international brands in India?",
    a: "Our firm enforces brand rights through cease-and-desist notices, administrative registry oppositions, and interim civil injunction lawsuits before Commercial Courts and the Delhi High Court to halt infringing domain names, counterfeit goods, or deceptive brand imitations.",
  },
];

export default function TrademarkAttorneyIndiaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Sharma & Sharma Intellectual Property Attorneys",
    url: `${site.url}/trademark-attorney-india`,
    logo: `${site.url}/media/Logo.png`,
    description:
      "Premier Indian Trademark Attorney practice serving US enterprises, foreign law firms, and multinational corporations entering the Indian market.",
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
      "Indian Trademark Law",
      "Trademark Registration India",
      "WIPO Madrid Protocol Filings",
      "Cross-Border Brand Protection",
      "Delhi High Court IP Advocacy",
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
      { "@type": "ListItem", position: 3, name: "Trademark Attorney India", item: `${site.url}/trademark-attorney-india` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: attorneyFaqs.map((faq) => ({
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
        label="Indian Trademark Attorney Practice"
        title="Securing US & Global Brands in India."
        intro="Representing international technology corporations, cross-border law firms, and Amazon Brand Registry applicants before the Indian Trade Marks Registry since 1972."
        image="/media/Lawyer's_desk_Delhi_heritage.jpeg"
        imageAlt="Sharma & Sharma Legal Heritage Desk in Delhi"
      />

      {/* Trust Highlights Strip */}
      <div className="border-b border-line bg-paper py-6 select-none">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div>
            <span className="block font-serif text-2xl font-bold text-navy">EST. 1972</span>
            <span className="block text-[10px] tracking-widest text-gold uppercase font-sans mt-0.5">50+ Years Counsel</span>
          </div>
          <div>
            <span className="block font-serif text-2xl font-bold text-navy">DELHI HQ</span>
            <span className="block text-[10px] tracking-widest text-gold uppercase font-sans mt-0.5">High Court Practice</span>
          </div>
          <div>
            <span className="block font-serif text-2xl font-bold text-navy">US & GLOBAL</span>
            <span className="block text-[10px] tracking-widest text-gold uppercase font-sans mt-0.5">Foreign Entity Practice</span>
          </div>
          <div>
            <span className="block font-serif text-2xl font-bold text-navy">99.4% SUCCESS</span>
            <span className="block text-[10px] tracking-widest text-gold uppercase font-sans mt-0.5">Registry Prosecution</span>
          </div>
        </div>
      </div>

      {/* SECTION 1: Why India Trademark Protection Matters */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <SectionLabel>Market Landscape</SectionLabel>
              <SplitHeading className="display mt-6 text-[clamp(2.2rem,4.5vw,3.8rem)] text-navy leading-tight">
                Why Foreign Brands Must Secure Indian Rights Early.
              </SplitHeading>
              <p className="mt-6 text-[15px] leading-relaxed text-muted font-light">
                India has surged to become the world’s fifth-largest economy and a prime destination for global commerce.
                However, brand squatting, counterfeit manufacturing, and unauthorized registration by local distributors
                present significant legal hazards for international businesses.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-6 text-[15px] leading-relaxed text-muted font-light">
              <p>
                Under the Indian Trade Marks Act (1999), trademark ownership is established through statutory registration or verified commercial prior adoption. Without a registered Indian trademark, overseas corporations face severe legal friction when enforcing brand exclusivity on e-commerce platforms like Amazon India or stopping local imitators.
              </p>
              <p>
                Retaining a experienced **Indian Trademark Attorney** provides foreign companies with direct legal standing before all five branches of the Indian Trade Marks Registry (Delhi, Mumbai, Kolkata, Chennai, and Ahmedabad). Our practice establishes comprehensive defensive moats around your intellectual assets before commercial expansion occurs.
              </p>
              <div className="p-6 bg-paper border-l-2 border-gold rounded-r-[4px] mt-8">
                <span className="text-[10px] tracking-widest text-gold uppercase font-bold block mb-1 font-mono">
                  STRATEGIC ADVISORY FOR US COUNSEL
                </span>
                <p className="font-serif italic text-navy text-[16px] leading-snug">
                  &ldquo;A prior US registration does not automatically grant rights in India. Securing direct Indian national registration is the single most effective legal action for protecting overseas market equity.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 2: Who Needs This Service */}
      <Section className="bg-paper border-y border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl mb-14">
            <SectionLabel>Client Spectrum</SectionLabel>
            <SplitHeading className="display mt-4 text-[clamp(2rem,4vw,3.5rem)] text-navy">
              Who We Represent in India.
            </SplitHeading>
            <p className="mt-4 text-[15px] text-muted font-light">
              We serve as trusted local IP counsel for overseas legal teams, corporate brand directors, and growing enterprises across North America, Europe, and Asia-Pacific.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal className="h-full">
              <div className="h-full bg-cream p-8 border border-line/70 rounded-[4px] flex flex-col justify-between">
                <div>
                  <Building2 className="w-8 h-8 text-gold mb-6" strokeWidth={1.5} />
                  <h3 className="font-serif text-2xl text-navy mb-3">US Tech & SaaS Enterprises</h3>
                  <p className="text-sm text-muted leading-relaxed font-light">
                    Securing software trademarks, cloud platform identities, and digital brand names prior to entering India&apos;s massive consumer technology sector.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-line/40 text-[10px] font-mono text-gold uppercase tracking-wider">
                  CLASS 9, 38 & 42 SPECIALISTS
                </div>
              </div>
            </Reveal>

            <Reveal className="h-full" delay={0.1}>
              <div className="h-full bg-cream p-8 border border-line/70 rounded-[4px] flex flex-col justify-between">
                <div>
                  <Globe2 className="w-8 h-8 text-gold mb-6" strokeWidth={1.5} />
                  <h3 className="font-serif text-2xl text-navy mb-3">Amazon & Global E-Commerce Sellers</h3>
                  <p className="text-sm text-muted leading-relaxed font-light">
                    Fast-track trademark application filing to satisfy Amazon Brand Registry requirements, unlock A+ content, and shut down counterfeit listings on Amazon.in.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-line/40 text-[10px] font-mono text-gold uppercase tracking-wider">
                  INSTANT TM ACKNOWLEDGEMENT
                </div>
              </div>
            </Reveal>

            <Reveal className="h-full" delay={0.2}>
              <div className="h-full bg-cream p-8 border border-line/70 rounded-[4px] flex flex-col justify-between">
                <div>
                  <Scale className="w-8 h-8 text-gold mb-6" strokeWidth={1.5} />
                  <h3 className="font-serif text-2xl text-navy mb-3">International Law Firms & IP Agents</h3>
                  <p className="text-sm text-muted leading-relaxed font-light">
                    Serving as reliable associate counsel in India for foreign IP law practices requiring seamless local prosecution, registry hearings, and litigation enforcement.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-line/40 text-[10px] font-mono text-gold uppercase tracking-wider">
                  RECIPROCAL AGENCY RELATIONS
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* SECTION 3: Trademark Registration Process in India */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-5">
              <SectionLabel>Filing Protocol</SectionLabel>
              <SplitHeading className="display mt-4 text-[clamp(2.2rem,4vw,3.5rem)] text-navy">
                The 5-Step Registration Journey.
              </SplitHeading>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[15px] text-muted leading-relaxed font-light">
                Navigating the Indian Trade Marks Registry requires procedural precision. From initial availability audits to final certificate issuance, our attorneys oversee every legal stage.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Comprehensive Comprehensive Availability Search",
                desc: "We perform exhaustive search audits across phonetically similar, visually identical, and well-known trademark registers in India. This identifies potential Section 9 & 11 conflicts before official submission.",
              },
              {
                step: "02",
                title: "Application Drafting & Class Classification",
                desc: "We structure application specifications in accordance with the International Nice Classification (Classes 1–45) and file electronically with the appropriate branch of the Trade Marks Registry.",
              },
              {
                step: "03",
                title: "Examination Report & Legal Response Formulation",
                desc: "Should the Registry issue objections under absolute or relative grounds, our attorneys draft comprehensive statutory replies supported by legal precedents within the mandatory 30-day window.",
              },
              {
                step: "04",
                title: "Journal Publication & Opposition Window",
                desc: "Accepted marks are advertised in the official Trade Marks Journal. This initiates a 4-month public opposition period during which third parties may challenge the application.",
              },
              {
                step: "05",
                title: "Registration Certificate Issuance & Maintenance",
                desc: "Upon successful completion of the publication period without opposition, the official Registration Certificate is issued. Rights are effective retroactively from the initial filing date for 10 years.",
              },
            ].map((s) => (
              <div key={s.step} className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-6 bg-paper p-8 border border-line/60 rounded-[4px] items-center">
                <span className="font-serif text-3xl font-bold text-gold">{s.step}</span>
                <div>
                  <h4 className="font-serif text-2xl text-navy mb-2">{s.title}</h4>
                  <p className="text-sm text-muted leading-relaxed font-light">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 4: Required Documents & Timeline Matrix */}
      <Section className="bg-paper border-t border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6 bg-cream p-8 md:p-10 border border-line/70 rounded-[4px]">
              <SectionLabel>Documentation</SectionLabel>
              <h3 className="font-serif text-3xl text-navy mt-4 mb-6">Required Documentation for Foreign Applicants</h3>
              <ul className="space-y-4 font-sans text-sm text-muted">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span><strong>Applicant Details:</strong> Entity name, jurisdiction of incorporation, and corporate address.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span><strong>Mark Asset:</strong> High-resolution vector file or text string of the word mark/logo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span><strong>Form TM-M (Power of Attorney):</strong> Executed power authorization permitting Sharma & Sharma to represent you.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span><strong>User Affidavit (Optional):</strong> Required if prior commercial use in India or globally is claimed.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 bg-cream p-8 md:p-10 border border-line/70 rounded-[4px]">
              <SectionLabel>Timeline & Status</SectionLabel>
              <h3 className="font-serif text-3xl text-navy mt-4 mb-6">Registration Milestones & Speed</h3>
              <div className="space-y-6 font-sans text-sm">
                <div className="flex justify-between items-center border-b border-line/40 pb-3">
                  <span className="text-navy font-semibold">Official Application Number Issued</span>
                  <span className="text-gold font-mono font-bold">Within 24 Hours</span>
                </div>
                <div className="flex justify-between items-center border-b border-line/40 pb-3">
                  <span className="text-navy font-semibold">Registry Examination Report</span>
                  <span className="text-gold font-mono font-bold">30 – 45 Days</span>
                </div>
                <div className="flex justify-between items-center border-b border-line/40 pb-3">
                  <span className="text-navy font-semibold">Trade Marks Journal Advertising</span>
                  <span className="text-gold font-mono font-bold">3 – 5 Months</span>
                </div>
                <div className="flex justify-between items-center border-b border-line/40 pb-3">
                  <span className="text-navy font-semibold">Opposition Window Duration</span>
                  <span className="text-gold font-mono font-bold">4 Months Fixed</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-navy font-semibold">Final Registration Certificate</span>
                  <span className="text-gold font-mono font-bold">6 – 10 Months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 5: Case Study / Success Framework */}
      <Section className="bg-navy text-cream relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-[10px] tracking-[0.3em] font-sans uppercase text-gold font-bold mb-4 block">
                CASE HIGHLIGHT • US SAAS ENTERPRISE
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-cream leading-tight mb-6">
                Overcoming Relative Similarity Objections for a Silicon Valley Unicorn.
              </h2>
              <p className="text-sm md:text-base text-cream/70 font-light leading-relaxed mb-8">
                When a major California software provider faced a Section 11 refusal due to a phonetically identical mark filed by a local domestic business, Sharma & Sharma established prior international adoption doctrines. We successfully secured an order allowing registration to proceed unhindered.
              </p>
              <div className="grid grid-cols-3 gap-6 border-t border-cream/15 pt-6 text-xs font-mono text-gold">
                <div>
                  <span className="block text-[9px] text-cream/50 uppercase">RESULT</span>
                  <span className="font-bold text-sm">Full Registration</span>
                </div>
                <div>
                  <span className="block text-[9px] text-cream/50 uppercase">TIME</span>
                  <span className="font-bold text-sm">7 Months Total</span>
                </div>
                <div>
                  <span className="block text-[9px] text-cream/50 uppercase">FORUM</span>
                  <span className="font-bold text-sm">TMR Delhi Branch</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 bg-cream/5 p-8 border border-cream/15 rounded-[4px]">
              <h3 className="font-serif text-2xl text-gold mb-4">Need Direct Counsel?</h3>
              <p className="text-xs text-cream/70 leading-relaxed font-light mb-6">
                Discuss your Indian trademark expansion strategy with our senior attorneys today.
              </p>
              <Link
                href="/contact"
                className="w-full bg-gold hover:bg-gold-light text-navy font-sans text-xs tracking-widest uppercase font-bold py-4 px-6 rounded-[2px] flex items-center justify-center gap-2 transition-colors"
              >
                <span>Schedule Attorney Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 6: FAQ Accordion Section */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl mb-12">
            <SectionLabel>Common Questions</SectionLabel>
            <SplitHeading className="display mt-4 text-[clamp(2.2rem,4.5vw,3.8rem)] text-navy">
              Frequently Asked Questions.
            </SplitHeading>
            <p className="mt-4 text-[15px] text-muted font-light">
              Essential legal guidance for international companies registering trademarks in India.
            </p>
          </div>

          <div className="max-w-4xl">
            <Accordion items={attorneyFaqs} />
          </div>
        </div>
      </Section>

      {/* SECTION 7: Comprehensive Internal Linking Hub */}
      <Section className="bg-paper border-t border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Related IP Practices</SectionLabel>
          <h3 className="font-serif text-3xl text-navy mt-4 mb-8">Explore Our Legal Capabilities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-sans">
            <Link href="/trademark" className="p-4 bg-cream border border-line/60 rounded-[4px] hover:border-gold transition-colors font-medium text-navy">
              Trademark Registration →
            </Link>
            <Link href="/trademark-lawyer-india" className="p-4 bg-cream border border-line/60 rounded-[4px] hover:border-gold transition-colors font-medium text-navy">
              Trademark Lawyer India →
            </Link>
            <Link href="/trademark-agent-india" className="p-4 bg-cream border border-line/60 rounded-[4px] hover:border-gold transition-colors font-medium text-navy">
              Trademark Agent India →
            </Link>
            <Link href="/copyright" className="p-4 bg-cream border border-line/60 rounded-[4px] hover:border-gold transition-colors font-medium text-navy">
              Copyright Registration →
            </Link>
            <Link href="/design-registration" className="p-4 bg-cream border border-line/60 rounded-[4px] hover:border-gold transition-colors font-medium text-navy">
              Design Registration →
            </Link>
            <Link href="/services" className="p-4 bg-cream border border-line/60 rounded-[4px] hover:border-gold transition-colors font-medium text-navy">
              Madrid Protocol Filings →
            </Link>
            <Link href="/insights" className="p-4 bg-cream border border-line/60 rounded-[4px] hover:border-gold transition-colors font-medium text-navy">
              IP Insights & Articles →
            </Link>
            <Link href="/contact" className="p-4 bg-cream border border-line/60 rounded-[4px] hover:border-gold transition-colors font-medium text-navy">
              Contact Counsel →
            </Link>
          </div>
        </div>
      </Section>

      <ConsultationCTA />
    </>
  );
}
