
import { LazyImage } from "@/components/shared/lazy-image";

interface BlogPostAuthorProps {
  author: string;
  authorImage: string;
  authorBio: string;
}

export function BlogPostAuthor({ author, authorImage, authorBio }: BlogPostAuthorProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-xl font-bold mb-4">Sobre o Autor</h2>
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <LazyImage
            src={authorImage}
            alt={author}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{author}</h3>
          <p className="text-muted-foreground">{authorBio}</p>
        </div>
      </div>
    </div>
  );
}
