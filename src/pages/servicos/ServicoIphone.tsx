
import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServiceDetail } from "@/components/shared/service-detail";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { fetchPage, checkStrapiConnection } from "@/lib/strapi";

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
            const data = await fetchPage("servico-iphone");
            if (data) {
              setServiceData(data);
              setUseFallback(false);
            } else {
              setUseFallback(true);
            }
          } catch (error) {
            console.error("Error loading iPhone service page:", error);
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
  const title = serviceData?.attributes?.title || "Reparo de iPhone";
  const subtitle = serviceData?.attributes?.subtitle || "Serviços especializados para todos os modelos de iPhone";
  const description = serviceData?.attributes?.description || 
    "Oferecemos serviços completos de reparo para todos os modelos de iPhone, desde o iPhone SE até os modelos mais recentes. Nossos técnicos certificados utilizam peças originais Apple para garantir que seu dispositivo volte a funcionar como novo.";
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
              imagePlaceholder="Imagem iPhone Placeholder"
              image={imageUrl}
              features={serviceData?.attributes?.features || iPhoneFeatures}
              commonProblems={serviceData?.attributes?.commonProblems || commonProblems}
              whatsappNumber="+556536216000"
              whatsappMessage="Olá, gostaria de solicitar um orçamento para reparo do meu iPhone."
            />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ServicoIphone;
