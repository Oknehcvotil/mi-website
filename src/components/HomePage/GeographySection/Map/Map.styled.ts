import styled from "@emotion/styled";

export const MapCont = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 390px;
  width: 100%;
  position: relative;
`;

export const MapImage = styled.img`
  max-width: 100%;
  height: 225px;
`;

export const MapPoint = styled.button<{ x: number; y: number }>`
  position: absolute;
  left: ${({ x }) => x + 14}px;
  top: ${({ y }) => y + 41}px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: none;
  pointer-events: auto;
  cursor: pointer;
  background: transparent;

  &.turkey {
    left: ${({ x }) => x + 142}px;
    top: ${({ y }) => y - 16}px;
  }

  &.uae {
    left: ${({ x }) => x + 129}px;
    top: ${({ y }) => y - 13}px;
  }

  &.usa {
    left: ${({ x }) => x + 11}px;
    top: ${({ y }) => y + 42}px;
  }

  &.montenegro {
    left: ${({ x }) => x + 18}px;
  }

  &.switzerland {
    left: ${({ x }) => x + 18}px;
  }

  &.portugal {
    left: ${({ x }) => x + 20}px;
  }
`;
