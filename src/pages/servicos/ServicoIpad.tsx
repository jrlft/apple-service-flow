
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServiceDetail } from "@/components/shared/service-detail";

const iPadFeatures = [
  {
    title: "Substituição de Tela",
    description: "Reparo de telas quebradas, rachadas ou com problemas de touch usando peças originais para todos os modelos de iPad."
  },
  {
    title: "Troca de Bateria",
    description: "Substituição de baterias desgastadas ou com problemas de carga, restaurando a autonomia original do seu iPad."
  },
  {
    title: "Reparo de Conector",
    description: "Conserto de conectores de carregamento danificados ou com mau contato, garantindo carregamento adequado."
  },
  {
    title: "Problemas de Wi-Fi",
    description: "Diagnóstico e reparo de problemas de conectividade Wi-Fi e Bluetooth que afetam o desempenho do iPad."
  },
  {
    title: "Reparo de Botões",
    description: "Conserto de botões físicos como Power, Home e controles de volume que não respondem corretamente."
  },
  {
    title: "Problemas de Software",
    description: "Resolução de travamentos, lentidão e outros problemas de software através de diagnóstico especializado."
  }
];

const commonProblems = [
  "Tela quebrada ou com problemas de toque",
  "iPad não liga ou desliga sozinho",
  "Bateria descarrega rapidamente",
  "Problemas de carregamento",
  "Wi-Fi ou Bluetooth não funcionam corretamente",
  "iPad travando ou com desempenho lento",
  "Botões físicos não respondem",
  "Problemas com câmeras frontal ou traseira"
];

const ServicoIpad = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ServiceDetail 
          title="Reparo de iPad" 
          subtitle="Serviços especializados para toda linha de iPad"
          description="Nosso centro de serviço oferece reparos completos para todos os modelos de iPad, incluindo iPad Pro, iPad Air, iPad mini e iPad tradicional. Utilizamos peças originais e técnicos certificados para garantir reparos de alta qualidade."
          imagePlaceholder="Imagem iPad Placeholder"
          features={iPadFeatures}
          commonProblems={commonProblems}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ServicoIpad;
