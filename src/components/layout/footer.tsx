"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { navItems, services, site } from "@/lib/site";
import { Marquee } from "@/components/ui/interactive";

export function Footer() {
  const stageRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Mouse move parallax interaction
  const [mouseX, setMouseX] = useState(0);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (stageRef.current) {
      const { left, width } = stageRef.current.getBoundingClientRect();
      const relativeX = (e.clientX - left) / width - 0.5; // range: -0.5 to 0.5
      setMouseX(relativeX);
    }
  };

  const handleMouseLeave = () => {
    setMouseX(0);
  };

  // Scroll link motion
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start end", "end start"],
  });

  // Desktop horizontal scroll link movement (xPercent: 8 to -8)
  const desktopX = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  // Mobile horizontal scroll link movement (xPercent: 3 to -3)
  const mobileX = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);

  // Subtle parallax translation based on mouse X (-8px to 8px)
  const parallaxX = shouldReduceMotion ? 0 : mouseX * 16;

  return (
    <footer className="relative overflow-hidden bg-navy text-cream select-none">
      <div className="border-b border-cream/10 py-10">
        <Marquee items={["Trademark", "Copyright", "Design", "Litigation", "Global Filing", "Brand Protection"]} />
      </div>

      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <div className="mb-6 select-none">
              <img
                src="/media/Logo.png"
                alt="Sharma & Sharma Intellectual Property Law"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-cream/60">
              {site.description}
            </p>
          </div>

          <div>
            <p className="overline text-cream/40">Navigate</p>
            <ul className="mt-6 space-y-3">
              {navItems.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="link-underline text-sm text-cream/80">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="overline text-cream/40">Expertise</p>
            <ul className="mt-6 space-y-3">
              {services.slice(0, 7).map((s) => (
                <li key={s} className="text-sm text-cream/60">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="overline text-cream/40">Contact</p>
            <address className="mt-6 space-y-4 not-italic text-sm text-cream/70">
              <p>
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.city} {site.address.postal}, {site.address.country}
              </p>
              <a href={`mailto:${site.email}`} className="link-underline block">
                {site.email}
              </a>
              <div>
                {site.phones.map((p) => (
                  <a key={p} href={`tel:${p}`} className="block hover:text-gold">
                    {p}
                  </a>
                ))}
              </div>
            </address>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-cream/10 pt-8 text-xs text-cream/40 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-cream">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-cream">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-cream">
              Book Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* THE CLOSING SIGNATURE - Kinetic Typography Watermark Stage */}
      <div
        ref={stageRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden w-full bg-navy border-t border-cream/5 select-none pointer-events-auto h-[240px] sm:h-[320px] lg:h-[clamp(300px,32vw,520px)] flex flex-col justify-end pb-8 lg:pb-12"
      >
        {/* Archival Ledger baseline rule */}
        <motion.div
          initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-20 lg:bottom-28 left-[5%] right-[5%] h-[1px] bg-gold/20 origin-left z-0"
        />

        {/* Micro Archival Details */}
        <div className="absolute bottom-12 lg:bottom-16 left-[5%] right-[5%] flex justify-between items-center text-[8px] sm:text-[9px] tracking-[0.25em] font-mono text-cream/35 z-10">
          <span>VOL. 1972 / DELHI</span>
          <span>IP ADVOCACY / ARCHIVE</span>
        </div>

        {/* Secondary Signature Line & Large Monogram Composition */}
        <div className="w-full max-w-[1400px] mx-auto px-5 md:px-10 flex flex-col items-start relative z-10">
          
          {/* Institutional Label above */}
          <div className="mb-4 lg:mb-8 flex items-center gap-2">
            <div className="w-6 h-[1px] bg-gold/60" />
            {/* Desktop single line */}
            <span className="hidden sm:inline text-[9px] tracking-[0.25em] font-sans text-gold font-bold uppercase">
              PROTECTING IDEAS SINCE 1972
            </span>
            {/* Mobile stacked layout */}
            <span className="sm:hidden text-[9px] tracking-[0.2em] font-sans text-gold font-bold uppercase leading-tight">
              PROTECTING IDEAS<br />SINCE 1972
            </span>
          </div>

          {/* Primary Typography Container */}
          <div className="w-full overflow-hidden">
            {/* Desktop Composition */}
            <motion.div
              style={shouldReduceMotion ? {} : { x: desktopX, translateX: parallaxX }}
              initial={shouldReduceMotion ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="hidden sm:block whitespace-nowrap font-serif tracking-[-0.04em] text-[clamp(150px,14vw,290px)] leading-[0.85] text-cream/12 cursor-default select-none origin-left"
            >
              <span>SHARMA</span>{" "}
              <span className="text-gold/35 font-serif font-light">&amp;</span>{" "}
              <span>SHARMA</span>
            </motion.div>

            {/* Mobile Composition */}
            <motion.div
              style={shouldReduceMotion ? {} : { x: mobileX }}
              initial={shouldReduceMotion ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="sm:hidden flex flex-col font-serif tracking-[-0.04em] text-[clamp(62px,18vw,105px)] leading-[0.85] text-cream/12 cursor-default select-none text-left"
            >
              <span>
                SHARMA <span className="text-gold/35 font-serif font-light">&amp;</span>
              </span>
              <span>SHARMA</span>
            </motion.div>
          </div>

        </div>
      </div>
    </footer>
  );
}
