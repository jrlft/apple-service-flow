
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  description: string;
  imagePlaceholder: string;
  image?: string | null;
  features: ServiceFeature[];
  commonProblems: string[];
  whatsappNumber: string;
  whatsappMessage: string;
}

export function ServiceDetail({
  title,
  subtitle,
  description,
  imagePlaceholder,
  image,
  features,
  commonProblems,
  whatsappNumber,
  whatsappMessage
}: ServiceDetailProps) {
  const { t } = useLanguage();
  
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="bg-secondary py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement direction="left">
              <SectionTitle title={title} subtitle={subtitle} />
              <p className="text-muted-foreground mb-6">{description}</p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/contato">{t('serviceDetail.getQuote')}</Link>
                </Button>
                <WhatsAppButton 
                  phoneNumber={whatsappNumber}
                  message={whatsappMessage}
                  size="lg"
                >
                  {t('serviceDetail.whatsappQuote')}
                </WhatsAppButton>
              </div>
            </AnimatedElement>

            <AnimatedElement direction="right">
              <div className="bg-white rounded-lg shadow-md p-4 h-[300px] flex items-center justify-center overflow-hidden">
                {image ? (
                  <img src={image} alt={title} className="max-w-full max-h-full object-contain" />
                ) : (
                  <div className="text-gray-400">{imagePlaceholder}</div>
                )}
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <AnimatedElement>
            <SectionTitle 
              title={t('serviceDetail.ourServices')} 
              subtitle={t('serviceDetail.completeSolutions')} 
              centered
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <AnimatedElement key={index} delay={index * 0.1}>
                <div className="bg-white rounded-lg shadow-md p-6 h-full">
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement direction="left">
              <div className="bg-white rounded-lg shadow-md p-4 h-[300px] flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/5f8b9888-4c37-4c54-a48f-0f716cdfc0de.png" 
                  alt="Problemas Comuns" 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
            </AnimatedElement>

            <AnimatedElement direction="right">
              <SectionTitle 
                title={t('serviceDetail.commonProblems')} 
                subtitle={t('serviceDetail.frequentProblems')} 
              />
              
              <div className="space-y-4">
                {commonProblems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="bg-primary p-1 rounded-full text-white mt-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <p>{problem}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link to="/contato">{t('serviceDetail.requestRepair')}</Link>
                </Button>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
              <h2 className="text-3xl font-bold mb-6">{t('serviceDetail.needRepair')}</h2>
              <p className="text-lg mb-8 opacity-90">
                {t('serviceDetail.contactToday')}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/contato">{t('serviceDetail.contactUs')}</Link>
                </Button>
                <WhatsAppButton 
                  phoneNumber={whatsappNumber}
                  message={whatsappMessage}
                  size="lg"
                  variant="outline"
                  className="bg-transparent hover:bg-white/10"
                >
                  {t('serviceDetail.whatsappQuote')}
                </WhatsAppButton>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </div>
  );
}
