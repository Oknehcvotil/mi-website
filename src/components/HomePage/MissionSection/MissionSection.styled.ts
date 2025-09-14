import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrap = styled.section`
  padding-top: 20px;
`;

export const TitleCont = styled.div<{ lang: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${({ lang }) => (lang === "en" ? "100%" : "265px")};
  width: 100%;
  overflow: hidden;
`;

export const Title = styled(motion.h2)<{ lang: string }>`
  font-weight: 800;
  font-size: ${({ lang }) => (lang === "en" ? "82px" : "90px")};
  line-height: 70%;
  text-decoration: uppercase;
  text-align: center;
  background: linear-gradient(270deg, #a066ff 0%, #5427b1 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const TitleText = styled(motion.p)`
  background: linear-gradient(270deg, #a066ff 0%, #5427b1 100%);
  display: flex;
  justify-content: center;
  padding: 10px 0 10px 15px;
  font-weight: 700;
  font-size: 15px;
  line-height: 133%;
  color: #fff;
  margin: 0;
  position: relative;

  &::after {
    content: "";
    height: 3px;
    position: absolute;
    top: -1px;
    left: 0;
    background: linear-gradient(270deg, #a066ff 0%, #5427b1 100%);
    width: 100%;
  }
`;
