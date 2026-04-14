import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ParkSelector from "@/components/ParkSelector";
import RideGrid from "@/components/RideGrid";
import OffersCarousel from "@/components/OffersCarousel";
import ExperienceTabs from "@/components/ExperienceTabs";
import PlanVisit from "@/components/PlanVisit";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ParkSelector />
      <RideGrid />
      <OffersCarousel />
      <ExperienceTabs />
      <PlanVisit />
      <Footer />
    </div>
  );
};

export default Index;
