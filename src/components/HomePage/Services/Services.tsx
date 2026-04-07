import { Trans, useTranslation } from "react-i18next";
import { useReducedMotion } from "framer-motion";
import Container from "../../Container/Container";
import { SectionWrap, Title } from "./Services.styled";
import ServicesList from "./ServicesList/ServicesList";
import {
  servicesSectionVariants,
  servicesTitleVariants,
} from "../../../lib/animations/home/animations.services";

const Services = () => {
  const { t } = useTranslation("home");
  const reduce = !!useReducedMotion();

  return (
    <SectionWrap
      variants={reduce ? undefined : servicesSectionVariants}
      initial={reduce ? undefined : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, amount: 0.18 }}
      animate={reduce ? "show" : undefined}
    >
      <Container>
        <Title variants={reduce ? undefined : servicesTitleVariants}>
          <Trans t={t} i18nKey="services.title" components={{ 1: <span /> }} />
        </Title>
        <ServicesList />
      </Container>
    </SectionWrap>
  );
};

export default Services;
