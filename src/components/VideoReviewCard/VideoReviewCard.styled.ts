import styled from "@emotion/styled";

export const VideoCardWrap = styled.div`
  position: relative;
`;

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
  aspect-ratio: 16 / 9;

  &.vertical {
    max-width: 360px;
    min-height: 275px;
    margin-bottom: 15px;
  }
`;

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
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
    background-color: #000;
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
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 700;
  font-size: 15px;
  line-height: 83%;
  background-color: #fff;
  color: #a066ff;
  border-radius: 5px;
  padding: 10px 10px;
  display: inline-block;
  white-space: nowrap;
  width: max-content;

  &.vertical {
    position: static;
    background-color: transparent;
    color: #020202;
    transform: translateX(0);
    padding: 0;
    border-radius: 0;
    margin: 0 auto;
    width: 100%;

    p {
      font-weight: 700;
      font-size: 25px;
      line-height: 120%;
      text-align: center;
      color: #020202;
      margin-bottom: 0;
    }
  }
`;

export const Name = styled.p`
  margin-bottom: 10px;
  color: #020202;
`;
