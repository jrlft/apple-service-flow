
import { useEffect, useState } from "react";
import { fetchPage, fetchGoogleSheetPrices } from "@/lib/strapi";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimatedElement } from "@/components/animations/animated-element";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Tipos de dispositivos
const DEVICE_TYPES = [
  { id: "iphone", label: "iPhone" },
  { id: "ipad", label: "iPad" },
  { id: "mac", label: "Mac" },
  { id: "watch", label: "Apple Watch" }
];

// Fallback data (used when Google Sheets is unavailable)
const FALLBACK_PRICES = {
  iphone: [
    { model: "iPhone SE", repairType: "Troca de Tela", pixPrice: "R$ 290", cashPrice: "R$ 310", installments2to5: "R$ 320", installments6to10: "R$ 350" },
    { model: "iPhone 11", repairType: "Troca de Tela", pixPrice: "R$ 590", cashPrice: "R$ 610", installments2to5: "R$ 630", installments6to10: "R$ 650" },
    { model: "iPhone 12", repairType: "Troca de Tela", pixPrice: "R$ 890", cashPrice: "R$ 920", installments2to5: "R$ 950", installments6to10: "R$ 990" },
    { model: "iPhone 13", repairType: "Troca de Tela", pixPrice: "R$ 1090", cashPrice: "R$ 1130", installments2to5: "R$ 1160", installments6to10: "R$ 1200" }
  ],
  ipad: [
    { model: "iPad (7ª geração)", repairType: "Troca de Tela", pixPrice: "R$ 590", cashPrice: "R$ 610", installments2to5: "R$ 630", installments6to10: "R$ 650" },
    { model: "iPad Air", repairType: "Troca de Tela", pixPrice: "R$ 790", cashPrice: "R$ 830", installments2to5: "R$ 850", installments6to10: "R$ 880" }
  ],
  watch: [
    { model: "Apple Watch Series 3", repairType: "Troca de Bateria", pixPrice: "R$ 290", cashPrice: "R$ 310", installments2to5: "R$ 320", installments6to10: "R$ 330" },
    { model: "Apple Watch Series 7", repairType: "Troca de Tela", pixPrice: "R$ 790", cashPrice: "R$ 820", installments2to5: "R$ 840", installments6to10: "R$ 870" }
  ],
  mac: []
};

const Precos = () => {
  const [selectedDevice, setSelectedDevice] = useState("iphone");
  const [searchTerm, setSearchTerm] = useState("");
  const [priceData, setPriceData] = useState<any>(FALLBACK_PRICES);
  const [page, setPage] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSheetLoaded, setIsSheetLoaded] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        // Try to load page content from Strapi
        const pageData = await fetchPage("precos").catch(() => null);
        if (pageData) {
          setPage(pageData);
        }
        
        // Try to load price data from Google Sheets
        const sheetData = await fetchGoogleSheetPrices();
        if (sheetData) {
          setPriceData(sheetData);
          setIsSheetLoaded(true);
          // Set last updated time
          setLastUpdated(new Date().toLocaleString('pt-BR'));
        }
      } catch (error) {
        console.error("Error loading price data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
    
    // Set up a timer to refresh the sheet data periodically (every 5 minutes)
    const intervalId = setInterval(async () => {
      try {
        const sheetData = await fetchGoogleSheetPrices();
        if (sheetData) {
          setPriceData(sheetData);
          setIsSheetLoaded(true);
          setLastUpdated(new Date().toLocaleString('pt-BR'));
        }
      } catch (error) {
        console.error("Error refreshing price data:", error);
      }
    }, 5 * 60 * 1000); // 5 minutes
    
    return () => clearInterval(intervalId);
  }, []);

  // Filtrar dados com base na pesquisa
  const filteredData = (priceData[selectedDevice] || []).filter((item: any) => 
    item.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                {isSheetLoaded && (
                  <p className="text-xs mt-2 text-muted-foreground">
                    Dados sincronizados com Google Sheets • Última atualização: {lastUpdated}
                  </p>
                )}
              </div>
            </AnimatedElement>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <AnimatedElement>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
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

                {isLoading ? (
                  <div className="flex items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    {selectedDevice === 'mac' ? (
                      <div className="text-center py-8">
                        <h3 className="text-xl font-semibold mb-4">Orçamento Personalizado para Mac</h3>
                        <p className="text-muted-foreground mb-6">
                          Os valores para reparo de Mac dependem de análise técnica do aparelho e 
                          consulta dos valores das peças de acordo com o modelo específico.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
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
                      <div>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Modelo</TableHead>
                              <TableHead>Tipo de Reparo</TableHead>
                              <TableHead>PIX c/ Desconto</TableHead>
                              <TableHead>À Vista/Boleto</TableHead>
                              <TableHead>2-5x Cartão</TableHead>
                              <TableHead>6-10x Cartão</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {filteredData.length > 0 ? (
                              filteredData.map((item: any, index: number) => (
                                <TableRow key={index}>
                                  <TableCell className="font-medium">{item.model}</TableCell>
                                  <TableCell>{item.repairType}</TableCell>
                                  <TableCell className="font-medium text-primary">{item.pixPrice}</TableCell>
                                  <TableCell>{item.cashPrice}</TableCell>
                                  <TableCell>{item.installments2to5}</TableCell>
                                  <TableCell>{item.installments6to10}</TableCell>
                                </TableRow>
                              ))
                            ) : (
                              <TableRow>
                                <TableCell colSpan={6} className="text-center py-8">
                                  {searchTerm ? "Nenhum modelo encontrado com esse termo." : "Nenhum dado disponível para este dispositivo."}
                                </TableCell>
                              </TableRow>
                            )}
                          </TableBody>
                        </Table>
                        
                        {filteredData.length > 0 && !isSheetLoaded && (
                          <div className="mt-4 text-amber-600 bg-amber-50 p-3 rounded-md text-sm">
                            <p>
                              <strong>Nota:</strong> Não foi possível carregar os dados mais recentes do Google Sheets. 
                              Os valores exibidos podem estar desatualizados.
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                <div className="mt-6 text-sm text-muted-foreground">
                  <p>* Os preços podem variar de acordo com o modelo específico e condição do dispositivo.</p>
                  <p>* Esta tabela é apenas uma referência. Para um orçamento preciso, entre em contato conosco.</p>
                  <p>* Valores atualizados em {lastUpdated || new Date().toLocaleDateString('pt-BR')}</p>
                </div>

                {page?.attributes?.googleSheetsInfo && (
                  <div className="mt-8 bg-secondary/50 p-4 rounded-md">
                    <h3 className="text-lg font-semibold mb-3">Integração com Google Sheets</h3>
                    <p className="mb-4">{page.attributes.googleSheetsInfo}</p>
                  </div>
                )}
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
