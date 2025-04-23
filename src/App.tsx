
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Servicos from "./pages/Servicos";
import ServicoIphone from "./pages/servicos/ServicoIphone";
import ServicoIpad from "./pages/servicos/ServicoIpad";
import ServicoMac from "./pages/servicos/ServicoMac";
import ServicoWatch from "./pages/servicos/ServicoWatch";
import Precos from "./pages/Precos";
import Contato from "./pages/Contato";
import Cookies from "./pages/Cookies";
import Privacidade from "./pages/Privacidade";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import { CookieConsent } from "./components/shared/cookie-consent";

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
