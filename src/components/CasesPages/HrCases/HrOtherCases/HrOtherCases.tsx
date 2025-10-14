import AppSlider from "../../../AppSlider/AppSlider";
import {
  blockV,
  sectionV,
} from "../../../../lib/animations/home/animations.swipers";
import { motion } from "framer-motion";
import CaseInfoCard from "../../../CaseInfoCard/CaseInfoCard";
import CasesMessage from "../../../CasesMessage/CasesMessage";
import { hrOthersItems } from "../../../../lib/data/cases.hr";

const NS = "casesHr";

const HrOtherCases = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionV}
    >
      <motion.div variants={blockV}>
        <AppSlider>
          {hrOthersItems.map((item, i) => {
            switch (item.type) {
              case "case":
                return (
                  <CaseInfoCard
                    key={`c-${i}`}
                    translationNs={NS}
                    keyPrefix={item.keyPrefix}
                    logos={item.logos}
                    logoTitle={item.logoTitle}
                    className={item.className}
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

export default HrOtherCases;
