import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
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
  Code,
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
  title: "Copyright Registration India | Software & Creative IP Counsel",
  description:
    "Protect software source code, literary works, artistic designs & digital media under the Copyright Act 1957. Copyright Office New Delhi practice since 1972.",
  keywords: [
    "Copyright Registration India",
    "Software Copyright Protection India",
    "Literary & Software IP Counsel Delhi",
    "Copyright Lawyer India",
    "Software Source Code Copyright India",
  ],
  alternates: {
    canonical: `${site.url}/copyright-registration-india`,
  },
  openGraph: {
    title: "Copyright Registration India | Software & Original Works Counsel",
    description:
      "Statutory copyright registration for software source code, literary, musical, and artistic creations before the Copyright Office of India.",
    url: `${site.url}/copyright-registration-india`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Copyright Registration India | Software & IP Protection Counsel",
    description:
      "Established 1972. Complete copyright registration and infringement defense in India.",
  },
};

const copyrightFaqs = [
  {
    q: "What types of works are eligible for copyright registration in India?",
    a: "Under the Copyright Act 1957, copyright protects original literary works (including computer software source code and algorithms), dramatic, musical, artistic works, cinematograph films, and sound recordings.",
  },
  {
    q: "Is software source code registrable as a copyright in India?",
    a: "Yes. Computer software programs and source code are registered under the category of 'Literary Works' in India. Filing object code and source code extracts secures statutory proof of ownership.",
  },
  {
    q: "Is copyright registration mandatory to claim ownership in India?",
    a: "Copyright protection arises automatically upon creation under the Berne Convention. However, formal registration with the Copyright Office provides prima facie evidence of ownership in court enforcement actions.",
  },
  {
    q: "What is the duration of copyright protection in India?",
    a: "For literary, dramatic, musical, and artistic works, copyright lasts for the author's lifetime plus 60 years. For corporate works, software, films, and sound recordings, protection spans 60 years from publication.",
  },
  {
    q: "Can a foreign company or US entity register copyrights in India?",
    a: "Yes. India is a signatory to the Berne Convention and Universal Copyright Convention. Foreign entities enjoy national treatment and can directly register software code or creative assets in India.",
  },
  {
    q: "What is the requirement for a Search Certificate (CC-1) for artistic works?",
    a: "If an artistic work is capable of being used as a trademark or logo, the applicant must obtain a Search Certificate (Form CC-1) from the Trade Marks Registry before filing for copyright registration.",
  },
  {
    q: "What is the procedure if a Copyright Discrepancy Letter is issued?",
    a: "The Copyright Office issues discrepancy letters if formatting or ownership documents require clarification. Our attorneys draft formal replies to satisfy examiner requisitions within the 30-day window.",
  },
  {
    q: "What remedies exist for software code piracy or copyright infringement in India?",
    a: "Rights holders can obtain civil court injunctions, seizure orders for pirated servers, monetary damages, and criminal prosecution carrying mandatory imprisonment under Section 63.",
  },
  {
    q: "How does copyright registration protect SaaS companies in India?",
    a: "Formally registered source code and UI assets empower SaaS providers to enforce digital takedown notices, shut down unauthorized code mirrors, and substantiate enterprise IP valuation.",
  },
  {
    q: "What documents are required to file a copyright application in India?",
    a: "You require: (1) Applicant & Author details, (2) Copies of the work (or source code printouts), (3) No Objection Certificates (NOC) from authors/employers, and (4) Form XIV Power of Attorney.",
  },
];

const copyrightSteps = [
  {
    num: "01",
    phase: "AUDIT & PREPARATION",
    title: "Work Categorization & Code Extraction",
    desc: "Reviewing software source code, UI elements, or literary manuscripts to structure compliant deposit copies and author NOCs.",
  },
  {
    num: "02",
    phase: "TM SEARCH CERTIFICATE",
    title: "Form CC-1 Clearance (Artistic Works)",
    desc: "For artistic marks or logos, securing the mandatory Search Certificate from the Trade Marks Registry confirming no conflicting marks exist.",
  },
  {
    num: "03",
    phase: "OFFICIAL FILING",
    title: "Copyright Office New Delhi Submission",
    desc: "Electronic filing with the Copyright Office (New Delhi), obtaining the official Diary Number for legal tracking.",
  },
  {
    num: "04",
    phase: "MANDATORY WAIT",
    title: "30-Day Statutory Objection Period",
    desc: "A mandatory 30-day waiting period during which third parties may inspect the Diary entry and submit objections.",
  },
  {
    num: "05",
    phase: "EXAMINATION & GRANT",
    title: "Discrepancy Clearance & Registration",
    desc: "Addressing any examiner requisitions, securing formal approval, and receiving the Extract from the Register of Copyrights.",
  },
];

