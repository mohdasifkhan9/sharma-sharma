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
import { Article } from "@/data/insights";
import { cn } from "@/lib/utils";

export function InsightsClient({ articles }: { articles: Article[] }) {
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
      <header className="px-5 pb-16 pt-36 md:px-10 md:pb-24 md:pt-48 border-b border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Perspectives & Analysis</SectionLabel>
          <SplitHeading
            as="h1"
            className="display mt-6 max-w-4xl text-[clamp(2.6rem,7vw,6.5rem)] text-navy"
          >
            Insights on Intellectual Property jurisprudence.
          </SplitHeading>

          <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted font-light">
            Thought leadership, statutory commentary, and practical legal guidance from our senior partners on trademarks, copyright, design, and IP enforcement in India.
          </p>
        </div>
      </header>

      {/* FEATURED INSIGHT BANNER */}
      {featured && (
        <Section className="bg-cream">
          <div className="mx-auto max-w-[1400px]">
            <SectionLabel>Featured Article</SectionLabel>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-paper p-8 md:p-12 border border-line/70 rounded-[4px]">
              <div className="lg:col-span-7">
                <MediaFrame
                  src={featured.featuredImage}
                  alt={featured.featuredImageAlt}
                  className="aspect-[16/9] w-full"
                  priority
                />
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-wider text-gold mb-3">
                    <span>{featured.category}</span>
                    <span>•</span>
                    <span>{featured.readingTime}</span>
                  </div>

                  <h2 className="font-serif text-3xl md:text-4xl text-navy leading-tight mb-4">
                    <Link
                      href={`/insights/${featured.slug}`}
                      className="hover:text-gold transition-colors duration-300"
                    >
                      {featured.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-muted font-light leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-line/40 flex items-center justify-between">
                  <span className="text-xs text-navy font-medium">{featured.author}</span>
                  <Link
                    href={`/insights/${featured.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-gold font-bold hover:text-navy transition-colors"
                  >
                    <span>Read Analysis</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* ARTICLES LIST WITH FLOATING HOVER PREVIEW */}
      <Section className="bg-paper border-t border-line/60">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Archive & Recent Publications</SectionLabel>
          <h2 className="font-serif text-3xl md:text-4xl text-navy mt-4 mb-12">All Insights & Legal Guides</h2>

          <div className="relative divide-y divide-line/60 border-y border-line/60" onMouseMove={handleMouseMove}>
            {latestEntries.map((item, idx) => (
              <div
                key={item.slug}
                className="group relative py-8 md:py-10 transition-colors duration-300 hover:bg-cream/40"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-2 text-xs font-mono text-gold uppercase tracking-wider">
                    {item.category}
                  </div>

                  <div className="md:col-span-7">
                    <h3 className="font-serif text-2xl md:text-3xl text-navy group-hover:text-gold transition-colors duration-300">
                      <Link href={`/insights/${item.slug}`}>
                        {item.title}
                      </Link>
                    </h3>
                    <p className="text-xs md:text-sm text-muted font-light leading-relaxed mt-2 max-w-2xl">
                      {item.excerpt}
                    </p>
                  </div>

                  <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-4">
                    <span className="text-xs text-muted font-mono">{item.readingTime}</span>
                    <Link
                      href={`/insights/${item.slug}`}
                      className="p-3 rounded-full border border-line group-hover:border-gold group-hover:bg-gold group-hover:text-cream transition-all duration-300"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Floating Image Preview on Cursor Hover */}
            <AnimatePresence>
              {hoveredIndex !== null && latestEntries[hoveredIndex] && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: mousePos.x + 20,
                    y: mousePos.y - 120,
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.5 }}
                  className="fixed top-0 left-0 w-64 h-44 rounded-[4px] overflow-hidden shadow-2xl pointer-events-none z-50 border border-gold/40 hidden lg:block"
                >
                  <Image
                    src={latestEntries[hoveredIndex].featuredImage}
                    alt={latestEntries[hoveredIndex].featuredImageAlt}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
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
