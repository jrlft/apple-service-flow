
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedElement } from "@/components/animations/animated-element";
import { LazyImage } from "@/components/shared/lazy-image";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
}

interface BlogPostRelatedProps {
  currentPostId: string;
  posts: BlogPost[];
}

export function BlogPostRelated({ currentPostId, posts = [] }: BlogPostRelatedProps) {
  const relatedPosts = posts.filter(p => p.id !== currentPostId).slice(0, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-secondary/30">
      <div className="container">
        <AnimatedElement>
          <h2 className="text-2xl font-bold mb-8 text-center">Artigos Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
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
                  <p className="text-muted-foreground text-sm mb-4">
                    {relatedPost.excerpt.substring(0, 100)}...
                  </p>
                  <Link 
                    to={`/blog/${relatedPost.id}`} 
                    className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Ler artigo <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
