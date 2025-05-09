
import { AnimatedElement } from "@/components/animations/animated-element";
import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <section className="py-16 bg-primary text-white mt-12">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedElement>
            <h2 className="text-3xl font-bold mb-6">Não encontrou o que procura?</h2>
            <p className="text-lg mb-8 opacity-90">
              Entre em contato conosco para um orçamento personalizado para seu dispositivo.
              Nossa equipe está pronta para ajudar com qualquer reparo específico que você precise.
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="/contato">Solicitar Orçamento</a>
            </Button>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};
