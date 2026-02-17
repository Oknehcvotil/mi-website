import styled from "@emotion/styled";

export const Wrap = styled.div`
  display: none;

  @media (min-width: 380px) {
    display: block;
  }

  padding: 40px 0 0 0;
  background: #f8f8fb;

  @media (min-width: 768px) {
    padding: 25px 25px;
  }
`;

export const GeographyTytle = styled.h2<{ lang: string }>`
  line-height: 100%;
  font-family: "Unbounded";
  font-weight: 700;
  font-size: 35px;
  text-transform: uppercase;
  text-align: center;
  color: #020202;
  margin: 0 auto 28px;
  max-width: ${({ lang }) => (lang === "en" ? "355px" : "300px")};
  width: 100%;

  span {
    color: #a066ff;
  }

  @media (min-width: 768px) {
    max-width: 100%;
    margin: 0 auto 15px;
  }
`;

export const MapSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const MapCont = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    max-width: 768px;
    margin: 0 auto;
  }
`;
