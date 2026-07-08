"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionLabel, Reveal } from "@/components/ui/reveal";
import { VideoFrame } from "@/components/ui/media";
import { Section } from "@/components/layout/section";
import { journey } from "@/lib/content";
import { media } from "@/lib/media";

export function TrademarkJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section dark id="journey">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <SectionLabel light>Brand Protection Journey</SectionLabel>
          <h2 className="display mt-6 text-[clamp(2.2rem,4.5vw,4rem)] text-cream">
            From idea to registered right.
          </h2>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-cream/60">
            Every registration follows a defined path. We guide you through each
            stage with clarity — no jargon, no surprises.
          </p>
          <div className="mt-10 overflow-hidden rounded-[4px]">
            <VideoFrame src={media.video.heritage} className="aspect-[16/10] w-full" />
          </div>
        </div>

        <div ref={ref} className="relative">
          <div className="absolute left-[19px] top-2 h-full w-px bg-cream/15">
            <motion.div style={{ height: progress }} className="w-px bg-gold" />
          </div>

          <div className="space-y-12">
            {journey.map((step) => (
              <Reveal key={step.step} className="relative pl-16">
                <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 bg-navy font-serif text-sm text-gold">
                  {step.step}
                </span>
                <h3 className="font-serif text-3xl text-cream">{step.title}</h3>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-cream/60">
                  {step.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
