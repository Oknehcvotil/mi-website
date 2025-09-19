import { Wrap, GeographyTytle } from "./GeographySection.styled";
import { useTranslation, Trans } from "react-i18next";
import { COUNTRY_IDS } from "../../../lib/data/home.page";
import type { CountryId } from "../../../lib/types/home.types";
import { useMemo, useState } from "react";
import Map from "./Map/Map";
import CountrySelector from "./CountrySelector/CountrySelector";

const GeographySection = () => {
  const { t, i18n } = useTranslation("home");
  const lang = i18n.language;

  const countryNames = useMemo(
    () => (t("map.countries", { returnObjects: true }) as string[]) ?? [],
    [t]
  );

  const countries = useMemo(
    () =>
      COUNTRY_IDS.map((id, i) => ({
        id,
        label: countryNames[i] ?? id,
      })),
    [countryNames]
  );

  const [selected, setSelected] = useState<CountryId>("ukraine");

  return (
    <Wrap>
      <GeographyTytle lang={lang}>
        <Trans t={t} i18nKey="map.title" components={{ 1: <span /> }} />
      </GeographyTytle>

      <div>
        <CountrySelector
          countries={countries}
          selected={selected}
          onSelect={setSelected}
          label={t("map.label")}
        />

        <Map
          // countries={countries}
          // selected={selected}
          // onSelect={setSelected}
          alt={t("map.alt", "World map with client markers")}
        />
      </div>
    </Wrap>
  );
};

export default GeographySection;
