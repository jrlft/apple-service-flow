
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServiceDetail } from "@/components/shared/service-detail";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicoMac = () => {
  const { t } = useLanguage();
  
  const macFeatures = [
    {
      title: t('mac.features.screenRepair.title'),
      description: t('mac.features.screenRepair.description')
    },
    {
      title: t('mac.features.ssdUpgrade.title'),
      description: t('mac.features.ssdUpgrade.description')
    },
    {
      title: t('mac.features.ramUpgrade.title'),
      description: t('mac.features.ramUpgrade.description')
    },
    {
      title: t('mac.features.logicBoardRepair.title'),
      description: t('mac.features.logicBoardRepair.description')
    },
    {
      title: t('mac.features.batteryReplacement.title'),
      description: t('mac.features.batteryReplacement.description')
    },
    {
      title: t('mac.features.keyboardRepair.title'),
      description: t('mac.features.keyboardRepair.description')
    }
  ];

  const commonProblems = [
    t('mac.problems.wontTurnOn'),
    t('mac.problems.brokenScreen'),
    t('mac.problems.battery'),
    t('mac.problems.slowPerformance'),
    t('mac.problems.keyboardTrackpad'),
    t('mac.problems.osErrors'),
    t('mac.problems.strangeNoises'),
    t('mac.problems.connectivity'),
    t('mac.problems.liquidDamage')
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ServiceDetail 
          title={t('mac.title')}
          subtitle={t('mac.subtitle')}
          description={t('mac.description')}
          imagePlaceholder="Imagem Mac Placeholder"
          image="/lovable-uploads/7ec50e96-2a6f-4dd0-9c7c-02ec0e69bf86.png"
          features={macFeatures}
          commonProblems={commonProblems}
          whatsappNumber="+556536216000"
          whatsappMessage={t('mac.whatsappMessage')}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ServicoMac;
