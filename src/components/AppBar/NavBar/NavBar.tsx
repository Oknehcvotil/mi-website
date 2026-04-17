import { useLocation } from "react-router-dom";
import ConsultBtn from "../../Buttons/ConsultBtn/ConsultBtn";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import SubMenuSection from "./SubMenuSection/SubMenuSection";
import { type Section } from "../../../lib/types/nav.types";
import { NAV_SECTIONS } from "../../../lib/data/nav.section";
import PsiLink from "../../Buttons/PsiLink/PsiLink";
import MainPageLink from "../MainPaigeLink/MainPaigeLink";
import { useMediaQuery } from "../../../lib/hooks/useMediaQuery";
import { useCurrentLang } from "../../../lib/hooks/useCurrentLang";
import { NavBarList } from "./NavBar.styled";

type NavBarProps = {
  onCloseBurger?: () => void;
  isBurgerOpen?: boolean;
};

type SectionId = Section["id"];

const getActiveSectionId = (
  pathname: string,
  currentLang: string,
): SectionId | null =>
  NAV_SECTIONS.find((section) =>
    pathname.startsWith(`/${currentLang}${section.basePath}`),
  )?.id ?? null;

const getNextOpenMobileIds = (
  current: SectionId[],
  sectionId: SectionId,
  next: boolean,
) => {
  if (!next) {
    return current.filter((id) => id !== sectionId);
  }

  return current.includes(sectionId) ? current : [...current, sectionId];
};

const NavBar = ({ onCloseBurger, isBurgerOpen }: NavBarProps) => {
  const { t } = useTranslation("common", { keyPrefix: "links" });
  const { pathname } = useLocation();
  const currentLang = useCurrentLang();
  const isLaptopUp = useMediaQuery("(min-width: 1024px)");

  const [openId, setOpenId] = useState<SectionId | null>(null);
  const [openMobileIds, setOpenMobileIds] = useState<SectionId[]>([]);
  const activeSectionId = getActiveSectionId(pathname, currentLang);

  useEffect(() => {
    setOpenId(null);
    setOpenMobileIds([]);
  }, [pathname]);

  useEffect(() => {
    if (isLaptopUp) {
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
  }, [activeSectionId, isLaptopUp, isBurgerOpen]);

  const handleSetOpen = (sectionId: SectionId, next: boolean) => {
    if (isLaptopUp) {
      setOpenId(next ? sectionId : null);
      return;
    }

    setOpenMobileIds((current) =>
      getNextOpenMobileIds(current, sectionId, next),
    );
  };

  return (
    <NavBarList>
      {!isLaptopUp && (
        <li>
          <MainPageLink onCloseBurger={onCloseBurger} />
        </li>
      )}

      {NAV_SECTIONS.map((section) => (
        <SubMenuSection
          key={section.id}
          section={section}
          currentLang={currentLang}
          isOpen={
            isLaptopUp
              ? openId === section.id
              : openMobileIds.includes(section.id)
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

      {!isLaptopUp && (
        <li>
          <ConsultBtn variant="primary" onClick={onCloseBurger} />
        </li>
      )}
    </NavBarList>
  );
};

export default NavBar;
