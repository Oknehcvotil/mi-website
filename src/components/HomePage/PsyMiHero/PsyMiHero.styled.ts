import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const PsyMiHeroSection = styled.div`
  background: rgba(243, 244, 249, 0.62);
  padding: 40px 0 0;
`;

export const PsyMiContainer = styled.div`
  max-width: 390px;
  padding: 0 15px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 25px 110px;
    position: relative;
  }

  @media (min-width: 1920px) {
    max-width: 1920px;
    padding: 0 45px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const PsyMititle = styled(motion.h2)`
  font-family: "Unbounded", cursive;
  font-weight: 600;
  font-weight: 700;
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  color: #14111a;
  margin: 0 auto 15px;
  line-height: 110%;
  max-width: 350px;

  span {
    font-size: 18px;
  }

  .color-mask {
    color: #a066ff;
  }

  @media (min-width: 768px) {
    max-width: 720px;
    font-size: 30px;
    margin-bottom: 20px;
    span {
      font-size: 30px;
    }
  }

  @media (min-width: 1920px) {
    font-size: 60px;
    margin-bottom: 50px;
    max-width: 1600px;

    span {
      font-size: 60px;
    }
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

  @media (min-width: 768px) {
    gap: 20px;
    margin-bottom: 20px;

    strong {
      font-size: 26px;
    }
  }

  @media (min-width: 1920px) {
    gap: 45px;
    margin-bottom: 85px;

    strong {
      font-size: 59px;
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

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 130%;
    max-width: 479px;
    margin-bottom: 25px;
  }

  @media (min-width: 1920px) {
    font-size: 30px;
    line-height: 130%;
    max-width: 630px;
    margin-bottom: 40px;
  }
`;

export const PsiTextCont = styled(motion.div)`
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    padding-left: 25px;
  }

  @media (min-width: 1920px) {
    padding-left: 170px;
  }
`;

export const PsyMiImageCont = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: end;
  line-height: 0;
  padding-left: 20px;
  min-height: 280px;

  @media (min-width: 768px) {
    position: absolute;
    bottom: 0;
    right: 0;
    padding-left: 0;
    min-height: 0px;
    width: 425px;
  }

  @media (min-width: 1920px) {
    position: relative;
    min-height: 640px;
    max-width: 975px;
    width: 100%;
  }
`;
