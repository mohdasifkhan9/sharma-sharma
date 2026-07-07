"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function LegacyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll inside the section for timeline highlighting
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const timelineEvents = [
    { year: "1972", title: "The Foundation", desc: "Established in Chandni Chowk, offering dedicated intellectual property counsel." },
    { year: "1985", title: "National Growth", desc: "Expanding representational reach to intellectual property registries across India." },
    { year: "2000", title: "Digital Horizon", desc: "Pioneering digital IP searches, data audits, and portfolio filings for emerging tech." },
    { year: "2015", title: "Global Expansion", desc: "Forging international associate networks for seamless global filing operations." },
    { year: "Today", title: "Leading Institution", desc: "Safeguarding thousands of brands for generations with modern expertise." }
  ];

  // Map scroll progress to active years
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((v) => {
      const segment = 1 / timelineEvents.length;
      const index = Math.min(
        Math.floor(v / segment),
        timelineEvents.length - 1
      );
      setActiveIndex(index >= 0 ? index : 0);
    });
  }, [scrollYProgress]);

  const stats = [
    { value: "50+", label: "Years of Trust" },
    { value: "Thousands", label: "Brands Protected" },
    { value: "Global", label: "IP Filings & Strategy" },
    { value: "Trusted", label: "Across Major Industries" }
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-cream paper-grain overflow-hidden py-24 md:py-32 lg:py-40 z-10 select-none border-b border-line/40"
    >
      {/* Structural Architectural Grid */}
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0 px-8 max-w-[1520px] mx-auto opacity-20">
        <div className="grid h-full grid-cols-4 md:grid-cols-12 gap-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-l border-line h-full last:border-r" />
          ))}
        </div>
      </div>

      {/* Subtle Blueprint Drawing in Background (Visual Detail) */}
      <div aria-hidden className="absolute top-10 right-10 w-96 h-96 opacity-[0.03] pointer-events-none z-0 border border-navy/20 rounded-full flex items-center justify-center">
        <div className="w-[80%] h-[80%] border border-dashed border-navy/20 rounded-full" />
        <div className="w-[50%] h-[50%] border border-navy/20 rounded-full" />
        <div className="w-px h-full bg-navy/20 absolute rotate-45" />
        <div className="w-px h-full bg-navy/20 absolute -rotate-45" />
      </div>

      <div className="max-w-[1460px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <span className="text-[10px] font-sans tracking-[0.25em] text-gold uppercase block mb-3">Our Legacy</span>
          <h2 className="font-serif text-[clamp(2.5rem,6vw,4.8rem)] leading-[1.05] text-navy max-w-3xl">
            A Half-Century<br />of Protecting Ideas.
          </h2>
          <div className="w-16 h-[1.5px] bg-gold mt-6" />
        </div>

        {/* Desktop Layout Split (60% Editorial Visual, 40% Story) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* LEFT COLUMN: Editorial Visual Collage (60% width) */}
          <div className="lg:col-span-7 flex flex-col justify-start relative">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden border border-line bg-navy/5 shadow-2xl">
              {/* Primary Cinematic Legal Image */}
              <Image
                src="https://images.pexels.com/photos/931887/pexels-photo-931887.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200"
                alt="Archival Legal Library Documents"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover w-full h-full grayscale opacity-80"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/35 to-transparent mix-blend-multiply" />
            </div>

            {/* Layered Archival Element 1: Vintage Trademark Certificate */}
            <motion.div
              initial={{ y: 20, rotate: -2, opacity: 0 }}
              whileInView={{ y: 0, rotate: -4, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="absolute -bottom-10 -left-4 md:left-8 w-44 md:w-56 aspect-[3/4] bg-cream p-4 border border-line shadow-2xl hidden md:flex flex-col justify-between"
            >
              <div className="border border-navy/10 p-2 h-full flex flex-col justify-between bg-cream/50 paper-grain">
                <div className="text-center space-y-1">
                  <span className="block text-[6px] tracking-[0.2em] uppercase font-sans text-muted">Registry of Trademarks</span>
                  <span className="block text-[9px] font-serif font-bold text-navy">CERTIFICATE</span>
                </div>
                <div className="my-auto border-t border-b border-dashed border-navy/10 py-3 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border border-navy/20 flex items-center justify-center text-[7px] font-serif text-muted">
                    SEAL
                  </div>
                  <span className="block text-[6px] text-muted/80 mt-2 font-sans">No. 294819 • Est. 1972</span>
                </div>
                <div className="flex justify-between items-end border-t border-navy/10 pt-2">
                  <span className="text-[5px] text-muted uppercase">SHARMA & SHARMA</span>
                  <span className="text-[6px] font-serif italic text-gold">Official Copy</span>
                </div>
              </div>
            </motion.div>

            {/* Layered Archival Element 2: Signature Overlay Card */}
            <motion.div
              initial={{ y: 30, rotate: 2, opacity: 0 }}
              whileInView={{ y: 0, rotate: 3, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="absolute top-1/2 -right-6 w-40 md:w-48 aspect-[3/2] bg-cream p-3 border border-line shadow-2xl hidden md:flex flex-col justify-between"
            >
              <span className="block text-[6px] tracking-widest uppercase font-sans text-gold">Archival Ledger</span>
              <div className="flex flex-col gap-1 py-1">
                <span className="block text-[10px] font-serif italic text-navy/70 select-none">
                  S. K. Sharma
                </span>
                <div className="w-full h-px bg-gold/50" />
              </div>
              <div className="flex justify-between items-center text-[5px] text-muted font-sans uppercase">
                <span>Registered Counsel</span>
                <span>Delhi, 1972</span>
              </div>
            </motion.div>

            {/* Layered Archival Element 3: Blueprint Details */}
            <div aria-hidden className="absolute -top-6 left-12 w-28 h-28 hidden md:block opacity-20 border border-dashed border-gold rounded-full" />
          </div>

          {/* RIGHT COLUMN: Editorial Story & Progress Timeline (40% width) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-8">
              {/* Story Copy Block (Max 80 Words) */}
              <p className="font-serif text-lg md:text-xl text-navy/85 leading-relaxed">
                Our journey began in Delhi decades ago, built on handcrafted legal advocacy and absolute trust. 
                Over fifty years, we have transitioned from a single desk to an institution protecting India&apos;s 
                most iconic trademarks and designs. We preserve craftsmanship, defend creators, and secure IP portfolios 
                globally with multi-generational experience.
              </p>

              {/* Animated Timeline */}
              <div className="relative pl-6 md:pl-8 border-l border-line/60 py-2 space-y-6">
                
                {/* Scroll Indicator Accent bar */}
                <div className="absolute left-0 top-0 h-full w-px overflow-hidden">
                  <motion.div
                    style={{
                      height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
                      backgroundColor: "var(--gold, #C5A880)"
                    }}
                    className="w-px"
                  />
                </div>

                {timelineEvents.map((event, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <div key={event.year} className="relative transition-all duration-500">
                      {/* Active State Node Dot */}
                      <span
                        className={cn(
                          "absolute -left-[27px] md:-left-[35px] top-1.5 w-2 h-2 rounded-full border border-gold bg-cream transition-all duration-500",
                          isActive ? "bg-gold scale-125 shadow-[0_0_8px_#C5A880]" : "opacity-40"
                        )}
                      />
                      
                      {/* Content */}
                      <div className={cn("transition-all duration-500", isActive ? "translate-x-1" : "opacity-30")}>
                        <span className="font-sans text-xs tracking-wider text-gold font-bold block">{event.year}</span>
                        <h4 className="font-serif text-lg text-navy mt-1">{event.title}</h4>
                        <p className="font-sans text-xs text-muted/80 leading-relaxed mt-1">{event.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* FLOATING STATS SECTION (Gently Floating Cards below collage) */}
        <div className="mt-20 lg:mt-32 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ y: 20 + i * 5, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.1
              }}
              animate={{
                y: [0, -6, 0],
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: i * 0.4
                }
              }}
              className="bg-cream/40 border border-line p-6 md:p-8 flex flex-col justify-between aspect-[1.1/1] hover:border-gold transition-colors duration-500 shadow-sm"
            >
              <span className="font-serif text-3xl md:text-4xl text-gold font-medium leading-none block mb-4">
                {stat.value}
              </span>
              <div>
                <div className="w-6 h-[1px] bg-navy/20 mb-2" />
                <p className="font-sans text-[10px] uppercase tracking-widest text-navy/70 leading-normal">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

// Remove empty stats section so we preserve the single modular story flow cleanly
export function Stats() {
  return null;
}
