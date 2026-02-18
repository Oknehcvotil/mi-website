import styled from "@emotion/styled";
export const HeroSectionWrap = styled.div`
  @media (min-width: 1920px) {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 28px;
      width: 100%;
      background: linear-gradient(90deg, #a066ff 0%, #5427b1 100%);
      z-index: 5;
    }
  }
`;

export const HeroCont = styled.div`
  padding-top: 105px;
  @media (min-width: 1920px) {
    padding: 110px 0 180px 100px;
    display: flex;
    max-width: 1920px;
    margin: 0 auto;
    position: relative;
  }
`;
