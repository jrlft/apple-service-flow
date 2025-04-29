
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LazyImage } from "@/components/shared/lazy-image";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

// Categorias simuladas para o blog
const CATEGORIES = [
  { id: "all", name: "Todos" },
  { id: "repairs", name: "Reparos" },
  { id: "tips", name: "Dicas" },
  { id: "news", name: "Novidades" },
  { id: "tutorials", name: "Tutoriais" },
];

// Posts simulados para o blog
const BLOG_POSTS = [
  {
    id: 1,
    title: "Como saber se é hora de trocar a bateria do seu iPhone",
    excerpt: "Saiba identificar os principais sinais de que sua bateria está no fim e entenda o momento ideal para substituí-la.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend malesuada diam, vel ultricies ligula. Nullam sit amet consequat eros. Suspendisse potenti. Duis auctor ipsum eget felis laoreet, non congue eros tincidunt.",
    date: "15 de abril, 2025",
    image: "placeholder.svg",
    category: "repairs",
    author: "Carlos Silva",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Dicas para proteger seu MacBook de danos físicos",
    excerpt: "Conheça as melhores práticas para manter seu MacBook protegido contra quedas, poeira, líquidos e outros danos comuns.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend malesuada diam, vel ultricies ligula. Nullam sit amet consequat eros. Suspendisse potenti. Duis auctor ipsum eget felis laoreet, non congue eros tincidunt.",
    date: "08 de abril, 2025",
    image: "placeholder.svg",
    category: "tips",
    author: "Mariana Costa",
    readTime: "6 min",
  },
  {
    id: 3,
    title: "Novidades do iOS 19 que você precisa conhecer",
    excerpt: "Descubra os recursos mais interessantes da nova versão do sistema operacional da Apple e como aproveitá-los.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend malesuada diam, vel ultricies ligula. Nullam sit amet consequat eros. Suspendisse potenti. Duis auctor ipsum eget felis laoreet, non congue eros tincidunt.",
    date: "02 de abril, 2025",
    image: "placeholder.svg",
    category: "news",
    author: "Rodrigo Mendes",
    readTime: "4 min",
  },
  {
    id: 4,
    title: "Como fazer backup do seu iPhone corretamente",
    excerpt: "Aprenda a garantir que seus dados estejam sempre seguros com o método certo de backup para seu dispositivo.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend malesuada diam, vel ultricies ligula. Nullam sit amet consequat eros. Suspendisse potenti. Duis auctor ipsum eget felis laoreet, non congue eros tincidunt.",
    date: "28 de março, 2025",
    image: "placeholder.svg",
    category: "tutorials",
    author: "Amanda Rocha",
    readTime: "7 min",
  },
  {
    id: 5,
    title: "Por que seu iPad está lento e como resolver",
    excerpt: "Entenda as causas comuns de lentidão em iPads e aprenda soluções práticas para melhorar o desempenho.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend malesuada diam, vel ultricies ligula. Nullam sit amet consequat eros. Suspendisse potenti. Duis auctor ipsum eget felis laoreet, non congue eros tincidunt.",
    date: "22 de março, 2025",
    image: "placeholder.svg",
    category: "tips",
    author: "Lucas Oliveira",
    readTime: "5 min",
  },
  {
    id: 6,
    title: "Apple lança novo programa de reciclagem de dispositivos",
    excerpt: "Conheça a nova iniciativa da Apple para tornar o descarte de dispositivos mais sustentável e ecológico.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend malesuada diam, vel ultricies ligula. Nullam sit amet consequat eros. Suspendisse potenti. Duis auctor ipsum eget felis laoreet, non congue eros tincidunt.",
    date: "15 de março, 2025",
    image: "placeholder.svg",
    category: "news",
    author: "Fernanda Lima",
    readTime: "3 min",
  },
];

// AVISO: Esta página foi migrada para /blog (dinâmico via Strapi)
// Remover ou redirecionar para evitar duplicidade.
const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrar posts por categoria e termo de pesquisa
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
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
                <p className="text-muted-foreground">
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
                {filteredPosts.length > 0 ? (
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
                              <span>{post.date}</span>
                              <span>{post.readTime} de leitura</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                            <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                            <div className="flex items-center justify-between mt-4">
                              <span className="text-sm text-muted-foreground">Por {post.author}</span>
                              <Link to={`/blog/${post.id}`} className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
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
    </div>
  );
};

// AVISO: Use a rota /blog para o novo blog dinâmico
export default Blog;
