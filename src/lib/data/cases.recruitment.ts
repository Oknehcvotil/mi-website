import type { CasesHeroConfig } from "../types/cases.hero";

export const recruitmentCasesConfig: CasesHeroConfig = {
  translationNs: "casesRecruitment",
  className: "recruitment",
  id: "recruitment",
  nav: [
    { hash: "recruitment/it", labelKey: "IT" },
    { hash: "recruitment/web", labelKey: "WEB 3.0" },
    { hash: "recruitment/marketing", labelKey: "Marketing" },
    { hash: "recruitment/fintech", labelKey: "FinTech" },
    { hash: "recruitment/igaming", labelKey: "iGaming" },
    { hash: "recruitment/other", labelKey: "Other" },
  ],
  image: {
    src: "/images/mob/services-pages/services-hero-for-clients",
  },
};
