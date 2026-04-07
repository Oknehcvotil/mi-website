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
import {
  ButtonsWrapper,
  SliderButton,
  SliderCont,
  SliderPair,
} from "./AppSlider.styled";
import { useMediaQuery } from "../../lib/hooks/useMediaQuery";
import CardsWrapper from "../CasesPages/CardsWrapper/CardsWrapper";

type AppSliderProps = {
  className?: string;
  children: ReactNode;
  breakpoints?: import("swiper/types").SwiperOptions["breakpoints"];
  pairOnTablet?: boolean;
};

const AppSlider = forwardRef<SwiperRef, AppSliderProps>(function AppSlider(
  { className, children, breakpoints, pairOnTablet = false },
  ref,
) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const pagRef = useRef<HTMLDivElement | null>(null);
  const isTablet = useMediaQuery("(min-width: 768px)");

  const slideChildren = Children.toArray(children).map((child) =>
    isValidElement(child) ? child : <>{child}</>,
  );

  const groupedSlides =
    pairOnTablet && isTablet
      ? slideChildren.reduce<ReactNode[][]>((acc, _child, index, array) => {
          if (index % 2 === 0) {
            acc.push(array.slice(index, index + 2));
          }

          return acc;
        }, [])
      : slideChildren.map((child) => [child]);

  const slides = groupedSlides.map((group, i) => (
    <SwiperSlide key={i}>
      {pairOnTablet ? (
        <CardsWrapper isSingle={group.length === 1}>{group}</CardsWrapper>
      ) : (
        <SliderPair className={group.length === 1 ? "single" : undefined}>
          {group}
        </SliderPair>
      )}
    </SwiperSlide>
  ));

  return (
    <SliderCont className={className}>
      <Swiper
        ref={ref}
        modules={[A11y, Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={0}
        breakpoints={breakpoints}
        navigation={{} as import("swiper/types").NavigationOptions}
        pagination={{ clickable: true }}
        onBeforeInit={(swiper) => {
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
    </SliderCont>
  );
});

export default AppSlider;

