
import { useState } from "react";
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { LazyImage } from "@/components/shared/lazy-image";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const BLOG_POSTS = [
  {
    title: "Como saber se é hora de trocar a bateria do seu iPhone",
    titleEn: "How to know when it's time to replace your iPhone battery",
    excerpt: "Saiba identificar os principais sinais de que sua bateria está no fim e entenda o momento ideal para substituí-la.",
    excerptEn: "Learn to identify the main signs that your battery is dying and understand the ideal time to replace it.",
    date: "15 de abril, 2025",
    dateEn: "April 15, 2025",
    image: "placeholder.svg",
    link: "#",
  },
  {
    title: "Dicas para proteger seu MacBook de danos físicos",
    titleEn: "Tips to protect your MacBook from physical damage",
    excerpt: "Conheça as melhores práticas para manter seu MacBook protegido contra quedas, poeira, líquidos e outros danos comuns.",
    excerptEn: "Learn the best practices to keep your MacBook protected against drops, dust, liquids and other common damage.",
    date: "08 de abril, 2025",
    dateEn: "April 8, 2025",
    image: "placeholder.svg",
    link: "#",
  },
  {
    title: "Novidades do iOS 19 que você precisa conhecer",
    titleEn: "iOS 19 features you need to know about",
    excerpt: "Descubra os recursos mais interessantes da nova versão do sistema operacional da Apple e como aproveitá-los.",
    excerptEn: "Discover the most interesting features of Apple's new operating system version and how to make the most of them.",
    date: "02 de abril, 2025",
    dateEn: "April 2, 2025",
    image: "placeholder.svg",
    link: "#",
  },
];

export function BlogSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t, language } = useLanguage();
  
  return (
    <section className="py-20 bg-secondary/30 dark:bg-secondary/5">
      <div className="container">
        <AnimatedElement>
          <SectionTitle 
            title={t('blog.title')}
            subtitle={t('blog.subtitle')}
            centered
          />
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {BLOG_POSTS.map((post, index) => (
            <AnimatedElement key={index} delay={index * 0.1} direction="up">
              <div 
                className="bg-white dark:bg-card rounded-lg shadow-md overflow-hidden transition-transform duration-300 h-full flex flex-col border dark:border-border"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ 
                  transform: hoveredIndex === index ? 'translateY(-10px)' : 'translateY(0)',
                }}
              >
                <div className="h-48 relative">
                  <LazyImage 
                    src={post.image} 
                    alt={language === 'en' ? post.titleEn : post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-sm text-muted-foreground mb-2">
                    {language === 'en' ? post.dateEn : post.date}
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {language === 'en' ? post.titleEn : post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-1">
                    {language === 'en' ? post.excerptEn : post.excerpt}
                  </p>
                  <Link to={post.link} className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                    {t('blog.readMore')} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <AnimatedElement>
            <Button asChild variant="outline">
              <Link to="/blog">{t('blog.viewAll')}</Link>
            </Button>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
