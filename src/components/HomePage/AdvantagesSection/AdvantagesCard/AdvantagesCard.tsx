import { type Variants } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import { ListItem, AdvText } from "./AdvantagesCards.styled";
import SVGIcon from "../../../SVGIcon/SVGIcon";

type AdvantagesCardProps = {
  img: {
    mob: string;
    alt: string;
  };
  title: string;
  variants?: Variants;
};

const AdvantagesCard = ({ img, title, variants }: AdvantagesCardProps) => {
  const { t } = useTranslation("home");

  return (
    <ListItem
      variants={variants}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      aria-label={title}
    >
      <div>
        <SVGIcon width={130} height={130} iconId={img.mob} />
      </div>

      <AdvText>
        <Trans t={t} i18nKey={title} components={{ 1: <span /> }} />
      </AdvText>
    </ListItem>
  );
};

export default AdvantagesCard;
