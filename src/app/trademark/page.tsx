import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Scale, TrendingUp, Globe2, Eye, Landmark, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SectionLabel, SplitHeading, Reveal } from "@/components/ui/reveal";
import { MediaFrame, VideoFrame } from "@/components/ui/media";
import { Accordion } from "@/components/ui/interactive";
import { TrademarkTypes } from "@/components/home/grids";
import { TrademarkJourney } from "@/components/home/journey";
import { ConsultationCTA } from "@/components/sections/cta";
import { trademarkFaqs } from "@/lib/content";
import { media } from "@/lib/media";

import { site } from "@/lib/site";
import { getLegalServiceSchema, getBreadcrumbSchema, getFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Trademark Registration in India | Sharma & Sharma | IPMARK",
  description:
    "Register your trademark in India with Sharma & Sharma. We help businesses from the USA, China, and worldwide with trademark search, renewal services.",
  alternates: {
    canonical: `${site.url}/trademark`,
  },
  openGraph: {
    title: "Trademark Registration in India | Sharma & Sharma | IPMARK",
    description:
      "Register your trademark in India with Sharma & Sharma. We help businesses from the USA, China, and worldwide with trademark search, renewal services.",
    url: `${site.url}/trademark`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trademark Registration in India | Sharma & Sharma | IPMARK",
    description:
      "Register your trademark in India with Sharma & Sharma. We help businesses from the USA, China, and worldwide with trademark search, renewal services.",
  },
};

const benefits = [
  { icon: ShieldCheck, title: "Exclusive Rights", text: "A registered mark grants you the exclusive right to use it for your goods and services." },
  { icon: Scale, title: "Legal Standing", text: "Registration is prima facie evidence of ownership in any enforcement action." },
  { icon: TrendingUp, title: "Brand Value", text: "A trademark is a tradable, licensable and financeable business asset." },
  { icon: Globe2, title: "Global Base", text: "An Indian registration anchors your international filing strategy." },
  { icon: Eye, title: "Deterrence", text: "The ® symbol warns competitors and deters would-be infringers." },
  { icon: Landmark, title: "Perpetual Life", text: "Renewable every ten years — protection that can last forever." },
];

