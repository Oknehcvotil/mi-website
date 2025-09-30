import React from "react";
import ServicesHero from "../../../components/ServicesPages/ServicesHero/ServicesHero";
import { forClientsHeroContent } from "../../../lib/data/services.pages";

function ForClients() {
  return (
    <React.Fragment>
      <ServicesHero content={forClientsHeroContent} />
    </React.Fragment>
  );
}

export default ForClients;
