
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimatedElement } from "@/components/animations/animated-element";
import { Button } from "@/components/ui/button";
import { LazyImage } from "@/components/shared/lazy-image";
import { Facebook, Twitter, Linkedin, Clock, Calendar, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Posts simulados para o blog (mesmo array usado na página Blog)
const BLOG_POSTS = [
  {
    id: "1",
    title: "Como saber se é hora de trocar a bateria do seu iPhone",
    excerpt: "Saiba identificar os principais sinais de que sua bateria está no fim e entenda o momento ideal para substituí-la.",
    content: `<p>A bateria é um componente vital em qualquer dispositivo móvel, e saber quando substituí-la pode ajudar a prolongar significativamente a vida útil do seu iPhone. Aqui estão os principais sinais de que chegou a hora de uma troca:</p>
    
    <h2>1. Bateria descarrega rapidamente</h2>
    <p>Se você perceber que seu iPhone está descarregando muito mais rápido do que antes, mesmo com uso normal, isso é um sinal claro de que a bateria está se deteriorando. Uma bateria saudável deve manter a carga por pelo menos um dia inteiro com uso moderado.</p>
    
    <h2>2. O iPhone desliga inesperadamente</h2>
    <p>Quando a bateria está muito degradada, o iPhone pode desligar repentinamente, mesmo mostrando que ainda tem carga. Isso ocorre porque a bateria não consegue mais fornecer energia suficiente para o processador durante picos de demanda.</p>
    
    <h2>3. A porcentagem de bateria oscila</h2>
    <p>Alterações bruscas na porcentagem da bateria (por exemplo, pular de 50% para 20% em poucos minutos) indicam que o sensor de bateria não está mais calibrado corretamente devido à degradação da célula.</p>
    
    <h2>4. O iPhone esquenta muito</h2>
    <p>Enquanto é normal que o dispositivo esquente durante uso intensivo ou carregamento, um aquecimento excessivo pode ser sinal de problema na bateria.</p>
    
    <h2>5. Verifique a Saúde da Bateria</h2>
    <p>No iOS, vá em Configurações > Bateria > Saúde da Bateria. Se a capacidade máxima estiver abaixo de 80%, é recomendável considerar a substituição.</p>
    
    <p>Substituir a bateria no momento certo não só melhora o desempenho do seu iPhone, mas também evita possíveis danos a outros componentes. Sempre procure um serviço autorizado para garantir o uso de peças originais e um serviço de qualidade.</p>`,
    date: "15 de abril, 2025",
    image: "placeholder.svg",
    category: "repairs",
    author: "Carlos Silva",
    authorImage: "placeholder.svg",
    authorBio: "Técnico certificado Apple com mais de 10 anos de experiência em reparos de dispositivos móveis.",
    readTime: "5 min",
  },
  {
    id: "2",
    title: "Dicas para proteger seu MacBook de danos físicos",
    excerpt: "Conheça as melhores práticas para manter seu MacBook protegido contra quedas, poeira, líquidos e outros danos comuns.",
    content: `<p>MacBooks são investimentos significativos e protegê-los contra danos físicos é essencial para garantir sua longevidade. Aqui estão algumas dicas importantes:</p>
    
    <h2>1. Use uma capa protetora de qualidade</h2>
    <p>Invista em uma capa rígida que proteja tanto a parte superior quanto inferior do MacBook. Procure modelos que permitam ventilação adequada para evitar superaquecimento.</p>
    
    <h2>2. Nunca deixe líquidos próximos ao MacBook</h2>
    <p>Danos por líquidos são uma das causas mais comuns de problemas em MacBooks. Use garrafas com tampa quando estiver trabalhando e mantenha bebidas a uma distância segura do seu dispositivo.</p>
    
    <h2>3. Utilize uma película protetora para a tela</h2>
    <p>Além de proteger contra arranhões, uma boa película pode reduzir a pressão sobre a tela quando o MacBook está fechado, evitando marcas do teclado na tela.</p>
    
    <h2>4. Invista em uma bolsa adequada</h2>
    <p>Ao transportar seu MacBook, use uma bolsa com compartimento acolchoado específico para laptops. Isso oferece proteção contra impactos e quedas durante o transporte.</p>
    
    <h2>5. Cuidado com a pressão sobre a tela</h2>
    <p>Nunca coloque objetos sobre o MacBook quando fechado, pois isso pode causar pressão na tela e danificar o display.</p>
    
    <p>Seguindo estas dicas simples, você pode prolongar significativamente a vida útil do seu MacBook e evitar reparos caros. Lembre-se: prevenir é sempre mais barato que consertar!</p>`,
    date: "08 de abril, 2025",
    image: "placeholder.svg",
    category: "tips",
    author: "Mariana Costa",
    authorImage: "placeholder.svg",
    authorBio: "Especialista em Apple Care e consultora de tecnologia para empresas.",
    readTime: "6 min",
  },
];

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = BLOG_POSTS.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <div className="container">
            <div className="bg-white p-12 rounded-lg shadow-md text-center">
              <h1 className="text-3xl font-bold mb-4">Post não encontrado</h1>
              <p className="text-muted-foreground mb-8">
                O artigo que você está procurando não existe ou foi removido.
              </p>
              <Button asChild>
                <Link to="/blog">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Voltar para o Blog
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-secondary py-16">
          <div className="container">
            <AnimatedElement>
              <div className="max-w-3xl mx-auto">
                <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-6">
                  <ChevronLeft className="mr-1 h-4 w-4" />
                  Voltar para o Blog
                </Link>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
                <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <LazyImage
                      src={post.authorImage}
                      alt={post.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{post.author}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {post.readTime} de leitura
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <AnimatedElement>
                <div className="mb-8 rounded-lg overflow-hidden h-[400px]">
                  <LazyImage
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                  <div className="prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

                  {/* Share Buttons */}
                  <div className="mt-12 pt-6 border-t flex items-center justify-between flex-wrap gap-4">
                    <div className="font-semibold">Compartilhe este artigo:</div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Facebook className="h-5 w-5" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Twitter className="h-5 w-5" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Author Bio */}
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-xl font-bold mb-4">Sobre o Autor</h2>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <LazyImage
                        src={post.authorImage}
                        alt={post.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{post.author}</h3>
                      <p className="text-muted-foreground">{post.authorBio}</p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* Related Posts Section */}
        <section className="py-12 bg-secondary/30">
          <div className="container">
            <AnimatedElement>
              <h2 className="text-2xl font-bold mb-8 text-center">Artigos Relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {BLOG_POSTS.filter(p => p.id !== postId).slice(0, 3).map((relatedPost) => (
                  <div key={relatedPost.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 relative">
                      <LazyImage 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold mb-2">{relatedPost.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{relatedPost.excerpt.substring(0, 100)}...</p>
                      <Link to={`/blog/${relatedPost.id}`} className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                        Ler artigo <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedElement>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
