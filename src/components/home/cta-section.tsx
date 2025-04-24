
import { AnimatedElement } from "@/components/animations/animated-element";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Link } from "react-router-dom";

export function CtaSection() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Precisando de reparo para seu dispositivo Apple?
            </h2>
            <p className="text-lg mb-8 text-white/80">
              Entre em contato conosco hoje mesmo para um orçamento sem compromisso.
              Nossos especialistas estão prontos para ajudar com qualquer problema no seu dispositivo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contato">Entre em Contato</Link>
              </Button>
              <WhatsAppButton 
                phoneNumber="+556536216000" 
                message="Olá, gostaria de solicitar um orçamento para reparo do meu dispositivo Apple."
                size="lg"
              >
                Orçamento via WhatsApp
              </WhatsAppButton>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
