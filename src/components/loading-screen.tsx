"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 1600;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 350);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-cream"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.85, 0, 0.15, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="overline text-gold">Est. {site.since}</p>
            <h1 className="mt-4 font-serif text-4xl tracking-tight text-navy md:text-6xl">
              {site.name}
            </h1>
          </motion.div>

          <div className="absolute bottom-10 left-0 right-0 px-8">
            <div className="mx-auto flex max-w-6xl items-end justify-between">
              <span className="overline text-muted">Intellectual Property Law</span>
              <span className="font-serif text-5xl text-navy tabular-nums md:text-7xl">
                {count}
                <span className="text-gold">%</span>
              </span>
            </div>
            <div className="mx-auto mt-4 h-px max-w-6xl overflow-hidden bg-line">
              <motion.div
                className="h-full bg-navy"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: count / 100 }}
                style={{ originX: 0 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
