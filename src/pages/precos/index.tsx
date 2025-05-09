
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { AnimatedElement } from "@/components/animations/animated-element";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { DEVICE_TYPES } from "./constants";
import { usePriceData } from "./hooks/usePriceData";
import { DeviceFilter } from "./components/DeviceFilter";
import { PriceTable } from "./components/PriceTable";
import { PageHeader } from "./components/PageHeader";
import { CallToAction } from "./components/CallToAction";
import { PriceInfo } from "./components/PriceInfo";

const Precos = () => {
  const [selectedDevice, setSelectedDevice] = useState("iphone");
  const [searchTerm, setSearchTerm] = useState("");
  const { priceData, page, isLoading, isSheetLoaded } = usePriceData();

  // Filtrar dados com base na pesquisa
  const filteredData = (priceData[selectedDevice] || []).filter((item: any) => {
    if (!searchTerm) return true;
    return item.model.toLowerCase().includes(searchTerm.toLowerCase()) || 
           item.repairType.toLowerCase().includes(searchTerm.toLowerCase());
  });

  console.log("Current price data:", priceData);
  console.log("Selected device data:", priceData[selectedDevice]);
  console.log("Filtered data:", filteredData);
  console.log("Search term:", searchTerm);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <PageHeader 
          title={page?.attributes?.title || "Tabela de Preços"}
          subtitle={page?.attributes?.subtitle || "Confira os valores de reparo para cada dispositivo Apple"}
          isSheetLoaded={isSheetLoaded}
        />

        <section className="py-12">
          <div className="container">
            <AnimatedElement>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <DeviceFilter 
                    devices={DEVICE_TYPES}
                    selectedDevice={selectedDevice}
                    onDeviceChange={setSelectedDevice}
                  />
                  <div className="w-full md:w-64">
                    <Input
                      placeholder="Buscar modelo..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <PriceTable
                    selectedDevice={selectedDevice}
                    filteredData={filteredData}
                    isLoading={isLoading}
                    searchTerm={searchTerm}
                    isSheetLoaded={isSheetLoaded}
                  />
                </div>

                <PriceInfo 
                  googleSheetsInfo={page?.attributes?.googleSheetsInfo} 
                />
              </div>
            </AnimatedElement>
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Precos;
