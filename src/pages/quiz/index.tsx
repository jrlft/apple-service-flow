
import React, { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuizComponent } from "./components/QuizComponent";
import { Smartphone, Award, Users, Clock } from "lucide-react";

export default function QuizPage() {
  const [quizStarted, setQuizStarted] = useState(false);

  if (quizStarted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20 pb-12">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">📱 Quiz de iPhone</h1>
              <p className="text-muted-foreground text-lg">
                Teste seus conhecimentos sobre iPhone e ganhe descontos!
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
              Quiz Interativo de iPhone
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Teste seus conhecimentos sobre o uso do iPhone com este quiz interativo de 10 perguntas 
              e ganhe descontos exclusivos em acessórios da Link TI!
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Rápido e Fácil</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Apenas 10 perguntas sobre o uso básico do iPhone
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Ganhe Descontos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Até 15% de desconto em acessórios baseado na sua pontuação
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Para Todos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Perguntas adequadas para usuários de todos os níveis
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Discount Info */}
          <Card className="mb-12 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center text-2xl">🎁 Sistema de Descontos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-center">
                <div className="space-y-2">
                  <div className="font-semibold">5 acertos = 10% de desconto</div>
                  <div className="font-semibold">6 acertos = 11% de desconto</div>
                  <div className="font-semibold">7 acertos = 12% de desconto</div>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold">8 acertos = 13% de desconto</div>
                  <div className="font-semibold">9 acertos = 14% de desconto</div>
                  <div className="font-semibold text-primary">10 acertos = 15% de desconto</div>
                </div>
              </div>
              <p className="text-center text-muted-foreground mt-4">
                Válido em qualquer acessório da Link TI - Apresente o print da tela de resultado em nossa recepção
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
              Começar Quiz 🚀
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
