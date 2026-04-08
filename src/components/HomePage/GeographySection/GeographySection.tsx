import { Wrap, GeographyTytle, MapCont } from "./GeographySection.styled";
import { useTranslation, Trans } from "react-i18next";
import type { Country, CountryId } from "../../../lib/types/geo.types";
import { useState } from "react";
import Map from "./Map/Map";
import CountrySelector from "./CountrySelector/CountrySelector";
import { COUNTRIES, MAPS, POINTS_PX } from "../../../lib/data/geo";
import { useAutoRotateCountry } from "../../../lib/hooks/useAutoRotateCountry";
import { useReducedMotion } from "framer-motion";
import {
  geographyContentVariants,
  geographySectionVariants,
  geographyTitleVariants,
} from "../../../lib/animations/home/animations.geography";

const GeographySection = () => {
  const { t, i18n } = useTranslation("home");
  const lang = i18n.language;
  const reduce = !!useReducedMotion();

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
    <Wrap
      variants={reduce ? undefined : geographySectionVariants}
      initial={reduce ? undefined : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, amount: 0.2 }}
      animate={reduce ? "show" : undefined}
    >
      <GeographyTytle
        lang={lang}
        variants={reduce ? undefined : geographyTitleVariants}
      >
        <Trans t={t} i18nKey="map.title" components={{ 1: <span /> }} />
      </GeographyTytle>

      <MapCont variants={reduce ? undefined : geographyContentVariants}>
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
