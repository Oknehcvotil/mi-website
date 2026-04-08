import { type Variants } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import { ListItem, AdvText, IconWrap } from "./AdvantagesCards.styled";
import {
  iconIn,
  textIn,
} from "../../../../lib/animations/home/animations.advantages";
import { useReducedMotion } from "framer-motion";

type AdvantagesCardProps = {
  img: {
    mob: string;
    alt: string;
  };
  title: string;
  index: number;
  variants?: Variants;
};

const AdvantagesCard = ({ img, title, index, variants }: AdvantagesCardProps) => {
  const { t } = useTranslation("home");
  const reduce = !!useReducedMotion();

  return (
    <ListItem variants={variants} custom={index} aria-label={title}>
      <IconWrap variants={reduce ? undefined : iconIn} custom={index}>
        <img src={`/images/mob/${img.mob}.svg`} alt={img.alt} />
      </IconWrap>

      <AdvText variants={reduce ? undefined : textIn} custom={index}>
        <Trans t={t} i18nKey={title} components={{ 1: <span /> }} />
      </AdvText>
    </ListItem>
  );
};

export default AdvantagesCard;
