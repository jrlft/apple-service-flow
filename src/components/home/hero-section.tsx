
import { AnimatedElement } from "@/components/animations/animated-element";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center py-16 pt-32">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary to-white z-0"></div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement direction="left">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
                Bem-vindo à Link TI - Centro de Serviço Autorizado da Apple
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                Aqui, trazemos a excelência Apple para Mato Grosso! Como centro de serviços autorizado, 
                usamos apenas peças originais e contamos com técnicos certificados para cuidar do seu iPhone, 
                iPad, Mac, Apple Watch e mais. Nosso compromisso? Reparos rápidos, atendimento acolhedor e dispositivos como novos.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/servicos">Nossos Serviços</Link>
                </Button>
                <WhatsAppButton 
                  phoneNumber="+556536216000" 
                  message="Olá, gostaria de informações sobre assistência técnica para dispositivos Apple."
                  size="lg"
                >
                  Atendimento via WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement direction="right" delay={0.2}>
            <div className="relative h-[400px] bg-white rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
              <img 
                src="/lovable-uploads/8a8f5661-2b07-4aed-9cbc-251db76bfa37.png" 
                alt="Técnico realizando reparo em dispositivo Apple" 
                className="w-full h-full object-cover" 
              />
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
