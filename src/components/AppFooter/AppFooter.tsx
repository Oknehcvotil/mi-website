import { footerSocials } from "../../lib/data/contacts.section";
import { useMediaQuery } from "../../lib/hooks/useMediaQuery";
import { useSectionInView } from "../../lib/hooks/useSectionInView";
import LogoLink from "../Buttons/LogoLink/LogoLink";
import SocialLink from "../Buttons/SocialLink/SocialLink";
import Container from "../Container/Container";
import { FooterWrap, SocialLinksList } from "./AppFooter.styled";

const AppFooter = () => {
  const { ref } = useSectionInView("Footer", 0.7);

  const isDesk = useMediaQuery("(min-width: 1920px)");

  return (
    <FooterWrap ref={ref}>
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
