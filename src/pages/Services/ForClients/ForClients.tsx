import React from "react";
import ServicesHero from "../../../components/ServicesPages/ServicesHero/ServicesHero";
import {
  forClientsHeroContent,
  forClientsPlan,
} from "../../../lib/data/services.pages";
import ContactSection from "../../../components/ContactSection/ContactSection";
import PricingSection from "../../../components/ServicesPages/PricingSection/PricingSection";
import HrConsultingSection from "../../../components/ServicesPages/HrConsultingSection/HrConsultingSection";
import BusinessPsychologySection from "../../../components/ServicesPages/BusinessPsychologySection/BusinessPsychologySection";

function ForClients() {
  return (
    <React.Fragment>
      <ServicesHero content={forClientsHeroContent} />
      <PricingSection plans={forClientsPlan} />
      <HrConsultingSection />
      <BusinessPsychologySection />
      <ContactSection />
    </React.Fragment>
  );
}

export default ForClients;
