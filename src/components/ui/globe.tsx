"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { cn } from "@/lib/utils";

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionStart = useRef<number>(0);
  const [r, setR] = useState(0);

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
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.086, 0.129, 0.243], // Deep Navy #16213E as ocean
      markerColor: [0.788, 0.643, 0.361], // Soft Gold #C9A45C for land
      glowColor: [0.788, 0.643, 0.361], // Soft Gold glow
      opacity: 0.9,
      markers: [
        // Origin: India (New Delhi)
        { location: [28.6139, 77.209], size: 0.08 },
        // Jurisdictions
        { location: [40.7128, -74.006], size: 0.04 }, // USA (NY)
        { location: [51.5074, -0.1278], size: 0.04 }, // UK (London)
        { location: [50.8503, 4.3517], size: 0.04 }, // EU (Brussels)
        { location: [43.6532, -79.3832], size: 0.04 }, // Canada
        { location: [-33.8688, 151.2093], size: 0.04 }, // Australia
        { location: [35.6762, 139.6503], size: 0.04 }, // Japan
        { location: [1.3521, 103.8198], size: 0.04 }, // Singapore
        { location: [37.5665, 126.978], size: 0.04 }, // South Korea
        { location: [25.2048, 55.2708], size: 0.04 }, // UAE
        { location: [24.7136, 46.6753], size: 0.04 }, // Saudi Arabia
        { location: [52.52, 13.405], size: 0.04 }, // Germany
        { location: [48.8566, 2.3522], size: 0.04 }, // France
        { location: [46.2044, 6.1432], size: 0.04 }, // Switzerland
        { location: [52.3676, 4.9041], size: 0.04 }, // Netherlands
      ],
      onRender: (state) => {
        // Auto-rotation (1 full rotation ~ 90 seconds -> speed ~ 0.007 rad per frame)
        if (!pointerInteracting.current) {
          phi += 0.003;
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
