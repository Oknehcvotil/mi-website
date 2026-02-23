import { Trans, useTranslation } from "react-i18next";
import {
  CardsWrapper,
  CasesTitle,
  CasesWrapper,
  ReviewsLink,
  SliderCont,
} from "./CasesReviewsSection.styled";
import VideoReviewCard from "../../VideoReviewCard/VideoReviewCard";
import CaseInfoCard from "../../CaseInfoCard/CaseInfoCard";
import AppSlider from "../../AppSlider/AppSlider";
import { casesReviewsSlides } from "../../../lib/data/home.page";
import {
  blockV,
  sectionV,
  titleV,
} from "../../../lib/animations/home/animations.swipers";
import { useMatch } from "react-router-dom";
import { useMediaQuery } from "../../../lib/hooks/useMediaQuery";

const CasesReviewsSection = () => {
  const { t } = useTranslation("home");
  const match = useMatch("/:lang/*");
  const currentLang = match?.params.lang ?? "en";

  const isTablet = useMediaQuery("(min-width: 768px)");

  const groupedSlides = isTablet
    ? casesReviewsSlides.reduce<(typeof casesReviewsSlides)[]>(
        (acc, _, index, arr) => {
          if (index % 2 === 0) {
            acc.push(arr.slice(index, index + 2));
          }
          return acc;
        },
        [],
      )
    : casesReviewsSlides.map((slide) => [slide]);

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
      <SliderCont variants={blockV} >
        <AppSlider>
          {groupedSlides.map((group, slideIndex) => (
            <CardsWrapper key={slideIndex}>
              {group.map((slide, i) =>
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
                ),
              )}
            </CardsWrapper>
          ))}
        </AppSlider>
      </SliderCont>
      <ReviewsLink to={`/${currentLang}/cases/recruitment`}>
        {t("moreCasesAndReviews")}
      </ReviewsLink>
    </CasesWrapper>
  );
};

export default CasesReviewsSection;
