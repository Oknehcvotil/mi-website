import { Trans, useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import { parent } from "../../../../lib/animations/services/animations.phdlEligibility";
import {
  EligibilityCardList,
  EligibilityItem,
  EligibilityTitle,
} from "./PhdEligibilityCard.styled";

type PhdEligibilityCardProps = {
  translationNs: string;
  titleKey: string;
  itemsKeys: string[];
};

const PhdEligibilityCard = ({
  translationNs,
  titleKey,
  itemsKeys,
}: PhdEligibilityCardProps) => {
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
        {itemsKeys.map((k) => (
          <EligibilityItem key={k}>
            <p>
              <Trans t={t} i18nKey={k} components={{ 1: <strong /> }} />
            </p>
          </EligibilityItem>
        ))}
      </EligibilityCardList>
    </motion.div>
  );
};

export default PhdEligibilityCard;
