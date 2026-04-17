import { useTranslation } from "react-i18next";
import type { NavItem } from "../../../../lib/types/cases.hero.types";
import {
  CasesHeroNavList,
  CasesHeroNavWrap,
  CasesNavLink,
} from "./CasesNav.styled";
import { useCurrentLang } from "../../../../lib/hooks/useCurrentLang";
import {
  navItemV,
  navListV,
} from "../../../../lib/animations/cases/animations.hero";
import { motion } from "framer-motion";

type CasesNavProps = {
  nav: NavItem[];
  ns: string;
  className?: string;
};

const CasesNav = ({ nav, ns, className }: CasesNavProps) => {
  const { t } = useTranslation(ns);
  const currentLang = useCurrentLang();

  return (
    <CasesHeroNavWrap>
      <CasesHeroNavList
        variants={navListV}
        className={`nav-cases--${className}`}
      >
        {nav.map((item) => (
          <motion.li key={item.hash} variants={navItemV}>
            <CasesNavLink to={`/${currentLang}/cases/${item.hash}`}>
              {t(item.labelKey)}
            </CasesNavLink>
          </motion.li>
        ))}
      </CasesHeroNavList>
    </CasesHeroNavWrap>
  );
};

export default CasesNav;
