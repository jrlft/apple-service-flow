
import { AnimatedElement } from "@/components/animations/animated-element";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export function CtaSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-lg mb-8 text-white/80">
              {t('cta.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contato">{t('cta.contactButton')}</Link>
              </Button>
              <WhatsAppButton 
                phoneNumber="+556536216000" 
                message={t('cta.whatsappMessage')}
                size="lg"
              >
                {t('cta.whatsappButton')}
              </WhatsAppButton>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
