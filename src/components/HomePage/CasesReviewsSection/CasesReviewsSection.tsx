import { Trans, useTranslation } from "react-i18next";
import { CasesTitle, CasesWrapper } from "./CasesReviewsSection.styled";
import VideoReviewCard from "../../VideoReviewCard/VideoReviewCard";
import CaseInfoCard from "../../CaseInfoCard/CaseInfoCard";
import AppSlider from "../../AppSlider/AppSlider";
import { casesReviewsSlides } from "../../../lib/data/home.page";

const CasesReviewsSection = () => {
  const { t } = useTranslation("home");

  return (
    <CasesWrapper>
      <CasesTitle>
        <Trans t={t} i18nKey="casesTitle" components={{ 1: <span /> }} />
      </CasesTitle>
      <AppSlider>
        {casesReviewsSlides.map((slide, i) =>
          slide.type === "video" ? (
            <VideoReviewCard
              key={i}
              youtubeUrl={slide.youtubeUrl}
              author={slide.author}
              position={slide.position}
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
    </CasesWrapper>
  );
};

export default CasesReviewsSection;
