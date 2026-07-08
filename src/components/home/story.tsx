"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function LegacyTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(true);

  const milestones = [
    {
      year: "1972",
      title: "The Beginning",
      description: "Late Shri Raghubar Dayal Sharma establishes the foundation of an intellectual property practice built on integrity and craftsmanship.",
      image: "/media/1972.jpeg",
      stats: { value: "1972", label: "Est. Old Delhi" },
      floating: [
        { text: "No. 01842 / Trademark", pos: "top-[-30px] left-[-40px]", rotate: -8, delay: 0.1 },
        { text: "Handwritten Entry", pos: "bottom-[-20px] right-[-30px]", rotate: 6, delay: 0.2 },
      ]
    },
    {
      year: "1985",
      title: "Expansion Era",
      description: "Representing domestic textile pioneers and emerging manufacturing houses as India's brand economy gains momentum.",
      image: "/media/1985.jpeg",
      stats: { value: "50+", label: "Years of Trust" },
      floating: [
        { text: "Official Registry Seal", pos: "top-[10px] right-[-60px]", rotate: 12, delay: 0.3 },
        { text: "Vintage Stamp Block", pos: "bottom-[-40px] left-[-20px]", rotate: -15, delay: 0.15 },
      ]
    },
    {
      year: "2001",
      title: "Modernization",
      description: "Securing global registration pathways and transitioning into modern trademark management systems for international scaling.",
      image: "/media/2001.jpeg",
      stats: { value: "Thousands+", label: "Brands Protected" },
      floating: [
        { text: "Madrid Protocol Filing", pos: "top-[-40px] left-[20px]", rotate: 5, delay: 0.25 },
        { text: "Fountain Pen Drafting", pos: "bottom-[20px] right-[-50px]", rotate: -6, delay: 0.1 },
      ]
    },
    {
      year: "Today",
      title: "Global Protection",
      description: "Securing patents, trademarks, and industrial designs across dozens of jurisdictions with third-generation counsel representation.",
      image: "/media/today.jpeg",
      stats: { value: "Global", label: "IP Protection" },
      floating: [
        { text: "Embassy Attestation", pos: "top-[-20px] right-[-30px]", rotate: -10, delay: 0.2 },
        { text: "Digital IP Ledger", pos: "bottom-[-30px] left-[-50px]", rotate: 8, delay: 0.35 },
      ]
    }
  ];

  // Track responsive layout dynamically to prevent layout clipping
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mouse move effect for floating parallax elements
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDesktop) return;
    const { clientX, clientY } = e;
    const x = (clientX - window.innerWidth / 2) / 35;
    const y = (clientY - window.innerHeight / 2) / 35;
    setMousePos({ x, y });
  };

  useEffect(() => {
    if (!isDesktop) return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const sticky = stickyRef.current;
    if (!section || !sticky) return;

    const ctx = gsap.context(() => {
      // Pin Section while scrolling only on desktop
      const pinTrigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=300%",
        pin: sticky,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.min(
            Math.floor(progress * milestones.length),
            milestones.length - 1
          );
          setActiveIndex(index);

          // Animate the timeline progress line
          if (progressLineRef.current) {
            gsap.to(progressLineRef.current, {
              height: `${progress * 100}%`,
              duration: 0.1,
              ease: "none"
            });
          }
        }
      });
    }, section);

    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative w-full bg-cream paper-grain select-none pointer-events-auto",
        isDesktop ? "overflow-hidden" : "overflow-visible"
      )}
      style={{ height: isDesktop ? "400vh" : "auto" }}
    >
      <div
        ref={stickyRef}
        className={cn(
          "w-full flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 z-20",
          isDesktop ? "h-screen sticky top-0 overflow-hidden" : "h-auto relative py-12 md:py-16 overflow-visible"
        )}
      >
        {/* Subtle museum backdrop watermark elements */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] flex justify-center items-center">
          <span className="font-serif text-[38vw] text-navy font-bold leading-none tracking-tighter">S&S</span>
        </div>
        <div className="absolute inset-0 bg-radial-gradient from-cream/20 via-cream/80 to-cream z-0 pointer-events-none" />

        {/* Outer Split Frame */}
        <div className="w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center z-10">
          
          {/* LEFT PANEL: Image representation */}
          <div className="lg:col-span-7 flex justify-center items-center relative w-full h-[35vh] sm:h-[45vh] lg:h-[65vh]">
            
            {/* Museum Main Editorial Frame */}
            <div className="relative w-4/5 h-[90%] border border-line bg-cream shadow-2xl p-4 transition-transform duration-500 hover:scale-[1.01]">
              <div className="relative w-full h-full overflow-hidden bg-line/10 border border-line/45">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={milestones[activeIndex].image}
                      alt={milestones[activeIndex].title}
                      fill
                      sizes="(max-width: 1024px) 80vw, 45vw"
                      className="object-cover transition-all duration-[1200ms]"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Floating Archive Elements (Parallax only on Desktop) */}
            {isDesktop && milestones[activeIndex].floating.map((item, idx) => (
              <motion.div
                key={`${activeIndex}-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 0.9, y: 0, rotate: item.rotate }}
                exit={{ opacity: 0 }}
                style={{
                  x: mousePos.x * (idx === 0 ? 0.6 : -0.8),
                  y: mousePos.y * (idx === 0 ? -0.5 : 0.7)
                }}
                className={cn(
                  "absolute hidden md:flex flex-col p-3 border border-line/60 bg-cream/95 backdrop-blur-sm shadow-md pointer-events-none select-none z-30 font-mono text-[9px] tracking-wider uppercase text-navy/70",
                  item.pos
                )}
                transition={{ duration: 0.5 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold/75 mb-1.5" />
                {item.text}
              </motion.div>
            ))}

          </div>

          {/* RIGHT PANEL: Story and Timeline details */}
          <div className="lg:col-span-5 flex flex-col justify-center items-start relative pl-0 lg:pl-10 border-l-0 lg:border-l border-line/50 h-auto lg:h-full">
            
            {/* Timeline Progress Bar indicator (Desktop Only) */}
            <div className="absolute left-[-1.5px] top-0 bottom-0 w-[2px] bg-line/40 hidden lg:block">
              <div
                ref={progressLineRef}
                className="w-full bg-gold h-0 origin-top transition-all duration-75"
              />
            </div>

            {/* Content Container */}
            <div className="w-full">
              {/* Top-bordered sub-heading styled exactly like Hero section */}
              <div className="border-t border-line/60 pt-4 w-full mb-4">
                <span className="block overline text-gold text-[10px] tracking-[0.3em] font-sans uppercase font-bold">
                  OUR LEGACY
                </span>
              </div>

              <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.8rem)] text-navy leading-[1.1] tracking-tight mt-3">
                A Half-Century <br className="hidden sm:block" />of Protecting Ideas.
              </h2>

              <p className="mt-4 text-[13px] sm:text-[14px] leading-relaxed text-muted max-w-md">
                From a single desk in Chandni Chowk to a globally trusted intellectual property practice, our legacy has been shaped by protecting brands, innovations, and creative ideas across generations.
              </p>

              {/* Vertical/Horizontal timeline switches */}
              <div className="mt-6 flex flex-row lg:flex-col gap-4 sm:gap-6 lg:gap-4 items-center lg:items-start border-t border-b lg:border-none border-line/40 py-3 lg:py-0 w-full overflow-x-auto scrollbar-none select-none">
                {milestones.map((item, i) => (
                  <button
                    key={item.year}
                    onClick={() => setActiveIndex(i)}
                    className={cn(
                      "flex items-center gap-4 text-left transition-all duration-300 font-sans cursor-pointer focus:outline-none shrink-0",
                      i === activeIndex ? "text-gold translate-x-1 lg:translate-x-2" : "text-navy/55 hover:text-navy"
                    )}
                  >
                    <span className={cn(
                      "text-lg sm:text-xl lg:text-2xl font-serif font-bold transition-transform duration-300",
                      i === activeIndex && "scale-110 text-gold"
                    )}>
                      {item.year}
                    </span>
                    <div className="hidden lg:block">
                      <span className="block text-[11px] tracking-wider uppercase font-semibold">
                        {item.title}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Milestone details card */}
              <div className="mt-6 relative min-h-[110px] lg:min-h-[140px] w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full"
                  >
                    <h4 className="font-serif text-xl sm:text-2xl text-navy font-semibold">
                      {milestones[activeIndex].title}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-muted/95 leading-relaxed max-w-sm">
                      {milestones[activeIndex].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Stats & Founder Quote block */}
              <div className="mt-4 flex gap-6 sm:gap-8 items-center border-t border-line/45 pt-5 w-full">
                <div>
                  <span className="block text-xl sm:text-[22px] font-serif text-gold font-bold leading-none">
                    {milestones[activeIndex].stats.value}
                  </span>
                  <span className="block text-[9px] uppercase tracking-wider text-navy/60 mt-1 font-sans font-semibold">
                    {milestones[activeIndex].stats.label}
                  </span>
                </div>

                <div className="flex-1 pl-4 sm:pl-6 border-l border-line/45">
                  <span className="text-lg sm:text-xl text-gold font-serif leading-none italic block -mb-2">“</span>
                  <p className="text-[11px] sm:text-[12px] text-muted italic font-serif leading-relaxed">
                    Protecting the ideas that shape tomorrow.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

// Stats component left simple and clean for import consistency
export function Stats() {
  return null;
}
