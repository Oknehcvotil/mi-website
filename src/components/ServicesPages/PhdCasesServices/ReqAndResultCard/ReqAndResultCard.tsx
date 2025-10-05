import { useTranslation } from "react-i18next";
import {
  ReqAndResultCardCont,
  ReqAndResultCardWrap,
  ReqAndResultWrapper,
  ReqCont,
  ResultCont,
} from "./ReqAndResultCard.styled";

type ReqAndResultCardProps = {
  translationNs: string;
  reqKey: string;
  resultKey: string;
};

const ReqAndResultCard = ({
  translationNs,
  reqKey,
  resultKey,
}: ReqAndResultCardProps) => {
  const { t } = useTranslation(translationNs);

  return (
    <ReqAndResultWrapper>
      <ReqAndResultCardWrap>
        <ReqAndResultCardCont>
          <h4>{t("cases.requestTitle")}</h4>
          <ReqCont>
            <p>{t(reqKey)}</p>
          </ReqCont>
          <h4>{t("cases.resultTitle")}</h4>
          <ResultCont>
            <p>{t(resultKey)}</p>
          </ResultCont>
        </ReqAndResultCardCont>
      </ReqAndResultCardWrap>
    </ReqAndResultWrapper>
  );
};

export default ReqAndResultCard;
