import type { Easing, Variants } from "framer-motion";

export const easeIn: Easing = [0.22, 1, 0.36, 1];

export const geographySectionVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.24,
      ease: easeIn,
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

export const geographyTitleVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: easeIn,
    },
  },
};

export const geographyContentVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.12,
      delayChildren: 0.04,
    },
  },
};

export const geographySelectorVariants: Variants = {
  hidden: { opacity: 0, x: -18, y: 8 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.38,
      ease: easeIn,
      when: "beforeChildren",
      staggerChildren: 0.04,
    },
  },
};

export const geographyCountriesListVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.028,
      delayChildren: 0.05,
    },
  },
};

export const geographyCountryItemVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.28,
      ease: easeIn,
    },
  },
};

export const geographyMapVariants: Variants = {
  hidden: { opacity: 0, x: 20, y: 6 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.26,
      ease: easeIn,
      when: "beforeChildren",
      delayChildren: 0.03,
    },
  },
};

export const geographyMapImageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.985, filter: "blur(4px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.28,
      ease: easeIn,
    },
  },
};

export const geographyPinsVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.04,
    },
  },
};

export const geographyPinVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5, y: 6 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 280,
      damping: 18,
    },
  },
};
