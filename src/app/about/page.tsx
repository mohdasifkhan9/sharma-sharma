import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { SectionLabel, SplitHeading, Reveal } from "@/components/ui/reveal";
import { MediaFrame } from "@/components/ui/media";
import { LegacyTimeline, Stats } from "@/components/home/story";
import { ConsultationCTA } from "@/components/sections/cta";
import { media } from "@/lib/media";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the Firm",
  description:
    "Since 1972, Sharma & Sharma has protected the ideas, brands and creations of India's most ambitious founders and enterprises.",
};

const values = [
  { n: "01", h: "Precision", t: "Every filing is drafted with meticulous care. In IP, a detail is never small." },
  { n: "02", h: "Discretion", t: "We hold our clients' confidences as closely as their competitors would love to." },
  { n: "03", h: "Conviction", t: "When your rights are challenged, we defend them without hesitation." },
  { n: "04", h: "Continuity", t: "Three generations of counsel means relationships measured in decades." },
];

export default function AboutPage() {
  return (
    <>
      <header className="px-5 pb-16 pt-36 md:px-10 md:pb-24 md:pt-48">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>The Firm</SectionLabel>
          <SplitHeading
            as="h1"
            className="display mt-6 max-w-5xl text-[clamp(2.6rem,7vw,6.5rem)] text-navy"
          >
            A heritage of protecting original thought.
          </SplitHeading>
          <div className="mt-14 grid gap-4 md:grid-cols-12">
            <div className="md:col-span-8">
              <MediaFrame
                src={media.architecture[1]}
                alt="The firm's offices"
                priority
                parallax
                sizes="66vw"
                className="aspect-[16/9] w-full"
              />
            </div>
            <div className="md:col-span-4">
              <MediaFrame
                src={media.heritage[0]}
                alt="Historic documents"
                sizes="33vw"
                className="aspect-[3/4] h-full w-full"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Founder story */}
      <Section className="bg-paper">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <MediaFrame
              src={media.heritage[1]}
              alt="Founder's desk"
              sizes="50vw"
              className="aspect-[4/5] w-full"
            />
          </Reveal>
          <div>
            <SectionLabel>The Founder&apos;s Story</SectionLabel>
            <SplitHeading className="display mt-6 text-[clamp(2rem,4vw,3.5rem)] text-navy">
              It began with a single conviction.
            </SplitHeading>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-muted">
              <Reveal>
                <p>
                  In {site.since}, in a modest office near Fatehpuri in Old Delhi,
                  Sharma &amp; Sharma opened with a belief that would outlast trends
                  and governments alike: that ideas deserve the same protection as
                  property, and that a nation of creators would one day depend on it.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Over five decades, that conviction grew into one of India&apos;s
                  most respected intellectual property practices — trusted by
                  first-time founders and multinational houses in equal measure.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <blockquote className="border-l-2 border-gold pl-6 font-serif text-2xl italic text-navy">
                  &ldquo;A brand is a promise. Our work is to make that promise
                  legally unbreakable.&rdquo;
                </blockquote>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission / Vision */}
      <Section dark>
        <div className="grid gap-16 md:grid-cols-2">
          <Reveal>
            <SectionLabel light>Our Mission</SectionLabel>
            <p className="mt-6 font-serif text-3xl leading-snug text-cream md:text-4xl">
              To safeguard the intellectual property of India&apos;s creators with
              precision, integrity and relentless diligence.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionLabel light>Our Vision</SectionLabel>
            <p className="mt-6 font-serif text-3xl leading-snug text-cream md:text-4xl">
              To be the counsel of choice wherever Indian ideas travel — a bridge
              between local innovation and global protection.
            </p>
          </Reveal>
        </div>
      </Section>

      <LegacyTimeline />

      {/* Values */}
      <Section className="bg-paper">
        <SectionLabel>Core Values</SectionLabel>
        <SplitHeading className="display mt-6 max-w-3xl text-[clamp(2rem,4.5vw,3.8rem)] text-navy">
          The principles behind every filing.
        </SplitHeading>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <Reveal key={v.n}>
              <div className="h-full bg-paper p-8">
                <span className="font-serif text-5xl text-line">{v.n}</span>
                <h3 className="mt-6 font-serif text-2xl text-navy">{v.h}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{v.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Stats />
      <ConsultationCTA />
    </>
  );
}
