
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contato = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Formulário enviado com sucesso! Em um site real, isso enviaria os dados para um servidor.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <section className="bg-secondary py-16">
          <div className="container">
            <AnimatedElement>
              <div className="max-w-3xl mx-auto text-center">
                <SectionTitle 
                  title="Entre em Contato" 
                  subtitle="Estamos aqui para ajudar com seu dispositivo Apple" 
                  centered
                />
                <p className="text-muted-foreground">
                  Precisa de assistência técnica para seu dispositivo Apple? Entre em contato conosco 
                  através de um dos nossos canais de atendimento ou preencha o formulário abaixo.
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
                        <h4 className="font-semibold mb-1">Telefone</h4>
                        <p className="text-muted-foreground">(65) 3621-6000</p>
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
                        <p className="text-muted-foreground">contato@linkti.info</p>
                        <p className="text-muted-foreground">suporte@linkti.info</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary bg-opacity-10 p-3 rounded-full text-primary">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Endereço</h4>
                        <p className="text-muted-foreground">
                          Av. Historiador Rubens de Mendonça<br />
                          Cuiabá - MT
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
                        <p className="text-muted-foreground">Sábado: 9h às 13h</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Nossa Localização</h4>
                    <div className="h-[250px] bg-gray-200 rounded-md flex items-center justify-center">
                      <span className="text-gray-500">Mapa Placeholder</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      * Em um site real, este bloco conteria um mapa interativo do Google Maps 
                      com a localização exata da loja.
                    </p>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
