import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  max-width: 390px;
  padding: 0 15px;
  margin: 0 auto;

  &.cases-hero {
    @media (min-width: 1920px) {
      padding: 0 200px;
    }
  }

  &.footer-cont {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 25px;

    &.cases-message {
      padding: 0;
    }

    &.case-info-card-container {
      margin: 0;
    }

    &.services-business-psy--section {
      padding: 0 0 0 25px;
    }

    &.cases-hero-business {
      position: relative;
      overflow: hidden;
    }
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
    padding: 0 30px;

    &.services-business-psy--section {
      padding: 0 0 0 30px;
    }

    &.cases-hero-business {
      position: relative;
      overflow: visible;
    }
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 35px;

    &.phd-eligibility {
      max-width: 1024px;
      padding: 0 30px;
    }

    &.cases-hero-hr {
      padding: 0 60px;
    }

    &.cases-message {
      max-width: 360px;
      margin: 0;
    }
  }

  @media (min-width: 1920px) {
    max-width: 1920px;
    padding: 0 45px;

    &.hero-services--cont {
      padding: 0 115px;
    }

    &.pricing-section-container {
      padding: 0 115px;
    }

    &.cases-hero {
      padding: 0 200px;
    }

    &.cases-hero-hr {
      padding: 0 100px;
    }

    &.services-business-psy--section {
      padding: 0 0 0 45px;
    }

    &.phd-eligibility {
      max-width: 1920px;
      padding: 0 45px;
    }

    &.cases-message {
      max-width: unset;
      margin: 0 auto;
    }
  }
`;
