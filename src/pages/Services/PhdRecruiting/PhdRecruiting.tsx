import React from "react";
import ServicesHero from "../../../components/ServicesPages/ServicesHero/ServicesHero";
import ContactSection from "../../../components/ContactSection/ContactSection";
import { forPHDHeroContent } from "../../../lib/data/services.pages";

function PhdRecruiting() {
  return (
    <React.Fragment>
      <ServicesHero content={forPHDHeroContent} />
      <ContactSection />
    </React.Fragment>
  );
}

export default PhdRecruiting;
