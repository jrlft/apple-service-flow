
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Smartphone, Tablet, Laptop, Watch } from "lucide-react";

import { useEffect, useState } from "react";
import { fetchServices, checkStrapiConnection } from "@/lib/strapi";
import { useLanguage } from "@/contexts/LanguageContext";

const iconMap: Record<string, any> = {
  iphone: Smartphone,
  ipad: Tablet,
  mac: Laptop,
  watch: Watch,
};

// Static fallback data when Strapi is unavailable
const getFallbackServices = (t: any) => [
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

const Servicos = () => {
  const { t } = useLanguage();
  const [services, setServices] = useState<any[]>([]);
  const [useFallback, setUseFallback] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const FALLBACK_SERVICES = getFallbackServices(t);

  useEffect(() => {
    const loadServices = async () => {
      try {
        setIsLoading(true);
        const strapiAvailable = await checkStrapiConnection();
        
        if (strapiAvailable) {
          const servicesData = await fetchServices();
          if (servicesData && servicesData.length > 0) {
            setServices(servicesData);
            setUseFallback(false);
          } else {
            setServices(FALLBACK_SERVICES);
            setUseFallback(true);
          }
        } else {
          setServices(FALLBACK_SERVICES);
          setUseFallback(true);
        }
      } catch (error) {
        console.error("Error loading services:", error);
        setServices(FALLBACK_SERVICES);
        setUseFallback(true);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadServices();
  }, []);

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
                {useFallback && (
                  <div className="text-center py-3 mt-4">
                    <p className="text-amber-600 bg-amber-50 py-2 px-4 rounded-md inline-block">
                      {t('services.loadingFallback')}
                    </p>
                  </div>
                )}
              </div>
            </AnimatedElement>
          </div>
        </section>

        {isLoading ? (
          <div className="flex items-center justify-center py-24">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
          </div>
        ) : (
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
                        <div className="bg-white rounded-lg shadow-md p-6 h-[300px] flex items-center justify-center">
                          {service.attributes.image && service.attributes.image.data?.attributes?.url ? (
                            <img src={service.attributes.image.data?.attributes?.url} alt={service.attributes.title} className="max-h-60" />
                          ) : (
                            <div className="flex items-center justify-center h-full w-full bg-gray-100 rounded">
                              <Icon className="h-20 w-20 text-gray-400" />
                            </div>
                          )}
                        </div>
                      </div>
                    </AnimatedElement>
                  );
                })}
              </div>
            </div>
          </section>
        )}

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
