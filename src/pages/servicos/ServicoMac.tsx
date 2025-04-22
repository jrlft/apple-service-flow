
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServiceDetail } from "@/components/shared/service-detail";

const macFeatures = [
  {
    title: "Reparo de Tela",
    description: "Substituição de telas quebradas ou com problemas de exibição para MacBook Pro, MacBook Air e iMac."
  },
  {
    title: "Upgrade de SSD/HD",
    description: "Aumento de capacidade de armazenamento e melhoria de desempenho com instalação de SSDs mais rápidos."
  },
  {
    title: "Upgrade de RAM",
    description: "Aumento da memória RAM para melhor desempenho em multitarefas e aplicativos exigentes."
  },
  {
    title: "Reparo de Placa Lógica",
    description: "Diagnóstico e reparo de problemas complexos na placa lógica que afetam o funcionamento do Mac."
  },
  {
    title: "Troca de Bateria",
    description: "Substituição de baterias desgastadas em MacBooks, restaurando a autonomia original do dispositivo."
  },
  {
    title: "Reparo de Teclado",
    description: "Conserto de teclados com teclas defeituosas, problemas de resposta ou danos por líquidos."
  }
];

const commonProblems = [
  "Mac não liga ou desliga inesperadamente",
  "Tela quebrada ou com problemas de exibição",
  "Bateria não carrega ou dura pouco tempo",
  "Lentidão e problemas de desempenho",
  "Problemas com teclado ou trackpad",
  "Erros no sistema operacional",
  "Ruídos estranhos (ventilador, disco rígido)",
  "Problemas de conexão Wi-Fi ou Bluetooth",
  "Danos causados por líquidos"
];

const ServicoMac = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ServiceDetail 
          title="Reparo de Mac" 
          subtitle="Serviços especializados para MacBook, iMac e Mac mini"
          description="Oferecemos serviços completos de reparo e manutenção para toda linha Mac, incluindo MacBook Pro, MacBook Air, iMac e Mac mini. Nossos técnicos são especializados em diagnosticar e resolver problemas complexos de hardware e software."
          imagePlaceholder="Imagem Mac Placeholder"
          features={macFeatures}
          commonProblems={commonProblems}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ServicoMac;
