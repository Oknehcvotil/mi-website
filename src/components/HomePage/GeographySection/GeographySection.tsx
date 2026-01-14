import { Wrap, GeographyTytle } from "./GeographySection.styled";
import { useTranslation, Trans } from "react-i18next";
import type { Country, CountryId } from "../../../lib/types/geo.types";
import { useState } from "react";
import Map from "./Map/Map";
import CountrySelector from "./CountrySelector/CountrySelector";
import { COUNTRIES, MAPS, POINTS_PX } from "../../../lib/data/geo";
import { useAutoRotateCountry } from "../../../lib/hooks/useAutoRotateCountry";

const GeographySection = () => {
  const { t, i18n } = useTranslation("home");
  const lang = i18n.language;

  const [selected, setSelected] = useState<CountryId>("ukraine");
  const [popupPx, setPopupPx] = useState<{ x: number; y: number } | null>(null);

  const countries: Country[] = COUNTRIES;

  const { onSelectSmart } = useAutoRotateCountry({
    countries,
    selected,
    onSelect: setSelected,
    delay: 5000,
    pauseAfterManual: 7000,
  });

  return (
    <Wrap>
      <GeographyTytle lang={lang}>
        <Trans t={t} i18nKey="map.title" components={{ 1: <span /> }} />
      </GeographyTytle>

      <CountrySelector
        countries={countries}
        selected={selected}
        onSelect={onSelectSmart}
      />

      <div style={{ position: "relative", margin: "0 auto" }}>
        <Map
          selected={selected}
          onSelect={onSelectSmart}
          maps={MAPS}
          pointsPx={POINTS_PX}
          popupPx={popupPx}
          onPointPixels={setPopupPx}
        />
      </div>
    </Wrap>
  );
};

export default GeographySection;
