import { type Dispatch, type SetStateAction, useState, useEffect } from "react";
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
import { useMatch } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import MainPageLink from "./MainPaigeLink/MainPaigeLink";
import PsiLink from "../Buttons/PsiLink/PsiLink";
import type { Variants } from "framer-motion";
import { useReducedMotion } from "framer-motion";

const headerVariants: Variants = {
  hidden: {
    y: -32,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

type AppBarProps = {
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
};

function AppBar({ setMenuIsOpen }: AppBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const match = useMatch("/:lang/*");
  const currentLang = match?.params.lang ?? "en";
  const reduce = useReducedMotion();

  const isTablet = useMediaQuery("(min-width: 768px)");
  const isDesk = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

        {isDesk && <NavBar />}

        <LogoLink to={`/${currentLang}`} end>
          <svg width={isDesk ? 130 : 70} height={isDesk ? 55 : 30}>
            <use
              href="/icons/sprite.svg#icon-main-logo"
              xlinkHref="/icons/sprite.svg#icon-main-logo"
            ></use>
          </svg>
        </LogoLink>
        <LangSwitcher />
        {isDesk && <MainPageLink />}
        <ServicesBtn />

        {isDesk && <PsiLink className="desk-psi">PSY MI</PsiLink>}

        <ConsultBtn
          variant="header"
          maxWidth={isTablet ? "200px" : "140px"}
          order={isDesk ? 5 : isTablet ? 4 : 0}
        />
      </HeaderWrapper>
    </Header>
  );
}

export default AppBar;
