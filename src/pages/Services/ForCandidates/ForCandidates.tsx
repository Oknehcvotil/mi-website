import React from "react";
import ServicesHero from "../../../components/ServicesPages/ServicesHero/ServicesHero";
import ContactSection from "../../../components/ContactSection/ContactSection";
import { forCandidatesHeroContent } from "../../../lib/data/services.pages";

function ForCandidates() {
  return (
    <React.Fragment>
      <ServicesHero content={forCandidatesHeroContent} />
      <ContactSection />
    </React.Fragment>
  );
}

export default ForCandidates;
