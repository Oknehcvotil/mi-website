import { Grid } from "./ValuesGrid.styled";
import ValueCard from "../ValuesCards/ValuesCards";
import { useTranslation } from "react-i18next";

const ValuesGrid = () => {
  const { t } = useTranslation("home");

  const values = t("values.cards", { returnObjects: true }) as string[];

  const icons: string[] = ["icon-settings", "icon-rocket", "icon-chart"];

  return (
    <Grid>
      {values.map((text, idx) => (
        <ValueCard
          key={idx}
          icon={icons[idx] ?? "icon-settings"}
          text={text}
          delay={0}
        />
      ))}
    </Grid>
  );
};

export default ValuesGrid;
