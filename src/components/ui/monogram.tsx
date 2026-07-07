"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

/** Animated SVG line-drawing IP monogram (S&S) */
export function Monogram({
  className,
  draw = true,
  spin = false,
}: {
  className?: string;
  draw?: boolean;
  spin?: boolean;
}) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!draw) return;
    const el = ref.current;
    if (!el) return;
    const paths = el.querySelectorAll<SVGPathElement | SVGCircleElement>("[data-draw]");
    const ctx = gsap.context(() => {
      paths.forEach((p) => {
        const len = (p as SVGPathElement).getTotalLength?.() ?? 400;
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      });
      gsap.to(paths, {
        strokeDashoffset: 0,
        duration: 2.4,
        ease: "power2.inOut",
        stagger: 0.15,
        scrollTrigger: { trigger: el, start: "top 85%" },
      });
    }, el);
    return () => ctx.revert();
  }, [draw]);

  return (
    <svg
      ref={ref}
      viewBox="0 0 200 200"
      fill="none"
      className={cn(spin && "animate-[spin_40s_linear_infinite]", className)}
      aria-hidden
    >
      <circle
        data-draw
        cx="100"
        cy="100"
        r="92"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      <circle
        data-draw
        cx="100"
        cy="100"
        r="70"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.35"
      />
      <path
        data-draw
        d="M118 66c-8-8-34-9-38 6-3 12 12 16 20 20 10 5 22 9 18 24-4 14-32 14-42 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        data-draw
        d="M100 40v120"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.3"
      />
      <path
        data-draw
        d="M40 100h120"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.3"
      />
    </svg>
  );
}
