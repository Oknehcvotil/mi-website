import React from "react";
import { Outlet } from "react-router-dom";
import CasesHero from "../CasesPages/CasesHero/CasesHero";
import { hrCasesConfig } from "../../lib/data/cases.hr";

function ConsultingLayout() {
  return (
    <React.Fragment>
      <CasesHero caseConfig={hrCasesConfig} />
      <section>
        <Outlet />
      </section>
    </React.Fragment>
  );
}

export default ConsultingLayout;
