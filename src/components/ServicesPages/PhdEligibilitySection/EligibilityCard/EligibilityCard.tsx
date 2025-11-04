import { Trans, useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import { parent } from "../../../../lib/animations/services/animations.phdlEligibility";
import {
  EligibilityCardList,
  EligibilityItem,
  EligibilityTitle,
} from "./EligibilityCard.styled";

type Item = { key: string; icon: string; width: number; height: number };

type EligibilityCardProps = {
  translationNs: string;
  titleKey: string;
  items: Item[];
};

const EligibilityCard = ({
  translationNs,
  titleKey,
  items,
}: EligibilityCardProps) => {
  const { t } = useTranslation(translationNs);
  const reduce = useReducedMotion();

  return (
    <motion.div
      role="region"
      aria-labelledby={titleKey}
      variants={reduce ? undefined : parent}
    >
      <EligibilityTitle id={titleKey}>
        <Trans t={t} i18nKey={titleKey} components={{ 1: <span /> }} />
      </EligibilityTitle>

      <EligibilityCardList>
        {items.map(({ key, icon, width, height }) => (
          <EligibilityItem key={key}>
            <svg width={width} height={height}>
              <use href={`/icons/sprite.svg#icon-${icon}`}></use>
            </svg>
            <p>
              <Trans t={t} i18nKey={key} components={{ 1: <strong /> }} />
            </p>
          </EligibilityItem>
        ))}
      </EligibilityCardList>
    </motion.div>
  );
};

export default EligibilityCard;
