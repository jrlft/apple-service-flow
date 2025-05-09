
import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServiceDetail } from "@/components/shared/service-detail";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { fetchPage, checkStrapiConnection } from "@/lib/strapi";

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
  const [serviceData, setServiceData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    const loadServiceData = async () => {
      try {
        setIsLoading(true);
        
        // Check if Strapi is available
        const strapiAvailable = await checkStrapiConnection();
        
        if (strapiAvailable) {
          try {
            // Try to fetch service data
            const data = await fetchPage("servico-mac");
            if (data) {
              setServiceData(data);
              setUseFallback(false);
            } else {
              setUseFallback(true);
            }
          } catch (error) {
            console.error("Error loading Mac service page:", error);
            setUseFallback(true);
          }
        } else {
          setUseFallback(true);
        }
      } catch (error) {
        console.error("Error in service data loading process:", error);
        setUseFallback(true);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadServiceData();
  }, []);

  // Use dynamic data if available, otherwise use static data
  const title = serviceData?.attributes?.title || "Reparo de Mac";
  const subtitle = serviceData?.attributes?.subtitle || "Serviços especializados para MacBook, iMac e Mac mini";
  const description = serviceData?.attributes?.description || 
    "Oferecemos serviços completos de reparo e manutenção para toda linha Mac, incluindo MacBook Pro, MacBook Air, iMac e Mac mini. Nossos técnicos são especializados em diagnosticar e resolver problemas complexos de hardware e software.";
  const imageUrl = serviceData?.attributes?.image?.data?.attributes?.url || null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {isLoading ? (
          <div className="flex items-center justify-center py-24">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
          </div>
        ) : (
          <>
            {useFallback && (
              <div className="text-center py-3 mt-24 mb-4">
                <p className="text-amber-600 bg-amber-50 py-2 px-4 rounded-md inline-block">
                  Carregando dados estáticos. A conexão com o Strapi não está disponível.
                </p>
              </div>
            )}
            
            <ServiceDetail 
              title={title}
              subtitle={subtitle}
              description={description}
              imagePlaceholder="Imagem Mac Placeholder"
              image={imageUrl}
              features={serviceData?.attributes?.features || macFeatures}
              commonProblems={serviceData?.attributes?.commonProblems || commonProblems}
              whatsappNumber="+556536216000"
              whatsappMessage="Olá, gostaria de solicitar um orçamento para reparo do meu Mac."
            />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ServicoMac;
