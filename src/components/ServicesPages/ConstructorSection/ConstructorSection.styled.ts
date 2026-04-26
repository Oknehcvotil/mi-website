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

  @media (min-width: 768px) {
    font-size: 40px;
  }

  @media (min-width: 1280px) {
    font-size: 45px;
  }

  @media (min-width: 1920px) {
    font-size: 80px;
    margin-bottom: 30px;
  }
`;

export const ConstructorLead = styled.p`
  color: #14111a;
  font-weight: 500;
  font-size: 13px;
  text-align: center;
  max-width: 340px;
  width: 100%;
  margin: 0 auto 15px;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 130%;
    max-width: none;
  }

  @media (min-width: 1024px) {
    max-width: 720px;
  }

  @media (min-width: 1280px) {
    font-size: 23px;
    max-width: 1150px;
    margin-bottom: 40px;
  }

  @media (min-width: 1920px) {
    font-size: 45px;
    margin-bottom: 75px;
    max-width: 1510px;
  }
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

  @media (min-width: 768px) {
    max-width: 630px;
    background-image: url("/images/tab/background/constructor-bg.svg");
  }

  @media (min-width: 1920px) {
    background-image: url("/images/desktop/background/constructor-bg.svg");
    max-width: 1200px;
    height: 270px;
  }
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

  @media (min-width: 768px) {
    font-size: 20px;

    &.recruitment--item {
      top: 25px;
      left: ${({ lang }) => (lang === "en" ? "95px" : "90px")};

      span {
        position: absolute;
        bottom: -72px;
        left: -42px;
      }
    }

    &.hr--item {
      max-width: 230px;
      left: 190px;
      width: 100%;
    }

    &.psychology-item {
      max-width: 180px;
      width: 100%;
      top: 18px;
      right: 3px;
      font-size: 20px;
    }
  }

  @media (min-width: 1920px) {
    font-size: 40px;

    &.recruitment--item {
      top: 40px;
      left: ${({ lang }) => (lang === "en" ? "180px" : "185px")};

      span {
        position: absolute;
        bottom: -130px;
        left: -110px;
      }
    }

    &.hr--item {
      max-width: none;
      left: 335px;
      top: 170px;
      width: 100%;
    }

    &.psychology-item {
      max-width: 340px;
      width: 100%;
      top: 20px;
      right: 15px;
      font-size: 40px;
    }
  }
`;
