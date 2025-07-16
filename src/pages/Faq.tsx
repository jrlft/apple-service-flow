import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet";
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { useLanguage } from "@/contexts/LanguageContext";

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
  const { t } = useLanguage();
  const [metadata] = useState<any>(null);

  // Default FAQs when no data is loaded from Strapi
  const defaultFaqs = [
    {
      id: 1,
      attributes: {
        question: t('faq.default.services.question'),
        answer: t('faq.default.services.answer'),
        order: 1,
        category: t('faq.categories.services')
      }
    },
    {
      id: 2,
      attributes: {
        question: t('faq.default.scheduling.question'),
        answer: t('faq.default.scheduling.answer'),
        order: 2,
        category: t('faq.categories.scheduling')
      }
    },
    {
      id: 3,
      attributes: {
        question: t('faq.default.timeframe.question'),
        answer: t('faq.default.timeframe.answer'),
        order: 3,
        category: t('faq.categories.timeframe')
      }
    },
    {
      id: 4,
      attributes: {
        question: t('faq.default.warranty.question'),
        answer: t('faq.default.warranty.answer'),
        order: 4,
        category: t('faq.categories.warranty')
      }
    },
    {
      id: 5,
      attributes: {
        question: t('faq.default.data.question'),
        answer: t('faq.default.data.answer'),
        order: 5,
        category: t('faq.categories.procedures')
      }
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {metadata && (
        <Helmet>
          <title>{metadata.title || t('faq.seo.title')}</title>
          <meta name="description" content={metadata.description || t('faq.seo.description')} />
          <meta property="og:title" content={metadata.ogTitle || metadata.title || t('faq.title')} />
          <meta property="og:description" content={metadata.ogDescription || metadata.description || t('faq.seo.description')} />
          {metadata.ogImage && <meta property="og:image" content={metadata.ogImage.data.attributes.url} />}
        </Helmet>
      )}
      
      <Navbar />
      <main className="flex-grow py-16 md:py-24">
        <div className="container">
          <AnimatedElement>
            <SectionTitle 
              title={t('faq.title')}
              subtitle={t('faq.subtitle')}
              centered
            />
          </AnimatedElement>
          
          <div className="max-w-4xl mx-auto mt-12">
            <AnimatedElement>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FaqPage;