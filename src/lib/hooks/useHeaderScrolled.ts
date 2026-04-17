import { useEffect, useState } from "react";

export function useHeaderScrolled(threshold = 50) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let rafId = 0;

    const updateScrolledState = () => {
      const nextIsScrolled = window.scrollY > threshold;

      setIsScrolled((prev) =>
        prev === nextIsScrolled ? prev : nextIsScrolled,
      );
      rafId = 0;
    };

    const handleScroll = () => {
      if (rafId !== 0) return;

      rafId = window.requestAnimationFrame(updateScrolledState);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [threshold]);

  return isScrolled;
}
