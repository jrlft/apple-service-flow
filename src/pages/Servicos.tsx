
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Smartphone, Tablet, Laptop, Watch } from "lucide-react";

// Removido SERVICES hardcoded. Os serviços virão do Strapi.

import { useEffect, useState } from "react";
import { fetchServices } from "@/lib/strapi";

const iconMap: Record<string, any> = {
  iphone: Smartphone,
  ipad: Tablet,
  mac: Laptop,
  watch: Watch,
};

const Servicos = () => {
  const [services, setServices] = useState<any[]>([]);
  useEffect(() => { fetchServices().then(setServices); }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="bg-secondary py-16">
          <div className="container">
            <AnimatedElement>
              <div className="max-w-3xl mx-auto text-center">
                <SectionTitle 
                  title="Nossos Serviços" 
                  subtitle="Soluções completas para todos os seus dispositivos Apple" 
                  centered
                />
                <p className="text-muted-foreground">
                  Como centro autorizado, oferecemos serviços de reparo e manutenção para toda linha de produtos Apple,
                  utilizando peças originais e técnicos certificados para garantir a qualidade do serviço.
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
                          <Link to={"/servicos/" + service.attributes.slug}>Ver Detalhes</Link>
                        </Button>
                      </div>
                      <div className="bg-white rounded-lg shadow-md p-6 h-[300px] flex items-center justify-center">
                        {service.attributes.image && (
                          <img src={service.attributes.image.data?.attributes?.url} alt={service.attributes.title} className="max-h-60" />
                        )}
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
                <h2 className="text-3xl font-bold mb-6">Precisa de ajuda com seu dispositivo Apple?</h2>
                <p className="text-lg mb-8 opacity-90">
                  Entre em contato conosco hoje mesmo para um orçamento sem compromisso.
                  Nossos especialistas estão prontos para ajudar.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" variant="secondary">
                    <Link to="/contato">Entre em Contato</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-transparent hover:bg-white/10">
                    <Link to="/precos">Ver Preços</Link>
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
