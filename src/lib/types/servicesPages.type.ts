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
  leftImg: string;
  rightImg: string;
  leftImgAlt?: string;
  rightImgAlt?: string;
  leftClassName?: string;
  rightClassName?: string;
};

export type TeamContactConfig = {
  id?: string;
  translationNs: string;
  images: TeamContactImages;
};
