import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

// Define tipos para os dados da tabela
type DeviceRepairPrice = {
  model: string;
  screenRepair: string;
  batteryReplacement: string;
}

type IPhoneRepair = DeviceRepairPrice & {
  backGlassRepair: string;
}

type IPadRepair = DeviceRepairPrice & {
  connectorRepair: string;
}

type MacRepair = DeviceRepairPrice & {
  keyboardRepair: string;
}

type WatchRepair = DeviceRepairPrice & {
  buttonRepair: string;
}

// Update types for new price structure
type RepairPrice = {
  model: string;
  repairType: string;
  pixPrice: string;
  cashPrice: string;
  installments2to5: string;
  installments6to10: string;
}

// Sample data structure for iPhone prices (you can edit these later)
const PRICE_DATA = {
  iphone: [
    { 
      model: "iPhone 15 Pro Max",
      repairType: "Troca de Tela",
      pixPrice: "R$ 2899",
      cashPrice: "R$ 2999",
      installments2to5: "R$ 3199",
      installments6to10: "R$ 3499"
    },
    {
      model: "iPhone 15 Pro Max",
      repairType: "Troca de Bateria",
      pixPrice: "R$ 799",
      cashPrice: "R$ 899",
      installments2to5: "R$ 999",
      installments6to10: "R$ 1099"
    }
  ] as RepairPrice[],
  ipad: [
    { model: "iPad 9ª geração", screenRepair: "R$ 999", batteryReplacement: "R$ 599", connectorRepair: "R$ 499" },
    { model: "iPad Air", screenRepair: "R$ 1399", batteryReplacement: "R$ 699", connectorRepair: "R$ 599" },
    { model: "iPad Pro 11\"", screenRepair: "R$ 1899", batteryReplacement: "R$ 799", connectorRepair: "R$ 699" },
    { model: "iPad Pro 12.9\"", screenRepair: "R$ 2399", batteryReplacement: "R$ 899", connectorRepair: "R$ 799" }
  ] as IPadRepair[],
  mac: [
    { model: "MacBook Air", screenRepair: "R$ 2499", batteryReplacement: "R$ 1299", keyboardRepair: "R$ 1499" },
    { model: "MacBook Pro 13\"", screenRepair: "R$ 2999", batteryReplacement: "R$ 1399", keyboardRepair: "R$ 1699" },
    { model: "MacBook Pro 14\"", screenRepair: "R$ 3499", batteryReplacement: "R$ 1499", keyboardRepair: "R$ 1899" },
    { model: "MacBook Pro 16\"", screenRepair: "R$ 4499", batteryReplacement: "R$ 1699", keyboardRepair: "R$ 2099" },
    { model: "iMac 24\"", screenRepair: "R$ 3999", batteryReplacement: "N/A", keyboardRepair: "R$ 999" }
  ] as MacRepair[],
  watch: [
    { model: "Apple Watch SE", screenRepair: "R$ 599", batteryReplacement: "R$ 399", buttonRepair: "R$ 299" },
    { model: "Apple Watch Series 6", screenRepair: "R$ 799", batteryReplacement: "R$ 499", buttonRepair: "R$ 399" },
    { model: "Apple Watch Series 7", screenRepair: "R$ 899", batteryReplacement: "R$ 549", buttonRepair: "R$ 449" },
    { model: "Apple Watch Series 8", screenRepair: "R$ 999", batteryReplacement: "R$ 599", buttonRepair: "R$ 499" },
    { model: "Apple Watch Ultra", screenRepair: "R$ 1599", batteryReplacement: "R$ 799", buttonRepair: "R$ 699" }
  ] as WatchRepair[],
};

// Tipos de dispositivos
const DEVICE_TYPES = [
  { id: "iphone", label: "iPhone" },
  { id: "ipad", label: "iPad" },
  { id: "mac", label: "Mac" },
  { id: "watch", label: "Apple Watch" }
];

