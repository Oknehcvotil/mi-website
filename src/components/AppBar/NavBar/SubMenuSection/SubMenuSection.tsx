import { motion, AnimatePresence } from "framer-motion";
import { SubMenuList, SubLink, SubMenuTitle, SubMenuItem } from "./SubMenuSection.styled";
import { type Section } from "../../../../lib/types/nav.types";
import { useMediaQuery } from "../../../../lib/hooks/useMediaQuery";

type SubMenuSectionProps = {
  section: Section;
  currentLang: string;
  isOpen: boolean;
  setOpen: (next: boolean) => void;
  onSelect?: () => void;
  t: (key: string) => string;
  pathname: string;
};

const listVariants = {
  closed: {
    opacity: 0,
    scaleY: 0.85,
    transition: { when: "afterChildren", staggerDirection: -1 },
  },
  open: {
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 0.12,
      when: "beforeChildren",
      staggerChildren: 0.03,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, y: -6 },
  open: { opacity: 1, y: 0, transition: { duration: 0.14 } },
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
      onMouseLeave={() => setOpen(false)}
    >
      <SubMenuTitle
        active={active}
        width={section.width}
        justify={section.justify}
        onMouseEnter={() => setOpen(true)}
        onClick={() => !isOpen && setOpen(true)}
        onKeyDown={onKeyDown}
      >
        {t(section.titleKey)}
        <motion.svg
          width={isDesk ? 15 : 9}
          height={isDesk ? 9 : 7}
          aria-hidden
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.18 }}
        >
          <use href="/icons/sprite.svg#icon-select-arrow" />
        </motion.svg>
      </SubMenuTitle>

      <AnimatePresence initial={false}>
        {isOpen && (
          <SubMenuList
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={listVariants}
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
