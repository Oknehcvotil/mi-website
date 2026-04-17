import { useMatch } from "react-router-dom";

export function useCurrentLang() {
  const match = useMatch("/:lang/*");

  return match?.params.lang ?? "en";
}
