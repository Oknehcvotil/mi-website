import { type Dispatch, type SetStateAction } from "react";
import {
  BurgerMenuBtn,
  Header,
  HeaderWrapper,
  LogoLink,
} from "./AppBar.styles";
import ConsultBtn from "../Buttons/ConsultBtn/ConsultBtn";
import LangSwitcher from "./LangSwitcher/LangSwitcher";
import ServicesBtn from "../Buttons/ServicesBtn/ServicesBtn";
import { useMediaQuery } from "../../lib/hooks/useMediaQuery";
import NavBar from "./NavBar/NavBar";
import MainPageLink from "./MainPaigeLink/MainPaigeLink";
import PsiLink from "../Buttons/PsiLink/PsiLink";
import { useReducedMotion } from "framer-motion";
import { headerVariants } from "../../lib/animations/animations.appBar";
import { useCurrentLang } from "../../lib/hooks/useCurrentLang";
import { useHeaderScrolled } from "../../lib/hooks/useHeaderScrolled";

type AppBarProps = {
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
};

function AppBar({ setMenuIsOpen }: AppBarProps) {
  const isScrolled = useHeaderScrolled();
  const currentLang = useCurrentLang();
  const reduce = useReducedMotion();

  const isTablet = useMediaQuery("(min-width: 768px)");
  const isLaptopUp = useMediaQuery("(min-width: 1024px)");

  return (
    <Header isScrolled={isScrolled}>
      <HeaderWrapper
        initial={reduce ? undefined : "hidden"}
        animate={reduce ? undefined : "show"}
        variants={reduce ? undefined : headerVariants}
      >
        <BurgerMenuBtn type="button" onClick={() => setMenuIsOpen(true)}>
          <svg width={40} height={40}>
            <use href="/icons/sprite.svg#icon-menu"></use>
          </svg>
        </BurgerMenuBtn>

        {isLaptopUp && <NavBar />}

        <LogoLink to={`/${currentLang}`} end>
          <svg viewBox="0 0 76 32">
            <use
              href="/icons/sprite.svg#icon-main-logo"
              xlinkHref="/icons/sprite.svg#icon-main-logo"
            ></use>
          </svg>
        </LogoLink>
        <LangSwitcher />
        {isLaptopUp && <MainPageLink />}
        <ServicesBtn />

        {isLaptopUp && <PsiLink className="desk-psi">PSY MI</PsiLink>}

        <ConsultBtn
          variant="header"
          maxWidth={isTablet ? "200px" : "140px"}
          order={isLaptopUp ? 5 : isTablet ? 4 : 0}
        />
      </HeaderWrapper>
    </Header>
  );
}

export default AppBar;
