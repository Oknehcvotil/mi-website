import { useTranslation } from "react-i18next";
import { PolicyCont } from "./PrivacyPolicy.styled";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  //   const [policyModalIsOpen, setpolicyModalIsOpen] = useState(false);

  return (
    <PolicyCont>
      <p>
        {t("privacyPolicy.text")}<span >{t("privacyPolicy.button")}</span>
      </p>
    </PolicyCont>
  );
};

export default PrivacyPolicy;
