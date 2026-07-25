import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { ClientTicker } from "@/components/home/ticker";
import { LegacyTimeline } from "@/components/home/story";
import { PracticeAreas, TrademarkTypes, Industries } from "@/components/home/grids";
import { TrademarkJourney } from "@/components/home/journey";
import {
  GlobalProtection,
  SuccessStories,
  KnowledgeCenter,
} from "@/components/home/discover";
import { ConsultationCTA } from "@/components/sections/cta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — Intellectual Property Law Firm India`,
  description:
    "Sharma & Sharma is a premier Indian Intellectual Property law firm established in 1972 — safeguarding trademarks, copyrights, designs, and global brand portfolios.",
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: `${site.name} — Intellectual Property Attorneys India`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Intellectual Property Law Firm India`,
    description: site.description,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientTicker />
      <LegacyTimeline />
      <PracticeAreas />
      <TrademarkJourney />
      <TrademarkTypes />
      <Industries />
      <GlobalProtection />
      <SuccessStories />
      <KnowledgeCenter />
      <ConsultationCTA />
    </>
  );
}
