import en_common from "../locales/en/common.json";
import en_header from "../locales/en/header.json";
import en_home from "../locales/en/home.json";
import en_reviews from "../locales/en/reviews.json";
import en_contacts from "../locales/en/contacts.json";
import en_servicesForClients from "../locales/en/servicesForClients.json";
import en_servicesForCandidates from "../locales/en/servicesForCandidates.json";
import en_servicesPHD from "../locales/en/servicesPHD.json";
import en_casesRecruitment from "../locales/en/casesRecruitment.json";

import ua_common from "../locales/ua/common.json";
import ua_header from "../locales/ua/header.json";
import ua_home from "../locales/ua/home.json";
import ua_reviews from "../locales/ua/reviews.json";
import ua_contacts from "../locales/ua/contacts.json";
import ua_servicesForClients from "../locales/ua/servicesForClients.json";
import ua_servicesForCandidates from "../locales/ua/servicesForCandidates.json";
import ua_servicesPHD from "../locales/ua/servicesPHD.json";
import ua_casesRecruitment from "../locales/ua/casesRecruitment.json";

export const resources = {
  en: {
    common: en_common,
    header: en_header,
    home: en_home,
    reviews: en_reviews,
    contacts: en_contacts,
    servicesForClients: en_servicesForClients,
    servicesForCandidates: en_servicesForCandidates,
    servicesPHD: en_servicesPHD,
    casesRecruitment: en_casesRecruitment,
  },
  ua: {
    common: ua_common,
    header: ua_header,
    home: ua_home,
    reviews: ua_reviews,
    contacts: ua_contacts,
    servicesForClients: ua_servicesForClients,
    servicesForCandidates: ua_servicesForCandidates,
    servicesPHD: ua_servicesPHD,
    casesRecruitment: ua_casesRecruitment,
  },
} as const;

export const NAMESPACES = [
  "common",
  "header",
  "home",
  "reviews",
  "contacts",
  "servicesForClients",
  "servicesForCandidates",
  "servicesPHD",
  "casesRecruitment",
] as const;
