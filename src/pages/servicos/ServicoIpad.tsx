
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServiceDetail } from "@/components/shared/service-detail";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicoIpad = () => {
  const { t } = useLanguage();
  
  const iPadFeatures = [
    {
      title: t('ipad.features.screenReplacement.title'),
      description: t('ipad.features.screenReplacement.description')
    },
    {
      title: t('ipad.features.batteryReplacement.title'),
      description: t('ipad.features.batteryReplacement.description')
    },
    {
      title: t('ipad.features.connectorRepair.title'),
      description: t('ipad.features.connectorRepair.description')
    },
    {
      title: t('ipad.features.wifiProblems.title'),
      description: t('ipad.features.wifiProblems.description')
    },
    {
      title: t('ipad.features.buttonRepair.title'),
      description: t('ipad.features.buttonRepair.description')
    },
    {
      title: t('ipad.features.softwareProblems.title'),
      description: t('ipad.features.softwareProblems.description')
    }
  ];

  const commonProblems = [
    t('ipad.problems.brokenScreen'),
    t('ipad.problems.wontTurnOn'),
    t('ipad.problems.batteryDrain'),
    t('ipad.problems.charging'),
    t('ipad.problems.connectivity'),
    t('ipad.problems.freezing'),
    t('ipad.problems.buttons'),
    t('ipad.problems.camera')
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ServiceDetail 
          title={t('ipad.title')}
          subtitle={t('ipad.subtitle')}
          description={t('ipad.description')}
          imagePlaceholder="Imagem iPad Placeholder"
          image="/lovable-uploads/7ec50e96-2a6f-4dd0-9c7c-02ec0e69bf86.png"
          features={iPadFeatures}
          commonProblems={commonProblems}
          whatsappNumber="+556536216000"
          whatsappMessage={t('ipad.whatsappMessage')}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ServicoIpad;
