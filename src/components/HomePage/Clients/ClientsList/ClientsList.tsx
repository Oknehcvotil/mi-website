import { clientsLogos } from "../../../../lib/data/home.page";
import { List, ListItem } from "./ClientsList.styled";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const ClientsList = () => {
  return (
    <List>
      {clientsLogos.map((logo, i) => (
        <ListItem
          key={i}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
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
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ClientsList;
