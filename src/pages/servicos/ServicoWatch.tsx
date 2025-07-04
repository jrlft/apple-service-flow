
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServiceDetail } from "@/components/shared/service-detail";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicoWatch = () => {
  const { t } = useLanguage();
  
  const watchFeatures = [
    {
      title: t('watch.features.screenReplacement.title'),
      description: t('watch.features.screenReplacement.description')
    },
    {
      title: t('watch.features.batteryReplacement.title'),
      description: t('watch.features.batteryReplacement.description')
    },
    {
      title: t('watch.features.buttonRepair.title'),
      description: t('watch.features.buttonRepair.description')
    },
    {
      title: t('watch.features.sensorProblems.title'),
      description: t('watch.features.sensorProblems.description')
    },
    {
      title: t('watch.features.sealReplacement.title'),
      description: t('watch.features.sealReplacement.description')
    },
    {
      title: t('watch.features.softwareUpdate.title'),
      description: t('watch.features.softwareUpdate.description')
    }
  ];

  const commonProblems = [
    t('watch.problems.brokenScreen'),
    t('watch.problems.batteryDrain'),
    t('watch.problems.wontTurnOn'),
    t('watch.problems.buttons'),
    t('watch.problems.sensors'),
    t('watch.problems.pairing'),
    t('watch.problems.waterResistance'),
    t('watch.problems.crashes')
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ServiceDetail 
          title={t('watch.title')}
          subtitle={t('watch.subtitle')}
          description={t('watch.description')}
          imagePlaceholder="Imagem Apple Watch Placeholder"
          image="/lovable-uploads/7ec50e96-2a6f-4dd0-9c7c-02ec0e69bf86.png"
          features={watchFeatures}
          commonProblems={commonProblems}
          whatsappNumber="+556536216000"
          whatsappMessage={t('watch.whatsappMessage')}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ServicoWatch;
