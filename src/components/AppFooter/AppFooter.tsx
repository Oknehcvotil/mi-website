import { useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { footerSocials } from "../../lib/data/contacts.section";
import {
  footerHidden,
  footerTransition,
  footerVisible,
} from "../../lib/animations/animations.footer";
import { useMediaQuery } from "../../lib/hooks/useMediaQuery";
import { useSectionInView } from "../../lib/hooks/useSectionInView";
import type { ContactSectionSocial } from "../../lib/types/contacts.types";
import LogoLink from "../Buttons/LogoLink/LogoLink";
import SocialLink from "../Buttons/SocialLink/SocialLink";
import Container from "../Container/Container";
import { FooterWrap, SocialLinksList } from "./AppFooter.styled";

const getFooterSocialSize = (
  social: ContactSectionSocial,
  isWideDesktop: boolean,
) => ({
  width: isWideDesktop ? (social.desktopWidth ?? social.width) : social.width,
  height: isWideDesktop ? (social.desktopHeight ?? social.height) : social.height,
});

const AppFooter = () => {
  const { ref: sectionRef } = useSectionInView("Footer", 0.7);
  const reduce = !!useReducedMotion();
  const footerRef = useRef<HTMLElement | null>(null);
  const isFooterInView = useInView(footerRef, { once: true, amount: 0.65 });
  const isWideDesktop = useMediaQuery("(min-width: 1920px)");
  const currentYear = new Date().getFullYear();

  const setRefs = (node: HTMLElement | null) => {
    footerRef.current = node;
    sectionRef(node);
  };

  return (
    <FooterWrap
      ref={setRefs}
      initial={reduce ? undefined : footerHidden}
      animate={reduce ? undefined : isFooterInView ? footerVisible : footerHidden}
      transition={reduce ? undefined : footerTransition}
    >
      <Container className="footer-cont">
        <LogoLink />
        <small>&copy; {currentYear} MI Agency. All rights reserved.</small>
        <SocialLinksList>
          {footerSocials.map((social) => {
            const { width, height } = getFooterSocialSize(
              social,
              isWideDesktop,
            );

            return (
              <li key={social.id}>
                <SocialLink
                  id={social.id}
                  href={social.href}
                  ariaLabel={social.labelKey}
                  width={width}
                  height={height}
                  className={`footer-links ${social.className}`}
                />
              </li>
            );
          })}
        </SocialLinksList>
      </Container>
    </FooterWrap>
  );
};

export default AppFooter;
