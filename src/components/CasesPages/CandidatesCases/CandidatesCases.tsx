import { useTranslation } from "react-i18next";
import {
  sectionV,
  titleV,
  blockV,
} from "../../../lib/animations/home/animations.swipers";
import {
  CandidatesCasesTitle,
  CandidatesSectionWrap,
  PairCasesColumn,
} from "./CandidatesCases.styled";
import AppSlider from "../../AppSlider/AppSlider";
import VideoReviewCard from "../../VideoReviewCard/VideoReviewCard";
import CasesMessage from "../../CasesMessage/CasesMessage";
import { casesCandidatesList } from "../../../lib/data/cases.candidates";
import { motion } from "framer-motion";
import { useMediaQuery } from "../../../lib/hooks/useMediaQuery";
import CardsWrapper from "../CardsWrapper/CardsWrapper";

const CandidatesCases = () => {
  const ns = "casesCandidates";
  const { t } = useTranslation(ns);
  const isTablet = useMediaQuery("(min-width: 768px)");

  const slides = isTablet
    ? casesCandidatesList.reduce<(typeof casesCandidatesList)[]>(
        (acc, _item, index, array) => {
          if (index % 2 === 0) {
            acc.push(array.slice(index, index + 2));
          }

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
    const withCandidatesMessageClass = (value?: string | string[]) =>
      Array.isArray(value)
        ? [...value, "candidates-message-card"]
        : value
          ? [value, "candidates-message-card"]
          : ["candidates-message-card"];

    if (item.kind === "video") {
      return (
        <VideoReviewCard
          key={`v-${slideIndex}-${itemIndex}`}
          youtubeUrl={item.url}
          translationNs={ns}
          author={item.author}
          position={item.position}
          className="vertical"
          classes={{
            root: "candidates-cases-video",
            meta: "candidates-cases-video-meta",
          }}
          withBorders={false}
          posterOverride={item.posterOverride}
        />
      );
    }

    if (item.kind === "pair") {
      return (
        <PairCasesColumn key={`p-${slideIndex}-${itemIndex}`}>
          <CasesMessage
            translationNs={ns}
            imgSrc={item.left.img}
            titleKey={item.left.title}
            textKey={item.left.items}
            className={withCandidatesMessageClass(item.left.className)}
          />
          <CasesMessage
            translationNs={ns}
            imgSrc={item.right.img}
            titleKey={item.right.title}
            textKey={item.right.items}
            className={withCandidatesMessageClass(item.right.className)}
          />
        </PairCasesColumn>
      );
    }

    return (
      <CasesMessage
        key={`s-${slideIndex}-${itemIndex}`}
        translationNs={ns}
        imgSrc={item.card.img}
        titleKey={item.card.title}
        textKey={item.card.items}
        className={withCandidatesMessageClass(item.card.className)}
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
            <CardsWrapper
              key={`slide-${slideIndex}`}
              isSingle={group.length === 1}
            >
              {group.map((item, itemIndex) =>
                renderSlideItem(item, slideIndex, itemIndex),
              )}
            </CardsWrapper>
          ))}
        </AppSlider>
      </motion.div>
    </CandidatesSectionWrap>
  );
};

export default CandidatesCases;
