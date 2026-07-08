"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel, SplitHeading, Reveal } from "@/components/ui/reveal";
import { MediaFrame } from "@/components/ui/media";
import { Section } from "@/components/layout/section";
import { practiceAreas } from "@/lib/site";
import { industries as siteIndustries } from "@/lib/content";
import { media } from "@/lib/media";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  const list = [
    {
      num: "01",
      name: "Healthcare",
      desc: "Protecting life-saving therapeutics, clinical trial data, medical devices, and diagnostics for health innovators.",
      services: ["Patent Filing", "Design Protection", "Trade Secrets"],
      image: "https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      num: "02",
      name: "Technology",
      desc: "Guarding software algorithms, hardware architecture, neural networks, and digital brand identities in global markets.",
      services: ["Copyright Registration", "Software Licensing", "Trademark Prosecution"],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      num: "03",
      name: "Fashion",
      desc: "Defending proprietary fabric configurations, signature design cuts, luxury retail identities, and apparel trademarks.",
      services: ["Design Registry", "Anti-Counterfeiting", "Madrid Protocol"],
      image: "https://images.pexels.com/photos/3755700/pexels-photo-3755700.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      num: "04",
      name: "Manufacturing",
      desc: "Registering utility designs, mechanical configurations, material structures, and supply-chain patent claims.",
      services: ["Utility Models", "Patent Prosecution", "Enforcement"],
      image: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      num: "05",
      name: "Automobile",
      desc: "Securing trademark protection for vehicle components, electric power assemblies, clay designs, and safety innovations.",
      services: ["Design Patents", "Portfolio Audits", "Brand Protection"],
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      num: "06",
      name: "Food & Beverage",
      desc: "Defending signature consumer recipes, distinctive beverage labels, custom bottle shapes, and retail franchise rights.",
      services: ["Trade Dress", "Logo Protection", "Franchise Contracts"],
      image: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      num: "07",
      name: "Education",
      desc: "Protecting course curricula, academic publications, proprietary digital learning platforms, and university symbols.",
      services: ["Copyright Filing", "Content Syndication", "Logos"],
      image: "https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      num: "08",
      name: "Startups",
      desc: "Drafting pre-launch IP protection models, trade secret architectures, and seed-to-scale international portfolios.",
      services: ["IP Strategy", "Trademark Search", "NDA Enforcement"],
      image: "https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const sticky = stickyRef.current;
    if (!container || !sticky) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.min(
            Math.floor(progress * list.length),
            list.length - 1
          );
          setActiveIndex(index);
        },
      });
    }, container);

    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-paper paper-grain select-none pointer-events-auto"
      style={{ height: isDesktop ? `${list.length * 100}vh` : "auto" }}
    >
      <div
        ref={stickyRef}
        className={cn(
          "w-full flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 z-20 overflow-hidden",
          isDesktop ? "h-screen sticky top-0" : "h-auto relative py-16"
        )}
      >
        {/* Subtle background blueprint/stamp overlay (under 2% opacity) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.015] border m-12 border-navy" />

        {/* Content alignment box */}
        <div className="w-full max-w-[1440px] z-10 relative">
          
          {/* Header Row - Keeps spacing tight */}
          <div className="mb-10 lg:mb-12 border-b border-line/35 pb-5">
            <span className="text-[10px] tracking-[0.25em] font-sans uppercase text-gold font-semibold">
              Industries We Protect
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-2 text-navy tracking-tight">
              Trusted Across Industries.
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-muted/80 max-w-2xl leading-relaxed">
              For more than five decades, Sharma & Sharma has helped businesses across diverse industries protect their brands, innovations, and intellectual property with precision, experience, and long-term strategic guidance.
            </p>
          </div>

          {/* Desktop Pinned Split Gallery View */}
          {isDesktop ? (
            <div className="grid grid-cols-12 gap-16 items-center h-[55vh]">
              {/* Left Column - Narratives */}
              <div className="col-span-5 flex flex-col justify-center items-start h-full pr-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full space-y-5"
                  >
                    <span className="font-mono text-xs tracking-widest text-gold block">
                      CHAPTER {list[activeIndex].num} // {list[activeIndex].name.toUpperCase()}
                    </span>

                    <h3 className="font-serif text-4xl text-navy tracking-tight font-medium">
                      {list[activeIndex].name}.
                    </h3>

                    <p className="text-sm leading-relaxed text-muted/95 font-sans">
                      {list[activeIndex].desc}
                    </p>

                    <div className="border-t border-b border-line/45 py-3 w-full">
                      <span className="text-[9px] uppercase tracking-widest text-navy/50 block mb-2 font-sans font-semibold">
                        Protected Assets
                      </span>
                      <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-gold/90 font-serif font-medium">
                        {list[activeIndex].services.map((srv, idx) => (
                          <span key={idx} className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-gold/75" />
                            {srv}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/services"
                      className="group flex items-center gap-1.5 text-[11px] font-sans tracking-[0.2em] uppercase text-navy hover:text-gold transition-colors pt-2"
                    >
                      Explore Industry
                      <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Column - Massive borderless photo */}
              <div className="col-span-7 h-full w-full relative overflow-hidden bg-line/10 rounded-[2px] shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.97, filter: "blur(2px)" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={list[activeIndex].image}
                      alt={list[activeIndex].name}
                      fill
                      sizes="55vw"
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-[1200ms]"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-tr from-navy/15 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          ) : (
            /* Dedicated Mobile/Tablet stack layout */
            <div className="space-y-12 w-full mt-4">
              {list.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-5 border-b border-line/35 pb-8 last:border-none last:pb-0"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-line/10 rounded-[2px] shadow-md">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-serif text-2xl text-navy font-semibold">
                        {item.name}
                      </h3>
                      <span className="font-mono text-xs text-gold/80">
                        {item.num}
                      </span>
                    </div>

                    <p className="text-[13px] leading-relaxed text-muted">
                      {item.desc}
                    </p>

                    <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-gold font-serif py-1">
                      {item.services.map((srv, idx) => (
                        <span key={idx} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-gold/75" />
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
