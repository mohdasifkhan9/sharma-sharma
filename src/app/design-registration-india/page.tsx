import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
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
  title: "Design Registration India | Industrial Design Protection Counsel",
  description:
    "Protect aesthetic product shapes, packaging & industrial designs under the Indian Designs Act 2000. Patent Office Kolkata representation since 1972.",
  keywords: [
    "Design Registration India",
    "Industrial Design Protection India",
    "Patent & Design Law Firm Delhi",
    "Product Design Patent India",
    "Locarno Classification India Design",
  ],
  alternates: {
    canonical: `${site.url}/design-registration-india`,
  },
  openGraph: {
    title: "Design Registration India | Industrial Design Protection",
    description:
      "Statutory protection for product aesthetics, shapes, patterns, and packaging designs before the Indian Patent Office.",
    url: `${site.url}/design-registration-india`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Registration India | Industrial Design Legal Counsel",
    description:
      "Established 1972. Complete industrial design registration and enforcement in India.",
  },
};

const designFaqs = [
  {
    q: "What constitutes a registrable design under the Indian Designs Act 2000?",
    a: "Under the Designs Act 2000, a design refers solely to the features of shape, configuration, pattern, ornament, or composition of lines or colors applied to any article by an industrial process. It protects visual appeal, not functional mechanisms.",
  },
  {
    q: "What is the requirement for novelty in Indian design registration?",
    a: "A design must be new or original and must not have been disclosed to the public anywhere in India or internationally prior to the filing date (or priority date). Absolute novelty is enforced.",
  },
  {
    q: "Can a foreign company register an industrial design in India?",
    a: "Yes. Foreign entities can register industrial designs in India. If the applicant has filed an earlier design application in a Paris Convention member country, convention priority can be claimed within 6 months.",
  },
  {
    q: "What is the duration of design copyright protection in India?",
    a: "Initial design registration grants protection for 10 years from the registration date. It can be extended for a secondary period of 5 years (15 years total maximum) by filing an extension request.",
  },
  {
    q: "Which international classification system is used for industrial designs in India?",
    a: "India uses the International Classification for Industrial Designs under the Locarno Agreement (32 Classes), categorizing articles based on their utility and commercial nature.",
  },
  {
    q: "What documents are required to file a design application in India?",
    a: "You require: (1) Full applicant details, (2) Article name and Locarno class, (3) Four sets of representation sheets (front, top, side, perspective views), (4) Statement of novelty, and (5) Form 1 Power of Attorney.",
  },
  {
    q: "Where are design applications examined and registered in India?",
    a: "All design applications in India are processed and examined centrally by the Design Wing of the Patent Office located in Kolkata.",
  },
  {
    q: "What constitutes industrial design infringement in India?",
    a: "Design piracy occurs when a competitor applies a registered design (or an obvious imitation) to any article in the same class for commercial sale without consent. Civil remedies include injunctions and damages.",
  },
  {
    q: "Can a product shape be protected under both Design law and Trademark law in India?",
    a: "While a design protects aesthetic shape for up to 15 years, a shape mark (3D trademark) can be protected perpetually if it functions as a source identifier and has acquired distinctiveness.",
  },
  {
    q: "How does Sharma & Sharma assist overseas manufacturers with design protection?",
    a: "We prepare representation sheets, draft statements of novelty, handle Patent Office examination objections, and litigate design cancellation and piracy lawsuits.",
  },
];

const designSteps = [
  {
    num: "01",
    phase: "NOVELTY SEARCH",
    title: "Prior Art & Clearance Review",
    desc: "Exhaustive prior design search across the Indian Patent Office and Locarno databases to confirm novelty before filing.",
  },
  {
    num: "02",
    phase: "REPRESENTATIONS",
    title: "Representation Sheet Drafting",
    desc: "Preparing precise 7-view drawing sheets (perspective, front, rear, top, bottom, left, right) with novelty statements.",
  },
  {
    num: "03",
    phase: "FILING",
    title: "Patent Office Kolkata Submission",
    desc: "Electronic filing with the Central Patent Office in Kolkata, securing the official application number and priority date.",
  },
  {
    num: "04",
    phase: "PROSECUTION",
    title: "Examination Reply & Objections",
    desc: "Drafting formal replies to official examination reports to clear objections regarding novelty or classification.",
  },
  {
    num: "05",
    phase: "REGISTRATION",
    title: "Design Journal Grant & Publication",
    desc: "Issuance of the official Certificate of Registration of Design and publication in the Patent Office Journal.",
  },
];

