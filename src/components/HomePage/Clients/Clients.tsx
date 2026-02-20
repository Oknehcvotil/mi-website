import { Trans, useTranslation } from "react-i18next";
import { useState } from "react";
import Container from "../../Container/Container";
import { CollapsBtn, SectionWrap, Title } from "./Clients.styled";
import ClientsList from "./ClientsList/ClientsList";
import { clientsLogos } from "../../../lib/data/home.page";
import { useMediaQuery } from "../../../lib/hooks/useMediaQuery";

const MOB_COLLAPSED_COUNT = 6;
const TAB_COLLAPSED_COUNT = 8;

const Clients = () => {
  const { t } = useTranslation("home");
  const [expanded, setExpanded] = useState(false);

  const isDesk = useMediaQuery("(min-width: 1920px)");
  const isTablet = useMediaQuery("(min-width: 768px)");

  const collapsedCount = isDesk
    ? clientsLogos.length
    : isTablet
      ? TAB_COLLAPSED_COUNT
      : MOB_COLLAPSED_COUNT;

  const canToggle = !isDesk && clientsLogos.length > collapsedCount;

  const buttonText = expanded ? t("clientsCollapse") : t("clientsMore");

  return (
    <SectionWrap>
      <Container>
        <Title>
          <Trans t={t} i18nKey="clientsTitle" components={{ 1: <span /> }} />
        </Title>

        <ClientsList expanded={expanded} collapsedCount={collapsedCount} />

        {canToggle && (
          <CollapsBtn
            type="button"
            onClick={() => setExpanded((p) => !p)}
            aria-expanded={expanded}
          >
            {buttonText}
            <svg width={20} height={9}>
              <use href="/icons/sprite.svg#icon-collaps-arrow" />
            </svg>
          </CollapsBtn>
        )}
      </Container>
    </SectionWrap>
  );
};

export default Clients;
