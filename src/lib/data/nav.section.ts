import type { Section } from "../types/nav.types";

export const NAV_SECTIONS: Readonly<Section[]> = [
  {
    id: "services",
    titleKey: "services",
    basePath: "/services",
    items: [
      { to: "/services/for-clients", labelKey: "forCustomers" },
      { to: "/services/for-candidates", labelKey: "forCandidates" },
      { to: "/services/phd-recruiting", labelKey: "phdOfRecruiting" },
    ],
  },
  {
    id: "cases",
    titleKey: "cases",
    basePath: "/cases",
    width: "220px",
    justify: "flex-start",
    items: [
      { to: "/cases/recruitment", labelKey: "recruitment" },
      { to: "/cases/hr-consulting", labelKey: "hrConsulting" },
      { to: "/cases/business-psychology", labelKey: "businessPsy" },
      { to: "/cases/for-candidates", labelKey: "forCandidates" },
    ],
  },
] as const;
