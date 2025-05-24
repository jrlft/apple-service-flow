
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServiceDetail } from "@/components/shared/service-detail";

const watchFeatures = [
  {
    title: "Substituição de Tela",
    description: "Reparo de telas quebradas ou arranhadas para todos os modelos de Apple Watch, restaurando a aparência original."
  },
  {
    title: "Troca de Bateria",
    description: "Substituição de baterias desgastadas que não mantêm mais a carga, restaurando a autonomia do seu Apple Watch."
  },
  {
    title: "Reparo de Botões",
    description: "Conserto de coroa digital e botões laterais que não respondem corretamente ao toque ou pressão."
  },
  {
    title: "Problemas de Sensores",
    description: "Diagnóstico e reparo de sensores de frequência cardíaca, acelerômetro e outros sensores específicos."
  },
  {
    title: "Substituição de Vedações",
    description: "Restauração da resistência à água com a substituição de vedações e borrachas de proteção."
  },
  {
    title: "Atualização de Software",
    description: "Resolução de problemas de software, restauração do sistema e correção de bugs específicos."
  }
];

const commonProblems = [
  "Tela quebrada ou arranhada",
  "Bateria descarrega rapidamente",
  "Apple Watch não liga ou não carrega",
  "Botões não respondem corretamente",
  "Sensores de saúde não funcionam adequadamente",
  "Problemas de pareamento com iPhone",
  "Perda da resistência à água",
  "Travamentos ou reinicializações inesperadas"
];

const ServicoWatch = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ServiceDetail 
          title="Reparo de Apple Watch"
          subtitle="Serviços especializados para todos os modelos de Apple Watch"
          description="Nosso centro autorizado oferece reparos completos para todos os modelos de Apple Watch, desde a Série 1 até os modelos mais recentes. Utilizamos peças originais e técnicos certificados para garantir o funcionamento perfeito do seu dispositivo."
          imagePlaceholder="Imagem Apple Watch Placeholder"
          image="/lovable-uploads/7ec50e96-2a6f-4dd0-9c7c-02ec0e69bf86.png"
          features={watchFeatures}
          commonProblems={commonProblems}
          whatsappNumber="+556536216000"
          whatsappMessage="Olá, gostaria de solicitar um orçamento para reparo do meu Apple Watch."
        />
      </main>
      <Footer />
    </div>
  );
};

export default ServicoWatch;
