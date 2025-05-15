
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { Helmet } from "react-helmet";
import { ArrowRight } from "lucide-react";
import { LazyImage } from "@/components/shared/lazy-image";
import { Button } from "@/components/ui/button";

type Post = {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  createdAt: string;
  author?: string;
  featuredImage?: string;
  readTime?: string;
  category?: string;
};

// Dados estáticos para exemplo até a integração do backend
const SAMPLE_POSTS = [
  {
    id: 1,
    title: "Como saber se é hora de trocar a bateria do seu iPhone",
    slug: "como-saber-se-e-hora-de-trocar-a-bateria",
    excerpt: "Saiba identificar os principais sinais de que sua bateria está no fim e entenda o momento ideal para substituí-la.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend malesuada diam, vel ultricies ligula. Nullam sit amet consequat eros. Suspendisse potenti. Duis auctor ipsum eget felis laoreet, non congue eros tincidunt.",
    createdAt: "2025-04-15T10:30:00Z",
    author: "Carlos Silva",
    featuredImage: "placeholder.svg",
    readTime: "5 min",
    category: "Reparos"
  },
  {
    id: 2,
    title: "Dicas para proteger seu MacBook de danos físicos",
    slug: "dicas-para-proteger-seu-macbook",
    excerpt: "Conheça as melhores práticas para manter seu MacBook protegido contra quedas, poeira, líquidos e outros danos comuns.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend malesuada diam, vel ultricies ligula. Nullam sit amet consequat eros. Suspendisse potenti. Duis auctor ipsum eget felis laoreet, non congue eros tincidunt.",
    createdAt: "2025-04-08T14:15:00Z",
    author: "Mariana Costa",
    featuredImage: "placeholder.svg",
    readTime: "6 min",
    category: "Dicas"
  },
  {
    id: 3,
    title: "Novidades do iOS 19 que você precisa conhecer",
    slug: "novidades-do-ios-19",
    excerpt: "Descubra os recursos mais interessantes da nova versão do sistema operacional da Apple e como aproveitá-los.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend malesuada diam, vel ultricies ligula. Nullam sit amet consequat eros. Suspendisse potenti. Duis auctor ipsum eget felis laoreet, non congue eros tincidunt.",
    createdAt: "2025-04-02T09:45:00Z",
    author: "Rodrigo Mendes",
    featuredImage: "placeholder.svg",
    readTime: "4 min",
    category: "Novidades"
  }
];

// Categorias para o blog
const CATEGORIES = [
  { id: "all", name: "Todos" },
  { id: "repairs", name: "Reparos" },
  { id: "tips", name: "Dicas" },
  { id: "news", name: "Novidades" },
  { id: "tutorials", name: "Tutoriais" },
];

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        // Tentar buscar do Strapi primeiro
        const response = await fetch(import.meta.env.VITE_STRAPI_URL 
                                    ? `${import.meta.env.VITE_STRAPI_URL}/api/blog-posts?populate=*` 
                                    : "http://localhost:1337/api/blog-posts?populate=*", 
                                    { signal: AbortSignal.timeout(3000) });
        
        if (response.ok) {
          const data = await response.json();
          const formattedPosts = data.data.map((item: any) => ({
            id: item.id,
            title: item.attributes.title,
            slug: item.attributes.slug,
            content: item.attributes.content,
            excerpt: item.attributes.excerpt,
            createdAt: item.attributes.publishedAt || item.attributes.createdAt,
            author: item.attributes.author?.data?.attributes?.name || "Admin",
            featuredImage: item.attributes.featuredImage?.data?.attributes?.url || "placeholder.svg",
            readTime: `${Math.ceil(item.attributes.content.length / 1500)} min`,
            category: item.attributes.category
          }));
          setPosts(formattedPosts);
        } else {
          // Se falhar, usar dados de exemplo
          console.log("Using sample posts due to API error");
          setPosts(SAMPLE_POSTS);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        // Usar dados de exemplo em caso de erro
        setPosts(SAMPLE_POSTS);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchPosts();
  }, []);
  
  // Filtrar posts por categoria e termo de pesquisa
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || 
                           post.category?.toLowerCase() === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Formatar data
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Blog | Link TI - Centro de Serviço Autorizado Apple</title>
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
                      <input
                        placeholder="Buscar artigos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
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
                      <p className="text-sm text-muted-foreground mb-4 text-justify">
                        Assine nossa newsletter e receba as últimas atualizações e dicas diretamente no seu email.
                      </p>
                      <input
                        placeholder="Seu melhor email"
                        type="email"
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                      />
                      <Button className="w-full">Assinar</Button>
                    </div>
                  </div>
                </AnimatedElement>
              </div>
              
              {/* Main Content */}
              <div className="lg:col-span-3">
                {isLoading ? (
                  <div className="flex justify-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
                  </div>
                ) : filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredPosts.map((post, index) => (
                      <AnimatedElement key={post.id} delay={index * 0.1}>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                          <div className="h-48 relative">
                            <LazyImage 
                              src={post.featuredImage || "placeholder.svg"}
                              alt={post.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4">
                              <span className="bg-primary text-white px-3 py-1 rounded-full text-xs">
                                {post.category || "Geral"}
                              </span>
                            </div>
                          </div>
                          <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                              <span>{formatDate(post.createdAt)}</span>
                              <span>{post.readTime || "5 min"} de leitura</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                            <p className="text-muted-foreground mb-4 flex-1 text-justify">{post.excerpt}</p>
                            <div className="flex items-center justify-between mt-4">
                              <span className="text-sm text-muted-foreground">Por {post.author || "Admin"}</span>
                              <Link to={`/blog/${post.slug || post.id}`} className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                                Ler mais <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
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
}
