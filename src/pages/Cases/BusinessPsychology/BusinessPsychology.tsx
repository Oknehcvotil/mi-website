import React from "react";
import ContactSection from "../../../components/ContactSection/ContactSection";
import CasesHero from "../../../components/CasesPages/CasesHero/CasesHero";
import { businessCasesConfig } from "../../../lib/data/cases.business";
import BusinessCases from "../../../components/CasesPages/BusinessCases/BusinessCases";

function BusinessPsychology() {
  return (
    <React.Fragment>
      <CasesHero caseConfig={businessCasesConfig} />
      <BusinessCases />
      <ContactSection />
    </React.Fragment>
  );
}

export default BusinessPsychology;
