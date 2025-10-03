import React from "react";
import ServicesHero from "../../../components/ServicesPages/ServicesHero/ServicesHero";
import {
  forClientsHeroContent,
  forClientsPlan,
  teamForClientsConfig,
} from "../../../lib/data/services.pages";
import ContactSection from "../../../components/ContactSection/ContactSection";
import PricingSection from "../../../components/ServicesPages/PricingSection/PricingSection";
import HrConsultingSection from "../../../components/ServicesPages/HrConsultingSection/HrConsultingSection";
import BusinessPsychologySection from "../../../components/ServicesPages/BusinessPsychologySection/BusinessPsychologySection";
import TeamSection from "../../../components/ServicesPages/TeamSection/TeamSection";

function ForClients() {
  return (
    <React.Fragment>
      <ServicesHero content={forClientsHeroContent} />
      <PricingSection plans={forClientsPlan} />
      <HrConsultingSection />
      <BusinessPsychologySection />
      <TeamSection config={teamForClientsConfig} />
      <ContactSection />
    </React.Fragment>
  );
}

export default ForClients;
