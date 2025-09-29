import { useTranslation } from "react-i18next";
import { PolicyCont } from "./PrivacyPolicy.styled";
import { Fragment, useState } from "react";
import ModalOverlay from "../../ModalOverlay/ModalOverlay";
import PolicyModal from "../PolicyModal/PolicyModal";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const [isPolicyModalIsOpen, setPolicyModalIsOpen] = useState(false);

  return (
    <Fragment>
      <PolicyCont>
        <p>
          {t("privacyPolicy.text")}
          <span
            onClick={() => setPolicyModalIsOpen(true)}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && setPolicyModalIsOpen(true)
            }
          >
            {t("privacyPolicy.button")}
          </span>
        </p>
      </PolicyCont>

      <ModalOverlay
        isModalOpen={isPolicyModalIsOpen}
        onClose={() => setPolicyModalIsOpen(false)}
      >
        <PolicyModal
          isModalOpen={isPolicyModalIsOpen}
          onClose={() => setPolicyModalIsOpen(false)}
        />
      </ModalOverlay>
    </Fragment>
  );
};

export default PrivacyPolicy;
