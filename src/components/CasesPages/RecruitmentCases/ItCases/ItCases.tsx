import AppSlider from "../../../AppSlider/AppSlider";
import {
  blockV,
  sectionV,
} from "../../../../lib/animations/home/animations.swipers";
import { motion } from "framer-motion";
import VideoReviewCard from "../../../VideoReviewCard/VideoReviewCard";
import CaseInfoCard from "../../../CaseInfoCard/CaseInfoCard";
import CasesMessage from "../../../CasesMessage/CasesMessage";
import { itItems } from "../../../../lib/data/cases.recruitment";

const ItCases = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionV}
    >
      <motion.div variants={blockV}>
        <AppSlider>
          {itItems.map((item, i) => {
            switch (item.type) {
              case "video":
                return <VideoReviewCard key={`v-${i}`} {...item.props} />;
              case "case":
                return (
                  <CaseInfoCard
                    key={`c-${i}`}
                    translationNs="casesRecruitment"
                    keyPrefix={item.keyPrefix}
                    logos={item.logos}
                  />
                );
              case "msg":
                // translationNs добавляем здесь, чтобы не дублировать в массиве
                return (
                  <CasesMessage
                    key={`m-${i}`}
                    translationNs="casesRecruitment"
                    {...item}
                  />
                );
            }
          })}
        </AppSlider>
      </motion.div>
    </motion.section>
  );
};

export default ItCases;
