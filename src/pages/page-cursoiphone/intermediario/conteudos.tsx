import React from "react";

export default function IntermediarioConteudos() {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Conteúdo do Nível Intermediário</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">1. Swift Avançado</h3>
        <p className="mb-2">Aprofunde em protocolos, closures e enums para criar código mais flexível e reutilizável.</p>
        <img src="/images/swift-avancado.png" alt="Swift Avançado" className="rounded-lg mb-4" />
        <video controls className="w-full rounded-lg mb-4">
          <source src="/videos/swift-avancado.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">2. Navegação Avançada</h3>
        <p className="mb-2">Implemente navegação com Tab Bar, Navigation Stack e navegação programática.</p>
        <img src="/images/navegacao-avancada.png" alt="Navegação Avançada" className="rounded-lg mb-4" />
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">3. Consumo de APIs</h3>
        <p className="mb-2">Aprenda a buscar dados de APIs REST, fazer parsing de JSON e exibir informações dinâmicas.</p>
        <img src="/images/apis.png" alt="APIs" className="rounded-lg mb-4" />
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">4. Persistência de Dados</h3>
        <p className="mb-2">Utilize UserDefaults e CoreData para salvar informações localmente no app.</p>
        <img src="/images/persistencia.png" alt="Persistência de Dados" className="rounded-lg mb-4" />
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">5. Animações e Interatividade</h3>
        <p className="mb-2">Crie animações fluidas e elementos interativos usando SwiftUI.</p>
        <img src="/images/animacoes.png" alt="Animações" className="rounded-lg mb-4" />
      </div>
    </div>
  );
}
