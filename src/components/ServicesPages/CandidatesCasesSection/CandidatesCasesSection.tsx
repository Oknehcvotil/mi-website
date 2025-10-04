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

const NS = "servicesForCandidates";

const CandidatesCasesSection = () => {
  const { t } = useTranslation(NS);

  const cards = [
    {
      img: "/images/mob/services-pages/resume-before",
      titleKey: "cases.before.cardTitle",
      pointsKey: "cases.before.points",
      altKey: "cases.before.alt",
    },
    {
      img: "/images/mob/services-pages/resume-after",
      titleKey: "cases.after.cardTitle",
      pointsKey: "cases.after.points",
      altKey: "cases.after.alt",
    },
  ] as const;

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
          <VideoReviewCard youtubeUrl="https://youtube.com/shorts/Mz-nywzOggg?feature=share" />
          {cards.map(({ img, titleKey, pointsKey, altKey }) => (
            <CandidatesCasesCard
              key={titleKey}
              translationNs={NS}
              title={t(titleKey)}
              list={t(pointsKey, { returnObjects: true }) as string[]}
              imageSrc={img}
              alt={t(altKey)}
            />
          ))}
        </AppSlider>
      </motion.div>
    </CandidatesCasesWrapper>
  );
};

export default CandidatesCasesSection;
