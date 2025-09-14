import { Outlet } from "react-router-dom";
import { Suspense, useState, useEffect } from "react";
import AppBar from "../components/AppBar/AppBar";
import BurgerMenu from "../components/AppBar/BurgerMenu/BurgerMenu";
import LoaderM from "../components/Loader/LoaderM";

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
    <div>
      <AppBar setMenuIsOpen={setMenuIsOpen} />
      <BurgerMenu isOpen={menuIsOpen} onClose={closeMenu} />

      <Suspense fallback={<LoaderM />}>
        <main style={{ height: "100vh" }}>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
};

export default Layout;
