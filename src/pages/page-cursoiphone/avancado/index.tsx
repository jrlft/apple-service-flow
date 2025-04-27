import React from "react";
import { Link } from "react-router-dom";

export default function AvancadoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-4">Nível Avançado</h1>
      <p className="mb-6 max-w-xl text-center">
        Domine técnicas avançadas de arquitetura, testes, integração com serviços externos e publicação na App Store.
      </p>
      <Link to="/page-cursoiphone/avancado/conteudos" className="btn btn-primary mb-4">Começar Conteúdo</Link>
      <Link to="/page-cursoiphone/avancado/quiz" className="btn btn-secondary">Fazer Quiz</Link>
    </div>
  );
}
