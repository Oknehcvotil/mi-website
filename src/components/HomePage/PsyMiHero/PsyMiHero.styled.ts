import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const PsyMiHeroSection = styled.section`
  background: rgba(243, 244, 249, 0.62);
  padding: 40px 0 0;
`;

export const PsyMiContainer = styled.div`
  max-width: 390px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const PsyMititle = styled(motion.h2)`
  font-family: "Unbounded", cursive;
  font-weight: 600;
  font-weight: 700;
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  color: #14111a;
  margin-bottom: 15px;
  line-height: 110%;

  span {
    font-size: 18px;
  }

  .color-mask {
    color: #a066ff;
  }
`;

export const PsyMiLogoCont = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;

  strong {
    color: #262626;
    line-height: 1;
    font-size: 21px;
    text-transform: uppercase;

    span {
      background: linear-gradient(90deg, #347aec 0%, #6764e7 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
    }
  }
`;

export const PsyMiLead = styled(motion.p)`
  font-weight: 500;
  font-size: 15px;
  line-height: 130%;
  color: #14111a;
  margin-bottom: 15px;

  span {
    font-weight: 700;
  }
`;

export const PsiTextCont = styled(motion.div)`
  margin-bottom: 15px;
`;

export const PsyMiImageCont = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: end;
  line-height: 0;
  min-height: 280px;
`;
