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
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-primary text-white">
      {/* Imagem de fundo no topo */}
      <div
        className="absolute top-0 left-0 w-full h-52 md:h-72 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${imagemServico})` }}
      ></div>
      <main className="relative z-10 flex flex-col items-center justify-center flex-grow w-full px-4">
        {/* Logomarca */}
        <img src="/lovable-uploads/7f9b1c93-62c6-4d43-9a5d-58879b1a830c.png" alt="Link TI - Autorizada Apple" className="mb-8 w-48 h-auto bg-white rounded-lg p-2 shadow-lg" />
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Bem vindo à Link TI!</h1>
        <p className="text-2xl md:text-3xl font-semibold mb-4 text-center max-w-2xl">
          Você está sendo redirecionado ao nosso Whatsapp.<br />
          Aguarde alguns segundos.
        </p>
        {/* Spinner Apple-like */}
        <div className="flex justify-center my-6">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-white"></div>
        </div>
        <div className="text-lg text-center">
          Caso não seja redirecionado automaticamente, <a href={WHATSAPP_URL} className="underline text-white font-bold">clique aqui</a>.
        </div>
        {/* Logo triplicado no tamanho */}
        <img src="/lovable-uploads/7f9b1c93-62c6-4d43-9a5d-58879b1a830c.png" alt="Link TI - Autorizada Apple" className="mt-8 w-96 h-auto bg-white rounded-lg p-4 shadow-lg" />
      </main>
      </div>
    </>
  );
}
