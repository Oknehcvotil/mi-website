export const sectionVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export const childVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};
