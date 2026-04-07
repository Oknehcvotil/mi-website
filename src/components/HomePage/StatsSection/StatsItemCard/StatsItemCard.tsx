import { useTranslation, Trans } from "react-i18next";
import { StatsItem, ValueText, LabelText } from "./StatsItemCard.styled";
import { itemIn } from "../../../../lib/animations/home/animations.stats";
import type { Variants } from "framer-motion";

type StatsItemCardProps = {
  value: string | number;
  labelKey: string;
  variants?: Variants;
  useOwnViewportAnimation?: boolean;
};

export const StatsItemCard = ({
  value,
  labelKey,
  variants = itemIn,
  useOwnViewportAnimation = true,
}: StatsItemCardProps) => {
  const { t } = useTranslation("home");

  return (
    <StatsItem
      variants={variants}
      initial={useOwnViewportAnimation ? { opacity: 0, y: 16 } : undefined}
      whileInView={useOwnViewportAnimation ? { opacity: 1, y: 0 } : undefined}
      transition={
        useOwnViewportAnimation
          ? { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
          : undefined
      }
      viewport={
        useOwnViewportAnimation ? { once: true, amount: 0.4 } : undefined
      }
    >
      <ValueText>{value}</ValueText>
      <LabelText>
        <Trans t={t} i18nKey={labelKey} components={{ 1: <span /> }} />
      </LabelText>
    </StatsItem>
  );
};
