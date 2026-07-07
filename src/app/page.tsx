import { Hero } from "@/components/home/hero";
import { LegacyTimeline, Stats } from "@/components/home/story";
import { PracticeAreas, TrademarkTypes, Industries } from "@/components/home/grids";
import { TrademarkJourney } from "@/components/home/journey";
import {
  GlobalProtection,
  SuccessStories,
  KnowledgeCenter,
} from "@/components/home/discover";
import { ConsultationCTA } from "@/components/sections/cta";
import { Marquee } from "@/components/ui/interactive";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LegacyTimeline />
      <PracticeAreas />
      <Stats />
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
