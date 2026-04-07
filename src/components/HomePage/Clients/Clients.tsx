import { Trans, useTranslation } from "react-i18next";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "../../Container/Container";
import { CollapsBtn, SectionWrap, Title } from "./Clients.styled";
import ClientsList from "./ClientsList/ClientsList";
import { clientsLogos } from "../../../lib/data/home.page";
import { useMediaQuery } from "../../../lib/hooks/useMediaQuery";
import {
  buttonVariants,
  sectionVariants,
  titleVariants,
} from "../../../lib/animations/home/animations.clients";

const MOB_COLLAPSED_COUNT = 6;
const TAB_COLLAPSED_COUNT = 8;
const DESKTOP_COLLAPSED_COUNT = 10;

const Clients = () => {
  const { t } = useTranslation("home");
  const [expanded, setExpanded] = useState(false);
  const reduce = !!useReducedMotion();

  const isDesk = useMediaQuery("(min-width: 1920px)");
  const isSmallDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px)");

  const collapsedCount = isDesk
    ? clientsLogos.length
    : isSmallDesktop
      ? DESKTOP_COLLAPSED_COUNT
      : isTablet
        ? TAB_COLLAPSED_COUNT
        : MOB_COLLAPSED_COUNT;

  const canToggle = !isDesk && clientsLogos.length > collapsedCount;

  const buttonText = expanded ? t("clientsCollapse") : t("clientsMore");

  return (
    <SectionWrap
      variants={reduce ? undefined : sectionVariants}
      initial={reduce ? undefined : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, amount: 0.16 }}
      animate={reduce ? "show" : undefined}
    >
      <Container>
        <Title variants={reduce ? undefined : titleVariants}>
          <Trans t={t} i18nKey="clientsTitle" components={{ 1: <span /> }} />
        </Title>

        <ClientsList expanded={expanded} collapsedCount={collapsedCount} />

        {canToggle && (
          <CollapsBtn
            variants={reduce ? undefined : buttonVariants}
            type="button"
            onClick={() => setExpanded((p) => !p)}
            aria-expanded={expanded}
          >
            {buttonText}
            <motion.svg
              width={20}
              height={9}
              animate={{
                rotate: expanded ? 180 : 0,
                scale: expanded ? 1.22 : 1,
                y: expanded ? 2 : 0,
              }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 620, damping: 18, mass: 0.65 }
              }
            >
              <use href="/icons/sprite.svg#icon-collaps-arrow" />
            </motion.svg>
          </CollapsBtn>
        )}
      </Container>
    </SectionWrap>
  );
};

export default Clients;
