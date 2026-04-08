import { useSectionInView } from "../../../lib/hooks/useSectionInView";
import AdvantagesSection from "../AdvantagesSection/AdvantagesSection";
// import Competencies from "../Competencies/Competencies";
import HeroSection from "../HeroSection/HeroSection";
import MissionSection from "../MissionSection/MissionSection";
// import StatsSection from "../StatsSection/StatsSection";

const AboutUsSection = () => {
  const { ref } = useSectionInView("About", 0.1);

  return (
    <section ref={ref} id="about">
      <HeroSection />
      <AdvantagesSection />
      {/* <Competencies /> */}
      <MissionSection />
      {/* <StatsSection /> */}
    </section>
  );
};

export default AboutUsSection;
