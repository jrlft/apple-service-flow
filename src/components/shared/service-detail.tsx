
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  description: string;
  imagePlaceholder: string;
  features: ServiceFeature[];
  commonProblems: string[];
}

export function ServiceDetail({
  title,
  subtitle,
  description,
  imagePlaceholder,
  features,
  commonProblems,
}: ServiceDetailProps) {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="bg-secondary py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement direction="left">
              <SectionTitle title={title} subtitle={subtitle} />
              <p className="text-muted-foreground mb-6">{description}</p>
              <Button asChild size="lg">
                <Link to="/contato">Solicitar Orçamento</Link>
              </Button>
            </AnimatedElement>

            <AnimatedElement direction="right">
              <div className="bg-white rounded-lg shadow-md p-4 h-[300px] flex items-center justify-center overflow-hidden">
                <div className="text-gray-400">{imagePlaceholder}</div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <AnimatedElement>
            <SectionTitle 
              title="Nossos Serviços" 
              subtitle="Soluções completas para seu dispositivo Apple" 
              centered
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <AnimatedElement key={index} delay={index * 0.1}>
                <div className="bg-white rounded-lg shadow-md p-6 h-full">
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement direction="left">
              <div className="bg-white rounded-lg shadow-md p-4 h-[300px] flex items-center justify-center overflow-hidden">
                <div className="text-gray-400">Imagem Problemas Comuns</div>
              </div>
            </AnimatedElement>

            <AnimatedElement direction="right">
              <SectionTitle 
                title="Problemas Comuns" 
                subtitle="Os problemas mais frequentes que resolvemos" 
              />
              
              <div className="space-y-4">
                {commonProblems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="bg-primary p-1 rounded-full text-white mt-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <p>{problem}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link to="/contato">Solicitar Reparo</Link>
                </Button>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
              <h2 className="text-3xl font-bold mb-6">Precisando de reparo para seu dispositivo?</h2>
              <p className="text-lg mb-8 opacity-90">
                Entre em contato conosco hoje mesmo para um orçamento sem compromisso.
                Nossos especialistas estão prontos para ajudar.
              </p>
              <div className="flex justify-center space-x-4">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/contato">Entre em Contato</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent hover:bg-white/10">
                  <Link to="/precos">Ver Tabela de Preços</Link>
                </Button>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </div>
  );
}
