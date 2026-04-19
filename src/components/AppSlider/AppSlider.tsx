import {
  forwardRef,
  Children,
  isValidElement,
  type ReactNode,
  useRef,
} from "react";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import type {
  NavigationOptions,
  PaginationOptions,
  SwiperOptions,
} from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ButtonsWrapper, SliderButton, SliderCont } from "./AppSlider.styled";
import { useMediaQuery } from "../../lib/hooks/useMediaQuery";
import CardsWrapper from "../CasesPages/CardsWrapper/CardsWrapper";

type SlideGroup = ReactNode[];

type AppSliderProps = {
  className?: string;
  children: ReactNode;
  breakpoints?: SwiperOptions["breakpoints"];
  pairOnTablet?: boolean;
};

const getGroupedSlides = (
  slideChildren: ReactNode[],
  shouldPairSlides: boolean,
): SlideGroup[] => {
  if (!shouldPairSlides) {
    return slideChildren.map((child) => [child]);
  }

  return slideChildren.reduce<SlideGroup[]>((acc, _child, index, array) => {
    if (index % 2 === 0) {
      acc.push(array.slice(index, index + 2));
    }

    return acc;
  }, []);
};

const setNavigationElements = (
  navigation: NavigationOptions | boolean | undefined,
  prevEl: HTMLButtonElement | null,
  nextEl: HTMLButtonElement | null,
) => {
  if (!navigation || navigation === true) return;

  navigation.prevEl = prevEl;
  navigation.nextEl = nextEl;
};

const setPaginationElement = (
  pagination: PaginationOptions | boolean | undefined,
  el: HTMLDivElement | null,
) => {
  if (!pagination || pagination === true) return;

  pagination.el = el;
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

  const groupedSlides = getGroupedSlides(
    slideChildren,
    pairOnTablet && isTablet,
  );
  const hasMultipleSlides = groupedSlides.length > 1;

  const slides = groupedSlides.map((group, i) => (
    <SwiperSlide key={i}>
      {pairOnTablet ? (
        <CardsWrapper isSingle={group.length === 1}>{group}</CardsWrapper>
      ) : (
        group
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
        navigation={hasMultipleSlides ? ({} as NavigationOptions) : false}
        pagination={{ clickable: true }}
        onBeforeInit={(swiper) => {
          if (!hasMultipleSlides) {
            return;
          }

          setNavigationElements(
            swiper.params.navigation,
            prevRef.current,
            nextRef.current,
          );
          setPaginationElement(swiper.params.pagination, pagRef.current);
        }}
        onInit={(swiper) => {
          if (hasMultipleSlides) {
            swiper.navigation.init();
            swiper.navigation.update();
          }

          swiper.pagination.init();
          swiper.pagination.render();
          swiper.pagination.update();
        }}
      >
        {slides}
        <ButtonsWrapper className="app-slider-controls" slot="container-end">
          {hasMultipleSlides && (
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
          )}

          <div slot="container-end" className="app-pagination" ref={pagRef} />

          {hasMultipleSlides && (
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
          )}
        </ButtonsWrapper>
      </Swiper>
    </SliderCont>
  );
});

export default AppSlider;
