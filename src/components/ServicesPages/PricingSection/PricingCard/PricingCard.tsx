import { Trans, useTranslation } from "react-i18next";
import type { Plan } from "../../../../lib/types/servicesPages.type";
import TopSaleBadge from "../TopSaleBadge/TopSaleBadge";
import { useReducedMotion } from "framer-motion";
import { childVariants } from "../../../../lib/animations/services/animations.pricing";
import {
  CardContent,
  CardTitle,
  CardWrap,
  CheckBox,
  FeaturesItems,
} from "./PricingCard.styled";
import ConsultBtn from "../../../Buttons/ConsultBtn/ConsultBtn";

type PricingCardProps = {
  plan: Plan;
  sectionClassName?: string;
};

const PricingCard = ({ plan, sectionClassName }: PricingCardProps) => {
  const { translationNs, titleKey, features, topSale, className } = plan;
  const { t } = useTranslation(translationNs);
  const reduce = useReducedMotion();

  const sharedClassName = className ?? "";
  const isPhdPricingCard = sectionClassName?.includes("phd-pricing-layout");
  const cardClassName = [
    sharedClassName,
    isPhdPricingCard && "phd-pricing-card",
  ]
    .filter(Boolean)
    .join(" ");
  const titleClassName = [
    sharedClassName,
    isPhdPricingCard && "phd-pricing-card-title",
  ]
    .filter(Boolean)
    .join(" ");
  const textClassName = isPhdPricingCard ? "phd-pricing-card-text" : "";
  const buttonClassName = [
    "services-pricing--card",
    sharedClassName,
    isPhdPricingCard && "phd-pricing-card-button",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <CardWrap
      className={cardClassName}
      variants={reduce ? undefined : childVariants}
    >
      <CardContent className={sharedClassName}>
        {topSale && <TopSaleBadge>{t("topSale")}</TopSaleBadge>}

        <CardTitle className={titleClassName}>{t(titleKey)}</CardTitle>

        <ul>
          {features.map((f, i) => (
            <FeaturesItems
              key={i}
              className={[sharedClassName, textClassName, f.className]
                .filter(Boolean)
                .join(" ")}
              data-disabled={f.disabled ? "true" : "false"}
              aria-disabled={f.disabled || undefined}
            >
              <CheckBox
                className={`${sharedClassName} ${f.className ?? ""}`.trim()}
              >
                <svg width={9} height={8}>
                  <use href="/icons/sprite.svg#icon-check"></use>
                </svg>
              </CheckBox>
              <p className={textClassName}>
                <Trans t={t} i18nKey={f.key} components={{ 1: <span /> }} />
              </p>
            </FeaturesItems>
          ))}
        </ul>

        <ConsultBtn variant="secondary" className={buttonClassName} />
      </CardContent>
    </CardWrap>
  );
};

export default PricingCard;
