
import { AnimatedElement } from "@/components/animations/animated-element";
import { Button } from "@/components/ui/button";
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
                Centro Autorizado de Serviços Apple
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                Assistência técnica especializada com técnicos certificados e peças 
                originais para todos os seus dispositivos Apple.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/servicos">Nossos Serviços</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contato">Entre em Contato</Link>
                </Button>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement direction="right" delay={0.2}>
            <div className="relative h-[400px] bg-white rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
              <div className="text-gray-400 text-xl">Imagem Hero Placeholder</div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
