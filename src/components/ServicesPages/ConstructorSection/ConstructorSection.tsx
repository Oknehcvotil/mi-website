import { motion, useReducedMotion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import {
  bgVariants,
  itemVariants,
  listVariants,
  sectionVariants,
} from "../../../lib/animations/services/animation.constructor";
import {
  ConstructorItems,
  ConstructorLead,
  ConstructorSectionWrap,
  ConstructorTitle,
  ConstuctorContainer,
} from "./ConstructorSection.styled";
import Container from "../../Container/Container";
import { constructorItems } from "../../../lib/data/services.pages";

const ConstructorSection = () => {
  const { t, i18n } = useTranslation("servicesForClients");
  const lang = i18n.language;
  const reduce = useReducedMotion();

  const secV = reduce ? undefined : sectionVariants;
  const bgV = reduce ? undefined : bgVariants;
  const listV = reduce ? undefined : listVariants;
  const itemV = reduce ? undefined : itemVariants;

  return (
    <ConstructorSectionWrap
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={secV}
      id="constructor"
    >
      <Container>
        <ConstructorTitle>{t("constructor.title")}</ConstructorTitle>
        <ConstructorLead>{t("constructor.lead")}</ConstructorLead>
        <ConstuctorContainer variants={bgV}>
          <motion.ul variants={listV}>
            {constructorItems.map(({ key, className, hasTrans }) => (
              <ConstructorItems
                key={key}
                variants={itemV}
                className={className}
                lang={lang}
              >
                {hasTrans ? (
                  <Trans t={t} i18nKey={key} components={{ 1: <span /> }} />
                ) : (
                  t(key)
                )}
              </ConstructorItems>
            ))}
          </motion.ul>
        </ConstuctorContainer>
      </Container>
    </ConstructorSectionWrap>
  );
};

export default ConstructorSection;
