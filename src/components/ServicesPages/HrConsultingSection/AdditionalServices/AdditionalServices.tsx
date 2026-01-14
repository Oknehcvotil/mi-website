import { AnimatePresence, useReducedMotion } from "framer-motion";
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

type AdditionalServicesProps = {
  expanded: boolean;
  collapsedCount: number;
};

const AdditionalServices = ({
  expanded,
  collapsedCount,
}: AdditionalServicesProps) => {
  const { t } = useTranslation("servicesForClients");
  const reduce = useReducedMotion();

  const visible = expanded
    ? additionalHrServices
    : additionalHrServices.slice(0, collapsedCount);

  return (
    <AdditionalServicesList
      layout // важно: плавно меняет высоту/раскладку
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={reduce ? undefined : listVariants}
    >
      <AnimatePresence initial={false}>
        {visible.map((s, i) => (
          <AdditionalServicesItems
            key={s.key}
            layout // чтобы элементы “разъезжались” плавно
            custom={i}
            variants={reduce ? undefined : itemVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            transition={reduce ? { duration: 0 } : { duration: 0.2 }}
          >
            <p>{t(s.key)}</p>
          </AdditionalServicesItems>
        ))}
      </AnimatePresence>
    </AdditionalServicesList>
  );
};

export default AdditionalServices;
