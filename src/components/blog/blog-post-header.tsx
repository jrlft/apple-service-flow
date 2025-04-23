
import { Link } from "react-router-dom";
import { Calendar, ChevronLeft, Clock } from "lucide-react";
import { AnimatedElement } from "@/components/animations/animated-element";
import { LazyImage } from "@/components/shared/lazy-image";

interface BlogPostHeaderProps {
  title: string;
  excerpt: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
}

export function BlogPostHeader({
  title,
  excerpt,
  author,
  authorImage,
  date,
  readTime,
}: BlogPostHeaderProps) {
  return (
    <section className="bg-secondary py-16">
      <div className="container">
        <AnimatedElement>
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-6">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Voltar para o Blog
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{excerpt}</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <LazyImage
                  src={authorImage}
                  alt={author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold">{author}</div>
                <div className="text-sm text-muted-foreground flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {readTime} de leitura
                  </span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
