import { footerSocials } from "../../lib/data/contacts.section";
import { useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "../../lib/hooks/useMediaQuery";
import { useSectionInView } from "../../lib/hooks/useSectionInView";
import LogoLink from "../Buttons/LogoLink/LogoLink";
import SocialLink from "../Buttons/SocialLink/SocialLink";
import Container from "../Container/Container";
import { FooterWrap, SocialLinksList } from "./AppFooter.styled";

const AppFooter = () => {
  const { ref: sectionRef } = useSectionInView("Footer", 0.7);
  const reduce = !!useReducedMotion();
  const footerRef = useRef<HTMLElement | null>(null);
  const isFooterInView = useInView(footerRef, { once: true, amount: 0.65 });

  const isDesk = useMediaQuery("(min-width: 1920px)");

  const setRefs = (node: HTMLElement | null) => {
    footerRef.current = node;
    sectionRef(node);
  };

  return (
    <FooterWrap
      ref={setRefs}
      initial={reduce ? undefined : { opacity: 0, y: 16 }}
      animate={
        reduce
          ? undefined
          : isFooterInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 16 }
      }
      transition={
        reduce ? undefined : { duration: 0.48, ease: [0.22, 1, 0.36, 1] }
      }
    >
      <Container className={"footer-cont"}>
        <LogoLink />
        <small>
          © {new Date().getFullYear()} MI Agency. All rights reserved.
        </small>
        <SocialLinksList>
          {footerSocials.map((s) => (
            <li key={s.id}>
              <SocialLink
                key={s.id}
                id={s.id}
                href={s.href}
                ariaLabel={s.labelKey}
                width={isDesk ? (s.desktopWidth ?? s.width) : s.width}
                height={isDesk ? (s.desktopHeight ?? s.height) : s.height}
                className={`footer-links ${s.className}`}
              />
            </li>
          ))}
        </SocialLinksList>
      </Container>
    </FooterWrap>
  );
};

export default AppFooter;
