import { Trans, useTranslation } from "react-i18next";
import { PhdCasesTitle, PhdCasesWrapper } from "./PhdCasesServices.styled";
import { motion } from "framer-motion";
import {
  blockV,
  sectionV,
  titleV,
} from "../../../lib/animations/home/animations.swipers";
import AppSlider from "../../AppSlider/AppSlider";
import PhdReviewCard from "./PhdReviewCard/PhdReviewCard";
import ReqAndResultCard from "./ReqAndResultCard/ReqAndResultCard";

const NS = "servicesPHD";
const IMG = "/images/phd-cases/example";

const PhdCasesServices = () => {
  const { t } = useTranslation(NS);

  const Review = (base: "cases.alina" | "cases.iryna") => (
    <PhdReviewCard
      translationNs={NS}
      nameKey={`${base}.name`}
      reviewKey={`${base}.review`}
      imgSrc={IMG}
    />
  );
  const ReqRes = (base: "cases.alina" | "cases.iryna") => (
    <ReqAndResultCard
      translationNs={NS}
      reqKey={`${base}.clientRequest`}
      resultKey={`${base}.result`}
    />
  );

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
          {Review("cases.alina")}
          {ReqRes("cases.alina")}
          {Review("cases.iryna")}
          {ReqRes("cases.iryna")}
        </AppSlider>
      </motion.div>
    </PhdCasesWrapper>
  );
};

export default PhdCasesServices;
