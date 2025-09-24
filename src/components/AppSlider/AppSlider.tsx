import {
  forwardRef,
  Children,
  isValidElement,
  type ReactNode,
  useRef,
} from "react";
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
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const pagRef = useRef<HTMLDivElement | null>(null);

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
        // ставим пустые объекты — реальные элементы подставим ниже
        navigation={{} as import("swiper/types").NavigationOptions}
        pagination={{ clickable: true }}
        onBeforeInit={(swiper) => {
          // подсовываем реальные DOM-элементы
          (
            swiper.params.navigation as import("swiper/types").NavigationOptions
          ).prevEl = prevRef.current;
          (
            swiper.params.navigation as import("swiper/types").NavigationOptions
          ).nextEl = nextRef.current;
          if (
            swiper.params.pagination &&
            typeof swiper.params.pagination === "object"
          ) {
            (
              swiper.params
                .pagination as import("swiper/types").PaginationOptions
            ).el = pagRef.current;
          }
        }}
        onInit={(swiper) => {
          // гарантируем корректную инициализацию
          swiper.navigation.init();
          swiper.navigation.update();
          swiper.pagination.init();
          swiper.pagination.render();
          swiper.pagination.update();
        }}
      >
        {slides}
        <ButtonsWrapper className="app-slider-controls" slot="container-end">
          <SliderButton
            slot="container-end"
            className="app-prev"
            type="button"
            aria-label="Previous slide"
            ref={prevRef}
          >
            <svg width={13} height={22}>
              <use href="/icons/sprite.svg#icon-slider-arrow" />
            </svg>
          </SliderButton>

          <div slot="container-end" className="app-pagination" ref={pagRef} />

          <SliderButton
            slot="container-end"
            className="app-next"
            type="button"
            aria-label="Next slide"
            ref={nextRef}
          >
            <svg width={13} height={22} style={{ transform: "scaleX(-1)" }}>
              <use href="/icons/sprite.svg#icon-slider-arrow" />
            </svg>
          </SliderButton>
        </ButtonsWrapper>
      </Swiper>

      {/* Контролы — классы остаются для твоих стилей */}
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
