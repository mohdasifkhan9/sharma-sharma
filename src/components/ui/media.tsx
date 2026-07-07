"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type FrameProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  parallax?: boolean;
  rounded?: boolean;
};

/** Editorial image with hover zoom + optional scroll parallax */
export function MediaFrame({
  src,
  alt,
  className,
  imgClassName,
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
  parallax = false,
  rounded = true,
}: FrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden bg-line",
        rounded && "rounded-[4px]",
        className,
      )}
      data-cursor="View"
    >
      <motion.div style={parallax ? { y } : undefined} className="h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(
            "object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]",
            parallax && "scale-110",
            imgClassName,
          )}
        />
      </motion.div>
    </div>
  );
}

/** Autoplay, muted, looping background video with lazy load */
export function VideoFrame({
  src,
  poster,
  className,
  overlay = true,
  rounded = false,
}: {
  src: string;
  poster?: string;
  className?: string;
  overlay?: boolean;
  rounded?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-navy",
        rounded && "rounded-[4px]",
        className,
      )}
    >
      {poster && (
        <Image
          src={poster}
          alt=""
          fill
          sizes="100vw"
          className={cn(
            "object-cover transition-opacity duration-1000",
            loaded ? "opacity-0" : "opacity-100",
          )}
          priority
        />
      )}
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        onCanPlay={() => setLoaded(true)}
      >
        <source src={src} type="video/mp4" />
      </video>
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/20 to-navy/60" />
      )}
    </div>
  );
}
