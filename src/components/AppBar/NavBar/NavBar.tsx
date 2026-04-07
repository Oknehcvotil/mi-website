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
  isBurgerOpen?: boolean;
};

const NavBar = ({ onCloseBurger, isBurgerOpen }: NavBarProps) => {
  const { t } = useTranslation("common", { keyPrefix: "links" });
  const { pathname } = useLocation();
  const match = useMatch("/:lang/*");
  const currentLang = match?.params.lang ?? "en";
  const isDesk = useMediaQuery("(min-width: 1024px)");

  const [openId, setOpenId] = useState<Section["id"] | null>(null);
  const [openMobileIds, setOpenMobileIds] = useState<Section["id"][]>([]);
  const sections = NAV_SECTIONS;
  const activeSectionId =
    sections.find((section) =>
      pathname.startsWith(`/${currentLang}${section.basePath}`),
    )?.id ?? null;

  useEffect(() => {
    setOpenId(null);
    setOpenMobileIds([]);
  }, [pathname]);

  useEffect(() => {
    if (isDesk) {
      setOpenMobileIds([]);
      return;
    }

    if (isBurgerOpen) {
      setOpenMobileIds(activeSectionId ? [activeSectionId] : []);
      return;
    }

    if (isBurgerOpen === false) {
      setOpenMobileIds([]);
    }
  }, [activeSectionId, isDesk, isBurgerOpen]);

  const handleSetOpen = (sectionId: Section["id"], next: boolean) => {
    if (isDesk) {
      setOpenId(next ? sectionId : null);
      return;
    }

    setOpenMobileIds((current) => {
      if (!next) {
        return current.filter((id) => id !== sectionId);
      }

      return current.includes(sectionId) ? current : [...current, sectionId];
    });
  };

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
          isOpen={
            isDesk ? openId === section.id : openMobileIds.includes(section.id)
          }
          setOpen={(next) => handleSetOpen(section.id, next)}
          onSelect={onCloseBurger}
          t={t}
          pathname={pathname}
        />
      ))}

      <li className="psi-item">
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
