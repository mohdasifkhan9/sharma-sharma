"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { SectionLabel, SplitHeading, Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

export function TrustSection() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const pillars = [
    {
      num: "1972",
      title: "Legacy Since",
      subtitle: "A heritage of protecting brands for generations.",
      detail: "Formed in the heart of Delhi, our practice has defended foundational rights for over half a century through major economic transformations.",
    },
    {
      num: "50+",
      title: "Years of Experience",
      subtitle: "Decades of intellectual property expertise.",
      detail: "Deep expertise across patent, trademark, and copyright laws, managing complex international registry disputes.",
    },
    {
      num: "IP Lifecycle",
      title: "Complete Advisory",
      subtitle: "Trademark • Copyright • Design • Global • Monitoring",
      detail: "Offering unified counsel from initial search clearance to litigation, international filings, and active marketplace monitoring.",
    },
    {
      num: "Thousands",
      title: "Brands Protected",
      subtitle: "Helping businesses secure valuable intellectual property.",
      detail: "Securing assets for market-leading FMCG conglomerates, startup disrupters, and heritage retail houses.",
    },
    {
      num: "Global",
      title: "International Reach",
      subtitle: "Supporting businesses with global filing strategies.",
      detail: "Direct management of filings across borders through the Madrid System and a globally verified network of associate firms.",
    },
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 30;
    const y = (e.clientY - rect.top - rect.height / 2) / 30;
    setMousePos({ x, y });
  };

  return (
    <Section id="why-choose-us" className="bg-cream relative overflow-hidden paper-grain py-20 lg:py-32">
      {/* Background blueprint details (under 2% opacity) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02] border m-8 border-navy/40" />
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.015] flex items-center justify-center">
        <svg className="w-[80vw] h-[80vh] text-navy" viewBox="0 0 100 100" fill="none" stroke="currentColor">
          <circle cx="50" cy="50" r="45" strokeWidth="0.2" />
          <circle cx="50" cy="50" r="30" strokeWidth="0.2" strokeDasharray="1 1" />
          <path d="M50 5 L50 95 M5 50 L95 50" strokeWidth="0.1" />
        </svg>
      </div>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start z-10 relative"
      >
        {/* LEFT PANEL: Editorial Intro */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col gap-6">
          <div>
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="font-serif text-4xl lg:text-5xl mt-4 text-navy tracking-tight leading-[1.1]">
              Why Brands Trust <br className="hidden lg:block" />Sharma & Sharma.
            </h2>
          </div>
          
          <p className="text-[14px] sm:text-[15px] leading-relaxed text-muted max-w-md font-sans">
            For generations, innovators, entrepreneurs and established businesses have relied on our experience to protect the identities, ideas and intellectual property that define their success.
          </p>

          {/* Vertical trust timeline elements */}
          <div className="border-t border-line/45 mt-8 pt-8 flex flex-col gap-6">
            <div className="flex gap-4">
              <span className="font-serif text-gold font-bold text-sm tracking-widest uppercase">Est. 1972</span>
              <p className="text-xs text-muted/80 leading-relaxed font-sans max-w-[280px]">
                Founded with a vision to deliver premium, precision-driven intellectual property counsel.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="font-serif text-gold font-bold text-sm tracking-widest uppercase">Secured</span>
              <p className="text-xs text-muted/80 leading-relaxed font-sans max-w-[280px]">
                Providing proactive protection that scale alongside our clients' cross-border growth.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Interactive Differentiators */}
        <div className="lg:col-span-7 flex flex-col gap-8 w-full">
          {pillars.map((pillar, idx) => {
            const isHovered = hoverIndex === idx;
            return (
              <motion.div
                key={pillar.title}
                onMouseEnter={() => setHoverIndex(idx)}
                onMouseLeave={() => setHoverIndex(null)}
                style={isHovered ? {
                  x: mousePos.x * 0.4,
                  y: mousePos.y * 0.4
                } : {}}
                className={cn(
                  "w-full bg-paper border border-line p-8 transition-all duration-500 rounded-[2px] relative cursor-default flex flex-col justify-between overflow-hidden shadow-[0_4px_20px_rgba(22,33,58,0.01)]",
                  isHovered ? "border-gold shadow-[0_30px_60px_-25px_rgba(22,33,58,0.08)] bg-paper/98" : ""
                )}
              >
                {/* Subtle internal gold design indicator */}
                <div
                  className={cn(
                    "absolute left-0 top-0 bottom-0 w-[3px] bg-gold scale-y-0 transition-transform duration-500 origin-top",
                    isHovered && "scale-y-100"
                  )}
                />

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-line/20 pb-4 gap-2">
                  <span className="font-serif text-2xl sm:text-3xl text-gold font-bold tracking-tight">
                    {pillar.num}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-navy uppercase tracking-wider font-semibold">
                    {pillar.title}
                  </h3>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-sans font-medium text-navy/80">
                    {pillar.subtitle}
                  </p>
                  
                  {/* Expand details on hover */}
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={isHovered ? { height: "auto", opacity: 1, marginTop: "12px" } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xs sm:text-[13px] leading-relaxed text-muted/95 font-sans"
                  >
                    {pillar.detail}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
