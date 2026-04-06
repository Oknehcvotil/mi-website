export type NavItem = {
  hash: string;
  labelKey: string;
};

type HeroImage = {
  basePath: string;
  altKey?: string;
  ext?: "webp" | "png" | "jpg" | "jpeg";
};

export type CasesHeroConfig = {
  translationNs: string;
  image: HeroImage;
  nav?: NavItem[];
  id?: string;
  className?: string;
};
