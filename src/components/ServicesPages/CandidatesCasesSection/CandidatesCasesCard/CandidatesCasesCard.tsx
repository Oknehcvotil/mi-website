import { useTranslation } from "react-i18next";
import Container from "../../../Container/Container";
import {
  CadidatesImgCont,
  CandidatesCasesList,
  CandidatesCasesTitle,
} from "./CandidatesCasesCard.styled";

type CandidatesCasesCardProps = {
  translationNs: string;
  title: string;
  list: string[];
  imageSrc: string;
  alt: string;
};

const CandidatesCasesCard = ({
  translationNs,
  title,
  list,
  imageSrc,
  alt,
}: CandidatesCasesCardProps) => {
  const { t } = useTranslation(translationNs);

  return (
    <Container>
      <CandidatesCasesTitle>{t(title)}</CandidatesCasesTitle>
      <CandidatesCasesList>
        {list.map((itemKey) => (
          <li key={itemKey}>{t(itemKey)}</li>
        ))}
      </CandidatesCasesList>
      <CadidatesImgCont>
        <picture>
          <source
            srcSet={`
      ${imageSrc}.webp 1x,
      ${imageSrc}@2x.webp 2x,
      ${imageSrc}@3x.webp 3x
    `}
            type="image/webp"
          />
          <img src={`${imageSrc}.jpg`} alt={t(alt)} loading="lazy" />
        </picture>
      </CadidatesImgCont>
    </Container>
  );
};

export default CandidatesCasesCard;
