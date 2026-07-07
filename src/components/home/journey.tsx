"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function TrademarkJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftVisualRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  const [activeStep, setActiveStep] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  const steps = [
    {
      num: "01",
      title: "Trademark Search",
      description: "We conduct a comprehensive clearance search across registries to identify prior conflicts before filing.",
      duration: "1–2 Days",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      cta: "Search Strategy"
    },
    {
      num: "02",
      title: "Application Filing",
      description: "Precise drafting, class classification under the Nice Agreement, and filing with the government registry.",
      duration: "2–3 Days",
      image: "https://images.pexels.com/photos/4559592/pexels-photo-4559592.jpeg?auto=compress&cs=tinysrgb&w=800",
      cta: "Filing Framework"
    },
    {
      num: "03",
      title: "Examination Review",
      description: "Responding to government objections, office actions, and reports with reasoned legal precedents.",
      duration: "1–3 Months",
      image: "https://images.pexels.com/photos/5669614/pexels-photo-5669614.jpeg?auto=compress&cs=tinysrgb&w=800",
      cta: "Objection Strategy"
    },
    {
      num: "04",
      title: "Journal Publication",
      description: "Your mark is advertised in the official Trade Marks Journal for a statutory 4-month public opposition window.",
      duration: "3–4 Months",
      image: "https://images.pexels.com/photos/5185093/pexels-photo-5185093.jpeg?auto=compress&cs=tinysrgb&w=800",
      cta: "Publication Guidelines"
    },
    {
      num: "05",
      title: "Registration Certificate",
      description: "On clearing opposition, the registry issues the formal registration certificate, granting exclusive ownership.",
      duration: "1–2 Weeks",
      image: "https://images.pexels.com/photos/48148/document-agreement-contract-signature-48148.jpeg?auto=compress&cs=tinysrgb&w=800",
      cta: "Certificate Issuance"
    },
    {
      num: "06",
      title: "Protection & Monitoring",
      description: "Continuous surveillance and renewal filings to safeguard your active mark against domestic and international infringers.",
      duration: "Ongoing",
      image: "https://images.pexels.com/photos/7070112/pexels-photo-7070112.jpeg?auto=compress&cs=tinysrgb&w=800",
      cta: "Monitoring Setup"
    }
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
    const leftVisual = leftVisualRef.current;
    if (!container || !leftVisual) return;

    const ctx = gsap.context(() => {
      // Pin Left Visual area during scroll sequence
      ScrollTrigger.create({
        trigger: container,
        start: "top top+=80px",
        end: "bottom bottom",
        pin: leftVisual,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          // Calculate active step
          const index = Math.min(
            Math.floor(progress * steps.length),
            steps.length - 1
          );
          setActiveStep(index);

          // Animate the gold vertical line
          if (progressLineRef.current) {
            gsap.to(progressLineRef.current, {
              height: `${progress * 100}%`,
              duration: 0.1,
              ease: "none"
            });
          }
        }
      });
    }, container);

    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-navy text-cream overflow-hidden z-10 py-20 lg:py-32 pointer-events-auto"
      id="journey"
    >
      {/* Blueprint background watermark pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0 mix-blend-overlay">
        <div className="w-full h-full bg-[radial-gradient(#C8A46A_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16 z-10 relative">
        {/* Section Heading Header */}
        <div className="mb-16 lg:mb-24">
          <span className="text-[10px] tracking-[0.25em] font-sans uppercase text-gold font-semibold">
            Process Architecture
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4 leading-tight tracking-tight text-cream">
            From Vision to Legal Ownership.
          </h2>
          <p className="mt-6 text-sm sm:text-base leading-relaxed text-cream/60 max-w-lg">
            Protecting an idea requires strategic foresight and procedural precision. We coordinate each stage of your trademark journey with transparency.
          </p>
        </div>

        {/* Desktop Split View or Mobile Flow Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN: Cinematic Sticky Image Frame (Desktop Only) */}
          <div className="lg:col-span-5 hidden lg:block h-[60vh] relative" ref={leftVisualRef}>
            <div className="relative w-full h-[50vh] border border-cream/15 p-4 bg-navy shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <div className="relative w-full h-full overflow-hidden bg-cream/5 border border-cream/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 1.08, filter: "blur(8px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.94, filter: "blur(8px)" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={steps[activeStep].image}
                      alt={steps[activeStep].title}
                      fill
                      sizes="35vw"
                      className="object-cover transition-transform duration-[1200ms]"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Scrolling Chapter Nodes (Desktop/Mobile) */}
          <div className="lg:col-span-7 relative pl-0 lg:pl-16">
            
            {/* Elegant vertical progress gold timeline bar (Desktop Only) */}
            <div className="absolute left-[-1.5px] top-4 bottom-4 w-[2px] bg-cream/10 hidden lg:block">
              <div
                ref={progressLineRef}
                className="w-full bg-gold h-0 origin-top"
              />
            </div>

            <div className="space-y-16 lg:space-y-24">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <motion.div
                    key={step.num}
                    initial={!isDesktop ? { opacity: 0, y: 30 } : false}
                    whileInView={!isDesktop ? { opacity: 1, y: 0 } : undefined}
                    viewport={{ once: true, margin: "-100px" }}
                    className={cn(
                      "relative flex flex-col items-start gap-4 transition-all duration-500",
                      isDesktop && (isActive ? "opacity-100 scale-100" : "opacity-40 scale-[0.98]")
                    )}
                  >
                    {/* Animated Number indicator */}
                    <div className="flex items-center gap-4">
                      <span className={cn(
                        "font-serif text-3xl lg:text-4xl transition-all duration-500",
                        isActive ? "text-gold font-bold scale-110" : "text-cream/55"
                      )}>
                        {step.num}
                      </span>
                      <span className="w-1.5 h-[1.5px] bg-gold/50" />
                      <span className="text-[10px] tracking-widest font-sans uppercase text-gold/85">
                        {step.duration}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className={cn(
                      "font-serif text-2xl lg:text-3xl transition-colors duration-500",
                      isActive ? "text-cream" : "text-cream/70"
                    )}>
                      {step.title}
                    </h3>

                    {/* Mobile visual insert (Mobile Only - Renders below header before content) */}
                    {!isDesktop && (
                      <div className="w-full aspect-[16/10] relative border border-cream/15 p-2 bg-navy shadow-lg my-2 select-none pointer-events-none">
                        <div className="relative w-full h-full overflow-hidden">
                          <Image
                            src={step.image}
                            alt={step.title}
                            fill
                            sizes="90vw"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    )}

                    {/* Step Description */}
                    <p className="text-sm leading-relaxed text-cream/60 max-w-lg">
                      {step.description}
                    </p>

                    {/* Meta CTA Action */}
                    <Link
                      href="/contact"
                      className="group flex items-center gap-2.5 text-[11px] tracking-[0.2em] font-sans uppercase text-gold hover:text-cream transition-colors mt-2"
                    >
                      <span>{step.cta}</span>
                      <span className="translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
