import { useEffect, useState } from "react";

const getMatches = (query: string) =>
  typeof window !== "undefined" ? window.matchMedia(query).matches : false;

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => getMatches(query));

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);

    const onChange = () => setMatches(mql.matches);

    onChange();

    mql.addEventListener?.("change", onChange);
    mql.addListener?.(onChange);

    return () => {
      mql.removeEventListener?.("change", onChange);
      mql.removeListener?.(onChange);
    };
  }, [query]);

  return matches;
}
