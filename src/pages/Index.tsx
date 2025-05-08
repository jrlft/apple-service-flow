
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { useEffect, useState } from "react";
import { fetchPage, fetchMetadata } from "@/lib/strapi";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { AboutSection } from "@/components/home/about-section";
import { ProcessSection } from "@/components/home/process-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ContactSection } from "@/components/home/contact-section";
import { CtaSection } from "@/components/home/cta-section";
import { BlogSection } from "@/components/home/blog-section";
import { Helmet } from "react-helmet";

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
  const [metadata, setMetadata] = useState<any>(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    const loadPage = async () => {
      try {
        setIsLoading(true);
        const pageData = await fetchPage("home");
        setPage(pageData);
        
        // Fetch SEO metadata
        const metaData = await fetchMetadata("home");
        setMetadata(metaData);
        setUseFallback(false);
      } catch (err) {
        console.error("Error loading home page:", err);
        setError("Erro ao carregar a página inicial via Strapi. Carregando conteúdo estático.");
        setUseFallback(true);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadPage();
  }, []);

  // Renderize os componentes estáticos se não conseguir conectar ao Strapi
  const renderStaticContent = () => {
    return (
      <>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
        <CtaSection />
        <BlogSection />
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      {metadata && (
        <Helmet>
          <title>{metadata.title || "Link TI - Assistência Técnica Apple Especializada"}</title>
          <meta name="description" content={metadata.description || "Assistência técnica especializada em produtos Apple em Cuiabá. Conserto de iPhone, iPad, MacBook e Apple Watch com qualidade e garantia."} />
          <meta property="og:title" content={metadata.ogTitle || metadata.title || "Link TI"} />
          <meta property="og:description" content={metadata.ogDescription || metadata.description || "Assistência técnica Apple"} />
          {metadata.ogImage && <meta property="og:image" content={metadata.ogImage.data?.attributes?.url} />}
        </Helmet>
      )}
      <Navbar />
      <main className="flex-grow">
        {isLoading && (
          <div className="flex items-center justify-center py-24">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
          </div>
        )}
        
        {!isLoading && error && useFallback && (
          <div className="text-center py-6 mb-4">
            <p className="text-amber-600 bg-amber-50 py-2 px-4 rounded-md inline-block">{error}</p>
          </div>
        )}
        
        {!isLoading && !error && !page && !useFallback && (
          <div className="text-center py-24">
            <p>Nenhum conteúdo encontrado para a página inicial.</p>
          </div>
        )}
        
        {!isLoading && !useFallback && page && page.attributes.sections && page.attributes.sections.map((section: any, idx: number) => {
          const SectionComponent = sectionMap[section.__component];
          return SectionComponent ? (
            <SectionComponent key={idx} data={section} />
          ) : (
            <div key={idx} className="text-center py-4 text-muted-foreground">
              Componente não encontrado: {section.__component}
            </div>
          );
        })}

        {!isLoading && useFallback && renderStaticContent()}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
