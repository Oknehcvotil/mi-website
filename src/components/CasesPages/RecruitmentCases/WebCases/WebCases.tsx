import AppSlider from "../../../AppSlider/AppSlider";
import {
  blockV,
  sectionV,
} from "../../../../lib/animations/home/animations.swipers";
import { motion } from "framer-motion";
import VideoReviewCard from "../../../VideoReviewCard/VideoReviewCard";
import CaseInfoCard from "../../../CaseInfoCard/CaseInfoCard";
import CasesMessage from "../../../CasesMessage/CasesMessage";
import { webItems } from "../../../../lib/data/cases.recruitment";

const NS = "casesRecruitment";

const WebCases = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionV}
    >
      <motion.div variants={blockV}>
        <AppSlider>
          {webItems.map((item, i) => {
            switch (item.type) {
              case "video":
                return (
                  <VideoReviewCard
                    key={`v-${i}`}
                    translationNs={NS}
                    {...item.props}
                  />
                );
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

export default WebCases;
