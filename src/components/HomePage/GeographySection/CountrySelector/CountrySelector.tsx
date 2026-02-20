import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import type { Country, CountryId } from "../../../../lib/types/geo.types";

import {
  SelectorCont,
  SelectorTitile,
  SelectorList,
  ListCont,
  ActiveBtn,
  SelectBtn,
  TabList,
  TabBtn,
  CountriesTitle,
} from "./CountrySelector.styled";
import { useMediaQuery } from "../../../../lib/hooks/useMediaQuery";
import i18n from "../../../../i18n/i18n";

type CountrySelectorProps = {
  countries: Country[];
  selected: CountryId;
  onSelect: (id: CountryId) => void;
};

const easeIn: [number, number, number, number] = [0.22, 1, 0.36, 1];

const CountrySelector = ({
  countries,
  selected,
  onSelect,
}: CountrySelectorProps) => {
  const { t } = useTranslation("home");
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const countryLabels = t("map.countries", { returnObjects: true }) as string[];

  const isTablet = useMediaQuery("(min-width: 768px)");

  const selectedSafe: CountryId = useMemo(() => {
    const hasSelected = countries.some((c) => c.id === selected);
    return hasSelected ? selected : "ukraine";
  }, [countries, selected]);

  const active = countries.find((c) => c.id === selectedSafe) ?? {
    id: "ukraine" as CountryId,
  };
  const others = countries.filter((c) => c.id !== selectedSafe);

  const toggleOpen = () => setIsOpen((v) => !v);
  const close = () => setIsOpen(false);

  const handleSelect = (id: CountryId) => {
    onSelect(id);
    close();
  };

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) close();
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const onActiveKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleOpen();
    } else if (e.key === "Escape") {
      close();
    }
  };

  return (
    <SelectorCont ref={rootRef} className={`selector-cont--${i18n.language}`}>
      {isTablet ? (
        <>
          <CountriesTitle className={`countries-title--${i18n.language}`}>
            {t("map.countriesTitle")}
          </CountriesTitle>
          <span className="rail" aria-hidden />
          <TabList>
            {countries.map((c) => (
              <li key={c.id}>
                <TabBtn
                  type="button"
                  data-active={c.id === selected}
                  onClick={() => onSelect(c.id)}
                >
                  {countryLabels[countries.findIndex((cc) => cc.id === c.id)]}
                </TabBtn>
              </li>
            ))}
          </TabList>
        </>
      ) : (
        <>
          <SelectorTitile>{t("map.label")}</SelectorTitile>

          <ListCont>
            <SelectorList
              id="country-options"
              aria-label={t("map.label")}
              aria-expanded={isOpen}
              isOpen={isOpen}
              onMouseLeave={close}
            >
              {active && (
                <li key={active.id}>
                  <ActiveBtn
                    type="button"
                    aria-pressed
                    aria-controls="country-options"
                    aria-expanded={isOpen}
                    isOpen={isOpen}
                    onClick={toggleOpen}
                    onKeyDown={onActiveKeyDown}
                  >
                    {
                      countryLabels[
                        countries.findIndex((c) => c.id === active.id)
                      ]
                    }
                    <div className="arrow-cont">
                      <motion.svg
                        width={7}
                        height={5}
                        aria-hidden
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.14, ease: easeIn }}
                      >
                        <use href="/icons/sprite.svg#icon-select-arrow" />
                      </motion.svg>
                    </div>
                  </ActiveBtn>
                </li>
              )}

              <AnimatePresence initial={false}>
                {isOpen &&
                  others.map((c) => (
                    <motion.li key={c.id}>
                      <SelectBtn
                        type="button"
                        onClick={() => handleSelect(c.id)}
                      >
                        {
                          countryLabels[
                            countries.findIndex((cc) => cc.id === c.id)
                          ]
                        }
                      </SelectBtn>
                    </motion.li>
                  ))}
              </AnimatePresence>
            </SelectorList>
          </ListCont>
        </>
      )}
    </SelectorCont>
  );
};

export default CountrySelector;
