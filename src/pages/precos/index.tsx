
import { useState, useEffect } from "react";
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
import { Helmet } from "react-helmet";

const Precos = () => {
  const [selectedDevice, setSelectedDevice] = useState("iphone");
  const [searchTerm, setSearchTerm] = useState("");
  const { priceData, page, isLoading, isSheetLoaded, lastUpdated, loadDeviceData } = usePriceData();

  // Load device data when selection changes
  useEffect(() => {
    loadDeviceData(selectedDevice);
  }, [selectedDevice]);

  // Handle device selection change
  const handleDeviceChange = (device: string) => {
    setSelectedDevice(device);
    setSearchTerm(""); // Clear search when changing device
  };

  // Filtrar dados com base na pesquisa
  const filteredData = (priceData[selectedDevice] || []).filter((item: any) => {
    if (!searchTerm.trim()) return true;
    
    const searchLower = searchTerm.toLowerCase().trim();
    const modelLower = (item.model || "").toLowerCase();
    const repairLower = (item.repairType || "").toLowerCase();
    
    return modelLower.includes(searchLower) || repairLower.includes(searchLower);
  });

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
        <PageHeader 
          title={page?.attributes?.title || "Tabela de Preços"}
          subtitle={page?.attributes?.subtitle || "Confira os valores de reparo para cada dispositivo Apple"}
          isSheetLoaded={isSheetLoaded}
          lastUpdated={lastUpdated}
        />

        <section className="py-12">
          <div className="container">
            <AnimatedElement>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <DeviceFilter 
                    devices={DEVICE_TYPES}
                    selectedDevice={selectedDevice}
                    onDeviceChange={handleDeviceChange}
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
      {!isSheetLoaded && (
        <div className="text-[6px] text-muted-foreground ml-4 mb-1">
          Não foi possível estabelecer conexão com o Strapi CMS. Exibindo conteúdo estático.
        </div>
      )}
    </div>
  );
};

export default Precos;