const relatedPractices = [
  {
    title: "Trademark Registration India",
    desc: "Complete brand name, logo, and slogan registration in India.",
    href: "/trademark-registration-india",
  },
  {
    title: "Design Registration India",
    desc: "Protecting product shapes, industrial designs, and packaging.",
    href: "/design-registration-india",
  },
  {
    title: "Trademark Attorney India",
    desc: "Direct legal counsel for foreign businesses and US SaaS companies.",
    href: "/trademark-attorney-india",
  },
  {
    title: "Trademark Lawyer India",
    desc: "Litigation, opposition defense, and High Court advocacy.",
    href: "/trademark-lawyer-india",
  },
];

export default function CopyrightRegistrationIndiaPage() {
  const legalSchema = getLegalServiceSchema({
    name: "Sharma & Sharma Copyright & Software IP Practice",
    url: `${site.url}/copyright-registration-india`,
    description: "Copyright registration for software source code, literary works, artistic marks, and digital assets in India.",
  });

  const faqSchema = getFAQSchema(copyrightFaqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Services", url: `${site.url}/services` },
    { name: "Copyright Registration India", url: `${site.url}/copyright-registration-india` },
  ]);
  const serviceSchema = getServiceSchema({
    name: "Copyright Registration Service India",
    description: "Statutory copyright application filing, source code deposit, and Extract from Register procurement in India.",
    serviceType: "Legal Service",
    url: `${site.url}/copyright-registration-india`,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <PageHero
        label="Original Asset Protection"
        title="Copyright Registration in India."
        intro="Safeguarding software source code, SaaS algorithms, literary manuscripts, artistic logos, and digital media before the Copyright Office of India under the Copyright Act 1957."
        image="/media/Copyright_registration_work_desk.jpeg"
        imageAlt="Software Source Code and Copyright Registration Documents"
      />

      {/* TRUST STRIP */}
      <div className="border-b border-line bg-paper py-5 select-none">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-between gap-y-4 gap-x-8 text-xs font-sans text-navy font-medium">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>Software & SaaS Code Protection</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>Berne Convention Reciprocity</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>Form CC-1 Clearance Practice</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>Copyright Office New Delhi</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: PERSPECTIVE */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <SectionLabel>Intellectual Capital</SectionLabel>
              <SplitHeading className="display mt-6 text-[clamp(2.2rem,4.5vw,3.8rem)] text-navy leading-tight">
                Securing Software Code & Creative Assets.
              </SplitHeading>
              <p className="mt-6 text-[15px] leading-relaxed text-muted font-light">
                Software source code, proprietary algorithms, and original content represent the core intellectual capital of modern technology companies.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-6 text-[15px] leading-relaxed text-muted font-light">
              <p>
                Under the Indian Copyright Act 1957, computer programs are protected as literary works. Obtaining formal registration provides statutory proof of creation date, author identity, and corporate ownership — serving as vital evidence during enforcement lawsuits or IP due diligence.
              </p>
              <p>
                Sharma & Sharma assists software developers, SaaS platforms, digital publishers, and corporate legal teams in structuring compliant copyright filings, securing mandatory author assignments, and resolving office discrepancy letters.
              </p>
              <div className="p-6 bg-paper border-l-2 border-gold rounded-r-[4px] mt-8">
                <span className="text-[10px] tracking-widest text-gold uppercase font-bold block mb-1 font-mono">
                  SOFTWARE IP DEFENSE
                </span>
                <p className="font-serif italic text-navy text-[16px] leading-snug">
                  &ldquo;A formal Extract from the Register of Copyrights is the gold standard for stopping software code duplication, enforcing digital takedowns, and backing venture valuations.&rdquo;
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
            <SectionLabel>Copyright Lifecycle</SectionLabel>
            <SplitHeading className="display mt-4 text-[clamp(2.2rem,4vw,3.5rem)] text-navy">
              5-Step Copyright Registration Protocol.
            </SplitHeading>
          </div>

          <div className="space-y-6">
            {copyrightSteps.map((s, idx) => (
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
            <SectionLabel>Copyright Guidance</SectionLabel>
            <SplitHeading className="display mt-4 text-[clamp(2.2rem,4.5vw,3.8rem)] text-navy">
              Copyright Registration FAQs.
            </SplitHeading>
          </div>

          <div className="max-w-4xl">
            <Accordion items={copyrightFaqs} />
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
