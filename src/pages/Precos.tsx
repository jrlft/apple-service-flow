import { useEffect, useState } from "react";
import { fetchPage } from "@/lib/strapi";
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
// Os dados de preços virão do Strapi via CMS, não mais hardcoded.

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
  const [priceData, setPriceData] = useState<any>({});
  const [page, setPage] = useState<any>(null);

  useEffect(() => {
    fetchPage("precos").then((data) => {
      setPage(data);
      setPriceData(data?.attributes?.prices || {});
    });
  }, []);

  // Filtrar dados com base na pesquisa
  const filteredData = (priceData[selectedDevice] || []).filter((item: any) => 
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
                  title={page?.attributes?.title || "Tabela de Preços"} 
                  subtitle={page?.attributes?.subtitle || "Confira os valores de reparo para cada dispositivo Apple"} 
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
                          {filteredData.map((item, index) => (
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
                  <p>* Valores atualizados em {page?.attributes?.updatedAt ? new Date(page.attributes.updatedAt).toLocaleDateString() : new Date().toLocaleDateString()}</p>
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
