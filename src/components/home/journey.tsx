"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { SectionLabel } from "@/components/ui/reveal";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

export function TrademarkJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(true);

  // Track responsive screen size
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Track scroll position to update active index dynamically
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isDesktop) return; // Only drive active state by scroll on desktop
    const stepCount = 6;
    const index = Math.min(
      Math.floor(latest * stepCount),
      stepCount - 1
    );
    setActiveIndex(index);
  });

  const progressLineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const journeySteps = [
    {
      step: "01",
      title: "Trademark Search",
      text: "Conduct a comprehensive search to identify potential conflicts and build a strong foundation before filing.",
      image: "https://images.pexels.com/photos/931887/pexels-photo-931887.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      step: "02",
      title: "Application Filing",
      text: "Prepare and submit every application with precision, ensuring complete compliance and accuracy.",
      image: "https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      step: "03",
      title: "Examination",
      text: "Represent and respond to examination reports with strategic legal expertise.",
      image: "https://images.pexels.com/photos/8146200/pexels-photo-8146200.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      step: "04",
      title: "Publication",
      text: "Guide your application through the official publication stage while monitoring potential oppositions.",
      image: "https://images.pexels.com/photos/5453811/pexels-photo-5453811.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      step: "05",
      title: "Registration",
      text: "Secure registration and establish exclusive legal rights for your intellectual property.",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      step: "06",
      title: "Protection & Enforcement",
      text: "Continue protecting your intellectual property through monitoring, renewals, licensing, and enforcement strategies.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  // Subtle background mouse parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDesktop) return;
    const { clientX, clientY } = e;
    const x = (clientX - window.innerWidth / 2) / 60;
    const y = (clientY - window.innerHeight / 2) / 60;
    setMousePos({ x, y });
  };

  return (
    <Section
      dark
      id="journey"
      className="relative overflow-hidden select-none pointer-events-auto"
    >
      <div onMouseMove={handleMouseMove} className="w-full h-full relative">
      {/* Dynamic luxury blueprint background watermarks */}
      <motion.div
        style={{
          x: mousePos.x,
          y: mousePos.y,
        }}
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.02] mix-blend-overlay flex justify-center items-center"
      >
        <div className="w-[120vw] h-[120vh] border border-cream/20 rounded-full flex justify-center items-center">
          <div className="w-[80vw] h-[80vh] border border-cream/15 rounded-full flex justify-center items-center">
            <div className="w-[40vw] h-[40vh] border border-cream/10 rounded-full" />
          </div>
        </div>
      </motion.div>

      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] z-10 relative">
        
        {/* LEFT PANEL: Sticky Brand Description & Cinematic Visual Container */}
        <div className="lg:sticky lg:top-28 lg:h-fit flex flex-col gap-8">
          <div>
            <SectionLabel light>The Trademark Journey</SectionLabel>
            <h2 className="display mt-6 text-[clamp(2.2rem,4.5vw,4rem)] text-cream leading-tight">
              The Journey Behind Every Protected Brand.
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-cream/60 font-sans">
              Every successful brand follows a carefully guided legal journey. From the first availability search to long-term protection, Sharma & Sharma manages every stage with precision, clarity, and decades of intellectual property expertise.
            </p>
          </div>

          {/* Cinematic storytelling panel with image transition reveals */}
          <div className="relative aspect-[16/10] w-full overflow-hidden border border-cream/10 shadow-2xl bg-navy-soft">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.06, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.96, filter: "blur(4px)" }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={journeySteps[activeIndex].image}
                  alt={journeySteps[activeIndex].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-[2000ms]"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent z-10 pointer-events-none" />
          </div>
        </div>

        {/* RIGHT PANEL: Scroll-activated process steps */}
        <div ref={containerRef} className="relative">
          
          {/* Vertical gold progress line (Desktop Only) */}
          <div className="absolute left-[19px] top-2 h-[98%] w-px bg-cream/10 hidden lg:block">
            <motion.div
              style={{ height: progressLineHeight }}
              className="w-px bg-gold origin-top"
            />
          </div>

          <div className="space-y-10 lg:space-y-16">
            {journeySteps.map((step, idx) => {
              const isActive = idx === activeIndex;

              return (
                <div
                  key={step.step}
                  onClick={() => !isDesktop && setActiveIndex(idx)}
                  className={cn(
                    "relative pl-12 lg:pl-16 cursor-pointer lg:cursor-default transition-all duration-500 py-3",
                    isActive ? "opacity-100 scale-[1.01]" : "opacity-35 hover:opacity-60"
                  )}
                >
                  {/* Step index number circles */}
                  <span
                    className={cn(
                      "absolute left-0 top-3 flex h-10 w-10 items-center justify-center rounded-full border font-serif text-sm transition-all duration-500",
                      isActive
                        ? "border-gold bg-gold text-navy shadow-[0_0_15px_rgba(212,175,55,0.25)]"
                        : "border-cream/20 bg-navy text-gold"
                    )}
                  >
                    {step.step}
                  </span>

                  <h3
                    className={cn(
                      "font-serif text-2xl lg:text-3xl transition-colors duration-500",
                      isActive ? "text-cream font-medium" : "text-cream/80"
                    )}
                  >
                    {step.title}
                  </h3>

                  {/* Description reveal block */}
                  <div className="overflow-hidden">
                    <motion.p
                      initial={isDesktop ? { height: 0, opacity: 0 } : false}
                      animate={
                        !isDesktop || isActive
                          ? { height: "auto", opacity: 1, marginTop: "12px" }
                          : { height: 0, opacity: 0, marginTop: "0px" }
                      }
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="max-w-md text-sm sm:text-[15px] leading-relaxed text-cream/65 font-sans"
                    >
                      {step.text}
                    </motion.p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
      </div>
    </Section>
  );
}
