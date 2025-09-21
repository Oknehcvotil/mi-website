import type {
  Country,
  CountryId,
  PinPx,
  MapKey,
  MapDef,
  ClientLogo,
} from "../types/geo.types";

export const COUNTRY_IDS: CountryId[] = [
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
];

export const COUNTRIES: Country[] = COUNTRY_IDS.map((id) => ({ id }));

export const MAPS: Record<MapKey, MapDef> = {
  mob: { src: "/images/mob/map-mob.webp", width: 390, height: 225 },
  tab: { src: "/images/tab/map-tab.webp", width: 530, height: 300 },
  desk: { src: "/images/map-desc.webp", width: 1365, height: 790 },
} as const;

/** ПИКСЕЛИ относительно соответствующего базового размера карты выше */
export const POINTS_PX: Record<MapKey, Record<CountryId, PinPx>> = {
  mob: {
    ukraine: { x: 202, y: 52 },
    britain: { x: 167, y: 30 },
    canada: { x: 60, y: 32 },
    latvia: { x: 193, y: 29 },
    uae: { x: 115, y: 132 },
    poland: { x: 199, y: 45 },
    portugal: { x: 154, y: 51 },
    turkey: { x: 85, y: 122 },
    usa: { x: 49, y: 62 },
    hungary: { x: 191, y: 39 },
    croatia: { x: 186, y: 43 },
    czech: { x: 183, y: 40 },
    montenegro: { x: 186, y: 54 },
    switzerland: { x: 175, y: 43 },
  },
  tab: {
    ukraine: { x: 56, y: 38 },
    britain: { x: 46, y: 30 },
    canada: { x: 19, y: 30 },
    latvia: { x: 53, y: 29 },
    uae: { x: 63, y: 48 },
    poland: { x: 55, y: 35 },
    portugal: { x: 44, y: 38 },
    turkey: { x: 58, y: 44 },
    usa: { x: 15, y: 42 },
    hungary: { x: 54, y: 33 },
    croatia: { x: 52, y: 35 },
    czech: { x: 50, y: 32 },
    montenegro: { x: 53, y: 39 },
    switzerland: { x: 50, y: 34 },
  },
  desk: {
    ukraine: { x: 56, y: 38 },
    britain: { x: 46, y: 30 },
    canada: { x: 19, y: 30 },
    latvia: { x: 53, y: 29 },
    uae: { x: 63, y: 48 },
    poland: { x: 55, y: 35 },
    portugal: { x: 44, y: 38 },
    turkey: { x: 58, y: 44 },
    usa: { x: 15, y: 42 },
    hungary: { x: 54, y: 33 },
    croatia: { x: 52, y: 35 },
    czech: { x: 50, y: 32 },
    montenegro: { x: 53, y: 39 },
    switzerland: { x: 50, y: 34 },
  },
};

export const FLAG_SRC: Record<CountryId, string> = {
  ukraine: "ukraine-flag",
  britain: "britain-flag",
  canada: "canada-flag",
  latvia: "latvia-flag",
  uae: "uae-flag",
  poland: "poland-flag",
  portugal: "portugal-flag",
  turkey: "turkey-flag",
  usa: "usa-flag",
  hungary: "hungary-flag",
  croatia: "croatia-flag",
  czech: "czech-flag",
  montenegro: "montenegro-flag",
  switzerland: "switzerland-flag",
};

export const CLIENTS: Record<CountryId, ClientLogo> = {
  ukraine: { src: "ukraine-logo", alt: "Nova Poshta" },
  britain: { src: "britain-logo", alt: "Lexima" },
  canada: {
    src: "canada-logo",
    alt: "Exilion Technologies",
  },
  latvia: { src: "latvia-logo", alt: "Nauda" },
  uae: { src: "uae-logo", alt: "Monolith" },
  poland: { src: "poland-logo", alt: "Soft Craft" },
  portugal: { src: "portugal-logo", alt: "8FLINT" },
  turkey: { src: "turkey-hungary-logo", alt: "NDA" },
  usa: { src: "usa-logo", alt: "Dark Horse Solutions" },
  hungary: { src: "turkey-hungary-logo", alt: "NDA" },
  croatia: { src: "croatia-logo", alt: "NDA" },
  czech: { src: "czech-logo", alt: "SO" },
  montenegro: { src: "montenegro-logo", alt: "EVEREST" },
  switzerland: {
    src: "switzerland-logo",
    alt: "369 CAPITAL",
  },
};

export const COUNTRY_POPUP_CLASS: Partial<Record<CountryId, string>> = {
  turkey: "popup--turkey",
  uae: "popup--uae",
};
