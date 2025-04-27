import React from "react";
import { Link } from "react-router-dom";

export default function IniciantePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-4">Nível Iniciante</h1>
      <p className="mb-6 max-w-xl text-center">
        Aprenda os fundamentos do desenvolvimento iOS, desde a configuração do ambiente até a criação do seu primeiro app.
      </p>
      <Link to="/page-cursoiphone/iniciante/conteudos" className="btn btn-primary mb-4">Começar Conteúdo</Link>
      <Link to="/page-cursoiphone/iniciante/quiz" className="btn btn-secondary">Fazer Quiz</Link>
    </div>
  );
}
