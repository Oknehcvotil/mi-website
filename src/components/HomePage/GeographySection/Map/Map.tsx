import { useEffect, useRef, useState } from "react";
import type {
  CountryId,
  MapKey,
  MapDef,
  PinPx,
} from "../../../../lib/types/geo.types";
import MapPopup from "../MapPopup/MapPopup";
import { useTranslation } from "react-i18next";
import { FLAG_SRC, CLIENTS } from "../../../../lib/data/geo";

import { MapCont, MapImage, MapPoint } from "./Map.styled";

type Props = {
  selected: CountryId;
  onSelect: (id: CountryId) => void;
  maps: Record<MapKey, MapDef>;
  pointsPx: Record<MapKey, Record<CountryId, PinPx>>;
  popupPx: { x: number; y: number } | null;
  onPointPixels: (px: { x: number; y: number } | null) => void;
  alt?: string;
};

function pickKey(width: number): MapKey {
  if (width < 768) return "mob";
  if (width < 1920) return "tab";
  return "desk";
}

const Map =({
  selected,
  onSelect,
  maps,
  pointsPx,
  popupPx,
  onPointPixels,
  alt = "Geography map",
}: Props) => {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [wrapW, setWrapW] = useState<number>(0);
  const { i18n } = useTranslation("home");

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      setWrapW(entries[0].contentRect.width);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const key: MapKey = pickKey(wrapW || 0);
  const mapDef: MapDef = maps[key];
  const pts = pointsPx[key];


  const { t } = useTranslation("home");

  const countryLabel = t(`country.${selected}`);
  const client = CLIENTS[selected];
  const flagBase = FLAG_SRC[selected];


  useEffect(() => {
    const found = pts[selected];
    if (!found) {
      onPointPixels(null);
      return;
    }
    onPointPixels(found);
  }, [pts, selected, onPointPixels]);

  return (
    <MapCont ref={wrapRef}>
      <MapImage
        src={mapDef.src}
        alt={alt}
        style={{ width: "100%", height: "auto", display: "block" }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
        }}
      >
        {Object.entries(pts).map(([id, p]) => (
          <MapPoint
            key={id}
            x={p.x}
            y={p.y}
            onClick={() => onSelect(id as CountryId)}
            aria-label={id}
            type="button"
            className={`${id} point.lang-${i18n.language}`}
          />
        ))}
      </div>

      <MapPopup
        visible={popupPx !== null}
        x={popupPx?.x ?? 0}
        y={popupPx?.y ?? 0}
        countryId={selected}
        countryLabel={countryLabel}
        client={client}
        flagBase={flagBase}
      />
    </MapCont>
  );
}

export default Map;