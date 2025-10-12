import { Trans, useTranslation } from "react-i18next";
import { CasesTitle, CasesWrapper } from "./CasesReviewsSection.styled";
import VideoReviewCard from "../../VideoReviewCard/VideoReviewCard";
import CaseInfoCard from "../../CaseInfoCard/CaseInfoCard";
import AppSlider from "../../AppSlider/AppSlider";
import { casesReviewsSlides } from "../../../lib/data/home.page";
import {
  blockV,
  sectionV,
  titleV,
} from "../../../lib/animations/home/animations.swipers";
import { motion } from "framer-motion";

const CasesReviewsSection = () => {
  const { t } = useTranslation("home");

  return (
    <CasesWrapper
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionV}
    >
      <CasesTitle variants={titleV}>
        <Trans t={t} i18nKey="casesTitle" components={{ 1: <span /> }} />
      </CasesTitle>
      <motion.div variants={blockV}>
        <AppSlider>
          {casesReviewsSlides.map((slide, i) =>
            slide.type === "video" ? (
              <VideoReviewCard
                key={i}
                youtubeUrl={slide.youtubeUrl}
                author={slide.author}
                position={slide.position}
                posterOverride={slide.posterOverride}
              />
            ) : (
              <CaseInfoCard
                key={i}
                logos={slide.logos}
                keyPrefix={slide.keyPrefix}
              />
            )
          )}
        </AppSlider>
      </motion.div>
    </CasesWrapper>
  );
};

export default CasesReviewsSection;
