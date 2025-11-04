import { useTranslation, Trans } from "react-i18next";
import { useReducedMotion, motion } from "framer-motion";
import ConsultBtn from "../../Buttons/ConsultBtn/ConsultBtn";
import {
  listStagger,
  parent,
} from "../../../lib/animations/services/animations.phdlEligibility";
import Container from "../../Container/Container";
import {
  ConsultLinkCont,
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
      variants={reduce ? undefined : listStagger}
    >
      <Container>
        <motion.div variants={reduce ? undefined : parent}>
          <EligibilityCard
            translationNs={ns}
            titleKey="zero.title"
            items={zeroToProItems}
          />
        </motion.div>

        <motion.div variants={reduce ? undefined : parent}>
          <EligibilityCard
            translationNs={ns}
            titleKey="upskill.title"
            items={upskillItems}
          />
        </motion.div>

        <ConsultLinkCont variants={reduce ? undefined : parent}>
          <h2>
            <Trans t={t} i18nKey="cta.note" components={{ 1: <span /> }} />
          </h2>

          <ConsultBtn maxWidth="307px" />
        </ConsultLinkCont>
      </Container>
    </EligibilityWrap>
  );
};

export default PhdEligibilitySection;
