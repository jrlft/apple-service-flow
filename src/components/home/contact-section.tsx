import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { toast } from "@/components/ui/use-toast";

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, we'll use a toast notification to indicate submission
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    // Actual form submission would be implemented with backend integration
    // This would require a backend API or service like Supabase or a custom API endpoint
  };

  return (
    <section className="py-20">
      <div className="container">
        <AnimatedElement>
          <SectionTitle 
            title="Entre em Contato" 
            subtitle="Estamos aqui para ajudar!" 
            centered
          />
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <AnimatedElement direction="left">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Envie sua mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
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
                    <option value="airpods">AirPods</option>
                    <option value="other">Outro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Mensagem
                  </label>
                  <Textarea id="message" placeholder="Descreva o problema com seu dispositivo" rows={5} required />
                </div>
                
                <Button type="submit" className="w-full">Enviar Mensagem</Button>
                
                <div className="text-center mt-6 space-y-3">
                  <WhatsAppButton 
                    phoneNumber="+556536216000" 
                    message="Olá, gostaria de informações sobre assistência técnica para dispositivos Apple."
                    className="w-full"
                  >
                    Prefere WhatsApp? Clique aqui
                  </WhatsAppButton>
                  
                  <Button 
                    asChild 
                    variant="destructive" 
                    className="w-full"
                  >
                    <a 
                      href="https://getsupport.apple.com/repair-locations?storeId=442491"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Se desejar, agende um horário conosco!
                    </a>
                  </Button>
                </div>
              </form>
            </div>
          </AnimatedElement>
          
          <AnimatedElement direction="right">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefone / WhatsApp</h4>
                    <p className="text-muted-foreground">65-3621-6000</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:atendimento@linkti.info" className="text-muted-foreground hover:text-primary transition-colors">
                      atendimento@linkti.info
                    </a>
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
              
              <div className="mt-8">
                <h4 className="font-semibold mb-3">Localização</h4>
                <a 
                  href="https://maps.app.goo.gl/MCa4K2R7oNSHhzLu6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-[200px] bg-gray-200 rounded-md overflow-hidden hover:opacity-90 transition-opacity"
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
  );
}
