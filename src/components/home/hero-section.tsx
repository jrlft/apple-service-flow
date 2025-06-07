
import { AnimatedElement } from "@/components/animations/animated-element";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center py-16 pt-32">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary to-white dark:from-secondary/20 dark:to-background z-0"></div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement direction="left">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
                <span className="text-foreground font-black block">{t('hero.welcome')}</span>
                <span className="text-primary">{t('hero.subtitle')}</span>
              </h1>
              <p className="text-xl mb-8 text-muted-foreground text-justify">
                {t('hero.description1')}
                <br /><br />
                {t('hero.description2')}
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button asChild size="lg">
                  <Link to="/servicos">{t('hero.servicesButton')}</Link>
                </Button>
                <WhatsAppButton 
                  phoneNumber="+556536216000" 
                  message={t('hero.whatsappMessage')}
                  size="lg"
                >
                  {t('hero.whatsappButton')}
                </WhatsAppButton>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement direction="right" delay={0.2}>
            <div className="relative h-[400px] bg-white dark:bg-card rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
              <img 
                src="/lovable-uploads/be845e7c-d576-4144-b0aa-8adfe3274f08.png" 
                alt="Link TI - Centro de Serviço Autorizado da Apple" 
                className="w-full h-full object-cover" 
              />
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
