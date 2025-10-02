import { useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  itemVariants,
  listVariants,
} from "../../../../lib/animations/services/animations.hrConsulting";
import { additionalHrServices } from "../../../../lib/data/services.pages";
import {
  AdditionalServicesItems,
  AdditionalServicesList,
} from "./AdditionalServices.styled";

const AdditionalServices = () => {
  const { t } = useTranslation("servicesForClients");

  const reduce = useReducedMotion();

  return (
    <AdditionalServicesList
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={reduce ? undefined : listVariants}
    >
      {additionalHrServices.map((s) => (
        <AdditionalServicesItems
          key={s.key}
          variants={reduce ? undefined : itemVariants}
        >
          <button type="button" aria-label={t(s.key)}>
            {t(s.key)}
          </button>
        </AdditionalServicesItems>
      ))}
    </AdditionalServicesList>
  );
};

export default AdditionalServices;
