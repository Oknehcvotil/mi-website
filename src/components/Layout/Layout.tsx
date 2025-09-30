import { Outlet } from "react-router-dom";
import { Suspense, useState, useEffect } from "react";
import AppBar from "../AppBar/AppBar";
import BurgerMenu from "../AppBar/BurgerMenu/BurgerMenu";
import LoaderM from "../Loader/LoaderM";
import AppFooter from "../AppFooter/AppFooter";
import ActiveSectionContextProvider from "../../context/ActiveSectionContextProvider";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Layout = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const closeMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1920px)");

    if (mq.matches && menuIsOpen) setMenuIsOpen(false);

    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setMenuIsOpen(false);
    };

    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [menuIsOpen, setMenuIsOpen]);

  return (
    <ActiveSectionContextProvider>
      <AppBar setMenuIsOpen={setMenuIsOpen} />
      <BurgerMenu isOpen={menuIsOpen} onClose={closeMenu} />
      {/* <PrivacyModal /> */}

      <Suspense fallback={<LoaderM />}>
        <main>
          <ScrollToTop />
          <Outlet />
        </main>
      </Suspense>
      <AppFooter />
    </ActiveSectionContextProvider>
  );
};

export default Layout;
