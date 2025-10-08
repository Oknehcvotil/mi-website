import React from "react";
import ContactSection from "../../../components/ContactSection/ContactSection";
import CasesHero from "../../../components/CasesPages/CasesHero/CasesHero";
import { businessCasesConfig } from "../../../lib/data/cases.business";

function BusinessPsychology() {
  return (
    <React.Fragment>
      <CasesHero caseConfig={businessCasesConfig} />
      <ContactSection />
    </React.Fragment>
  );
}

export default BusinessPsychology;
