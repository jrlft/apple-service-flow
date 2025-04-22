
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { Check } from "lucide-react";

const HIGHLIGHTS = [
  "Centro autorizado para serviços Apple",
  "Técnicos certificados pela Apple",
  "Peças originais e garantia oficial",
  "Orçamento sem compromisso",
  "Atendimento rápido e eficiente", 
  "Diagnóstico preciso e transparente"
];

export function AboutSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement direction="left">
            <div className="h-[400px] bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
              <div className="text-gray-500 text-lg">Imagem Sobre Nós Placeholder</div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement direction="right">
            <div>
              <SectionTitle 
                title="Sobre Nossa Empresa" 
                subtitle="Excelência em serviços Apple há mais de 10 anos"
              />
              
              <p className="text-muted-foreground mb-6">
                Somos um centro autorizado de serviços Apple, especializado em reparos 
                e manutenção de produtos Apple. Nossa equipe de técnicos altamente 
                treinados utiliza peças originais para garantir a qualidade e segurança 
                dos reparos.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {HIGHLIGHTS.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="bg-primary bg-opacity-10 p-1 rounded-full text-primary">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-muted-foreground">
                Nosso compromisso é oferecer um serviço rápido, eficiente e confiável. 
                Trabalhamos para que seu dispositivo Apple volte a funcionar perfeitamente 
                no menor tempo possível.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
