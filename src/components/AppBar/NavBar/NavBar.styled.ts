import styled from "@emotion/styled";

export const NavBarList = styled.ul`
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-right: 65px;
  }

  @media (min-width: 1280px) {
    gap: 30px;
    margin-right: 175px;
  }

  @media (min-width: 1920px) {
    gap: 50px;
    margin-right: 230px;
  }

  & > li.psi-item {
    @media (min-width: 1024px) {
      display: none;
    }

    @media (min-width: 1920px) {
      display: block;
    }
  }
`;
