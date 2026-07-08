"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionLabel, SplitHeading, Reveal } from "@/components/ui/reveal";
import { VideoFrame } from "@/components/ui/media";
import { media } from "@/lib/media";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ConsultationCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-paper via-paper/95 to-navy/10 px-6 py-20 lg:py-24 text-navy select-none pointer-events-auto border-b border-line/30">
      
      {/* Background cinematic luxury office video (<12% opacity, blurred) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.08] blur-[8px]">
        <VideoFrame src={media.video.office} overlay={false} className="h-full w-full object-cover scale-105 animate-[zoom_60s_infinite]" />
      </div>

      {/* Blueprint gridlines & texture details */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 opacity-[0.015]">
        <div className="grid h-full grid-cols-12 gap-8 px-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-l border-navy h-full" />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1400px] z-10 grid gap-12 lg:grid-cols-12 items-center min-h-[380px] lg:min-h-[440px]">
        
        {/* LEFT COLUMN: Editorial Typography & Signature Details (60% space) */}
        <div className="lg:col-span-7 flex flex-col justify-center items-start pr-0 lg:pr-8">
          
          <span className="text-[10px] tracking-[0.3em] font-sans uppercase text-gold font-bold mb-4 block">
            BEGIN YOUR PROTECTION
          </span>

          <h2 className="font-serif text-[clamp(2.4rem,5vw,4.2rem)] text-navy leading-[1.08] tracking-tight mb-6">
            Protect What <br />
            Makes You <br />
            <span className="italic text-gold font-normal">Unmistakable.</span>
          </h2>

          <p className="text-[14px] md:text-[15px] leading-relaxed text-muted max-w-md font-sans font-light mb-8">
            Speak with a senior IP counsel. We will assess your brand, map the risks and design a filing strategy built to endure across major global markets.
          </p>

          {/* Premium signature details line */}
          <div className="flex flex-wrap items-center gap-6 border-t border-line/50 pt-6 w-full text-[9px] font-mono text-gold uppercase tracking-wider">
            <span>REGISTRATION NO. DL-1972/EST</span>
            <span className="w-1.5 h-1.5 rounded-full bg-navy/35" />
            <span>LOC: 28.6139° N, 77.2090° E</span>
            <span className="w-1.5 h-1.5 rounded-full bg-navy/35" />
            <span>IP LEDGER SECURED</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Floating Consultation Glass Panel (40% space) */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end items-center relative">
          
          {/* Ivory Glass Panel with slow breathing animation */}
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full max-w-[400px] bg-cream/70 backdrop-blur-md border border-gold/30 rounded-[28px] p-8 shadow-[0_20px_50px_-20px_rgba(22,33,58,0.12)] relative z-10"
          >
            {/* Header of panel */}
            <div className="flex justify-between items-center border-b border-line/55 pb-4 mb-6">
              <span className="overline text-[8px] text-muted font-sans font-semibold">DIRECT COUNSEL</span>
              <span className="text-[9px] font-mono text-gold">SECURE REGISTER</span>
            </div>

            {/* Content contact block */}
            <div className="space-y-4 text-xs font-sans text-navy mb-8">
              <div className="flex items-center gap-3">
                <span className="text-gold text-sm font-serif">✦</span>
                <div>
                  <span className="block text-[9px] text-muted uppercase tracking-widest font-semibold">EMAIL</span>
                  <a href={`mailto:${site.email}`} className="link-underline font-medium hover:text-gold transition-colors block mt-0.5">
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-gold text-sm font-serif">✦</span>
                <div>
                  <span className="block text-[9px] text-muted uppercase tracking-widest font-semibold">TELEPHONE</span>
                  <a href={`tel:${site.phones[0]}`} className="font-medium hover:text-gold transition-colors block mt-0.5">
                    {site.phones[0]}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-gold text-sm font-serif">✦</span>
                <div>
                  <span className="block text-[9px] text-muted uppercase tracking-widest font-semibold">HEADQUARTERS</span>
                  <span className="font-medium text-navy/80 block mt-0.5">
                    {site.address.city}, {site.address.country}
                  </span>
                </div>
              </div>
            </div>

            {/* Action buttons stack */}
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="group w-full bg-navy hover:bg-navy-soft text-cream px-6 py-4 text-[10px] font-sans tracking-[0.25em] uppercase flex items-center justify-center gap-2 border border-navy transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              
              <Link
                href="/services"
                className="group w-full bg-transparent hover:bg-gold hover:text-navy text-navy px-6 py-4 text-[10px] font-sans tracking-[0.25em] uppercase flex items-center justify-center gap-2 border border-navy/20 hover:border-gold transition-all duration-300"
              >
                <span>Protect Brand</span>
              </Link>
            </div>

          </motion.div>

        </div>

      </div>

      {/* Natural giant watermark fade transition into footer */}
      <div aria-hidden className="absolute bottom-[-10px] left-0 right-0 z-0 pointer-events-none select-none overflow-hidden h-24">
        <p className="font-serif whitespace-nowrap text-[12vw] leading-none text-navy/[0.03] uppercase tracking-wider text-center">
          SHARMA & SHARMA
        </p>
      </div>

      <style jsx global>{`
        @keyframes zoom {
          0% { transform: scale(1.02); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1.02); }
        }
      `}</style>
    </section>
  );
}
