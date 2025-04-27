import React from "react";
import { Quiz } from "../components/Quiz";
import { quizData } from "../utils/quizData";

export default function AvancadoQuiz() {
  return (
    <Quiz questions={quizData.avancado} level="Avançado" />
  );
}
