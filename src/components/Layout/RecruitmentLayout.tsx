import { Outlet } from "react-router-dom";
import CasesHero from "../CasesPages/CasesHero/CasesHero";
import { recruitmentCasesConfig } from "../../lib/data/cases.recruitment";
import React from "react";

function RecruitmentLayout() {
  return (
    <React.Fragment>
      <CasesHero caseConfig={recruitmentCasesConfig} />
      <section>
        <Outlet />
      </section>
    </React.Fragment>
  );
}

export default RecruitmentLayout;
