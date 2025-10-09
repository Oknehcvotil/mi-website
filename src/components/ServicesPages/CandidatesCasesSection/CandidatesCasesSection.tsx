import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import {
  CandidatesCasesTitle,
  CandidatesCasesWrapper,
} from "./CandidatesCasesSection.styled";
import {
  blockV,
  sectionV,
  titleV,
} from "../../../lib/animations/home/animations.swipers";
import VideoReviewCard from "../../VideoReviewCard/VideoReviewCard";
import AppSlider from "../../AppSlider/AppSlider";
import CandidatesCasesCard from "./CandidatesCasesCard/CandidatesCasesCard";
import { candidatesCasescards } from "../../../lib/data/services.pages";

const NS = "servicesForCandidates";

const CandidatesCasesSection = () => {
  const { t } = useTranslation(NS);

  return (
    <CandidatesCasesWrapper
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionV}
    >
      <CandidatesCasesTitle variants={titleV}>
        <Trans t={t} i18nKey="cases.title" components={{ 1: <span /> }} />
      </CandidatesCasesTitle>

      <motion.div variants={blockV}>
        <AppSlider>
          <VideoReviewCard
            youtubeUrl="https://www.youtube.com/shorts/mJKkUmSTbEE"
            posterOverride="/images/youtube-posters/alex-youtube-poster.webp"
          />
          {candidatesCasescards.map(({ img, titleKey, pointsKey, altKey }) => (
            <CandidatesCasesCard
              key={titleKey}
              translationNs="servicesForCandidates"
              titleKey={titleKey}
              pointsKey={pointsKey}
              imageSrc={img}
              altKey={altKey}
            />
          ))}
        </AppSlider>
      </motion.div>
    </CandidatesCasesWrapper>
  );
};

export default CandidatesCasesSection;
