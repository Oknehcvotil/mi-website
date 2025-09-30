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

type CaseInfoCardProps = {
  logos: {
    src: string;
    width?: number;
    height?: number;
    alt?: string;
  }[];
  keyPrefix: string;
  className?: string;
};

const CaseInfoCard = ({ logos, keyPrefix, className }: CaseInfoCardProps) => {
  const { t } = useTranslation("reviews");

  const company = t(`${keyPrefix}.position`);
  const vacTitle = t(`${keyPrefix}.vacancies.title`);
  const vacItems = t(`${keyPrefix}.vacancies.items`, {
    returnObjects: true,
  }) as string[];
  const termsTitle = t(`${keyPrefix}.terms.title`);
  const termsText = t(`${keyPrefix}.terms.text`);

  return (
    <CaseInfoCardWrapper className={className} aria-label={company}>
      <CardWrap>
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
            <VacList>
              {vacItems?.map((v) => (
                <li key={v}>
                  <p>{v}</p>
                </li>
              ))}
            </VacList>
          </div>

          <div>
            <TermsTitle>{termsTitle}</TermsTitle>
            <TermsText>{termsText}</TermsText>
          </div>
          <LineWrapper>
            <Line />
          </LineWrapper>
        </CardCont>
      </CardWrap>
    </CaseInfoCardWrapper>
  );
};

export default CaseInfoCard;
