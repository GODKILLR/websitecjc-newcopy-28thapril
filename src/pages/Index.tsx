import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CinematicSections from "@/components/CinematicSections";
import LeaderboardSection from "@/components/LeaderboardSection";
import HowToPlay from "@/components/HowToPlay";
import WalletPreview from "@/components/WalletPreview";
import DaySpa from "@/components/DaySpa";
import FarmPreview from "@/components/FarmPreview";
import AmbassadorPreview from "@/components/AmbassadorPreview";
import RoadmapSection from "@/components/RoadmapSection";
import CommunitySection from "@/components/CommunitySection";
import FooterSection from "@/components/FooterSection";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      {/* Loading screen with race start gates animation */}
      <LoadingScreen onLoadComplete={() => setLoadingComplete(true)} />

      {/* Main content */}
      <div className={`min-h-screen bg-background overflow-x-hidden ${!loadingComplete ? "invisible" : ""}`}>
        <Navbar />
        <HeroSection />
        <CinematicSections />
        <LeaderboardSection />
        <HowToPlay />
        <WalletPreview />
        <DaySpa />
        <FarmPreview />
        <AmbassadorPreview />
        <RoadmapSection />
        <CommunitySection />
        <FooterSection />
      </div>
    </>
  );
};

export default Index;
