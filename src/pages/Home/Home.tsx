import Competencies from "../../components/HomePage/Competencies/Competencies";
import HeroSection from "../../components/HomePage/HeroSection/HeroSection";
import MissionSection from "../../components/HomePage/MissionSection/MissionSection";
import AdvantagesSection from "../../components/HomePage/AdvantagesSection/AdvantagesSection";
import StatsSection from "../../components/HomePage/StatsSection/StatsSection";
import GeographySection from "../../components/HomePage/GeographySection/GeographySection";

function Home() {
  return (
    <>
      <HeroSection />
      <Competencies />
      <MissionSection />
      <AdvantagesSection />
      <StatsSection />
      <GeographySection />
    </>
  );
}

export default Home;
