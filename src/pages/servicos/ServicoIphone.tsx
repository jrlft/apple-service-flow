
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServiceDetail } from "@/components/shared/service-detail";
import { useLanguage } from "@/contexts/LanguageContext";

const iPhoneFeatures = [
  {
    title: "Substituição de Tela",
    description: "Substituição de telas quebradas ou com defeito utilizando peças originais Apple para manter a qualidade e funcionalidade original."
  },
  {
    title: "Troca de Bateria",
    description: "Substituição de baterias desgastadas que não mantêm mais a carga, utilizando baterias originais para máxima duração."
  },
  {
    title: "Reparo de Câmeras",
    description: "Conserto de câmeras com defeito, problemas de foco ou que não ligam, restaurando a função fotográfica completa."
  },
  {
    title: "Problemas de Áudio",
    description: "Reparo de alto-falantes, microfones e receptores de áudio para ligações e reprodução de mídia com qualidade."
  },
  {
    title: "Reparo de Placa",
    description: "Diagnóstico e reparo de problemas na placa lógica do iPhone, incluindo problemas de conectividade e energia."
  },
  {
    title: "Atualização de Software",
    description: "Resolução de problemas de software, atualizações de sistema e restauração de dispositivos travados ou com falhas."
  }
];

const commonProblems = [
  "Tela quebrada ou rachada",
  "Bateria não carrega ou dura pouco",
  "iPhone não liga ou reinicia sozinho",
  "Problemas de conectividade Wi-Fi ou celular",
  "Câmera não funciona ou está com qualidade reduzida",
  "Botões físicos não respondem",
  "iPhone não carrega ou não reconhece o carregador",
  "Alto-falantes ou microfone com defeito"
];

const ServicoIphone = () => {
  const { t } = useLanguage();
  
  const iPhoneFeatures = [
    {
      title: t('iphone.features.screenReplacement.title'),
      description: t('iphone.features.screenReplacement.description')
    },
    {
      title: t('iphone.features.batteryReplacement.title'),
      description: t('iphone.features.batteryReplacement.description')
    },
    {
      title: t('iphone.features.cameraRepair.title'),
      description: t('iphone.features.cameraRepair.description')
    },
    {
      title: t('iphone.features.audioProblems.title'),
      description: t('iphone.features.audioProblems.description')
    },
    {
      title: t('iphone.features.boardRepair.title'),
      description: t('iphone.features.boardRepair.description')
    },
    {
      title: t('iphone.features.softwareUpdate.title'),
      description: t('iphone.features.softwareUpdate.description')
    }
  ];

  const commonProblems = [
    t('iphone.problems.brokenScreen'),
    t('iphone.problems.batteryIssues'),
    t('iphone.problems.wontTurnOn'),
    t('iphone.problems.connectivity'),
    t('iphone.problems.camera'),
    t('iphone.problems.buttons'),
    t('iphone.problems.charging'),
    t('iphone.problems.audio')
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ServiceDetail 
          title={t('iphone.title')}
          subtitle={t('iphone.subtitle')}
          description={t('iphone.description')}
          imagePlaceholder="Imagem iPhone Placeholder"
          image="/lovable-uploads/7ec50e96-2a6f-4dd0-9c7c-02ec0e69bf86.png"
          features={iPhoneFeatures}
          commonProblems={commonProblems}
          whatsappNumber="+556536216000"
          whatsappMessage={t('iphone.whatsappMessage')}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ServicoIphone;