const Precos = () => {
  const [selectedDevice, setSelectedDevice] = useState("iphone");
  const [searchTerm, setSearchTerm] = useState("");

  // Obter dados para o dispositivo selecionado
  const priceData = PRICE_DATA[selectedDevice as keyof typeof PRICE_DATA];

  // Filtrar dados com base na pesquisa
  const filteredData = priceData.filter(item => 
    item.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get table headers based on device type
  const getTableHeaders = () => {
    if (selectedDevice === 'mac') {
      return ['Informação de Preços'];
    }
    return [
      'Modelo',
      'Tipo de Reparo',
      'PIX c/ Desconto',
      'À Vista/3x',
      '2-5x Cartão',
      '6-10x Cartão'
    ];
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
                  title="Tabela de Preços" 
                  subtitle="Valores de referência para os serviços mais comuns" 
                  centered
                />
                <p className="text-muted-foreground">
                  Consulte abaixo os valores para os serviços mais solicitados em cada tipo de dispositivo Apple.
                  Para outros serviços ou modelos não listados, entre em contato para um orçamento personalizado.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <AnimatedElement>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {DEVICE_TYPES.map(device => (
                      <Button 
                        key={device.id}
                        variant={selectedDevice === device.id ? "default" : "outline"} 
                        onClick={() => setSelectedDevice(device.id)}
                      >
                        {device.label}
                      </Button>
                    ))}
                  </div>
                  <div className="w-full md:w-64">
                    <Input
                      placeholder="Buscar modelo..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  {selectedDevice === 'mac' ? (
                    <div className="text-center py-8">
                      <h3 className="text-xl font-semibold mb-4">Orçamento Personalizado para Mac</h3>
                      <p className="text-muted-foreground mb-6">
                        Os valores para reparo de Mac dependem de análise técnica do aparelho e 
                        consulta dos valores das peças de acordo com o modelo específico.
                      </p>
                      <div className="flex justify-center gap-4">
                        <Button asChild>
                          <Link to="/contato">Entre em Contato</Link>
                        </Button>
                        <WhatsAppButton 
                          phoneNumber="+556536216000"
                          message="Olá, gostaria de solicitar um orçamento para reparo do meu Mac."
                        >
                          Orçamento via WhatsApp
                        </WhatsAppButton>
                      </div>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse min-w-[800px]">
                        <thead>
                          <tr className="bg-secondary border-b">
                            {getTableHeaders().map((header, index) => (
                              <th key={index} className="py-3 px-4 text-left font-medium">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {selectedDevice === 'iphone' && PRICE_DATA.iphone
                            .filter(item => 
                              item.model.toLowerCase().includes(searchTerm.toLowerCase())
                            )
                            .map((item, index) => (
                              <tr key={index} className={`border-b ${
                                index % 2 === 0 ? 'bg-white' : 'bg-secondary/30'
                              } hover:bg-secondary/50 transition-colors`}>
                                <td className="py-3 px-4">{item.model}</td>
                                <td className="py-3 px-4">{item.repairType}</td>
                                <td className="py-3 px-4 font-medium text-primary">
                                  {item.pixPrice}
                                </td>
                                <td className="py-3 px-4">{item.cashPrice}</td>
                                <td className="py-3 px-4">{item.installments2to5}</td>
                                <td className="py-3 px-4">{item.installments6to10}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                <div className="mt-6 text-sm text-muted-foreground">
                  <p>* Os preços podem variar de acordo com o modelo específico e condição do dispositivo.</p>
                  <p>* Esta tabela é apenas uma referência. Para um orçamento preciso, entre em contato conosco.</p>
                  <p>* Valores atualizados em {new Date().toLocaleDateString()}</p>
                </div>

                <div className="mt-8 bg-secondary/50 p-4 rounded-md">
                  <h3 className="text-lg font-semibold mb-3">Integração com Google Sheets</h3>
                  <p className="mb-4">
                    Esta tabela pode ser sincronizada com uma planilha do Google Sheets para facilitar 
                    a atualização de preços. Para implementar essa funcionalidade, será necessário 
                    configurar a integração com a API do Google Sheets.
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <p className="text-sm text-muted-foreground">
                      Placeholder para futura integração com Google Sheets
                    </p>
                    <Button variant="outline">Configurar Integração</Button>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </section>

        <section className="py-16 bg-primary text-white mt-12">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedElement>
                <h2 className="text-3xl font-bold mb-6">Não encontrou o que procura?</h2>
                <p className="text-lg mb-8 opacity-90">
                  Entre em contato conosco para um orçamento personalizado para seu dispositivo.
                  Nossa equipe está pronta para ajudar com qualquer reparo específico que você precise.
                </p>
                <Button asChild size="lg" variant="secondary">
                  <a href="/contato">Solicitar Orçamento</a>
                </Button>
              </AnimatedElement>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Precos;
