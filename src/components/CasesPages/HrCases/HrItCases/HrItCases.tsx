import AppSlider from "../../../AppSlider/AppSlider";
import {
  blockV,
  sectionV,
} from "../../../../lib/animations/home/animations.swipers";
import { motion } from "framer-motion";
import CaseInfoCard from "../../../CaseInfoCard/CaseInfoCard";
import CasesMessage from "../../../CasesMessage/CasesMessage";
import { hrItItems } from "../../../../lib/data/cases.hr";

const NS = "casesHr";

const HrItCases = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionV}
    >
      <motion.div variants={blockV}>
        <AppSlider pairOnTablet>
          {hrItItems.map((item, i) => {
            switch (item.type) {
              case "case":
                return (
                  <CaseInfoCard
                    key={`c-${i}`}
                    translationNs={NS}
                    keyPrefix={item.keyPrefix}
                    logos={item.logos}
                  />
                );
              case "msg":
                return (
                  <CasesMessage key={`m-${i}`} translationNs={NS} {...item} />
                );
            }
          })}
        </AppSlider>
      </motion.div>
    </motion.section>
  );
};

export default HrItCases;