export default function TrademarkPage() {
  const legalSchema = getLegalServiceSchema({
    name: "Sharma & Sharma Trademark Practice",
    description: "Complete trademark search, registration, examination defense, and renewal services in India.",
    url: `${site.url}/trademark`,
  });

  const faqSchema = getFAQSchema(trademarkFaqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Trademark Registration", url: `${site.url}/trademark` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        label="Trademark Registration"
        title="The name that carries your reputation."
        intro="A trademark is the legal embodiment of everything your brand stands for. We help you claim it, register it, and defend it — completely."
        image="/media/Trademark Registration.jpeg"
        imageAlt="Brand packaging and labels"
      />

      {/* Benefits */}
      <Section className="bg-paper">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <SectionLabel>Why It Matters</SectionLabel>
            <SplitHeading className="display mt-6 text-[clamp(2.2rem,5vw,4.5rem)] text-navy">
              Six reasons to register.
            </SplitHeading>
          </div>
          <Reveal>
            <p className="max-w-md text-[15px] leading-relaxed text-muted lg:pb-3">
              Without registration, your rights are limited and hard to enforce. With
              it, your brand becomes a protected, valuable and enduring asset.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <Reveal key={b.title}>
              <div className="h-full bg-paper p-8">
                <b.icon className="h-6 w-6 text-gold" strokeWidth={1.4} />
                <h3 className="mt-6 font-serif text-2xl text-navy">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Law explained visually */}
      <Section dark>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-[4px]">
              <VideoFrame src={media.video.packaging} className="aspect-[4/3] w-full" />
            </div>
          </Reveal>
          <div>
            <SectionLabel light>The Law, Simply</SectionLabel>
            <SplitHeading className="display mt-6 text-[clamp(2rem,4.5vw,3.8rem)] text-cream">
              What the law actually protects.
            </SplitHeading>
            <div className="mt-8 space-y-6">
              {[
                { h: "A source identifier", t: "A trademark protects the link between a sign and the origin of goods — not the product itself." },
                { h: "Distinctiveness", t: "The more distinctive your mark, the stronger and more defensible your rights." },
                { h: "Class-based rights", t: "Protection is granted within specific classes of goods and services under the Nice Classification." },
              ].map((x) => (
                <Reveal key={x.h} className="border-l border-gold/40 pl-6">
                  <h3 className="font-serif text-2xl text-cream">{x.h}</h3>
                  <p className="mt-1 max-w-md text-[15px] leading-relaxed text-cream/60">{x.t}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <TrademarkTypes />

      {/* Examples */}
      <Section className="bg-paper">
        <SectionLabel>In Practice</SectionLabel>
        <SplitHeading className="display mt-6 max-w-3xl text-[clamp(2rem,4.5vw,3.8rem)] text-navy">
          Marks live on shelves, screens and streets.
        </SplitHeading>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {["/media/automobile.jpeg", "/media/fashion.jpeg", "/media/medical.jpeg"].map((src, i) => (
            <Reveal key={src} delay={i * 0.08}>
              <MediaFrame src={src} alt="Trademark in practice" sizes="33vw" className="aspect-[3/4] w-full" />
            </Reveal>
          ))}
        </div>
      </Section>

      <TrademarkJourney />

      {/* Dedicated Trademark Services Links */}
      <Section className="bg-paper border-t border-line/60">
        <SectionLabel>Specialized Practice Areas</SectionLabel>
        <SplitHeading className="display mt-6 max-w-3xl text-[clamp(2rem,4.5vw,3.8rem)] text-navy">
          Dedicated Trademark Practice Portals.
        </SplitHeading>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Reveal delay={0.05}>
            <Link
              href="/trademark-registration-india"
              className="group block p-8 bg-cream border border-line/70 hover:border-gold transition-colors duration-300 rounded-[4px] h-full"
            >
              <div className="flex items-center justify-between text-gold">
                <span className="font-mono text-xs uppercase tracking-widest">Filing & Clearance</span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <h3 className="font-serif text-2xl text-navy mt-4 group-hover:text-gold transition-colors duration-300">
                Trademark Registration in India
              </h3>
              <p className="text-xs text-muted mt-2 font-light leading-relaxed">
                End-to-end statutory brand registration for US, Chinese, foreign, and Indian enterprises since 1972.
              </p>
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              href="/trademark-attorney-india"
              className="group block p-8 bg-cream border border-line/70 hover:border-gold transition-colors duration-300 rounded-[4px] h-full"
            >
              <div className="flex items-center justify-between text-gold">
                <span className="font-mono text-xs uppercase tracking-widest">Advocacy & Litigation</span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <h3 className="font-serif text-2xl text-navy mt-4 group-hover:text-gold transition-colors duration-300">
                Trademark Attorney & Lawyer
              </h3>
              <p className="text-xs text-muted mt-2 font-light leading-relaxed">
                Examination hearings, opposition prosecution, and High Court IP litigation counsel.
              </p>
            </Link>
          </Reveal>

          <Reveal delay={0.15}>
            <Link
              href="/trademark-agent-india"
              className="group block p-8 bg-cream border border-line/70 hover:border-gold transition-colors duration-300 rounded-[4px] h-full"
            >
              <div className="flex items-center justify-between text-gold">
                <span className="font-mono text-xs uppercase tracking-widest">Statutory Agency</span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <h3 className="font-serif text-2xl text-navy mt-4 group-hover:text-gold transition-colors duration-300">
                Trademark Agent in India
              </h3>
              <p className="text-xs text-muted mt-2 font-light leading-relaxed">
                Registered agent representation under Section 145 and Form TM-M Power of Attorney handling.
              </p>
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* FAQs */}
      <Section className="bg-cream">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Questions</SectionLabel>
            <SplitHeading className="display mt-6 text-[clamp(2rem,4vw,3.5rem)] text-navy">
              Answered plainly.
            </SplitHeading>
          </div>
          <Accordion items={trademarkFaqs} />
        </div>
      </Section>

      <ConsultationCTA />
    </>
  );
}
