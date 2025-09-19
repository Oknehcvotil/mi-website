import { Trans, useTranslation } from "react-i18next";
import Container from "../../Container/Container";
import { SectionWrap, Title } from "./ClientsSection.styled";
import ClientsList from "./ClientsList/ClientsList";

const ClientsSection = () => {
  const { t } = useTranslation("home");

  return (
    <SectionWrap>
      <Container>
        <Title>
          <Trans t={t} i18nKey="clientsTitle" components={{ 1: <span /> }} />
        </Title>
        <ClientsList />
      </Container>
    </SectionWrap>
  );
};

export default ClientsSection;
