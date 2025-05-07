
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { fetchBlogPosts, deleteBlogPost } from "@/lib/strapi";
import { BlogEditor } from "./blog-editor";
import { Edit, Plus, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface BlogManagerProps {
  token: string;
}

export function BlogManager({ token }: BlogManagerProps) {
  const { toast } = useToast();
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("posts");
  const [editingPost, setEditingPost] = useState<any>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [deleteConfirmPost, setDeleteConfirmPost] = useState<any>(null);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      setIsLoading(true);
      const data = await fetchBlogPosts();
      setPosts(data);
    } catch (err) {
      console.error("Error loading blog posts:", err);
      setError("Erro ao carregar os posts. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreatePost = () => {
    setEditingPost(null);
    setIsEditorOpen(true);
  };

  const handleEditPost = (post: any) => {
    setEditingPost(post);
    setIsEditorOpen(true);
  };

  const handleDeletePost = async () => {
    if (!deleteConfirmPost) return;
    
    try {
      await deleteBlogPost(deleteConfirmPost.id, token);
      setPosts(posts.filter((post) => post.id !== deleteConfirmPost.id));
      toast({
        title: "Post excluído",
        description: `"${deleteConfirmPost.attributes.title}" foi removido com sucesso.`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao excluir post",
        description: "Ocorreu um erro ao tentar excluir o post. Por favor, tente novamente.",
      });
    } finally {
      setDeleteConfirmPost(null);
    }
  };

  const handleEditorSuccess = () => {
    setIsEditorOpen(false);
    loadPosts();
  };

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="create">Novo Post</TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Posts do Blog</h2>
            <Button onClick={handleCreatePost}>
              <Plus className="h-4 w-4 mr-2" /> Novo Post
            </Button>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
            </div>
          ) : error ? (
            <div className="text-center py-6">
              <p className="text-destructive">{error}</p>
              <Button 
                onClick={() => loadPosts()}
                className="mt-4"
                variant="outline"
              >
                Tentar novamente
              </Button>
            </div>
          ) : posts.length === 0 ? (
            <Card>
              <CardHeader>
                <CardTitle>Nenhum post encontrado</CardTitle>
                <CardDescription>
                  Comece a criar conteúdo para o seu blog.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={handleCreatePost}>
                  <Plus className="h-4 w-4 mr-2" /> Criar primeiro post
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {posts.map((post) => (
                <Card key={post.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{post.attributes.title}</CardTitle>
                        <CardDescription>
                          {new Date(post.attributes.publishedAt || post.attributes.createdAt).toLocaleDateString()}
                        </CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEditPost(post)}
                        >
                          <Edit className="h-4 w-4 mr-1" /> Editar
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => setDeleteConfirmPost(post)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-2">
                      {post.attributes.excerpt}
                    </p>
                    <div className="flex items-center mt-2">
                      <span className="text-xs px-2 py-1 bg-muted rounded-md">
                        {post.attributes.category || "Geral"}
                      </span>
                      <span className="text-xs ml-2 text-muted-foreground">
                        Slug: {post.attributes.slug}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="create">
          <Card>
            <CardHeader>
              <CardTitle>Criar Novo Post</CardTitle>
              <CardDescription>
                Preencha o formulário para criar um novo post para o blog.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BlogEditor token={token} onSuccess={handleEditorSuccess} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Dialog open={isEditorOpen} onOpenChange={setIsEditorOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingPost ? "Editar Post" : "Criar Novo Post"}
            </DialogTitle>
            <DialogDescription>
              {editingPost
                ? `Editando "${editingPost.attributes.title}"`
                : "Preencha o formulário para criar um novo post para o blog."}
            </DialogDescription>
          </DialogHeader>
          <BlogEditor
            token={token}
            blogPost={editingPost}
            onSuccess={handleEditorSuccess}
          />
        </DialogContent>
      </Dialog>

      <AlertDialog
        open={!!deleteConfirmPost}
        onOpenChange={(open) => !open && setDeleteConfirmPost(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir o post "{deleteConfirmPost?.attributes.title}"? Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeletePost}>
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
