
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { useState } from "react";

const TESTIMONIALS = [
  {
    name: "Ricardo Silva",
    role: "Cliente iPhone",
    content: "Serviço excelente! Meu iPhone voltou a funcionar como novo e o reparo foi feito no prazo prometido. Equipe muito profissional e prestativa.",
  },
  {
    name: "Camila Santos",
    role: "Cliente MacBook",
    content: "Meu MacBook precisava de uma substituição de bateria e reparo na tela. Fiquei impressionada com a rapidez e qualidade do serviço. Recomendo a todos!",
  },
  {
    name: "Felipe Oliveira",
    role: "Cliente iPad",
    content: "Levei meu iPad com problemas no touch e fui muito bem atendido. Diagnóstico rápido e preço justo. O aparelho está funcionando perfeitamente agora.",
  },
  {
    name: "Ana Luiza",
    role: "Cliente Apple Watch",
    content: "Atendimento nota 10! Meu Apple Watch estava com problemas na bateria e ficou como novo após o reparo. Profissionais competentes e atenciosos.",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setCurrent((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <AnimatedElement>
          <SectionTitle 
            title="Depoimentos" 
            subtitle="Veja o que nossos clientes dizem sobre nossos serviços" 
            centered
          />
        </AnimatedElement>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-lg bg-white shadow-md">
            <div className="px-6 py-10">
              {TESTIMONIALS.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === current ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                  style={{ display: index === current ? "block" : "none" }}
                >
                  <div className="mb-6">
                    <svg className="h-12 w-12 text-gray-200 mx-auto" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  
                  <p className="text-lg mb-6">{testimonial.content}</p>
                  
                  <div>
                    <div className="font-medium text-lg">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex justify-between items-center border-t border-gray-100 p-4">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label="Depoimento anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 w-2 rounded-full ${index === current ? "bg-primary" : "bg-gray-300"}`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={next}
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label="Próximo depoimento"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
