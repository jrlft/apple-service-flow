
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { Check } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { useLanguage } from "@/contexts/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();

  const HIGHLIGHTS = [
    t('about.highlight1'),
    t('about.highlight2'),
    t('about.highlight3'),
    t('about.highlight4'),
    t('about.highlight5'),
    t('about.highlight6')
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement direction="left">
            <div className="h-[400px] rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src="/lovable-uploads/08e90233-e182-460f-95e0-d34d25025edb.png"
                alt="Link TI - Centro Autorizado Apple"
                className="w-full h-full object-cover rounded-lg" 
              />
            </div>
          </AnimatedElement>
          
          <AnimatedElement direction="right">
            <div>
              <SectionTitle 
                title={t('about.title')}
                subtitle={t('about.subtitle')}
              />
              
              <p className="text-muted-foreground mb-6">
                {t('about.description1')}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {HIGHLIGHTS.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="bg-primary bg-opacity-10 dark:bg-primary/20 p-1 rounded-full text-primary">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6">
                {t('about.description2')}
              </p>
              <p className="text-muted-foreground">
                {t('about.description3')}
              </p>
              
              <div className="mt-6">
                <WhatsAppButton 
                  phoneNumber="+556536216000" 
                  message={t('hero.whatsappMessage')}
                  size="lg"
                >
                  {t('about.whatsappButton')}
                </WhatsAppButton>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
