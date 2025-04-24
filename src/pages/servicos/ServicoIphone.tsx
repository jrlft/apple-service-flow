import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServiceDetail } from "@/components/shared/service-detail";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

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
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ServiceDetail 
          title="Reparo de iPhone" 
          subtitle="Serviços especializados para todos os modelos de iPhone"
          description="Oferecemos serviços completos de reparo para todos os modelos de iPhone, desde o iPhone SE até os modelos mais recentes. Nossos técnicos certificados utilizam peças originais Apple para garantir que seu dispositivo volte a funcionar como novo."
          imagePlaceholder="Imagem iPhone Placeholder"
          features={iPhoneFeatures}
          commonProblems={commonProblems}
          whatsappNumber="+556536216000"
          whatsappMessage="Olá, gostaria de solicitar um orçamento para reparo do meu iPhone."
        />
      </main>
      <Footer />
    </div>
  );
};

export default ServicoIphone;
