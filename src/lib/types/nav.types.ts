export type SectionItem = { to: string; labelKey: string };

export type Section = {
  id: "services" | "cases";
  titleKey: string;
  basePath: string;
  width?: string;
  justify?: string;
  items: SectionItem[];
};
