import AppSlider from "../../../AppSlider/AppSlider";
import {
  blockV,
  sectionV,
} from "../../../../lib/animations/home/animations.swipers";
import { motion } from "framer-motion";
import CaseInfoCard from "../../../CaseInfoCard/CaseInfoCard";
import CasesMessage from "../../../CasesMessage/CasesMessage";
import { igamingItems } from "../../../../lib/data/cases.recruitment";

const NS = "casesRecruitment";

const IGamingCases = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionV}
    >
      <motion.div variants={blockV}>
        <AppSlider>
          {igamingItems.map((item, i) =>
            item.type === "msg" ? (
              <CasesMessage key={`m-${i}`} translationNs={NS} {...item} />
            ) : (
              <CaseInfoCard key={`c-${i}`} translationNs={NS} {...item} />
            )
          )}
        </AppSlider>
      </motion.div>
    </motion.section>
  );
};

export default IGamingCases;
