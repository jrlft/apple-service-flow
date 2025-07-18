import { useEffect } from "react";
import { Helmet } from "react-helmet";
import imagemServico from "@/assets/imagemservico.png";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=556536216000&text=Ol%C3%A1,%20achei%20voc%C3%AAs%20no%20Google%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20da%20sua%20autorizada%20Apple";

export default function ContatoWhats() {
  useEffect(() => {
    // Bloquear completamente todas as tags do Google para esta página
    
    // Desabilitar gtag globalmente para esta página
    if ((window as any).gtag) {
      (window as any).gtag = () => {}; // Anula completamente o gtag
    }
    
    // Bloquear dataLayer do Google
    if ((window as any).dataLayer) {
      (window as any).dataLayer = [];
    }
    
    // Remover scripts do Google se existirem
    const googleScripts = document.querySelectorAll('script[src*="googletagmanager"], script[src*="google-analytics"], script[src*="gtag"]');
    googleScripts.forEach(script => script.remove());
    
    // Bloquear qualquer tentativa de carregar Google Ads
    const originalFetch = window.fetch;
    window.fetch = function(...args) {
      const url = args[0] as string;
      if (url && (url.includes('googletagmanager') || url.includes('google-analytics') || url.includes('gtag'))) {
        return Promise.reject(new Error('Google tracking blocked on this page'));
      }
      return originalFetch.apply(this, args);
    };

    const timer = setTimeout(() => {
      window.location.href = WHATSAPP_URL;
    }, 4000);
    
    return () => {
      clearTimeout(timer);
      // Restaurar fetch original ao sair da página
      window.fetch = originalFetch;
    };
  }, []);

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="bingbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <title>Redirecionamento - Link TI</title>
      </Helmet>
      <div className="min-h-screen bg-primary">
        {/* Imagem de fundo no topo */}
        <div
          className="w-full h-48 md:h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${imagemServico})` }}
        ></div>
        
        {/* Conteúdo principal */}
        <main className="flex flex-col items-center justify-center px-4 py-6 md:py-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center text-white">Bem vindo à Link TI!</h1>
          <p className="text-lg md:text-xl font-semibold mb-4 text-center max-w-2xl text-white/90">
            Você está sendo redirecionado ao nosso Whatsapp.<br />
            Aguarde alguns segundos.
          </p>
          
          {/* Spinner Apple-like */}
          <div className="flex justify-center my-4 md:my-6">
            <div className="animate-spin rounded-full h-8 w-8 md:h-10 md:w-10 border-t-4 border-b-4 border-white"></div>
          </div>
          
          <div className="text-sm md:text-base text-center mb-6 md:mb-8 text-white/80">
            Caso não seja redirecionado automaticamente, <a href={WHATSAPP_URL} className="underline text-white font-bold hover:text-white/90">clique aqui</a>.
          </div>
          
          {/* Logo */}
          <img src="/lovable-uploads/7f9b1c93-62c6-4d43-9a5d-58879b1a830c.png" alt="Link TI - Autorizada Apple" className="w-72 md:w-96 h-auto bg-white rounded-lg p-4 shadow-lg" />
        </main>
      </div>
    </>
  );
}
