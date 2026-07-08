import { Hero } from "@/components/home/hero";
import { ClientTicker } from "@/components/home/ticker";
import { LegacyTimeline } from "@/components/home/story";
import { PracticeAreas, TrademarkTypes, Industries } from "@/components/home/grids";
import { TrustSection } from "@/components/home/trust";
import { TrademarkJourney } from "@/components/home/journey";
import {
  GlobalProtection,
  SuccessStories,
  KnowledgeCenter,
} from "@/components/home/discover";
import { ConsultationCTA } from "@/components/sections/cta";

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
      <TrustSection />
      <GlobalProtection />
      <SuccessStories />
      <KnowledgeCenter />
      <ConsultationCTA />
    </>
  );
}
