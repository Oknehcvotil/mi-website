import { webpSet } from "../helpers/helpers";
import type { ClientAsset, CountryId } from "../types/home.types";

export const advantagesCards = [
  {
    img: {
      mob: "/icons/locks.svg",
      alt: "Експертиза",
    },
    title: "advantages.titles.0",
  },
  {
    img: {
      mob: "/icons/chats.svg",
      alt: "Зіркові кандидати",
    },
    title: "advantages.titles.1",
  },
  {
    img: {
      mob: "/icons/gears.svg",
      alt: "Формуємо цілі команди",
    },
    title: "advantages.titles.2",
  },
  {
    img: {
      mob: "/icons/letters.svg",
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

// MAP

export const COUNTRY_IDS = [
  "ukraine",
  "britain",
  "canada",
  "latvia",
  "uae",
  "poland",
  "portugal",
  "turkey",
  "usa",
  "hungary",
  "croatia",
  "czech",
  "montenegro",
  "switzerland",
] as const;

export const POINTS_MOB: Record<CountryId, { xPct: number; yPct: number }> = {
  ukraine: { xPct: 56, yPct: 38 },
  britain: { xPct: 46, yPct: 30 },
  canada: { xPct: 19, yPct: 30 },
  latvia: { xPct: 53, yPct: 29 },
  uae: { xPct: 63, yPct: 48 },
  poland: { xPct: 55, yPct: 35 },
  portugal: { xPct: 44, yPct: 38 },
  turkey: { xPct: 58, yPct: 44 },
  usa: { xPct: 15, yPct: 42 },
  hungary: { xPct: 54, yPct: 33 },
  croatia: { xPct: 52, yPct: 35 },
  czech: { xPct: 50, yPct: 32 },
  montenegro: { xPct: 53, yPct: 39 },
  switzerland: { xPct: 50, yPct: 34 },
};

export const flagSet = (id: CountryId) => webpSet(`/icons/flags/${id}-flag`);

export const CLIENT_ASSET: Partial<Record<CountryId, ClientAsset>> = {
  ukraine: { type: "webp", base: "/icons/clients/ukraine-client" },
  britain: { type: "svg", src: "/icons/clients/britain-client.svg" },
  canada: { type: "svg", src: "/icons/clients/canada-client.svg" },
  latvia: { type: "svg", src: "/icons/clients/latvia-client.svg" },
  uae: { type: "svg", src: "/icons/clients/uae-client.svg" },
  poland: { type: "svg", src: "/icons/clients/poland-client.svg" },
  portugal: { type: "svg", src: "/icons/clients/portugal-client.svg" },
  turkey: { type: "text", text: "NDA" },
  usa: { type: "svg", src: "/icons/clients/usa-client.svg" },
  hungary: { type: "text", text: "NDA" },
  croatia: { type: "webp", base: "/icons/clients/croatia-client" },
  czech: { type: "svg", src: "/icons/clients/czech-client.svg" },
  montenegro: { type: "webp", base: "/icons/clients/montenegro-client" },
  switzerland: { type: "svg", src: "/icons/clients/switzerland-client.svg" },
};

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
