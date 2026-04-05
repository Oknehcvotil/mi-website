import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const TeamCont = styled(motion.div)`
  max-width: 390px;
  width: 100%;
  position: relative;
  margin: 0 auto;

  &:not(.for-candidates):after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 17px;
    background: #8a38f5;
    z-index: 4;
  }
  @media (min-width: 768px) {
    max-width: 768px;
    min-height: 430px;
    overflow: hidden;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
    min-height: 480px;
    overflow: hidden;
  }

  @media (min-width: 1920px) {
    max-width: 1920px;
    min-height: 730px;
    overflow: hidden;

    &:not(.for-candidates):after {
      content: "";
      height: 36px;
    }
  }
`;

export const BackgroundWrap = styled(motion.div)`
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 100px;
`;

export const BackgroundText = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  margin: 0;
  line-height: 1;
  font-weight: 400;
  font-size: 100px;
  text-transform: uppercase;
  color: #ebecf4;
  max-width: fit-content;
  overflow: hidden;
`;

export const TeamLeadCont = styled.div`
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #020202;
  max-width: 390px;
  width: 100%;
  padding: 15px;

  p {
    font-family: "Unbounded";
  }

  a {
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    position: absolute;
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
    max-width: 360px;
    padding: 0;
  }

  @media (min-width: 1024px) {
    top: 120px;
  }

  @media (min-width: 1920px) {
    font-size: 50px;
    line-height: 130%;
    max-width: none;
    top: 175px;
  }
`;

export const NamesTitle = styled(motion.h2)`
  font-weight: 700;
  font-size: 35px;
  line-height: 130%;
  text-transform: uppercase;
  text-align: center;
  color: #020202;

  @media (min-width: 768px) {
    font-size: 35px;
    line-height: 130%;
  }

  @media (min-width: 1920px) {
    font-size: 80px;
  }
`;

export const PositionText = styled(motion.h3)`
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  text-align: center;
  color: #a066ff;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 130%;
    margin: 0 auto 15px;
    max-width: 297px;
  }

  @media (min-width: 1920px) {
    font-size: 35px;
    line-height: 130%;
    margin: 0 auto 45px;
    max-width: none;
  }
`;

export const LeftImgCont = styled.div`
  position: absolute;
  max-width: 390px;
  width: 100%;
  overflow: hidden;
  height: auto;
  min-height: 370px;

  bottom: 0;
  left: 0;

  &.daria {
    min-height: 370px;

    img {
      bottom: -40px;
      left: -70px;
    }
  }

  img {
    position: absolute;
    bottom: 5px;
    left: -50px;
    width: 80%;
    height: auto;
  }

  @media (min-width: 768px) {
    left: 0;
    min-height: 430px;

    &.daria {
      img {
        bottom: 0;
        left: 0;
        width: 420px;
      }
    }

    &.irina {
      img {
        bottom: 0;
        left: 0;
        width: 355px;
      }
    }
  }

  @media (min-width: 1024px) {
    left: 0;
    min-height: 480px;

    &.daria {
      img {
        bottom: 0;
        left: 0;
        width: 420px;
      }
    }

    &.irina {
      img {
        bottom: 7px;
        left: 0;
        width: 355px;
      }
    }
  }

  @media (min-width: 1920px) {
    left: 0;
    min-height: 650px;
    max-width: 800px;

    &.daria {
      min-height: 650px;
      img {
        bottom: 0;
        left: 0;
        width: 760px;
      }
    }

    &.irina {
      img {
        bottom: 36px;
        left: 0;
        width: 740px;
      }
    }
  }
`;

export const RightImgCont = styled.div`
  position: relative;
  max-width: 390px;
  width: 100%;
  overflow: hidden;
  min-height: 370px;
  z-index: 3;

  img {
    position: absolute;
    bottom: -135px;
    right: -15px;
    width: 80%;
  }

  @media (min-width: 768px) {
    max-width: 768px;
    min-height: 430px;

    img {
      width: 290px;
      bottom: 0;
      right: -8px;
    }

    &.tatyana,
    &.tatyana-height {
      img {
        width: 280px;
        bottom: 0;
        right: -8px;
      }
    }
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
    min-height: 480px;

    img {
      bottom: 0;
      right: 0px;
    }

    &.tatyana,
    &.tatyana-height {
      img {
        width: 280px;
        bottom: 0;
        right: 0;
      }
    }
  }

  @media (min-width: 1920px) {
    max-width: 1920px;
    min-height: 730px;

    img {
      bottom: 0;
      right: 0px;
    }

    &.tatyana,
    &.tatyana-height {
      img {
        width: 555px;
        bottom: 0;
        right: 50px;
      }
    }
  }
`;
