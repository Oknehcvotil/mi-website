import { useTranslation } from "react-i18next";
import {
  List,
  ServicesItems,
  ServicesLink,
  TitleCont,
} from "./ServicesList.styled";
import { useMatch } from "react-router-dom";
import { servicesLinks } from "../../../../lib/data/home.page";
import { servicesIcons } from "../../../../lib/data/home.page";
import { useMediaQuery } from "../../../../lib/hooks/useMediaQuery";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.02 * index,
    },
  }),
};

const ServicesList = () => {
  const { t } = useTranslation("home");
  const match = useMatch("/:lang/*");
  const currentLang = match?.params.lang ?? "en";

  const isDesk = useMediaQuery("(min-width: 1920px)");

  const subTitles = t("services.subTitiles", {
    returnObjects: true,
  }) as string[];
  const texts = t("services.text", { returnObjects: true }) as string[];
  const button = t("services.button");

  return (
    <List>
      {subTitles.map((title, i) => {
        const icon = servicesIcons[i];
        const size = isDesk ? icon.desk : icon.mob;

        return (
          <ServicesItems
            key={i}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={i}
          >
            <TitleCont>
              <svg width={size.w} height={size.h}>
                <use href={`/icons/sprite.svg#${icon.name}`} />
              </svg>

              <h3>{title}</h3>
            </TitleCont>

            <p>{texts[i]}</p>

            <ServicesLink to={`/${currentLang}${servicesLinks[i]}`}>
              {button}
            </ServicesLink>
          </ServicesItems>
        );
      })}
    </List>
  );
};

export default ServicesList;
