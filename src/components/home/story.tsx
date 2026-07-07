"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionLabel, SplitHeading, Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/interactive";
import { Section } from "@/components/layout/section";
import { timeline, stats } from "@/lib/content";

export function LegacyTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section id="legacy" className="bg-cream">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-end">
        <div>
          <SectionLabel>Our Legacy</SectionLabel>
          <SplitHeading className="display mt-6 text-[clamp(2.4rem,6vw,5rem)] text-navy">
            A half-century of protecting ideas.
          </SplitHeading>
        </div>
        <Reveal>
          <p className="max-w-md text-[15px] leading-relaxed text-muted lg:pb-3">
            From a single desk in Chandni Chowk to a global filing practice, our
            story is written in the marks we have defended and the brands we have
            built alongside.
          </p>
        </Reveal>
      </div>

      <div ref={ref} className="relative mt-20">
        <div className="absolute left-[7px] top-0 h-full w-px bg-line md:left-1/2">
          <motion.div style={{ height }} className="w-px bg-gold" />
        </div>

        <div className="space-y-24 md:space-y-32">
          {timeline.map((item, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={item.year}
                className={`relative grid gap-8 pl-10 md:grid-cols-2 md:gap-16 md:pl-0 ${
                  flip ? "md:[direction:rtl]" : ""
                }`}
              >
                <span className="absolute left-0 top-2 h-4 w-4 -translate-x-[6px] rounded-full border-2 border-gold bg-cream md:left-1/2 md:-translate-x-1/2" />
                <div className={`[direction:ltr] ${flip ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                  <Reveal>
                    <span className="display block text-[clamp(3rem,8vw,7rem)] leading-none text-navy/90">
                      {item.year}
                    </span>
                    <h3 className="mt-4 font-serif text-2xl text-gold">{item.title}</h3>
                    <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted md:ml-auto">
                      {item.text}
                    </p>
                  </Reveal>
                </div>
                <div className="[direction:ltr]">
                  <Reveal delay={0.1}>
                    <div className="group relative aspect-[4/3] overflow-hidden rounded-[4px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width:768px) 100vw, 45vw"
                        className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                      />
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export function Stats() {
  return (
    <Section dark className="overflow-hidden">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
        <div>
          <SectionLabel light>Why Sharma &amp; Sharma</SectionLabel>
          <SplitHeading className="display mt-6 text-[clamp(2.2rem,5vw,4.5rem)] text-cream">
            Measured in trust, not billboards.
          </SplitHeading>
        </div>
        <Reveal>
          <p className="max-w-md text-[15px] leading-relaxed text-cream/60">
            The numbers below are the quiet result of decades spent doing careful,
            unglamorous, decisive work for founders and enterprises alike.
          </p>
        </Reveal>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-cream/10 bg-cream/10 md:grid-cols-5">
        {stats.map((s) => (
          <div key={s.label} className="bg-navy p-8">
            <div className="display text-[clamp(2.5rem,5vw,4rem)] text-gold">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.15em] text-cream/60">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
