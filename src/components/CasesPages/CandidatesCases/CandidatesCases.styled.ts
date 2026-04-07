import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const CandidatesSectionWrap = styled(motion.section)`
  padding-top: 105px;

  @media (min-width: 768px) {
    article.candidates-cases-video {
      width: 340px;
      max-width: 340px;
    }

    div.candidates-cases-video-meta {
      width: 340px;
      max-width: 340px;
    }

    .candidates-message-card {
      width: 100%;
      max-width: 350px;
      min-width: 0;
      box-sizing: border-box;
    }

    .candidates-message-card .candidates-message-card {
      width: 100%;
      max-width: 100%;
      min-width: 0;
      box-sizing: border-box;
    }
  }

  @media (min-width: 1920px) {
    article.candidates-cases-video {
      width: 725px;
      max-width: 725px;
      height: 555px;
      aspect-ratio: auto;
    }

    div.candidates-cases-video-meta {
      width: 725px;
      max-width: 725px;
    }

    .candidates-message-card {
      max-width: 725px;
    }

    .candidates-message-card.candidates-message-card {
      max-width: 725px;
    }
  }
`;

export const CandidatesCasesTitle = styled(motion.h1)`
  font-family: "Unbounded";
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  text-transform: uppercase;
  text-align: center;
  background: linear-gradient(90deg, #a066ff 0%, #5427b1 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  margin-bottom: 30px;
`;

export const PairCasesColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  min-width: 0;

  @media (min-width: 768px) {
    width: 350px;
    max-width: 350px;
  }

  @media (min-width: 1920px) {
    width: 725px;
    max-width: 725px;
    gap: 20px;
  }
`;
