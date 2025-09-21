import styled from "@emotion/styled";

export const Wrap = styled.section`
  display: none;

  @media (min-width: 380px) {
    display: block;
  }

  padding: 40px 0 0 0;
  background: #f8f8fb;
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
`;

export const MapSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