const relatedPractices = [
  {
    title: "Trademark Registration India",
    desc: "Complete word mark, logo, and brand registration across all classes.",
    href: "/trademark-registration-india",
  },
  {
    title: "Copyright Registration",
    desc: "Protecting software code, artistic drawings, and technical manuals.",
    href: "/copyright-registration-india",
  },
  {
    title: "Trademark Attorney India",
    desc: "Direct counsel for foreign corporations and Amazon sellers.",
    href: "/trademark-attorney-india",
  },
  {
    title: "Trademark Lawyer India",
    desc: "Litigation, opposition defense, and High Court advocacy.",
    href: "/trademark-attorney-india",
  },
];

export default function DesignRegistrationIndiaPage() {
  const legalSchema = getLegalServiceSchema({
    name: "Sharma & Sharma Industrial Design Protection Practice",
    url: `${site.url}/design-registration-india`,
    description: "Industrial design registration, Locarno classification, Patent Office Kolkata prosecution and piracy defense.",
  });

  const faqSchema = getFAQSchema(designFaqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Services", url: `${site.url}/services` },
    { name: "Design Registration India", url: `${site.url}/design-registration-india` },
  ]);
  const serviceSchema = getServiceSchema({
    name: "Industrial Design Registration Service",
    description: "Securing statutory protection for aesthetic product shapes, packaging, and industrial patterns in India.",
    serviceType: "Legal Service",
    url: `${site.url}/design-registration-india`,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <PageHero
        label="Industrial Aesthetic Protection"
        title="Industrial Design Registration in India."
        intro="Securing exclusive 15-year statutory protection for aesthetic product shapes, consumer packaging, electronics contours, and industrial designs before the Indian Patent Office."
        image="/media/Design_registration_hero_workspace.jpeg"
        imageAlt="Industrial Product Design Blueprint and Aesthetic Registration Documentation"
      />

      {/* TRUST STRIP */}
      <div className="border-b border-line bg-paper py-5 select-none">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-between gap-y-4 gap-x-8 text-xs font-sans text-navy font-medium">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>15-Year Protection Scope</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>Locarno 32 Classification</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>Paris Convention Priority</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>Patent Office Kolkata Practice</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: PERSPECTIVE */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <SectionLabel>Aesthetic Rights</SectionLabel>
              <SplitHeading className="display mt-6 text-[clamp(2.2rem,4.5vw,3.8rem)] text-navy leading-tight">
                Protecting Product Contours & Visual Identity.
              </SplitHeading>
              <p className="mt-6 text-[15px] leading-relaxed text-muted font-light">
                In modern consumer markets, visual design and product aesthetics heavily influence purchase decisions. Industrial design registration shields these visual assets from knock-offs.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-6 text-[15px] leading-relaxed text-muted font-light">
              <p>
                The Indian Designs Act 2000 protects the unique visual features of shape, configuration, ornament, or pattern applied to any 2D or 3D article. Registration grants exclusive monopoly rights to apply the design, enabling immediate civil actions against design piracy.
              </p>
              <p>
                Sharma & Sharma assists domestic and overseas product manufacturers, technology companies, and design studios in preparing compliant representation sheets, clearing novelty hurdles, and prosecuting applications before the Patent Office.
              </p>
              <div className="p-6 bg-paper border-l-2 border-gold rounded-r-[4px] mt-8">
                <span className="text-[10px] tracking-widest text-gold uppercase font-bold block mb-1 font-mono">
                  DESIGN PIRACY DEFENSE
                </span>
                <p className="font-serif italic text-navy text-[16px] leading-snug">
                  &ldquo;A registered design allows manufacturers to obtain swift court injunctions against competitors producing identical product shapes or packaging imitations.&rdquo;
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
            <SectionLabel>Design Protocol</SectionLabel>
            <SplitHeading className="display mt-4 text-[clamp(2.2rem,4vw,3.5rem)] text-navy">
              5-Step Industrial Design Process.
            </SplitHeading>
          </div>

          <div className="space-y-6">
            {designSteps.map((s, idx) => (
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
            <SectionLabel>Design Guidance</SectionLabel>
            <SplitHeading className="display mt-4 text-[clamp(2.2rem,4.5vw,3.8rem)] text-navy">
              Industrial Design FAQs.
            </SplitHeading>
          </div>

          <div className="max-w-4xl">
            <Accordion items={designFaqs} />
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
