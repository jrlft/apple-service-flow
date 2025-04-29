import React from "react";

export function ProgressBar() {
  // TODO: Integrar com progresso real do usuário
  return (
    <div className="w-full max-w-2xl mb-8">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">Progresso do Curso</span>
        <span className="text-sm font-medium">0%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-3">
        <div className="bg-primary h-3 rounded-full" style={{ width: '0%' }}></div>
      </div>
    </div>
  );
}
