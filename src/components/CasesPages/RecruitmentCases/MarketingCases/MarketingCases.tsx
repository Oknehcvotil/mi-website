import AppSlider from "../../../AppSlider/AppSlider";
import {
  blockV,
  sectionV,
} from "../../../../lib/animations/home/animations.swipers";
import { motion } from "framer-motion";
import VideoReviewCard from "../../../VideoReviewCard/VideoReviewCard";
import CaseInfoCard from "../../../CaseInfoCard/CaseInfoCard";
import CasesMessage from "../../../CasesMessage/CasesMessage";
import { marketingItems } from "../../../../lib/data/cases.recruitment";

const NS = "casesRecruitment";

const MarketingCases = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionV}
    >
      <motion.div variants={blockV}>
        <AppSlider>
          {marketingItems.map((item, i) => {
            if (item.type === "video")
              return (
                <VideoReviewCard
                  key={`v-${i}`}
                  translationNs={NS}
                  {...item.props}
                />
              );
            if (item.type === "case")
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
            return <CasesMessage key={`m-${i}`} translationNs={NS} {...item} />;
          })}
        </AppSlider>
      </motion.div>
    </motion.section>
  );
};

export default MarketingCases;
