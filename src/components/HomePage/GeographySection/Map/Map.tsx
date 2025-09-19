import { useLayoutEffect, useMemo, useRef, useState } from "react";
import ImageMapper, { type RefProperties } from "react-img-mapper";
import { MapCont, MapWrap } from "./Map.styled";

type MapProps = {
  alt?: string;
  className?: string; // повесь сюда свои размеры контейнера через CSS
};

const SRC_MOB = "/images/mob/map-mob.webp";
const SRC_TAB = "/images/tab/map-tab.webp";
const SRC_DESK = "/images/desktop/map-desk.webp";

const IMG_WIDTHS: Record<string, number> = {
  [SRC_MOB]: 375,
  [SRC_TAB]: 768,
  [SRC_DESK]: 1920,
};

export default function Map({ alt = "Geography map" }: MapProps) {
  const mapperRef = useRef<RefProperties | null>(null);

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [parentWidth, setParentWidth] = useState(0);

  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setParentWidth(Math.round(entry.contentRect.width));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const src = useMemo(() => {
    if (parentWidth >= 1200) return SRC_DESK;
    if (parentWidth >= 768) return SRC_TAB;
    return SRC_MOB;
  }, [parentWidth]);

  const imgWidth = IMG_WIDTHS[src] ?? 1200;
  

  return (
    <MapCont>
      <MapWrap
        ref={wrapRef}
        style={{ width: "100%", height: "100%", position: "relative" }}
      >
        <ImageMapper
          ref={mapperRef}
          src={src}
          name="geography-map"
          areas={[]}
          responsive
          parentWidth={parentWidth || imgWidth}
          imgWidth={imgWidth}
          imgProps={{ alt }}
        />
      </MapWrap>
    </MapCont>
  );
}

// import { useRef } from "react";
// import type { CountryId } from "../../../../lib/types/home.types";
// import { MapCont, MapWrap } from "./Map.styled";
// import MapPopup from "../MapPopup/MapPopup";

// type Country = { id: CountryId; label: string };

// type MapProps = {
//   countries: Country[];
//   selected: CountryId;
//   onSelect: (id: CountryId) => void;
//   mapAlt: string;
// };

// const Map = ({ countries, selected, onSelect, mapAlt }: MapProps) => {
//   const mapRef = useRef<HTMLDivElement | null>(null);

//   return (
//     <MapCont>
//       <MapWrap ref={mapRef}>
//         <picture>
//           <source
//             media="(min-width: 1920px)"
//             srcSet={[
//               "/images/desktop/map-desk.webp 1x",
//               "/images/desktop/map-desk@2x.webp 2x",
//               "/images/desktop/map-desk@3x.webp 3x",
//             ].join(", ")}
//           />
//           <source
//             media="(min-width: 768px)"
//             srcSet={[
//               "/images/tab/map-tab.webp 1x",
//               "/images/tab/map-tab@2x.webp 2x",
//               "/images/tab/map-tab@3x.webp 3x",
//             ].join(", ")}
//           />
//           <img
//             src="/images/mob/map-mob.webp"
//             srcSet={[
//               "/images/mob/map-mob.webp 1x",
//               "/images/mob/map-mob@2x.webp 2x",
//               "/images/mob/map-mob@3x.webp 3x",
//             ].join(", ")}
//             alt={mapAlt}
//             loading="lazy"
//             decoding="async"
//           />
//         </picture>

//         <MapPopup
//           countries={countries}
//           selected={selected}
//           onSelect={onSelect}
//         />
//       </MapWrap>
//     </MapCont>
//   );
// };

// export default Map;
