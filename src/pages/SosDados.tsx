import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedElement } from "@/components/animations/animated-element";
import { HardDrive, Smartphone, Laptop, Database, Shield, Clock, CheckCircle, AlertTriangle, Zap, Users, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const SosDados = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento da página
    const loadPage = async () => {
      try {
        setIsLoading(true);
        // Simular tempo de carregamento
        await new Promise(resolve => setTimeout(resolve, 1000));
      } finally {
        setIsLoading(false);
      }
    };
    
    loadPage();
  }, []);

  const services = [
    {
      icon: HardDrive,
      title: t('sosData.services.hdd.title'),
      description: t('sosData.services.hdd.description'),
      urgency: t('sosData.urgency.critical')
    },
    {
      icon: Smartphone,
      title: t('sosData.services.mobile.title'),
      description: t('sosData.services.mobile.description'),
      urgency: t('sosData.urgency.high')
    },
    {
      icon: Laptop,
      title: t('sosData.services.computers.title'),
      description: t('sosData.services.computers.description'),
      urgency: t('sosData.urgency.medium')
    },
    {
      icon: Database,
      title: t('sosData.services.servers.title'),
      description: t('sosData.services.servers.description'),
      urgency: t('sosData.urgency.critical')
    }
  ];

  const features = [
    {
      icon: Shield,
      title: t('sosData.features.security.title'),
      description: t('sosData.features.security.description')
    },
    {
      icon: Clock,
      title: t('sosData.features.diagnosis.title'),
      description: t('sosData.features.diagnosis.description')
    },
    {
      icon: CheckCircle,
      title: t('sosData.features.successRate.title'),
      description: t('sosData.features.successRate.description')
    },
    {
      icon: Zap,
      title: t('sosData.features.equipment.title'),
      description: t('sosData.features.equipment.description')
    }
  ];

  const steps = [
    {
      step: "01",
      title: t('sosData.steps.contact.title'),
      description: t('sosData.steps.contact.description')
    },
    {
      step: "02",
      title: t('sosData.steps.diagnosis.title'),
      description: t('sosData.steps.diagnosis.description')
    },
    {
      step: "03",
      title: t('sosData.steps.quote.title'),
      description: t('sosData.steps.quote.description')
    },
    {
      step: "04",
      title: t('sosData.steps.recovery.title'),
      description: t('sosData.steps.recovery.description')
    },
    {
      step: "05",
      title: t('sosData.steps.delivery.title'),
      description: t('sosData.steps.delivery.description')
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {isLoading && (
          <div className="flex items-center justify-center py-24 min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
          </div>
        )}
        
        {!isLoading && (
          <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-32 pb-16 px-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left side - Content */}
                  <AnimatedElement direction="left" delay={0.2}>
                    <div className="text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start mb-6">
                        <AlertTriangle className="h-12 w-12 text-red-500 mr-4" />
                        <Badge variant="destructive" className="text-lg px-4 py-2">
                          {t('sosData.badge')}
                        </Badge>
                      </div>
                      
                      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                        {t('sosData.hero.title')}
                      </h1>
                      
                      <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
                        {t('sosData.hero.description')}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                        <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg">
                          <a href={`https://wa.me/556536216000?text=${encodeURIComponent(t('sosData.whatsappMessage'))}`} className="flex items-center">
                            💾 {t('sosData.hero.button')}
                          </a>
                        </Button>
                        <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                          {t('sosData.hero.diagnosisButton')}
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-center lg:justify-start text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-2" />
                        {t('sosData.hero.clients')}
                      </div>
                    </div>
                  </AnimatedElement>

                  {/* Right side - Image */}
                  <AnimatedElement direction="right" delay={0.4}>
                    <div className="relative">
                      <div className="relative h-[500px] bg-white dark:bg-card rounded-lg shadow-2xl flex items-center justify-center overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                          alt="Recuperação de Dados - Tecnologia Avançada" 
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent"></div>
                      </div>
                    </div>
                  </AnimatedElement>
                </div>
              </div>
            </section>

            {/* Urgency Alert Bar */}
            <AnimatedElement direction="up" delay={0.1}>
              <section className="bg-red-500 text-white py-4">
                <div className="container mx-auto px-4">
                  <div className="flex items-center justify-center text-center">
                    <AlertTriangle className="h-6 w-6 mr-3 animate-pulse" />
                    <p className="text-lg font-semibold">
                      {t('sosData.alert.message')}
                    </p>
                  </div>
                </div>
              </section>
            </AnimatedElement>

            {/* Services Section */}
            <AnimatedElement direction="up" delay={0.2}>
              <section className="py-20 px-4 bg-white dark:bg-gray-900">
                <div className="container mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                      {t('sosData.servicesSection.title')}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                      {t('sosData.servicesSection.description')}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                      <AnimatedElement key={index} direction="up" delay={0.3 + index * 0.1}>
                        <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-red-500">
                          <CardHeader className="text-center">
                            <div className="flex items-center justify-center mb-4">
                              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-full">
                                <service.icon className="h-10 w-10 text-red-500" />
                              </div>
                            </div>
                            <div className="flex items-center justify-center mb-2">
                              <Badge 
                                variant={service.urgency === t('sosData.urgency.critical') ? "destructive" : service.urgency === t('sosData.urgency.high') ? "default" : "secondary"}
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
                      </AnimatedElement>
                    ))}
                  </div>
                </div>
              </section>
            </AnimatedElement>

            {/* Process Section */}
            <AnimatedElement direction="up" delay={0.2}>
              <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                      {t('sosData.processSection.title')}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                      {t('sosData.processSection.description')}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-5 gap-8">
                    {steps.map((step, index) => (
                      <AnimatedElement key={index} direction="up" delay={0.3 + index * 0.1}>
                        <div className="text-center">
                          <div className="relative mb-6">
                            <div className="w-20 h-20 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                              {step.step}
                            </div>
                            {index < steps.length - 1 && (
                              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-red-200 dark:bg-red-800 -ml-10"></div>
                            )}
                          </div>
                          <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </AnimatedElement>
                    ))}
                  </div>
                </div>
              </section>
            </AnimatedElement>

            {/* Features Section */}
            <AnimatedElement direction="up" delay={0.2}>
              <section className="py-20 px-4 bg-white dark:bg-gray-900">
                <div className="container mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                      {t('sosData.featuresSection.title')}
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                      <AnimatedElement key={index} direction="up" delay={0.3 + index * 0.1}>
                        <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
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
                      </AnimatedElement>
                    ))}
                  </div>
                </div>
              </section>
            </AnimatedElement>

            {/* CTA Section */}
            <AnimatedElement direction="up" delay={0.2}>
              <section className="py-20 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white">
                <div className="container mx-auto text-center">
                  <AlertTriangle className="h-16 w-16 mx-auto mb-6 animate-pulse" />
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    {t('sosData.cta.title')}
                  </h2>
                  <p className="text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
                    {t('sosData.cta.description')}
                  </p>
                  
                  <div className="flex justify-center items-center mb-8">
                    <Button size="lg" className="px-10 py-6 text-xl font-bold bg-green-500 hover:bg-green-600 text-white">
                      <a href={`https://wa.me/556536216000?text=${encodeURIComponent(t('sosData.whatsappMessage'))}`} className="flex items-center">
                        <Phone className="mr-3 h-6 w-6" />
                        {t('sosData.cta.whatsapp')}
                      </a>
                    </Button>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center mt-12">
                    <AnimatedElement direction="up" delay={0.4}>
                      <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                        <Shield className="h-8 w-8 mx-auto mb-3" />
                        <p className="font-semibold">{t('sosData.cta.features.diagnosis')}</p>
                      </div>
                    </AnimatedElement>
                    <AnimatedElement direction="up" delay={0.5}>
                      <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                        <CheckCircle className="h-8 w-8 mx-auto mb-3" />
                        <p className="font-semibold">{t('sosData.cta.features.noDataNoPayment')}</p>
                      </div>
                    </AnimatedElement>
                    <AnimatedElement direction="up" delay={0.6}>
                      <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                        <Zap className="h-8 w-8 mx-auto mb-3" />
                        <p className="font-semibold">{t('sosData.cta.features.technology')}</p>
                      </div>
                    </AnimatedElement>
                  </div>
                </div>
              </section>
            </AnimatedElement>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default SosDados;
