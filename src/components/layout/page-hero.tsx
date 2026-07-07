"use client";

import { motion } from "framer-motion";
import { SectionLabel, SplitHeading } from "@/components/ui/reveal";
import { MediaFrame } from "@/components/ui/media";

export function PageHero({
  label,
  title,
  intro,
  image,
  imageAlt,
}: {
  label: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <header className="relative px-5 pb-16 pt-36 md:px-10 md:pb-24 md:pt-48">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel>{label}</SectionLabel>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <SplitHeading
            as="h1"
            type="lines"
            className="display text-[clamp(2.6rem,7vw,6rem)] text-navy"
          >
            {title}
          </SplitHeading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md text-[15px] leading-relaxed text-muted lg:pb-4"
          >
            {intro}
          </motion.p>
        </div>
        <div className="mt-12 md:mt-16">
          <MediaFrame
            src={image}
            alt={imageAlt}
            priority
            parallax
            sizes="100vw"
            className="aspect-[16/8] w-full"
          />
        </div>
      </div>
    </header>
  );
}
