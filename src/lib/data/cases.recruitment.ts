import type { CasesHeroConfig } from "../types/cases.hero.types";
import type { ItItem } from "../types/cases.recruitment";

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

export const itItems: ItItem[] = [
  {
    type: "video",
    props: {
      youtubeUrl: "https://youtu.be/-4jIAKCsQYQ ",
      translationNs: "casesRecruitment",
      author: "it.lyudmilaSheludko.name",
      posterOverride: "/images/youtube-posters/lyudmila-youtube-poster.webp",
    },
  },
  {
    type: "case",
    keyPrefix: "it.lyudmilaSheludko",
    logos: [{ src: "/images/clients-logos/medstar", width: 235, height: 35 }],
  },
  {
    type: "msg",
    imgSrc: "/images/cases-pages/recruiment/nauda-person",
    titleKey: "it.nauda.title",
    textKey: "it.nauda.items",
    className: ["not-list", "gap"],
  },
  {
    type: "case",
    keyPrefix: "it.nauda",
    logos: [{ src: "/images/clients-logos/nauda", width: 145, height: 35 }],
  },
  {
    type: "msg",
    imgSrc: "/images/cases-pages/recruiment/option-one-person",
    titleKey: "it.optionOne.title",
    textKey: "it.optionOne.items",
  },
  {
    type: "case",
    keyPrefix: "it.optionOne",
    logos: [
      { src: "/images/clients-logos/option-one", width: 140, height: 50 },
    ],
  },
  {
    type: "msg",
    imgSrc: "/images/cases-pages/recruiment/soft-kraft-person",
    titleKey: "it.softKraft.title",
    textKey: "it.softKraft.items",
  },
  {
    type: "case",
    keyPrefix: "it.softKraft",
    logos: [
      { src: "/images/clients-logos/soft-kraft", width: 210, height: 35 },
    ],
  },
  {
    type: "msg",
    imgSrc: "/images/cases-pages/recruiment/kitrum-person",
    titleKey: "it.kitrum.title",
    textKey: "it.kitrum.items",
    className: ["not-list", "gap"],
  },
  {
    type: "case",
    keyPrefix: "it.kitrum",
    logos: [{ src: "/images/clients-logos/kitrum", width: 135, height: 40 }],
  },
  {
    type: "msg",
    imgSrc: "/images/cases-pages/recruiment/nuggclub-person",
    titleKey: "it.nuggClub.title",
    textKey: "it.nuggClub.items",
    className: ["not-list", "gap"],
  },
  {
    type: "case",
    keyPrefix: "it.nuggClub",
    logos: [{ src: "/images/clients-logos/nuggclub", width: 140, height: 43 }],
  },
  {
    type: "msg",
    imgSrc: "/images/cases-pages/recruiment/nda-person",
    titleKey: "it.nda.title",
    textKey: "it.nda.items",
    className: ["not-list", "gap"],
  },
  {
    type: "case",
    keyPrefix: "it.nda",
    logos: [{ src: "/images/clients-logos/nda", width: 95, height: 40 }],
  },
];
