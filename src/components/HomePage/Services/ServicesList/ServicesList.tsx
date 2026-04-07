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
import { motion, useReducedMotion } from "framer-motion";
import {
  servicesCardItemVariants,
  servicesCardVariants,
  servicesListVariants,
} from "../../../../lib/animations/home/animations.services";

const ServicesList = () => {
  const { t } = useTranslation("home");
  const match = useMatch("/:lang/*");
  const currentLang = match?.params.lang ?? "en";
  const reduce = !!useReducedMotion();

  const isDesk = useMediaQuery("(min-width: 1920px)");

  const subTitles = t("services.subTitiles", {
    returnObjects: true,
  }) as string[];
  const texts = t("services.text", { returnObjects: true }) as string[];
  const button = t("services.button");

  return (
    <List variants={reduce ? undefined : servicesListVariants}>
      {subTitles.map((title, i) => {
        const icon = servicesIcons[i];
        const size = isDesk ? icon.desk : icon.mob;

        return (
          <ServicesItems
            key={i}
            variants={reduce ? undefined : servicesCardVariants}
          >
            <TitleCont variants={reduce ? undefined : servicesCardItemVariants}>
              <svg width={size.w} height={size.h}>
                <use href={`/icons/sprite.svg#${icon.name}`} />
              </svg>

              <h3>{title}</h3>
            </TitleCont>

            <motion.p variants={reduce ? undefined : servicesCardItemVariants}>
              {texts[i]}
            </motion.p>

            <ServicesLink
              to={`/${currentLang}${servicesLinks[i]}`}
              variants={reduce ? undefined : servicesCardItemVariants}
            >
              {button}
            </ServicesLink>
          </ServicesItems>
        );
      })}
    </List>
  );
};

export default ServicesList;
