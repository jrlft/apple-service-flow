
import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { fetchFaqs, fetchMetadata } from "@/lib/strapi";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet";

type FAQ = {
  id: number;
  attributes: {
    question: string;
    answer: string;
    order: number;
    category?: string;
  };
};

const FaqPage = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [metadata, setMetadata] = useState<any>(null);

  useEffect(() => {
    const loadFaqs = async () => {
      try {
        setIsLoading(true);
        const faqData = await fetchFaqs();
        setFaqs(faqData);
        
        // Fetch SEO metadata
        const metaData = await fetchMetadata("faq");
        setMetadata(metaData);
      } catch (err) {
        console.error("Error loading FAQs:", err);
        setError("Erro ao carregar as perguntas frequentes. Por favor, tente novamente mais tarde.");
      } finally {
        setIsLoading(false);
      }
    };
    
    loadFaqs();
  }, []);

  // Group FAQs by category if categories exist
  const groupedFaqs = faqs.reduce((acc: Record<string, FAQ[]>, faq: FAQ) => {
    const category = faq.attributes.category || "Geral";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(faq);
    return acc;
  }, {});

  const categories = Object.keys(groupedFaqs);

  return (
    <div className="min-h-screen flex flex-col">
      {metadata && (
        <Helmet>
          <title>{metadata.title || "Dúvidas Frequentes - Link TI"}</title>
          <meta name="description" content={metadata.description || "Perguntas frequentes sobre nossos serviços de assistência técnica Apple."} />
          <meta property="og:title" content={metadata.ogTitle || metadata.title || "Dúvidas Frequentes"} />
          <meta property="og:description" content={metadata.ogDescription || metadata.description || "Perguntas frequentes sobre nossos serviços."} />
          {metadata.ogImage && <meta property="og:image" content={metadata.ogImage.data.attributes.url} />}
        </Helmet>
      )}
      
      <Navbar />
      <main className="flex-grow py-16 md:py-24">
        <div className="container max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Dúvidas Frequentes</h1>
          
          {isLoading && (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
            </div>
          )}
          
          {error && (
            <div className="text-center py-12">
              <p className="text-destructive">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
              >
                Tentar novamente
              </button>
            </div>
          )}
          
          {!isLoading && !error && faqs.length === 0 && (
            <div className="text-center py-12">
              <p>Nenhuma dúvida frequente encontrada.</p>
            </div>
          )}
          
          {!isLoading && !error && faqs.length > 0 && (
            <>
              {categories.length > 1 ? (
                // Render FAQs grouped by category
                categories.map((category) => (
                  <div key={category} className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">{category}</h2>
                    <Accordion type="single" collapsible className="w-full">
                      {groupedFaqs[category].map((faq) => (
                        <AccordionItem key={faq.id} value={`faq-${faq.id}`}>
                          <AccordionTrigger className="text-lg font-medium text-left">
                            {faq.attributes.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <div dangerouslySetInnerHTML={{ __html: faq.attributes.answer }} />
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))
              ) : (
                // Render FAQs without categories
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq) => (
                    <AccordionItem key={faq.id} value={`faq-${faq.id}`}>
                      <AccordionTrigger className="text-lg font-medium text-left">
                        {faq.attributes.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        <div dangerouslySetInnerHTML={{ __html: faq.attributes.answer }} />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FaqPage;
