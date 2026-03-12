import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import CinematicSections from "@/components/CinematicSections";
import RoadmapSection from "@/components/RoadmapSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeatureCards />
      <CinematicSections />
      <RoadmapSection />
      <FooterSection />
    </div>
  );
};

export default Index;
