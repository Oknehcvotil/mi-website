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

type AppBarProps = {
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
};

function AppBar({ setMenuIsOpen }: AppBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const match = useMatch("/:lang/*");
  const currentLang = match?.params.lang ?? "en";

  const isTablet = useMediaQuery("(min-width: 768px)");

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
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <BurgerMenuBtn type="button" onClick={() => setMenuIsOpen(true)}>
          <svg width={40} height={40}>
            <use href="/icons/sprite.svg#icon-menu"></use>
          </svg>
        </BurgerMenuBtn>
        <LogoLink to={`/${currentLang}`} end>
          <svg width={70} height={30}>
            <use
              href="/icons/sprite.svg#icon-main-logo"
              xlinkHref="/icons/sprite.svg#icon-main-logo"
            ></use>
          </svg>
        </LogoLink>
        <LangSwitcher />
        <ServicesBtn />
        <ConsultBtn
          variant="header"
          maxWidth={isTablet ? "200px" : "140px"}
          order={isTablet ? 4 : 0}
        />
      </HeaderWrapper>
    </Header>
  );
}

export default AppBar;
