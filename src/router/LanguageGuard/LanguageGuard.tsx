// src/router/LanguageGuard.tsx
import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import i18n, { SUPPORTED_LANGS, type Lang } from "../../i18n/i18n";

export function LanguageGuard() {
  const { lang } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = (lang || "en") as Lang;


    if (!SUPPORTED_LANGS.includes(code)) {
      navigate("/en", { replace: true });
      return;
    }

    if (i18n.language.slice(0, 2) !== code) {
      i18n.changeLanguage(code);
    }
    localStorage.setItem("lang", code);
  }, [lang, navigate]);

  return <Outlet />;
}
