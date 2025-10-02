import type { Variants } from "framer-motion";

export const parent: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export const listStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
