import React from "react";

export default function AvancadoConteudos() {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Conteúdo do Nível Avançado</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">1. Arquiteturas de Apps</h3>
        <p className="mb-2">Explore padrões como MVVM e Clean Architecture para apps escaláveis e testáveis.</p>
        <img src="/images/arquitetura.png" alt="Arquitetura" className="rounded-lg mb-4" />
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">2. Testes</h3>
        <p className="mb-2">Implemente testes unitários e de interface para garantir a qualidade do seu app.</p>
        <img src="/images/testes.png" alt="Testes" className="rounded-lg mb-4" />
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">3. Integração com Serviços Externos</h3>
        <p className="mb-2">Utilize Firebase, notificações push e outros serviços para enriquecer seu app.</p>
        <img src="/images/firebase.png" alt="Firebase" className="rounded-lg mb-4" />
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">4. Publicação na App Store</h3>
        <p className="mb-2">Prepare, assine e publique seu app na App Store com segurança.</p>
        <img src="/images/appstore.png" alt="App Store" className="rounded-lg mb-4" />
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">5. Performance e Acessibilidade</h3>
        <p className="mb-2">Otimize a performance e torne seu app acessível para todos os usuários.</p>
        <img src="/images/performance.png" alt="Performance" className="rounded-lg mb-4" />
      </div>
    </div>
  );
}
