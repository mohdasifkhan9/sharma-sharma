import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { SectionLabel, SplitHeading, Reveal } from "@/components/ui/reveal";
import { MediaFrame } from "@/components/ui/media";
import { ConsultationCTA } from "@/components/sections/cta";
import { articles } from "@/lib/content";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "Insights & Knowledge Center",
  description:
    "Guides, explainers and perspectives on trademarks, copyright, design and global IP strategy from the counsel at Sharma & Sharma.",
};

const categories = ["All", "Trademark", "Copyright", "Design", "International", "Enforcement"];

const featured = {
  category: "Featured",
  title: "The founder's field guide to intellectual property",
  read: "12 min read",
  excerpt:
    "A comprehensive, plain-English walkthrough of everything a new brand should protect — and in what order — from day one to global scale.",
  image: media.founders[0],
};

export default function InsightsPage() {
  return (
    <>
      <header className="px-5 pb-14 pt-36 md:px-10 md:pb-16 md:pt-48">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Knowledge Center</SectionLabel>
          <SplitHeading
            as="h1"
            className="display mt-6 max-w-4xl text-[clamp(2.6rem,7vw,6rem)] text-navy"
          >
            Insight, generously shared.
          </SplitHeading>
        </div>
      </header>

      <Section className="!pt-4">
        {/* Featured */}
        <Reveal>
          <Link href="/insights" className="group grid gap-8 md:grid-cols-2 md:items-center" data-cursor="Read">
            <MediaFrame
              src={featured.image}
              alt={featured.title}
              priority
              sizes="(max-width:768px) 100vw, 50vw"
              className="aspect-[16/11] w-full"
            />
            <div>
              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.14em] text-muted">
                <span className="text-gold">{featured.category}</span>
                <span>·</span>
                <span>{featured.read}</span>
              </div>
              <h2 className="mt-4 font-serif text-4xl text-navy transition-colors group-hover:text-gold md:text-5xl">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
                {featured.excerpt}
              </p>
              <span className="link-underline mt-6 inline-block text-sm text-navy">
                Read the guide
              </span>
            </div>
          </Link>
        </Reveal>

        {/* Categories */}
        <div className="mt-16 flex flex-wrap gap-3 border-y border-line py-6">
          {categories.map((c, i) => (
            <span
              key={c}
              className={`rounded-full border px-5 py-2 text-sm transition-colors ${
                i === 0
                  ? "border-navy bg-navy text-cream"
                  : "border-line text-muted hover:border-navy hover:text-navy"
              }`}
            >
              {c}
            </span>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {[...articles, ...articles].map((a, i) => (
            <Reveal key={`${a.title}-${i}`} delay={(i % 3) * 0.06}>
              <Link href="/insights" className="group block" data-cursor="Read">
                <MediaFrame
                  src={a.image}
                  alt={a.title}
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="aspect-[16/11] w-full"
                />
                <div className="mt-5 flex items-center gap-4 text-xs uppercase tracking-[0.14em] text-muted">
                  <span className="text-gold">{a.category}</span>
                  <span>·</span>
                  <span>{a.read}</span>
                </div>
                <h3 className="mt-3 flex items-start justify-between gap-3 font-serif text-2xl text-navy">
                  <span className="transition-colors group-hover:text-gold">{a.title}</span>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <ConsultationCTA />
    </>
  );
}
