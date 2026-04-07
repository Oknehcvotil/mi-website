import { type Variants, type Easing } from "framer-motion";

export const easeIn: Easing = [0.22, 1, 0.36, 1];

export const missionSectionVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

export const missionTitleWrapVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: easeIn,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

export const missionTitleVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.38,
      ease: easeIn,
    },
  },
};

export const missionTitleTextVariants: Variants = {
  hidden: { opacity: 0, x: -14 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.34,
      ease: easeIn,
    },
  },
};

export const missionContentVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.24,
      ease: easeIn,
      when: "beforeChildren",
      delayChildren: 0.06,
      staggerChildren: 0.12,
    },
  },
};

export const missionStatsListVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.03,
    },
  },
};

export const missionStatsItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -22,
    y: 10,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.34,
      ease: easeIn,
    },
  },
};

export const missionImageVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 24,
    y: 20,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.48,
      ease: easeIn,
    },
  },
};
