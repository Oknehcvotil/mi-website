import { useTranslation } from "react-i18next";
import { modalVariants } from "../../../lib/animations/animations.burger";
import BurgerCloseBtn from "../../Buttons/BurgerCloseBtn/BurgerCloseBtn";
import { PolicyModalCont, TextCont } from "./PolicyModal.styled";
import type { PolicySections } from "../../../lib/types/common.types";

type PolicyModal = {
  isModalOpen?: boolean;
  onClose: () => void;
};

const PolicyModal = ({ isModalOpen, onClose }: PolicyModal) => {
  const { t } = useTranslation();

  const sections = t("privacyPolicy.modal.sections", {
    returnObjects: true,
  }) as PolicySections;

  return (
    <PolicyModalCont
      initial="closed"
      variants={modalVariants}
      animate={isModalOpen ? "open" : "closed"}
    >
      <h2>{t("privacyPolicy.modal.title")}</h2>
      <TextCont>
        <p>{t("privacyPolicy.modal.intro")}</p>

        <h3>{sections.dataCollectTitle}</h3>
        <ul>
          {sections.dataCollectList.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3>{sections.purposeTitle}</h3>
        <ul>
          {sections.purposeList.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p>{sections.unsubscribe}</p>

        <h3>{sections.securityTitle}</h3>
        <p>{sections.securityText}</p>

        <h3>{sections.thirdPartyTitle}</h3>
        <p>{sections.thirdPartyText}</p>
        <ul>
          {sections.thirdPartyList.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3>{sections.rightsTitle}</h3>
        <ul>
          {sections.rightsList.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3>{sections.changesTitle}</h3>
        <p>{sections.changesText}</p>
      </TextCont>
      <BurgerCloseBtn
        onClose={onClose}
        width={9}
        height={9}
        className="close-modal"
      />
    </PolicyModalCont>
  );
};

export default PolicyModal;
