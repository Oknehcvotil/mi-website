import { Trans, useTranslation } from "react-i18next";
import type { Plan } from "../../../../lib/types/servicesPages.type";
import TopSaleBadge from "../TopSaleBadge/TopSaleBadge";
import { useReducedMotion } from "framer-motion";
import { childVariants } from "../../../../lib/animations/services/animations.pricing";
import {
  CardTitle,
  CardWrap,
  CheckBox,
  FeaturesItems,
} from "./PricingCard.styled";
import ConsultBtn from "../../../Buttons/ConsultBtn/ConsultBtn";

type PricingCardProps = {
  plan: Plan;
};

const PricingCard = ({ plan }: PricingCardProps) => {
  const { translationNs, titleKey, features, topSale, className } = plan;
  const { t } = useTranslation(translationNs);
  const reduce = useReducedMotion();

  return (
    <CardWrap
      className={className}
      variants={reduce ? undefined : childVariants}
    >
      {topSale && <TopSaleBadge>{t("topSale")}</TopSaleBadge>}

      <CardTitle className={className}>{t(titleKey)}</CardTitle>

      <ul>
        {features.map((f, i) => (
          <FeaturesItems
            key={i}
            className={f.className}
            data-disabled={f.disabled ? "true" : "false"}
            aria-disabled={f.disabled || undefined}
          >
            <CheckBox className={`${className ?? ""} ${f.className ?? ""}`}>
              <svg width={9} height={8}>
                <use href="/icons/sprite.svg#icon-check"></use>
              </svg>
            </CheckBox>
            <Trans t={t} i18nKey={f.key} components={{ 1: <span /> }} />
          </FeaturesItems>
        ))}
      </ul>

      <ConsultBtn variant="secondary" />
    </CardWrap>
  );
};

export default PricingCard;
