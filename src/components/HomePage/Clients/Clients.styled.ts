import styled from "@emotion/styled";

export const SectionWrap = styled.div`
  padding-top: 40px;

  @media (min-width: 768px) {
    padding-bottom: 15px;
  }

  @media (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 35px;
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
  margin: 0 auto 30px;

  span {
    color: #a066ff;
  }

  @media (min-width: 1920px) {
    font-size: 80px;
  }
`;

export const CollapsBtn = styled.button`
  font-weight: 500;
  font-size: 20px;
  line-height: 75%;
  color: #020202;
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0 auto;

  svg {
    transition: transform 0.25s ease;
  }

  &[aria-expanded="true"] svg {
    transform: rotate(180deg);
  }

  @media (min-width: 1920px) {
    display: none;
  }
`;
