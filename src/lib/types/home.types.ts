import { COUNTRY_IDS } from "../data/home.page";

export type CountryId = (typeof COUNTRY_IDS)[number];

export type ClientAsset =
  | { type: "webp"; base: string }
  | { type: "svg"; src: string }
  | { type: "text"; text: string };


 export type Country = { id: CountryId; label: string };