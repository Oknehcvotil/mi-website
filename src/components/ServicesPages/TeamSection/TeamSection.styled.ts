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
    min-height: unset;
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
    top: 130px;
    right: 60px;
    z-index: 5;
    max-width: 360px;
    padding: 0;

    &.for-candidates-lead {
      top: 75px;
    }
  }

  @media (min-width: 1024px) {
    top: 135px;
    right: 230px;

    &.for-candidates-lead {
      top: 110px;
    }
  }

  @media (min-width: 1920px) {
    font-size: 50px;
    line-height: 130%;
    max-width: 850px;
    top: 100px;
    right: 300px;

    &.for-candidates-lead {
      top: 100px;
      right: 270px;
    }
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

export const PersonImgCont = styled.div`
  position: relative;

  picture {
    display: block;
  }

  img {
    height: auto;
    max-width: 100%;
  }

  img.irina {
    width: 390px;
    aspect-ratio: 390 / 460;
  }

  img.daria {
    width: 390px;
    aspect-ratio: 390 / 460;
  }

  @media (min-width: 768px) {
    img.irina {
      width: 483px;
      aspect-ratio: 483 / 446;
    }

    img.daria {
      width: 537px;
      aspect-ratio: 537 / 404;
    }
  }

  @media (min-width: 1024px) {
    img.irina {
      width: 565px;
      aspect-ratio: 565 / 479;
      margin-left: 20px;
    }

    img.daria {
      width: 591px;
      aspect-ratio: 591 / 427;
    }
  }

  @media (min-width: 1920px) {
    img.irina {
      width: 824px;
      aspect-ratio: 824 / 660;
      margin-left: 115px;
    }

    img.daria {
      width: 916px;
      aspect-ratio: 916 / 651;
    }
  }
`;

export const StatsCont = styled.div`
  display: none;

  &.stats-cont-irina {
    display: block;
    position: absolute;
    width: 100%;
  }
`;
