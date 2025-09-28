import { footerSocials } from "../../lib/data/contacts.section";
import { useSectionInView } from "../../lib/hooks/useSectionInView";
import LogoLink from "../Buttons/LogoLink/LogoLink";
import SocialLink from "../Buttons/SocialLink/SocialLink";
import Container from "../Container/Container";
import { FooterWrap, SocialLinksList } from "./AppFooter.styled";


const AppFooter = () => {
  const { ref } = useSectionInView("Footer", 0.7);

  return (
    <FooterWrap ref={ref}>
      <Container className={"footer-cont"}>
        <LogoLink />
        <SocialLinksList>
          {footerSocials.map((s) => (
            <li key={s.id}>
              <SocialLink
                key={s.id}
                id={s.id}
                href={s.href}
                ariaLabel={s.labelKey}
                width={s.width}
                height={s.height}
                className="footer-links"
              />
            </li>
          ))}
        </SocialLinksList>
      </Container>
    </FooterWrap>
  );
};

export default AppFooter;
