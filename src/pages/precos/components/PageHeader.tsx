
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  isSheetLoaded: boolean;
  lastUpdated?: string;
}

export const PageHeader = ({ 
  title, 
  subtitle, 
  isSheetLoaded, 
  lastUpdated 
}: PageHeaderProps) => {
  return (
    <section className="bg-secondary py-16">
      <div className="container">
        <AnimatedElement>
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle 
              title={title} 
              subtitle={subtitle} 
              centered
            />
            <p className="text-muted-foreground text-justify">
              Consulte abaixo os valores para os serviços mais solicitados em cada tipo de dispositivo Apple.
              Para outros serviços ou modelos não listados, entre em contato para um orçamento personalizado.
            </p>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};
