import type { CasesHeroConfig } from "../types/cases.hero.types";

export const hrCasesConfig: CasesHeroConfig = {
  translationNs: "casesHr",
  className: "hr",
  id: "hr-consulting",
  nav: [
    { hash: "hr-consulting/it", labelKey: "IT" },
    { hash: "hr-consulting/web", labelKey: "WEB 3.0" },
    { hash: "hr-consulting/marketing", labelKey: "Marketing" },
    { hash: "hr-consulting/other", labelKey: "Other" },
  ],
  image: {
    src: "/images/mob/services-pages/hr-consulting",
  },
};
