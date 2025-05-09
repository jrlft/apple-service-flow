
import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServiceDetail } from "@/components/shared/service-detail";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { fetchPage, checkStrapiConnection } from "@/lib/strapi";

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
            const data = await fetchPage("servico-watch");
            if (data) {
              setServiceData(data);
              setUseFallback(false);
            } else {
              setUseFallback(true);
            }
          } catch (error) {
            console.error("Error loading Apple Watch service page:", error);
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
  const title = serviceData?.attributes?.title || "Reparo de Apple Watch";
  const subtitle = serviceData?.attributes?.subtitle || "Serviços especializados para todos os modelos de Apple Watch";
  const description = serviceData?.attributes?.description || 
    "Nosso centro autorizado oferece reparos completos para todos os modelos de Apple Watch, desde a Série 1 até os modelos mais recentes. Utilizamos peças originais e técnicos certificados para garantir o funcionamento perfeito do seu dispositivo.";
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
              imagePlaceholder="Imagem Apple Watch Placeholder"
              imageUrl={imageUrl}
              features={serviceData?.attributes?.features || watchFeatures}
              commonProblems={serviceData?.attributes?.commonProblems || commonProblems}
              whatsappNumber="+556536216000"
              whatsappMessage="Olá, gostaria de solicitar um orçamento para reparo do meu Apple Watch."
            />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ServicoWatch;
