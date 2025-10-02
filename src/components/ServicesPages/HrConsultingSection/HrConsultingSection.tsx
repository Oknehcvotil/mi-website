import { useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  ctaVariants,
  illustrationVariants,
  sectionVariants,
} from "../../../lib/animations/services/animations.hrConsulting";
import ConsultBtn from "../../Buttons/ConsultBtn/ConsultBtn";
import { motion } from "framer-motion";
import {
  HrAdditionalCont,
  HrAdditionalTitle,
  HrImgCont,
  HrLeadText,
  HrSectionWrap,
  HrTitle,
} from "./HrConsultingSection.styled";
import AdditionalServices from "./AdditionalServices/AdditionalServices";

const HrConsultingSection = () => {
  const { t } = useTranslation("servicesForClients");
  const reduce = useReducedMotion();

  return (
    <HrSectionWrap id="hr" aria-labelledby="hrc-title">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={reduce ? undefined : sectionVariants}
      >
        <HrLeadText>
          <HrTitle>{t("hr.title")}</HrTitle>
          <p>{t("hr.lead")}</p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={reduce ? undefined : ctaVariants}
          >
            <ConsultBtn variant="primary" maxWidth="307px" />
          </motion.div>
        </HrLeadText>

        <HrImgCont
          aria-hidden="true"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={reduce ? undefined : illustrationVariants}
        >
          <img
            src="/images/services/hr-consulting.webp"
            srcSet="/images/mob/services-pages/hr-consulting.webp 1x, /images/mob/services-pages/hr-consulting@2x.webp 2x, /images/mob/services-pages/hr-consulting@3x.webp 3x"
            alt="HR consulting icon"
          />
        </HrImgCont>

        <HrAdditionalCont>
          <HrAdditionalTitle>{t("hr.separateTitle")}</HrAdditionalTitle>
          <AdditionalServices />
        </HrAdditionalCont>
      </motion.div>
    </HrSectionWrap>
  );
};

export default HrConsultingSection;
