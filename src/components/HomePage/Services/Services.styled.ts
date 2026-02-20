import styled from "@emotion/styled";

export const SectionWrap = styled.div`
  padding: 40px 0;

  @media (min-width: 1920px) {
    padding: 80px 0;
  }
`;

export const Title = styled.h2`
  line-height: 100%;
  font-family: "Unbounded";
  font-weight: 700;
  font-size: 35px;
  text-transform: uppercase;
  text-align: center;
  color: #020202;
  margin: 0 auto 15px;

  span {
    color: #a066ff;
  }

  @media (min-width: 1920px) {
    margin-bottom: 30px;
    font-size: 80px;
  }
`;
