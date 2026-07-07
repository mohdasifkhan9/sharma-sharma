"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function Magnetic({ children, className, strength = 0.35 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={cn("inline-block transition-transform duration-500 ease-out", className)}
      style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
    >
      {children}
    </div>
  );
}

type Variant = "primary" | "ghost" | "outline";

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-500";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-cream",
  outline: "border border-navy/25 text-navy hover:border-navy",
  ghost: "text-navy",
};

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: boolean;
  magnetic?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  icon = true,
  magnetic = true,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const inner = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </span>
      {variant === "primary" && (
        <span className="absolute inset-0 z-0 translate-y-full bg-gold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
      )}
    </>
  );

  const cls = cn(base, variants[variant], className);

  const el = href ? (
    <Link href={href} className={cls} onClick={onClick}>
      {inner}
    </Link>
  ) : (
    <button type={type} onClick={onClick} disabled={disabled} className={cn(cls, disabled && "opacity-50")}>
      {inner}
    </button>
  );

  if (!magnetic) return el;
  return <Magnetic>{el}</Magnetic>;
}

export function IconLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <motion.div whileHover={{ x: 4 }} className="inline-block">
      <Link href={href} className="link-underline text-sm text-navy">
        {children}
      </Link>
    </motion.div>
  );
}
