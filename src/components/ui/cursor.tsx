"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.6 });

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = (e.target as HTMLElement)?.closest(
        "a, button, [data-cursor]",
      ) as HTMLElement | null;
      setHovering(!!target);
      setLabel(target?.getAttribute("data-cursor") ?? null);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2"
        style={{ x: sx, y: sy }}
      >
        <motion.div
          className="flex items-center justify-center rounded-full bg-navy text-cream"
          animate={{
            width: label ? 88 : hovering ? 46 : 10,
            height: label ? 88 : hovering ? 46 : 10,
            opacity: 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          {label && (
            <span className="text-[10px] uppercase tracking-[0.18em]">
              {label}
            </span>
          )}
        </motion.div>
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[99] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/50"
        style={{ x, y }}
      />
    </>
  );
}
