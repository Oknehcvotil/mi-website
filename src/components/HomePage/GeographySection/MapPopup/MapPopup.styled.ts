import styled from "@emotion/styled";

export const PopupsWrapper = styled.div<{ x: number; y: number }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  left: ${({ x }) => `${Math.round(x)}px`};
  top: ${({ y }) => `${Math.round(y)}px`};

  &.popup--uae,
  &.popup--turkey {
    flex-direction: row-reverse;
    .popup--country {
      flex-direction: row-reverse;

      &::after {
        content: "";
        position: absolute;
        bottom: 34px;
        left: 70%;
        transform: translateX(-50%) rotate(180deg);
        border-width: 10px 10px 0 10px;
        border-style: solid;
        border-color: white transparent transparent transparent;
      }
    }
  }

  &.lang-ua.popup--turkey {
    left: ${({ x }) => x - 19}px;
  }

  &.lang-en.popup--czech {
    flex-direction: row-reverse;
    left: 10px;

    .popup--country {
      flex-direction: row-reverse;

      &::after {
        content: "";
        left: 74%;
      }
    }
  }
`;

export const CountryPopup = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  border-radius: 8px;
  padding: 3px 4px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: #fff;
  position: relative;
  height: 35px;

  img {
    width: 21px;
    height: 21px;
  }

  span {
    font-weight: 700;
    font-size: 12px;
    line-height: 100%;
    color: #000;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 20%;
    transform: translateX(-50%);
    border-width: 10px 10px 0 10px;
    border-style: solid;
    border-color: white transparent transparent transparent;
  }
`;

export const ClientPopup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 3px 4px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: #fff;
  height: 35px;
  width: 85px;

  img {
    max-height: 30px;
    max-width: 60px;
  }
`;
