import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { lazy } from "react";
import { LanguageGuard } from "../router/LanguageGuard/LanguageGuard";
import { SUPPORTED_LANGS, type Lang } from "../i18n/i18n";

const Layout = lazy(() => import("../layouts/Layout"));

// HOME
const Home = lazy(() => import("../pages/Home/Home"));

// Services
const ForClients = lazy(
  () => import("../pages/Services/ForClients/ForClients")
);
const ForCandidates = lazy(
  () => import("../pages/Services/ForCandidates/ForCandidates")
);
const PhdRecruiting = lazy(
  () => import("../pages/Services/PhdRecruiting/PhdRecruiting")
);

// Cases
const IT = lazy(() => import("../pages/Cases/IT/IT"));
const Web = lazy(() => import("../pages/Cases/Web/Web"));
const Marketing = lazy(() => import("../pages/Cases/Marketing/Marketing"));
const FinTech = lazy(() => import("../pages/Cases/FinTech/FinTech"));

const isLang = (val: string | null | undefined): val is Lang =>
  typeof val === "string" && SUPPORTED_LANGS.includes(val as Lang);

const detectDefault = (): Lang => {
  const saved = localStorage.getItem("lang");
  if (isLang(saved)) return saved;

  const nav = navigator.language?.slice(0, 2).toLowerCase();
  if (isLang(nav)) return nav;

  return "en";
};

export default function App() {
  const fallbackLangPath = `/${detectDefault()}`;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate to={fallbackLangPath} replace />} />

        <Route path="/:lang" element={<LanguageGuard />}>
          {/* Main */}
          <Route index element={<Home />} />

          {/* Services*/}
          <Route path="services" element={<Outlet />}>
            <Route index element={<Navigate to="for-clients" replace />} />
            <Route path="for-clients" element={<ForClients />} />
            <Route path="for-candidates" element={<ForCandidates />} />
            <Route path="phd-recruiting" element={<PhdRecruiting />} />
          </Route>

          {/* Cases */}
          <Route path="cases" element={<Outlet />}>
            <Route index element={<Navigate to="it" replace />} />
            <Route path="recruitment" element={<IT />} />
            <Route path="hr-consulting" element={<Web />} />
            <Route path="business-psychology" element={<Marketing />} />
            <Route path="for-candidates" element={<FinTech />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Route>
    </Routes>
  );
}
