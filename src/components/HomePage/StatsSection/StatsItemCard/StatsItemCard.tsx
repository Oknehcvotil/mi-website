import { useTranslation, Trans } from "react-i18next";
import { StatsItem, ValueText, LabelText } from "./StatsItemCard.styled";
import { itemIn } from "../../../../lib/animations/home/animations.stats";

type StatsItemCardProps = {
  value: string | number;
  labelKey: string;
};

export const StatsItemCard = ({ value, labelKey }: StatsItemCardProps) => {
  const { t } = useTranslation("home");

  return (
    <StatsItem
      variants={itemIn}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <ValueText>{value}</ValueText>
      <LabelText>
        <Trans t={t} i18nKey={labelKey} components={{ 1: <span /> }} />
      </LabelText>
    </StatsItem>
  );
};
