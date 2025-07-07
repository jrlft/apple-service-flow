
import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ExternalLink } from "lucide-react";
import { fetchAppointmentPageContent, fetchMetadata } from "@/lib/strapi";
import { Helmet } from "react-helmet";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { useLanguage } from "@/contexts/LanguageContext";

const Agendamento = () => {
  const { t } = useLanguage();
  const [pageContent, setPageContent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [metadata, setMetadata] = useState<any>(null);

  useEffect(() => {
    const loadPageContent = async () => {
      try {
        setIsLoading(true);
        const content = await fetchAppointmentPageContent();
        setPageContent(content);
        
        // Fetch SEO metadata
        const metaData = await fetchMetadata("agendamento");
        setMetadata(metaData);
      } catch (err) {
        console.error("Error loading agendamento page:", err);
        setError(t('appointment.errorLoading'));
      } finally {
        setIsLoading(false);
      }
    };
    
    loadPageContent();
  }, []);

  // Default content if Strapi data is not available
  const defaultContent = {
    title: t('appointment.title'),
    subtitle: t('appointment.subtitle'),
    introduction: t('appointment.introduction'),
    appointmentButtonText: t('appointment.buttonText'),
    appointmentUrl: "https://getsupport.apple.com/repair-locations?storeId=442491",
    prepareSectionTitle: t('appointment.prepareSection.title'),
    guideCards: [
      {
        title: t('appointment.prepareSection.cards.backup.title'),
        description: t('appointment.prepareSection.cards.backup.description'),
        url: "https://support.apple.com/pt-br/109519"
      },
      {
        title: t('appointment.prepareSection.cards.prepare.title'),
        description: t('appointment.prepareSection.cards.prepare.description'),
        url: "https://support.apple.com/pt-br/102868"
      },
      {
        title: t('appointment.prepareSection.cards.erase.title'),
        description: t('appointment.prepareSection.cards.erase.description'),
        url: "https://support.apple.com/pt-br/116942"
      }
    ],
    checklistTitle: t('appointment.checklist.title'),
    checklistItems: [
      t('appointment.checklist.items.backup'),
      t('appointment.checklist.items.findMy'),
      t('appointment.checklist.items.accessories'),
      t('appointment.checklist.items.case'),
      t('appointment.checklist.items.passwords')
    ]
  };

  // Use content from Strapi if available, otherwise use default
  const content = pageContent?.attributes || defaultContent;

  return (
    <div className="min-h-screen flex flex-col">
      {metadata && (
        <Helmet>
          <title>{metadata.title || t('appointment.seo.title')}</title>
          <meta name="description" content={metadata.description || t('appointment.seo.description')} />
          <meta property="og:title" content={metadata.ogTitle || metadata.title || t('appointment.title')} />
          <meta property="og:description" content={metadata.ogDescription || metadata.description || t('appointment.seo.description')} />
          {metadata.ogImage && <meta property="og:image" content={metadata.ogImage.data.attributes.url} />}
        </Helmet>
      )}
      
      <Navbar />
      <main className="flex-grow py-16 md:py-24">
        <section className="bg-secondary py-12 mb-12">
          <div className="container">
            <AnimatedElement>
              <SectionTitle 
                title={content.title}
                subtitle={content.subtitle || t('appointment.subtitle')}
                centered
              />
            </AnimatedElement>
          </div>
        </section>

        <div className="container max-w-4xl">
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
                {t('appointment.tryAgain')}
              </button>
            </div>
          ) : (
            <AnimatedElement>
              <div className="bg-white rounded-lg shadow-md p-8 mb-12">
                <p className="text-lg text-center mb-10 text-muted-foreground">
                  {content.introduction}
                </p>
                
                <div className="flex flex-col items-center mb-16">
                  <Button 
                    size="lg" 
                    className="text-lg py-6 px-8"
                    onClick={() => window.open(content.appointmentUrl, "_blank")}
                  >
                    {content.appointmentButtonText}
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <div className="mt-6">
                    <WhatsAppButton 
                      phoneNumber="+556536216000" 
                      message={t('appointment.whatsappMessage')}
                      size="lg"
                    >
                      {t('appointment.whatsappButton')}
                    </WhatsAppButton>
                  </div>
                </div>
                
                <section className="mb-16">
                  <h2 className="text-2xl font-bold text-center mb-8">{content.prepareSectionTitle}</h2>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {(content.guideCards || defaultContent.guideCards).map((card: any, index: number) => (
                      <Card key={index} className="h-full">
                        <CardHeader>
                          <CardTitle className="text-lg">{card.title}</CardTitle>
                          <CardDescription>{card.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button 
                            variant="outline" 
                            className="w-full"
                            onClick={() => window.open(card.url, "_blank")}
                          >
                            {t('appointment.viewGuide')} <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
                
                <section className="bg-muted p-8 rounded-lg">
                  <h2 className="text-2xl font-bold mb-6">{content.checklistTitle}</h2>
                  <ul className="space-y-3">
                    {(content.checklistItems || defaultContent.checklistItems).map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </AnimatedElement>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Agendamento;
