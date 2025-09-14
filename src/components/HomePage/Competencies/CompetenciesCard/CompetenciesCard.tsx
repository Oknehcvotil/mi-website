import {
  Card,
  CardCont,
  Title,
  List,
  Item,
  Text,
} from "./CompetenciesCard.styled";
import { cardVariants } from "../../../../lib/animations/home/animations.competencies";

type CompetenciesCardProps = {
  title: string;
  items: string[];
  backGround?: string;
};

const CompetenciesCard = ({
  title,
  items,
  backGround,
}: CompetenciesCardProps) => {
  return (
    <Card variants={cardVariants} backGround={backGround}>
      <CardCont>
        <Title>{title}</Title>
        <List>
          {items.map((s) => (
            <Item key={s}>
              <Text>{s}</Text>
            </Item>
          ))}
        </List>
      </CardCont>
    </Card>
  );
};

export default CompetenciesCard;
