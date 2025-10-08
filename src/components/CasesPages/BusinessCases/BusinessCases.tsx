import AppSlider from "../../AppSlider/AppSlider";
import CaseInfoCard from "../../CaseInfoCard/CaseInfoCard";
import CasesMessage from "../../CasesMessage/CasesMessage";

const BusinessCases = () => {
  return (
    <section>
      <AppSlider>
        <CasesMessage
          translationNs="casesBusiness"
          imgSrc="/images/cases-pages/business/kitrum-case"
          titleKey="cases.kitrum.title"
          textKey="cases.kitrum.items"
        />
        <CaseInfoCard
          logos={[
            { src: "/images/clients-logos/kitrum", width: 170, height: 50 },
          ]}
          keyPrefix="cases.kitrum.review"
                  translationNs="casesBusiness"
                  
                  className="cases--business-psyhology"
        />
      </AppSlider>
    </section>
  );
};

export default BusinessCases;
