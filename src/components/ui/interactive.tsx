"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { animate, motion, useInView, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

/** Animated number counter triggered on scroll */
export function Counter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/** Infinite marquee */
export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <div 
      className={cn("relative overflow-hidden w-full select-none", className)} 
      style={{ 
        minHeight: "clamp(92px, 8vw, 132px)", 
        display: "flex", 
        alignItems: "center",
        overflowX: "clip",
        paddingBlock: "12px",
      }}
    >
      <div className="marquee-track flex flex-nowrap w-max whitespace-nowrap">
        {/* Group A */}
        <div 
          className="marquee-group flex items-center shrink-0 w-max" 
          style={{ 
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            width: "max-content",
            paddingInline: "clamp(24px, 4vw, 72px)"
          }}
        >
          {items.map((it, i) => (
            <span key={`a-${i}`} className="flex items-center shrink-0 whitespace-nowrap">
              <span 
                className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] text-navy/80 tracking-normal px-4 sm:px-6" 
                style={{ 
                  flex: "0 0 auto", 
                  whiteSpace: "nowrap", 
                  lineHeight: 1.1 
                }}
              >
                {it}
              </span>
              <span className="text-gold flex-none shrink-0" style={{ flex: "0 0 auto" }}>✦</span>
            </span>
          ))}
        </div>
        {/* Group B (visually identical duplicate) */}
        <div 
          className="marquee-group flex items-center shrink-0 w-max" 
          style={{ 
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            width: "max-content",
            paddingInline: "clamp(24px, 4vw, 72px)"
          }}
        >
          {items.map((it, i) => (
            <span key={`b-${i}`} className="flex items-center shrink-0 whitespace-nowrap">
              <span 
                className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] text-navy/80 tracking-normal px-4 sm:px-6" 
                style={{ 
                  flex: "0 0 auto", 
                  whiteSpace: "nowrap", 
                  lineHeight: 1.1 
                }}
              >
                {it}
              </span>
              <span className="text-gold flex-none shrink-0" style={{ flex: "0 0 auto" }}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export type FAQItem = { q: string; a: string };

export function Accordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-serif text-xl text-navy md:text-2xl">
                {item.q}
              </span>
              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-500",
                  isOpen && "rotate-45 border-gold bg-gold text-cream",
                )}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-7 text-[15px] leading-relaxed text-muted">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/** Generic sticky pinned wrapper helper (visual only) */
export function StickyLabel({ children }: { children: ReactNode }) {
  return (
    <div className="sticky top-28 self-start">{children}</div>
  );
}
