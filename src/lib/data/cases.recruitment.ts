import type { CasesHeroConfig } from "../types/cases.hero.types";
import type { CasesItem, NoVideoCasesItem } from "../types/cases.recruitment";

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

export const itItems: CasesItem[] = [
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

export const webItems: CasesItem[] = [
  {
    type: "video",
    props: {
      youtubeUrl: "https://youtu.be/_5POb89UuGk",
      author: "web.vitaliyMartynenko.name",
      position: "web.vitaliyMartynenko.position",
    },
  },
  {
    type: "case",
    keyPrefix: "web.vitaliyMartynenko",
    logos: [{ src: "/images/clients-logos/crypto", width: 175, height: 55 }],
  },

  {
    type: "msg",
    imgSrc: "/images/cases-pages/recruiment/solus-person",
    titleKey: "web.solus.title",
    textKey: "web.solus.items",
    className: ["not-list", "gap"],
  },
  {
    type: "case",
    keyPrefix: "web.solus",
    logos: [{ src: "/images/clients-logos/solus", width: 115, height: 40 }],
  },

  {
    type: "msg",
    imgSrc: "/images/cases-pages/recruiment/majinx-person",
    titleKey: "web.majinx.title",
    textKey: "web.majinx.items",
    className: ["not-list", "gap"],
  },
  {
    type: "case",
    keyPrefix: "web.majinx",
    logos: [{ src: "/images/clients-logos/majinx", width: 160, height: 40 }],
  },

  {
    type: "msg",
    imgSrc: "/images/cases-pages/recruiment/nda-person-web",
    titleKey: "web.ndaSales.title",
    textKey: "web.ndaSales.items",
  },
  {
    type: "case",
    keyPrefix: "web.ndaSales",
    logos: [{ src: "/images/clients-logos/nda", width: 95, height: 40 }],
  },

  {
    type: "msg",
    imgSrc: "/images/cases-pages/recruiment/monolith-person",
    titleKey: "web.monolith.title",
    textKey: "web.monolith.items",
    className: ["not-list", "gap"],
  },
  {
    type: "case",
    keyPrefix: "web.monolith",
    logos: [{ src: "/images/clients-logos/monolith", width: 190, height: 25 }],
  },

  {
    type: "msg",
    imgSrc: "/images/cases-pages/recruiment/nda-person-bdm",
    titleKey: "web.ndaBdm.title",
    textKey: "web.ndaBdm.items",
    className: ["not-list", "gap"],
  },
  {
    type: "case",
    keyPrefix: "web.ndaBdm",
    logos: [{ src: "/images/clients-logos/nda", width: 95, height: 40 }],
  },

  {
    type: "msg",
    imgSrc: "/images/cases-pages/recruiment/nda-person-multi",
    titleKey: "web.ndaMulti.title",
    textKey: "web.ndaMulti.items",
    className: ["not-list", "gap"],
  },
  {
    type: "case",
    keyPrefix: "web.ndaMulti",
    logos: [{ src: "/images/clients-logos/nda", width: 95, height: 40 }],
  },

  {
    type: "video",
    props: {
      youtubeUrl: "https://youtube.com/shorts/myU6HcqN5iM?feature=share",
      author: "web.bohdanBushe.name",
      position: "web.bohdanBushe.position",
    },
  },
  {
    type: "case",
    keyPrefix: "web.bohdanBushe",
    logos: [{ src: "/images/clients-logos/ci-crypto", width: 195, height: 55 }],
  },
];

export const marketingItems: CasesItem[] = [
  {
    type: "video",
    props: {
      youtubeUrl: "https://youtu.be/xHpPy2hAaZI",
      posterOverride: "/images/youtube-posters/andriy-jmil-youtube-poster.webp",
      author: "marketing.andriyJmil.name",
      position: "marketing.andriyJmil.position",
    },
  },
  {
    type: "case",
    logos: [
      { src: "/images/clients-logos/cbet", width: 55, height: 45 },
      { src: "/images/clients-logos/spendy", width: 105, height: 15 },
    ],
    keyPrefix: "marketing.andriyJmil",
  },
  {
    type: "msg",
    titleKey: "marketing.frgmnt.title",
    textKey: "marketing.frgmnt.items",
    imgSrc: "/images/cases-pages/recruiment/frgmnt-person",
    className: ["not-list", "gap"],
  },
  {
    type: "case",
    logos: [{ src: "/images/clients-logos/frgmnt", width: 140, height: 40 }],
    keyPrefix: "marketing.frgmnt",
  },
];

export const fintechItems: NoVideoCasesItem[] = [
  {
    type: "msg",
    titleKey: "fintech.fintechNda.title",
    textKey: "fintech.fintechNda.items",
    imgSrc: "/images/cases-pages/recruiment/fintech-nda-person",
  },
  {
    type: "case",
    keyPrefix: "fintech.fintechNda",
    className: "fintech--nda",
    logoTitle: "fintech.fintechNda.logo",
  },
  {
    type: "msg",
    titleKey: "fintech.ndaTech.title",
    textKey: "fintech.ndaTech.items",
    imgSrc: "/images/cases-pages/recruiment/nda-tech-person",
    className: ["not-list"],
  },
  {
    type: "case",
    keyPrefix: "fintech.ndaTech",
    logos: [{ src: "/images/clients-logos/nda", width: 95, height: 40 }],
  },
];

export const igamingItems: NoVideoCasesItem[] = [
  {
    type: "msg",
    titleKey: "igaming.hundredFtd.title",
    textKey: "igaming.hundredFtd.items",
    imgSrc: "/images/cases-pages/recruiment/hundred-ftd-person",
    className: ["not-list", "gap"],
  },
  {
    type: "case",
    keyPrefix: "igaming.hundredFtd",
    className: "hundredFtd",
    logoTitle: "igaming.hundredFtd.logo",
  },
  {
    type: "msg",
    titleKey: "igaming.ndaRecruiter.title",
    textKey: "igaming.ndaRecruiter.items",
    imgSrc: "/images/cases-pages/recruiment/nda-recruiter-person",
    className: ["not-list", "gap"],
  },
  {
    type: "case",
    keyPrefix: "igaming.ndaRecruiter",
    logos: [{ src: "/images/clients-logos/nda", width: 95, height: 40 }],
  },
  {
    type: "msg",
    titleKey: "igaming.flint.title",
    textKey: "igaming.flint.items",
    imgSrc: "/images/cases-pages/recruiment/flint-person",
    className: ["not-list", "gap"],
  },
  {
    type: "case",
    keyPrefix: "igaming.flint",
    logos: [{ src: "/images/clients-logos/flint", width: 115, height: 45 }],
  },
  {
    type: "msg",
    titleKey: "igaming.gambeat.title",
    textKey: "igaming.gambeat.items",
    imgSrc: "/images/cases-pages/recruiment/gambeat-person",
    className: ["not-list", "gap"],
  },
  {
    type: "case",
    keyPrefix: "igaming.gambeat",
    logos: [{ src: "/images/clients-logos/gambeat", width: 190, height: 40 }],
  },
];
