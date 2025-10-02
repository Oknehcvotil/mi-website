import type { ServicesHeroContent } from "../types/servicesHero.type";
import type { Plan } from "../types/servicesPages.type";

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
    titleKey: "plans.full.title",
    topSale: true,
    features: [
      { key: "features.replace90" },
      { key: "features.jobProfile" },
      { key: "features.marketAnalysis" },
      { key: "features.screening" },
      { key: "features.onboarding" },
      { key: "features.jobOffer" },
      { key: "features.psychProfile" },
      { key: "features.clientInterview" },
    ],
    className: "top--sale",
  },
  {
    translationNs: "servicesForClients",
    titleKey: "plans.flex.title",
    features: [
      { key: "features.replace30" },
      { key: "features.jobProfile" },
      { key: "features.marketAnalysis" },
      { key: "features.screening" },
      { key: "features.jobOffer" },
      { key: "features.onboarding" },
      {
        key: "features.psychProfile",
        disabled: true,
        className: "disabled",
      },
      {
        key: "features.clientInterview",
        disabled: true,
        className: "disabled",
      },
    ],
    className: "plan--flex",
  },
  {
    translationNs: "servicesForClients",
    titleKey: "plans.sub.title",
    features: [
      { key: "features.jobProfile" },
      { key: "features.marketAnalysis" },
      { key: "features.screening" },
      { key: "features.psychProfile" },
      { key: "features.clientInterview" },
      { key: "features.jobOffer" },
      { key: "features.onboarding" },
      { key: "features.replace30", disabled: true, className: "disabled" },
    ],
    className: "plan--subs",
  },
  {
    translationNs: "servicesForClients",
    titleKey: "plans.additionally.title",
    features: [
      { key: "features.extendGuarantee" },
      { key: "features.motivationSystem" },
      { key: "features.onboardingAnalysis" },
      { key: "features.onboardingAdjustment" },
    ],
    className: "plan--dditionally",
  },
];

export const PHDPlans: Plan[] = [
  {
    translationNs: "servicesPHD",
    titleKey: "plans.pOne.title",
    features: [
      { key: "plans.pOne.features.0" },
      { key: "plans.pOne.features.1" },
      { key: "plans.pOne.features.2" },
      { key: "plans.pOne.features.3" },
      { key: "plans.pOne.features.4" },
    ],
    topSale: true,
    className: "top--one",
  },
  {
    translationNs: "servicesPHD",
    titleKey: "plans.pTwo.title",
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
