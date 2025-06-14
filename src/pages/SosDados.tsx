
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HardDrive, Smartphone, Laptop, Database, Shield, Clock, CheckCircle, AlertTriangle, Zap, Users } from "lucide-react";

const SosDados = () => {
  const services = [
    {
      icon: HardDrive,
      title: "HD/SSD Danificado",
      description: "Recuperação de dados em discos rígidos e SSDs com falhas mecânicas ou eletrônicas",
      urgency: "Crítico"
    },
    {
      icon: Smartphone,
      title: "Dispositivos Móveis",
      description: "iPhone, iPad e smartphones Android com problemas de acesso aos dados",
      urgency: "Alto"
    },
    {
      icon: Laptop,
      title: "Notebooks e Computadores",
      description: "Recuperação de dados em PCs e Macs com falhas de sistema ou hardware",
      urgency: "Médio"
    },
    {
      icon: Database,
      title: "Servidores e RAID",
      description: "Recuperação em sistemas corporativos, servidores e arrays RAID danificados",
      urgency: "Crítico"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Seus dados são tratados com máxima confidencialidade e segurança"
    },
    {
      icon: Clock,
      title: "Atendimento 24/7",
      description: "Suporte emergencial disponível todos os dias da semana"
    },
    {
      icon: CheckCircle,
      title: "Taxa de Sucesso 95%",
      description: "Uma das maiores taxas de recuperação do mercado brasileiro"
    },
    {
      icon: Zap,
      title: "Diagnóstico Rápido",
      description: "Avaliação gratuita em até 24 horas para casos urgentes"
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Contato Inicial",
      description: "Entre em contato conosco via WhatsApp ou telefone descrevendo o problema"
    },
    {
      step: "02",
      title: "Diagnóstico",
      description: "Análise gratuita do dispositivo para identificar a causa e viabilidade"
    },
    {
      step: "03",
      title: "Orçamento",
      description: "Apresentação do orçamento detalhado sem compromisso"
    },
    {
      step: "04",
      title: "Recuperação",
      description: "Início do processo de recuperação com acompanhamento em tempo real"
    },
    {
      step: "05",
      title: "Entrega",
      description: "Entrega dos dados recuperados com garantia de integridade"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <AlertTriangle className="h-12 w-12 text-red-500 mr-4" />
              <Badge variant="destructive" className="text-lg px-4 py-2">
                EMERGÊNCIA DE DADOS
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              SOS <span className="text-red-500">DADOS</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Perdeu dados importantes? <strong>Não entre em pânico!</strong> 
              Nossa equipe especializada recupera seus arquivos com segurança e agilidade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg">
                <a href="https://wa.me/556536216000?text=🆘 EMERGÊNCIA DE DADOS - Preciso de ajuda urgente para recuperar meus dados!" className="flex items-center">
                  🆘 SOCORRO IMEDIATO
                </a>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Diagnóstico Gratuito
              </Button>
            </div>
            
            <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
              <Users className="h-4 w-4 mr-2" />
              Mais de 5.000 clientes atendidos com sucesso
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Serviços de Recuperação
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Especializados em recuperação de dados para todos os tipos de dispositivos e situações de emergência
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <service.icon className="h-8 w-8 text-red-500" />
                      <Badge 
                        variant={service.urgency === "Crítico" ? "destructive" : service.urgency === "Alto" ? "default" : "secondary"}
                      >
                        {service.urgency}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Como Funciona
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Processo simples e transparente para recuperar seus dados com segurança
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Por Que Escolher a Link TI?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <feature.icon className="h-12 w-12 text-red-500 mx-auto mb-4" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-red-500 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Não Perca Tempo!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Cada minuto pode ser crucial para a recuperação dos seus dados
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                <a href="https://wa.me/556536216000?text=🆘 EMERGÊNCIA DE DADOS - Preciso de ajuda urgente para recuperar meus dados!">
                  WhatsApp Emergencial
                </a>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-red-500">
                <a href="tel:+556536216000">
                  Ligar Agora: (65) 3621-6000
                </a>
              </Button>
            </div>
            
            <p className="text-sm mt-6 opacity-75">
              Atendimento 24 horas • Diagnóstico gratuito • Sem dados, sem pagamento
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SosDados;
