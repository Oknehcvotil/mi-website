import { Trans, useTranslation } from "react-i18next";
import Container from "../../Container/Container";
import { SectionWrap, Title } from "./ServicesSection.styled";
import ServicesList from "./ServicesList/ServicesList";

const ServicesSection = () => {
  const { t } = useTranslation("home");

  return (
    <SectionWrap>
      <Container>
        <Title>
          <Trans t={t} i18nKey="services.title" components={{ 1: <span /> }} />
        </Title>
        <ServicesList />
      </Container>
    </SectionWrap>
  );
};

export default ServicesSection;
