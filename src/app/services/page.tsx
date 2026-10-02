import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { SectionLabel, SplitHeading, Reveal } from "@/components/ui/reveal";
import { GlobalProtection } from "@/components/home/discover";
import { ConsultationCTA } from "@/components/sections/cta";
import { MediaFrame } from "@/components/ui/media";
import { media } from "@/lib/media";

import { site } from "@/lib/site";
import { getLegalServiceSchema, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Intellectual Property Services | Trademark, Copyright, Design & Litigation",
  description:
    "Explore the full breadth of Sharma & Sharma's IP legal services — trademark registration, copyright protection, design registration, Madrid Protocol filings, and High Court IP litigation.",
  alternates: {
    canonical: `${site.url}/services`,
  },
  openGraph: {
    title: "IP Services | Sharma & Sharma Attorneys Delhi",
    description:
      "Comprehensive intellectual property counsel, trademark prosecution, copyright registration, industrial design protection, and brand enforcement in India.",
    url: `${site.url}/services`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IP Services | Sharma & Sharma Attorneys Delhi",
    description:
      "Comprehensive intellectual property counsel and brand protection services in India since 1972.",
  },
};

const catalog = [
  { h: "Trademark Registration", t: "End-to-end registration, from search to certificate and renewal.", href: "/trademark" },
  { h: "Copyright Registration", t: "Protection for literary, artistic, musical and software works.", href: "/copyright" },
  { h: "Design Registration", t: "Rights over the shape, pattern and ornamentation of products.", href: "/design-registration" },
  { h: "International Filing", t: "Madrid Protocol and national filings across 150+ jurisdictions.", href: "/madrid-protocol-india" },
  { h: "IP Portfolio Management", t: "Centralised administration, docketing and renewals for global portfolios.", href: "/trademark-agent-india" },
  { h: "Trademark Monitoring", t: "Continuous watch services across registries and marketplaces.", href: "/trademark-attorney-india" },
  { h: "Trademark Opposition", t: "Prosecuting and defending oppositions before the Registry.", href: "/trademark-attorney-india" },
  { h: "Brand Enforcement", t: "Cease-and-desist, takedowns and anti-counterfeiting action.", href: "/ip-lawyer-india" },
  { h: "Licensing", t: "Drafting and negotiating assignment and licensing agreements.", href: "/contact" },
  { h: "IP Litigation", t: "Infringement and passing-off actions before courts and tribunals.", href: "/ip-lawyer-india" },
  { h: "Legal Advisory", t: "Strategic counsel on IP strategy, valuation and due diligence.", href: "/contact" },
];

export default function ServicesPage() {
  const legalSchema = getLegalServiceSchema({
    name: "Sharma & Sharma Intellectual Property Services",
    description: "Complete intellectual property services portfolio across trademarks, copyrights, designs, and litigation.",
    url: `${site.url}/services`,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "IP Services", url: `${site.url}/services` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <header className="px-5 pb-16 pt-36 md:px-10 md:pb-20 md:pt-48">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Services</SectionLabel>
          <SplitHeading
            as="h1"
            className="display mt-6 max-w-5xl text-[clamp(2.6rem,7vw,6rem)] text-navy"
          >
            Complete counsel across the IP lifecycle.
          </SplitHeading>
          <div className="mt-14">
            <MediaFrame
              src="/media/lawyers-desk-delhi-heritage.jpeg"
              alt="Advisory in session"
              priority
              parallax
              sizes="100vw"
              className="aspect-[16/7] w-full"
            />
          </div>
        </div>
      </header>

      <Section className="bg-paper">
        <div className="border-t border-line">
          {catalog.map((c, i) => (
            <Reveal key={c.h}>
              <Link
                href={c.href}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 border-b border-line py-8 md:gap-12"
                data-cursor="Open"
              >
                <span className="overline text-gold">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-12">
                  <h3 className="font-serif text-2xl text-navy transition-transform duration-500 group-hover:translate-x-2 md:w-80 md:text-3xl">
                    {c.h}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-muted">{c.t}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-navy transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <GlobalProtection />
      <ConsultationCTA />
    </>
  );
}
