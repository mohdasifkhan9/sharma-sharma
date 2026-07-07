import { Button } from "@/components/ui/button";
import { SectionLabel, SplitHeading, Reveal } from "@/components/ui/reveal";
import { VideoFrame } from "@/components/ui/media";
import { media } from "@/lib/media";
import { site } from "@/lib/site";

export function ConsultationCTA() {
  return (
    <section className="relative overflow-hidden bg-navy px-5 py-28 text-cream md:px-10 md:py-40">
      <div className="absolute inset-0 opacity-30">
        <VideoFrame src={media.video.office} overlay={false} className="h-full w-full" />
      </div>
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative mx-auto max-w-[1400px]">
        <SectionLabel light>Begin Your Protection</SectionLabel>
        <div className="mt-8 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <SplitHeading className="display text-[clamp(2.4rem,6vw,5.5rem)] text-cream">
            Protect what makes you unmistakable.
          </SplitHeading>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-[15px] leading-relaxed text-cream/70">
              Speak with a senior IP counsel. We will assess your brand, map the
              risks and design a filing strategy built to endure.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">Book Consultation</Button>
              <Button href="/trademark" variant="outline" className="border-cream/30 text-cream">
                Protect Your Brand
              </Button>
            </div>
            <a
              href={`mailto:${site.email}`}
              className="link-underline mt-6 inline-block text-sm text-cream/60"
            >
              {site.email}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
