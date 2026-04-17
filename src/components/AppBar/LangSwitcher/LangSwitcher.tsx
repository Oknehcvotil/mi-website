import { useState } from "react";
import { useLang } from "../../../lib/hooks/useLang";
import { SUPPORTED_LANGS, type Lang } from "../../../i18n/i18n";
import { motion } from "framer-motion";
import { LangCont, LangList } from "./LangSwitcher.styled";
import { useMediaQuery } from "../../../lib/hooks/useMediaQuery";
import {
  getLangListVariants,
  langItemVariants,
  langListTransition,
} from "../../../lib/animations/animations.appBar";

const LABEL: Record<Lang, string> = { en: "EN", ua: "UA" };

const getOtherLang = (currentLang: Lang): Lang =>
  SUPPORTED_LANGS.find((lang) => lang !== currentLang) ?? "en";

const LangSwitcher = () => {
  const { lang, switchLang } = useLang();
  const [open, setOpen] = useState(false);
  const isWideDesktop = useMediaQuery("(min-width: 1920px)");
  const otherLang = getOtherLang(lang);
  const arrowWidth = isWideDesktop ? 12 : 9;
  const arrowHeight = isWideDesktop ? 8 : 7;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClick = () => {
    if (!open) {
      setOpen(true);
    }
  };
  const handleSwitchLang = () => {
    switchLang(otherLang);
    setOpen(false);
  };

  return (
    <LangCont>
      <LangList
        $open={open}
        role="listbox"
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        onClick={handleClick}
        variants={getLangListVariants(isWideDesktop)}
        initial="closed"
        animate={open ? "open" : "closed"}
        transition={langListTransition}
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
              width={arrowWidth}
              height={arrowHeight}
              animate={{ rotate: open ? 180 : 0 }}
            >
              <use href="/icons/sprite.svg#icon-select-arrow"></use>
            </motion.svg>
          </button>
        </li>
        <motion.li
          variants={langItemVariants}
          initial="hidden"
          animate={open ? "visible" : "hidden"}
        >
          <button
            type="button"
            role="option"
            aria-selected={false}
            onClick={handleSwitchLang}
          >
            {LABEL[otherLang]}
          </button>
        </motion.li>
      </LangList>
    </LangCont>
  );
};

export default LangSwitcher;
