import { useTranslation } from "react-i18next";
import {
  CardContainer,
  PhdReviewCont,
  PhdReviewImgCont,
  PhdReviewTextCont,
} from "./PhdReviewCard.styled";

type PhdReviewCardProps = {
  translationNs: string;
  nameKey: string;
  reviewKey: string;
  imgSrc: string;
  alt?: string;
  className?: string;
};

const PhdReviewCard = ({
  translationNs,
  nameKey,
  reviewKey,
  imgSrc,
  alt,
  className,
}: PhdReviewCardProps) => {
  const { t } = useTranslation(translationNs);

  const reviews = t(reviewKey, { returnObjects: true }) as string[];

  return (
    <CardContainer className={className}>
      <PhdReviewCont>
        <PhdReviewImgCont>
          <img
            src={`${imgSrc}.webp`}
            srcSet={`${imgSrc}@2x.webp 2x, ${imgSrc}@3x.webp 3x`}
            alt={alt || t(nameKey)}
            loading="lazy"
          />
        </PhdReviewImgCont>
        <PhdReviewTextCont>
          <h3>{t(nameKey)}</h3>

          <ul>
            {reviews.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </PhdReviewTextCont>
      </PhdReviewCont>
    </CardContainer>
  );
};

export default PhdReviewCard;
