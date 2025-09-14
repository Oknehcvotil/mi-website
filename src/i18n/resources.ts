import en_common from "../locales/en/common.json";
import en_header from "../locales/en/header.json";
import en_home from "../locales/en/home.json";

import ua_common from "../locales/ua/common.json";
import ua_header from "../locales/ua/header.json";
import ua_home from "../locales/ua/home.json";

export const resources = {
  en: {
    common: en_common,
    header: en_header,
    home: en_home,
  },
  ua: {
    common: ua_common,
    header: ua_header,
    home: ua_home,
  },
} as const;

export const NAMESPACES = ["common", "header", "home"] as const;