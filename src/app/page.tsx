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
  title: "Sharma & Sharma —Global Intellectual Property Law Since 1972",
  description:
    "Sharma & Sharma provides trademark, patent, copyright and design protection in India for clients from the USA, India, China and worldwide since 1972.",
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: "Sharma & Sharma —Global Intellectual Property Law Since 1972",
    description:
      "Sharma & Sharma provides trademark, patent, copyright and design protection in India for clients from the USA, India, China and worldwide since 1972.",
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharma & Sharma —Global Intellectual Property Law Since 1972",
    description:
      "Sharma & Sharma provides trademark, patent, copyright and design protection in India for clients from the USA, India, China and worldwide since 1972.",
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
