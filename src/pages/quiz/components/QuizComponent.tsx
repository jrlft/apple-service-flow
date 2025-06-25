
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { quizQuestions, QuizQuestion } from "../data/questions";
import { Trophy, Star, ThumbsUp, Lightbulb, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface QuizState {
  currentQuestion: number;
  score: number;
  answers: boolean[];
  showResults: boolean;
  selectedAnswer: string | null;
  showCorrectAnswer: boolean;
}

export function QuizComponent() {
  const { t, language } = useLanguage();
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

  // Get question data based on language
  const getQuestionData = (question: QuizQuestion) => {
    if (language === 'en' && question.question && question.options && question.correct_answer) {
      return {
        pergunta: question.question,
        opcoes: question.options,
        resposta_correta: question.correct_answer
      };
    }
    return {
      pergunta: question.pergunta,
      opcoes: question.opcoes,
      resposta_correta: question.resposta_correta
    };
  };

  const questionData = getQuestionData(currentQ);

  const handleAnswerSelect = (selectedOption: string) => {
    if (quizState.selectedAnswer) return; // Prevent multiple selections

    const isCorrect = selectedOption === questionData.resposta_correta;
    
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
      10: { discount: 15, title: t('quiz.congratulations'), icon: <Trophy className="h-16 w-16 text-yellow-500" /> },
      9: { discount: 14, title: t('quiz.veryGood'), icon: <Star className="h-16 w-16 text-blue-500" /> },
      8: { discount: 13, title: t('quiz.greatWork'), icon: <ThumbsUp className="h-16 w-16 text-green-500" /> },
      7: { discount: 12, title: t('quiz.goodPerformance'), icon: <ThumbsUp className="h-16 w-16 text-green-400" /> },
      6: { discount: 11, title: t('quiz.almostThere'), icon: <Star className="h-16 w-16 text-yellow-400" /> },
      5: { discount: 10, title: t('quiz.interesting'), icon: <Lightbulb className="h-16 w-16 text-orange-500" /> }
    };

    return discountMap[score] || { 
      discount: 0, 
      title: t('quiz.keepStudying'), 
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
                <h3 className="text-xl font-semibold mb-2">🎉 {t('quiz.youWon').replace('{discount}', discount.toString())}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('quiz.validAccessories')}
                </p>
                <div className="bg-white p-4 rounded border-2 border-dashed border-primary">
                  <p className="font-medium text-primary">
                    {t('quiz.printScreen')}
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-muted/30 p-6 rounded-lg">
                <p className="text-muted-foreground">
                  {t('quiz.dontGiveUp')}
                </p>
              </div>
            )}
            
            <div className="flex gap-4 justify-center">
              <Button onClick={resetQuiz} variant="outline">
                {t('quiz.retakeQuiz')}
              </Button>
              <Button 
                onClick={() => {
                  const text = t('quiz.shareText')
                    .replace('{score}', quizState.score.toString())
                    .replace('{total}', quizQuestions.length.toString())
                    .replace('{percentage}', percentage.toString());
                  
                  if (navigator.share) {
                    navigator.share({
                      title: t('quiz.title'),
                      text: text,
                      url: window.location.href
                    });
                  } else {
                    navigator.clipboard.writeText(text + ' ' + window.location.href);
                    alert(t('quiz.copiedToClipboard'));
                  }
                }}
              >
                {t('quiz.shareResult')}
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
              {t('quiz.questionOf')
                .replace('{current}', (quizState.currentQuestion + 1).toString())
                .replace('{total}', quizQuestions.length.toString())}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <h2 className="text-xl font-semibold text-center">{questionData.pergunta}</h2>
          
          <div className="space-y-3">
            {questionData.opcoes.map((opcao, index) => {
              let buttonVariant: "default" | "outline" | "destructive" | "secondary" = "outline";
              let className = "";
              
              if (quizState.showCorrectAnswer) {
                if (opcao === questionData.resposta_correta) {
                  buttonVariant = "default";
                  className = "bg-green-500 hover:bg-green-600 text-white";
                } else if (opcao === quizState.selectedAnswer && opcao !== questionData.resposta_correta) {
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
