import React from "react";
import { Quiz } from "../components/Quiz";
import { quizData } from "../utils/quizData";

export default function IntermediarioQuiz() {
  return (
    <Quiz questions={quizData.intermediario} level="Intermediário" />
  );
}
