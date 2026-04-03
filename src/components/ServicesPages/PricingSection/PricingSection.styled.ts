import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const PricingSectionWrap = styled(motion.section)`
  padding: 30px;
  background-color: #f3f4f9;

  @media (min-width: 1920px) {
    padding: 75px 0;
  }
`;

export const CardsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    align-items: stretch;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
    gap: 16px;

    &[data-pricing-scope="phd"] {
      gap: 10px;
      justify-content: space-between;
    }

    &[data-pricing-scope="phd"] > li {
      flex: 1 1 calc((100% - 30px) / 4);
      max-width: calc((100% - 30px) / 4);
      min-width: 0;
    }
  }

  @media (min-width: 1024px) and (max-width: 1919px) {
    &[data-pricing-scope="phd"] .phd-pricing-card-title,
    &[data-pricing-scope="phd"] .phd-pricing-card-title.top--sale,
    &[data-pricing-scope="phd"] .phd-pricing-card-title:not(.top--sale) {
      font-size: 32px;
    }

    &[data-pricing-scope="phd"] .phd-pricing-card-text,
    &[data-pricing-scope="phd"] .phd-pricing-card-text p {
      font-size: 10px;
    }

    &[data-pricing-scope="phd"] .phd-pricing-card-button,
    &[data-pricing-scope="phd"] .phd-pricing-card-button span {
      font-size: 13px;
    }
  }

  @media (min-width: 1920px) {
    flex-wrap: nowrap;
    gap: 20px;

    &[data-pricing-scope="phd"] {
      gap: 15px;
    }

    &[data-pricing-scope="phd"] > li {
      flex: 1 1 calc((100% - 45px) / 4);
      max-width: calc((100% - 45px) / 4);
    }

    &[data-pricing-scope="phd"] > li.phd-pricing-card {
      padding-left: 25px;
      padding-right: 25px;
    }

    &[data-pricing-scope="phd"] .phd-pricing-card-title,
    &[data-pricing-scope="phd"] .phd-pricing-card-title.top--sale,
    &[data-pricing-scope="phd"] .phd-pricing-card-title:not(.top--sale) {
      font-size: 50px;
    }

    &[data-pricing-scope="phd"] .phd-pricing-card-text,
    &[data-pricing-scope="phd"] .phd-pricing-card-text p {
      font-size: 15px;
    }

    &[data-pricing-scope="phd"] .phd-pricing-card-button,
    &[data-pricing-scope="phd"] .phd-pricing-card-button span {
      font-size: 22px;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    &.full-width-last > li:last-child {
      flex: 0 0 100%;
      max-width: 100%;
    }

    &.full-width-last > li:last-child > div {
      max-width: 715px;
      margin: 0 auto;
    }

    &.full-width-last > li:last-child h2 {
      text-align: center;
    }

    &.full-width-last-clients > li:last-child > div {
      max-width: 510px;
    }

    &.full-width-last-clients > li:last-child > div > a {
      max-width: 300px;
      margin: 0 auto;
    }
  }
`;
