import type { homeLinks } from "../data/home.page";

export type SectionName = (typeof homeLinks)[number]["name"] | "Footer";
