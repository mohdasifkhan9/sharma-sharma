"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, BookOpen, Shield, Home } from "lucide-react";
import { Section } from "@/components/layout/section";
import { SectionLabel, Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";

export default function ContactThanksPage() {
  return (
    <>
      <Section className="min-h-[80vh] flex items-center justify-center pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="w-full max-w-2xl text-center">
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-navy text-gold shadow-lg"
            >
              <Check className="h-7 w-7" strokeWidth={2} />
            </motion.div>
          </div>

          <SectionLabel className="justify-center">Consultation Confirmed</SectionLabel>

          <h1 className="font-serif text-[clamp(2rem,6vw,4rem)] text-navy mt-6 leading-tight">
            Thank you for reaching out.
          </h1>

          <p className="mt-6 text-[15px] leading-relaxed text-muted max-w-lg mx-auto">
            Your inquiry has been successfully received and cataloged. A senior
            intellectual property counsel will review your materials and contact
            you within one business day.
          </p>

          <div className="mt-12 p-8 rounded-[4px] border border-line bg-paper text-left max-w-md mx-auto shadow-sm">
            <h3 className="font-serif text-lg text-navy mb-4 border-b border-line pb-2">
              Next Steps & Reference
            </h3>
            <div className="space-y-3 text-xs text-navy/80 font-sans">
              <p>
                <strong>Office:</strong> {site.address.line1}, {site.address.line2}, {site.address.city} {site.address.postal}, {site.address.country}
              </p>
              <p>
                <strong>Direct Email:</strong> <a href={`mailto:${site.email}`} className="text-gold hover:underline">{site.email}</a>
              </p>
              <p>
                <strong>Telephone:</strong> {site.phones[0]}
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-navy px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-navy hover:bg-navy hover:text-cream transition-all duration-300"
            >
              <Home className="h-3.5 w-3.5" /> Return Home
            </Link>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-cream hover:bg-navy-soft transition-all duration-300"
            >
              <BookOpen className="h-3.5 w-3.5" /> Read the IP Journal
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
