"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/lib/site";
import { media } from "@/lib/media";
import { ArrowUpRight } from "lucide-react";

// Magnetic Button Wrapper Component for Luxury feel
function MagneticButton({ children, className, href }: { children: React.ReactNode; className?: string; href: string }) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = buttonRef.current;
    if (!btn) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = btn.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    // Limit range to 15px
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      className={cn("inline-flex items-center justify-center relative overflow-hidden", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.a>
  );
}

// Utility helper
import { cn } from "@/lib/utils";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeStage, setActiveStage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  // Track cursor movement for subtle parallax inside the interactive column
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const w = window.innerWidth;
    const h = window.innerHeight;
    setMousePos({
      x: (clientX - w / 2) / (w / 2),
      y: (clientY - h / 2) / (h / 2),
    });
  };

  const stages = [
    { year: "1972", title: "Inception", desc: "Founded in New Delhi, safeguarding trade identity." },
    { year: "2004", title: "Global Expansion", desc: "Pioneering Madrid Protocol filings in India." },
    { year: "2026", title: "Modern Era", desc: "Leading AI copyright counsel & global portfolio surveillance." },
  ];

  // Rotate through stages every 4 seconds for storytelling
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // GSAP Reveal animations for headline and statements
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".hero-reveal-line",
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1.4, stagger: 0.15, delay: 0.3 }
      )
      .fromTo(
        ".hero-fade-in",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1 },
        "-=0.8"
      )
      .fromTo(
        ".hero-scale-in",
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5 },
        "-=1.2"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-cream pt-[95px] md:pt-[105px] lg:pt-[115px] pb-6 pointer-events-auto"
    >
      {/* Background cinematic video container */}
      <motion.div style={{ y: videoY }} className="absolute inset-0 z-0 pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover w-full h-[120%] grayscale opacity-[0.32] transition-all duration-[2000ms]"
          src={media.hero.video}
        />
        {/* Luxury editorial overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream/5 via-cream/50 to-cream" />
        <div className="paper-grain absolute inset-0 mix-blend-overlay opacity-30" />
      </motion.div>

      {/* Subtle geometric structural gridlines */}
      <div aria-hidden className="pointer-events-none absolute inset-0 mx-auto max-w-[1520px] px-8 z-0">
        <div className="grid h-full grid-cols-4 md:grid-cols-12 gap-8 opacity-25">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-l border-line h-full last:border-r" />
          ))}
        </div>
      </div>

      {/* Hero content grid */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="w-[92vw] max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-grow z-10 py-10"
      >
        {/* LEFT COLUMN: Editorial Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center h-full pr-0 lg:pr-8">
          <div className="overflow-hidden mb-5">
            <span className="hero-fade-in block overline text-gold text-[10px] tracking-[0.3em]">
              Sharma & Sharma Attorneys
            </span>
          </div>

          <h1 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] text-navy leading-[1.05] tracking-tight mb-8">
            <span className="block overflow-hidden py-1">
              <span className="hero-reveal-line block">Defending Innovation.</span>
            </span>
            <span className="block overflow-hidden py-1">
              <span className="hero-reveal-line block italic text-gold font-normal">Safeguarding Heritage.</span>
            </span>
            <span className="block overflow-hidden py-1">
              <span className="hero-reveal-line block">Securing Tomorrow.</span>
            </span>
          </h1>

          <p className="hero-fade-in text-[15px] md:text-[17px] text-muted leading-relaxed max-w-lg mb-10 font-sans font-light">
            We are one of India&apos;s established intellectual property law firms. Bounded by legacy and precision, we guard the designs, trademarks, and copyrights that shape the global market.
          </p>

          {/* Premium CTA row */}
          <div className="hero-fade-in flex flex-wrap gap-5 items-center mb-16">
            <MagneticButton
              href="/contact"
              className="bg-navy hover:bg-navy-soft text-cream px-8 py-4.5 text-[11px] font-sans tracking-[0.25em] uppercase border border-navy/20 hover:border-navy transition-colors duration-300"
            >
              Book Consultation <ArrowUpRight className="ml-2 w-3.5 h-3.5" />
            </MagneticButton>

            <MagneticButton
              href="/trademark"
              className="bg-transparent hover:bg-navy/5 text-navy px-8 py-4.5 text-[11px] font-sans tracking-[0.25em] uppercase border border-navy/35 hover:border-navy transition-colors duration-300"
            >
              Protect Brand
            </MagneticButton>
          </div>

          {/* Trust indicators row */}
          <div className="hero-fade-in grid grid-cols-3 gap-6 max-w-md pt-8 border-t border-line/60">
            <div>
              <span className="block font-serif text-[24px] text-navy leading-none">1972</span>
              <span className="block text-[9px] text-muted uppercase tracking-widest mt-1.5 font-sans">ESTABLISHED</span>
            </div>
            <div>
              <span className="block font-serif text-[24px] text-navy leading-none">50+ Yrs</span>
              <span className="block text-[9px] text-muted uppercase tracking-widest mt-1.5 font-sans">IP ADVOCACY</span>
            </div>
            <div>
              <span className="block font-serif text-[24px] text-navy leading-none">Thousands</span>
              <span className="block text-[9px] text-muted uppercase tracking-widest mt-1.5 font-sans">BRANDS SECURED</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Luxury Composition */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center relative min-h-[480px]">
          
          {/* 1. Animated IP Seal (Parallax mouse follow) */}
          <motion.div
            animate={{
              x: mousePos.x * 25,
              y: mousePos.y * 25,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="hero-scale-in absolute top-[10%] left-[5%] xl:left-[15%] w-36 h-36 border border-gold/30 rounded-full flex items-center justify-center pointer-events-none select-none z-10"
          >
            <div className="absolute inset-1 border border-line rounded-full animate-[spin_40s_linear_infinite]" />
            <svg viewBox="0 0 100 100" className="w-24 h-24 text-gold/60 fill-current animate-[spin_25s_linear_infinite]">
              <path id="circlePath" fill="none" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
              <text fontSize="7.8" className="font-serif tracking-[0.16em]">
                <textPath href="#circlePath">
                  SHARMA & SHARMA ATTORNEY AT LAW • SECURING IP •
                </textPath>
              </text>
            </svg>
            <div className="absolute font-serif text-[11px] text-navy font-bold">IP</div>
          </motion.div>

          {/* 2. Floating Statistic Card (Opposite Parallax mouse follow) */}
          <motion.div
            animate={{
              x: mousePos.x * -35,
              y: mousePos.y * -35,
            }}
            transition={{ type: "spring", stiffness: 90, damping: 22 }}
            className="hero-scale-in absolute bottom-[15%] left-[0%] xl:left-[10%] bg-cream/95 backdrop-blur-md border border-line p-5 max-w-[170px] shadow-sm z-20 pointer-events-none"
          >
            <span className="block font-serif text-[28px] text-navy leading-none">99.4%</span>
            <span className="block text-[8px] text-gold uppercase tracking-[0.18em] mt-2 font-sans font-bold">SUCCESS RATE</span>
            <p className="text-[10px] text-muted leading-normal mt-1 font-light font-sans">In administrative oppositions & litigation appeal registers.</p>
          </motion.div>

          {/* 3. Main Composition Block (Timeline and Architectural Grid) */}
          <motion.div
            animate={{
              x: mousePos.x * 12,
              y: mousePos.y * 12,
            }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="hero-scale-in bg-cream border border-line p-8 w-full max-w-[380px] shadow-[0_15px_40px_-20px_rgba(22,33,58,0.06)] relative z-10"
          >
            <div className="flex justify-between items-center border-b border-line/60 pb-4 mb-6">
              <span className="overline text-[8px] text-muted">Heritage Ledger</span>
              <span className="text-[10px] font-mono text-gold">REG: 1972/DL</span>
            </div>

            {/* Structured Timeline stages with Framer Motion slide-fade */}
            <div className="relative min-h-[140px]">
              <AnimatePresence mode="wait">
                {stages.map((stage, idx) => {
                  if (idx !== activeStage) return null;
                  return (
                    <motion.div
                      key={stage.year}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0"
                    >
                      <span className="text-3xl font-serif text-gold font-normal italic block">{stage.year}</span>
                      <h4 className="font-serif text-[16px] text-navy mt-1">{stage.title}</h4>
                      <p className="text-xs text-muted leading-relaxed mt-2 font-sans font-light">
                        {stage.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Custom SVG grid alignment drawing */}
            <div className="mt-8 border-t border-line/60 pt-6">
              <svg className="w-full h-12 text-navy/10 fill-none" viewBox="0 0 300 48">
                <line x1="0" y1="24" x2="300" y2="24" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
                <circle cx="150" cy="24" r="18" stroke="currentColor" strokeWidth="0.75" />
                <path d="M 125,24 L 175,24 M 150,0 L 150,48" stroke="currentColor" strokeWidth="0.5" />
                <rect x="135" y="9" width="30" height="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" />
              </svg>
              <div className="flex justify-between items-center text-[8px] text-muted/60 font-mono mt-1">
                <span>AXIS-X: GRID REGISTERED</span>
                <span>METRIC-SCALE: 1:50</span>
              </div>
            </div>

            {/* Timeline selector nodes */}
            <div className="flex gap-2.5 mt-5">
              {stages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStage(i)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-500",
                    i === activeStage ? "bg-gold w-5" : "bg-line hover:bg-gold/40"
                  )}
                  aria-label={`Show Timeline stage ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
