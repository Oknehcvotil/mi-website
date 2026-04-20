import { Outlet } from "react-router-dom";
import { Suspense, useState, useEffect } from "react";
import AppBar from "../AppBar/AppBar";
import BurgerMenu from "../AppBar/BurgerMenu/BurgerMenu";
import LoaderM from "../Loader/LoaderM";
import AppFooter from "../AppFooter/AppFooter";
import ActiveSectionContextProvider from "../../context/ActiveSectionContextProvider";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import SeoMeta from "../SeoMeta/SeoMeta";
import { useMediaQuery } from "../../lib/hooks/useMediaQuery";

const Layout = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const isDesktopWide = useMediaQuery("(min-width: 1920px)");

  const closeMenu = () => setMenuIsOpen(false);

  useEffect(() => {
    if (isDesktopWide && menuIsOpen) {
      setMenuIsOpen(false);
    }
  }, [isDesktopWide, menuIsOpen]);

  return (
    <ActiveSectionContextProvider>
      <SeoMeta />
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
