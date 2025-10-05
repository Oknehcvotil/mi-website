import { useTranslation } from "react-i18next";
import {
  PhdReviewCont,
  PhdReviewImgCont,
  PhdReviewTextCont,
} from "./PhdReviewCard.styled";
import Container from "../../../Container/Container";

type PhdReviewCardProps = {
  translationNs: string;
  nameKey: string;
  reviewKey: string;
  imgSrc: string;
  alt?: string;
};

const PhdReviewCard = ({
  translationNs,
  nameKey,
  reviewKey,
  imgSrc,
  alt,
}: PhdReviewCardProps) => {
  const { t } = useTranslation(translationNs);

  const reviews = t(reviewKey, { returnObjects: true }) as string[];

  return (
    <Container>
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
    </Container>
  );
};

export default PhdReviewCard;
