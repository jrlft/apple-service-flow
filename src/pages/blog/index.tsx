
import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LazyImage } from "@/components/shared/lazy-image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { fetchBlogPosts, BlogPost } from "./sampleData";
import { Helmet } from "react-helmet";

// Categorias para o blog
const CATEGORIES = [
  { id: "all", name: "Todos" },
  { id: "repairs", name: "Reparos" },
  { id: "tips", name: "Dicas" },
  { id: "news", name: "Novidades" },
  { id: "tutorials", name: "Tutoriais" },
];

// Marketing Scripts for SEO and tracking
const MarketingScripts = () => {
  return (
    <Helmet>
      <script>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '581961359233767');
          fbq('track', 'PageView');
        `}
      </script>
      <noscript>
        {`
          <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=581961359233767&ev=PageView&noscript=1"
          />
        `}
      </noscript>
      
      {/* Google Ads Tag */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10888031582"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-10888031582');
        `}
      </script>
    </Helmet>
  );
};

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setIsLoading(true);
        const blogPosts = await fetchBlogPosts();
        setPosts(blogPosts);
      } catch (error) {
        console.error("Error loading blog posts:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadPosts();
  }, []);

  // Filtrar posts por categoria e termo de pesquisa
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <MarketingScripts />
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <section className="bg-secondary py-16">
          <div className="container">
            <AnimatedElement>
              <div className="max-w-3xl mx-auto text-center">
                <SectionTitle 
                  title="Blog" 
                  subtitle="Dicas, tutoriais e novidades sobre o mundo Apple" 
                  centered
                />
                <p className="text-muted-foreground text-justify">
                  Conteúdo exclusivo produzido por nossa equipe de especialistas para ajudar você 
                  a aproveitar ao máximo seus dispositivos e conhecer as últimas novidades.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <AnimatedElement direction="left">
                  <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                    <h3 className="text-lg font-semibold mb-4">Pesquisar</h3>
                    <div className="mb-6">
                      <Input
                        placeholder="Buscar artigos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="mb-2"
                      />
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-4">Categorias</h3>
                    <div className="space-y-2">
                      {CATEGORIES.map((category) => (
                        <Button
                          key={category.id}
                          variant={selectedCategory === category.id ? "default" : "outline"}
                          size="sm"
                          className="mr-2 mb-2"
                          onClick={() => setSelectedCategory(category.id)}
                        >
                          {category.name}
                        </Button>
                      ))}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t">
                      <h3 className="text-lg font-semibold mb-4">Fique por dentro</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Assine nossa newsletter e receba as últimas atualizações e dicas diretamente no seu email.
                      </p>
                      <Input
                        placeholder="Seu melhor email"
                        type="email"
                        className="mb-2"
                      />
                      <Button className="w-full">Assinar</Button>
                    </div>
                  </div>
                </AnimatedElement>
              </div>
              
              {/* Main Content */}
              <div className="lg:col-span-3">
                {isLoading ? (
                  <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
                  </div>
                ) : filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredPosts.map((post, index) => (
                      <AnimatedElement key={post.id} delay={index * 0.1}>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                          <div className="h-48 relative">
                            <LazyImage 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4">
                              <span className="bg-primary text-white px-3 py-1 rounded-full text-xs">
                                {CATEGORIES.find(c => c.id === post.category)?.name}
                              </span>
                            </div>
                          </div>
                          <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                              <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime} de leitura</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                            <p className="text-muted-foreground mb-4 flex-1 text-justify">{post.excerpt}</p>
                            <Link to={`/blog/${post.id}`} className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all mt-auto">
                              Ler mais <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </AnimatedElement>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white p-12 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-medium mb-2">Nenhum artigo encontrado</h3>
                    <p className="text-muted-foreground">
                      Não encontramos artigos correspondentes à sua pesquisa. Tente usar termos diferentes ou resetar os filtros.
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => {
                        setSelectedCategory("all");
                        setSearchTerm("");
                      }}
                    >
                      Limpar filtros
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <div className="text-[6px] text-muted-foreground ml-4 mb-1">
        Não foi possível estabelecer conexão com o Strapi CMS. Exibindo conteúdo estático.
      </div>
    </div>
  );
};

export default Blog;
