import { Card, IconCont, ContText } from "./ValuesCards.styled"
import { cardIn, inViewViewport } from "../../../../lib/animations/home/animations.values";

type ValueCardProps = {
  icon: string; 
  text: string;
  delay?: number;
};

const ValueCard = ({ icon, text, delay = 0 }: ValueCardProps) => {
  return (
    <Card
      variants={cardIn(delay)}
      initial="hidden"
      whileInView="show"
      viewport={inViewViewport}
    >
      <IconCont>
        <svg width={30} height={30} aria-hidden="true" focusable="false">
          <use href={`/icons/sprite.svg#${icon}`}></use>
        </svg>
      </IconCont>
      <ContText>{text}</ContText>
    </Card>
  );
};

export default ValueCard;
