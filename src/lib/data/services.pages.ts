import type { ServicesHeroContent } from "../types/servicesHero.type";
import type { Plan, TeamContactConfig } from "../types/servicesPages.type";

export const forClientsHeroContent: ServicesHeroContent = {
  translationNs: "servicesForClients",
  className: "for-clients",
  id: "recruiting",
  subtitleKey: "hero.subtitle",
  sectionTitleKey: "hero.sectionTitle",
  leadKey: "hero.lead",
  nav: [
    { hash: "#recruiting", labelKey: "hero.nav.recruiting" },
    { hash: "#hr", labelKey: "hero.nav.hr" },
    { hash: "#psychology", labelKey: "hero.nav.psychology" },
    { hash: "#constructor", labelKey: "hero.nav.constructor" },
  ],
  image: {
    basePath: "/images/mob/services-pages/services-hero-for-clients",
    altKey: "hero.imgAlt",
  },
};

export const forCandidatesHeroContent: ServicesHeroContent = {
  translationNs: "servicesForCandidates",
  className: "for-candidates",
  subtitleKey: "hero.subtitle",
  sectionTitleKey: "hero.sectionTitle",
  leadKey: "hero.lead",
  image: {
    basePath: "/images/mob/services-pages/services-hero-for-candidates",
    altKey: "hero.imgAlt",
  },
};

export const forPHDHeroContent: ServicesHeroContent = {
  translationNs: "servicesPHD",
  className: "PHD",
  sectionTitleKey: "hero.sectionTitle",
  leadKey: "hero.lead",
  image: {
    basePath: "/images/mob/services-pages/services-hero-phd",
    altKey: "hero.imgAlt",
  },
};

export const forClientsPlan: Plan[] = [
  {
    translationNs: "servicesForClients",
    titleKey: "plans.smart.title",
    topSale: true,
    features: [
      { key: "features.idealProfile" },
      { key: "features.deepScreenInterview" },
      { key: "features.headhunting" },
      { key: "features.psychPortrait" },
      { key: "features.coordinateInterviewOffer" },
      { key: "features.onboardingGuide14" },
      { key: "features.guarantee45" },
    ],
    className: "top--sale for-clients",
  },
  {
    translationNs: "servicesForClients",
    titleKey: "plans.flex.title",
    features: [
      { key: "features.formVacancyProfile" },
      { key: "features.fastSearch" },
      { key: "features.basicCheck" },
      { key: "features.shortReport" },
      { key: "features.coordinateInterviewOnDemand" },
      { key: "features.guarantee30" },
      { key: "features.psychPortrait", disabled: true, className: "disabled" },
      {
        key: "features.onboardingGuide14",
        disabled: true,
        className: "disabled",
      },
      {
        key: "features.deepScreenInterview",
        disabled: true,
        className: "disabled",
      },
      { key: "features.headhunting", disabled: true, className: "disabled" },
    ],
    className: "plan--flex for-clients",
  },
  {
    translationNs: "servicesForClients",
    titleKey: "plans.pro.title",
    features: [
      { key: "features.cultureValuesAnalysis" },
      { key: "features.headhunting" },
      { key: "features.brandDNAProfile" },
      { key: "features.psychPortraitMotivation" },
      { key: "features.vacancyBranding" },
      { key: "features.targetedPosting" },
      { key: "features.analyticsReport" },
      { key: "features.motivationSystemOrImprovements" },
      { key: "features.hrSupportProbation" },
      { key: "features.onboardingSessions30d" },
      { key: "features.guarantee90" },
    ],
    className: "plan--pro for-clients",
  },
];

export const PHDPlans: Plan[] = [
  {
    translationNs: "servicesPHD",
    titleKey: "plans.pOne.title",
    features: [
      { key: "plans.pTwo.features.0" },
      { key: "plans.pTwo.features.1" },
      { key: "plans.pTwo.features.2" },
      { key: "plans.pTwo.features.3" },
      { key: "plans.pTwo.features.4" },
      { key: "plans.pTwo.features.5" },
      { key: "plans.pTwo.features.6" },
      { key: "plans.pTwo.features.7" },
    ],
    topSale: true,
    className: "top--sale",
  },
  {
    translationNs: "servicesPHD",
    titleKey: "plans.pTwo.title",
    features: [
      { key: "plans.pOne.features.0" },
      { key: "plans.pOne.features.1" },
      { key: "plans.pOne.features.2" },
      { key: "plans.pOne.features.3" },
    ],
    className: "top--one",
  },
  {
    translationNs: "servicesPHD",
    titleKey: "plans.pThree.title",
    features: [
      { key: "plans.pThree.features.0" },
      { key: "plans.pThree.features.1" },
      { key: "plans.pThree.features.2" },
      { key: "plans.pThree.features.3" },
      { key: "plans.pThree.features.4" },
      { key: "plans.pThree.features.5" },
      { key: "plans.pThree.features.6" },
      { key: "plans.pThree.features.7" },
      { key: "plans.pThree.features.8" },
      { key: "plans.pThree.features.9" },
      { key: "plans.pThree.features.10" },
      { key: "plans.pThree.features.11" },
    ],
    className: "plan--three",
  },
  {
    translationNs: "servicesPHD",
    titleKey: "plans.pFour.title",
    features: [
      { key: "plans.pFour.features.0" },
      { key: "plans.pFour.features.1" },
      { key: "plans.pFour.features.2" },
      { key: "plans.pFour.features.3" },
      { key: "plans.pFour.features.4" },
      { key: "plans.pFour.features.5" },
      { key: "plans.pFour.features.6" },
      { key: "plans.pFour.features.7" },
      { key: "plans.pFour.features.8" },
      { key: "plans.pFour.features.9" },
    ],
    className: "plan--pFour",
  },
];

