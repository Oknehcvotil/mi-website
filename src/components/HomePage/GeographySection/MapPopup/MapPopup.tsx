import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import type { CountryId, ClientLogo } from "../../../../lib/types/geo.types";
import { COUNTRY_IDS } from "../../../../lib/data/geo";
import { webpSet } from "../../../../lib/helpers/helpers";
import { ClientPopup, CountryPopup, PopupsWrapper } from "./MapPopup.styled";
import {
  popupContainerVariants,
  popupVariants,
} from "../../../../lib/animations/home/animations.map";

type MapPopupProps = {
  visible: boolean;
  x: number;
  y: number;
  countryId: CountryId;
  countryLabel?: string;
  client: ClientLogo;
  flagBase: string;
  className?: string;
  flagsDir?: string;
  clientsDir?: string;
};

const MapPopup = ({
  visible,
  x,
  y,
  countryId,
  countryLabel,
  client,
  flagBase,
  flagsDir = "/icons/flags",
  clientsDir = "/images/map-clients",
}: MapPopupProps) => {
  const { t, i18n } = useTranslation("home");

  const langClass = `lang-${i18n.language}`;
  const countryClass = `popup-${countryId}`;

  const localizedCountryLabel = useMemo(() => {
    const labels = t("map.countries", { returnObjects: true }) as unknown;
    if (Array.isArray(labels)) {
      const idx = COUNTRY_IDS.indexOf(countryId);
      if (idx !== -1 && typeof labels[idx] === "string") {
        return labels[idx] as string;
      }
    }
    return countryLabel ?? countryId;
  }, [t, countryId, countryLabel]);

  if (!visible) return null;

  const flag = webpSet(`${flagsDir}/${flagBase}`);
  const logo = webpSet(`${clientsDir}/${client.src}`);

  return (
    <PopupsWrapper
      className={`${countryClass} ${langClass}`}
      x={x}
      y={y}
      role="dialog"
      aria-label={localizedCountryLabel}
      variants={popupContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      key={`${countryId}-${x}-${y}`}
    >
      <CountryPopup
        style={{ display: "flex", alignItems: "center", gap: 8 }}
        className="popup--country"
        variants={popupVariants}
      >
        <img
          src={flag.src}
          srcSet={flag.srcSet}
          alt={`${localizedCountryLabel} flag`}
          loading="lazy"
          className="popup-flag"
        />
        <span>{localizedCountryLabel}</span>
      </CountryPopup>

      <ClientPopup variants={popupVariants}>
        <img
          src={logo.src}
          srcSet={logo.srcSet}
          alt={client.alt}
          loading="lazy"
          className="popup-client-logo"
        />
      </ClientPopup>
    </PopupsWrapper>
  );
};

export default MapPopup;
