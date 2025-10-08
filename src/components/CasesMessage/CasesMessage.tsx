import { useTranslation } from "react-i18next";
import {
  CasesImgCont,
  CasesMessageList,
  CasesMessageTextCard,
  CasesMessageTitle,
  CasesMessageWrap,
} from "./CasesMessage.styled";
import Container from "../Container/Container";

type CasesMessage = {
  translationNs: string;
  titleKey: string;
  textKey: string;
  imgSrc: string;
  alt?: string;
  className?: string;
};

const CasesMessage = ({
  translationNs,
  titleKey,
  textKey,
  imgSrc,
  alt,
  className,
}: CasesMessage) => {
  const { t } = useTranslation(translationNs);

  const items = t(`${textKey}`, {
    returnObjects: true,
    defaultValue: [],
  }) as string[];

  return (
    <Container>
      <CasesMessageWrap className={className}>
        <CasesImgCont>
          <img
            src={`${imgSrc}.webp`}
            srcSet={`${imgSrc}@2x.webp 2x, ${imgSrc}@3x.webp 3x`}
            alt={alt || t(`${titleKey}.title`)}
            loading="lazy"
          />
        </CasesImgCont>
        <CasesMessageTextCard>
          <CasesMessageTitle>{t(`${titleKey}`)}</CasesMessageTitle>
          <CasesMessageList>
            {items.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </CasesMessageList>
        </CasesMessageTextCard>
      </CasesMessageWrap>
    </Container>
  );
};

export default CasesMessage;
