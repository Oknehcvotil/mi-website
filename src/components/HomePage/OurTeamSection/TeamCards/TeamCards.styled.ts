import styled from "@emotion/styled";

export const CardCont = styled.article`
  position: relative;
  padding-top: 26px;

  img {
    margin-bottom: 35px;
  }
`;

export const NameCont = styled.div`
  position: absolute;
  top: 0;
  left: 30px;
  max-width: 150px;
  width: 100%;
  font-weight: 700;
  font-size: 20px;
  color: #000;
  line-height: 112%;

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
