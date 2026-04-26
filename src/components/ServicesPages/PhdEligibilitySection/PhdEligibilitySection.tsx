import { useTranslation, Trans } from "react-i18next";
import { useReducedMotion, motion } from "framer-motion";
import ConsultBtn from "../../Buttons/ConsultBtn/ConsultBtn";
import {
  columnVariants,
  ctaButtonVariants,
  ctaTextVariants,
  ctaVariants,
  sectionVariants,
} from "../../../lib/animations/services/animations.phdlEligibility";
import Container from "../../Container/Container";
import {
  ConsultLinkCont,
  EligibilityCardsCont,
  EligibilityWrap,
} from "./PhdEligibilitySection.styled";
import EligibilityCard from "./EligibilityCard/EligibilityCard";
import { upskillItems, zeroToProItems } from "../../../lib/data/services.pages";

const PhdEligibilitySection = () => {
  const ns = "servicesPHD";
  const { t } = useTranslation(ns);
  const reduce = useReducedMotion();

  return (
    <EligibilityWrap
      aria-label={t("aria")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={reduce ? undefined : sectionVariants}
    >
      <Container className="phd-eligibility">
        <EligibilityCardsCont>
          <motion.div variants={reduce ? undefined : columnVariants} custom={-1}>
            <EligibilityCard
              translationNs={ns}
              titleKey="zero.title"
              items={zeroToProItems}
            />
          </motion.div>

          <motion.div variants={reduce ? undefined : columnVariants} custom={1}>
            <EligibilityCard
              translationNs={ns}
              titleKey="upskill.title"
              items={upskillItems}
            />
          </motion.div>
        </EligibilityCardsCont>

        <ConsultLinkCont variants={reduce ? undefined : ctaVariants}>
          <motion.h2 variants={reduce ? undefined : ctaTextVariants}>
            <Trans t={t} i18nKey="cta.note" components={{ 1: <span /> }} />
          </motion.h2>

          <motion.div variants={reduce ? undefined : ctaButtonVariants}>
            <ConsultBtn variant="primary" maxWidth="307px" />
          </motion.div>
        </ConsultLinkCont>
      </Container>
    </EligibilityWrap>
  );
};

export default PhdEligibilitySection;
