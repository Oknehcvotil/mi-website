import type { Variants } from "framer-motion";

export const popupContainerVariants: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 420,
      damping: 28,
      mass: 0.35,
      staggerChildren: 0.06,
      delayChildren: 0.03,
    },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.95,
    transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] },
  },
};

export const popupVariants: Variants = {
  hidden: { opacity: 0, y: 6, filter: "blur(2px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.18 },
  },
};