import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  dark,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative px-5 py-24 md:px-10 md:py-32",
        dark && "bg-navy text-cream",
        className,
      )}
    >
      <div className="mx-auto max-w-[1400px]">{children}</div>
    </section>
  );
}
