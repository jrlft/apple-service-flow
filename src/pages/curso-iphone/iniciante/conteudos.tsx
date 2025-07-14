import React from "react";

export default function InicianteConteudos() {
  // Exemplo de conteúdo interativo
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Conteúdo do Nível Iniciante</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">1. Introdução ao iOS</h3>
        <p className="mb-2">Descubra o que é desenvolvimento iOS e as oportunidades da área.</p>
        <img src="/images/iphone-intro.png" alt="Introdução iOS" className="rounded-lg mb-4" />
        <video controls className="w-full rounded-lg mb-4">
          <source src="/videos/intro-ios.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
      </div>
      
    </div>
  );
}
