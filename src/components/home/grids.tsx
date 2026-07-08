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
import { industries } from "@/lib/content";
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
  const items = [
    {
      num: "01",
      name: "Word Mark",
      example: "Branded typography composition",
      detail: "Protects brand names, letters, numerals, or words in clean, typography-led configurations.",
      visual: (
        <div className="relative aspect-[16/10] w-full overflow-hidden mb-6 bg-line/10 border border-line/45 rounded-[2px] transition-transform duration-500 group-hover:scale-[1.015]">
          <Image
            src="/media/workmark.jpg"
            alt="Word Mark Blueprint Specification"
            fill
            sizes="(max-width: 768px) 100vw, 30vw"
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      ),
    },
    {
      num: "02",
      name: "Logo Mark",
      example: "Minimal embossed logo artwork",
      detail: "Secures unique symbols, graphic crests, dynamic devices, and proprietary visual marks.",
      visual: (
        <div className="relative aspect-[16/10] w-full overflow-hidden mb-6 bg-line/10 border border-line/45 rounded-[2px] transition-transform duration-500 group-hover:scale-[1.015]">
          <Image
            src="/media/logomark.jpg"
            alt="Logo Mark Design Construction Drawing"
            fill
            sizes="(max-width: 768px) 100vw, 30vw"
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      ),
    },
    {
      num: "03",
      name: "Combination Mark",
      example: "Wordmark and symbol lockup",
      detail: "Protects composite brand configurations uniting word identifiers and visual logo assets.",
      visual: (
        <div className="relative aspect-[16/10] w-full overflow-hidden mb-6 bg-line/10 border border-line/45 rounded-[2px] transition-transform duration-500 group-hover:scale-[1.015]">
          <Image
            src="/media/combinationmark.jpg"
            alt="Combination Mark Grid Layout Layout"
            fill
            sizes="(max-width: 768px) 100vw, 30vw"
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      ),
    },
    {
      num: "04",
      name: "Slogan",
      example: "Editorial quote taglines",
      detail: "Guards distinct catchphrases, advertising taglines, and marketing expressions of identity.",
      visual: (
        <div className="relative aspect-[16/10] w-full overflow-hidden mb-6 bg-line/10 border border-line/45 rounded-[2px] transition-transform duration-500 group-hover:scale-[1.015]">
          <Image
            src="/media/sloganmark.jpg"
            alt="Slogan Typographic Sheet Specifications"
            fill
            sizes="(max-width: 768px) 100vw, 30vw"
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      ),
    },
    {
      num: "05",
      name: "Shape Mark",
      example: "Three-dimensional configuration",
      detail: "Secures proprietary packaging shapes, container silhouettes, or 3D product configurations.",
      visual: (
        <div className="relative aspect-[16/10] w-full overflow-hidden mb-6 bg-line/10 border border-line/45 rounded-[2px] transition-transform duration-500 group-hover:scale-[1.015]">
          <Image
            src="/media/shapemark.jpg"
            alt="Shape Mark Perfume Silhouette Blueprints"
            fill
            sizes="(max-width: 768px) 100vw, 30vw"
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      ),
    },
    {
      num: "06",
      name: "Sound Mark",
      example: "Signature acoustic waveforms",
      detail: "Protects distinctive brand melodies, mnemonic sequences, or recognized jingles.",
      visual: (
        <div className="relative aspect-[16/10] w-full overflow-hidden mb-6 bg-line/10 border border-line/45 rounded-[2px] transition-transform duration-500 group-hover:scale-[1.015]">
          <Image
            src="/media/soundmark.jpg"
            alt="Sound Mark Waveform Analysis Charts"
            fill
            sizes="(max-width: 768px) 100vw, 30vw"
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      ),
    },
  ];

  return (
    <Section className="bg-cream relative overflow-hidden paper-grain">
      {/* Background blueprint details (under 3% opacity) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02] border m-8 border-navy/40" />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end z-10 relative">
        <div>
          <SectionLabel>Every Kind of Distinctiveness</SectionLabel>
          <SplitHeading className="display mt-6 text-[clamp(2.2rem,5vw,4.5rem)] text-navy leading-[1.1]">
            Every Kind of Distinctiveness.
          </SplitHeading>
        </div>
        <Reveal>
          <p className="max-w-md text-[14px] sm:text-[15px] leading-relaxed text-muted lg:pb-3">
            A trademark extends far beyond a name or a logo. From words and symbols to packaging, colours, sounds, and distinctive product shapes, every unique brand element can become valuable intellectual property when protected correctly.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3 z-10 relative">
        {items.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.06}>
            <motion.div
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="group h-full rounded-[4px] border border-line bg-paper p-8 transition-all duration-500 hover:border-gold hover:shadow-[0_20px_40px_-20px_rgba(22,33,58,0.12)] flex flex-col justify-between"
            >
              <div>
                {/* Visual vector artwork representation */}
                {t.visual}

                <div className="flex items-baseline justify-between border-b border-line/20 pb-4">
                  <h3 className="font-serif text-2xl text-navy tracking-tight">{t.name}</h3>
                  <span className="font-serif text-3xl text-line transition-colors duration-500 group-hover:text-gold">
                    {t.num}
                  </span>
                </div>
                <p className="mt-3 text-xs uppercase tracking-widest text-gold/90 font-medium font-sans">
                  {t.example}
                </p>
                <p className="mt-4 text-[13px] leading-relaxed text-muted/95">
                  {t.detail}
                </p>
              </div>
            </motion.div>
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
