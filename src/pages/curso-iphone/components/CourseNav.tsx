import React from "react";
import { Link } from "react-router-dom";

const levels = [
  {
    name: "Iniciante",
    path: "/curso-iphone/iniciante",
    description: "Comece do zero e aprenda o básico do desenvolvimento iOS."
  },
  {
    name: "Intermediário",
    path: "/curso-iphone/intermediario",
    description: "Aprofunde seus conhecimentos e crie apps mais completos.",
    locked: true
  },
  {
    name: "Avançado",
    path: "/curso-iphone/avancado",
    description: "Domine técnicas avançadas e publique seu app.",
    locked: true
  }
];

export function CourseNav() {
  // TODO: Integrar com sistema real de progresso do usuário
  // Por enquanto, apenas o primeiro nível está desbloqueado
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
      {levels.map((level, idx) => (
        <div key={level.name} className={`rounded-xl border bg-card shadow-lg p-6 flex flex-col items-center ${level.locked ? 'opacity-50 pointer-events-none' : ''}`}>
          <h2 className="text-2xl font-semibold mb-2">{level.name}</h2>
          <p className="mb-4 text-center">{level.description}</p>
          <Link to={level.path} className="btn btn-primary">Acessar</Link>
        </div>
      ))}
    </div>
  );
}
