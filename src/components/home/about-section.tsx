
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { Check } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

const HIGHLIGHTS = [
  "Primeiro Centro de Serviço Autorizado em MT, desde 2010.",
  "Técnicos certificados pela Apple",
  "Peças originais e garantia oficial",
  "Laboratório com ferramentas homologadas pela Apple",
  "Atendimento em garantia, Applecare e fora de garantia.", 
  "Diagnóstico preciso e transparente"
];

export function AboutSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement direction="left">
            <div className="h-[400px] rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src="/lovable-uploads/08e90233-e182-460f-95e0-d34d25025edb.png"
                alt="Link TI - Centro Autorizado Apple"
                className="w-full h-full object-cover rounded-lg" 
              />
            </div>
          </AnimatedElement>
          
          <AnimatedElement direction="right">
            <div>
              <SectionTitle 
                title="Sobre Nossa Empresa" 
                subtitle="Excelência em serviços Apple há mais de 15 anos"
              />
              
              <p className="text-muted-foreground mb-6">
                Fundada em 2003, a Link TI é um centro de serviço autorizado Apple dedicado a fornecer reparos e manutenção de alta qualidade para todos os seus dispositivos Apple, desde 2010. Nossa equipe de técnicos certificados pela Apple tem anos de experiência e está comprometida em oferecer um serviço excepcional.
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
              
              <p className="text-muted-foreground mb-6">
                Buscamos garantir que seus dispositivos Apple funcionem perfeitamente, proporcionando reparos rápidos e confiáveis com peças originais, sempre mantendo integridade e transparência em nossos diagnósticos e orçamentos.
              </p>
              <p className="text-muted-foreground">
                Com mais de 65 mil reparos realizados com sucesso, somos a escolha confiável para cuidar dos seus dispositivos Apple.
              </p>
              
              <div className="mt-6">
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
        </div>
      </div>
    </section>
  );
}
