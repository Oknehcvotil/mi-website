import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./resources";

export const SUPPORTED_LANGS = ["en", "ua"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

const STORAGE_KEY = "lang";

const normalize = (code?: string): Lang | null => {
  if (!code) return null;
  const c = code.toLowerCase().slice(0, 2);
  const map: Record<string, Lang> = { ua: "ua", en: "en" };
  return map[c] ?? null;
};

const getInitialLang = (): Lang => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && normalize(saved)) return normalize(saved)!;
  const browser = navigator.language;
  return normalize(browser) ?? "en";
};

i18n.use(initReactI18next).init({
  lng: getInitialLang?.() ?? "en",
  fallbackLng: "en",
  resources,
  defaultNS: "common",
  ns: Object.keys(resources.en), 
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  const norm = normalize(lng) ?? "en";
  localStorage.setItem(STORAGE_KEY, norm);
});

export default i18n;
