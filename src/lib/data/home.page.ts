export const advantagesCards = [
  {
    img: {
      mob: "lock",
      alt: "Експертиза",
    },
    title: "advantages.titles.0",
  },
  {
    img: {
      mob: "chat",
      alt: "Зіркові кандидати",
    },
    title: "advantages.titles.1",
  },
  {
    img: {
      mob: "setting",
      alt: "Формуємо цілі команди",
    },
    title: "advantages.titles.2",
  },
  {
    img: {
      mob: "home",
      alt: "HR-системи in-house",
    },
    title: "advantages.titles.3",
  },
];

export const statsCards = [
  {
    value: "2500+",
    label: "stats.labels.0",
  },
  {
    value: "70+",
    label: "stats.labels.1",
  },
  {
    value: "9+",
    label: "stats.labels.2",
  },
  {
    value: "10+",
    label: "stats.labels.3",
  },
];

export const clientsLogos = [
  "reelly",
  "kitrum",
  "forbes",
  "whitebit",
  "winner",
  "kse",
  "input",
  "cbet",
  "novaPoshta",
  "neatpeak",
  "nauda",
  "aroma",
  "flint",
  "crypto",
];

export const servicesLinks = [
  "/services/for-clients",
  "/services/for-clients#hr",
  "/services/for-clients#psychology",
  "/services/for-candidates",
  "/services/phd-recruiting",
];

export const teamCards = [
  {
    id: "irina",
    name: "Irina MI",
    role: "CEO&Founder",
    imgBase: "irina-ceo",
    stats: [
      {
        value: "10+",
        labelKey: "teamStats.yearsInBiz",
        className: "badge-left",
      },
      {
        value: "9+",
        labelKey: "teamStats.yearsInHR",
        className: "badge-right",
      },
    ],
    link: {
      id: "linkedin",
      href: "https://www.linkedin.com/in/iirinami/",
      labelKey: "socials.linkedin",
      width: "13px",
      height: "11px",
    },
  },
  {
    id: "anastasia",
    name: "Anastasia",
    role: "Сhief Operation Officer",
    imgBase: "anastasia-operation",
    stats: [{ value: "98%", labelKey: "teamStats.clientLevel" }],
    link: {
      id: "linkedin",
      href: "https://www.linkedin.com/in/anastasiia-belousova-7311b418b/",
      labelKey: "socials.linkedin",
      width: "13px",
      height: "11px",
    },
  },
  {
    id: "maria",
    name: "Maria",
    role: "Сhief Customer Officer",
    imgBase: "maria-customer",
    stats: [{ value: "10+", labelKey: "teamStats.countries" }],
    link: {
      id: "linkedin",
      href: "https://www.linkedin.com/in/maria-karpenko-7451b4183/",
      labelKey: "socials.linkedin",
      width: "13px",
      height: "11px",
    },
  },
  {
    id: "daria",
    name: "Daria",
    role: "Chief Recruiting Officer",
    imgBase: "daria-recruiting",
    stats: [
      {
        value: "2500+",
        labelKey: "teamStats.closedVacancy",
      },
    ],
    link: {
      id: "linkedin",
      href: "https://www.linkedin.com/in/daria-boitsova-2a13a7215/",
      labelKey: "socials.linkedin",
      width: "13px",
      height: "11px",
    },
  },
];

type CasesReviewsLogo = {
  src: string;
  width?: number;
  height?: number;
  deskWidth?: number;
  deskHeight?: number;
  alt?: string;
};

type CasesReviewVideoSlide = {
  type: "video";
  youtubeUrl: string;
  author: string;
  position?: string;
  posterOverride?: string;
};

type CasesReviewInfoSlide = {
  type: "info" | "case";
  logos?: CasesReviewsLogo[];
  logoTitle?: string;
  keyPrefix: string;
};

type CasesReviewMessageSlide = {
  type: "msg";
  titleKey: string;
  textKey: string;
  imgSrc: string;
  alt?: string;
  className?: string | string[];
};

export type CasesReviewsSlide =
  | CasesReviewVideoSlide
  | CasesReviewInfoSlide
  | CasesReviewMessageSlide;

