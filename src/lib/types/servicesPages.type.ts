type Feature = {
  key: string;
  className?: string;
  disabled?: boolean;
};

export type Plan = {
  id?: string;
  translationNs: string;
  titleKey: string;
  topSale?: boolean;
  features: Feature[];
  className?: string;
};

export type TeamContactImages = {
  personImg: string;
  personAlt?: string;
  personClassName?: string;
};

export type TeamContactConfig = {
  className?: string;
  id?: string;
  translationNs: string;
  image: TeamContactImages;
};
