import type { Variants } from "framer-motion";

export const headerVariants: Variants = {
  hidden: {
    y: -32,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
