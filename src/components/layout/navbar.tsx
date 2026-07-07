"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<"services" | "about" | null>(null);

  const headerRef = useRef<HTMLDivElement>(null);
  const ribbonRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const logoContainerRef = useRef<HTMLAnchorElement>(null);
  const logoImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setActivePanel(null);
  }, [pathname]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ribbon = ribbonRef.current;
    const container = navContainerRef.current;
    const logoContainer = logoContainerRef.current;
    const logoImg = logoImgRef.current;

    if (!ribbon || !container) return;

    const mm = gsap.matchMedia();

    // Desktop Responsive Morph
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
        paddingTop: "14px", // 14px top/bottom padding + 54px logo = 82px scrolled height
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

    // Mobile/Tablet Responsive Morph
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

  return (
    <>
      <header
        ref={headerRef}
        className="fixed inset-x-0 top-0 z-[80] w-full pointer-events-none flex flex-col items-center"
        onMouseLeave={() => setActivePanel(null)}
      >
        {/* Thin Editorial Information Ribbon */}
        <div
          ref={ribbonRef}
          className="w-full bg-navy text-cream/90 py-2.5 text-center overline text-[9px] tracking-[0.25em] font-sans border-b border-line/10 pointer-events-auto overflow-hidden transition-all duration-300"
        >
          Since 1972 • New Delhi • Intellectual Property Law
        </div>

        {/* Outer alignment container */}
        <div className="w-full px-4 md:px-8 py-6 pointer-events-none flex justify-center">
          {/* Morphing Inner Container */}
          <div
            ref={navContainerRef}
            className="w-[92vw] max-w-[1520px] bg-cream border border-line px-10 py-4 flex items-center justify-between transition-shadow duration-500 shadow-[0_4px_20px_rgba(22,33,58,0.02)] relative pointer-events-auto mx-auto"
            style={{ minHeight: "82px" }}
          >
            {/* Premium Brand Logo Image */}
            <Link
              ref={logoContainerRef}
              href="/"
              className="flex items-center select-none py-1 pr-12 border-r border-line/35 w-[260px] shrink-0"
            >
              <img
                ref={logoImgRef}
                src="/media/Logo.png"
                alt="Sharma & Sharma Intellectual Property Law"
                className="h-[58px] w-auto object-contain transition-all duration-500"
              />
            </Link>

            {/* Asymmetrical Spacing & Precise Typography Links */}
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

            {/* Visually Integrated CTA & Mobile trigger */}
            <div className="flex items-center gap-6">
              <Link
                href="/contact"
                className="group relative overflow-hidden border border-navy/25 hover:border-navy px-6 py-3.5 rounded-none transition-colors duration-500 bg-transparent text-navy text-[11px] font-sans tracking-[0.22em] uppercase flex items-center justify-center"
              >
                <span className="relative z-10 transition-transform duration-500 group-hover:translate-y-[-140%] inline-block">
                  Consultation
                </span>
                <span className="absolute inset-x-0 bottom-0 top-full bg-navy transition-all duration-500 group-hover:top-0 group-hover:translate-y-0" />
                <span className="absolute inset-0 z-10 flex items-center justify-center translate-y-[140%] group-hover:translate-y-0 transition-transform duration-500 text-cream font-sans tracking-[0.22em] uppercase">
                  Consultation
                </span>
              </Link>

              {/* Custom Architectural Burger Button */}
              <button
                onClick={() => setMobileOpen(true)}
                className="flex lg:hidden flex-col gap-1.5 p-2 justify-center items-end cursor-pointer group"
                aria-label="Open Menu"
              >
                <span className="w-7 h-[1.5px] bg-navy transition-all duration-300 group-hover:w-5" />
                <span className="w-5 h-[1.5px] bg-navy transition-all duration-300" />
              </button>
            </div>

            {/* Editorial Mega Panels */}
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
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[95] bg-navy text-cream flex flex-col md:flex-row pointer-events-auto"
          >
            {/* Cinematic background video */}
            <div className="relative w-full md:w-1/2 h-[35vh] md:h-full overflow-hidden order-last md:order-first">
              <div className="absolute inset-0 bg-navy/70 z-10" />
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 object-cover w-full h-full grayscale opacity-30"
                src="https://videos.pexels.com/video-files/10614145/10614145-uhd_3840_2160_30fps.mp4"
              />
              <div className="absolute bottom-10 left-10 z-20 hidden md:block">
                <span className="overline text-[10px] text-gold">Corporate Headquarters</span>
                <h4 className="font-serif text-2xl mt-2 text-cream font-medium">Sharma & Sharma</h4>
                <p className="text-xs text-cream/50 mt-1">236, Chandni Chowk, Delhi</p>
              </div>
            </div>

            {/* Menu Links */}
            <div className="w-full md:w-1/2 h-[65vh] md:h-full flex flex-col justify-between p-8 md:p-16 z-20">
              <div className="flex justify-between items-center">
                <span className="font-serif text-xl tracking-[0.25em] text-gold font-bold">S & S</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/15 hover:border-cream/50 transition-colors duration-300"
                  aria-label="Close Menu"
                >
                  <span className="text-[10px] font-sans tracking-[0.2em] text-cream">CLOSE</span>
                </button>
              </div>

              <div className="flex flex-col gap-3 mt-8">
                {navItems.map((item, i) => (
                  <div key={item.href} className="overflow-hidden">
                    <motion.div
                      initial={{ y: 80, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.15 + i * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block font-serif text-4xl md:text-5xl hover:text-gold transition-colors duration-300 py-1.5 uppercase tracking-tight font-medium"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-end border-t border-cream/10 pt-6 mt-6">
                <div>
                  <span className="block text-[9px] text-cream/40 uppercase tracking-[0.18em]">Inquiries</span>
                  <a href={`mailto:${site.email}`} className="text-xs text-gold hover:underline mt-1 block">
                    {site.email}
                  </a>
                </div>
                <div>
                  <span className="block text-[9px] text-cream/40 uppercase tracking-[0.18em] text-right">Established</span>
                  <span className="text-xs text-cream/60 mt-1 block">Since 1972 • New Delhi</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
