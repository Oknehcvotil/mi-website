import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { lazy } from "react";
import { LanguageGuard } from "../router/LanguageGuard/LanguageGuard";
import { SUPPORTED_LANGS, type Lang } from "../i18n/i18n";

const Layout = lazy(() => import("../components/Layout/Layout"));

const RecruitmentLayout = lazy(
  () => import("../components/Layout/RecruitmentLayout")
);

const ConsultingLayout = lazy(
  () => import("../components/Layout/ConsultingLayout")
);

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
// Recruitment
const RecruitmentIT = lazy(
  () => import("../pages/Cases/Recruitment/RecruitmentIT")
);
const RecruitmentWeb = lazy(
  () => import("../pages/Cases/Recruitment/RecruitmentWeb")
);
const RecruitmentMarketing = lazy(
  () => import("../pages/Cases/Recruitment/RecruitmentMarketing")
);
const RecruitmentFintech = lazy(
  () => import("../pages/Cases/Recruitment/RecruitmentFintech")
);
const RecruitmentIGaming = lazy(
  () => import("../pages/Cases/Recruitment/RecruitmentIGaming")
);
const RecruitmentOther = lazy(
  () => import("../pages/Cases/Recruitment/RecruitmentOther")
);

//HR CONSULTING
const ConsultingIT = lazy(
  () => import("../pages/Cases/Consulting/ConsultingIT")
);
const ConsultingWeb = lazy(
  () => import("../pages/Cases/Consulting/ConsultingWeb")
);
const ConsultingMarketing = lazy(
  () => import("../pages/Cases/Consulting/ConsultingMarketing")
);
const ConsultingOther = lazy(
  () => import("../pages/Cases/Consulting/ConsultingOther")
);

const BusinessPsychology = lazy(
  () => import("../pages/Cases/BusinessPsychology/BusinessPsychology")
);
const CasesForCandidates = lazy(
  () => import("../pages/Cases/CasesForCandidates/CasesForCandidates")
);

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
      <Route element={<Layout />}>
        <Route index element={<Navigate to={fallbackLangPath} replace />} />

        <Route path=":lang" element={<LanguageGuard />}>
          <Route index element={<Home />} />

          <Route path="services" element={<Outlet />}>
            <Route index element={<Navigate to="for-clients" replace />} />
            <Route path="for-clients" element={<ForClients />} />
            <Route path="for-candidates" element={<ForCandidates />} />
            <Route path="phd-recruiting" element={<PhdRecruiting />} />
          </Route>

          <Route path="cases" element={<Outlet />}>
            <Route index element={<Navigate to="recruitment/it" replace />} />

            <Route path="recruitment" element={<RecruitmentLayout />}>
              <Route index element={<Navigate to="it" replace />} />
              <Route path="it" element={<RecruitmentIT />} />
              <Route path="web" element={<RecruitmentWeb />} />
              <Route path="marketing" element={<RecruitmentMarketing />} />
              <Route path="fintech" element={<RecruitmentFintech />} />
              <Route path="igaming" element={<RecruitmentIGaming />} />
              <Route path="other" element={<RecruitmentOther />} />
            </Route>
            <Route path="hr-consulting" element={<ConsultingLayout />}>
              <Route index element={<Navigate to="it" replace />} />
              <Route path="it" element={<ConsultingIT />} />
              <Route path="web" element={<ConsultingWeb />} />
              <Route path="marketing" element={<ConsultingMarketing />} />
              <Route path="other" element={<ConsultingOther />} />
            </Route>
            <Route
              path="business-psychology"
              element={<BusinessPsychology />}
            />
            <Route path="for-candidates" element={<CasesForCandidates />} />
          </Route>
        </Route>

        {/* catch-all */}
        <Route path="*" element={<Navigate to={fallbackLangPath} replace />} />
      </Route>
    </Routes>
  );
}
