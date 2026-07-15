"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { SectionLabel, SplitHeading, Reveal } from "@/components/ui/reveal";
import { MediaFrame } from "@/components/ui/media";
import { ConsultationCTA } from "@/components/sections/cta";
import { articles } from "@/data/insights";
import { cn } from "@/lib/utils";

export default function InsightsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Article 01 is the Featured Article
  const featured = articles[0];
  // Remaining articles
  const latestEntries = articles.slice(1);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <header className="px-5 pb-10 pt-36 md:px-10 md:pb-12 md:pt-48 bg-cream relative overflow-hidden">
        {/* Subtle grid elements */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0 opacity-[0.015] border m-8 border-navy/40" />

        <div className="mx-auto max-w-[1400px]">
          <span className="text-[10px] tracking-[0.3em] font-sans uppercase text-gold font-bold mb-4 block">
            THE IP JOURNAL
          </span>
          <SplitHeading
            as="h1"
            className="display mt-6 max-w-4xl text-[clamp(2.6rem,7vw,6rem)] text-navy leading-[1.1] tracking-tight"
          >
            Insight, generously shared.
          </SplitHeading>
        </div>
      </header>

      <Section className="!pt-4 bg-cream">
        {/* Featured Article - Large Asymmetric Editorial Layout */}
        <Reveal>
          <Link
            href={`/insights/${featured.slug}`}
            className="group grid gap-8 lg:grid-cols-12 items-center border-b border-line/45 pb-16 cursor-pointer"
            data-cursor="Read"
          >
            {/* Left side details (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.15em] text-gold font-sans font-bold">
                <span>Featured Guide</span>
                <span>·</span>
                <span>{featured.readingTime}</span>
              </div>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-navy transition-colors group-hover:text-gold tracking-tight leading-snug">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-md text-sm sm:text-[15px] leading-relaxed text-muted font-sans font-light">
                {featured.excerpt}
              </p>
              <span className="link-underline mt-6 inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-navy font-bold">
                <span>Read the Journal Entry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Right side featured image (7 cols) */}
            <div className="lg:col-span-7 relative w-full aspect-[16/10] overflow-hidden rounded-[2px] border border-line/45">
              <Image
                src={featured.featuredImage}
                alt={featured.featuredImageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          </Link>
        </Reveal>

        {/* Latest Journal Entries Index List Row Layout */}
        <div className="mt-20">
          <span className="text-[10px] tracking-[0.25em] font-sans uppercase text-gold font-bold block mb-10">
            LATEST FROM THE JOURNAL
          </span>

          <div
            className="border-t border-line/45 relative select-none"
            onMouseMove={handleMouseMove}
          >
            {latestEntries.map((a, i) => (
              <Link
                key={a.slug}
                href={`/insights/${a.slug}`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 border-b border-line/45 py-8 transition-colors cursor-pointer relative"
              >
                {/* Index number */}
                <span className="text-gold font-mono text-xs sm:text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Info and title */}
                <div className="pl-4 sm:pl-8">
                  <span className="block text-[8px] tracking-[0.2em] font-sans uppercase text-gold font-bold mb-1">
                    {a.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-navy transition-colors group-hover:text-gold tracking-tight leading-snug">
                    {a.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-muted font-sans font-light max-w-xl">
                    {a.excerpt}
                  </p>
                </div>

                {/* Right metadata / arrow */}
                <div className="flex items-center gap-4 text-right">
                  <span className="text-[10px] tracking-wider uppercase font-mono text-muted hidden sm:inline-block">
                    {a.readingTime}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-navy transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}

            {/* Hover Image Preview (Cursor-tracking layout) */}
            <AnimatePresence>
              {hoveredIndex !== null && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="fixed pointer-events-none z-50 overflow-hidden w-64 aspect-[16/10] border border-line bg-cream shadow-2xl p-1.5 rounded-[2px]"
                  style={{
                    left: mousePos.x + 20,
                    top: mousePos.y - 120,
                  }}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-[1px]">
                    <Image
                      src={latestEntries[hoveredIndex].featuredImage}
                      alt=""
                      fill
                      sizes="250px"
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </Section>

      <ConsultationCTA />
    </>
  );
}
