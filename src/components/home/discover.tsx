"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionLabel, SplitHeading, Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/layout/section";
import { Counter } from "@/components/ui/interactive";
import { stories } from "@/lib/content";
import { articles } from "@/data/insights";
import { cn } from "@/lib/utils";
import { MediaFrame } from "@/components/ui/media";
import { Globe } from "@/components/ui/globe";

export function GlobalProtection() {
  const [selectedDest, setSelectedDest] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  const destinations = [
    {
      id: "us",
      name: "United States",
      services: ["USPTO Applications", "Intent-to-Use Strategies", "Office Action Responses", "Portfolio Maintenance"],
    },
    {
      id: "uk",
      name: "United Kingdom",
      services: ["UKIPO Filings", "Post-Brexit Protection", "Enforcement & Oppositions"],
    },
    {
      id: "eu",
      name: "European Union",
      services: ["EUIPO Registrations", "Madrid Protocol Advisory", "Portfolio Synchronization"],
    },
    {
      id: "canada",
      name: "Canada",
      services: ["CIPO Filings", "Global Trade Advisory", "Border Enforcement"],
    },
    {
      id: "australia",
      name: "Australia",
      services: ["IP Australia Filings", "Madrid Pathway Security", "Local Representative Counsel"],
    },
    {
      id: "japan",
      name: "Japan",
      services: ["JPO Applications", "Bilingual Support Filings", "Strategic Advisory"],
    },
    {
      id: "singapore",
      name: "Singapore",
      services: ["IPOS Registrations", "ASEAN Regional Protection", "IP Portfolio Coordination"],
    },
    {
      id: "korea",
      name: "South Korea",
      services: ["KIPO Registrations", "Patent & Trademark Synergy", "Local Representation"],
    },
    {
      id: "uae",
      name: "United Arab Emirates",
      services: ["GCC Filings", "Customs Recordation", "Brand Enforcement Advisory"],
    },
    {
      id: "saudi",
      name: "Saudi Arabia",
      services: ["SAIP Filings", "MENA Trade Security", "Portfolio Protection"],
    },
    {
      id: "germany",
      name: "Germany",
      services: ["DPMA Registrations", "EU Court Enforcement", "Local Advisory"],
    },
    {
      id: "france",
      name: "France",
      services: ["INPI Applications", "Luxury Brand Enforcement", "Anti-Counterfeiting Action"],
    },
    {
      id: "switzerland",
      name: "Switzerland",
      services: ["IPI Registrations", "Madrid Protocol Hub Coordination", "Asset Protection"],
    },
    {
      id: "netherlands",
      name: "Netherlands",
      services: ["BOIP Applications", "Benelux Market Protection", "European Logistics Enforcement"],
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

  return (
    <Section className="relative overflow-hidden bg-cream paper-grain pt-20 pb-20 select-none pointer-events-auto">
      {/* Blueprint background grid lines (<2% opacity) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.015] border m-8 border-navy/40" />

      <div className="grid gap-14 lg:grid-cols-12 items-center z-10 relative">
        
        {/* LEFT PANEL: 42% space */}
        <div className="lg:col-span-5 flex flex-col justify-center items-start">
          <span className="text-[10px] tracking-[0.25em] font-sans uppercase text-gold font-semibold">
            GLOBAL PROTECTION
          </span>
          
          <SplitHeading className="display mt-6 text-[clamp(2.2rem,5vw,4.5rem)] text-navy leading-[1.1]">
            Local Roots. Worldwide Reach.
          </SplitHeading>

          <p className="mt-6 text-[14px] sm:text-[15px] leading-relaxed text-muted max-w-md">
            From our heritage in India to international filing strategies across major jurisdictions, we help businesses protect trademarks, copyrights, designs and intellectual property wherever innovation grows.
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

        {/* RIGHT PANEL: 58% space (Interactive COBE Globe) */}
        <div className="lg:col-span-7 w-full flex flex-col items-center justify-center relative">
          
          {/* Floating Globe container directly on Warm Ivory background */}
          <div className="w-full aspect-[16/10] relative flex flex-col items-center justify-center p-4">
            
            {/* The COBE WebGL Globe component */}
            <div className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[540px] aspect-square flex items-center justify-center z-10 -mt-20 lg:-mt-24">
              <Globe className="w-full h-full" />
            </div>

            {/* Custom Interactive Tooltip Sheet (Ivory Museum style) */}
            <div className="absolute bottom-4 left-4 right-4 bg-cream/95 backdrop-blur-md border border-gold/25 p-4 shadow-lg transition-all duration-300 select-none z-20">
              {/* Country Selection Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3 overflow-y-auto max-h-12 scrollbar-none pointer-events-auto">
                {destinations.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setSelectedDest(selectedDest === d.id ? null : d.id)}
                    className={cn(
                      "text-[8px] sm:text-[9px] tracking-wider uppercase px-2 py-0.5 border transition-all duration-300 font-sans cursor-pointer rounded-[2px]",
                      selectedDest === d.id
                        ? "bg-gold border-gold text-cream font-bold"
                        : "bg-transparent border-navy/15 text-navy/70 hover:border-gold hover:text-gold"
                    )}
                  >
                    {d.name}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {selectedDest ? (
                  <motion.div
                    key={selectedDest}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className="text-[8px] tracking-widest text-gold font-sans uppercase font-bold block mb-1">
                      International Filing Strategy
                    </span>
                    <h4 className="font-serif text-base text-navy font-medium">
                      {destinations.find((d) => d.id === selectedDest)?.name}
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-muted font-sans tracking-wide">
                      {destinations.find((d) => d.id === selectedDest)?.services.map((srv, index) => (
                        <span key={index} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
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
                    <span className="text-[8px] tracking-widest text-gold font-sans uppercase font-bold block mb-1">
                      Global Filing Network
                    </span>
                    <h4 className="font-serif text-xs text-navy/85 leading-relaxed">
                      Tap any destination above to view local brand protection and IP registration offerings across major global jurisdictions.
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
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      ref: "CS / 024",
      quote: "“Sharma & Sharma understood that we were not simply filing a trademark. We were protecting decades of brand equity.”",
      client: "ARJUN MEHRA",
      designation: "FOUNDER",
      company: "MEHRA TEXTILES",
      location: "NEW DELHI — INDIA",
      matter: "BRAND PROTECTION",
      jurisdiction: "INDIA + EUROPEAN UNION",
      relationship: "12 YEARS",
      status: "ACTIVE COUNSEL",
    },
    {
      ref: "CS / 089",
      quote: "“Their strategic counsel on international design registration allowed us to coordinate filings across five continents smoothly.”",
      client: "PRIYA SHARMA",
      designation: "CHIEF EXECUTIVE OFFICER",
      company: "AURA EDITORIAL",
      location: "MUMBAI — INDIA",
      matter: "DESIGN REGISTRATION",
      jurisdiction: "GLOBAL PORTFOLIO",
      relationship: "8 YEARS",
      status: "ACTIVE COUNSEL",
    },
    {
      ref: "CS / 112",
      quote: "“Discretion, speed, and absolute legal authority. They remain our primary counsel for high-stakes trademark litigation.”",
      client: "ROHIT KAPOOR",
      designation: "LEGAL DIRECTOR",
      company: "VINTAGE SPINNERS",
      location: "KOLKATA — INDIA",
      matter: "IP LITIGATION",
      jurisdiction: "SUPREME COURT OF INDIA",
      relationship: "15 YEARS",
      status: "ACTIVE COUNSEL",
    },
  ];

  const current = testimonials[activeIndex];

  return (
    <Section dark className="relative overflow-hidden select-none pointer-events-auto">
      {/* Background blueprint details (<2% opacity) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.015] border m-8 border-cream/40" />

      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <SectionLabel light>CLIENT VOICES</SectionLabel>
          <SplitHeading className="display mt-6 text-[clamp(2.2rem,5vw,4.5rem)] text-cream">
            Trusted in confidence.
          </SplitHeading>
        </div>
        
        {/* Archival statement progress notation */}
        <div className="text-[10px] tracking-[0.25em] font-mono text-gold uppercase select-none">
          STATEMENT {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
        </div>
      </div>

      {/* Asymmetric Editorial Grid */}
      <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-start min-h-[460px] lg:min-h-[400px] relative z-10">
        
        {/* LEFT COLUMN: Testimonial Pull Quote (68% space) */}
        <div className="lg:col-span-8 flex flex-col justify-between h-full min-h-[300px]">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl"
            >
              {/* Main Testimonial Statement */}
              <blockquote className="font-serif text-[clamp(1.5rem,3.5vw,2.5rem)] leading-snug text-cream">
                {current.quote}
              </blockquote>

              {/* Client Metadata block */}
              <div className="mt-8 flex flex-col gap-1.5 border-l-2 border-gold/40 pl-6">
                <span className="text-[11px] tracking-[0.2em] font-sans font-bold text-cream uppercase">
                  {current.client}
                </span>
                <span className="text-[9px] tracking-[0.25em] font-sans text-gold font-medium uppercase">
                  {current.designation} · {current.company}
                </span>
                <span className="text-[9px] tracking-[0.2em] font-sans text-cream/40 uppercase">
                  {current.location}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Testimonial Archival Index Navigation */}
          <div className="mt-10 flex gap-4 border-t border-cream/10 pt-6">
            {testimonials.map((t, idx) => (
              <button
                key={t.ref}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "relative text-sm font-serif font-bold py-2 cursor-pointer transition-all duration-300",
                  idx === activeIndex ? "text-gold scale-110" : "text-cream/40 hover:text-cream"
                )}
                aria-label={`View statement ${idx + 1}`}
              >
                {String(idx + 1).padStart(2, "0")}
                {idx === activeIndex && (
                  <motion.div
                    layoutId="timeline-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

        </div>

        {/* RIGHT COLUMN: Client Record Panel (32% space) */}
        <div className="lg:col-span-4 w-full flex justify-end">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[340px] bg-cream border border-line rounded-[2px] p-6 shadow-md text-navy relative"
            >
              {/* Header stamp */}
              <div className="flex justify-between items-center border-b border-line/45 pb-3 mb-5">
                <span className="overline text-[8px] text-muted font-sans font-semibold">IP REGISTRY FILE</span>
                <span className="text-[9px] font-mono text-gold font-bold">{current.ref}</span>
              </div>

              {/* Ledger fields metadata */}
              <div className="space-y-4 text-xs font-sans">
                <div className="flex flex-col gap-1">
                  <span className="text-[8px] text-muted uppercase tracking-widest font-semibold">Matter</span>
                  <span className="font-serif text-sm font-semibold text-navy">{current.matter}</span>
                </div>
                <div className="border-t border-line/30 my-2" />

                <div className="flex flex-col gap-1">
                  <span className="text-[8px] text-muted uppercase tracking-widest font-semibold">Jurisdiction</span>
                  <span className="font-serif text-sm font-semibold text-navy">{current.jurisdiction}</span>
                </div>
                <div className="border-t border-line/30 my-2" />

                <div className="flex flex-col gap-1">
                  <span className="text-[8px] text-muted uppercase tracking-widest font-semibold">Relationship</span>
                  <span className="font-serif text-sm font-semibold text-navy">{current.relationship}</span>
                </div>
                <div className="border-t border-line/30 my-2" />

                <div className="flex flex-col gap-1">
                  <span className="text-[8px] text-muted uppercase tracking-widest font-semibold">Status</span>
                  <span className="font-serif text-sm font-semibold text-gold">{current.status}</span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>

    </Section>
  );
}

export function KnowledgeCenter() {
  // Show first 4 articles on the homepage
  const displayArticles = articles.slice(0, 4);

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
        {displayArticles.map((a, i) => (
          <Reveal key={a.slug} delay={i * 0.05}>
            <Link href={`/insights/${a.slug}`} className="group block" data-cursor="Read">
              <motion.div className="overflow-hidden rounded-[4px]">
                <MediaFrame
                  src={a.featuredImage}
                  alt={a.title}
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="aspect-[16/10] w-full"
                  rounded={false}
                />
              </motion.div>
              <div className="mt-5 flex items-center gap-4 text-xs uppercase tracking-[0.14em] text-muted">
                <span className="text-gold">{a.category}</span>
                <span>·</span>
                <span>{a.readingTime}</span>
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
