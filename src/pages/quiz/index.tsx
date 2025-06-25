
import React, { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuizComponent } from "./components/QuizComponent";
import { Smartphone, Award, Users, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function QuizPage() {
  const [quizStarted, setQuizStarted] = useState(false);
  const { t } = useLanguage();

  if (quizStarted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20 pb-12">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">📱 {t('quiz.title')}</h1>
              <p className="text-muted-foreground text-lg">
                {t('quiz.subtitle')}
              </p>
            </div>
            <QuizComponent />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="mb-6">
              <Smartphone className="h-20 w-20 mx-auto text-primary mb-4" />
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {t('quiz.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              {t('quiz.subtitle')}
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>{t('quiz.fastEasy')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('quiz.fastEasyDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>{t('quiz.gainDiscounts')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('quiz.gainDiscountsDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>{t('quiz.forEveryone')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('quiz.forEveryoneDesc')}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Discount Info */}
          <Card className="mb-12 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center text-2xl">{t('quiz.discountSystem')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-center">
                <div className="space-y-2">
                  <div className="font-semibold">5 {t('language') === 'pt' ? 'acertos' : 'correct'} = 10% {t('language') === 'pt' ? 'de desconto' : 'discount'}</div>
                  <div className="font-semibold">6 {t('language') === 'pt' ? 'acertos' : 'correct'} = 11% {t('language') === 'pt' ? 'de desconto' : 'discount'}</div>
                  <div className="font-semibold">7 {t('language') === 'pt' ? 'acertos' : 'correct'} = 12% {t('language') === 'pt' ? 'de desconto' : 'discount'}</div>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold">8 {t('language') === 'pt' ? 'acertos' : 'correct'} = 13% {t('language') === 'pt' ? 'de desconto' : 'discount'}</div>
                  <div className="font-semibold">9 {t('language') === 'pt' ? 'acertos' : 'correct'} = 14% {t('language') === 'pt' ? 'de desconto' : 'discount'}</div>
                  <div className="font-semibold text-primary">10 {t('language') === 'pt' ? 'acertos' : 'correct'} = 15% {t('language') === 'pt' ? 'de desconto' : 'discount'}</div>
                </div>
              </div>
              <p className="text-center text-muted-foreground mt-4">
                {t('quiz.validInfo')}
              </p>
            </CardContent>
          </Card>

          {/* Start Button */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="text-lg px-12 py-6 rounded-full"
              onClick={() => setQuizStarted(true)}
            >
              {t('quiz.startQuiz')}
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
