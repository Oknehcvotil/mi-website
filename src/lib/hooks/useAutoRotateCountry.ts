import { useCallback, useEffect, useMemo, useRef } from "react";
import type { Country, CountryId } from "../../lib/types/geo.types";

type UseAutoRotateCountryArgs = {
  countries: Country[];
  selected: CountryId;
  onSelect: (id: CountryId) => void;
  delay?: number; // интервал автосмены
  pauseAfterManual?: number; // пауза после ручного выбора
};

export const useAutoRotateCountry = ({
  countries,
  selected,
  onSelect,
  delay = 5000,
  pauseAfterManual = 7000,
}: UseAutoRotateCountryArgs) => {
  const order = useMemo(() => countries.map((c) => c.id), [countries]);

  const intervalRef = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<number | null>(null);

  const clearTimers = useCallback(() => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
    }
    if (resumeTimeoutRef.current !== null) {
      window.clearTimeout(resumeTimeoutRef.current);
    }
    intervalRef.current = null;
    resumeTimeoutRef.current = null;
  }, []);

  const startAuto = useCallback(() => {
    clearTimers();
    if (order.length <= 1) return;

    intervalRef.current = window.setInterval(() => {
      const idx = order.indexOf(selected);
      const next = order[(idx + 1 + order.length) % order.length] as CountryId;

      onSelect(next);
    }, delay);
  }, [clearTimers, delay, onSelect, order, selected]);

  
  useEffect(() => {
    startAuto();
    return clearTimers;
  }, [startAuto, clearTimers]);

  
  const onSelectSmart = useCallback(
    (id: CountryId) => {
      onSelect(id);

      clearTimers();
      resumeTimeoutRef.current = window.setTimeout(() => {
        startAuto();
      }, pauseAfterManual);
    },
    [onSelect, clearTimers, startAuto, pauseAfterManual]
  );

  return {
    onSelectSmart,
  };
};
