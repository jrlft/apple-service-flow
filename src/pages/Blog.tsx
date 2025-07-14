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
import { useLanguage } from "@/contexts/LanguageContext";

// Mock categories for blog
const getCategoriesForLanguage = (t: any) => [
  { id: "all", name: t('blog.categories.all') },
  { id: "repairs", name: t('blog.categories.repairs') },
  { id: "tips", name: t('blog.categories.tips') },
  { id: "news", name: t('blog.categories.news') },
  { id: "tutorials", name: t('blog.categories.tutorials') },
];

// Mock blog posts
const getBlogPostsForLanguage = (t: any) => [
  {
    id: 1,
    title: t('blog.posts.battery.title'),
    excerpt: t('blog.posts.battery.excerpt'),
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend malesuada diam, vel ultricies ligula. Nullam sit amet consequat eros. Suspendisse potenti. Duis auctor ipsum eget felis laoreet, non congue eros tincidunt.",
    date: t('blog.posts.battery.date'),
    image: "placeholder.svg",
    category: "repairs",
    readTime: t('blog.posts.battery.readTime'),
  },
  {
    id: 2,
    title: t('blog.posts.macbook.title'),
    excerpt: t('blog.posts.macbook.excerpt'),
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend malesuada diam, vel ultricies ligula. Nullam sit amet consequat eros. Suspendisse potenti. Duis auctor ipsum eget felis laoreet, non congue eros tincidunt.",
    date: t('blog.posts.macbook.date'),
    image: "placeholder.svg",
    category: "tips",
    readTime: t('blog.posts.macbook.readTime'),
  },
  {
    id: 3,
    title: t('blog.posts.ios.title'),
    excerpt: t('blog.posts.ios.excerpt'),
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend malesuada diam, vel ultricies ligula. Nullam sit amet consequat eros. Suspendisse potenti. Duis auctor ipsum eget felis laoreet, non congue eros tincidunt.",
    date: t('blog.posts.ios.date'),
    image: "placeholder.svg",
    category: "news",
    readTime: t('blog.posts.ios.readTime'),
  },
  {
    id: 4,
    title: t('blog.posts.backup.title'),
    excerpt: t('blog.posts.backup.excerpt'),
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend malesuada diam, vel ultricies ligula. Nullam sit amet consequat eros. Suspendisse potenti. Duis auctor ipsum eget felis laoreet, non congue eros tincidunt.",
    date: t('blog.posts.backup.date'),
    image: "placeholder.svg",
    category: "tutorials",
    readTime: t('blog.posts.backup.readTime'),
  },
  {
    id: 5,
    title: t('blog.posts.ipad.title'),
    excerpt: t('blog.posts.ipad.excerpt'),
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend malesuada diam, vel ultricies ligula. Nullam sit amet consequat eros. Suspendisse potenti. Duis auctor ipsum eget felis laoreet, non congue eros tincidunt.",
    date: t('blog.posts.ipad.date'),
    image: "placeholder.svg",
    category: "tips",
    readTime: t('blog.posts.ipad.readTime'),
  },
  {
    id: 6,
    title: t('blog.posts.recycling.title'),
    excerpt: t('blog.posts.recycling.excerpt'),
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend malesuada diam, vel ultricies ligula. Nullam sit amet consequat eros. Suspendisse potenti. Duis auctor ipsum eget felis laoreet, non congue eros tincidunt.",
    date: t('blog.posts.recycling.date'),
    image: "placeholder.svg",
    category: "news",
    readTime: t('blog.posts.recycling.readTime'),
  },
];


// Remover ou redirecionar para evitar duplicidade.
const Blog = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  
  const CATEGORIES = getCategoriesForLanguage(t);
  const BLOG_POSTS = getBlogPostsForLanguage(t);

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
                  title={t('blog.title')} 
                  subtitle={t('blog.subtitle')} 
                  centered
                />
                <p className="text-muted-foreground">
                  {t('blog.description')}
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
                    <h3 className="text-lg font-semibold mb-4">{t('blog.search')}</h3>
                    <div className="mb-6">
                      <Input
                        placeholder={t('blog.searchPlaceholder')}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="mb-2"
                      />
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-4">{t('blog.categoriesTitle')}</h3>
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
                      <h3 className="text-lg font-semibold mb-4">{t('blog.newsletter.title')}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {t('blog.newsletter.description')}
                      </p>
                      <Input
                        placeholder={t('blog.newsletter.placeholder')}
                        type="email"
                        className="mb-2"
                      />
                      <Button className="w-full">{t('blog.newsletter.subscribe')}</Button>
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
                              <span>{post.readTime}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                            <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                            <div className="flex items-center justify-end mt-4">
                              <Link to={`/blog/${post.id}`} className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                                {t('blog.readMore')} <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </AnimatedElement>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white p-12 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-medium mb-2">{t('blog.noArticles')}</h3>
                    <p className="text-muted-foreground">
                      {t('blog.noArticlesDescription')}
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => {
                        setSelectedCategory("all");
                        setSearchTerm("");
                      }}
                    >
                      {t('blog.clearFilters')}
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
