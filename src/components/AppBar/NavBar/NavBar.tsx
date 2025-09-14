import { useMatch, useLocation } from "react-router-dom";
import ConsultBtn from "../../Buttons/ConsultBtn/ConsultBtn";
import { NavCont, MainLink } from "./NavBar.styled";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import SubMenuSection from "./SubMenuSection/SubMenuSection";
import { type Section } from "../../../lib/types/nav.types";
import { NAV_SECTIONS } from "../../../lib/data/nav.section";
import PsiLink from "../PsiLink/PsiLink";

type NavBarProps = {
  onCloseBurger: () => void;
};

const NavBar = ({ onCloseBurger }: NavBarProps) => {
  const { t } = useTranslation("common", { keyPrefix: "links" });
  const { pathname } = useLocation();
  const match = useMatch("/:lang/*");
  const currentLang = match?.params.lang ?? "en";

  // один state для открытого раздела
  const [openId, setOpenId] = useState<Section["id"] | null>(null);

  // закрываем выпадашки при смене маршрута
  useEffect(() => {
    setOpenId(null);
  }, [pathname]);

  const sections = NAV_SECTIONS;

  return (
    <NavCont>
      <ul>
        <li>
          <MainLink to={`/${currentLang}`} end onClick={onCloseBurger}>
            {t("aboutUs")}
          </MainLink>
        </li>

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
          <PsiLink onCloseBurger={onCloseBurger} />
        </li>

        <li>
          <ConsultBtn variant="primary" onClick={onCloseBurger} />
        </li>
      </ul>
    </NavCont>
  );
};

export default NavBar;
