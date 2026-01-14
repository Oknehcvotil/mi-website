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
`;

export const NamesTitle = styled(motion.h2)`
  font-weight: 700;
  font-size: 35px;
  line-height: 130%;
  text-transform: uppercase;
  text-align: center;
  color: #020202;
`;

export const PositionText = styled(motion.h3)`
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  text-align: center;
  color: #a066ff;
  margin-bottom: 15px;
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
`;
