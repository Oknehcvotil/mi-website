import { type Variants, type Easing } from "framer-motion";

export const easeIn: Easing = [0.22, 1, 0.36, 1];

export const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

export const itemIn: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeIn } },
};
