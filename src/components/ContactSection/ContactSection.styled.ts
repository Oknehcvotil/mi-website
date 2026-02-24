import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ContactSectionSection = styled(motion.section)`
  padding: 40px 0 0;

  @media (min-width: 768px) {
    padding: 40px 0;
  }
  @media (min-width: 1920px) {
    padding: 80px 0;
  }
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

  @media (min-width: 768px) {
    font-size: 20px;
    max-width: 720px;
  }

  @media (min-width: 1920px) {
    display: none;
  }
`;

export const ContactSectionContainer = styled(motion.div)`
  max-width: 390px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 768px;
    display: flex;
  }

  @media (min-width: 1920px) {
    max-width: 1920px;
  }
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

  .contact-lead {
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    margin-bottom: 5px;
  }

  @media (min-width: 768px) {
    padding: 15px 0 0 25px;

    h2 {
      margin-bottom: 15px;
    }

    .contact-lead {
      margin-bottom: 20px;
      text-transform: lowercase;
    }
  }

  @media (min-width: 1920px) {
    padding: 0 0 0 85px;

    h2 {
      font-size: 80px;
      max-width: 810px;
      line-height: 99px;
      margin-bottom: 0;
    }

    .contact-lead {
      font-size: 40px;
      line-height: 125%;
      margin-bottom: 50px;
      max-width: 810px;
    }
  }
`;

export const BulletList = styled(motion.ul)`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 25px;
  }
`;

export const BulletItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 10px;

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 0;
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

  @media (min-width: 768px) {
    p {
      margin-bottom: 0;
    }

    .bullet-icon {
      border: 4px solid #eaeaea;

      &::after {
        width: 15px;
        height: 15px;
      }
    }

    .bullet-text {
      font-weight: 400;
      font-size: 12px;
      line-height: 250%;
      color: #020202;
    }
  }

  @media (min-width: 1920px) {
    &:not(:last-of-type) {
      margin-bottom: 25px;
    }

    .bullet-icon {
      border: 8px solid #eaeaea;
      width: 39px;
      height: 39px;

      &::after {
        width: 19px;
        height: 19px;
      }
    }

    .bullet-text {
      font-size: 30px;
      line-height: 183%;
    }
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

  @media (min-width: 1920px) {
    font-size: 40px;
  }
`;

export const PersonImgCont = styled(motion.div)`
  width: 74px;
  height: 74px;
  border-radius: 50%;
  background-color: #a066ff;
  overflow: hidden;

  @media (min-width: 1920px) {
    width: 123px;
    height: 123px;
  }
`;

export const PersonCont = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (min-width: 1920px) {
    gap: 25px;
  }
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
  margin-bottom: 5px;

  span {
    font-weight: 700;
    color: #9d68f3;
  }

  @media (min-width: 1920px) {
    font-size: 30px;
    margin-bottom: 15px;
  }
`;

export const PersonSocials = styled(motion.ul)`
  display: flex;
  align-items: center;
  gap: 5px;

  @media (min-width: 1920px) {
    gap: 15px;
  }
`;
