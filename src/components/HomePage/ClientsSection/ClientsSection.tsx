import { useSectionInView } from "../../../lib/hooks/useSectionInView";
import Clients from "../Clients/Clients";
import GeographySection from "../GeographySection/GeographySection";

const ClientsSection = () => {
  const { ref } = useSectionInView("Clients", 0.1);

  return (
    <section ref={ref} id="clients">
      <GeographySection />
      <Clients />
    </section>
  );
};

export default ClientsSection;
