"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<"services" | "about" | null>(null);

  // Accordion states for Mobile Menu
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const ribbonRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const logoContainerRef = useRef<HTMLAnchorElement>(null);
  const logoImgRef = useRef<HTMLImageElement>(null);

  // Swipe gesture hooks
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Close menus on page transitions
  useEffect(() => {
    setMobileOpen(false);
    setActivePanel(null);
    setAboutOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Swipe detection to close menu on swipe right
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipeRight = distance < -80; // Swipe from left to right
    if (isSwipeRight) {
      setMobileOpen(false);
    }
  };

  // GSAP ScrollTrigger Morph Animation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ribbon = ribbonRef.current;
    const container = navContainerRef.current;
    const logoContainer = logoContainerRef.current;
    const logoImg = logoImgRef.current;

    if (!ribbon || !container) return;

    const mm = gsap.matchMedia();

    // Desktop Responsive Morph (>=1024px)
    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "+=100",
          scrub: 0.8,
        },
      });

      tl.to(ribbon, {
        height: 0,
        opacity: 0,
        y: -10,
        pointerEvents: "none",
        duration: 0.3,
      }, 0)
      .to(container, {
        borderRadius: "999px",
        paddingTop: "14px", // 14px padding + 54px logo = 82px scrolled height
        paddingBottom: "14px",
        paddingLeft: "40px",
        paddingRight: "40px",
        backgroundColor: "rgba(250, 248, 244, 0.92)",
        backdropFilter: "blur(16px)",
        borderColor: "rgba(232, 226, 216, 0.65)",
        boxShadow: "0 10px 30px -15px rgba(22, 33, 58, 0.08)",
        width: "86vw",
        maxWidth: "1460px",
        y: 14,
        duration: 0.4,
      }, 0);

      if (logoContainer) {
        tl.to(logoContainer, {
          width: "240px",
          duration: 0.4,
        }, 0);
      }

      if (logoImg) {
        tl.to(logoImg, {
          height: "54px", // Morphed height 54px (never below 90% of 58px)
          duration: 0.4,
        }, 0);
      }
    });

    // Mobile/Tablet Responsive Morph (<1024px)
    mm.add("(max-width: 1023px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "+=60",
          scrub: 0.8,
        },
      });

      tl.to(ribbon, {
        height: 0,
        opacity: 0,
        y: -8,
        pointerEvents: "none",
        duration: 0.3,
      }, 0)
      .to(container, {
        borderRadius: "999px",
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingLeft: "24px",
        paddingRight: "24px",
        backgroundColor: "rgba(250, 248, 244, 0.92)",
        backdropFilter: "blur(16px)",
        borderColor: "rgba(232, 226, 216, 0.65)",
        boxShadow: "0 10px 30px -15px rgba(22, 33, 58, 0.08)",
        y: 8,
        duration: 0.4,
      }, 0);
    });

    return () => {
      mm.revert();
    };
  }, []);

  const serviceAccordionItems = [
    { name: "Trademark Registration", href: "/trademark" },
    { name: "Trademark Search", href: "/services" },
    { name: "Trademark Renewal", href: "/services" },
    { name: "Copyright Registration", href: "/copyright" },
    { name: "Design Registration", href: "/design-registration" },
    { name: "International Filing", href: "/services" },
    { name: "Brand Protection", href: "/services" },
    { name: "Licensing", href: "/services" },
    { name: "Monitoring", href: "/services" },
    { name: "IP Portfolio Management", href: "/services" },
  ];

  const aboutAccordionItems = [
    { name: "Our Story", href: "/about" },
    { name: "Core Partners", href: "/about" },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className="fixed inset-x-0 top-0 z-[95] w-full pointer-events-none flex flex-col items-center"
        onMouseLeave={() => setActivePanel(null)}
      >
        {/* Thin Editorial Information Ribbon */}
        <div
          ref={ribbonRef}
          className={cn(
            "w-full bg-navy text-cream/90 py-2.5 text-center overline text-[9px] tracking-[0.25em] font-sans border-b border-line/10 pointer-events-auto overflow-hidden transition-all duration-300",
            mobileOpen && "opacity-0 h-0 py-0 border-none"
          )}
        >
          Since 1972 • New Delhi • Intellectual Property Law
        </div>

        {/* Outer alignment container */}
        <div className="w-full px-4 md:px-8 py-6 pointer-events-none flex justify-center">
          {/* Morphing Inner Container */}
          <div
            ref={navContainerRef}
            className={cn(
              "w-[92vw] max-w-[1520px] bg-cream border border-line px-6 py-4 lg:px-10 flex items-center justify-between transition-all duration-500 shadow-[0_4px_20px_rgba(22,33,58,0.02)] relative pointer-events-auto mx-auto",
              mobileOpen && "bg-transparent border-transparent shadow-none"
            )}
            style={{ minHeight: "82px" }}
          >
            {/* Premium Brand Logo Image */}
            <Link
              ref={logoContainerRef}
              href="/"
              className={cn(
                "flex items-center select-none py-1 pr-6 border-r border-line/25 lg:pr-12 lg:border-line/35 w-[220px] lg:w-[260px] shrink-0 transition-opacity duration-300",
                mobileOpen && "border-transparent"
              )}
            >
              <img
                ref={logoImgRef}
                src="/media/Logo.png"
                alt="Sharma & Sharma Intellectual Property Law"
                className="h-[48px] lg:h-[58px] w-auto object-contain transition-all duration-500"
              />
            </Link>

            {/* Asymmetrical Spacing & Precise Typography Links (Desktop Only) */}
            <div className="hidden lg:flex items-center">
              {/* Group A: Core Brand Identity */}
              <div className="flex items-center gap-[36px] mr-12">
                <button
                  onMouseEnter={() => setActivePanel("about")}
                  className={cn(
                    "relative font-sans text-[12px] tracking-[0.2em] uppercase text-navy/80 hover:text-navy transition-colors duration-300 cursor-pointer py-2 flex items-center gap-1.5",
                    activePanel === "about" && "text-gold"
                  )}
                >
                  About <span className="text-[8px] text-gold/80">▼</span>
                </button>

                <button
                  onMouseEnter={() => setActivePanel("services")}
                  className={cn(
                    "relative font-sans text-[12px] tracking-[0.2em] uppercase text-navy/80 hover:text-navy transition-colors duration-300 cursor-pointer py-2 flex items-center gap-1.5",
                    activePanel === "services" && "text-gold"
                  )}
                >
                  Services <span className="text-[8px] text-gold/80">▼</span>
                </button>
              </div>

              {/* Group B: Premium IP Verticals */}
              <div className="flex items-center gap-[25px] border-l border-line/70 pl-8 mr-10 py-1">
                <Link
                  href="/trademark"
                  className="group relative font-sans text-[11px] tracking-[0.18em] uppercase text-navy/60 hover:text-navy transition-colors duration-300"
                >
                  <span>Trademark</span>
                  <span className="absolute bottom-[-4px] left-0 w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
                <Link
                  href="/copyright"
                  className="group relative font-sans text-[11px] tracking-[0.18em] uppercase text-navy/60 hover:text-navy transition-colors duration-300"
                >
                  <span>Copyright</span>
                  <span className="absolute bottom-[-4px] left-0 w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
                <Link
                  href="/design-registration"
                  className="group relative font-sans text-[11px] tracking-[0.18em] uppercase text-navy/60 hover:text-navy transition-colors duration-300"
                >
                  <span>Design</span>
                  <span className="absolute bottom-[-4px] left-0 w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
              </div>

              {/* Group C: Editorial Insights */}
              <div className="flex items-center gap-[28px]">
                <Link
                  href="/insights"
                  className="group relative font-sans text-[12px] tracking-[0.2em] uppercase text-navy/80 hover:text-navy transition-colors duration-300"
                >
                  <span>Insights</span>
                  <span className="absolute bottom-[-4px] left-0 w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
              </div>
            </div>

            {/* CTA & Mobile trigger wrapper */}
            <div className="flex items-center gap-6">
              {/* Visually Integrated CTA (Desktop Only) */}
              <Link
                href="/contact"
                className="hidden lg:flex group relative overflow-hidden border border-navy/25 hover:border-navy px-6 py-3.5 rounded-none transition-colors duration-500 bg-transparent text-navy text-[11px] font-sans tracking-[0.22em] uppercase items-center justify-center"
              >
                <span className="relative z-10 transition-transform duration-500 group-hover:translate-y-[-140%] inline-block">
                  Consultation
                </span>
                <span className="absolute inset-x-0 bottom-0 top-full bg-navy transition-all duration-500 group-hover:top-0 group-hover:translate-y-0" />
                <span className="absolute inset-0 z-10 flex items-center justify-center translate-y-[140%] group-hover:translate-y-0 transition-transform duration-500 text-cream font-sans tracking-[0.22em] uppercase">
                  Consultation
                </span>
              </Link>

              {/* Premium Luxury Hamburger/Morphing X Trigger (Mobile Only) */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex lg:hidden flex-col justify-center items-center cursor-pointer z-[100] relative w-11 h-11 pointer-events-auto rounded-full transition-colors duration-300"
                aria-label={mobileOpen ? "Close Menu" : "Open Menu"}
              >
                <div className="w-6 h-3.5 relative flex flex-col justify-between items-end">
                  {/* Top Line */}
                  <motion.span
                    animate={mobileOpen ? { rotate: 45, y: 6.5, width: "24px" } : { rotate: 0, y: 0, width: "24px" }}
                    transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
                    className="h-[1.5px] bg-navy block origin-center"
                  />
                  {/* Bottom Line */}
                  <motion.span
                    animate={mobileOpen ? { rotate: -45, y: -6, width: "24px" } : { rotate: 0, y: 0, width: "16px" }}
                    transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
                    className="h-[1.5px] bg-navy block origin-center"
                  />
                </div>
              </button>
            </div>

            {/* Desktop Editorial Mega Panels */}
            <AnimatePresence>
              {activePanel && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-0 w-full bg-cream/98 border-t border-b border-line shadow-[0_20px_50px_rgba(22,33,58,0.1)] overflow-hidden z-[-1] pointer-events-auto"
                >
                  <div className="mx-auto max-w-[1400px] px-12 py-14 grid grid-cols-12 gap-12">
                    {activePanel === "services" ? (
                      <>
                        <div className="col-span-4 flex flex-col justify-between">
                          <div>
                            <span className="overline text-gold text-[9px] tracking-[0.25em]">Practice Areas</span>
                            <h3 className="font-serif text-3xl text-navy mt-4 leading-[1.1] font-medium">
                              Intellectual Property Protection.
                            </h3>
                          </div>
                          <p className="text-[13px] text-muted leading-relaxed mt-6 max-w-[280px]">
                            Defending innovations, securing global trademarks, and enforcing copyrights with multi-generational experience since 1972.
                          </p>
                        </div>

                        <div className="col-span-5 grid grid-cols-2 gap-x-8 border-l border-r border-line/60 px-10">
                          <div>
                            <span className="block text-[10px] font-sans text-muted tracking-[0.2em] uppercase mb-4">Core Filings</span>
                            <ul className="space-y-3">
                              <li>
                                <Link
                                  href="/trademark"
                                  className="group flex items-center justify-between py-1 text-[13px] text-navy/85 hover:text-gold transition-colors duration-300"
                                >
                                  <span>Trademark Registration</span>
                                  <span className="text-[11px] translate-x-[-4px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">→</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/copyright"
                                  className="group flex items-center justify-between py-1 text-[13px] text-navy/85 hover:text-gold transition-colors duration-300"
                                >
                                  <span>Copyright Registration</span>
                                  <span className="text-[11px] translate-x-[-4px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">→</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/design-registration"
                                  className="group flex items-center justify-between py-1 text-[13px] text-navy/85 hover:text-gold transition-colors duration-300"
                                >
                                  <span>Design Registration</span>
                                  <span className="text-[11px] translate-x-[-4px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">→</span>
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <span className="block text-[10px] font-sans text-muted tracking-[0.2em] uppercase mb-4">Litigation & Strategy</span>
                            <ul className="space-y-3">
                              <li>
                                <Link
                                  href="/services"
                                  className="group flex items-center justify-between py-1 text-[13px] text-navy/85 hover:text-gold transition-colors duration-300"
                                >
                                  <span>International Filings</span>
                                  <span className="text-[11px] translate-x-[-4px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">→</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/services"
                                  className="group flex items-center justify-between py-1 text-[13px] text-navy/85 hover:text-gold transition-colors duration-300"
                                >
                                  <span>IP Portfolio Monitoring</span>
                                  <span className="text-[11px] translate-x-[-4px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">→</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/services"
                                  className="group flex items-center justify-between py-1 text-[13px] text-navy/85 hover:text-gold transition-colors duration-300"
                                >
                                  <span>Court Enforcement & Appeals</span>
                                  <span className="text-[11px] translate-x-[-4px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">→</span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-span-3 flex flex-col justify-between">
                          <div className="relative aspect-[4/3] w-full overflow-hidden border border-line bg-line/20">
                            <img
                              src="https://images.pexels.com/photos/931887/pexels-photo-931887.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=450&w=600"
                              alt="New Delhi Law Chambers"
                              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-750 ease-out"
                            />
                          </div>
                          <div className="mt-4 flex items-center justify-between text-[11px]">
                            <span className="text-gold uppercase tracking-[0.18em]">Attorneys at Law</span>
                            <span className="text-muted/70">New Delhi</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="col-span-4 flex flex-col justify-between">
                          <div>
                            <span className="overline text-gold text-[9px] tracking-[0.25em]">Heritage</span>
                            <h3 className="font-serif text-3xl text-navy mt-4 leading-[1.1] font-medium">
                              Safeguarding Brands for Half a Century.
                            </h3>
                          </div>
                          <p className="text-[13px] text-muted leading-relaxed mt-6 max-w-[280px]">
                            Established in 1972, we are a boutique IP law firm offering handcrafted advisory built on trust and absolute precision.
                          </p>
                        </div>

                        <div className="col-span-5 grid grid-cols-2 gap-x-8 border-l border-r border-line/60 px-10">
                          <div>
                            <span className="block text-[10px] font-sans text-muted tracking-[0.2em] uppercase mb-4">The Firm</span>
                            <ul className="space-y-3">
                              <li>
                                <Link
                                  href="/about"
                                  className="group flex items-center justify-between py-1 text-[13px] text-navy/85 hover:text-gold transition-colors duration-300"
                                >
                                  <span>Our Story</span>
                                  <span className="text-[11px] translate-x-[-4px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">→</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/about"
                                  className="group flex items-center justify-between py-1 text-[13px] text-navy/85 hover:text-gold transition-colors duration-300"
                                >
                                  <span>Core Partners</span>
                                  <span className="text-[11px] translate-x-[-4px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">→</span>
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <span className="block text-[10px] font-sans text-muted tracking-[0.2em] uppercase mb-4">Locations</span>
                            <ul className="space-y-3">
                              <li>
                                <span className="block text-[13px] text-navy/80">New Delhi Headquarters</span>
                                <span className="text-[11px] text-muted">Chandni Chowk, Delhi 110006</span>
                              </li>
                              <li>
                                <span className="block text-[13px] text-navy/80">Representations</span>
                                <span className="text-[11px] text-muted">All registries across India & global associate network</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-span-3 flex flex-col justify-between">
                          <div className="relative aspect-[4/3] w-full overflow-hidden border border-line bg-line/20">
                            <img
                              src="https://images.pexels.com/photos/8527251/pexels-photo-8527251.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=450&w=600"
                              alt="Sharma Partners"
                              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-750 ease-out"
                            />
                          </div>
                          <div className="mt-4 flex items-center justify-between text-[11px]">
                            <span className="text-gold uppercase tracking-[0.18em]">Counsel & Partners</span>
                            <span className="text-muted/70">Est. 1972</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Editorial Experience */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop Overlay for closing on tap outside */}
            <div
              className="fixed inset-0 z-[80] bg-navy/15 backdrop-blur-sm pointer-events-auto"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ clipPath: "circle(0px at calc(100% - 40px) 45px)", opacity: 0 }}
              animate={{ clipPath: "circle(150% at calc(100% - 40px) 45px)", opacity: 1 }}
              exit={{ clipPath: "circle(0px at calc(100% - 40px) 45px)", opacity: 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-[85] bg-cream paper-grain text-navy flex flex-col justify-between p-6 pt-28 md:p-12 md:pt-36 pointer-events-auto overflow-y-auto"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Editorial links - Same hierarchy as Desktop */}
              <div className="flex flex-col gap-5 max-w-lg mt-4">
                
                {/* 1. About (Accordion) */}
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <button
                      onClick={() => setAboutOpen(!aboutOpen)}
                      className={cn(
                        "w-full flex justify-between items-center text-left font-serif text-3xl md:text-4xl py-1 uppercase tracking-tight font-medium cursor-pointer transition-all duration-300 hover:text-gold",
                        aboutOpen && "text-gold"
                      )}
                    >
                      <span>About</span>
                      <motion.span
                        animate={{ rotate: aboutOpen ? 45 : 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="text-2xl font-light font-sans"
                      >
                        +
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {aboutOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden pl-5 border-l border-line mt-3 space-y-2.5"
                        >
                          {aboutAccordionItems.map((item, idx) => {
                            const isChildActive = pathname === item.href;
                            return (
                              <motion.div
                                key={idx}
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.03, duration: 0.4 }}
                                className="overflow-hidden"
                              >
                                <Link
                                  href={item.href}
                                  onClick={() => setMobileOpen(false)}
                                  className={cn(
                                    "flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-navy/70 hover:text-gold transition-all duration-300 py-1",
                                    isChildActive && "text-gold font-bold translate-x-1.5"
                                  )}
                                >
                                  <span className="w-1.5 h-[1px] bg-gold" />
                                  {item.name}
                                </Link>
                              </motion.div>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                {/* 2. Services (Accordion) */}
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={cn(
                        "w-full flex justify-between items-center text-left font-serif text-3xl md:text-4xl py-1 uppercase tracking-tight font-medium cursor-pointer transition-all duration-300 hover:text-gold",
                        servicesOpen && "text-gold"
                      )}
                    >
                      <span>Services</span>
                      <motion.span
                        animate={{ rotate: servicesOpen ? 45 : 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="text-2xl font-light font-sans"
                      >
                        +
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden pl-5 border-l border-line mt-3 space-y-2.5"
                        >
                          {serviceAccordionItems.map((item, idx) => {
                            const isChildActive = pathname === item.href;
                            return (
                              <motion.div
                                key={idx}
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.03, duration: 0.4 }}
                                className="overflow-hidden"
                              >
                                <Link
                                  href={item.href}
                                  onClick={() => setMobileOpen(false)}
                                  className={cn(
                                    "flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-navy/70 hover:text-gold transition-all duration-300 py-1",
                                    isChildActive && "text-gold font-bold translate-x-1.5"
                                  )}
                                >
                                  <span className="w-1.5 h-[1px] bg-gold" />
                                  {item.name}
                                </Link>
                              </motion.div>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                {/* Direct Links (Trademark, Copyright, Design, Insights, Consultation) */}
                {[
                  { label: "Trademark", href: "/trademark" },
                  { label: "Copyright", href: "/copyright" },
                  { label: "Design", href: "/design-registration" },
                  { label: "Insights", href: "/insights" },
                  { label: "Consultation", href: "/contact" },
                ].map((item, i) => {
                  const active = pathname === item.href;
                  return (
                    <div key={item.href} className="overflow-hidden">
                      <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 + i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "inline-block font-serif text-3xl md:text-4xl py-1 uppercase tracking-tight font-medium transition-all duration-300 hover:text-gold relative",
                            active && "text-gold translate-x-2"
                          )}
                        >
                          {item.label}
                          {active && (
                            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-navy" />
                          )}
                        </Link>
                      </motion.div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile CTA and Bottom Section */}
              <div className="mt-8 flex flex-col gap-6">
                {/* Book Consultation Button (Inside Menu Only) */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.6 }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="w-full text-center block bg-navy hover:bg-navy-soft text-cream px-6 py-4.5 text-[11px] font-sans tracking-[0.25em] uppercase border border-navy/20 transition-colors duration-300"
                  >
                    Book Consultation
                  </Link>
                </motion.div>

                {/* Thin divider */}
                <div className="w-full h-[1px] bg-line/65" />

                {/* Metadata Column list for editorial premium feel */}
                <div className="grid grid-cols-2 gap-4 text-xs font-serif leading-relaxed text-navy/85">
                  <div className="space-y-1">
                    <span className="block text-[8px] text-muted uppercase tracking-[0.2em] font-sans">Established</span>
                    <span>Since 1972</span>
                    <span className="block">New Delhi</span>
                    <span className="block italic text-gold font-normal">Intellectual Property Law</span>
                  </div>

                  <div className="space-y-1 text-right">
                    <span className="block text-[8px] text-muted uppercase tracking-[0.2em] font-sans text-right">Inquiries</span>
                    <a href={`mailto:${site.email}`} className="block hover:underline text-gold">{site.email}</a>
                    <span className="block text-navy">{site.phones[0]}</span>
                    <span className="block text-[9px] text-muted/60 mt-2 font-sans font-light uppercase tracking-wider">
                      © {new Date().getFullYear()} SHARMA & SHARMA
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
