import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const HeroPictCont = styled(motion.div)`
  position: relative;
  max-width: 390px;
  margin: 0 auto;

  /* &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 16px;
    width: 100%;
    background: linear-gradient(90deg, #a066ff 0%, #5427b1 100%);
  } */

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1920px) {
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 1148px;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
`;
