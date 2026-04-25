import { useReducedMotion, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  ctaVariants,
  illustrationVariants,
  sectionVariants,
} from "../../../lib/animations/services/animations.hrConsulting";
import ConsultBtn from "../../Buttons/ConsultBtn/ConsultBtn";
import {
  CollapsBtn,
  HrAdditionalCont,
  HrAdditionalTitle,
  HrImgCont,
  HrLeadCont,
  HrLeadText,
  HrSectionWrap,
  HrTitle,
} from "./HrConsultingSection.styled";
import AdditionalServices from "./AdditionalServices/AdditionalServices";
import { additionalHrServices } from "../../../lib/data/services.pages";
import { useState } from "react";
import { useMediaQuery } from "../../../lib/hooks/useMediaQuery";

const MOBILE_COLLAPSED_COUNT = 3;
const TABLET_COLLAPSED_COUNT = 4;

const HrConsultingSection = () => {
  const { t } = useTranslation("servicesForClients");
  const reduce = useReducedMotion();
  const isTabletUp = useMediaQuery("(min-width: 768px)");
  const isDesktopWide = useMediaQuery("(min-width: 1920px)");

  const [expanded, setExpanded] = useState(false);
  const isExpandedView = expanded || isDesktopWide;
  const collapsedCount = isTabletUp
    ? TABLET_COLLAPSED_COUNT
    : MOBILE_COLLAPSED_COUNT;

  const canToggle =
    !isDesktopWide && additionalHrServices.length > collapsedCount;
  const buttonText = expanded ? t("servicesCollapse") : t("servicesMore");

  return (
    <HrSectionWrap id="hr" aria-labelledby="hrc-title">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={reduce ? undefined : sectionVariants}
      >
        <HrLeadCont>
          <HrLeadText>
            <HrTitle>{t("hr.title")}</HrTitle>
            <h4>{t("hr.subtitle")}</h4>
            <p>{t("hr.lead")}</p>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={reduce ? undefined : ctaVariants}
            >
              <ConsultBtn
                variant="primary"
                maxWidth="307px"
                className="hr-consulting-btn"
              />
            </motion.div>
          </HrLeadText>

          <HrImgCont
            aria-hidden="true"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={reduce ? undefined : illustrationVariants}
          >
            <picture>
              <source
                media="(min-width: 1920px)"
                srcSet="/images/desktop/services-pages/hr-consulting.webp 1x, /images/desktop/services-pages/hr-consulting@2x.webp 2x, /images/desktop/services-pages/hr-consulting@3x.webp 3x"
              />
              <source
                media="(min-width: 1024px)"
                srcSet="/images/laptop/services-pages/hr-consulting.webp 1x, /images/laptop/services-pages/hr-consulting@2x.webp 2x, /images/laptop/services-pages/hr-consulting@3x.webp 3x"
              />
              <img
                src="/images/mob/services-pages/hr-consulting.webp"
                srcSet="/images/mob/services-pages/hr-consulting.webp 1x, /images/mob/services-pages/hr-consulting@2x.webp 2x, /images/mob/services-pages/hr-consulting@3x.webp 3x"
                alt="HR consulting icon"
              />
            </picture>
          </HrImgCont>
        </HrLeadCont>

        <HrAdditionalCont>
          <HrAdditionalTitle>{t("hr.separateTitle")}</HrAdditionalTitle>

          <AdditionalServices
            expanded={isExpandedView}
            collapsedCount={collapsedCount}
          />

          {canToggle && (
            <CollapsBtn
              type="button"
              onClick={() => setExpanded((p) => !p)}
              aria-expanded={expanded}
            >
              {buttonText}

              <motion.svg
                width={20}
                height={9}
                aria-hidden="true"
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <use href="/icons/sprite.svg#icon-collaps-arrow" />
              </motion.svg>
            </CollapsBtn>
          )}
        </HrAdditionalCont>
      </motion.div>
    </HrSectionWrap>
  );
};

export default HrConsultingSection;
