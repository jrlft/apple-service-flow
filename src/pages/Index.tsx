
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
  useEffect(() => { fetchPage("home").then(setPage); }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {!page && <div className="text-center py-24">Carregando...</div>}
        {page && page.attributes.sections.map((section: any, idx: number) => {
          const SectionComponent = sectionMap[section.__component];
          return SectionComponent ? (
            <SectionComponent key={idx} data={section} />
          ) : null;
        })}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
