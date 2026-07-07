"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

/** Section eyebrow label with gold rule */
export function SectionLabel({
  children,
  className,
  light,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className={cn("h-px w-8", light ? "bg-cream/40" : "bg-gold")} />
      <span
        className={cn(
          "overline",
          light ? "text-cream/70" : "text-gold",
        )}
      >
        {children}
      </span>
    </div>
  );
}

/** Simple fade-and-rise on scroll */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: ElementType;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/** GSAP SplitText line/word reveal for headings */
export function SplitHeading({
  children,
  className,
  as: Tag = "h2",
  type = "lines",
  stagger = 0.08,
}: {
  children: string;
  className?: string;
  as?: ElementType;
  type?: "lines" | "words" | "chars";
  stagger?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let split: SplitText | null = null;
    const ctx = gsap.context(() => {
      split = new SplitText(el, {
        type,
        linesClass: "line-mask",
      });
      const targets =
        type === "lines" ? split.lines : type === "words" ? split.words : split.chars;
      gsap.set(el, { opacity: 1 });
      gsap.from(targets, {
        yPercent: 115,
        opacity: 0,
        duration: 1.1,
        ease: "power4.out",
        stagger,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });
    }, el);

    return () => {
      split?.revert();
      ctx.revert();
    };
  }, [children, type, stagger]);

  return (
    <Tag ref={ref} className={cn("opacity-0", className)}>
      {children}
    </Tag>
  );
}
