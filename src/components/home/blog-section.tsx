
import { useState } from "react";
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { LazyImage } from "@/components/shared/lazy-image";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BLOG_POSTS = [
  {
    title: "Como saber se é hora de trocar a bateria do seu iPhone",
    excerpt: "Saiba identificar os principais sinais de que sua bateria está no fim e entenda o momento ideal para substituí-la.",
    date: "15 de abril, 2025",
    image: "placeholder.svg",
    link: "#",
  },
  {
    title: "Dicas para proteger seu MacBook de danos físicos",
    excerpt: "Conheça as melhores práticas para manter seu MacBook protegido contra quedas, poeira, líquidos e outros danos comuns.",
    date: "08 de abril, 2025",
    image: "placeholder.svg",
    link: "#",
  },
  {
    title: "Novidades do iOS 19 que você precisa conhecer",
    excerpt: "Descubra os recursos mais interessantes da nova versão do sistema operacional da Apple e como aproveitá-los.",
    date: "02 de abril, 2025",
    image: "placeholder.svg",
    link: "#",
  },
];

export function BlogSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <AnimatedElement>
          <SectionTitle 
            title="Blog e Dicas" 
            subtitle="Conteúdo exclusivo para você cuidar melhor dos seus dispositivos"
            centered
          />
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {BLOG_POSTS.map((post, index) => (
            <AnimatedElement key={index} delay={index * 0.1} direction="up">
              <div 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 h-full flex flex-col"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ 
                  transform: hoveredIndex === index ? 'translateY(-10px)' : 'translateY(0)',
                }}
              >
                <div className="h-48 relative">
                  <LazyImage 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-sm text-muted-foreground mb-2">{post.date}</span>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                  <Link to={post.link} className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Ler mais <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <AnimatedElement>
            <Button asChild variant="outline">
              <Link to="/blog">Ver Todos os Artigos</Link>
            </Button>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
