import React from "react";
import ServicesHero from "../../../components/ServicesPages/ServicesHero/ServicesHero";
import {
  forClientsHeroContent,
  forClientsPlan,
} from "../../../lib/data/services.pages";
import ContactSection from "../../../components/ContactSection/ContactSection";
import PricingSection from "../../../components/ServicesPages/PricingSection/PricingSection";

function ForClients() {
  return (
    <React.Fragment>
      <ServicesHero content={forClientsHeroContent} />
      <PricingSection plans={forClientsPlan} />
      <ContactSection />
    </React.Fragment>
  );
}

export default ForClients;
