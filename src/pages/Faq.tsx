
import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { fetchFaqs, fetchMetadata } from "@/lib/strapi";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet";
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";

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

  // Default FAQs when no data is loaded from Strapi
  const defaultFaqs = [
    {
      id: 1,
      attributes: {
        question: "Quais serviços oferecemos?",
        answer: "Oferecemos serviços especializados de assistência técnica para produtos Apple, incluindo iPhone, iPad, MacBook e Apple Watch. Nossos serviços incluem troca de tela, substituição de bateria, reparo de placa lógica, recuperação de dados, entre outros.",
        order: 1,
        category: "Serviços"
      }
    },
    {
      id: 2,
      attributes: {
        question: "Como agendar um reparo?",
        answer: "Para agendar um reparo, você pode entrar em contato conosco pelo WhatsApp, telefone, ou através da nossa página de agendamento. Basta informar o modelo do dispositivo e o problema que está enfrentando, e nossa equipe entrará em contato para confirmar o horário e fornecer instruções.",
        order: 2,
        category: "Agendamento"
      }
    },
    {
      id: 3,
      attributes: {
        question: "Quanto tempo leva para consertar meu dispositivo?",
        answer: "O tempo de reparo varia conforme o tipo de serviço. Reparos simples como troca de tela ou bateria podem ser feitos no mesmo dia, enquanto reparos mais complexos como problemas na placa lógica podem levar de 2 a 5 dias úteis, dependendo da disponibilidade de peças.",
        order: 3,
        category: "Prazos"
      }
    },
    {
      id: 4,
      attributes: {
        question: "Os reparos têm garantia?",
        answer: "Sim, todos os nossos serviços possuem garantia. Peças como baterias e telas têm garantia de 90 dias, enquanto reparos na placa lógica geralmente têm garantia de 30 dias. Os termos específicos são informados no momento da entrega do dispositivo reparado.",
        order: 4,
        category: "Garantia"
      }
    },
    {
      id: 5,
      attributes: {
        question: "Perco meus dados durante o reparo?",
        answer: "Fazemos o possível para preservar seus dados durante o reparo, mas recomendamos sempre fazer backup completo do seu dispositivo antes de enviá-lo para manutenção. Em alguns casos específicos, como formatação do sistema ou troca de placa lógica, a perda de dados é inevitável.",
        order: 5,
        category: "Procedimentos"
      }
    }
  ];

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
        <div className="container">
          <AnimatedElement>
            <SectionTitle 
              title="Dúvidas Frequentes"
              subtitle="Respostas para as perguntas mais comuns sobre nossos serviços"
              centered
            />
          </AnimatedElement>
          
          <div className="max-w-4xl mx-auto mt-12">
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
              <AnimatedElement>
                <div className="bg-white rounded-lg shadow-md p-8">
                  {Object.keys(defaultFaqs.reduce<Record<string, boolean>>((acc, faq) => {
                    const category = faq.attributes.category || "Geral";
                    acc[category] = true;
                    return acc;
                  }, {})).length > 1 ? (
                    // Render default FAQs grouped by category
                    Object.entries(defaultFaqs.reduce<Record<string, typeof defaultFaqs>>((acc, faq) => {
                      const category = faq.attributes.category || "Geral";
                      if (!acc[category]) {
                        acc[category] = [];
                      }
                      acc[category].push(faq);
                      return acc;
                    }, {})).map(([category, faqs], index) => (
                      <div key={index} className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">{category}</h2>
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
                      </div>
                    ))
                  ) : (
                    // Render default FAQs without categories
                    <Accordion type="single" collapsible className="w-full">
                      {defaultFaqs.map((faq) => (
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
                </div>
              </AnimatedElement>
            )}
            
            {!isLoading && !error && faqs.length > 0 && (
              <AnimatedElement>
                <div className="bg-white rounded-lg shadow-md p-8">
                  {categories.length > 1 ? (
                    // Render FAQs grouped by category
                    Object.keys(groupedFaqs).map((category) => (
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
                </div>
              </AnimatedElement>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FaqPage;
