
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { useEffect, useState } from "react";
import { fetchPage, fetchMetadata } from "@/lib/strapi";
import { Helmet } from "react-helmet";

const Garantia = () => {
  const [page, setPage] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [metadata, setMetadata] = useState<any>(null);

  useEffect(() => { 
    const loadPage = async () => {
      try {
        setIsLoading(true);
        const pageData = await fetchPage("garantia");
        setPage(pageData);
        
        // Fetch SEO metadata
        const metaData = await fetchMetadata("garantia");
        setMetadata(metaData);
      } catch (err) {
        console.error("Error loading garantia page:", err);
        setError("Erro ao carregar a página de garantia. Por favor, tente novamente mais tarde.");
      } finally {
        setIsLoading(false);
      }
    };
    
    loadPage();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {metadata && (
        <Helmet>
          <title>{metadata.title || "Termos de Garantia - Link TI"}</title>
          <meta name="description" content={metadata.description || "Termos de garantia para nossos serviços de assistência técnica Apple."} />
          <meta property="og:title" content={metadata.ogTitle || metadata.title || "Termos de Garantia"} />
          <meta property="og:description" content={metadata.ogDescription || metadata.description || "Termos de garantia para nossos serviços."} />
          {metadata.ogImage && <meta property="og:image" content={metadata.ogImage.data.attributes.url} />}
        </Helmet>
      )}
      
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <section className="bg-secondary py-12">
          <div className="container">
            <AnimatedElement>
              <SectionTitle 
                title={page?.attributes?.title || "Termos de Garantia"}
                subtitle={page?.attributes?.subtitle || "Informações importantes sobre nossa garantia de serviços"}
                centered
              />
            </AnimatedElement>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-destructive">{error}</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
                >
                  Tentar novamente
                </button>
              </div>
            ) : (
              <AnimatedElement>
                <div className="bg-white rounded-lg shadow-md p-8">
                  <div className="prose prose-blue max-w-none">
                    {page?.attributes?.content ? (
                      <div dangerouslySetInnerHTML={{ __html: page.attributes.content }} />
                    ) : (
                      <>
                        <p className="text-muted-foreground italic mb-8">
                          Este é um modelo de página para seus Termos de Garantia. Substitua este texto pelo conteúdo real dos seus termos de garantia.
                        </p>
                        
                        <h2 className="text-xl font-semibold mt-8 mb-4">1. Período de Garantia</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. 
                          Nullam id dolor id nibh ultricies vehicula ut id elit.
                        </p>
                        
                        <h2 className="text-xl font-semibold mt-8 mb-4">2. Cobertura da Garantia</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. 
                          Nullam id dolor id nibh ultricies vehicula ut id elit.
                        </p>
                        
                        <h2 className="text-xl font-semibold mt-8 mb-4">3. Exclusões da Garantia</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. 
                          Nullam id dolor id nibh ultricies vehicula ut id elit.
                        </p>
                        
                        <h2 className="text-xl font-semibold mt-8 mb-4">4. Como Acionar a Garantia</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. 
                          Nullam id dolor id nibh ultricies vehicula ut id elit.
                        </p>
                        
                        <h2 className="text-xl font-semibold mt-8 mb-4">5. Garantia de Peças vs. Serviço</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. 
                          Nullam id dolor id nibh ultricies vehicula ut id elit.
                        </p>
                        
                        <p className="mt-8">
                          Última atualização: {new Date().toLocaleDateString()}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </AnimatedElement>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Garantia;
