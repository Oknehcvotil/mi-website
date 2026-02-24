import styled from "@emotion/styled";

export const PolicyCont = styled.div`
  margin-top: 25px;

  font-weight: 400;
  font-size: 11px;
  line-height: 125%;
  color: #7c7979;

  span {
    font-weight: 600;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #138af9;
    text-align: start;
    cursor: pointer;
  }

  @media (min-width: 1920px) {
    margin-top: 30px;
    font-size: 20px;
  }
`;
