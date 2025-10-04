import { useTranslation } from "react-i18next";
import Container from "../../../Container/Container";
import {
  CadidatesImgCont,
  CandidatesCasesList,
  CandidatesCasesTitle,
} from "./CandidatesCasesCard.styled";

type CandidatesCasesCardProps = {
  translationNs: string;
  titleKey: string; 
  pointsKey: string; 
  imageSrc: string; 
  altKey: string; 
};

const CandidatesCasesCard = ({
  translationNs,
  titleKey,
  pointsKey,
  imageSrc,
  altKey,
}: CandidatesCasesCardProps) => {
  const { t } = useTranslation(translationNs);

  const points = t(pointsKey, { returnObjects: true }) as string[];

  return (
    <Container>
      <CandidatesCasesTitle>{t(titleKey)}</CandidatesCasesTitle>

      <CandidatesCasesList>
        {points.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </CandidatesCasesList>

      <CadidatesImgCont>
        <picture>
          <source
            srcSet={`${imageSrc}.webp 1x, ${imageSrc}@2x.webp 2x, ${imageSrc}@3x.webp 3x`}
            type="image/webp"
          />
          <img src={`${imageSrc}.jpg`} alt={t(altKey)} loading="lazy" />
        </picture>
      </CadidatesImgCont>
    </Container>
  );
};

export default CandidatesCasesCard;
