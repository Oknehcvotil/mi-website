import { useEffect, useRef } from "react";

type ScrollState = {
  scrollY: number;
  openedPathname: string;
  openedSearch: string;
  openedHash: string;
  removedId: string | null;
  hashTarget: HTMLElement | null;
  prevScrollBehavior: string;
};

const PANEL_CLOSE_MS = 320;
const HASH_IDS_TO_KEEP = new Set(["contact"]);

type UseBurgerMenuEffectsParams = {
  isOpen: boolean;
  onClose: () => void;
  reduce: boolean;
};

export function useBurgerMenuEffects({
  isOpen,
  onClose,
  reduce,
}: UseBurgerMenuEffectsParams) {
  const restoreTimerRef = useRef<number | null>(null);
  const scrollStateRef = useRef<ScrollState | null>(null);

  useEffect(() => {
    if (restoreTimerRef.current) {
      window.clearTimeout(restoreTimerRef.current);
      restoreTimerRef.current = null;
    }

    if (!isOpen) return;

    const scrollY = window.scrollY;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const openedPathname = window.location.pathname;
    const openedSearch = window.location.search;
    const openedHash = window.location.hash;

    let removedId: string | null = null;
    let hashTarget: HTMLElement | null = null;

    if (openedHash) {
      const id = openedHash.slice(1);

      if (!HASH_IDS_TO_KEEP.has(id)) {
        const element = document.getElementById(id);

        if (element) {
          removedId = id;
          hashTarget = element;
          element.removeAttribute("id");
        }
      }
    }

    const prevScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";

    scrollStateRef.current = {
      scrollY,
      openedPathname,
      openedSearch,
      openedHash,
      removedId,
      hashTarget,
      prevScrollBehavior,
    };

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${scrollY}px`;

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) return;

    const state = scrollStateRef.current;
    if (!state) return;

    const restore = () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      document.body.style.paddingRight = "";

      if (state.removedId && state.hashTarget) {
        state.hashTarget.id = state.removedId;
      }

      const newHash = window.location.hash;
      const hashChanged = newHash !== state.openedHash;
      const pathChanged =
        window.location.pathname !== state.openedPathname ||
        window.location.search !== state.openedSearch;

      requestAnimationFrame(() => {
        if (hashChanged && newHash) {
          const target = document.getElementById(newHash.slice(1));

          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        } else if (pathChanged) {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        } else {
          window.scrollTo(0, state.scrollY);
        }

        document.documentElement.style.scrollBehavior =
          state.prevScrollBehavior;
      });

      scrollStateRef.current = null;
      restoreTimerRef.current = null;
    };

    if (reduce) {
      restore();
      return;
    }

    restoreTimerRef.current = window.setTimeout(restore, PANEL_CLOSE_MS);

    return () => {
      if (restoreTimerRef.current) {
        window.clearTimeout(restoreTimerRef.current);
        restoreTimerRef.current = null;
      }
    };
  }, [isOpen, reduce]);

  useEffect(() => {
    return () => {
      if (restoreTimerRef.current) {
        window.clearTimeout(restoreTimerRef.current);
      }

      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      document.body.style.paddingRight = "";
      document.documentElement.style.scrollBehavior =
        scrollStateRef.current?.prevScrollBehavior ?? "";
    };
  }, []);
}
