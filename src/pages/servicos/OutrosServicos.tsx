
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Headphones, Smartphone, HardDrive } from "lucide-react";

const OutrosServicos = () => {
  const servicosExtras = [
    {
      categoria: "Limpeza Física",
      itens: [
        { dispositivo: "iPhone", preco: "R$ 50,00", descricao: "Limpeza interna e externa completa" },
        { dispositivo: "iPad", preco: "R$ 70,00", descricao: "Limpeza interna e externa completa" },
        { dispositivo: "MacBook", preco: "R$ 120,00", descricao: "Limpeza interna e externa, teclado e tela" },
        { dispositivo: "iMac", preco: "R$ 150,00", descricao: "Limpeza interna e externa completa" },
        { dispositivo: "Apple Watch", preco: "R$ 30,00", descricao: "Limpeza externa e pulseira" }
      ]
    },
    {
      categoria: "Backup e Restauração",
      itens: [
        { dispositivo: "iPhone/iPad", preco: "R$ 80,00", descricao: "Backup completo e restauração de dados" },
        { dispositivo: "Mac", preco: "R$ 150,00", descricao: "Time Machine ou backup personalizado" },
        { dispositivo: "Recuperação de dados", preco: "A partir de R$ 200,00", descricao: "Recuperação de arquivos perdidos" }
      ]
    },
    {
      categoria: "Locação de Smartphones",
      itens: [
        { dispositivo: "iPhone temporário", preco: "R$ 25,00/dia", descricao: "Locação de iPhone durante reparo do seu dispositivo" },
        { dispositivo: "iPhone básico", preco: "R$ 120,00/semana", descricao: "Locação semanal de iPhone com funcionalidades básicas" },
        { dispositivo: "iPhone premium", preco: "R$ 200,00/semana", descricao: "Locação semanal de iPhone com todas as funcionalidades" }
      ]
    },
    {
      categoria: "Diagnóstico e Consultoria",
      itens: [
        { dispositivo: "Diagnóstico completo", preco: "R$ 60,00", descricao: "Análise detalhada do dispositivo" },
        { dispositivo: "Consultoria técnica", preco: "R$ 100,00/hora", descricao: "Orientação técnica especializada" },
        { dispositivo: "Setup inicial", preco: "R$ 120,00", descricao: "Configuração inicial de novos dispositivos" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="bg-secondary py-16">
          <div className="container">
            <AnimatedElement>
              <div className="max-w-4xl mx-auto text-center">
                <SectionTitle 
                  title="Outros Serviços" 
                  subtitle="Serviços especializados para todos os seus dispositivos Apple" 
                  centered
                />
                <p className="text-muted-foreground">
                  Além dos reparos tradicionais, oferecemos uma gama completa de serviços para manter seus dispositivos Apple funcionando perfeitamente.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </section>

        {/* Seção Beats, Locação e Recuperação */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <AnimatedElement direction="left">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <div className="bg-primary bg-opacity-10 p-4 rounded-full w-fit mb-4 text-primary">
                    <Headphones className="h-12 w-12" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Beats</h3>
                  <p className="text-muted-foreground mb-6">
                    Serviços completos para fones Beats, incluindo reparo de drivers, substituição de almofadas, 
                    problemas de cabo e manutenção geral.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li>• Reparo de drivers</li>
                    <li>• Substituição de almofadas</li>
                    <li>• Reparo de cabos</li>
                    <li>• Manutenção preventiva</li>
                  </ul>
                  <WhatsAppButton
                    phoneNumber="+556536216000"
                    message="Olá, gostaria de informações sobre reparo de fones Beats."
                    className="w-full"
                  >
                    Orçamento para Beats
                  </WhatsAppButton>
                </div>
              </AnimatedElement>

              <AnimatedElement>
                <div className="bg-white rounded-lg shadow-md p-8">
                  <div className="bg-primary bg-opacity-10 p-4 rounded-full w-fit mb-4 text-primary">
                    <Smartphone className="h-12 w-12" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Locação</h3>
                  <p className="text-muted-foreground mb-6">
                    Aluguel de smartphones temporários para uso durante o período de reparo do seu dispositivo, 
                    mantendo você sempre conectado.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li>• iPhone temporário</li>
                    <li>• Locação diária ou semanal</li>
                    <li>• Modelos básicos e premium</li>
                    <li>• Setup incluído</li>
                  </ul>
                  <WhatsAppButton
                    phoneNumber="+556536216000"
                    message="Olá, gostaria de informações sobre locação de smartphones."
                    className="w-full"
                  >
                    Solicitar Locação
                  </WhatsAppButton>
                </div>
              </AnimatedElement>

              <AnimatedElement direction="right">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <div className="bg-primary bg-opacity-10 p-4 rounded-full w-fit mb-4 text-primary">
                    <HardDrive className="h-12 w-12" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Recuperação</h3>
                  <p className="text-muted-foreground mb-6">
                    Serviços especializados em recuperação de dados perdidos, backup completo e restauração 
                    de informações importantes dos seus dispositivos.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li>• Recuperação de fotos e vídeos</li>
                    <li>• Backup completo</li>
                    <li>• Restauração de contatos</li>
                    <li>• Migração de dados</li>
                  </ul>
                  <WhatsAppButton
                    phoneNumber="+556536216000"
                    message="Olá, gostaria de informações sobre recuperação de dados."
                    className="w-full"
                  >
                    Recuperar Dados
                  </WhatsAppButton>
                </div>
              </AnimatedElement>
            </div>

            {/* Tabela de Outros Serviços */}
            <AnimatedElement>
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Tabela de Preços - Serviços Especiais</h3>
                <p className="text-muted-foreground text-center mb-8">
                  Confira nossa tabela de preços para serviços especializados. Valores sujeitos a alteração mediante avaliação.
                </p>
                
                {servicosExtras.map((categoria, index) => (
                  <div key={index} className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-primary">{categoria.categoria}</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Dispositivo/Serviço</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Preço</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Descrição</th>
                          </tr>
                        </thead>
                        <tbody>
                          {categoria.itens.map((item, itemIndex) => (
                            <tr key={itemIndex} className="hover:bg-gray-50">
                              <td className="border border-gray-300 px-4 py-3">{item.dispositivo}</td>
                              <td className="border border-gray-300 px-4 py-3 font-semibold text-primary">{item.preco}</td>
                              <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">{item.descricao}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}

                <div className="bg-yellow-50 p-4 rounded-lg mt-6">
                  <p className="text-sm text-gray-700">
                    <strong>Observações:</strong> Todos os preços são estimativas e podem variar conforme a complexidade do reparo. 
                    Oferecemos orçamento gratuito e sem compromisso. Garantia de 90 dias para todos os serviços.
                  </p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedElement>
                <h2 className="text-3xl font-bold mb-6">Precisa de um serviço personalizado?</h2>
                <p className="text-lg mb-8 opacity-90">
                  Entre em contato conosco para serviços não listados ou orçamentos personalizados.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" variant="secondary">
                    <a href="/contato">Entre em Contato</a>
                  </Button>
                  <WhatsAppButton
                    phoneNumber="+556536216000"
                    message="Olá, gostaria de informações sobre serviços especializados."
                    size="lg"
                    className="bg-whatsapp hover:bg-whatsapp/90"
                  >
                    WhatsApp
                  </WhatsAppButton>
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

export default OutrosServicos;
