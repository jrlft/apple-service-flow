import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { DeploymentGuide } from "@/components/admin/deployment-guide";
import { SiteEditingGuide } from "@/components/admin/site-editing-guide";
import { BlogManager } from "@/components/admin/blog-manager";

const Admin = () => {
  const [token, setToken] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const { toast } = useToast();

  useEffect(() => {
    // Check if token is stored in localStorage on component mount
    const storedToken = localStorage.getItem('adminToken');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const password = (e.target.elements.namedItem('password') as HTMLInputElement)?.value;

    if (password === process.env.REACT_APP_ADMIN_PASSWORD) {
      // Store token in localStorage
      localStorage.setItem('adminToken', 'adminTokenValue');
      setToken('adminTokenValue');
      toast({
        title: "Login efetuado com sucesso!",
        description: "Você está logado como administrador.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Erro ao logar",
        description: "Senha incorreta. Por favor, tente novamente.",
      });
    }
  };

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem('adminToken');
    setToken(null);
    toast({
      title: "Logout efetuado com sucesso!",
      description: "Você foi desconectado da área administrativa.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container">
          {!token ? (
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
              <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="password">Senha:</Label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Digite a senha"
                    required
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Admin Nav */}
              <div className="flex space-x-4 overflow-x-auto pb-2 border-b">
                <Button 
                  variant={activeTab === 'dashboard' ? 'default' : 'outline'} 
                  onClick={() => setActiveTab('dashboard')}
                >
                  Dashboard
                </Button>
                <Button 
                  variant={activeTab === 'blog' ? 'default' : 'outline'} 
                  onClick={() => setActiveTab('blog')}
                >
                  Blog
                </Button>
                <Button 
                  variant={activeTab === 'deployment' ? 'default' : 'outline'} 
                  onClick={() => setActiveTab('deployment')}
                >
                  Deployment Guide
                </Button>
                <Button 
                  variant={activeTab === 'editing' ? 'default' : 'outline'} 
                  onClick={() => setActiveTab('editing')}
                >
                  Editing Guide
                </Button>
                <Button 
                  variant='outline'
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
              
              {/* Tab Content */}
              <div>
                {activeTab === 'dashboard' && (
                  <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-xl font-bold mb-4">Dashboard</h2>
                    <p>Bem-vindo ao painel de administração. Escolha uma opção acima para começar.</p>
                  </div>
                )}
                
                {activeTab === 'blog' && (
                  <BlogManager token={token} />
                )}
                
                {activeTab === 'deployment' && (
                  <DeploymentGuide />
                )}
                
                {activeTab === 'editing' && (
                  <SiteEditingGuide />
                )}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
