type Feature = {
  key: string;
  className?: string;
  disabled?: boolean;
};

export type Plan = {
  translationNs: string;
  titleKey: string;
  topSale?: boolean;
  features: Feature[];
  className?: string;
};


