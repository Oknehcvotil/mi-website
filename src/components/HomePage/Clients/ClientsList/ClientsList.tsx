import { AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { clientsLogos } from "../../../../lib/data/home.page";
import { List, ListItem } from "./ClientsList.styled";
import {
  itemVariants,
  layoutTransition,
  listVariants,
} from "../../../../lib/animations/home/animations.clients";

type ClientsListProps = {
  expanded: boolean;
  collapsedCount: number;
};

const ClientsList = ({ expanded, collapsedCount }: ClientsListProps) => {
  const reduce = !!useReducedMotion();
  const listRef = useRef<HTMLUListElement | null>(null);
  const isInView = useInView(listRef, { once: true, amount: 0.18 });
  const visible = expanded
    ? clientsLogos
    : clientsLogos.slice(0, collapsedCount);

  return (
    <List
      ref={listRef}
      layout
      transition={reduce ? undefined : { layout: layoutTransition }}
      variants={reduce ? undefined : listVariants}
      initial={reduce ? undefined : "hidden"}
      animate={reduce ? undefined : isInView ? "show" : "hidden"}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {visible.map(({ slug, name, href }, i) => {
          const image = (
            <img
              src={`/images/clients-logos/${slug}.webp`}
              srcSet={`
                /images/clients-logos/${slug}.webp 1x,
                /images/clients-logos/${slug}@2x.webp 2x,
                /images/clients-logos/${slug}@3x.webp 3x
              `}
              alt={name}
              loading="lazy"
            />
          );

          return (
            <ListItem
              layout
              transition={reduce ? undefined : { layout: layoutTransition }}
              key={slug}
              variants={reduce ? undefined : itemVariants}
              initial={reduce ? undefined : "hidden"}
              animate={reduce ? undefined : isInView ? "show" : "hidden"}
              exit={reduce ? undefined : "exit"}
              custom={i}
            >
              {href ? (
                <a
                  href={href}
                  aria-label={name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {image}
                </a>
              ) : (
                image
              )}
            </ListItem>
          );
        })}
      </AnimatePresence>
    </List>
  );
};

export default ClientsList;
