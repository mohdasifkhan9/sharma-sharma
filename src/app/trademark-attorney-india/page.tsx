import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Scale,
  TrendingUp,
  Globe2,
  Eye,
  Landmark,
  FileText,
  CheckCircle2,
  Building2,
  HelpCircle,
  ArrowUpRight,
  ArrowRight,
  Clock,
  Award,
  Check,
  Shield,
  FileCheck,
  Lock,
  Compass,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SectionLabel, SplitHeading, Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/interactive";
import { MediaFrame } from "@/components/ui/media";
import { ConsultationCTA } from "@/components/sections/cta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trademark Attorney India | US & Global Brand Protection Counsel",
  description:
    "Established 1972. Premier Indian Trademark Attorney practice representing US corporations, Amazon brand registry applicants & international law firms in India Trade Marks Registry.",
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
    title: "Trademark Attorney India | US & Global Brand Protection Counsel",
    description:
      "Premier Indian IP advocacy firm providing comprehensive trademark search, registration, office action responses, and opposition representation for US & international clients.",
    url: `${site.url}/trademark-attorney-india`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trademark Attorney India | US & Global Brand Protection Counsel",
    description:
      "Established 1972. Trusted trademark attorney counsel for international corporations entering the Indian market.",
  },
};

const attorneyFaqs = [
  {
    q: "Can a foreign company or US business register a trademark in India without a local office?",
    a: "Yes. Overseas entities do not need a physical presence or subsidiary in India to obtain trademark protection. Foreign applicants simply require a designated Address for Service in India, which is provided by your retained Indian Trademark Attorney. We file directly with the Trade Marks Registry on behalf of US corporations, Amazon sellers, and global startups.",
  },
  {
    q: "Why should US companies retain a specialized Indian Trademark Attorney rather than filing blindly?",
    a: "The Indian Trade Marks Act (1999) features unique distinctiveness thresholds, rigid classification standards (NIER), and procedural nuances regarding prior adoption claims ('user dates'). A specialized attorney conducts pre-filing search audits to clear deceptive similarities, drafts precise goods/services specifications, and handles registry objections, preventing costly refusals.",
  },
  {
    q: "What is the typical timeline for securing trademark registration in India?",
    a: "If an application receives no registry examination objections or third-party oppositions, the official certificate is usually issued within 6 to 10 months. However, filing with a registered attorney allows you to use the ™ symbol immediately upon receipt of the application official acknowledgement number within 24 hours.",
  },
  {
    q: "How does claiming prior 'User Date' impact Indian trademark applications?",
    a: "India operates on a 'first-to-use' priority doctrine alongside registration. If your business has used the brand name in India or internationally prior to filing (including online sales or exports to Indian consumers), submitting an Affidavit of User with proof of usage secures retroactive priority over subsequent applicants.",
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

const trustCards = [
  {
    icon: Landmark,
    title: "Established 1972",
    text: "Over five decades of continuous legal practice representing brand owners before the Trade Marks Registry & Courts.",
  },
  {
    icon: Award,
    title: "50+ Years IP Excellence",
    text: "Deep institutional expertise in Indian trademark law, office actions, oppositions, and commercial enforcement.",
  },
  {
    icon: Globe2,
    title: "International Network",
    text: "Trusted local associate counsel for overseas law firms, US corporate legal teams, and global brand managers.",
  },
  {
    icon: Scale,
    title: "High Court Practice",
    text: "Litigation standing before Commercial Courts and the Delhi High Court for urgent injunctions and enforcement.",
  },
  {
    icon: ShieldCheck,
    title: "Strategic Brand Defense",
    text: "Proactive search audits and custom specification drafting to build impregnable defensive moats around marks.",
  },
  {
    icon: Clock,
    title: "24-Hour Ack Issuance",
    text: "Rapid electronic filing providing official TM application numbers within 24 hours for immediate brand security.",
  },
];

const timelineSteps = [
  {
    num: "01",
    phase: "AUDIT & CLEARANCE",
    title: "Comprehensive Availability Search",
    desc: "Exhaustive search across identical, phonetic, and well-known trademark registers in India to clear Section 9 & 11 conflicts before submission.",
  },
  {
    num: "02",
    phase: "STRATEGY & MAPPING",
    title: "Class Specification & Drafting",
    desc: "Structuring goods/services specifications under Nice Classification (Classes 1–45) and drafting international user priority claims.",
  },
  {
    num: "03",
    phase: "FILING & ™ RIGHTS",
    title: "Direct Registry Submission",
    desc: "Electronic submission with the Trade Marks Registry. Official TM Application Number issued within 24 hours allowing immediate ™ symbol usage.",
  },
  {
    num: "04",
    phase: "PROSECUTION",
    title: "Examination Report Defense",
    desc: "Drafting statutory responses backed by judicial precedents within 30 days to overcome any registrar objections under Section 9 or 11.",
  },
  {
    num: "05",
    phase: "PUBLICATION",
    title: "Trade Marks Journal Advertising",
    desc: "Accepted mark is published in the official Journal, triggering the mandatory 4-month statutory public opposition period.",
  },
  {
    num: "06",
    phase: "GRANT & REGISTRATION",
    title: "Official Certificate Issuance",
    desc: "Upon completion of the publication window without opposition, the official Registration Certificate (® symbol) is issued for 10 years.",
  },
  {
    num: "07",
    phase: "PORTFOLIO WATCH",
    title: "Continuous Brand Protection",
    desc: "Ongoing registry surveillance, renewal tracking (Form TM-R), and administrative opposition filings against infringing third-party marks.",
  },
];

const relatedPractices = [
  {
    title: "Trademark Registration",
    desc: "Complete search, filing, and registry prosecution across all 45 classes.",
    href: "/trademark",
  },
  {
    title: "Trademark Lawyer India",
    desc: "Litigation, opposition defense, and Delhi High Court legal representation.",
    href: "/trademark-lawyer-india",
  },
  {
    title: "Trademark Agent India",
    desc: "Registered agent services, Power of Attorney handling, and expedited filings.",
    href: "/trademark-agent-india",
  },
  {
    title: "Copyright Registration",
    desc: "Safeguarding software code, literary works, design assets, and creative IP.",
    href: "/copyright",
  },
  {
    title: "Design Registration",
    desc: "Protecting aesthetic industrial designs, product shapes, and packaging.",
    href: "/design-registration",
  },
  {
    title: "International Filing",
    desc: "Madrid Protocol filings and cross-border portfolio expansion in 150+ countries.",
    href: "/services",
  },
  {
    title: "IP Insights & Journal",
    desc: "Expert analysis on Indian IP jurisprudence, court rulings, and filing strategy.",
    href: "/insights",
  },
  {
    title: "Direct Attorney Consultation",
    desc: "Schedule a confidential strategic review with senior IP legal counsel.",
    href: "/contact",
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

      {/* HERO SECTION */}
      <PageHero
        label="Indian Trademark Attorney Practice"
        title="Protecting Global Marks Across Indian Jurisdictions."
        intro="Representing international technology corporations, cross-border law firms, and Amazon Brand Registry applicants before the Indian Trade Marks Registry since 1972."
        image="/media/Lawyer's_desk_Delhi_heritage.jpeg"
        imageAlt="Experienced Indian Trademark Attorney Reviewing Legal Filings & Documents"
      />

      {/* HERO TRUST METRICS STRIP */}
      <div className="border-b border-line bg-paper py-5 select-none">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-between gap-y-4 gap-x-8 text-xs font-sans text-navy font-medium">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>Established Since 1972</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>50+ Years of IP Excellence</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>International Trademark Attorneys</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>Global Client Portfolio</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>Fast Response Within 24 Hours</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: WHY INDIA TRADEMARK PROTECTION MATTERS */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <SectionLabel>Market Landscape</SectionLabel>
              <SplitHeading className="display mt-6 text-[clamp(2.2rem,4.5vw,3.8rem)] text-navy leading-tight">
                Why Foreign Brands Must Secure Indian Rights Early.
              </SplitHeading>
              <p className="mt-6 text-[15px] leading-relaxed text-muted font-light">
                India has emerged as the world&apos;s fifth-largest economy and a primary destination for global enterprise expansion.
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

      {/* SECTION 2: EDITORIAL TRUST CARDS GRID */}
      <Section className="bg-paper border-y border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl mb-14">
            <SectionLabel>Institutional Trust</SectionLabel>
            <SplitHeading className="display mt-4 text-[clamp(2rem,4vw,3.5rem)] text-navy">
              Why Global Brands Choose Sharma & Sharma.
            </SplitHeading>
            <p className="mt-4 text-[15px] text-muted font-light">
              Combining half a century of trademark advocacy with modern cross-border filing protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustCards.map((card, idx) => (
              <Reveal key={card.title} delay={idx * 0.08} className="h-full">
                <div className="group h-full bg-cream p-8 border border-line/70 rounded-[4px] flex flex-col justify-between transition-all duration-500 hover:border-gold hover:shadow-sm">
                  <div>
                    <card.icon className="w-8 h-8 text-gold mb-6 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.4} />
                    <h3 className="font-serif text-2xl text-navy mb-3 group-hover:text-gold transition-colors duration-300">{card.title}</h3>
                    <p className="text-sm text-muted leading-relaxed font-light">{card.text}</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-line/40 text-[9px] font-mono text-gold uppercase tracking-wider">
                    VERIFIED LEGAL CAPABILITY
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 3: CINEMATIC MEDIA BREAKDOWN */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <MediaFrame
                src="/media/Global_filing_strategy_document.jpeg"
                alt="International Trademark Filing Documentation & Portfolio Strategy"
                className="aspect-[4/3] w-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
                parallax
              />
            </div>
            <div className="lg:col-span-6">
              <SectionLabel>Global Alignment</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl text-navy tracking-tight mt-4 mb-6 leading-tight">
                Seamless Associate Representation for Foreign Law Firms & Corporate Legal Departments.
              </h2>
              <p className="text-[15px] text-muted leading-relaxed font-light mb-6">
                Overseas trademark attorneys and international corporate counsel rely on Sharma & Sharma as their dedicated in-country associate in India. We handle local docketing, Power of Attorney compliance, examination hearings, and statutory maintenance while ensuring full transparency.
              </p>
              <ul className="space-y-3 text-sm text-muted font-light mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-gold font-serif">✦</span>
                  <span>Direct electronic filing before all 5 branches of the Trade Marks Registry.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold font-serif">✦</span>
                  <span>Transparent associate fee schedules with zero hidden disbursements.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold font-serif">✦</span>
                  <span>Dedicated docketing support and 24-hour application number confirmation.</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-navy hover:text-gold font-bold transition-colors"
              >
                <span>Partner With Local Counsel</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 4: 7-STAGE LUXURY TIMELINE */}
      <Section className="bg-paper border-y border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl mb-14">
            <SectionLabel>Registration Journey</SectionLabel>
            <SplitHeading className="display mt-4 text-[clamp(2.2rem,4vw,3.5rem)] text-navy">
              The 7-Stage Trademark Process in India.
            </SplitHeading>
            <p className="mt-4 text-[15px] text-muted font-light">
              From preliminary availability clearance to final statutory certificate grant — structured for speed and legal precision.
            </p>
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

      {/* SECTION 5: TIMELINE SPEED & DOCUMENTATION MATRIX */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6 bg-paper p-8 md:p-10 border border-line/70 rounded-[4px]">
              <SectionLabel>Filing Checklist</SectionLabel>
              <h3 className="font-serif text-3xl text-navy mt-4 mb-6">Required Documentation for Foreign Applicants</h3>
              <ul className="space-y-4 font-sans text-sm text-muted">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span><strong>Applicant Details:</strong> Entity legal name, jurisdiction of incorporation, and corporate address.</span>
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

            <div className="lg:col-span-6 bg-paper p-8 md:p-10 border border-line/70 rounded-[4px]">
              <SectionLabel>Turnaround Speed</SectionLabel>
              <h3 className="font-serif text-3xl text-navy mt-4 mb-6">Procedural Milestones & Durations</h3>
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

      {/* SECTION 6: CASE STUDY HIGHLIGHT */}
      <Section className="bg-navy text-cream relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-[10px] tracking-[0.3em] font-sans uppercase text-gold font-bold mb-4 block">
                CASE HIGHLIGHT • US SAAS UNICORN
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-cream leading-tight mb-6">
                Overcoming Relative Similarity Objections for a Silicon Valley Tech Leader.
              </h2>
              <p className="text-sm md:text-base text-cream/70 font-light leading-relaxed mb-8">
                When a major California software enterprise faced a Section 11 refusal due to a phonetically similar mark filed by a local domestic business, Sharma & Sharma established prior international adoption doctrines. We successfully secured an order from the Registrar allowing registration to proceed unhindered.
              </p>
              <div className="grid grid-cols-3 gap-6 border-t border-cream/15 pt-6 text-xs font-mono text-gold">
                <div>
                  <span className="block text-[9px] text-cream/50 uppercase">RESULT</span>
                  <span className="font-bold text-sm">Full Registration Granted</span>
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
                <span>Book Attorney Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 7: FAQ ACCORDION SECTION */}
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

      {/* SECTION 8: INTERACTIVE RELATED PRACTICES CARDS */}
      <Section className="bg-paper border-t border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Related IP Practices</SectionLabel>
          <h2 className="font-serif text-3xl md:text-4xl text-navy mt-4 mb-10">Explore Our Practice Capabilities</h2>
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
                    <span>EXPLORE PRACTICE</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 9: PRE-FOOTER REASSURANCE SECTION */}
      <Section className="bg-cream border-t border-line/60 select-none">
        <div className="mx-auto max-w-[1400px]">
          <div className="bg-paper border border-line/70 rounded-[8px] p-8 md:p-14 text-center max-w-4xl mx-auto shadow-sm relative overflow-hidden">
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.02] border m-4 border-navy/40" />

            <span className="text-[10px] tracking-[0.3em] font-sans uppercase text-gold font-bold block mb-4">
              COMMERCIAL BRAND SECURITY
            </span>

            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.6rem)] text-navy leading-tight mb-6">
              Protect Your Brand Before Someone Else Does.
            </h2>

            <p className="text-sm md:text-base text-muted font-light leading-relaxed max-w-2xl mx-auto mb-10">
              Under Indian trademark jurisprudence, first-to-use and direct registration provide absolute statutory protection. Delaying registration exposes your corporate identity to unauthorized third-party filings and market dilution.
            </p>

            <div className="flex flex-wrap gap-4 items-center justify-center mb-10">
              <Link
                href="/contact"
                className="bg-navy hover:bg-navy-soft text-cream px-8 py-4 text-[11px] font-sans tracking-[0.25em] uppercase border border-navy transition-all duration-300 shadow-md flex items-center gap-2"
              >
                <span>Book Attorney Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/trademark"
                className="bg-transparent hover:bg-navy/5 text-navy px-8 py-4 text-[11px] font-sans tracking-[0.25em] uppercase border border-navy/35 hover:border-navy transition-all duration-300"
              >
                <span>Review Filing Process</span>
              </Link>
            </div>

            {/* Reassurance Badges */}
            <div className="pt-8 border-t border-line/50 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] font-mono text-gold uppercase tracking-wider">
              <span>✓ 24-HOUR RESPONSE GUARANTEE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-navy/20 hidden sm:inline-block" />
              <span>✓ CONFIDENTIAL LEGAL ADVISORY</span>
              <span className="w-1.5 h-1.5 rounded-full bg-navy/20 hidden sm:inline-block" />
              <span>✓ INTERNATIONAL CLIENTS WELCOME</span>
              <span className="w-1.5 h-1.5 rounded-full bg-navy/20 hidden sm:inline-block" />
              <span>✓ ESTABLISHED 1972</span>
            </div>
          </div>
        </div>
      </Section>

      {/* BOTTOM CONSULTATION SECTION */}
      <ConsultationCTA />
    </>
  );
}
