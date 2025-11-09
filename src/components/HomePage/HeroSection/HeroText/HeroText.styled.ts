import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  max-width: 390px;
  padding: 0 15px;
  margin: 0 auto 10px;
`;

export const HeroTitle = styled(motion.h1)`
  font-weight: 500;
  font-size: 20px;
  font-family: "Unbounded";
  line-height: 24px;
  margin-bottom: 13px;
`;

export const TitleAccent = styled.span`
  color: #a066ff;
  font-size: 24px;
`;

export const SubTitle = styled(motion.p)`
  margin-bottom: 13px;
`;
