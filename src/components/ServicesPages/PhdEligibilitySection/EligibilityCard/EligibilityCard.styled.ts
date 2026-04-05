import styled from "@emotion/styled";

export const EligibilityTitle = styled.h3`
  font-family: "Unbounded";
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-transform: uppercase;
  text-align: center;
  color: #020202;
  backdrop-filter: blur(25px);
  margin-bottom: 25px;

  span {
    color: #9e2fff;
  }

  @media (min-width: 768px) {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;

export const EligibilityCardList = styled.ul`
  margin-bottom: 30px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    flex: 1;
  }
`;

export const EligibilityItem = styled.li`
  border: 2px solid;
  border-radius: 10px;
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.5);
  border-color: rgba(215, 215, 215, 0.8);
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;
  color: #020202;
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    flex-shrink: 0;
  }

  p {
    max-width: 230px;
    width: 100%;
  }

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    max-width: 340px;
    width: 100%;
    height: 85px;
    font-size: 13px;
    line-height: 120%;
    gap: 20px;
    border-radius: 8px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      max-width: 100%;
      font-size: 15px;
      line-height: 130%;
    }

    &:not(:last-of-type) {
      margin-bottom: 12px;
    }

    padding: 12px;
  }

  @media (min-width: 1024px) {
    max-width: none;
  }
`;
