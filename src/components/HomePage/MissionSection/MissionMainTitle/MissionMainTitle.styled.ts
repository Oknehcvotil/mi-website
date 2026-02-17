import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const TitleCont = styled(motion.div)<{ lang: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${({ lang }) => (lang === "en" ? "290px" : "265px")};
  width: 100%;
  overflow: hidden;
  position: relative;

  @media (min-width: 375px) {
    max-width: ${({ lang }) => (lang === "en" ? "100%" : "265px")};
  }

  @media (min-width: 768px) {
    max-width: ${({ lang }) => (lang === "en" ? "370px" : "100%")};
    flex-direction: ${({ lang }) => (lang === "en" ? "column" : "row")};
    justify-content: center;
    overflow: hidden;

    ${({ lang }) =>
      lang !== "en" &&
      `
    &::after {
      content: "";
      height: 4px;
      position: absolute;
      top: 21px;
      left: 0;
      background: #fff;
      width: 100%;
    }
  `}

    ${({ lang }) =>
      lang === "en" &&
      `
    &::after {
      content: "";
      height: 100%;
      position: absolute;
      top: 0;
      left: -1px;
      background: #fff;
      width: 8px;
    }
  `}
  }
`;

export const Title = styled(motion.h2)<{ lang: string }>`
  font-weight: 800;
  font-size: ${({ lang }) => (lang === "en" ? "66px" : "90px")};
  line-height: 70%;
  text-decoration: uppercase;
  text-align: center;
  background: linear-gradient(270deg, #a066ff 0%, #5427b1 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 375px) {
    font-size: ${({ lang }) => (lang === "en" ? "82px" : "90px")};
  }

  @media (min-width: 768px) {
    max-width: 100%;
    flex-direction: ${({ lang }) => (lang === "en" ? "column" : "row")};
    position: relative;
    justify-content: ${({ lang }) => (lang === "en" ? "center" : "flex-start")};
    line-height: normal;
    overflow: visible;
  }
`;

export const TitleText = styled(motion.p)<{ lang: string }>`
  display: flex;
  justify-content: center;
  padding: 10px 0 10px 15px;
  font-weight: 700;
  font-size: 15px;
  line-height: 133%;
  color: #fff;
  margin: 0;
  position: relative;

  @media (max-width: 767px) {
    background: linear-gradient(270deg, #a066ff 0%, #5427b1 100%);
    &::after {
      content: "";
      height: 3px;
      position: absolute;
      top: -1px;
      left: 0;
      background: linear-gradient(270deg, #a066ff 0%, #5427b1 100%);
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    background: ${({ lang }) =>
      lang === "en"
        ? "linear-gradient(270deg, #a066ff 0%, #5427b1 100%)"
        : "linear-gradient(90deg, #a066ff 0%, #5427b1 100%)"};
    max-width: ${({ lang }) => (lang === "en" ? "399px" : "480px")};
    padding: 11px 20px;
    height: 65px;
    max-width: 385px;

    ${({ lang }) =>
      lang !== "en" &&
      `
   margin-left: -8px;
  `}

    margin-top: -21px;
  }
`;
