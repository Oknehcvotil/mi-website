import en_common from "../locales/en/common.json";
import en_header from "../locales/en/header.json";
import en_home from "../locales/en/home.json";
import en_reviews from "../locales/en/reviews.json";
import en_contacts from "../locales/en/contacts.json";

import ua_common from "../locales/ua/common.json";
import ua_header from "../locales/ua/header.json";
import ua_home from "../locales/ua/home.json";
import ua_reviews from "../locales/ua/reviews.json";
import ua_contacts from "../locales/ua/contacts.json";

export const resources = {
  en: {
    common: en_common,
    header: en_header,
    home: en_home,
    reviews: en_reviews,
    contacts: en_contacts,
  },
  ua: {
    common: ua_common,
    header: ua_header,
    home: ua_home,
    reviews: ua_reviews,
    contacts: ua_contacts,
  },
} as const;

export const NAMESPACES = [
  "common",
  "header",
  "home",
  "reviews",
  "contacts",
] as const;
