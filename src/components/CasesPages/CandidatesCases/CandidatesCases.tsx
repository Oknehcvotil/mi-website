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
import { useMediaQuery } from "../../../lib/hooks/useMediaQuery";

const CandidatesCases = () => {
  const ns = "casesCandidates";
  const { t } = useTranslation(ns);
  const isTablet = useMediaQuery("(min-width: 768px)");

  const slides = isTablet
    ? casesCandidatesList.reduce<(typeof casesCandidatesList)[]>(
        (acc, item) => {
          if (item.kind === "pair") {
            acc.push([item]);
            return acc;
          }

          const lastGroup = acc.at(-1);

          if (
            lastGroup &&
            lastGroup.length === 1 &&
            lastGroup[0].kind !== "pair"
          ) {
            lastGroup.push(item);
            return acc;
          }

          acc.push([item]);
          return acc;
        },
        [],
      )
    : casesCandidatesList.map((item) => [item]);

  const renderSlideItem = (
    item: (typeof casesCandidatesList)[number],
    slideIndex: number,
    itemIndex: number,
  ) => {
    if (item.kind === "video") {
      return (
        <VideoReviewCard
          key={`v-${slideIndex}-${itemIndex}`}
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
      return [
        <CasesMessage
          key={`p-${slideIndex}-${itemIndex}-left`}
          translationNs={ns}
          imgSrc={item.left.img}
          titleKey={item.left.title}
          textKey={item.left.items}
          className={item.left.className}
        />,
        <CasesMessage
          key={`p-${slideIndex}-${itemIndex}-right`}
          translationNs={ns}
          imgSrc={item.right.img}
          titleKey={item.right.title}
          textKey={item.right.items}
          className={item.right.className}
        />,
      ];
    }

    return (
      <CasesMessage
        key={`s-${slideIndex}-${itemIndex}`}
        translationNs={ns}
        imgSrc={item.card.img}
        titleKey={item.card.title}
        textKey={item.card.items}
        className={item.card.className}
      />
    );
  };

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
          {slides.map((group, slideIndex) => (
            <MergedCasesCont
              key={`slide-${slideIndex}`}
              className={group.length === 1 ? "single" : undefined}
            >
              {group.map((item, itemIndex) =>
                renderSlideItem(item, slideIndex, itemIndex),
              )}
            </MergedCasesCont>
          ))}
        </AppSlider>
      </motion.div>
    </CandidatesSectionWrap>
  );
};

export default CandidatesCases;
