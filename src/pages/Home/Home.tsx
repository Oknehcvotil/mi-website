import ContactSection from "../../components/ContactSection/ContactSection";
import SectionNav from "../../components/SectionNav/SectionNav";
import AboutUsSection from "../../components/HomePage/AboutUsSection/AboutUsSection";
import ClientsSection from "../../components/HomePage/ClientsSection/ClientsSection";
import ServicesSection from "../../components/HomePage/ServicesSection/ServicesSection";

function Home() {
  return (
    <>
      <AboutUsSection />
      <ClientsSection />
      <ServicesSection />
      <ContactSection />
      <SectionNav />
    </>
  );
}

export default Home;
