"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function LegacyTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const ledgerContainerRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const ledgerMilestones = [
    {
      year: "1972",
      label: "FOUNDATION",
      archiveId: "LDGR-1972-001",
      title: "The Beginning of Sharma & Sharma",
      description: "Late Shri Raghubar Dayal Sharma establishes the foundation of an intellectual property practice built on absolute integrity. Operating from Chandni Chowk, Delhi, the firm begins documenting and protecting early national patents and trademark filings.",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: [
        { value: "1972", label: "Est. Old Delhi" },
        { value: "01", label: "First Ledger Case" }
      ]
    },
    {
      year: "1985",
      label: "GROWTH",
      archiveId: "LDGR-1985-024",
      title: "National Industrial Expansion",
      description: "The firm represents domestic manufacturers and textile pioneers as India's brand economy expands. Sharma & Sharma becomes synonymous with decisive opposition, enforcement, and trademark portfolio litigation.",
      image: "https://images.pexels.com/photos/5453811/pexels-photo-5453811.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: [
        { value: "50+", label: "Leading Textile Clients" },
        { value: "85%", label: "Market Representation" }
      ]
    },
    {
      year: "2001",
      label: "NATIONAL RECOGNITION",
      archiveId: "LDGR-2001-140",
      title: "The Digital & Madrid Protocol Transition",
      description: "Entering the new millennium, the firm digitizes archival cases and structures early international trademark files, establishing global associate networks across dozens of foreign jurisdictions.",
      image: "https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: [
        { value: "10,000+", label: "Matters Filed" },
        { value: "40+", label: "Associate Countries" }
      ]
    },
    {
      year: "Today",
      label: "GLOBAL IP PRACTICE",
      archiveId: "LDGR-2026-999",
      title: "Third Generation Heritage",
      description: "A half-century of intellectual property leadership. Now providing modern real-time portfolio tracking, global Madrid filings, and courtroom enforcement representing premier consumer and technical enterprises.",
      image: "https://images.pexels.com/photos/8146200/pexels-photo-8146200.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: [
        { value: "Global", label: "Madrid Protection" },
        { value: "1972", label: "Since Foundation" }
      ]
    }
  ];

  // Track viewport breakpoint dynamically
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Parallax tilt mouse follower
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDesktop) return;
    const { clientX, clientY } = e;
    const x = (clientX - window.innerWidth / 2) / 45;
    const y = (clientY - window.innerHeight / 2) / 45;
    setMousePos({ x, y });
  };

  // Scroll Trigger Pin animation for Desktop view
  useEffect(() => {
    if (!isDesktop) return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const sticky = stickyRef.current;
    if (!section || !sticky) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=300%",
        pin: sticky,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.min(
            Math.floor(progress * ledgerMilestones.length),
            ledgerMilestones.length - 1
          );
          setActiveIndex(index);
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
        "relative w-full bg-[#F8F5EF] paper-grain select-none pointer-events-auto",
        isDesktop ? "overflow-hidden" : "overflow-visible"
      )}
      style={{ height: isDesktop ? "400vh" : "auto" }}
    >
      {/* Background Archival blueprint drawings */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 flex justify-center items-center">
        <svg viewBox="0 0 800 800" className="w-[85%] h-[85%] text-navy">
          <circle cx="400" cy="400" r="300" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="5,5" />
          <path d="M 400 50 L 400 750 M 50 400 L 750 400" stroke="currentColor" strokeWidth="1" />
          <rect x="250" y="250" width="300" height="300" stroke="currentColor" strokeWidth="1" fill="none" />
          <text x="415" y="90" fontSize="12" fontFamily="monospace" fill="currentColor">TRADEMARK DEPT. SPEC - 1972</text>
        </svg>
      </div>

      <div
        ref={stickyRef}
        className={cn(
          "w-full flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 z-10",
          isDesktop ? "h-screen sticky top-0 overflow-hidden" : "h-auto relative py-16 md:py-24 overflow-visible"
        )}
      >
        <div className="w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT 48% COLUMN: Editorial archive frame */}
          <div className="lg:col-span-6 flex justify-center items-center relative w-full h-[40vh] sm:h-[50vh] lg:h-[70vh]">
            <div 
              className="relative w-4/5 h-[95%] border border-[#B8B2A8] bg-[#F8F5EF] p-5 shadow-2xl transition-transform duration-700 hover:scale-[1.01]"
              style={{
                transform: isDesktop ? `rotateX(${-mousePos.y * 0.4}deg) rotateY(${mousePos.x * 0.4}deg)` : "none"
              }}
            >
              <div className="relative w-full h-full overflow-hidden border border-[#B8B2A8]/50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.06, filter: "blur(8px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.96, filter: "blur(4px)" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={ledgerMilestones[activeIndex].image}
                      alt={ledgerMilestones[activeIndex].title}
                      fill
                      sizes="(max-width: 1024px) 80vw, 40vw"
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-[1500ms]"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Faint Legal stamp overlay */}
              <div className="absolute bottom-8 right-8 w-16 h-16 rounded-full border border-gold/45 flex items-center justify-center rotate-[-12deg] pointer-events-none opacity-45">
                <span className="font-mono text-[8px] text-gold tracking-tight text-center">S&S CERTIFIED</span>
              </div>
            </div>
          </div>

          {/* RIGHT 52% COLUMN: The Heritage Ledger */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start h-auto lg:h-full">
            
            {/* Header elements */}
            <div className="w-full">
              <span className="text-[10px] tracking-[0.24em] font-sans uppercase text-gold font-semibold block">
                OUR LEGACY
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-3 text-[#16213E] tracking-tight leading-[1.15]">
                A Half-Century of Protecting Ideas.
              </h2>

              <p className="mt-4 text-[14px] leading-relaxed text-[#B8B2A8] max-w-lg font-sans">
                From a single desk in Chandni Chowk to one of India's respected Intellectual Property law firms, our story is written through the brands we have protected, the ideas we have defended, and the trust we have earned across generations.
              </p>
            </div>

            {/* The Archival Ledger list layout */}
            <div ref={ledgerContainerRef} className="mt-8 w-full border-t border-[#B8B2A8]/45">
              {ledgerMilestones.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={item.year}
                    onClick={() => setActiveIndex(idx)}
                    className="w-full flex items-center justify-between py-4 border-b border-[#B8B2A8]/45 text-left focus:outline-none transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center gap-6">
                      <span className={cn(
                        "font-serif text-xl sm:text-2xl font-bold transition-all duration-300",
                        isActive ? "text-gold scale-110" : "text-[#16213E]/50 group-hover:text-[#16213E]"
                      )}>
                        {item.year}
                      </span>
                      <div className="flex flex-col">
                        <span className={cn(
                          "text-[9px] tracking-[0.18em] font-sans font-semibold transition-all duration-300",
                          isActive ? "text-gold" : "text-[#16213E]/40"
                        )}>
                          {item.label}
                        </span>
                        <span className="text-[9px] font-mono text-[#B8B2A8]/65 mt-0.5">
                          {item.archiveId}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      {isActive && (
                        <motion.span
                          layoutId="ledger-arrow"
                          className="text-gold font-sans text-sm"
                        >
                          →
                        </motion.span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Narrative description block */}
            <div className="mt-6 w-full min-h-[110px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full"
                >
                  <h4 className="font-serif text-lg sm:text-xl text-[#16213E] font-semibold">
                    {ledgerMilestones[activeIndex].title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-[#B8B2A8]/90 leading-relaxed max-w-lg">
                    {ledgerMilestones[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Stat Counters & Consultation CTA row */}
            <div className="mt-8 pt-6 border-t border-[#B8B2A8]/45 w-full flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
              
              <div className="flex gap-8 items-center">
                {ledgerMilestones[activeIndex].stats.map((stat, sIdx) => (
                  <div key={sIdx}>
                    <span className="block text-xl font-serif text-gold font-bold leading-none">
                      {stat.value}
                    </span>
                    <span className="block text-[9px] uppercase tracking-wider text-[#16213E]/60 mt-1 font-sans font-semibold">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="group relative px-6 py-3 overflow-hidden border border-gold bg-transparent text-[#16213E] hover:text-cream text-[10px] font-sans tracking-[0.24em] uppercase transition-colors duration-500 rounded-none inline-block"
              >
                <span className="relative z-10">Book Consultation</span>
                <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
              </Link>

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
