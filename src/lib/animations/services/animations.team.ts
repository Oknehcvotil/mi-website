import type { Variants } from "framer-motion";

export const fadeUpVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export const leftInVariants: Variants = {
  hidden: { x: -40, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export const rightInVariants: Variants = {
  hidden: { x: 40, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};
