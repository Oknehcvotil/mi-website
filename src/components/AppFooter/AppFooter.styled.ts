import styled from "@emotion/styled";

export const FooterWrap = styled.footer`
  padding: 20px 0;
  margin-top: auto;

  small {
    display: none;
    font-weight: 500;
    font-size: 15px;
    line-height: 130%;
    color: #020202;

    @media (min-width: 768px) {
      display: block;
    }

    @media (min-width: 1920px) {
      font-size: 30px;
    }
  }

  @media (min-width: 1920px) {
    padding: 60px 0;
  }
`;

export const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 10px;
  }
`;
