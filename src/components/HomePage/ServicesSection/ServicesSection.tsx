import { useSectionInView } from "../../../lib/hooks/useSectionInView";
import CasesReviewsSection from "../CasesReviewsSection/CasesReviewsSection";
import OurTeamSection from "../OurTeamSection/OurTeamSection";
import PsyMiHero from "../PsyMiHero/PsyMiHero";
import Services from "../Services/Services";

const ServicesSection = () => {
  const { ref } = useSectionInView("Services", 0.1);

  return (
    <section ref={ref} id="services">
      <Services />
      <OurTeamSection />
      <CasesReviewsSection />
      <PsyMiHero />
    </section>
  );
};

export default ServicesSection;
