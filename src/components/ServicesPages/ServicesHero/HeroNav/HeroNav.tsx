import { useTranslation } from "react-i18next";
import type { HeroNavProps } from "../../../../lib/types/servicesHero.type";
import { HeroNavLink, HeroNavList, HeroNavWrap } from "./HeroNav.styled";
import {
  itemVariants,
  listVariants,
} from "../../../../lib/animations/services/animations.hero";
import { useReducedMotion, motion } from "framer-motion";

const HeroNav = ({ translationNs, nav }: HeroNavProps) => {
  const { t } = useTranslation(translationNs);
  const reduce = useReducedMotion();

  if (!nav || nav.length === 0) return null;

  return (
    <HeroNavWrap
      initial={reduce ? undefined : "hidden"}
      animate={reduce ? undefined : "show"}
    >
      <HeroNavList variants={reduce ? undefined : listVariants}>
        {nav.map((item) => (
          <motion.li
            key={item.hash}
            variants={reduce ? undefined : itemVariants}
          >
            <HeroNavLink href={item.hash}>{t(item.labelKey)}</HeroNavLink>
          </motion.li>
        ))}
      </HeroNavList>
    </HeroNavWrap>
  );
};

export default HeroNav;
