"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionLabel, SplitHeading, Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/layout/section";
import { Counter } from "@/components/ui/interactive";
import { stories, articles } from "@/lib/content";
import { cn } from "@/lib/utils";
import { MediaFrame } from "@/components/ui/media";

export function GlobalProtection() {
  const [activeDest, setActiveDest] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  // SVG Coordinates mapping New Delhi [320, 115] to major jurisdictions
  const destinations = [
    {
      id: "eu",
      name: "European Union",
      x: 235,
      y: 65,
      services: ["Trademark Filing", "Design Registration", "Portfolio Management", "Madrid Protocol Advisory"],
    },
    {
      id: "uk",
      name: "United Kingdom",
      x: 215,
      y: 60,
      services: ["UKIPO Filings", "Post-Brexit Protection", "Enforcement & Oppositions"],
    },
    {
      id: "us",
      name: "United States",
      x: 110,
      y: 75,
      services: ["USPTO Applications", "Intent-to-Use Strategies", "Office Action Responses"],
    },
    {
      id: "canada",
      name: "Canada",
      x: 95,
      y: 70,
      services: ["CIPO Filings", "Global Trade Advisory", "Portfolio Maintenance"],
    },
    {
      id: "australia",
      name: "Australia",
      x: 435,
      y: 205,
      services: ["IP Australia Registrations", "Madrid Pathway Security", "Local Representation"],
    },
    {
      id: "japan",
      name: "Japan",
      x: 415,
      y: 90,
      services: ["JPO Applications", "Bilingual Support Filings", "Strategic Advisory"],
    },
    {
      id: "singapore",
      name: "Singapore",
      x: 355,
      y: 155,
      services: ["IPOS Filings", "ASEAN Regional Protection", "IP Portfolio Coordination"],
    },
    {
      id: "uae",
      name: "United Arab Emirates",
      x: 295,
      y: 115,
      services: ["GCC Filings", "Customs Recordation", "Brand Enforcement Advisory"],
    },
    {
      id: "korea",
      name: "South Korea",
      x: 395,
      y: 95,
      services: ["KIPO Registrations", "Patent & Trademark Synergy", "Litigation Support"],
    },
  ];

  const origin = { x: 320, y: 115 }; // New Delhi, India

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Section className="relative overflow-hidden bg-cream paper-grain pt-20 pb-20 select-none pointer-events-auto">
      {/* Blueprint background grid lines (<2% opacity) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.015] border m-8 border-navy/40" />

      <div className="grid gap-14 lg:grid-cols-12 items-center z-10 relative">
        
        {/* LEFT PANEL: 42% space */}
        <div className="lg:col-span-5 flex flex-col justify-center items-start">
          <SectionLabel>Global Protection</SectionLabel>
          
          <SplitHeading className="display mt-6 text-[clamp(2.2rem,5vw,4.5rem)] text-navy leading-[1.1]">
            Local Roots. Worldwide Reach.
          </SplitHeading>

          <p className="mt-6 text-[14px] sm:text-[15px] leading-relaxed text-muted max-w-md">
            From our heritage in India to international filing strategies across major jurisdictions, we help businesses protect their trademarks, designs, and intellectual property wherever growth takes them.
          </p>

          <Link
            href="/services"
            className="group mt-8 relative overflow-hidden border border-navy/25 hover:border-navy px-6 py-3.5 rounded-none bg-transparent text-navy text-[11px] font-sans tracking-[0.22em] uppercase flex items-center justify-center gap-2"
          >
            <span>Explore International Filing</span>
            <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Proof metrics row */}
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-line/45 pt-8 w-full">
            {[
              { val: 150, suf: "+", desc: "Jurisdictions" },
              { val: 40, suf: "+", desc: "Associate Firms" },
              { val: 24, suf: "h", desc: "Response Time" },
            ].map((metric) => (
              <div key={metric.desc}>
                <div className="display text-3xl text-gold font-bold">
                  <Counter value={metric.val} suffix={metric.suf} />
                </div>
                <p className="mt-2 text-[9px] uppercase tracking-[0.15em] text-muted font-sans font-semibold">
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL: 58% space (Architectural world map showcase) */}
        <div className="lg:col-span-7 w-full flex flex-col items-center justify-center relative">
          
          {/* Deep Navy visual frame box */}
          <div className="w-full aspect-[16/10] bg-navy border border-navy/90 rounded-[4px] relative overflow-hidden p-6 shadow-2xl">
            
            {/* Soft animated background particles */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute top-10 left-10 w-1.5 h-1.5 rounded-full bg-gold animate-ping duration-[3s]" />
              <div className="absolute bottom-16 right-20 w-1 h-1 rounded-full bg-cream animate-ping duration-[4s]" />
              <div className="absolute top-24 right-32 w-1.5 h-1.5 rounded-full bg-gold animate-ping duration-[5s]" />
            </div>

            {/* SVG Interactive Blueprint Network */}
            <svg
              viewBox="0 0 500 250"
              className="w-full h-full"
              fill="none"
              stroke="currentColor"
            >
              {/* Abstract minimalist continent references under map */}
              <g className="text-cream/[0.04]" strokeWidth="0.5">
                {/* Americas */}
                <path d="M 40,50 Q 80,40 120,60 T 140,110 T 110,180" />
                {/* Eurasia & Africa */}
                <path d="M 200,60 Q 280,30 380,45 T 440,80" />
                <path d="M 210,110 Q 250,150 280,210" />
                {/* Australia */}
                <path d="M 410,180 Q 430,220 460,200" />
              </g>

              {/* Gold dynamic routes lines and pulses */}
              <g strokeWidth="0.8">
                {destinations.map((d) => {
                  const isActive = activeDest === d.id;
                  // Curve cubic lines originating from Delhi
                  const controlX = (origin.x + d.x) / 2;
                  const controlY = Math.min(origin.y, d.y) - 30;
                  const pathD = `M ${origin.x},${origin.y} Q ${controlX},${controlY} ${d.x},${d.y}`;

                  return (
                    <g key={d.id} className="transition-all duration-300">
                      {/* Subdued connector */}
                      <path
                        d={pathD}
                        className={cn(
                          "transition-all duration-500",
                          isActive ? "text-gold stroke-[1.5px]" : "text-gold/20"
                        )}
                      />

                      {/* Golden traveling pulse path overlay */}
                      <path
                        d={pathD}
                        className="text-gold opacity-90 stroke-[1.2px]"
                        strokeDasharray="5, 30"
                        style={{
                          animation: "pulse 4s linear infinite",
                        }}
                      />
                    </g>
                  );
                })}
              </g>

              {/* Node Markers */}
              <g>
                {/* Origin: India (New Delhi) */}
                <circle
                  cx={origin.x}
                  cy={origin.y}
                  r="4"
                  className="fill-gold stroke-cream stroke-[1.5px] animate-pulse"
                />
                <circle
                  cx={origin.x}
                  cy={origin.y}
                  r="9"
                  className="stroke-gold/40 stroke-[1px] fill-none animate-ping"
                />

                {/* Destinations */}
                {destinations.map((d) => {
                  const isActive = activeDest === d.id;
                  return (
                    <g
                      key={d.id}
                      className="cursor-pointer pointer-events-auto"
                      onMouseEnter={() => setActiveDest(d.id)}
                      onMouseLeave={() => setActiveDest(null)}
                    >
                      {/* Hover Target buffer circle */}
                      <circle
                        cx={d.x}
                        cy={d.y}
                        r="12"
                        className="fill-transparent"
                      />
                      {/* Real dot marker */}
                      <circle
                        cx={d.x}
                        cy={d.y}
                        r={isActive ? "3.5" : "2"}
                        className={cn(
                          "transition-all duration-300",
                          isActive ? "fill-gold stroke-cream stroke-[1px]" : "fill-cream/70"
                        )}
                      />
                    </g>
                  );
                })}
              </g>

              {/* Custom CSS for SVG stroke animations */}
              <style>{`
                @keyframes pulse {
                  to {
                    stroke-dashoffset: -35;
                  }
                }
              `}</style>
            </svg>

            {/* Custom Interactive Tooltip Sheet */}
            <div className="absolute bottom-4 left-4 right-4 bg-navy-soft/90 backdrop-blur-md border border-cream/10 p-4 transition-all duration-300 select-none pointer-events-none">
              <AnimatePresence mode="wait">
                {activeDest ? (
                  <motion.div
                    key={activeDest}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className="text-[9px] tracking-widest text-gold font-sans uppercase font-bold block mb-1">
                      Jurisdiction Services
                    </span>
                    <h4 className="font-serif text-lg text-cream font-medium">
                      {destinations.find((d) => d.id === activeDest)?.name}
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-cream/70 font-sans tracking-wide">
                      {destinations.find((d) => d.id === activeDest)?.services.map((srv, index) => (
                        <span key={index} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-gold" />
                          {srv}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className="text-[9px] tracking-widest text-gold font-sans uppercase font-bold block mb-1">
                      International Filings
                    </span>
                    <h4 className="font-serif text-sm text-cream/80">
                      Hover nodes to view filing strategies in major jurisdictions (US, EU, UK, Canada, Australia, Japan, etc.)
                    </h4>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </Section>
  );
}

export function SuccessStories() {
  return (
    <Section dark>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <SectionLabel light>Client Success</SectionLabel>
          <SplitHeading className="display mt-6 text-[clamp(2.2rem,5vw,4.5rem)] text-cream">
            Stories worth protecting.
          </SplitHeading>
        </div>
      </div>

      <div className="mt-16 space-y-16 md:space-y-24">
        {stories.map((s, i) => (
          <div
            key={s.title}
            className={`grid items-center gap-8 md:grid-cols-2 md:gap-16 ${
              i % 2 === 1 ? "md:[direction:rtl]" : ""
            }`}
          >
            <div className="[direction:ltr]">
              <MediaFrame
                src={s.image}
                alt={s.client}
                parallax
                sizes="(max-width:768px) 100vw, 50vw"
                className="aspect-[4/3] w-full"
              />
            </div>
            <div className="[direction:ltr]">
              <Reveal>
                <p className="overline text-gold">{s.client}</p>
                <h3 className="mt-4 font-serif text-3xl text-cream md:text-4xl">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-cream/60">
                  {s.text}
                </p>
                <p className="mt-8 inline-flex items-center gap-3 border border-cream/20 px-5 py-2.5 text-sm text-cream">
                  <span className="text-gold">✦</span> {s.result}
                </p>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function KnowledgeCenter() {
  return (
    <Section className="bg-paper">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <SectionLabel>Knowledge Center</SectionLabel>
          <SplitHeading className="display mt-6 text-[clamp(2.2rem,5vw,4.5rem)] text-navy">
            Insight, generously shared.
          </SplitHeading>
        </div>
        <Reveal>
          <Link href="/insights" className="link-underline text-sm text-navy">
            Browse all insights
          </Link>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {articles.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.05}>
            <Link href="/insights" className="group block" data-cursor="Read">
              <motion.div className="overflow-hidden rounded-[4px]">
                <MediaFrame
                  src={a.image}
                  alt={a.title}
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="aspect-[16/10] w-full"
                  rounded={false}
                />
              </motion.div>
              <div className="mt-5 flex items-center gap-4 text-xs uppercase tracking-[0.14em] text-muted">
                <span className="text-gold">{a.category}</span>
                <span>·</span>
                <span>{a.read}</span>
              </div>
              <h3 className="mt-3 flex items-start justify-between gap-4 font-serif text-2xl text-navy md:text-3xl">
                <span className="transition-colors group-hover:text-gold">{a.title}</span>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                {a.excerpt}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
