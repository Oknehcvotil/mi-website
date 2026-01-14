import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrap = styled.div`
  padding-top: 20px;
  padding-bottom: 40px;
`;

export const SectionCont = styled.div`
  background-image: url("/images/mob/background/mission-bg.jpg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 390px;
  width: 100%;
  height: 540px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
`;

export const SubTitle = styled.h3`
  font-family: "Unbounded";
  font-weight: 700;
  font-size: 35px;
  text-transform: uppercase;
  line-height: 1;
  text-align: center;
  color: #14111a;
  margin-bottom: 13px;
`;

export const StatsList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
