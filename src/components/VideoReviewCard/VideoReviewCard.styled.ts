// VideoReviewCard.styled.ts
import styled from "@emotion/styled";

export const Card = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 295px;
  width: 100%;
  min-height: 385px;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 13px;
  border: 5px solid #000;
`;

/* базовый слой */
const Layer = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  &[data-visible="false"] {
    opacity: 0;
    pointer-events: none;
  }
  &[data-visible="true"] {
    opacity: 1;
    pointer-events: auto;
  }
  transition: opacity 200ms ease;
`;

export const PosterLayer = styled(Layer)`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FrameLayer = styled(Layer)`
  iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }
`;

export const PlayBtn = styled.button`
  position: absolute;
  inset: 0;
  margin: auto;
  width: 112px;
  height: 112px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: rgba(226, 226, 226, 0.2);
  color: #fff;

  &::after {
    content: "";
    opacity: 1;
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -35% -50%;
    border-left: 36px solid currentColor;
    border-top: 18.5px solid transparent;
    border-bottom: 18.5px solid transparent;
    transition: background-color 0.2s ease;
  }

  &:hover,
  &:focus {
    background-color: rgba(160, 102, 255, 0.7);
  }
`;

export const Meta = styled.div`
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 700;
  font-size: 18px;
  line-height: 83%;
  text-align: center;
  color: #fff;
`;

export const Name = styled.p`
  margin-bottom: 20px;
`;
