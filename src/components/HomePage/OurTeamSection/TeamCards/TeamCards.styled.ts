import styled from "@emotion/styled";

export const CardCont = styled.article`
  position: relative;
`;

export const NameCont = styled.div`
  position: absolute;
  top: 20px;
  font-weight: 700;
  font-size: 20px;
  color: #000;
  line-height: 112%;

  &.team-irina {
    left: 50px;
  }

  &.team-tatyana {
    max-width: 145px;
    width: 100%;
    left: 8px;
    top: 70px;
  }

  &.team-maria {
    max-width: 130px;
    width: 100%;
    left: 8px;
  }

  &.team-anastasia {
    max-width: 130px;
    width: 100%;
    top: 70px;
    right: 0;
  }

  &.team-daria {
    left: 15px;
    max-width: 130px;
    width: 100%;
  }

  p {
    font-weight: 500;
    font-size: 15px;
  }

  &::before {
    content: "";
    position: absolute;
    left: -8px;
    top: 0;
    height: 100%;
    border: 3px solid #a066ff;
  }
`;
