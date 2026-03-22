import { Trans, useTranslation } from "react-i18next";
import { PhdCasesTitle, PhdCasesWrapper, PhdSliderPair } from "./PhdCasesServices.styled";
import { motion } from "framer-motion";
import {
  blockV,
  sectionV,
  titleV,
} from "../../../lib/animations/home/animations.swipers";
import AppSlider from "../../AppSlider/AppSlider";
import PhdReviewCard from "./PhdReviewCard/PhdReviewCard";
import ReqAndResultCard from "./ReqAndResultCard/ReqAndResultCard";
import { useMediaQuery } from "../../../lib/hooks/useMediaQuery";

const NS = "servicesPHD";

const PhdCasesServices = () => {
  const { t } = useTranslation(NS);
  const isTablet = useMediaQuery("(min-width: 768px)");

  const allCards = [
    <PhdReviewCard translationNs={NS} nameKey="cases.alina.name" reviewKey="cases.alina.review" imgSrc="/images/phd-cases/alina" />,
    <ReqAndResultCard translationNs={NS} reqKey="cases.alina.clientRequest" resultKey="cases.alina.result" />,
    <PhdReviewCard translationNs={NS} nameKey="cases.iryna.name" reviewKey="cases.iryna.review" imgSrc="/images/phd-cases/iryna" />,
    <ReqAndResultCard translationNs={NS} reqKey="cases.iryna.clientRequest" resultKey="cases.iryna.result" />,
    <PhdReviewCard translationNs={NS} nameKey="cases.elizaveta.name" reviewKey="cases.elizaveta.review" imgSrc="/images/phd-cases/elizaveta" className="last-pair-card" />,
    <PhdReviewCard translationNs={NS} nameKey="cases.olesya.name" reviewKey="cases.olesya.review" imgSrc="/images/phd-cases/olesya" className="last-pair-card" />,
  ];

  const groupedSlides = isTablet
    ? allCards.reduce<(typeof allCards)[]>((acc, _, index, arr) => {
        if (index % 2 === 0) {
          acc.push(arr.slice(index, index + 2));
        }
        return acc;
      }, [])
    : allCards.map((card) => [card]);

  return (
    <PhdCasesWrapper
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionV}
    >
      <PhdCasesTitle variants={titleV}>
        <Trans t={t} i18nKey="cases.title" components={{ 1: <span /> }} />
      </PhdCasesTitle>

      <motion.div variants={blockV}>
        <AppSlider>
          {groupedSlides.map((group, slideIndex) => (
            <PhdSliderPair
              key={slideIndex}
              className={
                isTablet && slideIndex === groupedSlides.length - 1
                  ? "last-pair"
                  : undefined
              }
            >
              {group.map((card, i) => (
                <div key={i}>{card}</div>
              ))}
            </PhdSliderPair>
          ))}
        </AppSlider>
      </motion.div>
    </PhdCasesWrapper>
  );
};

export default PhdCasesServices;
