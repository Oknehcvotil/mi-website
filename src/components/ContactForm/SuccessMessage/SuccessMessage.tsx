// icon - success;

import { useTranslation } from "react-i18next";
import { MessageCont } from "./SuccessMessage.styled";

type SuccessMessageProps = {
  message?: string;
  variant?: "error" | "success";
};

const SuccessMessage = ({
  message,
  variant = "success",
}: SuccessMessageProps) => {
  const { t } = useTranslation();
  const iconId = variant === "error" ? "icon-error" : "icon-success";
  const fallbackMessage =
    variant === "error" ? "Failed to send form" : t("form.successMessage");

  return (
    <MessageCont variant={variant}>
      <div>
        <svg width={16} height={16}>
          <use href={`/icons/sprite.svg#${iconId}`}></use>
        </svg>
      </div>
      <p>{message || fallbackMessage}</p>
    </MessageCont>
  );
};

export default SuccessMessage;
