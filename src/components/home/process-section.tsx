
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";

const STEPS = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Realizamos uma análise detalhada para identificar o problema com precisão."
  },
  {
    number: "02",
    title: "Orçamento",
    description: "Apresentamos um orçamento transparente e sem compromisso."
  },
  {
    number: "03",
    title: "Reparo",
    description: "Nossos técnicos certificados realizam o reparo utilizando peças originais."
  },
  {
    number: "04",
    title: "Garantia",
    description: "Entregamos seu dispositivo funcionando perfeitamente e com garantia."
  }
];

export function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <AnimatedElement>
          <SectionTitle 
            title="Nosso Processo" 
            subtitle="Como trabalhamos para oferecer o melhor serviço para seu dispositivo Apple" 
            centered
          />
        </AnimatedElement>

        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, index) => (
              <AnimatedElement key={index} delay={index * 0.1}>
                <div className="relative">
                  <div className="bg-secondary p-6 rounded-lg h-full">
                    <div className="text-4xl font-bold text-primary/20 mb-4">{step.number}</div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  
                  {index < STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200"></div>
                  )}
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
