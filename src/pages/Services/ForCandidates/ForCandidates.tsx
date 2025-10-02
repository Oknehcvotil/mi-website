import React from "react";
import ServicesHero from "../../../components/ServicesPages/ServicesHero/ServicesHero";
import ContactSection from "../../../components/ContactSection/ContactSection";
import {
  forCandidatesHeroContent,
  forCandidatesPlans,
} from "../../../lib/data/services.pages";
import PricingSection from "../../../components/ServicesPages/PricingSection/PricingSection";

function ForCandidates() {
  return (
    <React.Fragment>
      <ServicesHero content={forCandidatesHeroContent} />
      <PricingSection plans={forCandidatesPlans} />
      <ContactSection />
    </React.Fragment>
  );
}

export default ForCandidates;
