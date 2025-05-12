
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  isSheetLoaded: boolean;
  lastUpdated?: string; // Tornar opcional para evitar o erro
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
            <p className="text-muted-foreground">
              Consulte abaixo os valores para os serviços mais solicitados em cada tipo de dispositivo Apple.
              Para outros serviços ou modelos não listados, entre em contato para um orçamento personalizado.
            </p>
            {isSheetLoaded && lastUpdated && (
              <p className="text-xs mt-2 text-muted-foreground">
                Dados sincronizados com Google Sheets • Última atualização: {lastUpdated}
              </p>
            )}
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};
