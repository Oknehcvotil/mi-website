import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ContactSectionSection = styled(motion.section)`
  padding: 40px 0 0;
`;

export const Kicker = styled(motion.h3)`
  font-family: "Unbounded";
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;
  text-align: center;
  color: #14111a;
  max-width: 340px;
  width: 100%;
  margin: 0 auto 15px;

  span {
    color: #a066ff;
  }
`;

export const ContactSectionContainer = styled(motion.div)`
  max-width: 390px;
  width: 100%;
  margin: 0 auto;
`;

export const ContactLeadContainer = styled(motion.div)`
  padding: 0 15px 40px;

  h2 {
    font-family: "Unbounded";
    font-weight: 700;
    font-size: 32px;
    text-transform: uppercase;
    line-height: 1.25;
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    margin-bottom: 5px;
  }
`;

export const BulletList = styled(motion.ul)`
  margin-bottom: 20px;
`;

export const BulletItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 10px;

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }

  .bullet-icon {
    width: 29px;
    height: 29px;
    border: 3px solid #eaeaea;
    border-radius: 50%;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      width: 20px;
      height: 20px;
      background-color: #eaeaea;
    }
  }

  .bullet-text {
    font-weight: 400;
    font-size: 12px;
    line-height: 250%;
    color: #020202;
  }
`;

export const PersonTitle = styled(motion.h3)`
  font-family: "Unbounded";
  font-weight: 700;
  font-size: 20px;
  line-height: 119%;
  text-transform: uppercase;
  color: #020202;
  margin-bottom: 10px;
`;

export const PersonImgCont = styled(motion.div)`
  width: 74px;
  height: 74px;
  border-radius: 50%;
  background-color: #a066ff;
  overflow: hidden;
`;

export const PersonCont = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SubCont = styled(motion.div)`
  display: flex;
  flex-direction: row;
`;

export const PersonRole = styled(motion.p)`
  font-family: "Unbounded";
  font-size: 15px;
  line-height: 119%;
  font-weight: 400;
  color: #020202;

  span {
    font-weight: 700;
    color: #9d68f3;
  }
`;

export const PersonSocials = styled(motion.ul)`
  display: flex;
  align-items: center;
  gap: 5px;
`;
