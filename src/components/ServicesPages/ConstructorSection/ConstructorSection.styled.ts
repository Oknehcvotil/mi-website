import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ConstructorSectionWrap = styled(motion.section)`
  padding: 50px 0 0;
`;

export const ConstructorTitle = styled.h2`
  font-family: "Unbounded";
  font-weight: 700;
  font-size: 35px;
  line-height: 100%;
  text-transform: uppercase;
  text-align: center;
  color: #020202;
  margin-bottom: 10px;
`;

export const ConstructorLead = styled.p`
  color: #14111a;
  font-weight: 500;
  font-size: 13px;
  text-align: center;
  max-width: 340px;
  width: 100%;
  margin: 0 auto 15px;
`;

export const ConstuctorContainer = styled(motion.div)`
  position: relative;
  background-image: url("/images/mob/background/constructor-bg.svg");
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
  max-width: 342px;
  width: 100%;
  height: 155px;
`;

export const ConstructorItems = styled(motion.li)<{ lang: string }>`
  position: absolute;
  font-family: "Unbounded";
  text-transform: uppercase;
  font-size: 13px;
  line-height: 130%;
  color: #fff;

  &.recruitment--item {
    top: 25px;
    left: ${({ lang }) => (lang === "en" ? "51px" : "58px")};

    span {
      position: absolute;
      bottom: -72px;
      left: -42px;
    }
  }

  &.hr--item {
    left: 104px;
    top: 101px;
    color: #020202;
    max-width: 126px;
    width: 100%;
  }

  &.psychology-item {
    max-width: 85px;
    width: 100%;
    top: 18px;
    right: 3px;
    font-size: 10px;
  }
`;
