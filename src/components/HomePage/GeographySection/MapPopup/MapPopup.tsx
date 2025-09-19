import { memo } from "react";
import type { CountryId } from "../../../../lib/types/home.types";
import {
  POINTS_MOB,
  flagSet,
  CLIENT_ASSET,
} from "../../../../lib/data/home.page";
import { webpSet } from "../../../../lib/helpers/helpers";
import {
  MapPointBtn,
  MapPoint,
  CountryPopup,
  ClientPopup,
  PopupsWrapper,
} from "./MapPopup.styled";
import SVGIcon from "../../../SVGIcon/SVGIcon";

type Country = { id: CountryId; label: string };

type MapPopupProps = {
  countries: Country[];
  selected: CountryId;
  onSelect: (id: CountryId) => void;
};

const MapPopup = memo(({ countries, selected, onSelect }: MapPopupProps) => {
  return (
    <>
      {/* ТОЧКИ */}
      {countries.map((c) => {
        const p = POINTS_MOB[c.id];
        if (!p) return null;

        const isActive = c.id === selected;

        return (
          <>
            <MapPointBtn
              key={c.id}
              type="button"
              aria-label={c.label}
              aria-pressed={isActive}
              onMouseEnter={() => onSelect(c.id)}
              onFocus={() => onSelect(c.id)}
              onClick={() => onSelect(c.id)}
              xPct={p.xPct}
              yPct={p.yPct}
            />
            <MapPoint key={c.id} xPct={p.xPct} yPct={p.yPct}>
              <PopupsWrapper>
                {/* ПОПАП рисуем только над выбранной точкой */}
                {isActive && (
                  <>
                    {/* Страна: флаг + название */}
                    <CountryPopup>
                      {(() => {
                        const { src, srcSet } = flagSet(c.id);
                        const countryName = c.label || "Selected country flag";
                        return (
                          <>
                            <img
                              alt={countryName}
                              src={src}
                              srcSet={srcSet}
                              loading="lazy"
                              decoding="async"
                            />
                            <span>{countryName}</span>
                          </>
                        );
                      })()}
                    </CountryPopup>

                    {/* Клиент(ы) для выбранной страны */}
                    <ClientPopup>
                      {(() => {
                        const asset = CLIENT_ASSET[c.id];
                        if (!asset) return null;

                        if (asset.type === "text")
                          return <span>{asset.text}</span>;

                        if (asset.type === "svg") {
                          return (
                            <SVGIcon
                              iconId={asset.src}
                              width={"100%"}
                              height={"100%"}
                            />
                          );
                        }

                        const { src, srcSet } = webpSet(asset.base);
                        return (
                          <img
                            alt="client"
                            src={src}
                            srcSet={srcSet}
                            loading="lazy"
                            decoding="async"
                          />
                        );
                      })()}
                    </ClientPopup>
                  </>
                )}
              </PopupsWrapper>
            </MapPoint>
          </>
        );
      })}
    </>
  );
});

export default MapPopup;
