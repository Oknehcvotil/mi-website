import React from "react";
import ServicesHero from "../../../components/ServicesPages/ServicesHero/ServicesHero";
import ContactSection from "../../../components/ContactSection/ContactSection";
import { forPHDHeroContent, PHDPlans } from "../../../lib/data/services.pages";
import PricingSection from "../../../components/ServicesPages/PricingSection/PricingSection";
import PhdEligibilitySection from "../../../components/ServicesPages/PhdEligibilitySection/PhdEligibilitySection";

function PhdRecruiting() {
  return (
    <React.Fragment>
      <ServicesHero content={forPHDHeroContent} />
      <PhdEligibilitySection />
      <PricingSection plans={PHDPlans} />
      <ContactSection />
    </React.Fragment>
  );
}

export default PhdRecruiting;
