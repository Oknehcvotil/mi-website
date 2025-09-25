import { Trans, useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { socials } from "../../lib/data/contacts.section";
import {
  ContactSectionContainer,
  ContactLeadContainer,
  Kicker,
  ContactSectionSection,
  BulletItem,
  BulletList,
  PersonTitle,
  PersonImgCont,
  PersonCont,
  PersonRole,
  PersonSocials,
} from "./ContactSection.styled";
import SocialLink from "../Buttons/SocialLink/SocialLink";
import {
  fadeUp,
  parent,
  popIn,
} from "../../lib/animations/home/animations.contacts";

const ContactSection = () => {
  const { t } = useTranslation("contacts");

  return (
    <ContactSectionSection
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
    >
      <Kicker variants={fadeUp}>
        <Trans t={t} i18nKey="kicker" components={{ 1: <span /> }} />
      </Kicker>
      <ContactSectionContainer variants={parent}>
        <ContactLeadContainer variants={parent}>
          <motion.h2
            id="contact-title"
            className="contact-title"
            variants={fadeUp}
          >
            {t("title")}
          </motion.h2>
          <motion.p className="contact-lead" variants={fadeUp}>
            {t("lead")}
          </motion.p>

          <BulletList variants={parent}>
            {Array.isArray(t("bullets", { returnObjects: true })) &&
              (t("bullets", { returnObjects: true }) as string[]).map(
                (item: string, i: number) => (
                  <BulletItem key={i} variants={fadeUp}>
                    <span className="bullet-icon" aria-hidden="true"></span>
                    <p className="bullet-text">{item}</p>
                  </BulletItem>
                )
              )}
          </BulletList>

          <PersonTitle variants={fadeUp}>{t("contactTitle")}</PersonTitle>
          <PersonCont variants={popIn}>
            <PersonImgCont variants={popIn}>
              <picture>
                <source
                  type="image/webp"
                  srcSet="/images/mob/team/maria-cco.webp 1x, /images/mob/team/maria-cco@2x.webp 2x, /images/mob/team/maria-cco@3x.webp 3x"
                />
                <img
                  src="/images/mob/team/maria-cco.webp"
                  alt={t("person.photoAlt")}
                  loading="lazy"
                />
              </picture>
            </PersonImgCont>
            <div className="sub-cont">
              <PersonRole variants={fadeUp}>
                <span>{t("person.name")}</span>-{t("person.role")}
              </PersonRole>

              <PersonSocials variants={parent}>
                {socials.map((s) => (
                  <motion.li key={s.id} variants={popIn}>
                    <SocialLink
                      key={s.id}
                      id={s.id}
                      href={s.href}
                      ariaLabel={t(s.labelKey)}
                      width={s.width}
                      height={s.height}
                    />
                  </motion.li>
                ))}
              </PersonSocials>
            </div>
          </PersonCont>
        </ContactLeadContainer>
      </ContactSectionContainer>
    </ContactSectionSection>
  );
};

export default ContactSection;
