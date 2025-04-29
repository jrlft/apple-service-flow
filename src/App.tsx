
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blog from "./pages/blog";
import BlogPost from "./pages/blog/BlogPost";
import ContatoWhats from "./pages/contato-whats";
import Servicos from "./pages/Servicos";
import ServicoIphone from "./pages/servicos/ServicoIphone";
import ServicoIpad from "./pages/servicos/ServicoIpad";
import ServicoMac from "./pages/servicos/ServicoMac";
import ServicoWatch from "./pages/servicos/ServicoWatch";
import Precos from "./pages/Precos";
import Contato from "./pages/Contato";
import Cookies from "./pages/Cookies";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";
import Garantia from "./pages/Garantia";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Admin from "./pages/Admin";
import { CookieConsent } from "./components/shared/cookie-consent";
import CursoIphonePage from "./pages/curso-iphone";
import IniciantePage from "./pages/curso-iphone/iniciante";
import InicianteConteudos from "./pages/curso-iphone/iniciante/conteudos";
import InicianteQuiz from "./pages/curso-iphone/iniciante/quiz";
import IntermediarioPage from "./pages/curso-iphone/intermediario";
import IntermediarioConteudos from "./pages/curso-iphone/intermediario/conteudos";
import IntermediarioQuiz from "./pages/curso-iphone/intermediario/quiz";
import AvancadoPage from "./pages/curso-iphone/avancado";
import AvancadoConteudos from "./pages/curso-iphone/avancado/conteudos";
import AvancadoQuiz from "./pages/curso-iphone/avancado/quiz";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/servicos/iphone" element={<ServicoIphone />} />
          <Route path="/servicos/ipad" element={<ServicoIpad />} />
          <Route path="/servicos/mac" element={<ServicoMac />} />
          <Route path="/servicos/watch" element={<ServicoWatch />} />
          <Route path="/precos" element={<Precos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/garantia" element={<Garantia />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          <Route path="/admin" element={<Admin />} />
          {/* Rotas do Curso de iPhone */}
          <Route path="/curso-iphone" element={<CursoIphonePage />} />
          <Route path="/curso-iphone/iniciante" element={<IniciantePage />} />
          <Route path="/curso-iphone/iniciante/conteudos" element={<InicianteConteudos />} />
          <Route path="/curso-iphone/iniciante/quiz" element={<InicianteQuiz />} />
          <Route path="/curso-iphone/intermediario" element={<IntermediarioPage />} />
          <Route path="/curso-iphone/intermediario/conteudos" element={<IntermediarioConteudos />} />
          <Route path="/curso-iphone/intermediario/quiz" element={<IntermediarioQuiz />} />
          <Route path="/curso-iphone/avancado" element={<AvancadoPage />} />
          <Route path="/curso-iphone/avancado/conteudos" element={<AvancadoConteudos />} />
          <Route path="/curso-iphone/avancado/quiz" element={<AvancadoQuiz />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contato-whats" element={<ContatoWhats />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
