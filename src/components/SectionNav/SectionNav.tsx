import { useActiveSectionContext } from "../../lib/hooks/useActiveSectionContext";
import { useTranslation } from "react-i18next";
import { homeLinks } from "../../lib/data/home.page";
import { SectionNavWrap, SectionsList } from "./SectionNav.styled";

const SectionNav = () => {
  const { t } = useTranslation("home");
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const isFooterVisible = activeSection === "Footer";

  return (
    <SectionNavWrap hidden={isFooterVisible}>
      <SectionsList>
        {homeLinks.map((link, i) => (
          <li key={i}>
            <a
              href={link.hash}
              onClick={() => {
                setActiveSection(link.name);
                setTimeOfLastClick(Date.now());
              }}
              className={activeSection === link.name ? "active" : ""}
            >
              {t(link.label)}
            </a>
          </li>
        ))}
      </SectionsList>
    </SectionNavWrap>
  );
};

export default SectionNav;
