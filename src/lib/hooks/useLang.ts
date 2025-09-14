import { useParams, useLocation, useNavigate } from "react-router-dom";
import type { Lang } from "../../i18n/i18n";

export function useLang() {
  const { lang = "en" } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const switchLang = (next: Lang) => {
    const parts = location.pathname.split("/").filter(Boolean);
    parts[0] = next;
    navigate({
      pathname: "/" + parts.join("/"),
      search: location.search,
      hash: location.hash,
    });
  };

  const path = (p: string) => `/${lang}${p.startsWith("/") ? p : `/${p}`}`;

  return { lang: lang as Lang, switchLang, path };
}
