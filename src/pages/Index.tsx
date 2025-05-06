
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { useEffect, useState } from "react";
import { fetchPage } from "@/lib/strapi";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { AboutSection } from "@/components/home/about-section";
import { ProcessSection } from "@/components/home/process-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ContactSection } from "@/components/home/contact-section";
import { CtaSection } from "@/components/home/cta-section";
import { BlogSection } from "@/components/home/blog-section";

const sectionMap: Record<string, any> = {
  "section.hero": HeroSection,
  "section.services": ServicesSection,
  "section.about": AboutSection,
  "section.process": ProcessSection,
  "section.testimonials": TestimonialsSection,
  "section.contact": ContactSection,
  "section.cta": CtaSection,
  "section.blog": BlogSection,
};

const Index = () => {
  const [page, setPage] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPage = async () => {
      try {
        setIsLoading(true);
        const pageData = await fetchPage("home");
        setPage(pageData);
        setError(null);
      } catch (err) {
        console.error("Error loading home page:", err);
        setError("Erro ao carregar a página inicial. Por favor, tente novamente mais tarde.");
      } finally {
        setIsLoading(false);
      }
    };
    
    loadPage();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {isLoading && (
          <div className="flex items-center justify-center py-24">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
          </div>
        )}
        
        {error && (
          <div className="text-center py-24">
            <p className="text-destructive">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
            >
              Tentar novamente
            </button>
          </div>
        )}
        
        {!isLoading && !error && !page && (
          <div className="text-center py-24">
            <p>Nenhum conteúdo encontrado para a página inicial.</p>
          </div>
        )}
        
        {!isLoading && !error && page && page.attributes.sections && page.attributes.sections.map((section: any, idx: number) => {
          const SectionComponent = sectionMap[section.__component];
          return SectionComponent ? (
            <SectionComponent key={idx} data={section} />
          ) : (
            <div key={idx} className="text-center py-4 text-muted-foreground">
              Componente não encontrado: {section.__component}
            </div>
          );
        })}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
