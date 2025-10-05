import styled from "@emotion/styled";

export const SliderCont = styled.div`
  position: relative;

  .swiper-wrapper {
    margin-bottom: 30px;
    align-items: center;
  }

  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    width: 11px;
    height: 11px;
    background-color: #8a38f5;
  }

  .swiper-pagination-bullet {
    width: 7px;
    height: 7px;
    background-color: #b2afb6;
  }

  &.team-slider {
    .swiper-wrapper {
      margin-bottom: 0px;
    }

    .swiper-pagination-bullet,
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background-color: #fff;
    }

    button {
      border: 1px solid #fff;
    }

    .app-slider-controls {
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 200;

      &::after {
        content: "";
        position: absolute;
        bottom: 0px;
        left: 0;
        background: #5427b1;
        height: 40px;
        width: 100%;
        z-index: -1;
      }
    }
  }
`;

export const ButtonsWrapper = styled.div`
  max-width: 390px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  .app-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto !important;
  }

  .swiper {
    text-align: center;
  }

  .swiper-pagination-bullet {
    margin: 0;
    opacity: 1;
  }
`;

export const SliderButton = styled.button`
  outline: none;
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8a38f5;
  border-radius: 50%;

  &.app-next {
    transform: rotate(360deg);
  }
`;

export const SliderDots = styled.div``;
