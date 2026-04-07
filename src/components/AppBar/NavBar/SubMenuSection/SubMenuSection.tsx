import { motion, AnimatePresence } from "framer-motion";
import {
  SubMenuList,
  SubLink,
  SubMenuTitle,
  SubMenuItem,
} from "./SubMenuSection.styled";
import { type Section } from "../../../../lib/types/nav.types";
import { useMediaQuery } from "../../../../lib/hooks/useMediaQuery";
import { useReducedMotion, type Variants } from "framer-motion";

type SubMenuSectionProps = {
  section: Section;
  currentLang: string;
  isOpen: boolean;
  setOpen: (next: boolean) => void;
  onSelect?: () => void;
  t: (key: string) => string;
  pathname: string;
};

const listVariants: Variants = {
  closed: {
    opacity: 0,
    y: -6,
    scale: 0.985,
    filter: "blur(4px)",
    transition: {
      duration: 0.1,
      ease: [0.4, 0, 0.2, 1],
      when: "afterChildren",
      staggerChildren: 0.012,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.12,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.016,
    },
  },
};

const itemVariants: Variants = {
  closed: {
    opacity: 0,
    y: -4,
    transition: { duration: 0.08, ease: [0.4, 0, 0.2, 1] },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.1, ease: [0.22, 1, 0.36, 1] },
  },
};

const SubMenuSection = ({
  section,
  currentLang,
  isOpen,
  setOpen,
  onSelect,
  t,
  pathname,
}: SubMenuSectionProps) => {
  const active = pathname.startsWith(`/${currentLang}${section.basePath}`);
  const isDesk = useMediaQuery("(min-width: 1920px)");
  const reduce = useReducedMotion();

  const onKeyDown: React.KeyboardEventHandler = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(!isOpen);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };
  return (
    <SubMenuItem
      role="listbox"
      aria-expanded={isOpen}
      aria-label={t(section.titleKey)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <SubMenuTitle
        active={active}
        width={section.width}
        justify={section.justify}
        onClick={() => !isOpen && setOpen(true)}
        onKeyDown={onKeyDown}
      >
        {t(section.titleKey)}
        <motion.svg
          width={isDesk ? 15 : 9}
          height={isDesk ? 9 : 7}
          aria-hidden
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={
            reduce
              ? { duration: 0 }
              : { type: "spring", stiffness: 460, damping: 30 }
          }
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
            variants={reduce ? undefined : listVariants}
          >
            {section.items.map((it, idx) => (
              <motion.li key={it.to} custom={idx} variants={itemVariants}>
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
