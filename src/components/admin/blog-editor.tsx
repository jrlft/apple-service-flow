import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, Upload, X } from "lucide-react";

import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BlogEditorProps {
  token: string;
  blogPost?: any;
  onSuccess?: () => void;
}

export function BlogEditor({ token, blogPost, onSuccess }: BlogEditorProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState(blogPost?.attributes?.title || "");
  const [slug, setSlug] = useState(blogPost?.attributes?.slug || "");
  const [excerpt, setExcerpt] = useState(blogPost?.attributes?.excerpt || "");
  const [content, setContent] = useState(blogPost?.attributes?.content || "");
  const [category, setCategory] = useState(blogPost?.attributes?.category || "general");
  const [featuredImage, setFeaturedImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(
    blogPost?.attributes?.featuredImage?.data?.attributes?.url || null
  );

  // Generate slug automatically from title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    
    // Only auto-generate slug if it hasn't been manually edited
    if (!blogPost || !blogPost.attributes.slug) {
      const newSlug = newTitle
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .replace(/\s+/g, "-");
      setSlug(newSlug);
    }
  };

  // Handle image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFeaturedImage(file);
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate saving (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Funcionalidade em desenvolvimento",
        description: "O sistema de blog será implementado em breve.",
      });

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Error saving blog post:", error);
      toast({
        variant: "destructive",
        title: "Erro ao salvar post",
        description: "Ocorreu um erro ao tentar salvar o post. Por favor, tente novamente.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">Título</Label>
          <Input
            id="title"
            placeholder="Digite o título do artigo"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="slug">Slug</Label>
          <Input
            id="slug"
            placeholder="url-do-artigo"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
          />
          <p className="text-xs text-muted-foreground">
            Identificador único para URL: apenas letras, números e hífens.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Categoria</Label>
          <Select
            value={category}
            onValueChange={setCategory}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione uma categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">Geral</SelectItem>
              <SelectItem value="repairs">Reparos</SelectItem>
              <SelectItem value="tips">Dicas</SelectItem>
              <SelectItem value="news">Notícias</SelectItem>
              <SelectItem value="tutorials">Tutoriais</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="excerpt">Resumo</Label>
          <Textarea
            id="excerpt"
            placeholder="Breve descrição do artigo (exibido nos resumos)"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            required
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="image">Imagem Destacada</Label>
          <div className="flex items-center gap-4">
            <label
              htmlFor="image-upload"
              className="flex items-center justify-center w-full h-12 px-4 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50"
            >
              <Upload className="w-4 h-4 mr-2" />
              Selecionar imagem
              <input
                id="image-upload"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
            {featuredImage && (
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => {
                  setFeaturedImage(null);
                  setPreview(null);
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          {preview && (
            <div className="mt-2">
              <p className="text-xs text-muted-foreground mb-2">Preview:</p>
              <img
                src={preview}
                alt="Preview"
                className="w-full max-h-40 object-cover rounded-md"
              />
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="content">Conteúdo</Label>
          <Textarea
            id="content"
            placeholder="Conteúdo completo do artigo (suporta HTML)"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="min-h-[300px]"
          />
          <p className="text-xs text-muted-foreground">
            Você pode usar HTML para formatação, como &lt;h2&gt;, &lt;p&gt;, &lt;strong&gt;, etc.
          </p>
        </div>
      </div>

      <Card className="overflow-hidden">
        <CardContent className="p-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Preview</h3>
            <div className="prose prose-sm max-w-none border rounded-md p-4">
              <h1>{title || "Título do artigo"}</h1>
              <p className="text-muted-foreground">{excerpt || "Resumo do artigo"}</p>
              {content ? (
                <div dangerouslySetInnerHTML={{ __html: content }} />
              ) : (
                <p>O conteúdo do artigo aparecerá aqui.</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-4">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>Salvando...</>
          ) : blogPost ? (
            <>
              <Check className="mr-2 h-4 w-4" /> Atualizar post
            </>
          ) : (
            <>
              <ArrowRight className="mr-2 h-4 w-4" /> Publicar post
            </>
          )}
        </Button>
      </div>
    </form>
  );
}