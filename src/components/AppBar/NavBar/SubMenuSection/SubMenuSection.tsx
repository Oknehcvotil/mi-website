import type { KeyboardEventHandler } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  SubMenuList,
  SubLink,
  SubMenuTitle,
  SubMenuItem,
} from "./SubMenuSection.styled";
import { type Section } from "../../../../lib/types/nav.types";
import { useMediaQuery } from "../../../../lib/hooks/useMediaQuery";
import {
  subMenuArrowTransition,
  subMenuItemVariants,
  subMenuListVariants,
} from "../../../../lib/animations/animations.appBar";

type SubMenuSectionProps = {
  section: Section;
  currentLang: string;
  isOpen: boolean;
  setOpen: (next: boolean) => void;
  onSelect?: () => void;
  t: (key: string) => string;
  pathname: string;
};

const getArrowSize = (isWideDesktop: boolean) => ({
  width: isWideDesktop ? 15 : 9,
  height: isWideDesktop ? 9 : 7,
});

const isActiveSection = (
  pathname: string,
  currentLang: string,
  basePath: string,
) => pathname.startsWith(`/${currentLang}${basePath}`);

const SubMenuSection = ({
  section,
  currentLang,
  isOpen,
  setOpen,
  onSelect,
  t,
  pathname,
}: SubMenuSectionProps) => {
  const active = isActiveSection(pathname, currentLang, section.basePath);
  const isWideDesktop = useMediaQuery("(min-width: 1920px)");
  const isLaptopUp = useMediaQuery("(min-width: 1024px)");
  const reduce = useReducedMotion();
  const arrowSize = getArrowSize(isWideDesktop);

  const handleMouseEnter = () => {
    if (isLaptopUp) {
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (isLaptopUp) {
      setOpen(false);
    }
  };

  const handleClick = () => {
    if (!isLaptopUp) {
      setOpen(!isOpen);
      return;
    }

    if (!isOpen) {
      setOpen(true);
    }
  };

  const handleKeyDown: KeyboardEventHandler = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();

      if (!isLaptopUp) {
        setOpen(!isOpen);
      } else {
        setOpen(!isOpen);
      }
    } else if (e.key === "Escape" && isLaptopUp) {
      setOpen(false);
    }
  };

  return (
    <SubMenuItem
      role="listbox"
      aria-expanded={isOpen}
      aria-label={t(section.titleKey)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SubMenuTitle
        active={active}
        width={section.width}
        justify={section.justify}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        {t(section.titleKey)}
        <motion.svg
          width={arrowSize.width}
          height={arrowSize.height}
          aria-hidden
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={reduce ? { duration: 0 } : subMenuArrowTransition}
        >
          <use href="/icons/sprite.svg#icon-select-arrow" />
        </motion.svg>
      </SubMenuTitle>

      <AnimatePresence initial={false}>
        {isOpen && (
          <SubMenuList
            initial={reduce ? false : "closed"}
            animate="open"
            exit="closed"
            variants={reduce ? undefined : subMenuListVariants}
          >
            {section.items.map((it, idx) => (
              <motion.li key={it.to} custom={idx} variants={subMenuItemVariants}>
                <SubLink to={`/${currentLang}${it.to}`} onClick={onSelect}>
                  {t(it.labelKey)}
                </SubLink>
              </motion.li>
            ))}
          </SubMenuList>
        )}
      </AnimatePresence>
    </SubMenuItem>
  );
};

export default SubMenuSection;
