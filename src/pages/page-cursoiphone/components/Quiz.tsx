import React, { useState } from "react";

type Question = {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

type QuizProps = {
  questions: Question[];
  level: string;
};

export function Quiz({ questions, level }: QuizProps) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  function handleSelect(option: number) {
    setAnswers((prev) => {
      const updated = [...prev];
      updated[current] = option;
      return updated;
    });
  }

  function handleNext() {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  }

  function handleRestart() {
    setCurrent(0);
    setAnswers([]);
    setShowResult(false);
  }

  if (showResult) {
    const score = answers.reduce(
      (acc, ans, idx) => (ans === questions[idx].correct ? acc + 1 : acc),
      0
    );
    return (
      <div className="max-w-xl mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Resultado do Quiz - {level}</h2>
        <p className="mb-4">Você acertou {score} de {questions.length} perguntas!</p>
        <ul className="mb-6">
          {questions.map((q, idx) => (
            <li key={idx} className="mb-2">
              <span className="font-semibold">Pergunta {idx + 1}:</span> {q.question}<br />
              Sua resposta: <span className={answers[idx] === q.correct ? 'text-green-600' : 'text-red-600'}>{q.options[answers[idx]] ?? 'Não respondida'}</span><br />
              {answers[idx] !== q.correct && (
                <span className="text-sm text-gray-500">Correta: <span className="text-green-600">{q.options[q.correct]}</span> — {q.explanation}</span>
              )}
            </li>
          ))}
        </ul>
        <button className="btn btn-primary" onClick={handleRestart}>Refazer Quiz</button>
      </div>
    );
  }

  const q = questions[current];
  return (
    <div className="max-w-xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Quiz - {level}</h2>
      <div className="mb-4">
        <span className="font-semibold">Pergunta {current + 1} de {questions.length}</span>
        <p className="mt-2 mb-4">{q.question}</p>
        <div className="flex flex-col gap-2">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              className={`btn ${answers[current] === idx ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => handleSelect(idx)}
              disabled={answers[current] !== undefined}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
      <button
        className="btn btn-secondary mt-4"
        onClick={handleNext}
        disabled={answers[current] === undefined}
      >
        {current < questions.length - 1 ? 'Próxima' : 'Finalizar'}
      </button>
    </div>
  );
}
