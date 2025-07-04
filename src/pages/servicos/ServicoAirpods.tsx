import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServiceDetail } from "@/components/shared/service-detail";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicoAirpods = () => {
  const { t } = useLanguage();
  
  const airpodsFeatures = [
    {
      title: t('airpods.features.batteryReplacement.title'),
      description: t('airpods.features.batteryReplacement.description')
    },
    {
      title: t('airpods.features.connectivityRepair.title'),
      description: t('airpods.features.connectivityRepair.description')
    },
    {
      title: t('airpods.features.deepCleaning.title'),
      description: t('airpods.features.deepCleaning.description')
    },
    {
      title: t('airpods.features.audioCalibration.title'),
      description: t('airpods.features.audioCalibration.description')
    },
    {
      title: t('airpods.features.chargingCaseRepair.title'),
      description: t('airpods.features.chargingCaseRepair.description')
    },
    {
      title: t('airpods.features.microphoneProblems.title'),
      description: t('airpods.features.microphoneProblems.description')
    }
  ];

  const commonProblems = [
    t('airpods.problems.batteryIssues'),
    t('airpods.problems.pairing'),
    t('airpods.problems.audioQuality'),
    t('airpods.problems.caseNotCharging'),
    t('airpods.problems.microphone'),
    t('airpods.problems.notRecognized'),
    t('airpods.problems.audioNoise'),
    t('airpods.problems.noiseCancellation')
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ServiceDetail 
          title={t('airpods.title')}
          subtitle={t('airpods.subtitle')}
          description={t('airpods.description')}
          imagePlaceholder="Imagem AirPods Placeholder"
          image="/lovable-uploads/7ec50e96-2a6f-4dd0-9c7c-02ec0e69bf86.png"
          features={airpodsFeatures}
          commonProblems={commonProblems}
          whatsappNumber="+556536216000"
          whatsappMessage={t('airpods.whatsappMessage')}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ServicoAirpods;
