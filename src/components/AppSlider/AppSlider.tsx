import { forwardRef, Children, isValidElement, type ReactNode } from "react";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ButtonsWrapper, SliderButton, SliderCont } from "./AppSlider.styled";

type AppSliderProps = {
  className?: string;
  children: ReactNode;
};

const AppSlider = forwardRef<SwiperRef, AppSliderProps>(function AppSlider(
  { className, children },
  ref
) {
  const slides = Children.toArray(children).map((child, i) => (
    <SwiperSlide key={i}>
      {isValidElement(child) ? child : <>{child}</>}
    </SwiperSlide>
  ));

  return (
    <SliderCont className={className}>
      <Swiper
        ref={ref}
        modules={[A11y, Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={0}
        // Явно указываем селекторы кастомных элементов
        navigation={{ prevEl: ".app-prev", nextEl: ".app-next" }}
        pagination={{ el: ".app-pagination", clickable: true }}
        // Гарантируем инициализацию после монтирования детей
        onInit={(swiper) => {
          swiper.navigation.init();
          swiper.navigation.update();
          swiper.pagination.init();
          swiper.pagination.render();
          swiper.pagination.update();
        }}
      >
        {slides}

        {/* КАСТОМНЫЕ КНОПКИ/ТОЧКИ ВНУТРИ SWIPER */}
      </Swiper>
      <ButtonsWrapper className="app-slider-controls">
        <SliderButton
          slot="container-end"
          className="app-prev"
          type="button"
          aria-label="Previous slide"
        >
          <svg width={13} height={22}>
            <use href="/icons/sprite.svg#icon-slider-arrow" />
          </svg>
        </SliderButton>

        <div slot="container-end" className="app-pagination" />

        <SliderButton
          slot="container-end"
          className="app-next"
          type="button"
          aria-label="Next slide"
        >
          <svg width={13} height={22} style={{ transform: "scaleX(-1)" }}>
            <use href="/icons/sprite.svg#icon-slider-arrow" />
          </svg>
        </SliderButton>
      </ButtonsWrapper>
    </SliderCont>
  );
});

export default AppSlider;

{
  /* <ButtonsWrapper className="app-slider-controls">
  <SliderButton ref={prevRef} type="button" aria-label="Previous slide">
    <svg width={13} height={22}>
      <use href="/icons/sprite.svg#icon-slider-arrow" />
    </svg>
  </SliderButton>

  <div
    ref={paginationRef}
    className="app-slider-dots"
    aria-label="Pagination"
  />

  <SliderButton ref={nextRef} type="button" aria-label="Next slide">
    <svg width={13} height={22}>
      <use href="/icons/sprite.svg#icon-slider-arrow" />
    </svg>
  </SliderButton>
</ButtonsWrapper>; */
}
