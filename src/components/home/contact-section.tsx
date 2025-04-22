
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Formulário enviado com sucesso! Em um site real, isso enviaria os dados para um servidor.");
  };

  return (
    <section className="py-20">
      <div className="container">
        <AnimatedElement>
          <SectionTitle 
            title="Entre em Contato" 
            subtitle="Estamos prontos para ajudar com seu dispositivo Apple" 
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
                    <h4 className="font-semibold mb-1">Telefone</h4>
                    <p className="text-muted-foreground">(00) 0000-0000</p>
                    <p className="text-muted-foreground">(00) 0000-0000</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">contato@exemplo.com</p>
                    <p className="text-muted-foreground">suporte@exemplo.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      Av. Exemplo, 123 - Bairro<br />
                      Cidade - Estado, 00000-000
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
              
              <div className="mt-8">
                <h4 className="font-semibold mb-3">Localização</h4>
                <div className="h-[200px] bg-gray-200 rounded-md flex items-center justify-center">
                  <span className="text-gray-500">Mapa Placeholder</span>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
