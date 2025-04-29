import React, { useState } from "react";
import { Quiz } from "../components/Quiz";
import { quizData } from "../utils/quizData";

export default function InicianteQuiz() {
  return (
    <Quiz questions={quizData.iniciante} level="Iniciante" />
  );
}
