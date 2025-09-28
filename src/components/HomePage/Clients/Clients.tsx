import { Trans, useTranslation } from "react-i18next";
import Container from "../../Container/Container";
import { SectionWrap, Title } from "./Clients.styled";
import ClientsList from "./ClientsList/ClientsList";

const Clients = () => {
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

export default Clients;
