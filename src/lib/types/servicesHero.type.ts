type HeroImage = {
  basePath: string;
  altKey: string;
  ext?: "webp" | "png" | "jpg" | "jpeg";
};

type HeroNavItem = {
  hash: string;
  labelKey: string;
};

export type ServicesHeroContent = {
  id?: string;
  className?: string;
  translationNs: string;
  topTitleKey?: string;
  subtitleKey?: string;
  sectionTitleKey: string;
  leadKey?: string;
  image: HeroImage;
  nav?: HeroNavItem[];
};

export type ServicesHeroProps = {
  content: ServicesHeroContent;
};

export type HeroNavProps = {
  translationNs: string;
  nav: HeroNavItem[];
};
