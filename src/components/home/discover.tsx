"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel, SplitHeading, Reveal } from "@/components/ui/reveal";
import { MediaFrame, VideoFrame } from "@/components/ui/media";
import { Section } from "@/components/layout/section";
import { Counter } from "@/components/ui/interactive";
import { stories, articles } from "@/lib/content";
import { media } from "@/lib/media";

export function GlobalProtection() {
  return (
    <Section className="relative overflow-hidden bg-cream">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionLabel>Global Protection</SectionLabel>
          <SplitHeading className="display mt-6 text-[clamp(2.2rem,5vw,4.5rem)] text-navy">
            Local roots. Worldwide reach.
          </SplitHeading>
          <Reveal>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
              Through the Madrid Protocol and a vetted network of associates, we
              secure and defend your rights across more than 150 jurisdictions —
              coordinated from a single point of counsel.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
              {[
                { v: 150, s: "+", l: "Jurisdictions" },
                { v: 40, s: "+", l: "Associate Firms" },
                { v: 24, s: "h", l: "Response Time" },
              ].map((x) => (
                <div key={x.l}>
                  <div className="display text-4xl text-gold">
                    <Counter value={x.v} suffix={x.s} />
                  </div>
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted">
                    {x.l}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative">
            <div className="overflow-hidden rounded-full border border-line">
              <VideoFrame src={media.global.video} className="aspect-square w-full" />
            </div>
            <div className="absolute -right-2 top-6 rounded-full bg-paper px-4 py-2 text-xs shadow-lg md:right-6">
              🇮🇳 → 🌍 One filing, many nations
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function SuccessStories() {
  return (
    <Section dark>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <SectionLabel light>Client Success</SectionLabel>
          <SplitHeading className="display mt-6 text-[clamp(2.2rem,5vw,4.5rem)] text-cream">
            Stories worth protecting.
          </SplitHeading>
        </div>
      </div>

      <div className="mt-16 space-y-16 md:space-y-24">
        {stories.map((s, i) => (
          <div
            key={s.title}
            className={`grid items-center gap-8 md:grid-cols-2 md:gap-16 ${
              i % 2 === 1 ? "md:[direction:rtl]" : ""
            }`}
          >
            <div className="[direction:ltr]">
              <MediaFrame
                src={s.image}
                alt={s.client}
                parallax
                sizes="(max-width:768px) 100vw, 50vw"
                className="aspect-[4/3] w-full"
              />
            </div>
            <div className="[direction:ltr]">
              <Reveal>
                <p className="overline text-gold">{s.client}</p>
                <h3 className="mt-4 font-serif text-3xl text-cream md:text-4xl">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-cream/60">
                  {s.text}
                </p>
                <p className="mt-8 inline-flex items-center gap-3 border border-cream/20 px-5 py-2.5 text-sm text-cream">
                  <span className="text-gold">✦</span> {s.result}
                </p>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function KnowledgeCenter() {
  return (
    <Section className="bg-paper">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <SectionLabel>Knowledge Center</SectionLabel>
          <SplitHeading className="display mt-6 text-[clamp(2.2rem,5vw,4.5rem)] text-navy">
            Insight, generously shared.
          </SplitHeading>
        </div>
        <Reveal>
          <Link href="/insights" className="link-underline text-sm text-navy">
            Browse all insights
          </Link>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {articles.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.05}>
            <Link href="/insights" className="group block" data-cursor="Read">
              <motion.div className="overflow-hidden rounded-[4px]">
                <MediaFrame
                  src={a.image}
                  alt={a.title}
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="aspect-[16/10] w-full"
                  rounded={false}
                />
              </motion.div>
              <div className="mt-5 flex items-center gap-4 text-xs uppercase tracking-[0.14em] text-muted">
                <span className="text-gold">{a.category}</span>
                <span>·</span>
                <span>{a.read}</span>
              </div>
              <h3 className="mt-3 flex items-start justify-between gap-4 font-serif text-2xl text-navy md:text-3xl">
                <span className="transition-colors group-hover:text-gold">{a.title}</span>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                {a.excerpt}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
