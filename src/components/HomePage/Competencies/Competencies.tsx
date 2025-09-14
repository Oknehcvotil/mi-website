
import { Grid, Wrap } from "./Competencies.styled";
import { useTranslation } from "react-i18next";
import CompetenciesCard from "./CompetenciesCard/CompetenciesCard";
import { containerVariants } from "../../../lib/animations/home/animations.competencies";

const Competencies = () => {
  const { t } = useTranslation("home");

  const competencies = t("competencies.list", {
    returnObjects: true,
  }) as string[];
  const companyNeeds = t("companyNeeds.list", {
    returnObjects: true,
  }) as string[];

  return (
    <Wrap
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
        <Grid>
          <CompetenciesCard
            title={t("competencies.title")}
            items={competencies}
          />
          <CompetenciesCard 
            title={t("companyNeeds.title")}
            items={companyNeeds}
            backGround={"rgba(243, 244, 249, 0.62)"}
          />
        </Grid>
    </Wrap>
  );
};

export default Competencies;
