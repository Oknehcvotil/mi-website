import type { ServicesHeroContent } from "../types/servicesHero.type";

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
