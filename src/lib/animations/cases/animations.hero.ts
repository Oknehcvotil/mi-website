// src/lib/animations/cases/animations.hero.ts
import type { Variants, Transition } from "framer-motion";

export const easeHero: Transition["ease"] = [0.22, 1, 0.36, 1];

export const sectionV: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
      ease: easeHero,
      duration: 0.6,
    },
  },
};

export const titleV: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { ease: easeHero, duration: 0.6 } },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export const navListV: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: easeHero, duration: 0.45, staggerChildren: 0.04 },
  },
};

export const navItemV: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { ease: easeHero, duration: 0.35 } },
};

export const imageV: Variants = {
  hidden: { opacity: 0, y: 20, rotate: -1 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { ease: easeHero, duration: 0.6, delay: 0.1 },
  },
};
