// icon - success;

import { useTranslation } from "react-i18next";
import { MessageCont } from "./SuccessMessage.styled";

const SuccessMessage = () => {
  const { t } = useTranslation();

  return (
    <MessageCont>
      <div>
        <svg width={16} height={16}>
          <use href="/icons/sprite.svg#icon-success"></use>
        </svg>
      </div>
      <p>{t("form.successMessage")}</p>
    </MessageCont>
  );
};

export default SuccessMessage;
