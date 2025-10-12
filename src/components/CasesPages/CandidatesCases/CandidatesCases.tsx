import { useTranslation } from "react-i18next";
import {
  sectionV,
  titleV,
  blockV,
} from "../../../lib/animations/home/animations.swipers";
import {
  CandidatesCasesTitle,
  CandidatesSectionWrap,
  MergedCasesCont,
} from "./CandidatesCases.styled";
import AppSlider from "../../AppSlider/AppSlider";
import VideoReviewCard from "../../VideoReviewCard/VideoReviewCard";
import CasesMessage from "../../CasesMessage/CasesMessage";
import { casesCandidatesList } from "../../../lib/data/cases.candidates";
import { motion } from "framer-motion";

const CandidatesCases = () => {
  const ns = "casesCandidates";
  const { t } = useTranslation(ns);
  return (
    <CandidatesSectionWrap
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionV}
    >
      <CandidatesCasesTitle variants={titleV}>
        {t("title")}
      </CandidatesCasesTitle>
      <motion.div variants={blockV}>
        <AppSlider>
          {casesCandidatesList.map((item, i) => {
            if (item.kind === "video") {
              return (
                <VideoReviewCard
                  key={`v-${i}`}
                  youtubeUrl={item.url}
                  translationNs={ns}
                  author={item.author}
                  position={item.position}
                  className="vertical"
                  withBorders={false}
                  posterOverride={item.posterOverride}
                />
              );
            }
            if (item.kind === "pair") {
              return (
                <MergedCasesCont key={`p-${i}`}>
                  {[item.left, item.right].map((c, idx) => (
                    <CasesMessage
                      key={`p-${i}-${idx}`}
                      translationNs={ns}
                      imgSrc={c.img}
                      titleKey={c.title}
                      textKey={c.items}
                      className={c.className}
                    />
                  ))}
                </MergedCasesCont>
              );
            }
            return (
              <CasesMessage
                key={`s-${i}`}
                translationNs={ns}
                imgSrc={item.card.img}
                titleKey={item.card.title}
                textKey={item.card.items}
                className={item.card.className}
              />
            );
          })}
        </AppSlider>
      </motion.div>
    </CandidatesSectionWrap>
  );
};

export default CandidatesCases;
