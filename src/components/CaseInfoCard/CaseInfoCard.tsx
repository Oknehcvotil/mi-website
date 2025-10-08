import { useTranslation } from "react-i18next";
import {
  CardCont,
  CaseInfoCardWrapper,
  ImgWrap,
  Line,
  LineWrapper,
  TermsText,
  TermsTitle,
  VacList,
  CardWrap,
} from "./CaseInfoCard.styled";
import Container from "../Container/Container";

type CaseInfoCardProps = {
  logos: {
    src: string;
    width?: number;
    height?: number;
    alt?: string;
  }[];
  keyPrefix: string;
  className?: string;
  translationNs?: string | readonly string[];
};

const CaseInfoCard = ({
  logos,
  keyPrefix,
  className,
  translationNs = "reviews",
}: CaseInfoCardProps) => {
  const { t } = useTranslation(translationNs);

  const company = t(`${keyPrefix}.position`);
  const vacTitle = t(`${keyPrefix}.vacancies.title`);
  const vacItems = t(`${keyPrefix}.vacancies.items`, {
    returnObjects: true,
  }) as string[];
  const termsTitle = t(`${keyPrefix}.terms.title`);
  const termsText = t(`${keyPrefix}.terms.text`);

  return (
    <Container>
      <CaseInfoCardWrapper className={className} aria-label={company}>
        <CardWrap className={className}>
          <CardCont>
            <ImgWrap>
              {logos.map((logo, i) => (
                <img
                  key={i}
                  src={`${logo.src}.webp`}
                  srcSet={`
              ${logo.src}.webp 1x,
              ${logo.src}@2x.webp 2x,
              ${logo.src}@3x.webp 3x
            `}
                  width={logo.width ?? 175}
                  height={logo.height ?? 55}
                  alt={logo.alt ?? company}
                  loading="lazy"
                />
              ))}
            </ImgWrap>

            <div>
              <h2>{vacTitle}</h2>
              <VacList className={className}>
                {vacItems?.map((v) => (
                  <li key={v}>
                    <p>{v}</p>
                  </li>
                ))}
              </VacList>
            </div>

            <div>
              <TermsTitle className={className}>{termsTitle}</TermsTitle>
              <TermsText className={className}>{termsText}</TermsText>
            </div>
            <LineWrapper>
              <Line />
            </LineWrapper>
          </CardCont>
        </CardWrap>
      </CaseInfoCardWrapper>
    </Container>
  );
};

export default CaseInfoCard;
