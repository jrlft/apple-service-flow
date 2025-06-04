
import { useState, useEffect } from "react";
import { fetchPage } from "@/lib/strapi";
import { SHEET_IDS } from "../constants";
import { fetchSheetData } from "../utils/googleSheetsApi";
import { processCSVData, processSheetData } from "../utils/dataProcessors";

export const usePriceData = () => {
  // Removido FALLBACK_PRICES - não vamos mais usar dados inventados
  const [priceData, setPriceData] = useState<any>({});
  const [page, setPage] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSheetLoaded, setIsSheetLoaded] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const [error, setError] = useState<string>("");

  const loadSheetData = async (deviceType: string = "iphone") => {
    setIsLoading(true);
    setError("");
    
    try {
      const sheetId = SHEET_IDS[deviceType as keyof typeof SHEET_IDS] || SHEET_IDS.iphone;
      console.log(`Tentando carregar dados para ${deviceType} do sheet ID: ${sheetId}`);
      
      const result = await fetchSheetData(sheetId, deviceType);
      
      let processedData;
      if (result.format === 'csv') {
        processedData = processCSVData(result.data, deviceType);
      } else {
        processedData = processSheetData(result.data, deviceType);
      }
      
      if (processedData && processedData[deviceType] && processedData[deviceType].length > 0) {
        setPriceData(prevData => ({
          ...prevData,
          [deviceType]: processedData[deviceType]
        }));
        
        setIsSheetLoaded(true);
        setLastUpdated(new Date().toLocaleString('pt-BR'));
        console.log(`✅ Carregados ${processedData[deviceType].length} itens para ${deviceType}`);
      } else {
        console.warn(`⚠️ Nenhum dado válido encontrado para ${deviceType}`);
        setError(`Não foi possível carregar dados para ${deviceType}`);
        // Limpar dados anteriores se não conseguir carregar novos
        setPriceData(prevData => ({
          ...prevData,
          [deviceType]: []
        }));
      }
    } catch (error) {
      console.error(`❌ Erro ao carregar dados para ${deviceType}:`, error);
      setError(`Erro ao conectar com a planilha do Google Sheets`);
      // Limpar dados se houver erro
      setPriceData(prevData => ({
        ...prevData,
        [deviceType]: []
      }));
    } finally {
      setIsLoading(false);
    }
  };

  // Load page data from Strapi when component mounts
  useEffect(() => {
    const loadPageData = async () => {
      try {
        const pageData = await fetchPage("precos");
        if (pageData) {
          setPage(pageData);
        }
      } catch (error) {
        console.error("Error loading page data from Strapi:", error);
      }
    };
    
    loadPageData();
  }, []);

  // Load initial sheet data
  useEffect(() => {
    loadSheetData("iphone");
    
    // Refresh data every 15 minutes
    const intervalId = setInterval(() => {
      console.log("🔄 Atualizando dados da planilha");
      loadSheetData("iphone");
    }, 15 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  const loadDeviceData = (deviceType: string) => {
    if (deviceType === 'mac') return;
    loadSheetData(deviceType);
  };

  return {
    priceData,
    page,
    isLoading,
    isSheetLoaded,
    lastUpdated,
    error,
    loadDeviceData
  };
};
