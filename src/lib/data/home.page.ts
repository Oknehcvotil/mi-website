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
  "husky",
  "nauda",
  "aroma",
  "flint",
  "crypto",
];

export const servicesLinks = [
  "/services/for-clients",
  "/services/for-clients#hr",
  "/services/for-clients",
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
        value: "6+",
        labelKey: "teamStats.yearsInBiz",
        className: "badge-left",
      },
      {
        value: "15+",
        labelKey: "teamStats.specialists",
        className: "badge-right",
      },
    ],
  },
  {
    id: "tatyana",
    name: "Tatyana",
    role: "Chief Human Resources Officer",
    imgBase: "tatyana-human-resourses",
    stats: [{ value: "9+", labelKey: "teamStats.yearsInHR" }],
  },
  {
    id: "maria",
    name: "Maria",
    role: "Сhief Customer Officer",
    imgBase: "maria-customer",
    stats: [{ value: "10+", labelKey: "teamStats.countries" }],
  },
  {
    id: "anastasia",
    name: "Anastasia",
    role: "Сhief Operation Officer",
    imgBase: "anastasia-operation",
    stats: [{ value: "98%", labelKey: "teamStats.clientLevel" }],
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
  },
];

export const casesReviewsSlides = [
  {
    type: "video" as const,
    youtubeUrl: "https://youtu.be/_5POb89UuGk",
    author: "vitaliyMartynenko.name",
    position: "vitaliyMartynenko.position",
  },
  {
    type: "info" as const,
    logos: [{ src: "/images/clients-logos/crypto", width: 175, height: 55 }],
    keyPrefix: "vitaliyMartynenko",
  },
  {
    type: "video" as const,
    youtubeUrl: "https://youtu.be/xHpPy2hAaZI",
    author: "andriyJmil.name",
    position: "andriyJmil.position",
  },
  {
    type: "info" as const,
    logos: [
      { src: "/images/clients-logos/cbet", width: 55, height: 45 },
      { src: "/images/clients-logos/spendy", width: 105, height: 15 },
    ],
    keyPrefix: "andriyJmil",
  },
  {
    type: "video" as const,
    youtubeUrl: "https://youtube.com/shorts/myU6HcqN5iM?feature=share",
    author: "bohdanBushe.name",
    position: "bohdanBushe.position",
  },
  {
    type: "info" as const,
    logos: [{ src: "/images/clients-logos/ci-crypto", width: 195, height: 55 }],
    keyPrefix: "bohdanBushe",
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
