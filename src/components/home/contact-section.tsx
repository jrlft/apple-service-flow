
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <div className="container">
        <AnimatedElement>
          <SectionTitle 
            title={t('contact.title')}
            subtitle={t('contact.subtitle')}
            centered
          />
        </AnimatedElement>

        <div className="max-w-4xl mx-auto mt-12">
          <AnimatedElement>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">{t('contact.info.title')}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('common.phone')} / WhatsApp</h4>
                    <p className="text-muted-foreground">65-3621-6000</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('common.email')}</h4>
                    <a href="mailto:atendimento@linkti.info" className="text-muted-foreground hover:text-primary transition-colors">
                      atendimento@linkti.info
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('common.address')}</h4>
                    <p className="text-muted-foreground">
                      Rua Odorico Tocantins, nr 125 - Quilombo<br />
                      Cuiabá-MT, 78045-170
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full text-primary">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('contact.hours.title')}</h4>
                    <p className="text-muted-foreground">{t('contact.hours.weekdays')}</p>
                    <p className="text-muted-foreground">{t('contact.hours.saturday')}</p>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <WhatsAppButton 
                  phoneNumber="+556536216000" 
                  message={t('hero.whatsappMessage')}
                  className="w-full md:w-auto"
                  size="lg"
                >
                  {t('hero.whatsappButton')}
                </WhatsAppButton>
                
                <div className="mt-4">
                  <Button 
                    asChild 
                    variant="destructive" 
                    size="lg"
                    className="w-full md:w-auto"
                  >
                    <a 
                      href="https://getsupport.apple.com/repair-locations?storeId=442491"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('nav.appointment')}
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-3 text-center">Localização</h4>
                <a 
                  href="https://maps.app.goo.gl/MCa4K2R7oNSHhzLu6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-[300px] bg-gray-200 rounded-md overflow-hidden hover:opacity-90 transition-opacity"
                >
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.2555856403396!2d-56.06220012529709!3d-15.57887748509297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939da5edc0672077%3A0xe9c7716b268c8609!2sR.%20Odorico%20Tocantins%2C%20125%20-%20Quilombo%2C%20Cuiab%C3%A1%20-%20MT%2C%2078045-170!5e0!3m2!1spt-BR!2sbr!4v1715889955253!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </a>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
