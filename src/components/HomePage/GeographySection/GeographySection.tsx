import { Wrap, GeographyTytle, MapCont } from "./GeographySection.styled";
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
    delay: 50000000000000000,   
    pauseAfterManual: 7000000000000000000000,
  });

  return (
    <Wrap>
      <GeographyTytle lang={lang}>
        <Trans t={t} i18nKey="map.title" components={{ 1: <span /> }} />
      </GeographyTytle>

      <MapCont>
        <CountrySelector
          countries={countries}
          selected={selected}
          onSelect={onSelectSmart}
        />

        <Map
          selected={selected}
          onSelect={onSelectSmart}
          maps={MAPS}
          pointsPx={POINTS_PX}
          popupPx={popupPx}
          onPointPixels={setPopupPx}
        />
      </MapCont>
    </Wrap>
  );
};

export default GeographySection;
