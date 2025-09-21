import { Wrap, GeographyTytle } from "./GeographySection.styled";
import { useTranslation, Trans } from "react-i18next";
import type { Country, CountryId } from "../../../lib/types/geo.types";
import { useCallback,  useState } from "react";
import Map from "./Map/Map";
import CountrySelector from "./CountrySelector/CountrySelector";
import {
  COUNTRIES,
  MAPS,
  POINTS_PX,
} from "../../../lib/data/geo";

const GeographySection = () => {
  const { t, i18n } = useTranslation("home");
  const lang = i18n.language;

  const [selected, setSelected] = useState<CountryId>("ukraine");
  const [popupPx, setPopupPx] = useState<{ x: number; y: number } | null>(null);

  const countries: Country[] = COUNTRIES;

  const onSelect = useCallback((id: CountryId) => setSelected(id), []);
  return (
    <Wrap>
      <GeographyTytle lang={lang}>
        <Trans t={t} i18nKey="map.title" components={{ 1: <span /> }} />
      </GeographyTytle>

      <div>
        <CountrySelector
          countries={countries}
          selected={selected}
          onSelect={onSelect}
        />

        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 1200,
            margin: "24px 0",
          }}
        >
          <Map
            selected={selected}
            onSelect={onSelect}
            maps={MAPS}
            pointsPx={POINTS_PX}
            onPointPixels={setPopupPx}
            popupPx={popupPx}
          />
        </div>
      </div>
    </Wrap>
  );
};

export default GeographySection;
