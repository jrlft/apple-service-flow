import React from "react";
import { CourseNav } from "./components/CourseNav";
import { ProgressBar } from "./components/ProgressBar";

export default function CursoIphonePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center py-8">
      <h1 className="text-4xl font-bold mb-4">Curso de iPhone</h1>
      <p className="mb-8 max-w-xl text-center">
        Bem-vindo ao curso interativo de iPhone! Escolha um nível para começar. Você só poderá avançar para o próximo nível após concluir o anterior.
      </p>
      <ProgressBar />
      <CourseNav />
    </div>
  );
}
