
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimatedElement } from "@/components/animations/animated-element";
import { BlogPostHeader } from "@/components/blog/blog-post-header";
import { BlogPostAuthor } from "@/components/blog/blog-post-author";
import { BlogPostRelated } from "@/components/blog/blog-post-related";
import { Helmet } from "react-helmet";
import { SAMPLE_POSTS } from "./sampleData";

type Post = {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  createdAt: string;
  author: string;
  authorImage: string;
  authorBio: string;
  featuredImage: string;
  readTime: string;
  category: string;
};

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        // Tentar buscar do Strapi primeiro
        const apiUrl = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337/api";
        const response = await fetch(
          `${apiUrl}/blog-posts?filters[slug][$eq]=${slug}&populate=*`,
          { signal: AbortSignal.timeout(3000) }
        );
        
        if (response.ok) {
          const data = await response.json();
          
          if (data.data.length > 0) {
            const item = data.data[0];
            setPost({
              id: item.id,
              title: item.attributes.title,
              slug: item.attributes.slug,
              content: item.attributes.content,
              excerpt: item.attributes.excerpt || "",
              createdAt: item.attributes.publishedAt || item.attributes.createdAt,
              author: item.attributes.author?.data?.attributes?.name || "Admin",
              authorImage: item.attributes.author?.data?.attributes?.avatar?.data?.attributes?.url || "placeholder.svg",
              authorBio: item.attributes.author?.data?.attributes?.bio || "Especialista em tecnologia Apple.",
              featuredImage: item.attributes.featuredImage?.data?.attributes?.url || "placeholder.svg",
              readTime: `${Math.ceil(item.attributes.content.length / 1500)} min`,
              category: item.attributes.category || "Geral"
            });
            
            // Fetch related posts
            const relatedResponse = await fetch(
              `${apiUrl}/blog-posts?filters[id][$ne]=${item.id}&populate=*&pagination[limit]=3`,
              { signal: AbortSignal.timeout(3000) }
            );
            
            if (relatedResponse.ok) {
              const relatedData = await relatedResponse.json();
              setRelatedPosts(relatedData.data.map((related: any) => ({
                id: related.id,
                title: related.attributes.title,
                excerpt: related.attributes.excerpt || "",
                image: related.attributes.featuredImage?.data?.attributes?.url || "placeholder.svg",
                slug: related.attributes.slug
              })));
            }
          } else {
            // Use sample post if not found
            const samplePost = SAMPLE_POSTS.find(p => 
              p.slug === slug || p.id.toString() === slug
            );
            
            if (samplePost) {
              setPost({
                ...samplePost,
                authorImage: "placeholder.svg",
                authorBio: "Especialista em tecnologia Apple com vasta experiência em reparos e manutenção de dispositivos."
              });
              
              // Set sample related posts
              setRelatedPosts(SAMPLE_POSTS.filter(p => p.id !== samplePost.id)
                .slice(0, 3)
                .map(p => ({
                  id: p.id,
                  title: p.title,
                  excerpt: p.excerpt,
                  image: p.featuredImage || "placeholder.svg",
                  slug: p.slug
                }))
              );
            }
          }
        } else {
          // Use sample post if API fails
          const samplePost = SAMPLE_POSTS.find(p => 
            p.slug === slug || p.id.toString() === slug
          );
          
          if (samplePost) {
            setPost({
              ...samplePost,
              authorImage: "placeholder.svg",
              authorBio: "Especialista em tecnologia Apple com vasta experiência em reparos e manutenção de dispositivos."
            });
            
            // Set sample related posts
            setRelatedPosts(SAMPLE_POSTS.filter(p => p.id !== samplePost.id)
              .slice(0, 3)
              .map(p => ({
                id: p.id,
                title: p.title,
                excerpt: p.excerpt,
                image: p.featuredImage || "placeholder.svg",
                slug: p.slug
              }))
            );
          }
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        
        // Use sample post in case of error
        const samplePost = SAMPLE_POSTS.find(p => 
          p.slug === slug || p.id.toString() === slug
        );
        
        if (samplePost) {
          setPost({
            ...samplePost,
            authorImage: "placeholder.svg",
            authorBio: "Especialista em tecnologia Apple com vasta experiência em reparos e manutenção de dispositivos."
          });
          
          // Set sample related posts
          setRelatedPosts(SAMPLE_POSTS.filter(p => p.id !== samplePost.id)
            .slice(0, 3)
            .map(p => ({
              id: p.id,
              title: p.title,
              excerpt: p.excerpt,
              image: p.featuredImage || "placeholder.svg",
              slug: p.slug
            }))
          );
        }
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchPost();
  }, [slug]);
  
  // Format date for display
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-32 pb-16">
          <div className="container">
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-32 pb-16">
          <div className="container">
            <div className="bg-white p-12 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-bold mb-4">Artigo não encontrado</h2>
              <p className="text-muted-foreground mb-6">
                O artigo que você está procurando não foi encontrado ou pode ter sido removido.
              </p>
              <Link to="/blog" className="text-primary font-medium hover:underline">
                Voltar para o Blog
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{post.title} | Link TI - Centro de Serviço Autorizado Apple</title>
        <meta name="description" content={post.excerpt} />
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
      <main className="flex-grow">
        <BlogPostHeader 
          title={post.title}
          excerpt={post.excerpt}
          author={post.author}
          authorImage={post.authorImage}
          date={formatDate(post.createdAt)}
          readTime={post.readTime}
        />
        
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <AnimatedElement>
                  <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <article className="prose prose-lg max-w-none">
                      <div dangerouslySetInnerHTML={{ __html: post.content }} className="text-justify" />
                    </article>
                  </div>
                </AnimatedElement>
              </div>
              
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <AnimatedElement direction="right">
                    <BlogPostAuthor 
                      author={post.author}
                      authorImage={post.authorImage}
                      authorBio={post.authorBio}
                    />
                  </AnimatedElement>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {relatedPosts.length > 0 && (
          <BlogPostRelated 
            currentPostId={post.id.toString()}
            posts={relatedPosts}
          />
        )}
      </main>
      <Footer />
      <div className="text-[6px] text-muted-foreground ml-4 mb-1">
        Não foi possível estabelecer conexão com o Strapi CMS. Exibindo conteúdo estático.
      </div>
    </div>
  );
}
