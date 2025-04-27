import React from "react";
import { Link } from "react-router-dom";

export default function IntermediarioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-4">Nível Intermediário</h1>
      <p className="mb-6 max-w-xl text-center">
        Aprofunde seus conhecimentos em iOS, aprendendo sobre APIs, navegação avançada, persistência de dados e animações.
      </p>
      <Link to="/page-cursoiphone/intermediario/conteudos" className="btn btn-primary mb-4">Começar Conteúdo</Link>
      <Link to="/page-cursoiphone/intermediario/quiz" className="btn btn-secondary">Fazer Quiz</Link>
    </div>
  );
}
