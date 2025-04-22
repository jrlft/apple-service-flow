
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Smartphone, Tablet, Laptop, Watch } from "lucide-react";

const SERVICES = [
  {
    title: "iPhone",
    description: "Reparos de telas, baterias, câmeras e outros componentes para todos os modelos de iPhone.",
    icon: <Smartphone className="h-10 w-10" />,
    link: "/servicos/iphone",
    delay: 0,
  },
  {
    title: "iPad",
    description: "Consertos para todos os modelos de iPad, incluindo telas, baterias e problemas de software.",
    icon: <Tablet className="h-10 w-10" />,
    link: "/servicos/ipad",
    delay: 0.1,
  },
  {
    title: "Mac",
    description: "Serviços para MacBook, iMac e Mac mini, desde upgrades até reparos de placa lógica.",
    icon: <Laptop className="h-10 w-10" />,
    link: "/servicos/mac",
    delay: 0.2,
  },
  {
    title: "Apple Watch",
    description: "Reparo especializado para Apple Watch, incluindo telas, baterias e problemas de conectividade.",
    icon: <Watch className="h-10 w-10" />,
    link: "/servicos/watch",
    delay: 0.3,
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <AnimatedElement>
          <SectionTitle 
            title="Nossos Serviços" 
            subtitle="Confira nossa gama de serviços para seus dispositivos Apple" 
            centered
          />
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {SERVICES.map((service, index) => (
            <AnimatedElement key={index} delay={service.delay}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                <div className="bg-primary bg-opacity-10 p-4 rounded-full w-fit mb-4 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground flex-grow mb-4">{service.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to={service.link}>Saiba Mais</Link>
                </Button>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
