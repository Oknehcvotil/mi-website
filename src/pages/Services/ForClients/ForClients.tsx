import React from "react";
import ServicesHero from "../../../components/ServicesPages/ServicesHero/ServicesHero";
import { forClientsHeroContent } from "../../../lib/data/services.pages";
import ContactSection from "../../../components/ContactSection/ContactSection";

function ForClients() {
  return (
    <React.Fragment>
      <ServicesHero content={forClientsHeroContent} />
      <ContactSection />
    </React.Fragment>
  );
}

export default ForClients;