export const forCandidatesPlans: Plan[] = [
  {
    translationNs: "servicesForCandidates",
    titleKey: "plans.standard.title",
    features: [
      { key: "plans.standard.features.0" },
      { key: "plans.standard.features.1" },
      { key: "plans.standard.features.2" },
      { key: "plans.standard.features.3" },
      { key: "plans.standard.features.4" },
      {
        key: "plans.standard.features.5",
        disabled: true,
        className: "disabled",
      },
      {
        key: "plans.standard.features.6",
        disabled: true,
        className: "disabled",
      },
    ],
    topSale: true,
    className: "top--sale",
  },
  {
    translationNs: "servicesForCandidates",
    titleKey: "plans.basic.title",
    features: [
      { key: "plans.basic.features.0" },
      { key: "plans.basic.features.1" },
      { key: "plans.basic.features.2" },
      { key: "plans.basic.features.3" },
      { key: "plans.basic.features.4" },
      { key: "plans.basic.features.5", disabled: true, className: "disabled" },
      { key: "plans.basic.features.6", disabled: true, className: "disabled" },
    ],
    className: "plan--basic",
  },
  {
    translationNs: "servicesForCandidates",
    titleKey: "plans.pro.title",
    features: [
      { key: "plans.pro.features.0" },
      { key: "plans.pro.features.1" },
      { key: "plans.pro.features.2" },
      { key: "plans.pro.features.3" },
      { key: "plans.pro.features.4" },
      { key: "plans.pro.features.5" },
      { key: "plans.pro.features.6" },
    ],
    className: "plan--pro",
  },
];

export const additionalHrServices = [
  { key: "hr.srv.audit" },
  { key: "hr.srv.onboarding" },
  { key: "hr.srv.hrdRecruiter" },
  { key: "hr.srv.hrBrand" },
  { key: "hr.srv.attestation" },
  { key: "hr.srv.roleMaps" },
  { key: "hr.srv.hrStrategy" },
  { key: "hr.srv.ceoClevel" },
  { key: "hr.srv.corpCulture" },
  { key: "hr.srv.motivation" },
] as const;

export const teamForClientsConfig: TeamContactConfig = {
  translationNs: "servicesForClients",
  images: {
    leftImg: "/images/mob/team/irina-ceo",
    rightImg: "/images/mob/team/tatyana-human-resourses",
    leftImgAlt: "Irina portrait",
    rightImgAlt: "Tetyana portrait",
    leftClassName: "irina",
    rightClassName: "tatyana",
  },
};

export const teamForCandidatesConfig: TeamContactConfig = {
  className: "for-candidates",
  translationNs: "servicesForCandidates",
  images: {
    leftImg: "/images/mob/team/daria-recruiting",
    rightImg: "/images/mob/team/tatyana-human-resourses",
    leftImgAlt: "Daria portrait",
    rightImgAlt: "Tatiana portrait",
    leftClassName: "daria",
    rightClassName: "tatyana-height",
  },
};

export const constructorItems = [
  {
    key: "constructor.recruitment",
    className: "recruitment--item",
    hasTrans: true,
  },
  { key: "constructor.hrConsulting", className: "hr--item" },
  { key: "constructor.businessPsychology", className: "psychology-item" },
];


export const candidatesCasescards = [
  {
    img: "/images/mob/services-pages/resume-before",
    titleKey: "cases.before.cardTitle",
    pointsKey: "cases.before.points",
    altKey: "cases.before.alt",
  },
  {
    img: "/images/mob/services-pages/resume-after",
    titleKey: "cases.after.cardTitle",
    pointsKey: "cases.after.points",
    altKey: "cases.after.alt",
  },
] as const;

export const zeroToProItems = [
  { key: "zero.items.0", icon: "plus-square", width: 46, height: 45 },
  { key: "zero.items.1", icon: "dollar-up", width: 47, height: 44 },
  { key: "zero.items.2", icon: "globe-remote", width: 45, height: 45 },
  { key: "zero.items.3", icon: "briefcase-heart", width: 45, height: 45 },
];

export const upskillItems = [
  { key: "upskill.items.0", icon: "target-focus", width: 43, height: 47 },
  { key: "upskill.items.1", icon: "structure-tools", width: 45, height: 45 },
  { key: "upskill.items.2", icon: "chart-up", width: 45, height: 49 },
  { key: "upskill.items.3", icon: "scale-grow", width: 49, height: 49 },
];