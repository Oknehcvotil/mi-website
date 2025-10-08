import { Trans, useTranslation } from "react-i18next";
import {
  CasesImgCont,
  CasesMessageList,
  CasesMessageTextCard,
  CasesMessageTitle,
  CasesMessageWrap,
  MessageTime,
} from "./CasesMessage.styled";
import Container from "../Container/Container";
import { cx } from "../../lib/helpers/helpers";

type CasesMessage = {
  translationNs: string;
  titleKey: string;
  textKey: string;
  imgSrc: string;
  alt?: string;
  className?: string | string[];
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

  const merged = cx(className);

  return (
    <Container>
      <CasesMessageWrap className={merged}>
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
          <CasesMessageList className={merged}>
            {items.map((text, i) => (
              <li key={i}>
                <Trans t={t} i18nKey={text} components={{ 1: <span /> }} />
              </li>
            ))}
          </CasesMessageList>
        </CasesMessageTextCard>
        <MessageTime>11:45</MessageTime>
      </CasesMessageWrap>
    </Container>
  );
};

export default CasesMessage;
