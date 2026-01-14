import { AnimatePresence } from "framer-motion";
import { clientsLogos } from "../../../../lib/data/home.page";
import { List, ListItem } from "./ClientsList.styled";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 18 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.04 * index },
  }),
};

type ClientsListProps = {
  expanded: boolean;
  collapsedCount: number;
};

const ClientsList = ({ expanded, collapsedCount }: ClientsListProps) => {
  const visible = expanded
    ? clientsLogos
    : clientsLogos.slice(0, collapsedCount);

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <List layout>
        {visible.map((logo, i) => (
          <ListItem
            layout
            key={logo} 
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={i}
          >
            <img
              src={`/images/clients-logos/${logo}.webp`}
              srcSet={`
                /images/clients-logos/${logo}.webp 1x,
                /images/clients-logos/${logo}@2x.webp 2x,
                /images/clients-logos/${logo}@3x.webp 3x
              `}
              alt={logo}
              loading="lazy"
            />
          </ListItem>
        ))}
      </List>
    </AnimatePresence>
  );
};

export default ClientsList;
