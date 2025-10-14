import type { CasesHeroConfig } from "../types/cases.hero.types";
import type { NoVideoCasesItem } from "../types/cases.types";

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

export const hrItItems: NoVideoCasesItem[] = [
  {
    type: "msg",
    imgSrc: "/images/cases-pages/recruiment/nda-hr-it-person",
    titleKey: "it.ndaHr.title",
    textKey: "it.ndaHr.items",
  },
  {
    type: "case",
    keyPrefix: "it.ndaHr",
    logos: [{ src: "/images/clients-logos/nda", width: 95, height: 40 }],
  },
];

export const hrMarketingItems: NoVideoCasesItem[] = [
  {
    type: "msg",
    imgSrc: "/images/cases-pages/recruiment/digital-marketing-person",
    titleKey: "marketing.digitalMarketingAgency.title",
    textKey: "marketing.digitalMarketingAgency.items",
  },
  {
    type: "case",
    keyPrefix: "marketing.digitalMarketingAgency",
    className: "digitalMarketingAgency",
    logoTitle: "marketing.digitalMarketingAgency.logo",
  },
  {
    type: "msg",
    imgSrc: "/images/cases-pages/recruiment/svet-person",
    titleKey: "marketing.svet.title",
    textKey: "marketing.svet.items",
  },
  {
    type: "case",
    keyPrefix: "marketing.svet",
    logos: [{ src: "/images/clients-logos/cbet", width: 90, height: 70 }],
  },
  {
    type: "msg",
    imgSrc: "/images/cases-pages/recruiment/nda-affiliate-person",
    titleKey: "marketing.ndaAffiliate.title",
    textKey: "marketing.ndaAffiliate.items",
  },
  {
    type: "case",
    keyPrefix: "marketing.ndaAffiliate",
    logos: [{ src: "/images/clients-logos/nda", width: 95, height: 40 }],
  },
];

export const hrWebItems: NoVideoCasesItem[] = [
  {
    type: "msg",
    imgSrc: "/images/cases-pages/recruiment/nda-hr-web-person",
    titleKey: "web.ndaWeb.title",
    textKey: "web.ndaWeb.items",
  },
  {
    type: "case",
    keyPrefix: "web.ndaWeb",
    className: "ndaWeb",
    logoTitle: "web.ndaWeb.logo",
  },
];

export const hrOthersItems: NoVideoCasesItem[] = [
  {
    type: "msg",
    imgSrc: "/images/cases-pages/recruiment/soft-loft-person",
    titleKey: "others.softloft.title",
    textKey: "others.softloft.items",
  },
  {
    type: "case",
    keyPrefix: "others.softloft",
    logos: [{ src: "/images/clients-logos/soft-loft", width: 190, height: 45 }],
  },
  {
    type: "msg",
    imgSrc: "/images/cases-pages/recruiment/soft-loft-person",
    titleKey: "others.softloftReview.title",
    textKey: "others.mobReview.items-first",
    className: ["not-list"],
  },
  {
    type: "msg",
    imgSrc: "/images/cases-pages/recruiment/soft-loft-person",
    titleKey: "others.softloftReview.title",
    textKey: "others.mobReview.items-second",
    className: ["not-list", "gap"],
  },
];
