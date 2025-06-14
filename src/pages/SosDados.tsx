
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HardDrive, Smartphone, Laptop, Database, Shield, Clock, CheckCircle, AlertTriangle, Zap, Users, Phone } from "lucide-react";

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
        <section className="relative min-h-screen flex items-center pt-32 pb-16 px-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <AlertTriangle className="h-12 w-12 text-red-500 mr-4" />
                  <Badge variant="destructive" className="text-lg px-4 py-2">
                    EMERGÊNCIA DE DADOS
                  </Badge>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                  SOS <span className="text-red-500">DADOS</span>
                </h1>
                
                <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
                  Perdeu dados importantes? <strong>Não entre em pânico!</strong> 
                  Nossa equipe especializada recupera seus arquivos com segurança e agilidade.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                  <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg">
                    <a href="https://wa.me/556536216000?text=🆘 EMERGÊNCIA DE DADOS - Preciso de ajuda urgente para recuperar meus dados!" className="flex items-center">
                      🆘 SOCORRO IMEDIATO
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                    Diagnóstico Gratuito
                  </Button>
                </div>
                
                <div className="flex items-center justify-center lg:justify-start text-sm text-gray-500 dark:text-gray-400">
                  <Users className="h-4 w-4 mr-2" />
                  Mais de 5.000 clientes atendidos com sucesso
                </div>
              </div>

              {/* Right side - Image */}
              <div className="relative">
                <div className="relative h-[500px] bg-white dark:bg-card rounded-lg shadow-2xl flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Recuperação de Dados - Tecnologia Avançada" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent"></div>
                </div>
                
                {/* Emergency contact floating card */}
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl border-2 border-red-500">
                  <div className="text-center">
                    <Phone className="h-8 w-8 text-red-500 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">EMERGÊNCIA 24H</p>
                    <p className="text-lg font-bold text-red-500">(65) 3621-6000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Urgency Alert Bar */}
        <section className="bg-red-500 text-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center text-center">
              <AlertTriangle className="h-6 w-6 mr-3 animate-pulse" />
              <p className="text-lg font-semibold">
                <strong>ATENÇÃO:</strong> Cada minuto pode ser crucial para a recuperação dos seus dados!
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-white dark:bg-gray-900">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Serviços de <span className="text-red-500">Recuperação</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Especializados em recuperação de dados para todos os tipos de dispositivos e situações de emergência
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-red-500">
                  <CardHeader className="text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-full">
                        <service.icon className="h-10 w-10 text-red-500" />
                      </div>
                    </div>
                    <div className="flex items-center justify-center mb-2">
                      <Badge 
                        variant={service.urgency === "Crítico" ? "destructive" : service.urgency === "Alto" ? "default" : "secondary"}
                        className="mb-2"
                      >
                        {service.urgency}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Como <span className="text-red-500">Funciona</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Processo simples e transparente para recuperar seus dados com segurança
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                      {step.step}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-red-200 dark:bg-red-800 -ml-10"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-white dark:bg-gray-900">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Por Que Escolher a <span className="text-red-500">Link TI?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-full w-fit mx-auto mb-4">
                      <feature.icon className="h-12 w-12 text-red-500" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
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
        <section className="py-20 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white">
          <div className="container mx-auto text-center">
            <AlertTriangle className="h-16 w-16 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Não Perca Tempo!
            </h2>
            <p className="text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
              Cada minuto pode ser crucial para a recuperação dos seus dados. 
              Entre em contato agora mesmo com nossa equipe de emergência.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button size="lg" variant="secondary" className="px-10 py-6 text-xl font-bold">
                <a href="https://wa.me/556536216000?text=🆘 EMERGÊNCIA DE DADOS - Preciso de ajuda urgente para recuperar meus dados!" className="flex items-center">
                  <Phone className="mr-3 h-6 w-6" />
                  WhatsApp Emergencial
                </a>
              </Button>
              <Button size="lg" variant="outline" className="px-10 py-6 text-xl font-bold border-white text-white hover:bg-white hover:text-red-500">
                <a href="tel:+556536216000" className="flex items-center">
                  <Phone className="mr-3 h-6 w-6" />
                  (65) 3621-6000
                </a>
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center mt-12">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <Clock className="h-8 w-8 mx-auto mb-3" />
                <p className="font-semibold">Atendimento 24 horas</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <Shield className="h-8 w-8 mx-auto mb-3" />
                <p className="font-semibold">Diagnóstico gratuito</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <CheckCircle className="h-8 w-8 mx-auto mb-3" />
                <p className="font-semibold">Sem dados, sem pagamento</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SosDados;
