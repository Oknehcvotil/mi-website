import AppSlider from "../../../AppSlider/AppSlider";
import {
  blockV,
  sectionV,
} from "../../../../lib/animations/home/animations.swipers";
import { motion } from "framer-motion";
import VideoReviewCard from "../../../VideoReviewCard/VideoReviewCard";
import CaseInfoCard from "../../../CaseInfoCard/CaseInfoCard";
import CasesMessage from "../../../CasesMessage/CasesMessage";
import { othersItems } from "../../../../lib/data/cases.recruitment";


const OtherCases = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionV}
    >
      <motion.div variants={blockV}>
        <AppSlider>
          {othersItems.map((item, i) => {
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

export default OtherCases;
