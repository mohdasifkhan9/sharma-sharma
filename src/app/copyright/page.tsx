import type { Metadata } from "next";
import { BookOpen, Music, Film, Code2, Palette, PenTool } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SectionLabel, SplitHeading, Reveal } from "@/components/ui/reveal";
import { MediaFrame, VideoFrame } from "@/components/ui/media";
import { Accordion } from "@/components/ui/interactive";
import { ConsultationCTA } from "@/components/sections/cta";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "Copyright Registration",
  description:
    "Protect original literary, artistic, musical, dramatic and software works. Copyright registration and enforcement by Sharma & Sharma.",
};

const works = [
  { icon: BookOpen, h: "Literary", t: "Books, articles, code documentation and written works." },
  { icon: Palette, h: "Artistic", t: "Paintings, illustrations, photographs and graphic design." },
  { icon: Music, h: "Musical", t: "Compositions, notations and original scores." },
  { icon: Film, h: "Cinematographic", t: "Films, video and audio-visual productions." },
  { icon: Code2, h: "Software", t: "Source code, applications and databases." },
  { icon: PenTool, h: "Dramatic", t: "Scripts, choreography and stage works." },
];

const faqs = [
  { q: "Is copyright automatic?", a: "Copyright subsists automatically upon creation of an original work. Registration, however, provides crucial evidentiary value and is invaluable in enforcement." },
  { q: "How long does copyright last?", a: "In India, copyright generally lasts for the lifetime of the author plus sixty years, though this varies by work type." },
  { q: "Can software be copyrighted?", a: "Yes. Source and object code are protected as literary works, and we regularly register software for technology clients." },
  { q: "What can't be copyrighted?", a: "Ideas, methods, facts and concepts are not protected — only their original expression. We help you protect the expression and, where relevant, layer other IP rights." },
];

export default function CopyrightPage() {
  return (
    <>
      <PageHero
        label="Copyright Registration"
        title="Original work deserves an original defence."
        intro="From manuscripts to source code, copyright protects the expression of your ideas. We register and enforce it so your creativity remains yours."
        image={media.heritage[0]}
        imageAlt="Handwritten manuscript and books"
      />

      <Section className="bg-paper">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <SectionLabel>What We Protect</SectionLabel>
            <SplitHeading className="display mt-6 text-[clamp(2.2rem,5vw,4.5rem)] text-navy">
              Every form of expression.
            </SplitHeading>
          </div>
          <Reveal>
            <p className="max-w-md text-[15px] leading-relaxed text-muted lg:pb-3">
              Copyright covers a remarkable breadth of creative output. If you made
              it, chances are we can help you protect it.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w) => (
            <Reveal key={w.h}>
              <div className="h-full bg-paper p-8">
                <w.icon className="h-6 w-6 text-gold" strokeWidth={1.4} />
                <h3 className="mt-6 font-serif text-2xl text-navy">{w.h}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{w.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionLabel light>The Process</SectionLabel>
            <SplitHeading className="display mt-6 text-[clamp(2rem,4.5vw,3.8rem)] text-cream">
              From creation to certificate.
            </SplitHeading>
            <ol className="mt-8 space-y-6">
              {["Assessment of the work", "Application & deposit", "Examination window", "Objection response", "Registration & certificate"].map((s, i) => (
                <Reveal key={s} className="flex gap-5">
                  <span className="font-serif text-2xl text-gold">0{i + 1}</span>
                  <span className="border-b border-cream/10 pb-5 text-lg text-cream/80">{s}</span>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal>
            <div className="overflow-hidden rounded-[4px]">
              <VideoFrame src={media.video.heritage} className="aspect-[4/5] w-full" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-cream">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Questions</SectionLabel>
            <SplitHeading className="display mt-6 text-[clamp(2rem,4vw,3.5rem)] text-navy">
              Copyright, clarified.
            </SplitHeading>
            <div className="mt-8">
              <MediaFrame src={media.heritage[3]} alt="Vintage papers" sizes="40vw" className="aspect-[4/3] w-full" />
            </div>
          </div>
          <Accordion items={faqs} />
        </div>
      </Section>

      <ConsultationCTA />
    </>
  );
}
