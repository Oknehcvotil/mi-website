import React from "react";
import ServicesHero from "../../../components/ServicesPages/ServicesHero/ServicesHero";
import ContactSection from "../../../components/ContactSection/ContactSection";
import {
  forCandidatesHeroContent,
  forCandidatesPlans,
  teamForCandidatesConfig,
} from "../../../lib/data/services.pages";
import PricingSection from "../../../components/ServicesPages/PricingSection/PricingSection";
import TeamSection from "../../../components/ServicesPages/TeamSection/TeamSection";

function ForCandidates() {
  return (
    <React.Fragment>
      <ServicesHero content={forCandidatesHeroContent} />
      <PricingSection plans={forCandidatesPlans} />
      <TeamSection config={teamForCandidatesConfig} />
      <ContactSection />
    </React.Fragment>
  );
}

export default ForCandidates;
