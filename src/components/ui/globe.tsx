"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { cn } from "@/lib/utils";

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionStart = useRef<number>(0);
  const isInViewRef = useRef(false);
  const [r, setR] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onResize = () => {
      if (canvas) {
        width = canvas.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 0, // Light theme globe for white/ivory museum style
      diffuse: 1.1,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [0.98, 0.97, 0.95], // Warm Ivory matching background
      markerColor: [0.788, 0.643, 0.361], // Soft luxury gold for markers
      glowColor: [0.98, 0.97, 0.95], // Ambient glow matches ivory
      opacity: 1,
      markers: [
        // Origin: India (New Delhi) - larger glowing gold marker
        { location: [28.6139, 77.209], size: 0.07 },
        // Jurisdictions
        { location: [40.7128, -74.006], size: 0.03 }, // USA (NY)
        { location: [51.5074, -0.1278], size: 0.03 }, // UK (London)
        { location: [50.8503, 4.3517], size: 0.03 }, // EU (Brussels)
        { location: [43.6532, -79.3832], size: 0.03 }, // Canada
        { location: [-33.8688, 151.2093], size: 0.03 }, // Australia
        { location: [35.6762, 139.6503], size: 0.03 }, // Japan
        { location: [1.3521, 103.8198], size: 0.03 }, // Singapore
        { location: [37.5665, 126.978], size: 0.03 }, // South Korea
        { location: [52.52, 13.405], size: 0.03 }, // Germany
        { location: [48.8566, 2.3522], size: 0.03 }, // France
        { location: [25.2048, 55.2708], size: 0.03 }, // UAE
      ],
      onRender: (state) => {
        if (!isInViewRef.current) return;
        // Auto-rotation (1 full rotation ~ 90 seconds -> speed ~ 0.003 rad per frame)
        if (!pointerInteracting.current) {
          phi += 0.0025;
        }
        state.phi = phi + r;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [r]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative mx-auto aspect-square w-full max-w-[600px] flex items-center justify-center bg-transparent",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionStart.current;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grabbing";
          }
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grab";
          }
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grab";
          }
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionStart.current = delta;
            setR(delta / 200);
          }
        }}
        className="h-full w-full opacity-0 transition-opacity duration-1000 ease-in-out cursor-grab select-none pointer-events-auto"
        style={{ width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%" }}
      />
    </div>
  );
}
