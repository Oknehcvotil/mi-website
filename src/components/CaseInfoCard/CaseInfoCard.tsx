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
  LogoTitle,
} from "./CaseInfoCard.styled";
import Container from "../Container/Container";

type CaseInfoCardProps = {
  logos?: {
    src: string;
    width?: number;
    height?: number;
    alt?: string;
  }[];
  logoTitle?: string;
  keyPrefix: string;
  className?: string;
  translationNs?: string;
};

const CaseInfoCard = ({
  logos,
  logoTitle,
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
    <Container style={{ padding: "0 10px" }}>
      <CaseInfoCardWrapper className={className} aria-label={company}>
        <CardWrap className={className}>
          <CardCont>
            <ImgWrap>
              {logos && logos.length > 0 ? (
                logos.map((logo, i) => (
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
                ))
              ) : logoTitle ? (
                <LogoTitle className={`${className}-caseinfo-title`}>
                  {t(logoTitle)}
                </LogoTitle>
              ) : null}
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
