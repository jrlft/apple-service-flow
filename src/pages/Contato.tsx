
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

import { useEffect, useState } from "react";
import { fetchPage } from "@/lib/strapi";
import { Helmet } from "react-helmet";

const Contato = () => {
  const [contact, setContact] = useState<any>(null);
  useEffect(() => { fetchPage("contato").then(setContact); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
  };

  // Add Facebook Pixel and Google Ads Script
  const MarketingScripts = () => {
    return (
      <Helmet>
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '581961359233767');
            fbq('track', 'PageView');
          `}
        </script>
        <noscript>
          {`
            <img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=581961359233767&ev=PageView&noscript=1"
            />
          `}
        </noscript>
        
        {/* Google Ads Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10888031582"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10888031582');
          `}
        </script>
      </Helmet>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MarketingScripts />
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <section className="bg-secondary py-16">
          <div className="container">
            <AnimatedElement>
              <div className="max-w-3xl mx-auto text-center">
                <SectionTitle 
                  title={contact?.attributes?.title || "Entre em Contato"} 
                  subtitle={contact?.attributes?.subtitle || "Estamos aqui para ajudar!"}
                  centered
                />
                <p className="text-muted-foreground">
                  {contact?.attributes?.description || "Precisa de assistência técnica para seu dispositivo Apple? Entre em contato conosco através de um dos nossos canais de atendimento ou preencha o formulário abaixo."}
                </p>
                <div className="mt-6">
                  <WhatsAppButton
                    phoneNumber="+556536216000"
                    message="Olá, gostaria de informações sobre assistência técnica para dispositivos Apple."
                    size="lg"
                    className="mx-auto"
                  >
                    Falar com um Técnico via WhatsApp
                  </WhatsAppButton>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <AnimatedElement direction="left">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-2xl font-bold mb-6">Envie sua mensagem</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium">
                          Nome
                        </label>
                        <Input id="name" placeholder="Seu nome completo" required />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="seu@email.com" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                          Telefone
                        </label>
                        <Input id="phone" placeholder="(00) 00000-0000" />
                      </div>
                      
                      <div>
                        <label htmlFor="device" className="block mb-2 text-sm font-medium">
                          Dispositivo
                        </label>
                        <select 
                          id="device" 
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          defaultValue=""
                        >
                          <option value="" disabled>Selecione o dispositivo</option>
                          <option value="iphone">iPhone</option>
                          <option value="ipad">iPad</option>
                          <option value="mac">Mac</option>
                          <option value="watch">Apple Watch</option>
                          <option value="other">Outro</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                        Assunto
                      </label>
                      <Input id="subject" placeholder="Assunto da sua mensagem" required />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block mb-2 text-sm font-medium">
                        Mensagem
                      </label>
                      <Textarea id="message" placeholder="Descreva o problema com seu dispositivo" rows={6} required />
                    </div>
                    
                    <div className="flex items-center">
                      <input 
                        id="privacy" 
                        type="checkbox" 
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        required
                      />
                      <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                        Concordo com a <a href="/privacidade" className="text-primary hover:underline">Política de Privacidade</a>
                      </label>
                    </div>
                    
                    <Button type="submit" className="w-full">Enviar Mensagem</Button>
                  </form>
                </div>
              </AnimatedElement>
              
              <AnimatedElement direction="right">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary bg-opacity-10 p-3 rounded-full text-primary">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Telefone / WhatsApp</h4>
                        <p className="text-muted-foreground">65-3621-6000</p>
                        <div className="mt-2">
                          <WhatsAppButton
                            phoneNumber="+556536216000"
                            message="Olá, gostaria de falar sobre assistência técnica."
                            size="sm"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary bg-opacity-10 p-3 rounded-full text-primary">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-muted-foreground">atendimento@linkti.info</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary bg-opacity-10 p-3 rounded-full text-primary">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Endereço</h4>
                        <p className="text-muted-foreground">
                          Rua Odorico Tocantins, nr 125 - Quilombo<br />
                          Cuiabá-MT, 78045-170
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary bg-opacity-10 p-3 rounded-full text-primary">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Horário de Funcionamento</h4>
                        <p className="text-muted-foreground">Segunda a Sexta: 9h às 18h</p>
                        <p className="text-muted-foreground">Sábado: 8h às 12h</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Nossa Localização</h4>
                    <a 
                      href="https://maps.app.goo.gl/MCa4K2R7oNSHhzLu6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block h-[250px] rounded-md overflow-hidden hover:opacity-90 transition-opacity"
                    >
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.2555856403396!2d-56.06220012529709!3d-15.57887748509297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939da5edc0672077%3A0xe9c7716b268c8609!2sR.%20Odorico%20Tocantins%2C%20125%20-%20Quilombo%2C%20Cuiab%C3%A1%20-%20MT%2C%2078045-170!5e0!3m2!1spt-BR!2sbr!4v1715889955253!5m2!1spt-BR!2sbr" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </a>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      <div className="text-[6px] text-muted-foreground ml-4 mb-1">
        Não foi possível estabelecer conexão com o Strapi CMS. Exibindo conteúdo estático.
      </div>
    </div>
  );
};

export default Contato;
