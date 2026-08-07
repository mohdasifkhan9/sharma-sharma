"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ClientTicker() {
  const clientLogos = [
    "/media/client1.png",
    "/media/client2.png",
    "/media/client3.png",
    "/media/client4.png",
    "/media/client5.png",
    "/media/client6.png",
    "/media/client7.png",
    "/media/client8.png",
    "/media/client9.png",
    "/media/client10.png",
    "/media/client11.png",
    "/media/client12.png",
    "/media/client13.png",
    "/media/client14.png",
    "/media/client15.png",
  ];

  return (
    <section
      className="w-full border-b border-line/50 py-3.5 overflow-hidden bg-cream z-10 relative select-none"
      style={{ height: "92px" }}
      aria-label="Trusted by Leading Brands Ticker"
    >
      {/* Editorial side gradient shadows for smooth flow transitions */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />
      
      <div className="h-full flex items-center">
        {/* Infinite CSS animation track defined in globals.css */}
        <div className="flex marquee-track whitespace-nowrap gap-28 items-center h-full">
          {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((src, i) => (
            <Image
              key={i}
              src={src}
              alt="Trusted Client Partner Logo"
              width={120}
              height={64}
              className="h-[60px] md:h-[64px] w-auto object-contain transition-transform duration-300 pointer-events-auto filter drop-shadow-sm"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
