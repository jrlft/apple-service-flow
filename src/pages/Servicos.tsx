
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Smartphone, Tablet, Laptop, Watch } from "lucide-react";

const SERVICES = [
  {
    title: "iPhone",
    description: "Consertos especializados para todos os modelos de iPhone, incluindo substituição de tela, bateria, câmera e outros componentes com peças originais.",
    icon: <Smartphone className="h-12 w-12" />,
    link: "/servicos/iphone",
    image: "Imagem iPhone Placeholder",
    delay: 0,
  },
  {
    title: "iPad",
    description: "Serviços completos para iPad, desde substituição de tela e bateria até diagnóstico e reparo de problemas de software e hardware.",
    icon: <Tablet className="h-12 w-12" />,
    link: "/servicos/ipad",
    image: "Imagem iPad Placeholder",
    delay: 0.1,
  },
  {
    title: "Mac",
    description: "Manutenção e reparo para toda linha Mac, incluindo MacBook, iMac e Mac Mini. Serviços que vão desde upgrades até reparos de placa lógica.",
    icon: <Laptop className="h-12 w-12" />,
    link: "/servicos/mac",
    image: "Imagem Mac Placeholder",
    delay: 0.2,
  },
  {
    title: "Apple Watch",
    description: "Serviços especializados para Apple Watch, incluindo substituição de tela, bateria e diagnóstico de problemas de conectividade e sensores.",
    icon: <Watch className="h-12 w-12" />,
    link: "/servicos/watch",
    image: "Imagem Watch Placeholder",
    delay: 0.3,
  },
];

const Servicos = () => {
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
              {SERVICES.map((service, index) => (
                <AnimatedElement key={index} delay={service.delay}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                    <div>
                      <div className="bg-primary bg-opacity-10 p-4 rounded-full w-fit mb-4 text-primary">
                        {service.icon}
                      </div>
                      <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <Button asChild>
                        <Link to={service.link}>Ver Detalhes</Link>
                      </Button>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 h-[300px] flex items-center justify-center">
                      <div className="text-gray-400">{service.image}</div>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
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
