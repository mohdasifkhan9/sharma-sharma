import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SectionLabel, SplitHeading, Reveal } from "@/components/ui/reveal";
import { MediaFrame, VideoFrame } from "@/components/ui/media";
import { Accordion } from "@/components/ui/interactive";
import { ConsultationCTA } from "@/components/sections/cta";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "Design Registration",
  description:
    "Protect the shape, configuration, pattern and ornamentation of your products. Industrial design registration by Sharma & Sharma.",
};

const faqs = [
  { q: "What is a registered design?", a: "A design registration protects the visual appearance of a product — its shape, configuration, pattern or ornament — as applied by an industrial process." },
  { q: "How is it different from a patent?", a: "A patent protects how something works; a design protects how it looks. Many products benefit from both forms of protection." },
  { q: "How long is a design protected?", a: "A registered design in India is protected for ten years, extendable by a further five, from the date of registration." },
  { q: "Must the design be new?", a: "Yes. Designs must be new and original, and must not have been disclosed to the public before filing. Early filing is essential." },
];

const steps = [
  { h: "Novelty search", t: "We assess whether your design is new and registrable against prior art." },
  { h: "Representations", t: "We prepare precise drawings and views that define the scope of protection." },
  { h: "Classification & filing", t: "We classify under the Locarno system and file with the Design Office." },
  { h: "Registration", t: "On acceptance, your design is registered and published." },
];

export default function DesignPage() {
  return (
    <>
      <PageHero
        label="Design Registration"
        title="Protect form as fiercely as function."
        intro="The way a product looks can be its most valuable asset. We register the shape, configuration and ornamentation that make yours unmistakable."
        image="/media/Design Registration.jpeg"
        imageAlt="Industrial design sketches"
      />

      <Section className="bg-paper">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-[4px]">
              <VideoFrame src={media.video.design} className="aspect-[4/3] w-full" />
            </div>
          </Reveal>
          <div>
            <SectionLabel>Why Design Rights</SectionLabel>
            <SplitHeading className="display mt-6 text-[clamp(2rem,4.5vw,3.8rem)] text-navy">
              Where aesthetics meet ownership.
            </SplitHeading>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
              In competitive markets, appearance drives desire. A registered design
              gives you the exclusive right to that appearance — and a swift remedy
              against imitators who copy your look.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-line pt-8">
              <div>
                <p className="display text-4xl text-gold">10+5</p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted">Years of protection</p>
              </div>
              <div>
                <p className="display text-4xl text-gold">Locarno</p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted">Classification system</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section dark>
        <SectionLabel light>The Process</SectionLabel>
        <SplitHeading className="display mt-6 max-w-3xl text-[clamp(2rem,4.5vw,3.8rem)] text-cream">
          Four steps to a protected design.
        </SplitHeading>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[4px] border border-cream/10 bg-cream/10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.h}>
              <div className="h-full bg-navy p-8">
                <span className="font-serif text-5xl text-cream/15">0{i + 1}</span>
                <h3 className="mt-6 font-serif text-2xl text-cream">{s.h}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/60">{s.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-paper">
        <SectionLabel>In Practice</SectionLabel>
        <SplitHeading className="display mt-6 max-w-3xl text-[clamp(2rem,4.5vw,3.8rem)] text-navy">
          From sketch to shelf.
        </SplitHeading>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {["/media/trademark-classes-india.jpeg", "/media/Global_filing_strategy_document.jpeg", "/media/word-mark-vs-logo-trademark.jpeg"].map((src, i) => (
            <Reveal key={src} delay={i * 0.08}>
              <MediaFrame src={src} alt="Design in practice" sizes="33vw" className="aspect-[3/4] w-full" />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-cream">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Questions</SectionLabel>
            <SplitHeading className="display mt-6 text-[clamp(2rem,4vw,3.5rem)] text-navy">
              Design, decoded.
            </SplitHeading>
          </div>
          <Accordion items={faqs} />
        </div>
      </Section>

      <ConsultationCTA />
    </>
  );
}
