"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, ArrowRight, Link2 } from "lucide-react";
import { articles } from "@/data/insights";
import { Section } from "@/components/layout/section";
import { ConsultationCTA } from "@/components/sections/cta";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ArticlePage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const [activeSection, setActiveSection] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Automatically track active section during scroll
  useEffect(() => {
    if (article) {
      document.title = `${article.seoTitle} | Sharma & Sharma`;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', article.description);
    }
  }, [article]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [article]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Find related articles
  const relatedArticles = articles.filter((a) =>
    article.relatedSlugs.includes(a.slug)
  ).slice(0, 3);

  // Find prev/next articles
  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.seoTitle,
    "description": article.description,
    "image": article.featuredImage,
    "datePublished": article.publishedAt,
    "dateModified": article.updatedAt,
    "author": {
      "@type": "Organization",
      "name": "Sharma & Sharma"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sharma & Sharma",
      "logo": {
        "@type": "ImageObject",
        "url": "/media/Logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ipmark.in/insights/${article.slug}`
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ipmark.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Insights",
        "item": "https://ipmark.in/insights"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": `https://ipmark.in/insights/${article.slug}`
      }
    ]
  };

  return (
    <>
      {/* Structured data injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Reading Progress Line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gold z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <header className="px-5 pb-10 pt-36 md:px-10 md:pb-12 md:pt-44 bg-cream select-none relative overflow-hidden">
        {/* Subtle grid elements */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0 opacity-[0.015] border m-8 border-navy/40" />

        <div className="mx-auto max-w-[1400px] relative z-10">
          <div className="flex items-center gap-2 text-[10px] tracking-[0.25em] font-sans uppercase text-gold font-semibold mb-6">
            <span>THE IP JOURNAL</span>
            <span>/</span>
            <span>{article.category}</span>
          </div>

          <h1 className="font-serif text-[clamp(2.2rem,5vw,4.5rem)] text-navy leading-[1.1] tracking-tight max-w-4xl">
            {article.title}
          </h1>

          <p className="mt-6 text-[15px] sm:text-[17px] leading-relaxed text-muted max-w-2xl font-sans font-light">
            {article.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[10px] uppercase tracking-wider font-mono text-navy/70 border-t border-line/45 pt-6">
            <div>BY {article.author}</div>
            <div className="w-1.5 h-1.5 rounded-full bg-gold self-center" />
            <div>{article.readingTime}</div>
            <div className="w-1.5 h-1.5 rounded-full bg-gold self-center" />
            <div>REVIEWED BY: {article.reviewer}</div>
            <div className="w-1.5 h-1.5 rounded-full bg-gold self-center" />
            <div>LAST UPDATED: {new Date(article.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</div>
          </div>
        </div>
      </header>

      {/* Cinematic Wide Crops Featured Image */}
      <div className="w-full relative h-[45vh] sm:h-[55vh] md:h-[65vh] overflow-hidden select-none bg-line/10 border-y border-line/40">
        <Image
          src={article.featuredImage}
          alt={article.featuredImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Main Three-Zone Editorial Grid */}
      <Section className="!pt-12 !pb-20 bg-cream">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* ZONE 1 (LEFT): Utility Rail (2 cols) */}
          <div className="lg:col-span-2 hidden lg:flex flex-col gap-6 sticky top-28 h-fit border-r border-line/45 pr-6">
            <div>
              <span className="block text-[9px] text-gold uppercase tracking-widest font-mono">Category</span>
              <span className="text-xs text-navy font-bold tracking-wide mt-1 block uppercase">{article.category}</span>
            </div>
            <div>
              <span className="block text-[9px] text-gold uppercase tracking-widest font-mono">Reading Time</span>
              <span className="text-xs text-navy font-bold tracking-wide mt-1 block uppercase">{article.readingTime}</span>
            </div>
            <div className="border-t border-line/30 my-2" />
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 text-[10px] tracking-wider text-navy/70 hover:text-gold uppercase font-mono transition-colors cursor-pointer"
            >
              <Link2 className="w-3.5 h-3.5" />
              <span>{copied ? "Copied" : "Copy Link"}</span>
            </button>
          </div>

          {/* ZONE 2 (CENTER): Primary Reading Column (7 cols) */}
          <article className="lg:col-span-7 flex flex-col items-start w-full">
            
            {/* Key Callout Box */}
            {article.keyInsight && (
              <div className="w-full bg-paper border-l-2 border-gold p-6 mb-10 relative">
                <span className="text-[9px] tracking-widest text-gold font-sans uppercase font-bold block mb-2">
                  Key Consideration
                </span>
                <p className="font-serif text-[16px] text-navy italic leading-relaxed">
                  {article.keyInsight}
                </p>
              </div>
            )}

            {/* Render sections dynamically */}
            <div className="space-y-10 w-full">
              {article.sections.map((sec) => (
                <section
                  key={sec.id}
                  id={sec.id}
                  ref={(el) => {
                    sectionRefs.current[sec.id] = el;
                  }}
                  className="scroll-mt-32 w-full"
                >
                  <h2 className="font-serif text-2xl sm:text-3xl text-navy tracking-tight mb-4">
                    {sec.title}
                  </h2>
                  <div className="space-y-4 text-[15px] sm:text-[16px] leading-relaxed text-muted font-sans font-light">
                    {sec.content.map((para, idx) => (
                      <p key={idx} className="max-w-[72ch] text-justify">
                        {para}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Checklist elements */}
            {article.checklist && (
              <div className="mt-12 w-full border-t border-line/50 pt-8">
                <h3 className="font-serif text-xl sm:text-2xl text-navy mb-4">
                  Actionable Checklist
                </h3>
                <ul className="space-y-3">
                  {article.checklist.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted">
                      <span className="text-gold font-serif text-base select-none">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* FAQs component */}
            {article.faq && (
              <div className="mt-12 w-full border-t border-line/50 pt-8">
                <h3 className="font-serif text-xl sm:text-2xl text-navy mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-6">
                  {article.faq.map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                      <h4 className="font-serif text-[16px] text-navy font-semibold">
                        Q: {item.question}
                      </h4>
                      <p className="text-sm text-muted leading-relaxed max-w-[70ch]">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Optional warnings/notes */}
            {article.note && (
              <div className="mt-10 p-5 bg-paper/60 border border-line/35 w-full text-xs text-muted/95 leading-relaxed font-sans italic">
                <span className="font-bold text-gold uppercase tracking-wider block mb-1">Filing Note</span>
                {article.note}
              </div>
            )}

            {/* Legal Disclaimer block */}
            <div className="mt-12 p-5 border-t border-line/45 w-full text-[11px] text-muted/70 leading-relaxed font-sans">
              <span className="font-semibold text-gold uppercase tracking-wider block mb-1">Editorial Notice</span>
              This publication is intended for general informational purposes and does not constitute formal legal advice. Intellectual property strategy depends on the relevant facts, jurisdictions and current legal framework.
            </div>

          </article>

          {/* ZONE 3 (RIGHT): Sticky Table of Contents (3 cols) */}
          <div className="lg:col-span-3 hidden lg:block sticky top-28 h-fit pl-6">
            <span className="block text-[9px] text-gold uppercase tracking-widest font-mono mb-4">On This Page</span>
            <ul className="space-y-3 text-xs font-sans">
              {article.sections.map((sec) => {
                const isActive = activeSection === sec.id;
                return (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      className={cn(
                        "block transition-all duration-300 hover:text-navy hover:translate-x-1 cursor-pointer",
                        isActive
                          ? "text-navy font-bold pl-2 border-l border-gold"
                          : "text-muted pl-2"
                      )}
                    >
                      {sec.title.substring(3)}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>
      </Section>

      {/* CONTINUOUS READING: Related Articles list rows */}
      {relatedArticles.length > 0 && (
        <Section dark className="relative overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.015] border m-8 border-cream/40" />

          <div className="mx-auto max-w-[1400px] relative z-10">
            <span className="text-[10px] tracking-[0.25em] font-sans uppercase text-gold font-bold block mb-4">
              CONTINUE READING
            </span>

            <div className="border-t border-cream/10 mt-6">
              {relatedArticles.map((rel, index) => (
                <Link
                  key={rel.slug}
                  href={`/insights/${rel.slug}`}
                  className="group relative grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-6 border-b border-cream/10 py-8 transition-colors cursor-pointer"
                >
                  <span className="text-gold font-mono text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span className="block text-[9px] tracking-widest font-sans uppercase text-gold font-bold mb-1">
                      {rel.category}
                    </span>
                    <h3 className="font-serif text-2xl text-cream transition-colors group-hover:text-gold">
                      {rel.title}
                    </h3>
                  </div>
                  <ArrowRight className="w-5 h-5 text-cream transition-transform duration-300 group-hover:translate-x-2 hidden md:block" />
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* PREVIOUS / NEXT JOURNAL ENTRY NAVIGATION */}
      <div className="border-y border-line bg-paper py-8 select-none">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 flex justify-between items-center text-xs font-sans text-navy">
          {prevArticle ? (
            <Link
              href={`/insights/${prevArticle.slug}`}
              className="flex items-center gap-2 hover:text-gold transition-colors font-medium cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{prevArticle.title.slice(0, 30)}...</span>
            </Link>
          ) : (
            <div />
          )}

          {nextArticle ? (
            <Link
              href={`/insights/${nextArticle.slug}`}
              className="flex items-center gap-2 hover:text-gold transition-colors font-medium cursor-pointer text-right"
            >
              <span>{nextArticle.title.slice(0, 30)}...</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      <ConsultationCTA />
    </>
  );
}
