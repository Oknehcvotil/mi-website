import { Outlet } from "react-router-dom";
import { Suspense, useState, useEffect, Fragment } from "react";
import AppBar from "../AppBar/AppBar";
import BurgerMenu from "../AppBar/BurgerMenu/BurgerMenu";
import LoaderM from "../Loader/LoaderM";
import AppFooter from "../AppFooter/AppFooter";

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
    <Fragment>
      <AppBar setMenuIsOpen={setMenuIsOpen} />
      <BurgerMenu isOpen={menuIsOpen} onClose={closeMenu} />

      <Suspense fallback={<LoaderM />}>
        <main >
          <Outlet />
        </main>
      </Suspense>
      <AppFooter />
    </Fragment>
  );
};

export default Layout;
