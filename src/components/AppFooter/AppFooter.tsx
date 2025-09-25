import { footerSocials } from "../../lib/data/contacts.section";
import LogoLink from "../Buttons/LogoLink/LogoLink";
import SocialLink from "../Buttons/SocialLink/SocialLink";
import Container from "../Container/Container";
import { FooterWrap, SocialLinksList } from "./AppFooter.styled";

const AppFooter = () => {
  return (
    <FooterWrap>
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
