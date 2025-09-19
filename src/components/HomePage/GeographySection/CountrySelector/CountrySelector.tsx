import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import type { CountryId } from "../../../../lib/types/home.types";
import {
  SelectorCont,
  SelectorTitile,
  SelectorList,
  ListCont,
  ActiveBtn,
  SelectBtn,
} from "./CountrySelector.styled";

type Country = { id: CountryId; label: string };

interface CountrySelectorProps {
  countries: Country[];
  selected: CountryId;
  onSelect: (id: CountryId) => void;
  label: string;
}


const itemVariants: Variants = {
  hidden: { opacity: 0, y: -6, pointerEvents: "none" },
  visible: { opacity: 1, y: 0, pointerEvents: "auto" },
  // мгновенно исчезают при закрытии
  exit: { opacity: 0, y: -6, transition: { duration: 0 } },
};

const easeIn = [0.22, 1, 0.36, 1] as const;

const CountrySelector = ({
  countries,
  selected,
  onSelect,
  label,
}: CountrySelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const active = countries.find((c) => c.id === selected);
  const others = countries.filter((c) => c.id !== selected);

  const toggleOpen = () => setIsOpen((v) => !v);
  const close = () => setIsOpen(false);

  const handleSelect = (id: CountryId) => {
    onSelect(id);
    close();
  };

  // клик вне — закрыть
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) close();
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // клавиатура
  const onActiveKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleOpen();
    } else if (e.key === "Escape") {
      close();
    }
  };

  return (
    <SelectorCont ref={rootRef}>
      <SelectorTitile>{label}</SelectorTitile>

      <ListCont>
        {/* анимируем высоту самого списка */}
        <SelectorList
          id="country-options"
          aria-label={label}
          aria-expanded={isOpen}
          initial={false}
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
                {active.label}
                <div className="arrow-cont">
                  <motion.svg
                    width={7}
                    height={5}
                    aria-hidden
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.18, ease: easeIn }}
                  >
                    <use href="/icons/sprite.svg#icon-select-arrow" />
                  </motion.svg>
                </div>
              </ActiveBtn>
            </li>
          )}

          {/* пункты-опции рендерим только когда открыт */}
          <AnimatePresence initial={false}>
            {isOpen &&
              others.map((c) => (
                <motion.li
                  key={c.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.18, ease: easeIn }}
                >
                  <SelectBtn type="button" onClick={() => handleSelect(c.id)}>
                    {c.label}
                  </SelectBtn>
                </motion.li>
              ))}
          </AnimatePresence>
        </SelectorList>
      </ListCont>
    </SelectorCont>
  );
};

export default CountrySelector;
