"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel, SplitHeading, Reveal } from "@/components/ui/reveal";
import { MediaFrame } from "@/components/ui/media";
import { Section } from "@/components/layout/section";
import { practiceAreas } from "@/lib/site";
import { trademarkTypes, industries } from "@/lib/content";
import { media } from "@/lib/media";

const areaImages = [
  media.packaging[0],
  media.heritage[0],
  media.design[0],
  media.global.map,
  media.research[0],
  media.meeting[0],
];

export function PracticeAreas() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <Section id="practice" className="bg-paper">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <SectionLabel>Practice Areas</SectionLabel>
          <SplitHeading className="display mt-6 text-[clamp(2.2rem,5vw,4.5rem)] text-navy">
            Full-spectrum IP counsel.
          </SplitHeading>
        </div>
        <Reveal>
          <Link href="/services" className="link-underline text-sm text-navy">
            View all services
          </Link>
        </Reveal>
      </div>

      <div className="relative mt-14 border-t border-line">
        {practiceAreas.map((area, i) => (
          <Link
            key={area.slug}
            href={area.href}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-6 border-b border-line py-8 transition-colors md:gap-10 md:py-10"
            data-cursor="Open"
          >
            <span className="overline text-gold">{area.index}</span>
            <div>
              <h3 className="font-serif text-3xl text-navy transition-transform duration-500 group-hover:translate-x-3 md:text-5xl">
                {area.title}
              </h3>
              <p className="mt-2 max-w-md text-sm text-muted opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:max-w-lg">
                {area.blurb}
              </p>
            </div>
            <ArrowUpRight className="h-6 w-6 text-navy transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />

            <div className="pointer-events-none absolute right-24 top-1/2 hidden aspect-[4/5] w-52 -translate-y-1/2 overflow-hidden rounded-[4px] lg:block">
              <AnimatePresence>
                {hover === i && (
                  <motion.div
                    initial={{ opacity: 0, scale: 1.1, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative h-full w-full"
                  >
                    <Image src={areaImages[i]} alt="" fill sizes="220px" className="object-cover" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

export function TrademarkTypes() {
  return (
    <Section className="bg-cream">
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
        <div>
          <SectionLabel>Types of Trademark</SectionLabel>
          <SplitHeading className="display mt-6 text-[clamp(2.2rem,5vw,4.5rem)] text-navy">
            Every kind of distinctiveness.
          </SplitHeading>
        </div>
        <Reveal>
          <p className="max-w-md text-[15px] leading-relaxed text-muted lg:pb-3">
            A trademark can be far more than a name. We help you identify — and
            register — every distinctive asset your brand owns.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {trademarkTypes.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.05}>
            <div className="group h-full rounded-[4px] border border-line bg-paper p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-[0_30px_60px_-30px_rgba(22,33,58,0.25)]">
              <div className="flex items-start justify-between">
                <span className="font-serif text-5xl text-line transition-colors duration-500 group-hover:text-gold">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-8 font-serif text-2xl text-navy">{t.name}</h3>
              <p className="mt-1 text-sm italic text-gold">{t.example}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{t.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Industries() {
  return (
    <Section className="bg-paper">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <SectionLabel>Industries</SectionLabel>
          <SplitHeading className="display mt-6 text-[clamp(2.2rem,5vw,4.5rem)] text-navy">
            Trusted across sectors.
          </SplitHeading>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
        {industries.map((ind, i) => (
          <Reveal key={ind.name} delay={i * 0.04}>
            <div className="group relative aspect-[3/4] overflow-hidden rounded-[4px]">
              <MediaFrame
                src={ind.image}
                alt={ind.name}
                sizes="(max-width:768px) 50vw, 25vw"
                className="h-full w-full"
                rounded={false}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
              <div className="pointer-events-none absolute bottom-0 left-0 p-5">
                <span className="overline text-cream/60">0{i + 1}</span>
                <h3 className="font-serif text-2xl text-cream">{ind.name}</h3>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
