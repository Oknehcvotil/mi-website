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
`;

export const EligibilityCardList = styled.ul`
  border: 5px solid #fff;
  border-radius: 10px;
  padding: 20px 10px;
  backdrop-filter: blur(15px);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.5);

  margin-bottom: 30px;
`;

export const EligibilityItem = styled.li`
  padding-left: 15px;
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;
  color: #020202;
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 3px;
    left: 0;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    background: #a066ff;
  }
`;

