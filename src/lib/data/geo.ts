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
  desk: { src: "/images/desktop/map-desktop.webp", width: 1365, height: 790 },
} as const;

export const POINTS_PX: Record<MapKey, Record<CountryId, PinPx>> = {
  mob: {
    ukraine: { x: 199, y: 54 },
    britain: { x: 161, y: 33 },
    canada: { x: 57, y: 34 },
    latvia: { x: 189, y: 32 },
    uae: { x: 115, y: 132 },
    poland: { x: 195, y: 48 },
    portugal: { x: 151, y: 54 },
    turkey: { x: 72, y: 121 },
    usa: { x: 45, y: 64 },
    hungary: { x: 189, y: 41 },
    croatia: { x: 183, y: 45 },
    czech: { x: 179, y: 41 },
    montenegro: { x: 184, y: 55 },
    switzerland: { x: 173, y: 45 },
  },
  tab: {
    ukraine: { x: 293, y: 62 },
    britain: { x: 250, y: 38 },
    canada: { x: 133, y: 39 },
    latvia: { x: 282, y: 35 },
    uae: { x: 213, y: 144 },
    poland: { x: 289, y: 54 },
    portugal: { x: 239, y: 62 },
    turkey: { x: 168, y: 133 },
    usa: { x: 119, y: 71 },
    hungary: { x: 283, y: 47 },
    croatia: { x: 276, y: 51 },
    czech: { x: 271, y: 47 },
    montenegro: { x: 277, y: 63 },
    switzerland: { x: 265, y: 52 },
  },
  desk: {
    ukraine: { x: 724, y: 186 },
    britain: { x: 613, y: 117 },
    canada: { x: 286, y: 117 },
    latvia: { x: 695, y: 113 },
    uae: { x: 821, y: 262 },
    poland: { x: 715, y: 162 },
    portugal: { x: 587, y: 184 },
    turkey: { x: 754, y: 229 },
    usa: { x: 245, y: 213 },
    hungary: { x: 698, y: 142 },
    croatia: { x: 678, y: 155 },
    czech: { x: 660, y: 144 },
    montenegro: { x: 683, y: 186 },
    switzerland: { x: 651, y: 157 },
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
