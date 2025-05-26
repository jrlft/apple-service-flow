
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimatedElement } from "@/components/animations/animated-element";
import { getSamplePost } from "./sampleData";
import { BlogPostRelated } from "@/components/blog/blog-post-related";
import { BlogPostShare } from "@/components/blog/blog-post-share";
import { BlogPostHeader } from "@/components/blog/blog-post-header";

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        setIsLoading(true);
        const postData = await getSamplePost(postId);
        setPost(postData);
        const sampleRelatedPosts = await Promise.resolve([
          {
            id: "related1",
            title: "Como proteger seu iPhone contra quedas",
            excerpt: "Dicas e truques para evitar danos no seu dispositivo.",
            image: "placeholder.svg"
          },
          {
            id: "related2",
            title: "Dicas para economizar bateria",
            excerpt: "Aprenda a fazer sua bateria durar mais durante o dia.",
            image: "placeholder.svg"
          },
          {
            id: "related3",
            title: "Novidades do iOS 17",
            excerpt: "Conheça os recursos mais importantes da nova versão.",
            image: "placeholder.svg"
          }
        ]);
        setRelatedPosts(sampleRelatedPosts);
      } catch (error) {
        console.error("Error loading post:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadPost();
  }, [postId]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <div className="container">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h1 className="text-2xl font-bold mb-4">Post não encontrado</h1>
              <p className="mb-6">O artigo que você está procurando não existe ou foi removido.</p>
              <Link to="/blog" className="text-primary hover:underline">
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
      <Navbar />
      
      {/* Header */}
      <BlogPostHeader
        title={post.title}
        excerpt={post.excerpt}
        date={post.date}
        readTime={post.readTime}
      />
      
      {/* Content */}
      <main className="py-12 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main content */}
            <div className="lg:col-span-8">
              <AnimatedElement>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  {post.image && (
                    <div className="h-80 relative">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="prose max-w-none text-justify">
                      {post.content.split('\n\n').map((paragraph: string, index: number) => (
                        <p key={index} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Share */}
                <div className="mt-8">
                  <BlogPostShare />
                </div>
              </AnimatedElement>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <AnimatedElement delay={0.2}>
                {/* Related posts */}
                <BlogPostRelated currentPostId={post.id} posts={relatedPosts} />
              </AnimatedElement>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