export const casesReviewsSlides: CasesReviewsSlide[] = [
  {
    type: "video",
    youtubeUrl: "https://youtube.com/shorts/myU6HcqN5iM?feature=share",
    posterOverride: "/images/youtube-posters/bushe-youtube-poster.webp",
    author: "bohdanBushe.name",
    position: "bohdanBushe.position",
  },
  {
    type: "info",
    logos: [
      {
        src: "/images/clients-logos/ci-crypto",
        width: 195,
        height: 55,
        deskWidth: 405,
        deskHeight: 120,
      },
    ],
    keyPrefix: "bohdanBushe",
  },
  {
    type: "video",
    youtubeUrl: "https://youtu.be/_5POb89UuGk",
    author: "vitaliyMartynenko.name",
    position: "vitaliyMartynenko.position",
  },
  {
    type: "info",
    logos: [
      {
        src: "/images/clients-logos/crypto",
        width: 175,
        height: 55,
        deskWidth: 465,
        deskHeight: 140,
      },
    ],
    keyPrefix: "vitaliyMartynenko",
  },
  {
    type: "video",
    youtubeUrl: "https://youtu.be/xHpPy2hAaZI",
    posterOverride: "/images/youtube-posters/andriy-jmil-youtube-poster.webp",
    author: "andriyJmil.name",
    position: "andriyJmil.position",
  },
  {
    type: "info",
    logos: [
      {
        src: "/images/clients-logos/cbet",
        width: 55,
        height: 45,
        deskWidth: 170,
        deskHeight: 140,
      },
      {
        src: "/images/clients-logos/spendy",
        width: 105,
        height: 15,
        deskWidth: 320,
        deskHeight: 40,
      },
    ],
    keyPrefix: "andriyJmil",
  },
  {
    type: "video",
    youtubeUrl: "https://youtu.be/HVRd0PENPDY?is=aEnJJzvxw6T4DoI4",
    author: "annaKutsenko.name",
    position: "annaKutsenko.position",
  },
  {
    type: "info",
    logoTitle: "annaKutsenko.logo",
    keyPrefix: "annaKutsenko",
  },
  {
    type: "msg",
    imgSrc: "/images/cases-pages/recruiment/kitrum-person",
    titleKey: "kitrum.title",
    textKey: "kitrum.items",
    className: ["not-list", "gap"],
  },
  {
    type: "case",
    keyPrefix: "kitrum",
    logos: [{ src: "/images/clients-logos/kitrum", width: 135, height: 40 }],
  },
  {
    type: "msg",
    titleKey: "gambeat.title",
    textKey: "gambeat.items",
    imgSrc: "/images/cases-pages/recruiment/gambeat-person",
    className: ["not-list", "gap"],
  },
  {
    type: "case",
    keyPrefix: "gambeat",
    logos: [{ src: "/images/clients-logos/gambeat", width: 190, height: 40 }],
  },
  {
    type: "msg",
    imgSrc: "/images/cases-pages/recruiment/majinx-person",
    titleKey: "majinx.title",
    textKey: "majinx.items",
    className: ["not-list", "gap"],
  },
  {
    type: "case",
    keyPrefix: "majinx",
    logos: [{ src: "/images/clients-logos/majinx", width: 160, height: 40 }],
  },
];

export const homeLinks = [
  {
    name: "About",
    hash: "#about",
    label: "sectionLinks.aboutUs",
  },
  {
    name: "Clients",
    hash: "#clients",
    label: "sectionLinks.clients",
  },
  {
    name: "Services",
    hash: "#services",
    label: "sectionLinks.services",
  },
  {
    name: "Contact",
    hash: "#contact",
    label: "sectionLinks.contatcs",
  },
] as const;

export const servicesIcons = [
  {
    name: "icon-recruitmanet",
    mob: { w: 30, h: 30 },
    desk: { w: 66, h: 66 },
  },
  {
    name: "icon-hr",
    mob: { w: 32, h: 32 },
    desk: { w: 69, h: 69 },
  },
  {
    name: "icon-business",
    mob: { w: 30, h: 30 },
    desk: { w: 75, h: 75 },
  },
  {
    name: "icon-career",
    mob: { w: 30, h: 30 },
    desk: { w: 83, h: 83 },
  },
  {
    name: "icon-phd",
    mob: { w: 30, h: 30 },
    desk: { w: 84, h: 81 },
  },
] as const;

export const teamSocials = [
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/maria-karpenko-7451b4183/",
    labelKey: "socials.linkedin",
    width: "13px",
    height: "11px",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/maria-karpenko-7451b4183/",
    labelKey: "socials.linkedin",
    width: "13px",
    height: "11px",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/maria-karpenko-7451b4183/",
    labelKey: "socials.linkedin",
    width: "13px",
    height: "11px",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/maria-karpenko-7451b4183/",
    labelKey: "socials.linkedin",
    width: "13px",
    height: "11px",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/maria-karpenko-7451b4183/",
    labelKey: "socials.linkedin",
    width: "13px",
    height: "11px",
  },
] as const;
