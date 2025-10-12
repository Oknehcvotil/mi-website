import AppSlider from "../../AppSlider/AppSlider";
import CaseInfoCard from "../../CaseInfoCard/CaseInfoCard";
import CasesMessage from "../../CasesMessage/CasesMessage";
import {
  blockV,
  sectionV,
} from "../../../lib/animations/home/animations.swipers";
import { motion } from "framer-motion";

const BusinessCases = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionV}
    >
      <motion.div variants={blockV}>
        <AppSlider>
          <CasesMessage
            translationNs="casesBusiness"
            imgSrc="/images/cases-pages/business/kitrum-case"
            titleKey="cases.kitrum.title"
            textKey="cases.kitrum.items"
          />
          <CaseInfoCard
            logos={[
              { src: "/images/clients-logos/kitrum", width: 170, height: 50 },
            ]}
            keyPrefix="cases.kitrum.review"
            translationNs="casesBusiness"
            className="cases--business-psyhology"
          />
        </AppSlider>
      </motion.div>
    </motion.section>
  );
};

export default BusinessCases;
