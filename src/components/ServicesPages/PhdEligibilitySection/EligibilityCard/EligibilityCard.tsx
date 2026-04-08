import { Trans, useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import {
  iconVariants,
  itemVariants,
  listVariants,
  titleVariants,
} from "../../../../lib/animations/services/animations.phdlEligibility";
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
    <div role="region" aria-labelledby={titleKey}>
      <EligibilityTitle id={titleKey} variants={reduce ? undefined : titleVariants}>
        <Trans t={t} i18nKey={titleKey} components={{ 1: <span /> }} />
      </EligibilityTitle>

      <EligibilityCardList
        className={titleKey === "zero.title" ? "zero-to-pro" : undefined}
        variants={reduce ? undefined : listVariants}
      >
        {items.map(({ key, icon, width, height }, index) => (
          <EligibilityItem
            key={key}
            variants={reduce ? undefined : itemVariants}
            custom={index}
          >
            <motion.svg
              width={width}
              height={height}
              variants={reduce ? undefined : iconVariants}
              custom={index}
            >
              <use href={`/icons/sprite.svg#icon-${icon}`}></use>
            </motion.svg>
            <p>
              <Trans t={t} i18nKey={key} components={{ 1: <strong /> }} />
            </p>
          </EligibilityItem>
        ))}
      </EligibilityCardList>
    </div>
  );
};

export default EligibilityCard;
