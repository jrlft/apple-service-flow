
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { quizQuestions, QuizQuestion } from "../data/questions";
import { Trophy, Star, ThumbsUp, Lightbulb, BookOpen } from "lucide-react";

interface QuizState {
  currentQuestion: number;
  score: number;
  answers: boolean[];
  showResults: boolean;
  selectedAnswer: string | null;
  showCorrectAnswer: boolean;
}

export function QuizComponent() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    answers: [],
    showResults: false,
    selectedAnswer: null,
    showCorrectAnswer: false
  });

  const currentQ = quizQuestions[quizState.currentQuestion];
  const progress = ((quizState.currentQuestion + 1) / quizQuestions.length) * 100;

  const handleAnswerSelect = (selectedOption: string) => {
    if (quizState.selectedAnswer) return; // Prevent multiple selections

    const isCorrect = selectedOption === currentQ.resposta_correta;
    
    setQuizState(prev => ({
      ...prev,
      selectedAnswer: selectedOption,
      showCorrectAnswer: true,
      score: isCorrect ? prev.score + 1 : prev.score,
      answers: [...prev.answers, isCorrect]
    }));

    // Auto advance after showing correct answer
    setTimeout(() => {
      if (quizState.currentQuestion < quizQuestions.length - 1) {
        setQuizState(prev => ({
          ...prev,
          currentQuestion: prev.currentQuestion + 1,
          selectedAnswer: null,
          showCorrectAnswer: false
        }));
      } else {
        setQuizState(prev => ({
          ...prev,
          showResults: true
        }));
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      score: 0,
      answers: [],
      showResults: false,
      selectedAnswer: null,
      showCorrectAnswer: false
    });
  };

  const getDiscountInfo = (score: number) => {
    const discountMap: { [key: number]: { discount: number; title: string; icon: React.ReactNode } } = {
      10: { discount: 15, title: "Parabéns! Você é um expert em iPhone!", icon: <Trophy className="h-16 w-16 text-yellow-500" /> },
      9: { discount: 14, title: "Muito Bom!", icon: <Star className="h-16 w-16 text-blue-500" /> },
      8: { discount: 13, title: "Ótimo Trabalho!", icon: <ThumbsUp className="h-16 w-16 text-green-500" /> },
      7: { discount: 12, title: "Bom Desempenho!", icon: <ThumbsUp className="h-16 w-16 text-green-400" /> },
      6: { discount: 11, title: "Quase lá!", icon: <Star className="h-16 w-16 text-yellow-400" /> },
      5: { discount: 10, title: "Interessante!", icon: <Lightbulb className="h-16 w-16 text-orange-500" /> }
    };

    return discountMap[score] || { 
      discount: 0, 
      title: "Continue Estudando!", 
      icon: <BookOpen className="h-16 w-16 text-gray-500" />
    };
  };

  if (quizState.showResults) {
    const { discount, title, icon } = getDiscountInfo(quizState.score);
    const percentage = Math.round((quizState.score / quizQuestions.length) * 100);

    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              {icon}
            </div>
            <CardTitle className="text-3xl mb-4">{title}</CardTitle>
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">{quizState.score}/{quizQuestions.length}</div>
                <div className="text-lg text-muted-foreground">{percentage}%</div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            {discount > 0 ? (
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg border border-primary/20">
                <h3 className="text-xl font-semibold mb-2">🎉 Você ganhou {discount}% de desconto!</h3>
                <p className="text-muted-foreground mb-4">
                  Válido em qualquer acessório na Link TI
                </p>
                <div className="bg-white p-4 rounded border-2 border-dashed border-primary">
                  <p className="font-medium text-primary">
                    📱 Dê um print nesta tela e apresente em nossa recepção
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-muted/30 p-6 rounded-lg">
                <p className="text-muted-foreground">
                  Não desanime! Com mais prática você vai dominar o iPhone em pouco tempo.
                </p>
              </div>
            )}
            
            <div className="flex gap-4 justify-center">
              <Button onClick={resetQuiz} variant="outline">
                Refazer Quiz
              </Button>
              <Button 
                onClick={() => {
                  const text = `Acabei de fazer o Quiz de iPhone da Link TI e acertei ${quizState.score} de ${quizQuestions.length} perguntas (${percentage}%)! 📱✨`;
                  if (navigator.share) {
                    navigator.share({
                      title: 'Quiz de iPhone - Link TI',
                      text: text,
                      url: window.location.href
                    });
                  } else {
                    navigator.clipboard.writeText(text + ' ' + window.location.href);
                    alert('Resultado copiado para a área de transferência!');
                  }
                }}
              >
                Compartilhar Resultado
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <div className="space-y-4">
            <Progress value={progress} className="w-full" />
            <div className="text-center text-sm text-muted-foreground">
              Pergunta {quizState.currentQuestion + 1} de {quizQuestions.length}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <h2 className="text-xl font-semibold text-center">{currentQ.pergunta}</h2>
          
          <div className="space-y-3">
            {currentQ.opcoes.map((opcao, index) => {
              let buttonVariant: "default" | "outline" | "destructive" | "secondary" = "outline";
              let className = "";
              
              if (quizState.showCorrectAnswer) {
                if (opcao === currentQ.resposta_correta) {
                  buttonVariant = "default";
                  className = "bg-green-500 hover:bg-green-600 text-white";
                } else if (opcao === quizState.selectedAnswer && opcao !== currentQ.resposta_correta) {
                  buttonVariant = "destructive";
                }
              } else if (opcao === quizState.selectedAnswer) {
                buttonVariant = "secondary";
              }

              return (
                <Button
                  key={index}
                  variant={buttonVariant}
                  className={`w-full text-left justify-start h-auto p-4 whitespace-normal ${className}`}
                  onClick={() => handleAnswerSelect(opcao)}
                  disabled={quizState.selectedAnswer !== null}
                >
                  {opcao}
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
