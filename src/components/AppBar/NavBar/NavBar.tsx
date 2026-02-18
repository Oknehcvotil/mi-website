import { useMatch, useLocation } from "react-router-dom";
import ConsultBtn from "../../Buttons/ConsultBtn/ConsultBtn";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import SubMenuSection from "./SubMenuSection/SubMenuSection";
import { type Section } from "../../../lib/types/nav.types";
import { NAV_SECTIONS } from "../../../lib/data/nav.section";
import PsiLink from "../../Buttons/PsiLink/PsiLink";
import MainPageLink from "../MainPaigeLink/MainPaigeLink";
import { useMediaQuery } from "../../../lib/hooks/useMediaQuery";
import { NavBarList } from "./NavBar.styled";

type NavBarProps = {
  onCloseBurger?: () => void;
};

const NavBar = ({ onCloseBurger }: NavBarProps) => {
  const { t } = useTranslation("common", { keyPrefix: "links" });
  const { pathname } = useLocation();
  const match = useMatch("/:lang/*");
  const currentLang = match?.params.lang ?? "en";
  const isDesk = useMediaQuery("(min-width: 1920px)");

  const [openId, setOpenId] = useState<Section["id"] | null>(null);

  useEffect(() => {
    setOpenId(null);
  }, [pathname]);

  const sections = NAV_SECTIONS;

  return (
    <NavBarList>
      {!isDesk && (
        <li>
          <MainPageLink onCloseBurger={onCloseBurger} />
        </li>
      )}

      {sections.map((section) => (
        <SubMenuSection
          key={section.id}
          section={section}
          currentLang={currentLang}
          isOpen={openId === section.id}
          setOpen={(next) => setOpenId(next ? section.id : null)}
          onSelect={onCloseBurger}
          t={t}
          pathname={pathname}
        />
      ))}

      <li>
        <PsiLink onCloseBurger={onCloseBurger}>PSY MI</PsiLink>
      </li>

      {!isDesk && (
        <li>
          <ConsultBtn variant="primary" onClick={onCloseBurger} />
        </li>
      )}
    </NavBarList>
  );
};

export default NavBar;
