
import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServiceDetail } from "@/components/shared/service-detail";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { fetchPage, checkStrapiConnection } from "@/lib/strapi";

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
            const data = await fetchPage("servico-ipad");
            if (data) {
              setServiceData(data);
              setUseFallback(false);
            } else {
              setUseFallback(true);
            }
          } catch (error) {
            console.error("Error loading iPad service page:", error);
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
  const title = serviceData?.attributes?.title || "Reparo de iPad";
  const subtitle = serviceData?.attributes?.subtitle || "Serviços especializados para toda linha de iPad";
  const description = serviceData?.attributes?.description || 
    "Nosso centro de serviço oferece reparos completos para todos os modelos de iPad, incluindo iPad Pro, iPad Air, iPad mini e iPad tradicional. Utilizamos peças originais e técnicos certificados para garantir reparos de alta qualidade.";
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
              imagePlaceholder="Imagem iPad Placeholder"
              image={imageUrl}
              features={serviceData?.attributes?.features || iPadFeatures}
              commonProblems={serviceData?.attributes?.commonProblems || commonProblems}
              whatsappNumber="+556536216000"
              whatsappMessage="Olá, gostaria de solicitar um orçamento para reparo do meu iPad."
            />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ServicoIpad;
