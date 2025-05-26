import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServiceDetail } from "@/components/shared/service-detail";

const airpodsFeatures = [
  {
    title: "Substituição de Bateria",
    description: "Troca de baterias desgastadas que não mantêm mais a carga adequada nos AirPods."
  },
  {
    title: "Reparo de Conectividade",
    description: "Solução para problemas de pareamento e conexão Bluetooth com dispositivos Apple."
  },
  {
    title: "Limpeza Profunda",
    description: "Limpeza interna e externa especializada para remover sujeira e melhorar a qualidade do áudio."
  },
  {
    title: "Calibração de Áudio",
    description: "Ajuste e calibração dos drivers de áudio para restaurar a qualidade sonora original."
  },
  {
    title: "Reparo de Case de Carregamento",
    description: "Conserto do estojo de carregamento, incluindo problemas de carga e conectores."
  },
  {
    title: "Problemas de Microfone",
    description: "Diagnóstico e reparo de problemas de microfone que afetam chamadas e comandos de voz."
  }
];

const commonProblems = [
  "Bateria descarrega rapidamente",
  "AirPods não pareiam com dispositivos",
  "Qualidade de áudio reduzida ou distorcida",
  "Case não carrega os AirPods",
  "Problemas de microfone em chamadas",
  "AirPods não são reconhecidos pelo iPhone",
  "Ruídos ou chiados durante reprodução",
  "Problemas com cancelamento de ruído (AirPods Pro)"
];

const ServicoAirpods = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ServiceDetail 
          title="Reparo de AirPods"
          subtitle="Serviços especializados para todos os modelos de AirPods"
          description="Oferecemos reparos completos para todos os modelos de AirPods, incluindo AirPods Pro, AirPods Max e AirPods tradicionais. Nossos técnicos especializados utilizam equipamentos de precisão para garantir reparos de alta qualidade."
          imagePlaceholder="Imagem AirPods Placeholder"
          image="/lovable-uploads/7ec50e96-2a6f-4dd0-9c7c-02ec0e69bf86.png"
          features={airpodsFeatures}
          commonProblems={commonProblems}
          whatsappNumber="+556536216000"
          whatsappMessage="Olá, gostaria de solicitar um orçamento para reparo dos meus AirPods."
        />
      </main>
      <Footer />
    </div>
  );
};

export default ServicoAirpods;
