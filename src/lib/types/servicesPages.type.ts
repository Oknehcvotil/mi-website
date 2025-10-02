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
