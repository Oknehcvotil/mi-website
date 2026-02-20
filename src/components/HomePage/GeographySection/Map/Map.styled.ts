import styled from "@emotion/styled";

export const MapCont = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 390px;
  width: 100%;
  position: relative;

  @media (min-width: 768px) {
    max-width: 530px;
    margin: 0;
  }

  @media (min-width: 1920px) {
    max-width: 1365px;
  }
`;

export const MapImage = styled.img`
  max-width: 100%;
  height: 225px;
`;

export const MapPoint = styled.button<{ x: number; y: number }>`
  position: absolute;
  left: ${({ x }) => x + 16}px;
  top: ${({ y }) => y + 40}px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: none;
  pointer-events: auto;
  cursor: pointer;
  background: transparent;

  &.turkey {
    left: ${({ x }) => x + 155}px;
    top: ${({ y }) => y - 14}px;
  }

  &.uae {
    left: ${({ x }) => x + 129}px;
    top: ${({ y }) => y - 13}px;
  }

  &.usa {
    left: ${({ x }) => x + 13}px;
    top: ${({ y }) => y + 41}px;
  }

  &.montenegro {
    left: ${({ x }) => x + 20}px;
  }

  &.hungary {
    left: ${({ x }) => x + 19}px;
  }

  &.switzerland {
    left: ${({ x }) => x + 18}px;
  }

  &.portugal {
    left: ${({ x }) => x + 20}px;
  }

  @media (min-width: 1920px) {
    width: 25px;
    height: 25px;
    left: ${({ x }) => x + 26}px;
    top: ${({ y }) => y + 80}px;

    &.uae {
      left: ${({ x }) => x + 20}px;
      top: ${({ y }) => y + 78}px;
    }

    &.portugal {
      left: ${({ x }) => x + 24}px;
      top: ${({ y }) => y + 78}px;
    }

    &.turkey {
      left: ${({ x }) => x + 26}px;
      top: ${({ y }) => y + 78}px;
    }

    &.usa {
      left: ${({ x }) => x + 20}px;
      top: ${({ y }) => y + 78}px;
    }

    &.hungary {
      left: ${({ x }) => x + 20}px;
    }

    &.czech {
      left: ${({ x }) => x + 19}px;
      top: ${({ y }) => y + 69}px;
    }

    &.montenegro {
      left: ${({ x }) => x + 28}px;
    }

    &.switzerland {
      left: ${({ x }) => x + 25}px;
    }
  }
`;
