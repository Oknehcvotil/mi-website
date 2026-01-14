import { type Dispatch, type SetStateAction, useState, useEffect } from "react";
import { Header, HeaderWrapper } from "./AppBar.styles";
import ConsultBtn from "../Buttons/ConsultBtn/ConsultBtn";
import LangSwitcher from "./LangSwitcher/LangSwitcher";
import ServicesBtn from "../Buttons/ServicesBtn/ServicesBtn";

type AppBarProps = {
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
};

function AppBar({ setMenuIsOpen }: AppBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

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
        <button
          onClick={() => setMenuIsOpen(true)}
          style={{ marginRight: "auto" }}
          type="button"
        >
          <svg width={40} height={40}>
            <use href="/icons/sprite.svg#icon-menu"></use>
          </svg>
        </button>
        <LangSwitcher />
        <ServicesBtn />
        <ConsultBtn variant="header" maxWidth="140px" />
      </HeaderWrapper>
    </Header>
  );
}

export default AppBar;
