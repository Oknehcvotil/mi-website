import { useState, useMemo } from "react";
import { useLang } from "../../../lib/hooks/useLang";
import { SUPPORTED_LANGS, type Lang } from "../../../i18n/i18n";
import { type Variants, motion } from "framer-motion";
import { LangCont, LangList } from "./LangSwitcher.styled";

const listVariants: Variants = {
  closed: { height: 40 },
  open: { height: 70 },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -6, pointerEvents: "none" },
  visible: { opacity: 1, y: 0, pointerEvents: "auto" },
};

const LABEL: Record<Lang, string> = { en: "EN", ua: "UA" };

const LangSwitcher = () => {
  const { lang, switchLang } = useLang();
  const [open, setOpen] = useState(false);

  const otherLang = useMemo<Lang>(
    () => (SUPPORTED_LANGS.find((l) => l !== lang) ?? "en") as Lang,
    [lang]
  );

  return (
    <LangCont>
      <LangList
        role="listbox"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => {
          if (!open) {
            setOpen(true);
          }
        }}
        variants={listVariants}
        initial="closed"
        animate={open ? "open" : "closed"}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        <li>
          <button
            type="button"
            aria-selected={true}
            aria-haspopup="listbox"
            aria-expanded={open}
          >
            {LABEL[lang]}
            <motion.svg
              width={9}
              height={7}
              animate={{ rotate: open ? 180 : 0 }}
            >
              <use href="/icons/sprite.svg#icon-select-arrow"></use>
            </motion.svg>
          </button>
        </li>
        <motion.li
          variants={itemVariants}
          initial="hidden"
          animate={open ? "visible" : "hidden"}
        >
          <button
            type="button"
            role="option"
            aria-selected={false}
            onClick={() => {
              switchLang(otherLang);
              setOpen(false);
            }}
          >
            {LABEL[otherLang]}
          </button>
        </motion.li>
      </LangList>
    </LangCont>
  );
};

export default LangSwitcher;
