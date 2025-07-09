
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Smartphone, Tablet, Laptop, Watch } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";

const iconMap: Record<string, any> = {
  iphone: Smartphone,
  ipad: Tablet,
  mac: Laptop,
  watch: Watch,
};

const Servicos = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      id: 1,
      attributes: {
        title: t('services.iphone.title'),
        description: t('services.iphone.description'),
        slug: "iphone",
      }
    },
    {
      id: 2,
      attributes: {
        title: t('services.ipad.title'),
        description: t('services.ipad.description'),
        slug: "ipad",
      }
    },
    {
      id: 3,
      attributes: {
        title: t('services.mac.title'),
        description: t('services.mac.description'),
        slug: "mac",
      }
    },
    {
      id: 4,
      attributes: {
        title: t('services.watch.title'),
        description: t('services.watch.description'),
        slug: "watch",
      }
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="bg-secondary py-16">
          <div className="container">
            <AnimatedElement>
              <div className="max-w-3xl mx-auto text-center">
                <SectionTitle 
                  title={t('services.title')} 
                  subtitle={t('services.subtitle')} 
                  centered
                />
                <p className="text-muted-foreground">
                  {t('services.description')}
                </p>
              </div>
            </AnimatedElement>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="space-y-16">
              {services.map((service, index) => {
                  const Icon = iconMap[service.attributes.slug] || Smartphone;
                  return (
                    <AnimatedElement key={service.id} delay={index * 0.1}>
                      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div>
                          <div className="bg-primary bg-opacity-10 p-4 rounded-full w-fit mb-4 text-primary">
                            <Icon className="h-12 w-12" />
                          </div>
                          <h3 className="text-3xl font-bold mb-4">{service.attributes.title}</h3>
                          <p className="text-muted-foreground mb-6">{service.attributes.description}</p>
                          <Button asChild>
                            <Link to={"/servicos/" + service.attributes.slug}>{t('services.viewDetails')}</Link>
                          </Button>
                        </div>
                        <div className="bg-card rounded-lg shadow-md p-6 h-[300px] flex items-center justify-center border">
                          <div className="flex items-center justify-center h-full w-full bg-muted rounded">
                            <Icon className="h-20 w-20 text-muted-foreground" />
                          </div>
                        </div>
                      </div>
                    </AnimatedElement>
                  );
                })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedElement>
                <h2 className="text-3xl font-bold mb-6">{t('services.cta.title')}</h2>
                <p className="text-lg mb-8 opacity-90">
                  {t('services.cta.description')}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" variant="secondary">
                    <Link to="/contato">{t('services.cta.contact')}</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-transparent hover:bg-white/10">
                    <Link to="/precos">{t('services.cta.viewPrices')}</Link>
                  </Button>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Servicos;
