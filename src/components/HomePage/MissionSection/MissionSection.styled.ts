import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrap = styled.div`
  padding-top: 20px;
  padding-bottom: 40px;
`;

export const SectionCont = styled.div`
  background-image: image-set(
    url("/images/mob/background/mission-bg.webp") type("image/webp") 1x,
    url("/images/mob/background/mission-bg@2x.webp") type("image/webp") 2x,
    url("/images/mob/background/mission-bg@3x.webp") type("image/webp") 3x,

    url("/images/mob/background/mission-bg.jpg") 1x,
    url("/images/mob/background/mission-bg@2x.jpg") 2x,
    url("/images/mob/background/mission-bg@3x.jpg") 3x
  );
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 390px;
  width: 100%;
  height: 540px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;

    background: radial-gradient(
        70% 65% at 95% 8%,
        rgba(132, 82, 255, 0.72) 0%,
        rgba(132, 82, 255, 0.45) 40%,
        rgba(132, 82, 255, 0.2) 60%,
        rgba(132, 82, 255, 0) 78%
      ),
      radial-gradient(
        70% 65% at 95% 92%,
        rgba(132, 82, 255, 0.72) 0%,
        rgba(132, 82, 255, 0.45) 40%,
        rgba(132, 82, 255, 0.2) 60%,
        rgba(132, 82, 255, 0) 78%
      );
    mix-blend-mode: screen;
  }
`;

export const SubTitle = styled.h3`
  font-family: "Unbounded";
  font-weight: 700;
  font-size: 35px;
  text-transform: uppercase;
  line-height: 1;
  text-align: center;
  color: #14111a;
  margin-bottom: 13px;
`;

export const StatsList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
