
import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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

// Dados simulados para tabela de preços
const PRICE_DATA = {
  iphone: [
    { model: "iPhone SE", screenRepair: "R$ 499", batteryReplacement: "R$ 299", backGlassRepair: "R$ 399" },
    { model: "iPhone 11", screenRepair: "R$ 799", batteryReplacement: "R$ 399", backGlassRepair: "R$ 499" },
    { model: "iPhone 12", screenRepair: "R$ 999", batteryReplacement: "R$ 499", backGlassRepair: "R$ 599" },
    { model: "iPhone 13", screenRepair: "R$ 1299", batteryReplacement: "R$ 599", backGlassRepair: "R$ 699" },
    { model: "iPhone 14", screenRepair: "R$ 1599", batteryReplacement: "R$ 699", backGlassRepair: "R$ 799" },
    { model: "iPhone 15", screenRepair: "R$ 1899", batteryReplacement: "R$ 799", backGlassRepair: "R$ 999" }
  ] as IPhoneRepair[],
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

  // Colunas de cabeçalho com base no tipo de dispositivo
  const getTableHeaders = () => {
    switch (selectedDevice) {
      case 'iphone':
        return ['Modelo', 'Reparo de Tela', 'Troca de Bateria', 'Reparo de Tampa Traseira'];
      case 'ipad':
        return ['Modelo', 'Reparo de Tela', 'Troca de Bateria', 'Reparo de Conector'];
      case 'mac':
        return ['Modelo', 'Reparo de Tela', 'Troca de Bateria', 'Reparo de Teclado'];
      case 'watch':
        return ['Modelo', 'Reparo de Tela', 'Troca de Bateria', 'Reparo de Botões'];
      default:
        return ['Modelo', 'Reparo de Tela', 'Troca de Bateria', 'Outro Reparo'];
    }
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
                  <table className="w-full border-collapse">
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
                      {filteredData.map((item, index) => (
                        <tr 
                          key={index} 
                          className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-secondary/30'} hover:bg-secondary/50 transition-colors`}
                        >
                          <td className="py-3 px-4 font-medium">{item.model}</td>
                          <td className="py-3 px-4">{item.screenRepair}</td>
                          <td className="py-3 px-4">{item.batteryReplacement}</td>
                          <td className="py-3 px-4">
                            {selectedDevice === 'iphone' && (item as IPhoneRepair).backGlassRepair}
                            {selectedDevice === 'ipad' && (item as IPadRepair).connectorRepair}
                            {selectedDevice === 'mac' && (item as MacRepair).keyboardRepair}
                            {selectedDevice === 'watch' && (item as WatchRepair).buttonRepair}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
